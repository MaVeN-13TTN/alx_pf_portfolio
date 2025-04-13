export interface About {
  bio: string;
  interests: {
    cloudComputing: string;
    cybersecurity: string;
    artificialIntelligence: string;
    softwareEngineering: string;
  };
  goals: string;
}

export const about: About = {
  bio: "As an aspiring Cloud Security Engineer and Applied Computer Science student, I am deeply immersed in the convergence of cloud computing, cybersecurity, and artificial intelligence. My academic journey at Daystar University is complemented by hands-on experience with AWS services, security implementations, and machine learning projects.\n\nI actively bridge theoretical knowledge with practical applications by developing secure, cloud-native solutions. My current focus includes implementing AWS best practices, exploring cloud security architectures, and leveraging AI for enhanced threat detection. Through personal projects and coursework, I have gained experience in areas such as infrastructure as code, security automation, and DevSecOps practices.\n\nWith a strong foundation in computer science fundamentals and a passion for emerging technologies, I am particularly interested in how the synergy between cloud platforms, AI, and cybersecurity can create more robust and intelligent security solutions. I consistently seek opportunities to apply these technologies to real-world challenges, whether through academic projects, open-source contributions, or collaborative initiatives.\n\nAs I progress in my technical journey, I am dedicated to staying at the forefront of cloud security and AI advancements. I am eager to contribute my growing expertise to innovative projects that push the boundaries of secure cloud computing while continuing to expand my knowledge through hands-on experience and industry certifications.",

  interests: {
    cloudComputing: "Exploring cloud platforms and their capabilities, particularly AWS services and cloud architecture principles for scalable solutions.",
    cybersecurity: "Learning about security principles, best practices, and implementing robust security measures in applications.",
    artificialIntelligence: "Discovering AI/ML applications in cloud computing and cybersecurity while exploring fundamental concepts.",
    softwareEngineering: "Building secure, cloud-ready applications with emphasis on best practices and performance optimization."
  },

  goals: "While pursuing my degree, I aim to build strong foundations in cloud computing, cybersecurity, and AI. Through continuous learning and practical projects, I aspire to create innovative solutions that combine these technologies. My focus is on growing both academically and technically, working towards becoming a well-rounded technologist who can bridge theoretical knowledge with practical implementation."
};

export default about;
