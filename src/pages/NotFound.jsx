import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="container mx-auto max-w-2xl text-center">
        {/* 404 Animation */}
        <div className="relative mb-4">
          <div className="bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] h-[250px] md:h-[350px] bg-center bg-no-repeat bg-contain">
            <h1 className="text-6xl md:text-8xl font-bold text-primary pt-6 md:pt-10">
              404
            </h1>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Oops! <span className="text-primary">Page Not Found</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Looks like you've ventured into uncharted territory. The page you're
            looking for doesn't exist.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <button
              onClick={() => navigate("/")}
              className="cosmic-button flex items-center gap-2"
            >
              <Home size={18} />
              Go back Home
            </button>
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            Looking for something specific? Try these links:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/#about" className="text-sm text-primary hover:underline">
              About
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="/#skills" className="text-sm text-primary hover:underline">
              Skills
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="/#projects"
              className="text-sm text-primary hover:underline"
            >
              Projects
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="/#contact"
              className="text-sm text-primary hover:underline"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
