import { useEffect } from "react";

export default function useTypingSound() {
  useEffect(() => {
    function handleKeyDown(event) {
      const tag = event.target?.tagName;

      if (tag !== "INPUT" && tag !== "TEXTAREA") return;
      if (!event.key || event.key.length > 1) return;

      const audio = new Audio("/sounds/perfect-key-click.mp3");
      audio.volume = 0.12;
      audio.play().catch(() => {});
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}