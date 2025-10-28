import { useState, useEffect } from "react";

/**
 * A custom hook to detect if an element is currently visible in the viewport.
 * @param {React.RefObject} ref - A ref to the element you want to observe.
 * @returns {boolean} - True if the element is on screen, false otherwise.
 */
export const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // Set up the IntersectionObserver to call setIntersecting
    // when the element's visibility changes.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isIntersecting;
};
