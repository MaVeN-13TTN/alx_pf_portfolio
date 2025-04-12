import React from 'react';

export default function Bio() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        About Me
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Professional Summary
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I am a passionate Full Stack Developer with expertise in building modern web applications.
          My journey in software development has equipped me with a strong foundation in both frontend
          and backend technologies, allowing me to create seamless user experiences while implementing
          robust server-side solutions.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          I enjoy tackling complex problems and continuously learning new technologies to stay at the
          forefront of the ever-evolving tech landscape.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-white">Frontend</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>React.js</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-white">Backend</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>SQL Databases</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Education & Certifications
        </h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Bachelor&apos;s Degree in Computer Science</h3>
          <p className="text-gray-600 dark:text-gray-400">University Name, 2018-2022</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Certifications</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Full Stack Web Development</li>
            <li>AWS Certified Developer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}