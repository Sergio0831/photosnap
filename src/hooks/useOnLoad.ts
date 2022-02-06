import { useState } from "react";
import { useInView } from "react-intersection-observer";

const useOnLoad = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { ref: containerRef, inView: isVisible } = useInView({
    rootMargin: "-100px 0px"
  });

  return { isLoaded, setIsLoaded, containerRef, isVisible };
};

export default useOnLoad;
