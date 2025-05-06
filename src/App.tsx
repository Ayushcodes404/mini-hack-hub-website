
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import InfoPage from "./pages/Info";
import SessionsPage from "./pages/Sessions";
import ProblemsPage from "./pages/Problems";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading ? (
          <LoadingScreen onLoadComplete={() => setIsLoading(false)} />
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/info"
                element={
                  <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <div className="flex-grow">
                      <InfoPage />
                    </div>
                  </div>
                }
              />
              <Route
                path="/sessions"
                element={
                  <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <div className="flex-grow">
                      <SessionsPage />
                    </div>
                  </div>
                }
              />
              <Route
                path="/problems"
                element={
                  <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <div className="flex-grow">
                      <ProblemsPage />
                    </div>
                  </div>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
