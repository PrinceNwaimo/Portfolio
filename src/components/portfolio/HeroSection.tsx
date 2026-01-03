import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 xl:pt-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12">
          <div className="flex-1 text-center xl:text-left space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl xl:text-6xl font-bold text-foreground">
                Prince Nwaimo
              </h1>
              <h2 className="text-2xl xl:text-3xl font-semibold text-primary">
                DevOps || Cloud || Software Engineer
              </h2>
            </div>
            
            <p className="text-base xl:text-lg text-muted-foreground max-w-2xl mx-auto xl:mx-0">
              Driving business success and customer satisfaction through cutting-edge cloud technology, 
              exceptional products, scalable infrastructure, efficient management, and precise engineering.
            </p>

            <div className="flex flex-col xl:flex-row gap-4 justify-center xl:justify-start">
              <Button onClick={scrollToContact} size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="#" download>
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center xl:justify-start pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/nwaimo-prince" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center xl:justify-end">
            <div className="relative w-64 h-64 xl:w-96 xl:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <img
                src="https://miaoda-site-img.s3cdn.medo.dev/images/fada7ccd-13d4-41b0-9528-f9d12f31d2d9.jpg"
                alt="Prince Nwaimo - DevOps Engineer"
                className="relative rounded-full w-full h-full object-cover border-4 border-primary/20 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}