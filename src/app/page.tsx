"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FaLinkedin, FaGithub, FaAws, FaDocker, FaJava, FaPython, FaJs } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiGnubash, SiWireshark, SiGithubactions, SiGo, SiAmazon } from 'react-icons/si';
import { MdSecurity } from 'react-icons/md';
import SkillsModal, { SkillCategory } from '@/components/SkillsModal';
import { skillCategories } from '@/data/skills';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSkillsModal = (categoryId: string) => {
    const category = skillCategories.find(cat => cat.id === categoryId);
    if (category) {
      setSelectedCategory(category);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* Hero Section - Full viewport height */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">

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
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ndungu-kinyanjui/" target="_blank" rel="noopener noreferrer"
               className="p-2 text-secondary hover:text-heading transition-colors">
              <FaLinkedin className="w-6 h-6" />
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cloud Computing */}
            <div
              className="glassmorphism p-6 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => openSkillsModal('cloud')}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <span className="text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-heading">Cloud Computing</h3>
              <p className="text-secondary mb-4">Designing and implementing scalable, secure cloud infrastructure with AWS services.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-accent/5 text-accent text-xs rounded flex items-center">
                  <FaAws className="mr-1" /> AWS
                </span>
                <span className="px-2 py-1 bg-accent/5 text-accent text-xs rounded flex items-center">
                  <SiTerraform className="mr-1" /> Terraform
                </span>
                <span className="px-2 py-1 bg-accent/5 text-accent text-xs rounded flex items-center">
                  <SiAmazon className="mr-1" /> CloudFormation
                </span>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <button className="px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-md text-sm font-medium transition-all duration-300 flex items-center">
                  View Skills <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Cybersecurity */}
            <div
              className="glassmorphism p-6 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => openSkillsModal('cybersecurity')}
            >
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-heading">Cybersecurity</h3>
              <p className="text-secondary mb-4">Implementing robust security measures to protect systems and data from threats and vulnerabilities.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-success/5 text-success text-xs rounded flex items-center">
                  <MdSecurity className="mr-1" /> Threat Analysis
                </span>
                <span className="px-2 py-1 bg-success/5 text-success text-xs rounded flex items-center">
                  <MdSecurity className="mr-1" /> Security Audits
                </span>
                <span className="px-2 py-1 bg-success/5 text-success text-xs rounded flex items-center">
                  <SiWireshark className="mr-1" /> CTF Tools
                </span>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <button className="px-4 py-2 bg-success/10 hover:bg-success/20 text-success rounded-md text-sm font-medium transition-all duration-300 flex items-center">
                  View Skills <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* DevOps */}
            <div
              className="glassmorphism p-6 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => openSkillsModal('devops')}
            >
              <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-heading">DevOps & Automation</h3>
              <p className="text-secondary mb-4">Streamlining development and operations with automated pipelines and infrastructure as code.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-warning/5 text-warning text-xs rounded flex items-center">
                  <SiGithubactions className="mr-1" /> CI/CD
                </span>
                <span className="px-2 py-1 bg-warning/5 text-warning text-xs rounded flex items-center">
                  <FaDocker className="mr-1" /> Docker
                </span>
                <span className="px-2 py-1 bg-warning/5 text-warning text-xs rounded flex items-center">
                  <SiKubernetes className="mr-1" /> Kubernetes
                </span>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <button className="px-4 py-2 bg-warning/10 hover:bg-warning/20 text-warning rounded-md text-sm font-medium transition-all duration-300 flex items-center">
                  View Skills <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Programming Languages */}
            <div
              className="glassmorphism p-6 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => openSkillsModal('programming')}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-heading">Programming Languages</h3>
              <p className="text-secondary mb-4">Proficiency in various programming languages for different application domains.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-accent/5 text-accent text-xs rounded flex items-center">
                  <FaPython className="mr-1" /> Python
                </span>
                <span className="px-2 py-1 bg-accent/5 text-accent text-xs rounded flex items-center">
                  <FaJs className="mr-1" /> JavaScript
                </span>
                <span className="px-2 py-1 bg-accent/5 text-accent text-xs rounded flex items-center">
                  <FaJava className="mr-1" /> Java
                </span>
                <span className="px-2 py-1 bg-accent/5 text-accent text-xs rounded flex items-center">
                  <SiGo className="mr-1" /> Go
                </span>
                <span className="px-2 py-1 bg-accent/5 text-accent text-xs rounded flex items-center">
                  <SiGnubash className="mr-1" /> Bash
                </span>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <button className="px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-md text-sm font-medium transition-all duration-300 flex items-center">
                  View Skills <ArrowRight className="ml-1 w-4 h-4" />
                </button>
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
      {/* Skills Modal */}
      <SkillsModal
        category={selectedCategory}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
