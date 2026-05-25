import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("rv")) {
              entry.target.classList.add("visible");
            }
            if (entry.target.classList.contains("rv-s")) {
              const children = entry.target.children;
              Array.from(children).forEach((child, i) => {
                setTimeout(() => {
                  child.classList.add("visible");
                }, i * 120);
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".rv, .rv-s").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
