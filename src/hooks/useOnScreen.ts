import { useState, useEffect } from "react";

function useOnScreen(
  ref: React.MutableRefObject<HTMLElement | null>,
  rootMargin = "-100px 0px"
) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let observerRefValue: HTMLElement | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }
    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

export default useOnScreen;
