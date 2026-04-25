"use client";

import { Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <a
    href={href}
    className="relative text-white/70 text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-white group"
  >
    {label}
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-500 transition-all duration-300 group-hover:w-full" />
  </a>
);

const AkiruLogo: React.FC = () => (
  <div className="flex items-center gap-3">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,2 30,28 2,28" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <line x1="16" y1="12" x2="16" y2="22" stroke="#EE3F2C" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="16" cy="9" r="1.5" fill="#EE3F2C" />
    </svg>
    <span
      className="text-white font-black text-xl tracking-[-0.04em] uppercase"
      style={{ fontFamily: "'Rubik', sans-serif" }}
    >
      AKIRU
    </span>
  </div>
);

const ClippedButton: React.FC<{
  children: React.ReactNode;
  variant?: "red" | "white" | "outline";
  className?: string;
  onClick?: () => void;
}> = ({ children, variant = "red", className = "", onClick }) => {
  const clipPath =
    "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)";

  const base =
    "relative inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer select-none";

  const styles: Record<string, string> = {
    red: "bg-[#EE3F2C] text-white hover:bg-[#d63522]",
    white: "bg-white text-black hover:bg-white/90",
    outline:
      "bg-transparent text-white border border-white/30 hover:border-white/60",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
      style={{ clipPath, fontFamily: "'Rubik', sans-serif" }}
    >
      {children}
    </button>
  );
};

const ContactButton: React.FC = () => {
  const clipPath =
    "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)";
  return (
    <button
      className="bg-[#EE3F2C] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 transition-all duration-300 hover:bg-[#d63522]"
      style={{ clipPath, fontFamily: "'Rubik', sans-serif" }}
    >
      Contact Us
    </button>
  );
};

const ConsultCard: React.FC = () => (
  <div
    className="relative overflow-hidden rounded-sm p-5 max-w-xs"
    style={{
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
      backdropFilter: "blur(40px) saturate(180%)",
      WebkitBackdropFilter: "blur(40px) saturate(180%)",
      border: "1px solid rgba(255,255,255,0.12)",
      boxShadow:
        "inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.4)",
    }}
  >
    {/* Diagonal shine */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
      }}
    />

    <div className="relative z-10 flex items-start gap-4">
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
        style={{
          background: "rgba(238, 63, 44, 0.2)",
          border: "1px solid rgba(238, 63, 44, 0.4)",
        }}
      >
        <Phone size={16} className="text-[#EE3F2C]" />
      </div>
      <div>
        <p
          className="text-white/50 text-[10px] uppercase tracking-[0.15em] mb-0.5"
          style={{ fontFamily: "'Rubik', sans-serif" }}
        >
          Let's Talk
        </p>
        <p
          className="text-white font-bold text-sm leading-tight mb-3"
          style={{ fontFamily: "'Rubik', sans-serif" }}
        >
          Book a Free
          <br />
          Consultation
        </p>
        <ClippedButton variant="red" className="text-xs px-4 py-2">
          Hire Me
        </ClippedButton>
      </div>
    </div>
  </div>
);

export default function AkiruHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .akiru-hero {
          font-family: 'Rubik', sans-serif;
          background: #000;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          color: white;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.25s; }
        .delay-3 { transition-delay: 0.4s; }
        .delay-4 { transition-delay: 0.6s; }
        .delay-5 { transition-delay: 0.75s; }

        .nav-link {
          color: rgba(255,255,255,0.65);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: #EE3F2C;
          transition: width 0.3s;
        }
        .nav-link:hover { color: white; }
        .nav-link:hover::after { width: 100%; }

        .headline {
          font-size: clamp(2.4rem, 5.5vw, 4rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1.0;
          text-transform: uppercase;
          color: white;
        }

        .red-accent { color: #EE3F2C; }

        .description {
          font-size: 0.9rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.55);
          max-width: 360px;
          font-weight: 400;
          letter-spacing: 0.01em;
        }

        .stat-label {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 2px;
        }
        .stat-value {
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: white;
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          z-index: 5;
        }

        .red-line {
          width: 40px;
          height: 2px;
          background: #EE3F2C;
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
        }

        @media (max-width: 768px) {
          .headline { font-size: 2.4rem; }
        }
      `}</style>

      <div className="akiru-hero">
        {/* VIDEO BG */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1, zIndex: 0 }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4"
            type="video/mp4"
          />
        </video>

        {/* Noise texture */}
        <div className="noise-overlay" />

        {/* Subtle vignette only at edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
            zIndex: 1,
          }}
        />

        {/* Red glow accent — top left */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(238,63,44,0.12) 0%, transparent 70%)",
            zIndex: 2,
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col min-h-screen" style={{ padding: "clamp(24px, 4vw, 48px)" }}>

          {/* NAV */}
          <nav
            className={`flex items-center justify-between fade-in ${loaded ? "visible" : ""}`}
            style={{ marginBottom: "auto" }}
          >
            <AkiruLogo />

            <div className="hidden md:flex items-center gap-8">
              {[
                { href: "#", label: "Home" },
                { href: "#projects", label: "Projects" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <NavLink key={link.label} href={link.href} label={link.label} />
              ))}
            </div>

            <ContactButton />
          </nav>

          {/* HERO BODY */}
          <div className="flex flex-col justify-center flex-1 py-12 md:py-16">
            {/* Tag line */}
            <div
              className={`flex items-center gap-0 mb-6 fade-in delay-1 ${loaded ? "visible" : ""}`}
            >
              <span className="red-line" />
              <span
                className="text-[#EE3F2C] text-xs font-bold uppercase tracking-[0.2em]"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                Full-Stack Developer
              </span>
            </div>

            {/* Headline */}
            <h1 className={`headline mb-6 fade-in delay-2 ${loaded ? "visible" : ""}`}>
              Swift &<br />
              <span className="red-accent">Simple</span><br />
              Development.
            </h1>

            {/* Description */}
            <p className={`description mb-8 fade-in delay-3 ${loaded ? "visible" : ""}`}>
              Building scalable, production-ready applications with modern
              technologies. Explore my GitHub repositories — clean code,
              thoughtful architecture, real-world impact.
            </p>

            {/* CTA row */}
            <div className={`flex items-center gap-4 flex-wrap fade-in delay-4 ${loaded ? "visible" : ""}`}>
              <ClippedButton variant="red">
                View Projects
              </ClippedButton>
              <a
                href="#about"
                className="text-white/60 text-sm font-medium uppercase tracking-widest hover:text-white transition-colors duration-300 flex items-center gap-2"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                About Me
                <span className="text-[#EE3F2C]">→</span>
              </a>
            </div>

            {/* Stats row */}
            <div className={`flex items-center gap-10 mt-12 fade-in delay-5 ${loaded ? "visible" : ""}`}>
              {[
                { label: "Projects", value: "40+" },
                { label: "GitHub Stars", value: "1.2k" },
                { label: "Years Exp.", value: "5+" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-value">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM — Consult card */}
          <div
            className={`flex items-end justify-between fade-in delay-5 ${loaded ? "visible" : ""}`}
          >
            <ConsultCard />

            {/* Scroll indicator */}
            <div className="hidden md:flex flex-col items-center gap-2 opacity-40">
              <span
                className="text-white text-[10px] uppercase tracking-[0.2em] rotate-90 origin-center"
                style={{ fontFamily: "'Rubik', sans-serif", writingMode: "vertical-rl" }}
              >
                Scroll
              </span>
              <div
                className="w-px bg-white/40"
                style={{
                  height: "48px",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
