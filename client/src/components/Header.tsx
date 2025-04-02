import { useState, useRef, KeyboardEvent } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    
    // When opening mobile menu, set focus to the first item
    if (!mobileMenuOpen) {
      setTimeout(() => {
        const firstButton = mobileNavRef.current?.querySelector('button');
        if (firstButton) {
          (firstButton as HTMLButtonElement).focus();
        }
      }, 100);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      
      // Set focus to the section for screen readers
      element.setAttribute('tabindex', '-1');
      element.focus();
      
      // Remove tabindex after focus
      setTimeout(() => {
        element.removeAttribute('tabindex');
      }, 1000);
    }
    setMobileMenuOpen(false);
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(id);
    }
  };
  
  // Handle navigation keyboard events
  const handleNavKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    // Handle Escape key to close mobile menu
    if (e.key === 'Escape' && mobileMenuOpen) {
      setMobileMenuOpen(false);
      const menuButton = document.querySelector('button[aria-label="Menu"]') as HTMLButtonElement;
      if (menuButton) menuButton.focus();
    }
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary md:text-2xl">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }} className="focus:outline-none focus:underline">
            Andy Delgado
          </a>
        </h1>
        <nav className="hidden md:flex items-center" ref={navRef} role="navigation" aria-label="Main navigation">
          <ul className="flex space-x-6" role="menubar" aria-label="Main menu">
            <li role="none">
              <button
                onClick={() => scrollToSection("about")}
                onKeyDown={(e) => handleKeyDown(e, "about")}
                className="text-dark hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
                role="menuitem"
                aria-label="Go to About section"
              >
                About
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => scrollToSection("skills")}
                onKeyDown={(e) => handleKeyDown(e, "skills")}
                className="text-dark hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
                role="menuitem"
                aria-label="Go to Skills section"
              >
                Skills
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => scrollToSection("experience")}
                onKeyDown={(e) => handleKeyDown(e, "experience")}
                className="text-dark hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
                role="menuitem"
                aria-label="Go to Experience section"
              >
                Experience
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => scrollToSection("education")}
                onKeyDown={(e) => handleKeyDown(e, "education")}
                className="text-dark hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
                role="menuitem"
                aria-label="Go to Education section"
              >
                Education
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => scrollToSection("contact")}
                onKeyDown={(e) => handleKeyDown(e, "contact")}
                className="text-dark hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
                role="menuitem"
                aria-label="Go to Contact section"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden text-dark p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Menu</span>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        id="mobile-menu"
        className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white pb-4`}
        ref={mobileNavRef}
        onKeyDown={handleNavKeyDown}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="container mx-auto px-4" role="navigation" aria-label="Mobile navigation">
          <ul className="space-y-2" role="menu" aria-label="Mobile navigation menu">
            <li role="none">
              <button
                onClick={() => scrollToSection("about")}
                onKeyDown={(e) => handleKeyDown(e, "about")}
                className="block py-2 text-dark hover:text-primary transition-colors w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2"
                role="menuitem"
                aria-label="Go to About section"
              >
                About
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => scrollToSection("skills")}
                onKeyDown={(e) => handleKeyDown(e, "skills")}
                className="block py-2 text-dark hover:text-primary transition-colors w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2"
                role="menuitem"
                aria-label="Go to Skills section"
              >
                Skills
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => scrollToSection("experience")}
                onKeyDown={(e) => handleKeyDown(e, "experience")}
                className="block py-2 text-dark hover:text-primary transition-colors w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2"
                role="menuitem"
                aria-label="Go to Experience section"
              >
                Experience
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => scrollToSection("education")}
                onKeyDown={(e) => handleKeyDown(e, "education")}
                className="block py-2 text-dark hover:text-primary transition-colors w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2"
                role="menuitem"
                aria-label="Go to Education section"
              >
                Education
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => scrollToSection("contact")}
                onKeyDown={(e) => handleKeyDown(e, "contact")}
                className="block py-2 text-dark hover:text-primary transition-colors w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2"
                role="menuitem"
                aria-label="Go to Contact section"
              >
                Contact
              </button>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
