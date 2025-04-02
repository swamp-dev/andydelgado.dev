import { useEffect, useState, useRef } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Focus the button when it becomes visible
  useEffect(() => {
    if (isVisible && buttonRef.current) {
      // Only focus if user is using keyboard navigation (not mouse)
      if (document.activeElement && document.activeElement.tagName === 'BODY') {
        buttonRef.current.focus();
      }
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
    // Set focus to the top of the page or first focusable element
    const firstFocusableElement = document.querySelector('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])') as HTMLElement;
    if (firstFocusableElement) {
      setTimeout(() => {
        firstFocusableElement.focus();
      }, 500); // Allow time for scroll to complete
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <div 
      className={`${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} fixed bottom-4 right-4 z-40 transition-opacity duration-300`}
      role="region"
      aria-label="Back to top button container"
    >
      <Button
        ref={buttonRef}
        onClick={scrollToTop}
        onKeyDown={handleKeyDown}
        size="icon"
        className="rounded-full bg-primary/80 hover:bg-primary shadow-lg hover:shadow-xl w-10 h-10 focus:ring focus:ring-white focus:ring-offset-2 focus:ring-offset-primary focus:outline-none"
        aria-label="Back to top"
        tabIndex={isVisible ? 0 : -1} // Only focusable when visible
      >
        <ChevronUp className="h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Back to top</span>
      </Button>
    </div>
  );
}