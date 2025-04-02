import { FaExternalLinkAlt, FaGraduationCap, FaUniversity, FaCode } from "react-icons/fa";
import fiuLogo from "@assets/FIU-logo.jpg";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12 text-center relative animate-fade-in">
          <span className="border-b-4 border-primary pb-2">Education</span>
        </h2>
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 shadow-md border border-gray-100 card-hover relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-3xl"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 opacity-10"></div>
            
            <div className="md:flex justify-between items-start relative z-10">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full p-1 shadow-md overflow-hidden">
                    <img 
                      src={fiuLogo} 
                      alt="Florida International University Logo" 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Computer Science</h3>
                  <a 
                    href="https://www.fiu.edu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-primary flex items-center gap-1 hover:underline"
                  >
                    <FaUniversity className="inline-block mr-1" />
                    Florida International University
                    <FaExternalLinkAlt className="inline-block w-3 h-3" />
                  </a>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-flex items-center bg-primary/5 px-3 py-1 rounded-full text-sm text-gray-600">
                      <FaCode className="mr-1 text-primary" /> Computer Science
                    </span>
                    <span className="inline-flex items-center bg-primary/5 px-3 py-1 rounded-full text-sm text-gray-600">
                      Miami, FL
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm text-center">
                <p className="text-primary font-semibold">January 2018</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 text-gray-600">
              <p className="text-center italic">
                Built a solid foundation in computer science principles, algorithms, and 
                software development methodologies that support my work as a Senior Software Engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
