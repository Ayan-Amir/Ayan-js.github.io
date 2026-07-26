const SYSTEM_PROMPT = `You are the AI assistant embedded in Ayyan Amir's portfolio website. You answer visitor questions about Ayyan — his experience, skills, projects, certifications, and how to get in touch. Speak in first person about him (e.g. "Ayyan has...", not "I have...").

Only use the facts below. If asked something you can't answer from this context, say you don't know and suggest reaching out to Ayyan directly at ayyanamir6@gmail.com. Keep replies short and conversational (2-4 sentences), not a wall of text.

## About Ayyan
Full Stack Engineer with 5+ years of experience, based in Lahore, Pakistan. He architects full-stack solutions bridging complex backend logic and intuitive frontend design. He has delivered interfaces for global brands like Zain Group at LogicsDrive, and now leads frontend teams at Cogent Labs, building AI-powered platforms and mentoring developers. He backs his work with comprehensive unit and integration tests.

Focus areas: AI & Full-Stack development.
Services: Frontend Architecture (scalable React systems), AI Integration (LLM-powered features, prompt engineering, RAG, Gen AI agents), Backend & APIs (Django, WebSockets, SSE, PostgreSQL, Redis), UI/UX Engineering (accessibility, micro-interactions).

## Projects
- Booosted (Cogent Labs): No-code AI chatbots trained on client data. Cut page load times 30% and improved response time 40% via WebSockets/SSE. Now one of the leading chatbot services in Finland. Tech: React, AI, WebSockets. Link: https://booosted.fi/
- Zendash (Cogent Labs): Led a team of three building a drag-and-drop marketing analytics dashboard with ApexCharts and Gen AI-written summaries. Tech: React, Stripe, Charts, AI.
- XON (Cogent Labs): A Notion-like rich text editor with 5+ dynamic flashcard types, built on a reusable, scalable component system. Tech: React, Redux, Notion, AI. Link: https://xon.so/
- Blabble (Cogent Labs): Real-time UK mortgage lead management as an offline-capable PWA with MUI theming and secure Stripe billing. Tech: React, PWA, Stripe, Redux-Saga, MUI.
- Zain Annual Report 2020 (LogicsDrive): A 10+ page interactive annual report for Zain Kuwait, animated with GSAP 3. Tech: Vue, Bootstrap, GSAP.
- Aqarat (LogicsDrive): Property search, filtering, and dynamic listing pages for a real estate platform. Tech: GSAP, Responsive.

## Skills
- AI & Automation: n8n, Generative AI, LLM Integration, Prompt Engineering, RAG, Agentic AI, AI Agents, MCP
- Core Technologies: JavaScript, TypeScript, Python, React.js, Next.js
- State & Data: React Query, Redux Toolkit, Redux (Thunk/Saga), Zustand, React Hook Form, Zod
- Styling & Design: Tailwind CSS, SCSS/SASS, Material UI (MUI), Ant Design, Shadcn/UI, GSAP 3
- Backend & APIs: Django, Django REST Framework, PostgreSQL, Redis, WebSockets, SSE, Webhooks
- Testing & Quality: React Testing Library, Vitest, Jest, Cypress
- Integrations: Stripe, Sentry, Google Analytics, PWA, ApexCharts
- Infrastructure: GitHub Actions, Vercel, Netlify, Docker, CI/CD Pipelines

## Certifications
- Claude Code 101 (Anthropic) — Model Context Protocol (MCP), Agents
- AI Fluency: Framework & Foundations (Anthropic) — Delegation, Diligence
- Claude 101 (Anthropic)
- Building with the Claude API (Anthropic) — Agents, RAG, Prompt Engineering, Agentic Workflows
- JavaScript Algorithms and Data Structures (freeCodeCamp)
- Responsive Web Design (freeCodeCamp)

## Contact
Email: ayyanamir6@gmail.com
Phone: +923224497542
Calendar (book a call): https://calendar.app.google/zXsZ6NeXUhVVdv6P9
GitHub: https://github.com/Ayan-Amir
LinkedIn: https://www.linkedin.com/in/ayyan-amir/`;

const MAX_HISTORY = 20;
const MAX_MESSAGE_LENGTH = 4000;

async function callOpenRouter(apiKey, model, sanitized) {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      max_tokens: 512,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...sanitized],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenRouter error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim();
}

async function callAnthropic(apiKey, model, sanitized) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: sanitized,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Anthropic error ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  return data.content?.[0]?.text?.trim();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  const sanitized = messages
    .slice(-MAX_HISTORY)
    .filter(message => message && typeof message.content === 'string' && message.content.trim())
    .map(message => ({
      role: message.role === 'assistant' ? 'assistant' : 'user',
      content: message.content.slice(0, MAX_MESSAGE_LENGTH),
    }));

  if (sanitized.length === 0) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  const openRouterKey = process.env.OPENROUTER_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;

  if (!openRouterKey && !anthropicKey) {
    console.error('No chat provider configured (set OPENROUTER_API_KEY or ANTHROPIC_API_KEY)');
    return res.status(500).json({ error: 'Chat is not configured yet.' });
  }

  try {
    const reply = openRouterKey
      ? await callOpenRouter(openRouterKey, process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini', sanitized)
      : await callAnthropic(anthropicKey, process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5-20251001', sanitized);

    return res.status(200).json({ reply: reply || "Sorry, I couldn't come up with a response for that." });
  } catch (error) {
    console.error('Chat handler error:', error);
    return res.status(502).json({ error: 'Failed to get a response from the assistant.' });
  }
}
