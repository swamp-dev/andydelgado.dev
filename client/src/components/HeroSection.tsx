import { Button } from "@/components/ui/button";
import headshot from "@assets/Headshot.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 text-white relative overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, #0b1c33 0%, #0f2a4f 50%, #1a3a64 100%)"
      }}
      role="region"
      aria-labelledby="about-heading"
      tabIndex={-1}
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 right-1/3 w-56 h-56 border border-blue-300/30 rounded-full"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-300/20 rounded-full"></div>
          <div className="absolute bottom-1/3 right-10 w-72 h-72 border border-blue-300/10 rounded-full"></div>
          
          {/* Tech pattern */}
          <div className="absolute bottom-0 left-0 w-full h-64 bg-grid-white/5"></div>
        </div>
        
        {/* Light streaks */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-blue-500/5 via-transparent to-transparent transform -skew-y-6"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-l from-indigo-500/10 via-transparent to-transparent transform skew-y-6"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-right">
            <h1 id="about-heading" className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 text-transparent bg-clip-text leading-relaxed">
              Andy Delgado
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Senior Software Engineer</h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              Results-driven Full Stack Software Engineer with 6+ years of experience
              in FinTech and airline industries, specializing in scalable and
              high-performance software solutions. Experienced in AWS, TypeScript,
              Golang, and CI/CD, with a focus on reliable software delivery and
              workflow optimization.
            </p>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4" role="group" aria-label="Actions">
              <div>
                <Button
                  onClick={scrollToContact}
                  className="bg-white text-primary font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                  aria-label="Contact Andy Delgado"
                >
                  Contact Me
                </Button>
              </div>
              <div className="flex space-x-3" role="group" aria-label="Social links">
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white font-medium py-2 px-6 rounded-lg hover:bg-white/10 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                >
                  <a
                    href="https://github.com/swamp-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                    aria-label="Visit Andy's GitHub profile"
                  >
                    <FaGithub className="mr-2" aria-hidden="true" /> 
                    <span>GitHub</span>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white font-medium py-2 px-6 rounded-lg hover:bg-white/10 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                >
                  <a
                    href="https://www.linkedin.com/in/floridaDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                    aria-label="Visit Andy's LinkedIn profile"
                  >
                    <FaLinkedin className="mr-2" aria-hidden="true" /> 
                    <span>LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 animate-fade-in">
            <div className="relative">
              {/* Decorative circle behind image */}
              <div className="absolute inset-0 bg-white/20 rounded-full transform scale-110 blur-sm"></div>
              
              <div className="bg-white p-2 rounded-full shadow-xl mx-auto relative" 
                  style={{ maxWidth: "320px", aspectRatio: "1/1" }}>
                <img
                  src={headshot}
                  alt="Andy Delgado - Professional headshot of a male software engineer with short dark hair"
                  className="rounded-full w-full h-full object-cover"
                  style={{ aspectRatio: "1/1", objectPosition: "top center" }}
                  loading="eager"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-yellow-400 opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-blue-400 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
