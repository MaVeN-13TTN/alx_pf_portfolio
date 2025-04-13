"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path
      ? 'text-accent font-semibold'
      : 'text-secondary hover:text-accent transition-colors duration-200';
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'bg-background/90 shadow-md' : 'bg-background border-b border-border/50'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-heading hover:text-accent transition-colors duration-200"
          >
            <span className="text-accent">Ndung&apos;u</span> Kinyanjui
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/bio"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/bio')}`}
            >
              My Story
            </Link>
            <Link
              href="/portfolio"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/portfolio')}`}
            >
              Portfolio
            </Link>
            <Link
              href="/elevator-pitch"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/elevator-pitch')}`}
            >
              Elevator Pitch
            </Link>

            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-2 p-2 rounded-md text-secondary hover:text-accent hover:bg-accent/5 focus:outline-none transition-all duration-200"
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

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-md text-secondary hover:text-accent hover:bg-accent/5 focus:outline-none transition-all duration-200"
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

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-secondary hover:text-accent hover:bg-accent/5 focus:outline-none transition-all duration-200"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/bio"
              className={`block px-3 py-2 rounded-md ${isActive('/bio')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              My Story
            </Link>
            <Link
              href="/portfolio"
              className={`block px-3 py-2 rounded-md ${isActive('/portfolio')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/elevator-pitch"
              className={`block px-3 py-2 rounded-md ${isActive('/elevator-pitch')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Elevator Pitch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
