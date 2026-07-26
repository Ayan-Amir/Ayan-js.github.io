import adeenPhoto from '../assets/images/adeen.jpeg';
import aqaratCover from '../assets/images/aqarat.png';
import blabbleCover from '../assets/images/blabble.png';
import boosstedCover from '../assets/images/booosted.png';
import hammadPhoto from '../assets/images/hammad.jpeg';
import meerPhoto from '../assets/images/meer.jpeg';
import profilePicture from '../assets/images/profile-picture.png';
import saqlainPhoto from '../assets/images/saqlain.jpeg';
import usmanPhoto from '../assets/images/usman.jpeg';
import xonCover from '../assets/images/xon.png';
import zainCover from '../assets/images/zain.png';
import zainabPhoto from '../assets/images/zainab.jpeg';
import zendashCover from '../assets/images/zendash.png';

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
  { href: '#projects', label: 'Projects' },
  { href: '#technologies', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#recommendations', label: 'Recommendations' },
  { href: '#contact', label: 'Contact' },
];

export const HERO = {
  title: 'Ayyan Amir',
  role: 'Full Stack Engineer',
  tagline: 'Scalable AI & Full-Stack Solutions',
  intro:
    'I turn complex business visions into seamless digital realities. With a focus on performance, scalability, and elite user experiences, I build high-impact applications that drive measurable growth and technological innovation.',
};

export const ABOUT = {
  photo: profilePicture,
  description:
    'With over 5 years of hands-on experience, I architect full-stack solutions that bridge complex backend logic and intuitive frontend design. My journey has taken me from delivering interfaces for global brands like Zain Group at LogicsDrive to leading frontend teams at Cogent Labs, where I build AI-powered platforms and mentor developers. I back my work with comprehensive unit and integration tests, and I am driven by the challenge of transforming complex requirements into clean, performant, and user-centric digital products.',
  highlights: [
    { label: 'Experience', value: '5+ Years' },
    { label: 'Location', value: 'Lahore, PK' },
    { label: 'Focus', value: 'AI & Full-Stack' },
  ],
  services: [
    {
      title: 'Frontend Architecture',
      desc: 'Crafting scalable, maintainable React systems with modern state management.',
    },
    {
      title: 'AI Integration',
      desc: 'Building LLM-powered features — prompt engineering, RAG, and Gen AI agents that ship in production.',
    },
    {
      title: 'Backend & APIs',
      desc: 'Building REST and real-time APIs with Django, WebSockets, and SSE, backed by PostgreSQL and Redis.',
    },
    {
      title: 'UI/UX Engineering',
      desc: 'Prioritizing accessibility and micro-interactions for elite user satisfaction.',
    },
  ],
};

export const PROJECTS = [
  {
    id: 'booosted',
    title: 'Booosted',
    subtitle: 'AI Chatbots — Cogent Labs',
    description:
      'No-code AI chatbots trained on client data — cut page load times 30% and improved response time 40% via WebSockets/SSE. Now one of the leading chatbot services in Finland.',
    tags: ['React', 'AI', 'WebSockets'],
    link: 'https://booosted.fi/',
    icon: 'MessageSquareText',
    accent: 'from-cyan-500 to-blue-600',
    iconTint: 'text-cyan-400',
    image: boosstedCover,
  },
  {
    id: 'zendash',
    title: 'Zendash',
    subtitle: 'Marketing Analytics — Cogent Labs',
    description:
      'Led a team of three building a drag-and-drop analytics dashboard with ApexCharts and Gen AI-written summaries.',
    tags: ['React', 'Stripe', 'Charts', 'AI'],
    link: 'https://cogentlabs.co/',
    icon: 'BarChart3',
    accent: 'from-indigo-500 to-purple-600',
    iconTint: 'text-purple-400',
    image: zendashCover,
  },
  {
    id: 'xon',
    title: 'XON',
    subtitle: 'Flashcard App — Cogent Labs',
    description:
      'A Notion-like rich text editor with 5+ dynamic flashcard types, built on a reusable, scalable component system.',
    tags: ['React', 'Redux', 'Notion', 'AI'],
    link: 'https://xon.so/',
    icon: 'BookOpen',
    accent: 'from-teal-500 to-cyan-600',
    iconTint: 'text-teal-400',
    image: xonCover,
  },
  {
    id: 'blabble',
    title: 'Blabble',
    subtitle: 'Mortgage Lead Management — Cogent Labs',
    description:
      'Real-time UK mortgage lead management as an offline-capable PWA with MUI theming and secure Stripe billing.',
    tags: ['React', 'PWA', 'Stripe', 'Redux-Saga', 'MUI'],
    link: 'https://cogentlabs.co/',
    icon: 'Building2',
    accent: 'from-slate-500 to-indigo-600',
    iconTint: 'text-indigo-400',
    image: blabbleCover,
  },
  {
    id: 'zain',
    title: 'Zain Annual Report 2020',
    subtitle: 'Interactive Report — LogicsDrive',
    description: 'A 10+ page interactive annual report for Zain Kuwait, animated with GSAP 3 for a product-like feel.',
    tags: ['Vue', 'Bootstrap', 'GSAP', 'Responsive'],
    link: 'https://www.zain.com/en/investor-relations/financial-reports/?report=2020',
    icon: 'FileText',
    accent: 'from-cyan-500 to-indigo-600',
    iconTint: 'text-cyan-400',
    image: zainCover,
  },
  {
    id: 'aqarat',
    title: 'Aqarat',
    subtitle: 'Real Estate Listings — LogicsDrive',
    description:
      'Property search, filtering, and dynamic listing pages for a fast, GSAP-animated real estate platform.',
    tags: ['GSAP', 'Responsive'],
    link: 'https://alesayi.com/en/home-page/',
    icon: 'Home',
    accent: 'from-amber-500 to-orange-600',
    iconTint: 'text-amber-400',
    image: aqaratCover,
  },
];

export const SKILLS = [
  { category: 'Core Technologies', items: ['JavaScript', 'TypeScript', 'Python', 'React.js', 'Next.js'] },
  {
    category: 'State & Data',
    items: ['React Query', 'Redux Toolkit', 'Redux (Thunk/Saga)', 'Zustand', 'React Hook Form', 'Zod'],
  },
  {
    category: 'Styling & Design',
    items: ['Tailwind CSS', 'SCSS/SASS', 'Material UI (MUI)', 'Ant Design', 'Shadcn/UI', 'GSAP 3'],
  },
  {
    category: 'Backend & APIs',
    items: ['Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'WebSockets', 'SSE', 'Webhooks'],
  },
  { category: 'Testing & Quality', items: ['React Testing Library', 'Vitest', 'Jest', 'Cypress'] },
  { category: 'Integrations', items: ['Stripe', 'Sentry', 'Google Analytics', 'PWA', 'ApexCharts'] },
  {
    category: 'AI & Automation',
    items: ['n8n', 'Generative AI', 'LLM Integration', 'Prompt Engineering', 'RAG', 'Cursor', 'Antigravity', 'ChatGPT'],
  },
  { category: 'Infrastructure', items: ['GitHub Actions', 'Vercel', 'Netlify', 'Docker', 'CI/CD Pipelines'] },
];

export const CERTIFICATIONS = [
  {
    id: 'claude-code-101',
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    date: 'Jun 2026',
    skills: ['Model Context Protocol (MCP)', 'Agents'],
    link: 'https://verify.skilljar.com/c/xai23jomkjwe',
  },
  {
    id: 'ai-fluency',
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    date: 'Jun 2026',
    skills: ['Delegation', 'Diligence'],
    link: 'https://verify.skilljar.com/c/r5qnfckjrkpb',
  },
  {
    id: 'claude-101',
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: 'Jun 2026',
    skills: [],
    link: 'https://verify.skilljar.com/c/3sbrocc7ipoc',
  },
  {
    id: 'claude-api',
    title: 'Building with the Claude API',
    issuer: 'Anthropic',
    date: 'Jun 2026',
    skills: ['Agents', 'Retrieval-Augmented Generation (RAG)', 'Prompt Engineering', 'Agentic Workflows'],
    link: 'https://verify.skilljar.com/c/29yvcwyb8mow',
  },
  {
    id: 'js-algo',
    title: 'JavaScript Algorithms and Data Structures (Beta)',
    issuer: 'freeCodeCamp',
    date: 'Jan 2024',
    skills: ['JavaScript'],
    link: 'https://freecodecamp.org/certification/Ayyan_Amir/javascript-algorithms-and-data-structures-v8',
  },
  {
    id: 'responsive-web-design',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Jan 2024',
    skills: [],
    link: 'https://freecodecamp.org/certification/Ayyan_Amir/responsive-web-design',
  },
];

export const RECOMMENDATIONS = [
  {
    id: 'zainab-fatima',
    name: 'Zainab Fatima',
    role: 'Lead Software Development @ Hybytes',
    date: 'August 18, 2025',
    context: 'Zainab worked with Ayyan on the same team',
    photo: zainabPhoto,
    quote:
      'He\'s a skilled frontend developer with a strong grasp of React and a great eye for detail. He\'s always eager to learn and consistently takes the time to explain frontend concepts clearly. His patience, collaborative mindset, and willingness to support the team make him a great person to work with.',
  },
  {
    id: 'hammad-ali',
    name: 'Hammad Ali',
    role: 'CEO @ Barq Dev',
    date: 'June 26, 2025',
    context: 'Hammad worked with Ayyan on the same team',
    photo: hammadPhoto,
    quote:
      'I found him to be hard working and having a sharp eye for frontend UI and functionality related aspects. For any full-stack or frontend project, Ayyan is a wonderful member to have on the team.',
  },
  {
    id: 'usman-tariq',
    name: 'Usman Tariq',
    role: 'SQA — managed Ayyan directly',
    date: 'July 9, 2025',
    context: 'Usman managed Ayyan directly',
    photo: usmanPhoto,
    quote:
      'Ayyan has consistently impressed me with his mastery in React, Redux, and UI development. What truly sets Ayyan apart is his calm attitude — soft-spoken, easy to work with, and incredibly dependable. I can\'t recommend Ayyan highly enough.',
  },
  {
    id: 'obaidullah-ishfaq',
    name: 'Obaidullah Ishfaq',
    role: 'Software Engineer @ Freewill',
    date: 'July 14, 2025',
    context: 'Obaidullah worked with Ayyan on the same team',
    quote:
      'Ayyan was dependable and quick to understand the UI challenges we faced. He communicated clearly, stayed aligned with team priorities, and brought a thoughtful perspective to every discussion. I’d recommend Ayyan to any team looking for a frontend engineer who brings reliability, clarity, and care to the job.',
  },
  {
    id: 'meer-hamza',
    name: 'Meer Hamza',
    role: 'Backend & Infrastructure Engineer @ Cogent Labs',
    date: 'July 3, 2025',
    context: 'Meer worked with Ayyan on the same team',
    photo: meerPhoto,
    quote:
      'Ayyan led the entire frontend development effort independently, and both times, he exceeded expectations. He brings a rare combination of technical sharpness, design sensibility, and deep product thinking that makes him an invaluable asset to any team.',
  },
  {
    id: 'adeen-khan',
    name: 'Adeen Khan',
    role: 'UI/UX Designer',
    date: 'July 3, 2025',
    context: 'Adeen worked with Ayyan on the same team',
    photo: adeenPhoto,
    quote:
      'He is one of the most exceptional frontend engineers I\'ve collaborated with. His technical expertise is matched by his strong sense of product ownership. Any team would be lucky to have someone as talented, dedicated, and upbeat as Ayyan!',
  },

  {
    id: 'saqlain-rasheed',
    name: 'Saqlain Rasheed',
    role: 'Software Engineer — Ayyan\'s mentor',
    date: 'June 26, 2025',
    context: 'Saqlain was Ayyan\'s mentor',
    photo: saqlainPhoto,
    quote:
      'He\'s not only skilled and reliable but also brings a contagious energy to the team. His can-do attitude, willingness to take on challenges, and positive presence make collaboration smooth and enjoyable.',
  },
  {
    id: 'laiba-athar',
    name: 'Laiba Athar',
    role: 'Software QA Engineer',
    date: 'June 26, 2025',
    context: 'Laiba worked with Ayyan on the same team',
    quote:
      'Ayyan is a dedicated and talented professional. He is not only technically skilled but also a reliable team player who consistently supports his colleagues and contributes positively to the team.',
  },
];

export const CONTACT = {
  email: 'ayyanamir6@gmail.com',
  phone: '+923224497542',
  calendar: 'https://calendar.app.google/zXsZ6NeXUhVVdv6P9',
  links: [
    { name: 'GitHub', href: 'https://github.com/Ayan-Amir', icon: 'github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ayyan-amir/', icon: 'linkedin' },
  ],
};
