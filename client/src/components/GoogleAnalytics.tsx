import { useEffect } from "react";
import { useLocation } from "wouter";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const [location] = useLocation();
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    // Load script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Config
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);

    return () => {
      document.head.removeChild(script);
    };
  }, [GA_MEASUREMENT_ID]);

  // Track page views
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !window.gtag) return;
    
    window.gtag("event", "page_view", {
      page_path: location,
    });
  }, [location, GA_MEASUREMENT_ID]);

  return null;
}
