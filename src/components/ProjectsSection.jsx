import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { LiaGithub } from "react-icons/lia";

const projects = [
  {
    id: 1,
    title: "Mind Haven ",
    description:
      " AI-powered mental health therapy platform designed to provide accessible and empathetic support for emotional well-being.",
    image: "/projects/mindhaven.jpg",
    tags: ["Next.js", "TailwindCSS", "MongoDB"],
    demoUrl: "https://mindhaven-ai.vercel.app/",
    githubUrl: "https://github.com/Ucode-uvais/mind-haven-ai",
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
  },
  {
    id: 3,
    title: " Social Media Content Generator",
    description:
      "A powerful Next.js application that leverages AI to generate engaging content for various social media platforms. ",
    image: "/projects/threadspark.png",
    tags: ["Next.js", "Gen AI", "Stripe"],
    demoUrl: "https://threadspark.vercel.app/",
    githubUrl: "https://github.com/Ucode-uvais/threadspark",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <LiaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Ucode-uvais"
          >
            Check My Github <FaGithub size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
