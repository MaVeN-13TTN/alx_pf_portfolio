import { SkillCategory } from '@/components/SkillsModal';

export interface DetailedSkill {
  name: string;
  icon: string;
  description: string;
  items: string[];
}

export interface DetailedSkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: DetailedSkill[];
}

// Detailed skills for the bio page
export const detailedSkillCategories: DetailedSkillCategory[] = [
  {
    id: 'cloud',
    title: 'Cloud Computing',
    icon: 'cloud',
    description: 'Expertise in designing, implementing, and managing cloud infrastructure with a focus on AWS services.',
    skills: [
      {
        name: 'AWS Services',
        icon: 'aws',
        description: 'Experience with core AWS services for building scalable and secure cloud infrastructure.',
        items: [
          'EC2', 'S3', 'VPC', 'IAM', 'Lambda', 'RDS', 'EFS', 'CloudFormation', 'CloudWatch', 'CodePipeline'
        ]
      },
      {
        name: 'Cloud Architecture',
        icon: 'architecture',
        description: 'Designing cloud solutions following best practices and frameworks.',
        items: [
          'Scalable and secure AWS infrastructure',
          'AWS Well-Architected Framework',
          'High availability design patterns',
          'Disaster recovery planning'
        ]
      },
      {
        name: 'Certifications',
        icon: 'certificate',
        description: 'Industry-recognized cloud certifications.',
        items: [
          'AWS Certified Solutions Architect – Associate',
          'AWS Certified Cloud Practitioner'
        ]
      },
      {
        name: 'Infrastructure as Code',
        icon: 'code',
        description: 'Automating infrastructure provisioning and management.',
        items: [
          'Terraform',
          'AWS CloudFormation'
        ]
      },
      {
        name: 'Containers & Orchestration',
        icon: 'container',
        description: 'Containerization and container orchestration technologies.',
        items: [
          'Docker',
          'Kubernetes',
          'Amazon ECS/EKS'
        ]
      },
      {
        name: 'Monitoring & Logging',
        icon: 'monitor',
        description: 'Tools and services for monitoring cloud resources and applications.',
        items: [
          'AWS CloudWatch',
          'OpenSearch'
        ]
      },
      {
        name: 'Cost Optimization',
        icon: 'money',
        description: 'Strategies and practices for optimizing cloud costs.',
        items: [
          'Cost Optimization Best Practices',
          'Resource tagging and allocation',
          'Right-sizing resources',
          'Reserved instances and savings plans'
        ]
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: 'shield',
    description: 'Skills in protecting systems, networks, and data from digital attacks and implementing security best practices.',
    skills: [
      {
        name: 'CTF Tools',
        icon: 'tools',
        description: 'Experience with various tools used in Capture The Flag competitions and security assessments.',
        items: [
          'Ghidra', 'pwndbg', 'GDB', 'Wireshark', 'Burp Suite', 'SQLmap', 'Hashcat', 'John the Ripper', 'Autopsy'
        ]
      },
      {
        name: 'Security Concepts',
        icon: 'concept',
        description: 'Understanding of fundamental security concepts and methodologies.',
        items: [
          'Secure architecture design',
          'Network security',
          'Penetration testing basics',
          'Threat modeling',
          'Security risk assessment'
        ]
      },
      {
        name: 'Web Security',
        icon: 'web',
        description: 'Knowledge of web application security vulnerabilities and protections.',
        items: [
          'OWASP Top 10',
          'Input validation',
          'Authentication & authorization mechanisms',
          'Cross-site scripting (XSS) prevention',
          'SQL injection mitigation'
        ]
      },
      {
        name: 'Forensics & Reverse Engineering',
        icon: 'forensics',
        description: 'Skills in digital forensics and reverse engineering techniques.',
        items: [
          'Memory forensics',
          'Disk forensics',
          'Binary analysis',
          'Malware analysis basics',
          'Network traffic analysis'
        ]
      },
      {
        name: 'Linux Security',
        icon: 'linux',
        description: 'Experience with security-focused Linux distributions and hardening.',
        items: [
          'Kali Linux',
          'Ubuntu (security-focused setups)',
          'Linux hardening techniques',
          'Security monitoring on Linux'
        ]
      },
      {
        name: 'Certifications Pursued',
        icon: 'certificate',
        description: 'Cybersecurity certifications in progress.',
        items: [
          'Google Cybersecurity Certificate'
        ]
      },
      {
        name: 'Leadership',
        icon: 'leadership',
        description: 'Leadership roles in cybersecurity communities.',
        items: [
          'GDG Cybersecurity Lead – Daystar University'
        ]
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    icon: 'settings',
    description: 'Skills in implementing DevOps practices, CI/CD pipelines, and automation to improve development workflows.',
    skills: [
      {
        name: 'CI/CD Pipelines',
        icon: 'pipeline',
        description: 'Experience with continuous integration and continuous deployment tools and practices.',
        items: [
          'GitHub Actions',
          'AWS CodePipeline',
          'Automated testing integration',
          'Deployment strategies'
        ]
      },
      {
        name: 'Configuration Management',
        icon: 'config',
        description: 'Tools for managing and automating infrastructure configuration.',
        items: [
          'Ansible',
          'Infrastructure as code principles',
          'Configuration drift prevention'
        ]
      },
      {
        name: 'Containerization',
        icon: 'container',
        description: 'Technologies for containerizing applications and services.',
        items: [
          'Docker',
          'Docker Compose',
          'Container security best practices',
          'Multi-stage builds'
        ]
      },
      {
        name: 'Version Control',
        icon: 'git',
        description: 'Tools and practices for source code management.',
        items: [
          'Git',
          'GitHub',
          'Branching strategies',
          'Code review processes'
        ]
      },
      {
        name: 'Monitoring',
        icon: 'monitor',
        description: 'Tools for monitoring infrastructure and application performance.',
        items: [
          'Prometheus',
          'CloudWatch',
          'OpenSearch',
          'Alerting and notification systems'
        ]
      },
      {
        name: 'Automation Tools',
        icon: 'automation',
        description: 'Scripting and automation tools for DevOps workflows.',
        items: [
          'Bash/Shell scripting',
          'Python scripting for automation',
          'Infrastructure automation',
          'Workflow automation'
        ]
      },
      {
        name: 'High Availability & Scalability',
        icon: 'scale',
        description: 'Designing systems for high availability and scalability.',
        items: [
          'Load balancing',
          'Auto-scaling configurations',
          'Fault tolerance design',
          'Disaster recovery planning'
        ]
      }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: 'code',
    description: 'Proficiency in various programming languages for different application domains.',
    skills: [
      {
        name: 'Python',
        icon: 'python',
        description: 'Experience with Python for various applications.',
        items: [
          'Automation',
          'Scripting',
          'Web apps (Flask/Django)',
          'Data processing',
          'API development'
        ]
      },
      {
        name: 'JavaScript',
        icon: 'javascript',
        description: 'Frontend and backend JavaScript development.',
        items: [
          'Frontend (React)',
          'Backend (Node.js)',
          'TypeScript',
          'Modern ES6+ features',
          'Asynchronous programming'
        ]
      },
      {
        name: 'Java',
        icon: 'java',
        description: 'Java development experience.',
        items: [
          'General-purpose development',
          'Backend development',
          'Object-oriented programming',
          'Enterprise applications'
        ]
      },
      {
        name: 'Dart',
        icon: 'dart',
        description: 'Mobile application development with Dart.',
        items: [
          'Mobile app development with Flutter',
          'Cross-platform development',
          'UI/UX implementation',
          'State management'
        ]
      },
      {
        name: 'SQL',
        icon: 'database',
        description: 'Database design and querying with SQL.',
        items: [
          'Database design',
          'Query optimization',
          'Relational database concepts',
          'Data modeling'
        ]
      },
      {
        name: 'HTML/CSS',
        icon: 'html',
        description: 'Frontend web development with HTML and CSS.',
        items: [
          'Semantic HTML',
          'CSS frameworks (Tailwind, Bootstrap)',
          'Responsive design',
          'Accessibility best practices'
        ]
      },
      {
        name: 'Bash/Shell',
        icon: 'terminal',
        description: 'Shell scripting for automation and system administration.',
        items: [
          'Scripting and automation on Linux/Unix systems',
          'System administration tasks',
          'Process automation',
          'DevOps workflows'
        ]
      },
      {
        name: 'Go (Golang)',
        icon: 'golang',
        description: 'Backend development with Go.',
        items: [
          'Backend APIs',
          'Concurrency (for current projects)',
          'Microservices',
          'Performance optimization'
        ]
      }
    ]
  }
];

// Original skill categories for the home page
export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    title: 'Cloud Computing',
    icon: '☁️',
    color: 'accent',
    description: 'Designing and implementing scalable, secure cloud infrastructure on AWS, Azure, and GCP platforms with a focus on reliability, performance, and cost optimization.',
    skills: [
      {
        name: 'AWS',
        level: 'Expert',
        description: 'Extensive experience with EC2, S3, Lambda, ECS, RDS, DynamoDB, CloudFormation, and other AWS services to build scalable cloud solutions.',
        icon: '🔶'
      },
      {
        name: 'Azure',
        level: 'Advanced',
        description: 'Proficient in Azure VMs, App Service, Azure Functions, Azure SQL, Cosmos DB, and Azure DevOps for enterprise cloud deployments.',
        icon: '🔷'
      },
      {
        name: 'Google Cloud Platform',
        level: 'Intermediate',
        description: 'Working knowledge of GCP Compute Engine, Cloud Functions, Cloud Storage, BigQuery, and Kubernetes Engine.',
        icon: '🌈'
      },
      {
        name: 'Terraform',
        level: 'Advanced',
        description: 'Infrastructure as Code (IaC) using Terraform to automate cloud resource provisioning and management across multiple providers.',
        icon: '🏗️'
      },
      {
        name: 'CloudFormation',
        level: 'Advanced',
        description: 'Creating and managing AWS resources using CloudFormation templates for consistent and repeatable infrastructure.',
        icon: '📝'
      },
      {
        name: 'Serverless Architecture',
        level: 'Expert',
        description: 'Designing and implementing serverless applications using AWS Lambda, API Gateway, and other serverless technologies.',
        icon: '⚡'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: '🔒',
    color: 'success',
    description: 'Implementing robust security measures to protect systems and data from threats and vulnerabilities, with expertise in security assessment, threat modeling, and compliance.',
    skills: [
      {
        name: 'Threat Analysis',
        level: 'Expert',
        description: 'Identifying and analyzing security threats and vulnerabilities in systems and networks to develop effective mitigation strategies.',
        icon: '🔍'
      },
      {
        name: 'Security Audits',
        level: 'Advanced',
        description: 'Conducting comprehensive security audits to assess system security posture and identify areas for improvement.',
        icon: '📋'
      },
      {
        name: 'Compliance',
        level: 'Advanced',
        description: 'Ensuring systems meet industry standards and regulatory requirements such as GDPR, HIPAA, PCI DSS, and SOC 2.',
        icon: '✅'
      },
      {
        name: 'Penetration Testing',
        level: 'Intermediate',
        description: 'Performing controlled cyberattacks on systems to identify security weaknesses before they can be exploited by malicious actors.',
        icon: '🛡️'
      },
      {
        name: 'Security Architecture',
        level: 'Advanced',
        description: 'Designing secure system architectures with defense-in-depth strategies, encryption, and access controls.',
        icon: '🏛️'
      },
      {
        name: 'Incident Response',
        level: 'Intermediate',
        description: 'Developing and implementing incident response plans to effectively address security breaches and minimize impact.',
        icon: '🚨'
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: '⚙️',
    color: 'warning',
    description: 'Streamlining development and operations with automated pipelines and infrastructure as code, focusing on continuous integration, delivery, and deployment.',
    skills: [
      {
        name: 'CI/CD',
        level: 'Expert',
        description: 'Setting up and managing continuous integration and continuous deployment pipelines using tools like Jenkins, GitHub Actions, and GitLab CI.',
        icon: '🔄'
      },
      {
        name: 'Docker',
        level: 'Expert',
        description: 'Containerizing applications for consistent deployment across different environments and improved resource utilization.',
        icon: '🐳'
      },
      {
        name: 'Kubernetes',
        level: 'Advanced',
        description: 'Orchestrating containerized applications for automated deployment, scaling, and management in production environments.',
        icon: '☸️'
      },
      {
        name: 'Infrastructure as Code',
        level: 'Advanced',
        description: 'Using tools like Terraform, CloudFormation, and Ansible to automate infrastructure provisioning and configuration.',
        icon: '📄'
      },
      {
        name: 'Monitoring & Observability',
        level: 'Advanced',
        description: 'Implementing comprehensive monitoring solutions using Prometheus, Grafana, ELK stack, and other tools for system visibility.',
        icon: '📊'
      },
      {
        name: 'Site Reliability Engineering',
        level: 'Intermediate',
        description: 'Applying software engineering principles to infrastructure and operations problems to create scalable and reliable systems.',
        icon: '🔧'
      }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    icon: '💻',
    color: 'accent',
    description: 'Proficiency in various programming languages for different application domains, from web development to automation and system programming.',
    skills: [
      {
        name: 'Python',
        level: 'Advanced',
        description: 'Extensive experience with Python for automation, web development, and data processing.',
        icon: '🐍'
      },
      {
        name: 'JavaScript/TypeScript',
        level: 'Advanced',
        description: 'Frontend and backend development with modern JavaScript frameworks and TypeScript.',
        icon: '🔥'
      },
      {
        name: 'Java',
        level: 'Intermediate',
        description: 'Object-oriented programming and backend development with Java.',
        icon: '☕'
      },
      {
        name: 'Go (Golang)',
        level: 'Intermediate',
        description: 'Backend development with Go, focusing on performance and concurrency.',
        icon: '🐋'
      }
    ]
  }
];