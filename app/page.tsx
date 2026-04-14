export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⛽</span>
            <span className="text-xl font-bold tracking-tight text-primary">
              Fuel<span className="text-accent">Planner</span>
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-foreground">
              How It Works
            </a>
            <a href="#pricing" className="transition-colors hover:text-foreground">
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-dark sm:inline-flex">
              Log In
            </button>
            <button className="rounded-lg bg-primary px-3 py-2 text-xs font-medium text-white shadow-sm transition-colors hover:bg-primary-dark sm:px-4 sm:text-sm">
              Sign Up Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent-dark dark:text-accent">
                <span>🚛</span> Trusted by 10,000+ truckers
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Save on Every Mile.{" "}
                <span className="text-primary">Plan Smarter Fuel Stops.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                FuelPlanner helps truck drivers find the cheapest fuel along
                their route, optimize stops, and cut fuel costs by up to{" "}
                <strong className="text-foreground">20% per trip</strong>.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30">
                  <span>🗺️</span> Plan My Route
                </button>
                <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-foreground/15 px-8 text-base font-semibold transition-colors hover:bg-surface">
                  <span>▶️</span> Watch Demo
                </button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted">
                <div className="flex items-center gap-1.5">
                  <span className="text-green-500">✓</span> Free to start
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-green-500">✓</span> No credit card
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-green-500">✓</span> Cancel anytime
                </div>
              </div>
            </div>

            {/* Hero Card - Route Preview */}
            <div className="relative hidden lg:block">
              <div className="rounded-2xl border border-foreground/10 bg-surface p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">
                    Route: Dallas → Atlanta
                  </span>
                  <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    $127 saved
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      city: "Dallas, TX",
                      station: "Pilot Travel Center",
                      price: "$3.29/gal",
                      fill: "80 gal",
                      type: "start",
                    },
                    {
                      city: "Shreveport, LA",
                      station: "Love's Travel Stop",
                      price: "$3.15/gal",
                      fill: "60 gal",
                      type: "stop",
                    },
                    {
                      city: "Birmingham, AL",
                      station: "TA Express",
                      price: "$3.09/gal",
                      fill: "55 gal",
                      type: "stop",
                    },
                    {
                      city: "Atlanta, GA",
                      station: "Destination",
                      price: "—",
                      fill: "—",
                      type: "end",
                    },
                  ].map((stop, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-xl bg-background p-3"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {stop.type === "start"
                          ? "A"
                          : stop.type === "end"
                            ? "D"
                            : String.fromCharCode(65 + i)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{stop.city}</p>
                        <p className="text-xs text-muted">{stop.station}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-primary">
                          {stop.price}
                        </p>
                        <p className="text-xs text-muted">{stop.fill}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-foreground/10 pt-4">
                  <span className="text-sm text-muted">Total Distance</span>
                  <span className="text-sm font-bold">781 miles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-foreground/5 bg-surface py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { value: "10K+", label: "Active Drivers" },
            { value: "$2.4M", label: "Fuel Saved" },
            { value: "150K+", label: "Routes Planned" },
            { value: "50K+", label: "Fuel Stations" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-extrabold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything You Need to{" "}
              <span className="text-primary">Save on Fuel</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Built specifically for truck drivers and fleet managers who want to
              cut costs without cutting corners.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📍",
                title: "Smart Route Planning",
                desc: "Enter your origin and destination. We find the optimal fuel stops based on your truck's range, fuel prices, and preferred stations.",
              },
              {
                icon: "💰",
                title: "Real-Time Fuel Prices",
                desc: "Live diesel prices from 50,000+ truck stops across the country. Updated every hour so you always get the best deal.",
              },
              {
                icon: "🛣️",
                title: "Multi-Stop Optimization",
                desc: "Planning a complex route with multiple deliveries? We optimize your entire trip to minimize total fuel spend.",
              },
              {
                icon: "📊",
                title: "Trip Cost Calculator",
                desc: "Know your fuel costs before you hit the road. Factor in MPG, tank size, current fuel level, and real-time prices.",
              },
              {
                icon: "🔔",
                title: "Price Drop Alerts",
                desc: "Set alerts for your regular routes. We notify you when fuel prices drop at stations along your path.",
              },
              {
                icon: "📈",
                title: "Fleet Analytics",
                desc: "Track fuel spending across your fleet. Identify top-performing drivers and routes that save the most.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-foreground/5 bg-surface p-6 transition-all hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="bg-surface px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Plan a Trip in <span className="text-primary">3 Easy Steps</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Start saving on fuel in under a minute.
            </p>
          </div>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Enter Your Route",
                desc: "Type in your starting point, destination, and any required stops along the way.",
              },
              {
                step: "02",
                title: "Set Your Truck Details",
                desc: "Tell us your fuel tank size, current fuel level, and average MPG for accurate planning.",
              },
              {
                step: "03",
                title: "Get Optimized Stops",
                desc: "We calculate the cheapest fuel stops that keep you on route and on schedule.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-extrabold text-white shadow-lg shadow-primary/25">
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 text-center text-white shadow-2xl sm:p-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to Cut Your Fuel Costs?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Join thousands of truckers who save an average of $200 per month with
            smarter fuel planning.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-8 text-base font-bold text-primary-dark shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl">
              Start Planning for Free
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-xl border border-white/30 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-foreground/5 bg-surface px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">⛽</span>
                <span className="text-lg font-bold text-primary">
                  Fuel<span className="text-accent">Planner</span>
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">
                Smart fuel planning for truck drivers and fleet managers.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Product
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted hover:text-foreground">Route Planner</a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-foreground">Fuel Prices</a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-foreground">Fleet Dashboard</a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-foreground">Mobile App</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Company
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted hover:text-foreground">About</a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-foreground">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-foreground">Careers</a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-foreground">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Support
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted hover:text-foreground">Help Center</a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-foreground">API Docs</a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-foreground">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-muted hover:text-foreground">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-foreground/5 pt-8 text-center text-sm text-muted">
            &copy; 2026 FuelPlanner. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
