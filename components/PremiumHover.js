import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&";
const duration = 700;

export default function PremiumHover({
  text,
  href,
  className = "",
  children,
  scramble = true,
  sound = false,
  type = "button",
  disabled = false,
  onMouseEnter,
  onFocus,
  ...rest
}) {
  const label = text || (typeof children === "string" ? children : "");
  const [displayText, setDisplayText] = useState(label);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef(null);
  const startTimeRef = useRef(0);
  const audioRef = useRef(null);

  function getRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
  }

  function playHoverSound() {
    if (!sound || disabled || typeof Audio === "undefined") {
      return;
    }

    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/sounds/nav-hover.mp3");
        audioRef.current.volume = 0.2;
      }

      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    } catch {
      // Missing or blocked audio should never break the website.
    }
  }

  function startScramble() {
    if (!scramble || disabled || !label) {
      return;
    }

    cancelAnimationFrame(frameRef.current);
    setIsScrambling(true);
    startTimeRef.current = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const resolvedCount = Math.floor(progress * label.length);

      const nextText = label
        .split("")
        .map((character, index) => {
          if (character === " ") {
            return " ";
          }

          if (index < resolvedCount) {
            return character;
          }

          return getRandomCharacter();
        })
        .join("");

      setDisplayText(nextText);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(label);
        setIsScrambling(false);
      }
    }

    frameRef.current = requestAnimationFrame(animate);
  }

  function handleMouseEnter(event) {
    onMouseEnter?.(event);
    playHoverSound();
    startScramble();
  }

  function handleFocus(event) {
    onFocus?.(event);
    startScramble();
  }

  useEffect(() => {
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const hoverClassName = [
    "premium-hover",
    className,
    isScrambling ? "is-scrambling" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const visibleText = isScrambling ? displayText : label;

  const content = (
    <>
      {label && <span className="premium-hover-text">{visibleText}</span>}
      {children && typeof children !== "string" ? children : null}
    </>
  );

  const sharedProps = {
    className: hoverClassName,
    onMouseEnter: handleMouseEnter,
    onFocus: handleFocus,
    "aria-label": label || rest["aria-label"],
    style: label ? { "--scramble-width": `${label.length}ch` } : undefined,
    ...rest,
  };

  if (href) {
    return (
      <Link href={href} {...sharedProps}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} {...sharedProps}>
      {content}
    </button>
  );
}
