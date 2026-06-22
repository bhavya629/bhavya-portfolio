import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&";
const duration = 700;

export default function ScrambleLink({ href, children }) {
  const originalText = String(children);
  const [text, setText] = useState(originalText);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef(null);
  const startTimeRef = useRef(0);

  function getRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
  }

  function startScramble() {
    cancelAnimationFrame(frameRef.current);
    setIsScrambling(true);
    startTimeRef.current = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const resolvedCount = Math.floor(progress * originalText.length);

      const nextText = originalText
        .split("")
        .map((character, index) => {
          if (character === " ") {
            return " ";
          }

          if (index < resolvedCount) {
            return character;
          }

          return getRandomLetter();
        })
        .join("");

      setText(nextText);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setText(originalText);
        setIsScrambling(false);
      }
    }

    frameRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <Link
      href={href}
      className={`scramble-link ${isScrambling ? "is-scrambling" : ""}`}
      onMouseEnter={startScramble}
      onFocus={startScramble}
      aria-label={originalText}
      style={{ "--scramble-width": `${originalText.length}ch` }}
    >
      {text}
    </Link>
  );
}
