import React from 'react';
import { Linkedin, Github } from 'lucide-react';

function Footer() {
  return (
    <footer 
      className="bg-background text-foreground border-t border-border py-6 mt-auto"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Change flex direction to row and justify between */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          {/* Social media icons container - moved to the left */}
          <div className="flex space-x-4 mb-4 sm:mb-0 sm:order-1">
            <a href="https://www.linkedin.com/in/ndungu-kinyanjui/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/MaVeN-13TTN" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary">
              <Github size={24} />
            </a>
          </div>
          {/* Group the text elements - moved to the right */}
          <div className="sm:order-2">
            <p className="text-small text-secondary">
              © {new Date().getFullYear()} Ndung&apos;u Kinyanjui. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;