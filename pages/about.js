import Head from "next/head";
import Link from "next/link";
import PremiumHover from "@/components/PremiumHover";
import {
  FaArrowRight,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

const skills = [
  "Next.js",
  "React.js",
  "JavaScript",
  "Node.js",
  "MySQL",
  "Prisma",
  "HTML",
  "CSS",
];

export default function About() {
  return (
    <>
      <Head>
        <title>About | Bhavya Desai</title>
        <meta
          name="description"
          content="Learn more about Bhavya Desai, a Next.js and Full Stack Developer."
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
          <p className="section-label">About Bhavya Desai</p>
          <h1>Next.js & Full Stack Developer</h1>
          <p>
            I create responsive, premium, and practical websites using modern
            frontend design and full stack development skills.
          </p>
        </section>

        <section className="section-container page-grid two-columns animate-on-scroll">
          <article className="info-card">
            <div className="card-icon">
              <FaLaptopCode />
            </div>
            <h2>Who I Am</h2>
            <p>
              I am Bhavya Desai, a developer focused on building clean user
              interfaces, useful business features, and complete web experiences
              with Next.js, React, backend APIs, and databases.
            </p>
          </article>

          <article className="info-card">
            <div className="card-icon">
              <FaGraduationCap />
            </div>
            <h2>Learning Journey</h2>
            <p>
              My learning journey started with HTML, CSS, and JavaScript. From
              there, I moved into React, Next.js, backend development, database
              handling, and real project workflows.
            </p>
          </article>
        </section>

        <section className="section-container page-section animate-on-scroll">
          <div className="section-heading">
            <p className="section-label">Skills</p>
            <h2>Technologies I Work With</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-pill" key={skill}>
                <FaCode />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-container page-grid two-columns animate-on-scroll">
          <article className="info-card">
            <div className="card-icon">
              <FaBriefcase />
            </div>
            <h2>Internship Experience</h2>
            <p>
              I have practiced professional development workflows by building
              structured interfaces, managing project requirements, improving
              responsive layouts, and connecting frontend screens with backend
              logic.
            </p>
          </article>

          <article className="info-card">
            <div className="card-icon">
              <FaArrowRight />
            </div>
            <h2>Project Experience</h2>
            <p>
              My project work includes e-commerce websites, travel booking
              websites, portfolio websites, blogs, admin features, and
              database-driven application flows.
            </p>
          </article>
        </section>

        <section className="contact-cta section-container animate-on-scroll">
          <div>
            <p className="section-label">Next Step</p>
            <h2>Want to see my work?</h2>
            <p>
              Explore the projects I have built and the type of websites I can
              create.
            </p>
          </div>
          <PremiumHover
            href="/projects"
            text="View Projects"
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
      </main>
    </>
  );
}
