import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Trophy, Clock } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";

const About = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Projects Completed" },
    { icon: Trophy, value: "5+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support Available" },
  ];

  const highlights = [
    "Expert team of certified developers",
    "Agile development methodology",
    "Quality assurance and testing",
    "Post-deployment support and maintenance",
    "Competitive pricing and flexible engagement models",
    "On-time delivery guaranteed"
  ];

  return (
    <section id="about" className="py-24">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Choose <span className="hero-text">Exxomatic</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We are a dedicated team of software engineers and technology experts 
                committed to delivering exceptional digital solutions that drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="btn-secondary shadow-secondary" asChild>
              <a href="#contact">
                Let's Work Together
              </a>
            </Button>
          </div>

          <div className="lg:order-2">
            <div className="relative">
              <img
                src={teamImage}
                alt="Professional software development team at Exxomatic"
                className="w-full h-auto rounded-lg shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;