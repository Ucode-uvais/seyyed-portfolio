import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Welcome Badge */}
            <div className="inline-block opacity-0 animate-fade-in">
              <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                Welcome
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              <span className="opacity-0 animate-fade-in-delay-1">
                {`Hi, I'm `}
              </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                Seyyed Uvais
              </span>
              <br />
              <span className="opacity-0 animate-fade-in-delay-2">
                Full Stack{" "}
              </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-2">
                Developer
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3 leading-relaxed mx-auto lg:mx-0">
              I create stellar web experiences with modern technologies.
              Specializing in frontend development, I build interfaces that are
              both beautiful and functional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-delay-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                View Portfolio
                <ArrowDown size={16} />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative flex justify-center lg:justify-end opacity-0 animate-fade-in-delay-2">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-primary rounded-2xl transform -rotate-3"></div>

              {/* Photo Container */}
              <div className="relative bg-card rounded-2xl p-2 border-4 border-background shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/profile.jpg"
                  alt="Seyyed Uvais"
                  className="w-72 h-96 md:w-80 md:h-[28rem] object-cover rounded-xl"
                />
              </div>

              {/* Decorative Dots */}
              <div className="absolute -top-4 -left-4 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute top-10 -right-6 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
