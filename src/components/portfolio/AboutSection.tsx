import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Award,
      title: 'Expertise',
      description: 'Specialized in AWS and Azure infrastructures, CI/CD automation, and containerized microservices',
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Delivering scalable, secure, and efficient cloud solutions for business success',
    },
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'Proven track record of reducing deployment time and improving system reliability',
    },
  ];

  return (
    <section id="about" className="py-16 xl:py-24 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center xl:text-left space-y-4">
            <p className="text-base xl:text-lg text-foreground leading-relaxed">
              DevOps & Cloud Engineer with 3+ years' experience designing, automating, and supporting secure cloud infrastructure across UK SaaS and technology environments. 
              Skilled in AWS, Terraform, Kubernetes, CI/CD automation, IAM security controls, and cloud observability solutions using Prometheus and Grafana to enhance platform reliability and operational performance.
            
            </p>
            <p className="text-base xl:text-lg text-foreground leading-relaxed">
                Experienced in incident response, root cause analysis, production change management, and cloud governance aligned with UK GDPR, NCSC security principles, and enterprise engineering standards.
                I am passionate about leveraging cloud technologies to drive business success, improve operational efficiency, and deliver secure, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border hover:border-primary transition-colors">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}