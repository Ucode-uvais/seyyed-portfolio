import { useState, useEffect } from "react";
import { cn } from "@/lib/utils"; //

/**
 * A full-screen loader component that fades out smoothly.
 * It unmounts itself after the fade-out animation completes
 * to avoid blocking the page.
 */
export const Loader = ({ isLoading }) => {
  const [isUnmounted, setIsUnmounted] = useState(false);
  const transitionDuration = 500; // 500ms fade-out (matches duration-500)

  useEffect(() => {
    if (!isLoading) {
      // If loading is finished, wait for the fade-out
      // transition to complete before unmounting.
      const timer = setTimeout(() => {
        setIsUnmounted(true);
      }, transitionDuration);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Don't render anything if it's time to unmount
  if (isUnmounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-background",
        "transition-opacity duration-500 ease-out", // Smooth fade-out
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isLoading}
      role="status"
    >
      {/* We use your logo and float animation for a cohesive feel */}
      <img
        src="/u-icon-trans.png"
        alt="Loading..."
        className="h-16 w-16 animate-float"
      />
    </div>
  );
};
