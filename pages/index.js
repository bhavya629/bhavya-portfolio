import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PremiumHover from "@/components/PremiumHover";
import {
  FaArrowRight,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaLaptopCode,
  FaMobileAlt,
  FaPhoneAlt,
  FaRocket,
  FaServer,
} from "react-icons/fa";

const projects = [
  {
    title: "Cutopia E-Commerce Website",
    text: "A modern online store experience for product browsing, cart flow, checkout, and business-ready management.",
    tags: "Next.js / MySQL / Prisma",
  },
  {
    title: "Veloura Holidays Travel Website",
    text: "A polished travel website for holiday packages, destination details, bookings, and customer enquiries.",
    tags: "Next.js / Booking UI / Payments",
  },
  {
    title: "Portfolio Blog Website",
    text: "A personal brand and blog platform with clean content sections, project highlights, and simple publishing flows.",
    tags: "Next.js / React / Blog",
  },
];

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    text: "Clean, responsive interfaces with premium layouts, reusable sections, and smooth user interactions.",
  },
  {
    icon: <FaServer />,
    title: "Full Stack Features",
    text: "Backend logic, APIs, dashboards, authentication flows, and database-powered website features.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Websites",
    text: "Websites that look sharp and feel easy to use on mobile, tablet, laptop, and desktop screens.",
  },
];

const whyWorkWithMe = [
  {
    icon: <FaLaptopCode />,
    title: "Fast Loading Websites",
    text: "Optimized performance from first paint to smooth interactions.",
  },
  {
    icon: <FaCode />,
    title: "Mobile First Design",
    text: "Layouts engineered for touch, clarity, and consistency on every screen.",
  },
  {
    icon: <FaServer />,
    title: "SEO Friendly Development",
    text: "Clean structure, metadata, and best practices for long-term visibility.",
  },
  {
    icon: <FaRocket />,
    title: "Modern Next.js Architecture",
    text: "Scalable components, routing-ready structure, and maintainable patterns.",
  },
  {
    icon: <FaCode />,
    title: "Clean Maintainable Code",
    text: "Readable, reusable code with consistent conventions and thoughtful abstractions.",
  },
  {
    icon: <FaBriefcase />,
    title: "Business Focused Solutions",
    text: "Built for conversions—clear UX, practical features, and real business goals.",
  },
];

const stats = [
  { value: "3+", label: "Projects Delivered" },
  { value: "Next.js", label: "Next.js Specialist" },
  { value: "Full Stack", label: "Full Stack Development" },
  { value: "Business", label: "Business Website Solutions" },
];

const whyWorkWithMeList = whyWorkWithMe;

export default function Home() {
  return (
    <>
      <Head>
        <title>Bhavya Desai | Next.js & Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio homepage for Bhavya Desai, a Next.js and Full Stack Developer."
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

        <section className="hero section-container animate-on-scroll">
          <div className="hero-content">
            <p className="eyebrow">Available for freelance and full-time work</p>
            <h1>
              Hi, I&apos;m <span>Bhavya Desai</span>
            </h1>
            <h2>Next.js & Full Stack Developer</h2>
            <p className="hero-description">
              I build premium, fast, and responsive web experiences with modern
              frontend design, backend functionality, and clean full stack
              architecture.
            </p>

            <div className="hero-actions">
              <PremiumHover
                href="/projects"
                text="View Projects"
                className="primary-button"
                sound
              >
                <FaArrowRight />
              </PremiumHover>
              <PremiumHover
                href="/contact"
                text="Contact Me"
                className="secondary-button"
                sound
              />
            </div>

            <div className="hero-contact">
              <a href="mailto:bhavyadesai97@gmail.com">
                <FaEnvelope /> bhavyadesai97@gmail.com
              </a>
              <a href="tel:9558689964">
                <FaPhoneAlt /> 9558689964
              </a>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-image-wrap">
              <Image
                src="/profile.jpg"
                alt="Bhavya Desai"
                width={360}
                height={360}
                priority
                className="profile-image"
              />
            </div>
            <div className="profile-info">
              <p>Building modern digital products</p>
              <h3>Next.js Developer</h3>
            </div>
          </div>
        </section>

        <section className="stats section-container animate-on-scroll">
          <div className="stat-card">
            <h3>3+</h3>
            <p>Featured Projects</p>
          </div>
          <div className="stat-card">
            <h3>Full Stack</h3>
            <p>Frontend + Backend</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Responsive Layouts</p>
          </div>
          <div className="stat-card">
            <h3>Client Ready</h3>
            <p>Business Websites</p>
          </div>
        </section>

        <section className="about-preview section-container split-section animate-on-scroll">
          <div>
            <p className="section-label">About</p>
            <h2>Developer focused on polished design and practical features.</h2>
          </div>
          <div className="glass-panel">
            <p>
              I&apos;m Bhavya Desai, a Next.js and Full Stack Developer who
              enjoys creating websites that look premium, load quickly, and
              solve real business needs. I work across frontend UI, backend
              logic, databases, and deployment-ready website flows.
            </p>
            <Link href="/about" className="text-link">
              More About Me <FaArrowRight />
            </Link>
          </div>
        </section>

        <section className="section-container animate-on-scroll">
          <div className="section-heading">
            <p className="section-label">Why Work With Me</p>
            <h2>Premium results for business websites</h2>
          </div>

          <div className="cards-grid">
            {whyWorkWithMe.map((item) => (
              <article className="service-card" key={item.title}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>


        <section className="section-container animate-on-scroll">
          <div className="section-heading">
            <p className="section-label">Featured Projects</p>
            <h2>Selected Work</h2>
          </div>


          <div className="cards-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="card-icon">
                  <FaBriefcase />
                </div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <span>{project.tags}</span>
              </article>
            ))}
          </div>

          <div className="center-action">
            <PremiumHover
              href="/projects"
              text="See Project Details"
              className="secondary-button"
              sound
            />
          </div>
        </section>

        <section className="section-container animate-on-scroll">
          <div className="section-heading">
            <p className="section-label">Services</p>
            <h2>How I can help</h2>
          </div>

          <div className="cards-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>



        <section className="contact-cta section-container animate-on-scroll">
          <div>
            <p className="section-label">Let&apos;s Build</p>
            <h2>Let&apos;s Build Your Next Website</h2>
            <p>
              Share your idea and I will help turn it into a premium,
              responsive, and business-ready website.
            </p>
          </div>
          <PremiumHover
            href="/contact"
            text="Contact Me"
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
