import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: ['AWS (EC2, S3, IAM, Lambda, CloudWatch)', 'Azure'],
    },
    {
      title: 'Infrastructure as Code & Automation',
      skills: ['Terraform', 'Ansible', 'Helm'],
    },
    {
      title: 'CI/CD & DevOps',
      skills: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Scripting',
      skills: ['Bash', 'Python', 'YAML', 'PowerShell'],
    },
    {
      title: 'Security',
      skills: ['Keycloak (OIDC, OAuth2)', 'SAST tools (SonarQube, CodeQL)'],
    },
    {
      title: 'Monitoring & Observability',
      skills: ['Prometheus', 'Grafana', 'Fluentd', 'ELK Stack'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'SQL/NoSQL'],
    },
    {
      title: 'Networking',
      skills: ['VPCs', 'DNS', 'Load Balancing', 'IP configuration', 'Firewalling'],
    },
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'CSS', 'React.js'],
    },
    {
      title: 'Linux Administration',
      skills: ['Ubuntu', 'CentOS', 'RHEL', 'System Hardening'],
    },
    {
      title: 'Soft Skills',
      skills: [
        'Platform upgrade coordination',
        'Cross-team coordination & communication',
        'Requirements gathering & prioritisation',
        'Documentation & stakeholder communication',
        'Backlog ownership & Agile delivery',
        'Team leadership',
        'Problem-solving',
        'Mentoring',
        'Collaboration',
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 xl:py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}