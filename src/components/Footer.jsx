import React from "react";
import { ArrowUp, Mail, Phone, MapPin, Heart } from "lucide-react";
import {
  LiaGithub,
  LiaLinkedin,
  LiaInstagram,
  LiaWhatsapp,
} from "react-icons/lia";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/seyyed-uvais/",
    icon: LiaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Ucode-uvais",
    icon: LiaGithub,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/seyd.uvais/",
    icon: LiaInstagram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/918606074854",
    icon: LiaWhatsapp,
  },
];

export const Footer = React.forwardRef((props, ref) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={ref}
      className="relative bg-secondary/30 border-t border-border"
    >
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Contact</h3>
            <ul className="space-y-3 flex flex-col items-center">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:seyyeduvais@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  seyyeduvais@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+918606074854"
                  className="hover:text-primary transition-colors"
                >
                  +91 86060 74854
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Kasaragod, Kerala</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Follow Me</h3>
            <div className="flex justify-center gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Open to freelance opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Seyyed Uvais. Built with{" "}
            <Heart className="inline h-4 w-4 text-red-500 fill-current" /> using
            React & Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
});
