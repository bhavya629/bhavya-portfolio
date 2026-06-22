import { useEffect } from "react";
import useTypingSound from "@/hooks/useTypingSound";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  useTypingSound();

  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    animatedItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  });

  return <Component {...pageProps} />;
}
