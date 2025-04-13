import Link from 'next/link';
import { ArrowRight, Github, Linkedin, ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section - Full viewport height with gradient background */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-b from-background to-background/95">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-light dark:bg-grid-pattern-dark"></div>
        </div>
        
        {/* Floating tech icons (decorative) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 animate-float-slow opacity-20 dark:opacity-30">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
              <span className="text-2xl">☁️</span>
            </div>
          </div>
          <div className="absolute bottom-1/3 right-1/5 animate-float-medium opacity-20 dark:opacity-30">
            <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
              <span className="text-xl">🔒</span>
            </div>
          </div>
          <div className="absolute top-1/2 right-1/4 animate-float-fast opacity-20 dark:opacity-30">
            <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
              <span className="text-lg">⚙️</span>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-heading font-bold tracking-tight">
            Ndung&apos;u Kinyanjui
          </h1>
          
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-8">
            <span className="px-4 py-2 rounded-full bg-accent/10 dark:bg-accent/20 text-accent font-medium text-sm md:text-base">
              Cloud Engineer
            </span>
            <span className="px-4 py-2 rounded-full bg-success/10 dark:bg-success/20 text-success font-medium text-sm md:text-base">
              Cybersecurity Analyst
            </span>
            <span className="px-4 py-2 rounded-full bg-warning/10 dark:bg-warning/20 text-warning font-medium text-sm md:text-base">
              DevOps Enthusiast
            </span>
          </div>
          
          <div className="max-w-2xl mx-auto mb-10 text-body text-base md:text-lg space-y-4">
            <p className="text-xl md:text-2xl font-medium text-heading">
              Welcome to my digital space — where passion meets purpose.
            </p>
            <p>
              I&apos;m a tech professional focused on building secure, scalable systems that power meaningful digital experiences. My mission is to engineer solutions that make a difference, while continuously learning and leading in the cloud and cybersecurity space.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="/portfolio"
              className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-all duration-300 font-medium flex items-center justify-center group"
            >
              View My Work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/bio"
              className="px-6 py-3 bg-background border border-border text-heading rounded-lg hover:bg-accent/5 transition-all duration-300 font-medium"
            >
              About Me
            </Link>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/MaVeN-13TTN" target="_blank" rel="noopener noreferrer" 
               className="p-2 text-secondary hover:text-heading transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ndungu-kinyanjui/" target="_blank" rel="noopener noreferrer"
               className="p-2 text-secondary hover:text-heading transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="w-6 h-6 text-secondary" />
        </div>
      </section>
      
      {/* Skills Highlight Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-heading">
            Professional Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cloud Engineering */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-heading">Cloud Engineering</h3>
              <p className="text-secondary mb-4">Designing and implementing scalable, secure cloud infrastructure on AWS, Azure, and GCP platforms.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-accent/5 text-accent text-xs rounded">AWS</span>
                <span className="px-2 py-1 bg-accent/5 text-accent text-xs rounded">Azure</span>
                <span className="px-2 py-1 bg-accent/5 text-accent text-xs rounded">Terraform</span>
              </div>
            </div>
            
            {/* Cybersecurity */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-heading">Cybersecurity</h3>
              <p className="text-secondary mb-4">Implementing robust security measures to protect systems and data from threats and vulnerabilities.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-success/5 text-success text-xs rounded">Threat Analysis</span>
                <span className="px-2 py-1 bg-success/5 text-success text-xs rounded">Security Audits</span>
                <span className="px-2 py-1 bg-success/5 text-success text-xs rounded">Compliance</span>
              </div>
            </div>
            
            {/* DevOps */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-heading">DevOps</h3>
              <p className="text-secondary mb-4">Streamlining development and operations with automated pipelines and infrastructure as code.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-warning/5 text-warning text-xs rounded">CI/CD</span>
                <span className="px-2 py-1 bg-warning/5 text-warning text-xs rounded">Docker</span>
                <span className="px-2 py-1 bg-warning/5 text-warning text-xs rounded">Kubernetes</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/portfolio" className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-all duration-300 font-medium">
              Explore My Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
