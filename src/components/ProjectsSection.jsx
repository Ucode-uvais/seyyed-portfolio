import { ExternalLink, Star, TrendingUp } from "lucide-react";
import { LiaGithub } from "react-icons/lia";
import { FaGithub } from "react-icons/fa6";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Mind Haven",
    description:
      "AI-powered mental health therapy platform designed to provide accessible and empathetic support for emotional well-being.",
    image: "/projects/mindhaven.jpg",
    tags: ["Next.js", "TailwindCSS", "MongoDB"],
    demoUrl: "https://mindhaven-ai.vercel.app/",
    githubUrl: "https://github.com/Ucode-uvais/mind-haven-ai",
    featured: true,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 2,
    title: "PicForge AI",
    description:
      "Micro Saas Photo Editor with AI-driven background removal, smart crop, and enhancements in one modern studio.",
    image: "/projects/picforge.jpg",
    tags: ["TypeScript", "ImageKit", "Next.js"],
    demoUrl: "https://picforge-ai.vercel.app/",
    githubUrl: "https://github.com/Ucode-uvais/picforge",
    featured: true,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "Social Media Content Generator",
    description:
      "A powerful Next.js application that leverages AI to generate engaging content for various social media platforms.",
    image: "/projects/threadspark.png",
    tags: ["Next.js", "Gen AI", "Stripe"],
    demoUrl: "https://threadspark.vercel.app/",
    githubUrl: "https://github.com/Ucode-uvais/threadspark",
    featured: false,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-subtle"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header with animated elements */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">
              Featured Projects
            </span>
            <Star className="w-4 h-4 text-primary fill-primary" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Crafted With{" "}
            <span className="text-primary relative">
              Passion
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5.5C50 1.5 100 1.5 199 5.5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore my latest projects showcasing modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative opacity-0 animate-fade-in"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              {/* Card container with gradient border effect */}
              <div className="relative h-full bg-card rounded-2xl overflow-hidden border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}
                ></div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Featured
                  </div>
                )}

                {/* Image container with overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay with quick actions - Always visible on mobile, hover on desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LiaGithub size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6 z-10">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/80 hover:bg-secondary transition-colors duration-200 border border-border/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full transform translate-x-12 translate-y-12 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/20">
            <div>
              <h3 className="text-2xl font-bold mb-2">Want to see more?</h3>
              <p className="text-muted-foreground">
                Check out my GitHub for additional projects and open-source
                contributions
              </p>
            </div>

            <a
              className="group cosmic-button flex items-center gap-2 text-lg px-8 py-3"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Ucode-uvais"
            >
              <FaGithub
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              Explore GitHub
              <ExternalLink
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
