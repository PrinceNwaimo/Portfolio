import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      company: 'Plousios Gigantas',
      position: 'DevOps & Cloud Platform Operations Engineer',
      type: 'Full-time',
      location: 'United Kingdom',
      period: 'Jan 2026 - Present',
      responsibilities: [
        'Manage and optimise production cloud infrastructure across AWS environments, supporting secure and reliable SaaS platforms through infrastructure automation, Kubernetes operations, CI/CD delivery, monitoring, and cloud governance practices.',
        'Resolve AWS infrastructure configuration issues by investigating Terraform state drift, correcting resource definitions, variables, and outputs across 50+ cloud resources, improving infrastructure consistency and supporting reliable deployment workflows.',
        'Strengthen cloud security posture by reviewing IAM configurations, replacing excessive wildcard permissions with least privilege access policies, and securing 15+ AWS identity and storage controls in line with UK GDPR, NCSC security principles, and internal governance requirements.',
        'Support Kubernetes-based application environments by diagnosing container failures, deployment issues, and service availability problems across 4+ microservices, improving application resilience through pod troubleshooting, readiness probe adjustments, and operational remediation.',
        'Maintain CI/CD delivery pipelines using GitHub Actions by resolving workflow failures, integrating AWS Secrets Manager for credential management, and supporting 20+ monthly deployment activities across development and production environments.',
        'Implement and maintain observability solutions using Prometheus, Grafana, and AWS CloudWatch, creating service dashboards and operational alerts across 30+ application and infrastructure metrics to support proactive incident detection and platform reliability targets.',
        'Collaborate with engineering, security, and product stakeholders to manage production changes through Git-based workflows, contribute to incident reviews and root cause analysis, and improve operational processes through documentation, knowledge sharing, and continuous service improvement.',
        'Automate infrastructure provisioning and operational workflows using Terraform and scripting practices, reducing manual environment setup activities across 3+ deployment environments and improving consistency between development, testing, and production configurations.',
        'Monitor and troubleshoot cloud platform performance issues through AWS CloudWatch, Prometheus, and Grafana dashboards, analysing 40+ daily operational alerts and events to support faster incident triage, service reliability, and proactive platform maintenance.',
      ],
      achievements: [],
    },
    {
      company: 'Aspire People Ltd',
      position: 'Operational Coordinator / Operations Support',
      type: 'Full-time',
      location: 'United Kingdom',
      period: 'Mar 2026 - Present',
      responsibilities: [
        'Delivered structured classroom supervision and operational coordination within fast-paced UK education environments, maintaining accurate records, supporting stakeholder communication, and ensuring continuity of daily activities across teaching teams.',
        'Improved classroom reporting and administrative processes by maintaining attendance records, activity documentation, and operational updates across 100+ weekly student interactions, strengthening data accuracy and supporting effective decision-making.',
        'Coordinated communication between teaching staff, administration teams, and students, managing 15+ daily operational queries and escalations while improving information flow, issue resolution, and collaborative working practices.',
      ],
      achievements: [],
    },
    {
      company: 'Semicolon',
      position: 'DevOps & Automation Engineer',
      type: 'Full-time',
      location: 'Nigeria',
      period: 'Sept 2023 - Mar 2025',
      responsibilities: [
        'Engineered cloud automation solutions across AWS development and staging environments, delivering infrastructure provisioning, deployment automation, and operational support for application delivery teams.',
        'Automated infrastructure provisioning workflows using Terraform modules and Ansible playbooks, reducing manual environment setup effort by 35% while improving configuration consistency across repeatable deployments.',
        'Built and optimised GitHub Actions CI/CD pipelines by integrating automated linting, testing, and deployment controls across 3+ application environments, accelerating software delivery workflows and improving release confidence.',
        'Provisioned and configured AWS infrastructure components including compute, networking, and application services, executing 20+ infrastructure changes through version-controlled workflows aligned with DevOps best practices.',
        'Implemented monitoring and logging capabilities using AWS CloudWatch and Docker logging tools, analysing 50+ monthly system events to identify performance issues, support troubleshooting, and improve platform visibility.',
        'Diagnosed deployment failures, container issues, and application errors through structured troubleshooting and root cause analysis (RCA), resolving recurring operational issues across 5+ service components.',
        'Partnered with software engineers and technical stakeholders to improve DevOps practices, document operational procedures, share automation knowledge, and strengthen continuous improvement initiatives.',
        'Provisioned and automated AWS cloud resources including EC2, S3, IAM, and VPC configurations using Terraform and Ansible, reducing environment preparation time and supporting infrastructure delivery across 10+ cloud resources.',
      ],
      achievements: [],
    },
  ];

  return (
    <section id="experience" className="py-16 xl:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience) => (
            <Card
              key={`${experience.company}-${experience.period}`}
              className="border-border"
            >
              <CardHeader>
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-foreground">
                      {experience.position}
                    </CardTitle>

                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Briefcase className="h-4 w-4" />
                      <span>{experience.company}</span>
                    </div>
                  </div>

                  <Badge variant="secondary" className="w-fit">
                    {experience.type}
                  </Badge>
                </div>

                <div className="flex flex-col xl:flex-row gap-4 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Key Responsibilities:
                  </h4>

                  <ul className="space-y-2">
                    {experience.responsibilities.map((item, index) => (
                      <li
                        key={`${experience.company}-responsibility-${index}`}
                        className="flex gap-3 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {experience.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Key Achievements:
                    </h4>

                    <ul className="space-y-2">
                      {experience.achievements.map((item, index) => (
                        <li
                          key={`${experience.company}-achievement-${index}`}
                          className="flex gap-3 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

