import React from 'react';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-secondary dark:text-secondary text-small">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <p className="text-muted dark:text-muted text-xs mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;