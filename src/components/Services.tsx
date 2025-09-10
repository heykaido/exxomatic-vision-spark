import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Smartphone, Settings, Globe, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Modern web applications using React, Angular, and Vue.js with responsive design and optimal performance.",
      technologies: ["React", "Angular", "Vue.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with Node.js, C#, and .NET, ensuring scalability and security.",
      technologies: ["Node.js", "C#", ".NET", "SQL Server", "PostgreSQL"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform and native mobile applications for iOS and Android with seamless user experiences.",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Xamarin"]
    },
    {
      icon: Settings,
      title: "SAP Development",
      description: "Enterprise SAP solutions and customizations to streamline your business processes.",
      technologies: ["SAP ABAP", "SAP UI5", "SAP Fiori", "SAP HANA", "S/4HANA"]
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end development from concept to deployment with modern architecture patterns.",
      technologies: ["Microservices", "APIs", "Cloud", "DevOps", "CI/CD"]
    },
    {
      icon: Layers,
      title: "Custom Software",
      description: "Tailored software solutions designed specifically for your unique business requirements.",
      technologies: ["Enterprise Apps", "Web Portals", "E-commerce", "CRM", "ERP"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="hero-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive software development services using cutting-edge technologies 
            to bring your digital vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover shadow-card bg-gradient-card border-0">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;