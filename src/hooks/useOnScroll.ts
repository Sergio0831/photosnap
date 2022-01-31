import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useScroll = (thresh = 0.4) => {
  const controls = useAnimation();
  const [element, inView] = useInView({
    threshold: thresh,
    rootMargin: "-100px 0px"
  });

  if (inView) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, inView];
};

export default useScroll;
