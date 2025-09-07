import { Mail, Github, Linkedin, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">Get In Touch</h2>
        <p className="text-white/80 max-w-xl mx-auto mb-12 animate-fade-in">
          I'm always open to discussing new projects, opportunities, and collaborations. Feel free to reach out!
        </p>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all animate-fade-in-up animate-delay-100 shadow-lg card-hover">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Email Me</h3>
            <a 
              href="mailto:andy@andydelgado.dev" 
              className="inline-flex items-center text-white bg-primary/40 hover:bg-primary/60 px-5 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              andy@andydelgado.dev
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all animate-fade-in-up animate-delay-200 shadow-lg card-hover">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <div className="inline-flex items-center text-white bg-primary/40 px-5 py-2 rounded-lg shadow-md">
              Belleview, FL 34491
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 animate-fade-in-up animate-delay-300">
          
          <Button
            asChild
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            <a
              href="https://github.com/swamp-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaGithub className="h-5 w-5 mr-2" />
              GitHub Profile
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            <a
              href="https://www.linkedin.com/in/floridaDev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaLinkedin className="h-5 w-5 mr-2" />
              LinkedIn Profile
            </a>
          </Button>
        </div>
        
        <p className="text-white/70 mt-6 animate-fade-in">Let's build something amazing together!</p>
      </div>
    </section>
  );
}
