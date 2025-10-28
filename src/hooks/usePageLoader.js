import { useState, useEffect } from "react";

/**
 * A hook to manage the initial page loading state.
 * It ensures the loader is visible for a minimum duration
 * to satisfy the 1-2 second display requirement.
 */
export const usePageLoader = (minimumDuration = 1500) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This effect runs once on component mount.
    // We set a timer to ensure the loader is visible
    // for at least the minimum duration (1.5s by default).
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minimumDuration);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [minimumDuration]);

  return isLoading;
};
