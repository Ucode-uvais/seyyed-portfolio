import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/seyyed-uvais",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/seyd.uvais",
  },
  {
    title: "WhatsApp",
    href: "https://wa.me/8606074854",
  },
  {
    title: "GitHub",
    href: "https://github.com/Ucode-uvais",
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; 2024 Seyyed. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 cursor-pointer text-white"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="h-5 w-5" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
