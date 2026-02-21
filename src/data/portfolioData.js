export const SKILL_ICONS = {
  frontend: [
    { id: 'react-icon', name: 'React', color: 'cyan' },
    { id: 'js-icon', name: 'JavaScript', color: 'yellow' },
    { id: 'tailwindcss-icon', name: 'Tailwind CSS', color: 'sky' },
    { id: 'html-icon', name: 'HTML5', color: 'orange' },
    { id: 'css-icon', name: 'CSS3', color: 'blue' },
    { id: 'scss-icon', name: 'Sass', color: 'pink' },
  ],
  tools: [
    { id: 'git-icon', name: 'Git', color: 'orange' },
    { id: 'npm-icon', name: 'NPM', color: 'red' },
    { id: 'figma-icon', name: 'Figma', color: 'purple' },
  ],
};

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#technologies', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const HERO = {
  title: 'Ayyan Amir',
  role: 'Software Engineer',
  tagline: 'Architecting Scalable AI & Frontend Solutions',
  intro: 'I turn complex business visions into seamless digital realities. With a focus on performance, scalability, and elite user experiences, I build high-impact applications that drive measurable growth and technological innovation.',
};

export const ABOUT = {
  description:
    'With over 4 years of hands-on experience, I bridge the gap between complex backend logic and intuitive frontend design. My journey has taken me from building interactive reports for global brands like Zain to architectural leadership at Cogent Labs, where I specialize in scaling AI-driven applications. I\'m driven by the challenge of transforming complex requirements into clean, performant, and user-centric digital products.',
  highlights: [
    { label: 'Experience', value: '4+ Years' },
    { label: 'Location', value: 'Lahore, PK' },
    { label: 'Focus', value: 'AI & Frontend' },
  ],
  services: [
    { title: 'Frontend Architecture', desc: 'Crafting scalable, maintainable React systems with modern state management.' },
    { title: 'AI Integration', desc: 'Implementing GenAI agents and LLM-powered interfaces for smarter workflows.' },
    { title: 'UI/UX Engineering', desc: 'Prioritizing accessibility and micro-interactions for elite user satisfaction.' },
  ],
};

export const PROJECTS = [
  {
    id: 'booosted',
    title: 'Booosted',
    subtitle: 'AI Chatbots — Cogent Labs',
    description:
      'Full AI chatbot platform for customer support. Features chatbot training via file uploads and web URLs, delivering context-aware, proactive responses. Leading chatbot service in Finland.',
    tags: ['React', 'AI', 'PWA'],
    link: 'https://booosted.fi/',
  },
  {
    id: 'zendash',
    title: 'Zendash',
    subtitle: 'Marketing Analytics — Cogent Labs',
    description:
      'A marketing analytics aggregator built with scalable architecture. Features drag-and-drop customizable dashboards, ApexCharts integration, and Gen AI for summaries and insights.',
    tags: ['React', 'Stripe', 'Charts', 'AI'],
    link: 'https://cogentlabs.co/',
  },
  {
    id: 'xon',
    title: 'XON',
    subtitle: 'Flashcard App — Cogent Labs',
    description:
      'Interactive study and revision app with 4+ dynamic flashcard types and a Notion-like rich text editor. Focused on clean, scalable, and reusable components.',
    tags: ['React', 'Redux', 'MUI'],
    link: 'https://xon.so/',
  },
  {
    id: 'blabble',
    title: 'Blabble',
    subtitle: 'Mortgage Lead Management — Cogent Labs',
    description:
      'Real-time mortgage lead management system for the UK market. Features MUI theming, PWA support for offline access, and secure Stripe integrations.',
    tags: ['React', 'PWA', 'Stripe', 'Redux-Saga'],
    link: 'https://cogentlabs.co/',
  },
  {
    id: 'zain',
    title: 'Zain Annual Report 2020',
    subtitle: 'Interactive Report — LogicsDrive',
    description:
      'An interactive annual report for Zain Kuwait with GSAP 3 animations across 10+ pages. Built with a focus on responsiveness and performance.',
    tags: ['React', 'GSAP', 'Responsive'],
    link: 'https://www.zain.com/en/investor-relations/financial-reports/?report=2020',
  },
];

export const SKILLS = [
  { category: 'Core Technologies', items: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Python'] },
  { category: 'State & Data', items: ['React Query', 'Redux Toolkit', 'Zustand', 'Context API', 'REST'] },
  { category: 'Styling & Design', items: ['Tailwind CSS', 'SCSS/SASS', 'Material UI (MUI)', 'Shadcn/UI', 'Framer Motion', 'GSAP 3'] },
  { category: 'Testing & Quality', items: ['Cypress', 'Vitest', 'Jest', 'React Testing Library'] },
  { category: 'Infrastructure', items: ['GitHub Actions', 'Vercel', 'Netlify'] },
  { category: 'AI & Automation', items: ['n8n', 'Workflow Automation'] },
];

export const CONTACT = {
  email: 'ayyanamir6@gmail.com',
  phone: '+923224497542',
  calendar: 'https://calendar.app.google/zXsZ6NeXUhVVdv6P9',
  resume: '/src/assets/resume/Ayyan-Amir-Resume.pdf',
  links: [
    { name: 'GitHub', href: 'https://github.com/ayyanamir6', icon: 'github' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ayyanamir6', icon: 'linkedin' },
  ],
};
