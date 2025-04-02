import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    className = 'animate-visible'
  } = options;
  
  const elementsRef = useRef<(T | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove(className);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    // Observe all current elements
    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });
    
    // Cleanup function
    return () => {
      elementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [threshold, rootMargin, triggerOnce, className]);
  
  // Return a callback to set element refs
  const setRef = (index: number) => (element: T | null) => {
    elementsRef.current[index] = element;
  };
  
  return { setRef, elementsRef };
}