import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'AWS Infrastructure Automation Project',
      description: 'Engineered reusable Infrastructure as Code (IaC) solutions using Terraform and CloudFormation to automate AWS resource provisioning, reducing manual configuration effort by 35% and improving deployment consistency across repeatable environment builds.',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/e34d8d61-18fd-4f7a-8f80-0907be3ec305.jpg',
      technologies: ['AWS, Terraform, CloudFormation, Docker, Kubernetes, CloudWatch'],
      highlights: [
        'Automated AWS resource provisioning using Terraform and CloudFormation',
      ],
    },
    {
      title: 'Infrastructure as Code Demo with Terraform & Local Stack',
      description: 'Designed modular Terraform configurations to provision AWSlike environments including VPC networking, S3 storage, and NGINX workloads, reducing environment setup time by 40% through reusable infrastructure components and automated provisioning workflows.',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/e34d8d61-18fd-4f7a-8f80-0907be3ec305.jpg',
      technologies: ['Terraform, LocalStack, NGINX, Docker, AWS Services, VPC, S3'],
      highlights: [
        'Provisioned AWSlike environments using Terraform and LocalStack',
        'Implemented modular Terraform configurations for reusable infrastructure components',
        'Automated environment setup workflows, reducing manual effort and improving consistency',
      ],
    },

    {
      title: 'Security Monitored Microservice Stack',
      description: 'Built a containerised FastAPI microservice platform with integrated runtime security monitoring using Falco, Prometheus, and Grafana, reducing simulated security event detection time by 45% through automated alerting and observability workflows.',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/e34d8d61-18fd-4f7a-8f80-0907be3ec305.jpg',
      technologies: ['Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'ELK Stack'],
      highlights: [
        'Deployed security monitoring solutions across microservices',
        'Implemented real-time threat detection and alerting',
        'Ensured compliance with security standards and regulations',
      ],
    },
    {
      title: 'CI/CD Deployment Pipeline Project',
      description: 'Developed automated CI/CD pipelines using GitHub Actions, integrating code validation, automated testing, and deployment workflows to reduce manual deployment activities by 70% and improve release efficiency.',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/e34d8d61-18fd-4f7a-8f80-0907be3ec305.jpg',
      technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      highlights: [
        'Implemented automated CI/CD pipelines for application deployment',
      ],
    },
    {
      title: 'Enum Project - Cloud Infrastructure',
      description: 'Led the Cloud Team to provide comprehensive infrastructure for the Development team, implementing CI/CD automation and secure access management.',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/0a1568f9-0661-4b58-a1d8-e0ad25eca394.jpg',
      technologies: ['AWS', 'Terraform', 'Kubernetes', 'Keycloak', 'GitHub Actions'],
      highlights: [
        'Implemented OIDC/SSO authentication using Keycloak',
        'Automated infrastructure provisioning',
        'Established monitoring and observability stack',
      ],
    },
    {
      title: 'Website Hosting Project',
      description: 'Designed and deployed scalable web hosting infrastructure with automated deployment pipelines and comprehensive monitoring.',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/eeffe011-c58a-4979-9aa8-01edf2d9bb79.jpg',
      technologies: ['AWS EC2', 'Docker', 'Jenkins', 'Nginx', 'Prometheus'],
      highlights: [
        'Reduced deployment time by 60%',
        'Implemented automated backup solutions',
        'Configured load balancing for high availability',
      ],
    },
    {
      title: 'E-wallet Application',
      description: 'Built and maintained cloud infrastructure for a secure e-wallet application with focus on security, scalability, and compliance.',
      image: 'https://miaoda-site-img.s3cdn.medo.dev/images/0a1568f9-0661-4b58-a1d8-e0ad25eca394.jpg',
      technologies: ['AWS', 'PostgreSQL', 'Docker', 'Ansible', 'SonarQube'],
      highlights: [
        'Implemented security best practices and SAST integration',
        'Designed secure database architecture',
        'Established disaster recovery procedures',
      ],
    },
  ];

  return (
    <section id="projects" className="py-16 xl:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-border hover:border-primary transition-all hover:shadow-lg overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-foreground flex items-start justify-between gap-2">
                  <span>{project.title}</span>
                  <ExternalLink className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                </CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-xs text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}