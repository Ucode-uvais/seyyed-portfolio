// src/components/WhatsAppChat.jsx

import { LiaWhatsapp } from "react-icons/lia";
import { cn } from "@/lib/utils"; //

export const WhatsAppChat = ({ isVisible }) => {
  const whatsappUrl = "https://wa.me/918606074854";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 group transition-all duration-300 ease-out",
        // Apply classes based on the isVisible prop
        isVisible
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none translate-y-4"
      )}
      aria-label="Chat with me on WhatsApp"
    >
      {/* "Chat with me!" button (from your image) */}
      <span className="hidden md:block bg-card text-foreground px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-transform duration-300 group-hover:-translate-y-1">
        Let's Chat!
      </span>

      {/* Green WhatsApp Button (from your image) */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
        <LiaWhatsapp className="w-8 h-8 text-white" />

        {/* Notification Badge (from your image) */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold border-2 border-background">
          1
        </span>
      </div>
    </a>
  );
};
