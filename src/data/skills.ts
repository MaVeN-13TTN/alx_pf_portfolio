import { SkillCategory } from '@/components/SkillsModal';

export const skillCategories: SkillCategory[] = [
  {
    id: 'cloud',
    title: 'Cloud Engineering',
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
    id: 'security',
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
  }
];
