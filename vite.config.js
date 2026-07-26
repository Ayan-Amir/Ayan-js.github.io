import path from 'path';
import { pathToFileURL } from 'url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

// Lets `yarn dev` serve the Vercel serverless function at api/chat.js locally,
// since plain Vite has no concept of the /api directory.
function apiDevMiddleware() {
  return {
    name: 'api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          return res.end('Method Not Allowed');
        }

        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);
        const rawBody = Buffer.concat(chunks).toString('utf-8');

        try {
          req.body = rawBody ? JSON.parse(rawBody) : {};
        } catch {
          req.body = {};
        }

        res.status = code => {
          res.statusCode = code;
          return res;
        };
        res.json = payload => {
          res.setHeader('content-type', 'application/json');
          res.end(JSON.stringify(payload));
        };

        try {
          const chatModuleUrl = pathToFileURL(path.resolve(__dirname, 'api/chat.js')).href;
          const { default: handler } = await import(`${chatModuleUrl}?t=${Date.now()}`);
          await handler(req, res);
        } catch (error) {
          console.error('api/chat.js error:', error);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Internal error' }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Load .env, .env.local, etc. (including unprefixed keys) into process.env
  // so the middleware above and api/chat.js can read OPENROUTER_API_KEY / ANTHROPIC_API_KEY.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return {
    plugins: [
      react(),
      tailwindcss(),
      svgr({
        svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
        include: '**/*.svg',
      }),
      apiDevMiddleware(),
    ],
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/tests/setup.js',
      coverage: {
        include: ['src/**/*.{js,jsx}'],
      },
    },
    resolve: {
      alias: {
        '#': path.resolve(__dirname, './src'),
      },
    },

    server: {
      host: true,
      port: Number(process.env.PORT) || 3000,
    },

    build: {
      sourcemap: true,
      outDir: 'dist',
    },
  };
});
