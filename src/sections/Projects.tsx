import streamdocsLandingPage from "@/assets/images/streamdocs-landing-page.png";
import threadsparkLandingPage from "@/assets/images/threadspark-landing-page.png";
import forexswiftLandingPage from "@/assets/images/forexswift-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "Personal",
    year: "2024",
    title: "Stream Docs",
    results: [
      { title: "Real-time Collaborative Text Editor" },
      { title: "Replicates the functionality of GoogleDocs" },
      { title: "allows multilple users to work on same doc simultaneously" },
    ],
    link: "https://stream-docs-snowy.vercel.app/",
    image: streamdocsLandingPage,
  },
  {
    company: "Personal",
    year: "2024",
    title: "ThreadSpark AI",
    results: [
      { title: "Leverages AI to generate engaing content" },
      { title: "get quick content generation for various social media" },
    ],
    link: "https://threadspark.vercel.app/",
    image: threadsparkLandingPage,
  },
  {
    company: "Kliffto Dev",
    year: "2024",
    title: "ForexSwift",
    results: [
      { title: "Convert any currency" },
      { title: "Get fast paced result in a single step" },
      { title: "Enhanced user experience by 40%" },
    ],
    link: "https://forexswift.vercel.app/",
    image: forexswiftLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description=" See how I transformed concepts into engaging digital experiences"
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px )` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, resultIndex) => (
                      <li
                        key={resultIndex}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};