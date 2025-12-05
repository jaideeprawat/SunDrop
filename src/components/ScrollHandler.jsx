import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollHandler({ headerOffset = 80 }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50); // small delay to allow DOM rendering
  }, [pathname, hash, headerOffset]);

  return null;
}
