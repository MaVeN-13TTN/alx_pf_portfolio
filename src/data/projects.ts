import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Weather Dashboard',
    description: 'A modern, responsive weather dashboard with real-time data, forecast, and SMS notifications. Features a beautiful glassmorphism design and provides detailed weather metrics with interactive visualizations.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeatherMap API', 'Chart.js', 'GSAP', 'Twilio'],
    imageUrl: 'https://images.unsplash.com/photo-1635231632572-c49936e059ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYXRoZXIlMjBkYXNoYm9hcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    features: [
      'Real-time weather data with detailed metrics',
      'Interactive 5-day weather forecast carousel',
      'Dynamic weather trend charts',
      'Automated SMS weather notifications',
      'Responsive glassmorphism design'
    ],
    codeUrl: 'https://github.com/MaVeN-13TTN/Weather_Dashboard',
    demoUrl: ''
  },
  {
    id: 2,
    title: 'Inner Harmony',
    description: 'A meditation and mindfulness web application providing a serene digital space for users to explore guided meditations, mindfulness resources, and begin their journey to inner peace.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    features: [
      'Curated guided meditation videos',
      'Category-based filtering',
      'Interactive video player',
      'Resources section with articles',
      'Dark/Light theme support'
    ],
    codeUrl: 'https://github.com/MaVeN-13TTN/inner-harmony',
    demoUrl: 'https://inner-harmony-nu.vercel.app/'
  },
  {
    id: 3,
    title: 'WiFi Speed CLI',
    description: 'A command-line tool to scan WiFi networks and test internet connection speed with human-readable output. Provides detailed metrics on signal strength, quality assessment, and internet performance.',
    technologies: ['Go', 'NetworkManager', 'GitHub Actions'],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    features: [
      'WiFi network scanning with signal quality assessment',
      'Internet speed testing (download, upload, latency)',
      'Detailed connection quality metrics',
      'Dual scanning methods for compatibility',
      'Human-readable output format'
    ],
    codeUrl: 'https://github.com/MaVeN-13TTN/wifi-speed-cli',
    demoUrl: ''
  },
  {
    id: 4,
    title: 'DevOps Roadmap',
    description: 'A visual progress tracker for the comprehensive DevOps learning roadmap. Built with pure vanilla JavaScript, HTML, and CSS - no frameworks, no dependencies. Features a beautiful glassmorphism design.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'LocalStorage API'],
    imageUrl: 'https://images.unsplash.com/photo-1532522953890-ccc87dfeb0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhcm5pbmclMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    features: [
      'Track progress across multiple DevOps topics',
      'Curated learning resources for each topic',
      'Light/Dark theme toggle with smooth transitions',
      'Progress auto-saved in localStorage',
      'Search functionality for quick topic access'
    ],
    codeUrl: 'https://github.com/MaVeN-13TTN/devops-roadmap',
    demoUrl: ''
  },
  {
    id: 5,
    title: 'Food Quest',
    description: 'A modern and user-friendly web application that allows users to explore and discover recipes, search for food-related videos, and manage their favorite and bookmarked recipes.',
    technologies: ['React', 'Vite', 'Django', 'PostgreSQL', 'Tailwind CSS', 'Spoonacular API'],
    imageUrl: 'https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2luZyUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
    features: [
      'Recipe search and exploration by keywords or ingredients',
      'Detailed recipe information with instructions and nutrition',
      'Random recipe generator for culinary inspiration',
      'Favorites and bookmarks system',
      'Food jokes and trivia for fun engagement'
    ],
    codeUrl: 'https://github.com/MaVeN-13TTN/Food_Quest',
    demoUrl: ''
  },
  {
    id: 6,
    title: 'Task Master',
    description: 'A feature-rich, gamified to-do application designed to boost productivity and make task management engaging. It combines traditional to-do list functionality with game-like elements to motivate users.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'LocalStorage API', 'Chart.js'],
    imageUrl: 'https://images.unsplash.com/photo-1700561571254-4fb2f1cbcbc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdGl2aXR5JTIwdGFza3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    features: [
      'Task management with priority levels and due dates',
      'Points system and achievement badges',
      'Streaks for consistent task completion',
      'Progress visualization and task analytics',
      'Dark mode toggle and confetti celebrations'
    ],
    codeUrl: 'https://github.com/MaVeN-13TTN/Task_Master',
    demoUrl: 'https://task-master-five-delta.vercel.app'
  },
  {
    id: 7,
    title: 'Hope Harbor',
    description: 'A charity and community support web application designed to provide information about various programs, facilitate donations, and share success stories to encourage community involvement.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcml0eSUyMGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    features: [
      'Donation page with multiple options',
      'Programs section with detailed information',
      'Success stories with interactive cards',
      'Comprehensive client-side routing',
      'Responsive mobile-friendly design'
    ],
    codeUrl: 'https://github.com/MaVeN-13TTN/hope-harbor',
    demoUrl: 'https://hope-harbor.vercel.app'
  },
  {
    id: 8,
    title: 'Cocktail Haven',
    description: 'A comprehensive web platform for cocktail enthusiasts to explore, discover, and learn about cocktail recipes with a beautiful glassmorphism design that interacts with the CocktailDB API.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'CocktailDB API', 'YouTube API'],
    imageUrl: 'https://images.unsplash.com/photo-1605270012917-bf157c5a9541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsJTIwYmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    features: [
      'Alphabet-based cocktail filtering',
      'Detailed recipe modal with ingredients and instructions',
      'Mixology education sections with learning categories',
      'YouTube tutorial video integration',
      'Responsive design with consistent styling'
    ],
    codeUrl: 'https://github.com/MaVeN-13TTN/cocktail_haven',
    demoUrl: 'https://cocktail-haven-topaz.vercel.app'
  },
  {
    id: 9,
    title: 'Cash Cove',
    description: 'A comprehensive mobile application for personal and shared expense tracking, budget management, and financial analytics with secure authentication and real-time updates.',
    technologies: ['Flutter', 'Dart', 'Python', 'Django', 'RESTful API', 'Biometric Authentication'],
    imageUrl: 'https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    features: [
      'Secure authentication with biometrics and social login',
      'Expense tracking with categories and attachments',
      'Shared expenses and bill splitting functionality',
      'Budget planning with alerts and notifications',
      'Visual analytics and financial reports'
    ],
    codeUrl: 'https://github.com/MaVeN-13TTN/cash-cove',
    demoUrl: ''
  },
];

export default projects;
