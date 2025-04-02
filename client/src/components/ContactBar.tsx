import { Mail, MapPin, Code } from "lucide-react";

export default function ContactBar() {
  return (
    <section id="contact-bar" className="py-6 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 mr-6">
            <Mail className="h-5 w-5 text-primary mr-2" />
            <a
              href="mailto:andy@andydelgado.dev"
              className="text-dark hover:text-primary transition-colors"
            >
              andy@andydelgado.dev
            </a>
          </div>
          <div className="flex items-center mb-4 md:mb-0 mr-6">
            <MapPin className="h-5 w-5 text-primary mr-2" />
            <span className="text-dark">Belleview, FL 34491</span>
          </div>
          <div className="flex items-center">
            <Code className="h-5 w-5 text-primary mr-2" />
            <a
              href="https://andydelgado.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark hover:text-primary transition-colors"
            >
              andydelgado.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
