import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer API
 * @param {number} threshold - Percentage of element visibility required to trigger animation (0.0 to 1.0)
 * @param {string} rootMargin - Margin around the root viewport for early/late triggering
 * @returns {[React.RefObject, boolean]} - Returns ref to attach to element and visibility state
 */
const useScrollAnimation = (threshold = 0.1, rootMargin = '0px 0px -50px 0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold, // How much of the element must be visible
        rootMargin, // Extend or shrink the root viewport area
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function to unobserve element on component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};

export default useScrollAnimation;
