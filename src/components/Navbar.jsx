import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Cyber Laws", href: "#cyber-laws" },
  { label: "AI Solutions", href: "#ai-solutions" },
  { label: "Resources", href: "#resources" },
  { label: "Report Incident", href: "#report-incident" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);

      if (location.pathname !== "/") return;

      const sections = navItems
        .filter((item) => item.href.startsWith("#") && item.href !== "#top")
        .map((item) => item.href.slice(1));

      let current = "top";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 140 <= window.scrollY) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    handleScroll();
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (event, href) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    setMobileMenuOpen(false);

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(href.slice(1));
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      // Navigate back to the home page and let the browser apply the hash
      window.location.assign(`/${href}`);
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-gray-950/85 py-2 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "bg-transparent py-4"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4">
        <Link
          to="/"
          onClick={(event) => {
            if (location.pathname === "/") handleNavClick(event, "#top");
          }}
          className="group flex items-center text-2xl font-bold text-white"
        >
          <span className="mr-2 text-teal-400 transition-transform duration-300 group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8Z" />
            </svg>
          </span>
          <span className="bg-gradient-to-r from-white to-teal-300 bg-clip-text font-display text-transparent">
            AI Cyber Law
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 focus:outline-none lg:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden items-center space-x-1 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/about"
                ? location.pathname === "/about"
                : location.pathname === "/" &&
                  activeSection ===
                    (item.href === "#top" ? "top" : item.href.slice(1));

            return (
              <li key={item.href}>
                {item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className={`group relative block cursor-pointer rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-teal-300"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      className={`absolute bottom-0 left-3 h-0.5 rounded-full bg-gradient-to-r from-teal-400 to-blue-400 transition-all duration-300 ${
                        isActive ? "w-[calc(100%-1.5rem)]" : "w-0 group-hover:w-[calc(100%-1.5rem)]"
                      }`}
                    />
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-teal-300"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="mx-3 mt-3 space-y-1 rounded-2xl border border-white/10 bg-gray-950/95 p-3 shadow-2xl backdrop-blur-xl">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="block cursor-pointer rounded-lg px-3 py-2.5 text-base font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}

      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </nav>
  );
};

export default Navbar;
