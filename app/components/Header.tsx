import Link from 'next/link';

export default function Header() {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(255,255,255,0.85)",
        borderBottom: "1px solid var(--gn-border)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <img
            src="/logo.ico"
            alt="FuelPlanner Logo"
            className="h-9 w-9 rounded-lg"
            style={{ background: "var(--gn-primary)" }}
          />
          <span className="text-xl font-bold tracking-tight" style={{ color: "var(--gn-primary-dark)" }}>
            Fuel<span style={{ color: "var(--gn-accent)" }}>Planner</span>
          </span>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex" style={{ color: "var(--gn-muted)" }}>
          <a href="#features" className="hover:opacity-80" style={{ transition: "opacity 0.2s" }}>
            Features
          </a>
          <a href="#how-it-works" className="hover:opacity-80" style={{ transition: "opacity 0.2s" }}>
            How It Works
          </a>
          <a href="#testimonials" className="hover:opacity-80" style={{ transition: "opacity 0.2s" }}>
            Testimonials
          </a>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="hidden rounded-full px-5 py-2 text-sm font-medium sm:inline-flex"
            style={{ color: "var(--gn-primary-dark)", transition: "background 0.2s" }}
          >
            Log In
          </Link>
          <Link href="/signup">
            <button
              className="rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm sm:px-5 sm:text-sm"
              style={{ background: "var(--gn-primary)", transition: "background 0.2s" }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
