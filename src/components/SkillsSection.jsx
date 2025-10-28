import { Code2, Library, Wrench, Database } from "lucide-react";

const skillsData = {
  languages: {
    icon: Code2,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  frameworks: {
    icon: Library,
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    title: "Libraries/Frameworks",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit",
      "Prisma ORM",
    ],
  },
  databases: {
    icon: Database,
    color: "bg-red-500/10 text-red-500 border-red-500/20",
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"],
  },
  tools: {
    icon: Wrench,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    title: "Development Tools",
    skills: ["Git", "GitHub", "Visual Studio", "Postman"],
  },
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated list of my technical capabilities, from frontend design to
            backend architecture and deployment.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillsData).map(([category, data]) => {
            const IconComponent = data.icon;
            return (
              <div
                key={category}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${data.color} border`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{data.title}</h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-sm bg-secondary/70 hover:bg-secondary rounded-md transition-colors duration-200 border border-border/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
