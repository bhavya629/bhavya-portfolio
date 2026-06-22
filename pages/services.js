import Head from "next/head";
import Link from "next/link";
import {
  FaArrowRight,
  FaChartLine,
  FaCog,
  FaGlobe,
  FaShoppingCart,
  FaSuitcaseRolling,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe />,
    title: "Business Website",
    text: "Professional company websites with clear sections, service details, contact CTAs, and responsive layouts.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Website",
    text: "Product-focused websites with store pages, cart-friendly structure, checkout UI, and business-ready presentation.",
  },
  {
    icon: <FaSuitcaseRolling />,
    title: "Travel Booking Website",
    text: "Travel package websites with destination pages, booking enquiry sections, and premium holiday brand layouts.",
  },
  {
    icon: <FaUserTie />,
    title: "Portfolio Website",
    text: "Personal portfolio websites for developers, freelancers, students, creators, and professionals.",
  },
  {
    icon: <FaChartLine />,
    title: "Admin Dashboard",
    text: "Clean dashboard interfaces for managing content, enquiries, products, bookings, and basic business data.",
  },
  {
    icon: <FaCog />,
    title: "Website Maintenance",
    text: "Updates, improvements, responsive fixes, UI polishing, bug fixing, and ongoing website support.",
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Bhavya Desai</title>
        <meta
          name="description"
          content="Website development services by Bhavya Desai."
        />
      </Head>

      <main className="site-shell">
        <nav className="navbar">
          <Link href="/" className="brand">
            <span>Bhavya</span> Desai
          </Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <Link href="/contact" className="nav-button">
            Hire Me
          </Link>
        </nav>

        <section className="page-hero section-container animate-on-scroll">
          <p className="section-label">Services</p>
          <h1>Web development services for modern businesses.</h1>
          <p>
            I build polished websites and practical digital tools with
            responsive design, clean code, and full stack features.
          </p>
        </section>

        <section className="section-container page-section animate-on-scroll">
          <div className="service-page-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="card-icon">{service.icon}</div>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-cta section-container animate-on-scroll">
          <div>
            <p className="section-label">Ready to Build</p>
            <h2>Let&apos;s turn your idea into a website.</h2>
            <p>
              Share your requirements and I will help shape them into a clean,
              responsive, and professional web experience.
            </p>
          </div>
          <Link href="/contact" className="primary-button">
            Contact Me <FaArrowRight />
          </Link>
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
