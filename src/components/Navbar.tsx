"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useTheme();

  const isActive = (path: string) => {
    return pathname === path
      ? 'text-accent font-semibold'
      : 'text-secondary hover:text-accent transition-colors duration-200';
  };

  return (
    <nav className="bg-background text-foreground border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-heading hover:text-accent transition-colors duration-200"
          >
            Ndung&apos;u Kinyanjui
          </Link>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link
              href="/bio"
              className={`flex items-center text-sm md:text-base ${isActive('/bio')}`}
            >
              My Story
            </Link>
            <Link
              href="/portfolio"
              className={`flex items-center text-sm md:text-base ${isActive('/portfolio')}`}
            >
              Portfolio
            </Link>
            <Link
              href="/elevator-pitch"
              className={`flex items-center text-sm md:text-base ${isActive('/elevator-pitch')}`}
            >
              Elevator Pitch
            </Link>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-md text-secondary hover:text-accent hover:bg-muted/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-200"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
