import { Code, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-6 w-6" />
              <h3 className="text-2xl font-bold">Exxomatic</h3>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Transforming businesses through innovative software development. 
              We specialize in modern technologies to deliver exceptional digital solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@exxomatic.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#services" className="hover:text-background transition-smooth">Frontend Development</a></li>
              <li><a href="#services" className="hover:text-background transition-smooth">Backend Development</a></li>
              <li><a href="#services" className="hover:text-background transition-smooth">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-background transition-smooth">SAP Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-background/80">
              <li>React & Angular</li>
              <li>Node.js & C#</li>
              <li>SQL Server & PostgreSQL</li>
              <li>Mobile Development</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © {currentYear} Exxomatic. All rights reserved. Built with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;