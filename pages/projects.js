import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import PremiumHover from "@/components/PremiumHover";
import {
  FaArrowRight,
  FaShoppingBag,
  FaSuitcase,
  FaTimes,
  FaUserEdit,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaShoppingBag />,
    title: "Cutopia E-Commerce Website",
    text: "A business-ready e-commerce website for product listings, shopping flow, checkout experience, and store presentation.",
    tags: "E-Commerce / Products / Checkout",
    features: [
      "Product listing sections",
      "Cart and checkout focused UI",
      "Admin-ready content structure",
      "Responsive product pages",
    ],
    techStack: ["Next.js", "React", "CSS", "MySQL", "Prisma"],
    challenges:
      "The main challenge was keeping the shopping experience clean while still giving enough product and business information.",
    outcome:
      "The result is a polished e-commerce experience that feels clear, premium, and ready for future backend features.",
  },
  {
    icon: <FaSuitcase />,
    title: "Veloura Holidays Travel Website",
    text: "A travel website built for showcasing packages, destinations, holiday details, booking enquiries, and a premium travel brand.",
    tags: "Travel / Booking / Packages",
    features: [
      "Holiday package cards",
      "Travel enquiry focused layout",
      "Destination presentation",
      "Mobile-friendly booking flow",
    ],
    techStack: ["Next.js", "React", "CSS", "Booking UI", "Payments UI"],
    challenges:
      "The challenge was making travel information feel attractive, easy to scan, and trustworthy for visitors.",
    outcome:
      "The website presents packages clearly and supports a smooth customer journey from browsing to enquiry.",
  },
  {
    icon: <FaUserEdit />,
    title: "Portfolio Blog Website",
    text: "A portfolio and blog website for personal branding, project highlights, content writing, and professional online presence.",
    tags: "Portfolio / Blog / Personal Brand",
    features: [
      "Portfolio sections",
      "Blog-friendly content layout",
      "Project showcase cards",
      "Clean personal brand design",
    ],
    techStack: ["Next.js", "React", "CSS", "JavaScript"],
    challenges:
      "The challenge was balancing personal branding, project details, and blog content without making the page feel crowded.",
    outcome:
      "The final structure gives a clean professional presence with room for future articles and portfolio growth.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Head>
        <title>Projects | Bhavya Desai</title>
        <meta
          name="description"
          content="Projects by Bhavya Desai, Next.js and Full Stack Developer."
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
          <p className="section-label">Projects</p>
          <h1>Featured work built with a full stack mindset.</h1>
          <p>
            A preview of websites focused on clean design, responsive layouts,
            real business use cases, and modern web development.
          </p>
        </section>

        <section className="section-container page-section animate-on-scroll">
          <div className="cards-grid project-page-grid">
            {projects.map((project) => (
              <article className="project-card large-card" key={project.title}>
                <div className="card-icon">{project.icon}</div>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <span>{project.tags}</span>
                <PremiumHover
                  type="button"
                  className="card-button"
                  onClick={() => setSelectedProject(project)}
                  text="View Details"
                  sound
                >
                  <FaArrowRight />
                </PremiumHover>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-cta section-container animate-on-scroll">
          <div>
            <p className="section-label">Project Idea</p>
            <h2>Need a similar website?</h2>
            <p>
              I can help plan and build a premium website for your business,
              personal brand, or service.
            </p>
          </div>
          <PremiumHover
            href="/contact"
            text="Start a Project"
            className="primary-button"
            sound
          >
            <FaArrowRight />
          </PremiumHover>
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

        {selectedProject && (
          <div className="modal-backdrop" role="dialog" aria-modal="true">
            <div className="project-modal">
              <button
                type="button"
                className="modal-close"
                aria-label="Close project details"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>

              <div className="card-icon">{selectedProject.icon}</div>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.text}</p>

              <div className="modal-grid">
                <div>
                  <h3>Features</h3>
                  <ul>
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3>Tech Stack</h3>
                  <div className="modal-tags">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3>Challenges</h3>
                  <p>{selectedProject.challenges}</p>
                </div>

                <div>
                  <h3>Outcome</h3>
                  <p>{selectedProject.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
