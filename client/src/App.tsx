import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import BackToTop from "@/components/BackToTop";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const handleSkipLink = () => {
    // Find the main content and focus it
    const mainContent = document.getElementById('about');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#about" 
        className="skip-link" 
        onClick={handleSkipLink}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSkipLink();
          }
        }}
      >
        Skip to main content
      </a>
      
      <Router />
      <BackToTop />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
