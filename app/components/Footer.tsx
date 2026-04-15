export default function Footer() {
  return (
    <footer style={{ background: "var(--gn-primary-dark)", color: "rgba(255,255,255,0.7)" }} className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🚛</span>
              <span className="text-lg font-bold text-white">
                Fuel<span style={{ color: "var(--gn-accent-light)" }}>Planner</span>
              </span>
            </div>
            <p className="mt-3 text-sm opacity-70">
              Smart fuel planning for truck drivers and fleet managers.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Product
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Route Planner</a></li>
              <li><a href="#" className="hover:text-white">Fuel Prices</a></li>
              <li><a href="#" className="hover:text-white">Fleet Dashboard</a></li>
              <li><a href="#" className="hover:text-white">Mobile App</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Company
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Support
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">API Docs</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm opacity-50">
          &copy; 2026 FuelPlanner. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
