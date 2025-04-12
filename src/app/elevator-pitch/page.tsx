import React from 'react';

export default function ElevatorPitch() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-heading">
        My Elevator Pitch
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-heading">
          Video Coming Soon
        </h2>
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6">
          <p className="text-secondary text-lg">
            Elevator pitch video will be added here
          </p>
        </div>
        <p className="text-secondary mb-4">
          Hello! I&apos;m a Full Stack Developer with expertise in building modern web applications using
          technologies like React, Next.js, Node.js, and various databases. I specialize in creating
          responsive, user-friendly interfaces and robust backend systems.
        </p>
        <p className="text-secondary">
          With a strong foundation in both frontend and backend development, I can take projects from
          concept to completion. I&apos;m passionate about writing clean, maintainable code and staying
          up-to-date with the latest industry trends and best practices.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-heading">
          Why Work With Me?
        </h2>
        <ul className="list-disc list-inside text-secondary space-y-2">
          <li>Strong problem-solving skills and attention to detail</li>
          <li>Experience with modern development workflows and tools</li>
          <li>Excellent communication and collaboration abilities</li>
          <li>Committed to delivering high-quality, well-tested code</li>
          <li>Passionate about continuous learning and improvement</li>
        </ul>
      </div>
    </div>
  );
}