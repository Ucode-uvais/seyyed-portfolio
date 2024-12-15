import DownloadBtn from "@/assets/icons/download-btn.svg";
import grainImage from "@/assets/images/grain.jpg";

export const DownloadSection = () => {
  return (
    <div className="py-16 lg:py-24 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0">
          <h2 className="font-serif text-2xl md:text-3xl">
            Download My Resume
          </h2>
          <p className="text-sm md:text-base mt-2">
            Click the button below to download a copy of my resume.
          </p>
          <a
            href="/Resume.pdf" // Path to your resume file in the public folder
            download
            className="inline-flex items-center gap-2 border border-gray-900 bg-gray-900 text-white px-6 h-12 rounded-xl mt-4"
          >
            <span className="font-semibold">Download Resume</span>
            <DownloadBtn className="size-5 bg-white" />
          </a>
        </div>
      </div>
    </div>
  );
};
