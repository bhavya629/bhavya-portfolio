import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import PremiumHover from "../components/PremiumHover";
import { FaEnvelope, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function playTypingSound(event) {
    const blockedKeys = [
      "Shift",
      "Control",
      "Alt",
      "Meta",
      "Tab",
      "CapsLock",
      "Escape",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
    ];

    if (blockedKeys.includes(event.key)) return;
    if (typeof window === "undefined") return;

    const soundSetting = localStorage.getItem("sound-setting");
    if (soundSetting === "muted") return;

    try {
      const audio = new Audio("/sounds/perfect-key-click.mp3");
      audio.volume = 0.12;
      audio.currentTime = 0;

      audio.play().catch(() => {});

      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 120);
    } catch (error) {
      console.log("Typing sound error:", error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
        return;
      }

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Unable to send your message right now. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <Head>
        <title>Contact | Bhavya Desai</title>
        <meta
          name="description"
          content="Contact Bhavya Desai for website and full stack development work."
        />
      </Head>

      <main className="site-shell">
        <nav className="navbar">
          <Link href="/" className="brand">
            <span>Bhavya</span> Desai
          </Link>

          <div className="nav-links">
            <PremiumHover href="/" text="Home" className="scramble-link" sound />
            <PremiumHover href="/about" text="About" className="scramble-link" sound />
            <PremiumHover href="/projects" text="Projects" className="scramble-link" sound />
            <PremiumHover href="/services" text="Services" className="scramble-link" sound />
            <PremiumHover href="/contact" text="Contact" className="scramble-link" sound />
          </div>

          <PremiumHover href="/contact" text="Hire Me" className="nav-button" sound />
        </nav>

        <section className="page-hero section-container animate-on-scroll">
          <p className="section-label">Contact</p>
          <h1>Let&apos;s discuss your next website.</h1>
          <p>
            Send a message for business websites, e-commerce projects, travel
            websites, portfolios, dashboards, or maintenance work.
          </p>
        </section>

        <section className="section-container contact-layout animate-on-scroll">
          <div className="contact-details">
            <article className="info-card">
              <div className="card-icon">
                <FaEnvelope />
              </div>
              <h2>Email</h2>
              <a href="mailto:bhavyadesai97@gmail.com">
                bhavyadesai97@gmail.com
              </a>
            </article>

            <article className="info-card">
              <div className="card-icon">
                <FaPhoneAlt />
              </div>
              <h2>Phone</h2>
              <a href="tel:9558689964">9558689964</a>
            </article>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              onKeyDown={playTypingSound}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              onKeyDown={playTypingSound}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me about your project"
              value={formData.message}
              onChange={handleChange}
              onKeyDown={playTypingSound}
            />

            {status.message && (
              <p className={`form-message ${status.type}`}>
                {status.message}
              </p>
            )}

            <PremiumHover
              type="submit"
              className="primary-button form-button"
              disabled={isSending}
              text={isSending ? "Sending..." : "Submit"}
              scramble={false}
              sound
            >
              <FaPaperPlane />
            </PremiumHover>
          </form>
        </section>

        <footer className="footer">
          <div className="footer-brand">
            <h3>Bhavya Desai</h3>
            <p>Next.js & Full Stack Developer</p>
            <p>(c) 2026 Bhavya Desai. All rights reserved.</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <a href="mailto:bhavyadesai97@gmail.com">bhavyadesai97@gmail.com</a>
            <a href="tel:9558689964">9558689964</a>
          </div>
        </footer>
      </main>
    </>
  );
}