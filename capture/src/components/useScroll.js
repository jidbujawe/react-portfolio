import { useInView } from "react-intersection-observer"; // set the view to true when an element is in view using scroll
import { useAnimation } from "framer-motion"; // useAnimation is to control when you'd like an animation to fire

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
