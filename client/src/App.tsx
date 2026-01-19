import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import CookieBanner from "@/components/CookieBanner";
import Home from "@/pages/Home";

import DubaiSetup from "./pages/DubaiSetup";
import TaxServices from "./pages/TaxServices";
import Insolvency from "@/pages/Insolvency";
import Imprint from "@/pages/Imprint";
import Privacy from "@/pages/Privacy";
import Team from "@/pages/Team";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dubai-setup" component={DubaiSetup} />
      <Route path="/tax-services" component={TaxServices} />
      <Route path="/insolvency" component={Insolvency} />
      <Route path="/imprint" component={Imprint} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/team" component={Team} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <CookieBanner />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
