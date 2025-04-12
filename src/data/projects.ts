import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, shopping cart, and payment integration. Users can browse products, add them to cart, and complete the checkout process with secure payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
    imageUrl: 'https://placehold.co/600x400/e2e8f0/1e293b?text=E-Commerce+Project',
    features: [
      'User authentication and authorization',
      'Product search and filtering',
      'Shopping cart functionality',
      'Secure payment processing with Stripe',
      'Order history and tracking'
    ],
    codeUrl: 'https://github.com',
    demoUrl: 'https://example.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and team collaboration. The app helps users organize their work, set priorities, and track progress on various projects and tasks.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'tRPC'],
    imageUrl: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Task+Management+App',
    features: [
      'Drag-and-drop task organization',
      'Project and task categorization',
      'Due date reminders and notifications',
      'Team collaboration features',
      'Progress tracking and reporting'
    ],
    codeUrl: 'https://github.com',
    demoUrl: 'https://example.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application that provides real-time weather data and forecasts for locations worldwide. Users can search for cities and view current conditions, hourly forecasts, and extended forecasts.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS', 'Axios', 'Geolocation API'],
    imageUrl: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Weather+Dashboard',
    features: [
      'Current weather conditions display',
      'Hourly and 7-day forecasts',
      'Location-based weather using geolocation',
      'Interactive weather maps',
      'Weather alerts and notifications'
    ],
    codeUrl: 'https://github.com',
    demoUrl: 'https://example.com'
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for managing and analyzing social media accounts across multiple platforms. Track engagement, schedule posts, and monitor performance metrics.',
    technologies: ['React', 'Firebase', 'Redux', 'Material UI', 'Social Media APIs'],
    imageUrl: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Social+Media+Dashboard',
    features: [
      'Multi-platform account management',
      'Post scheduling and automation',
      'Analytics and reporting',
      'Engagement tracking',
      'Content calendar'
    ],
    codeUrl: 'https://github.com',
    demoUrl: 'https://example.com'
  },
];

export default projects;
