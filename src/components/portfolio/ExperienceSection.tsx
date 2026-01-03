import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function ExperienceSection() {
  const experience = {
    company: 'Semicolon',
    position: 'DevOps and Cloud Engineer',
    type: 'Full-time',
    location: 'Lagos, Lagos State, Nigeria (On-site)',
    period: 'Oct 2023 - Mar 2025',
    responsibilities: [
      'Designed and implemented highly scalable AWS infrastructure using Terraform',
      'Implemented CI/CD pipelines using GitHub Actions and Jenkins',
      'Led the Cloud Team in the Enum project to provide infrastructure for the Development team',
      'Deployed and managed containerised microservices using Docker and Kubernetes',
      'Configured and secured Linux-based systems for hosting and operations',
      'Designed and maintained IP networking, load balancers, and service connectivity',
      'Implemented monitoring and alerting using Prometheus, Grafana, and Fluentd for observability',
    ],
    achievements: [
      'Automated AWS provisioning using Terraform and Ansible, reducing setup time by 60%',
      'Deployed CI/CD pipelines that improved release frequency by 30% integrating SAST tools such as SonarQube',
      'Led the Enum Project Cloud Team, providing CI/CD automation and secure access via Keycloak (OIDC/SSO)',
    ],
  };

  return (
    <section id="experience" className="py-16 xl:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardHeader>
              <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl text-foreground">{experience.position}</CardTitle>
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
                <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((item, index) => (
                    <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {experience.achievements.map((item, index) => (
                    <li key={index} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="text-primary mt-1.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
