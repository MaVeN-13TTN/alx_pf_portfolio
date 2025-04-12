export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  features?: string[];
  codeUrl?: string;
  demoUrl?: string;
}
