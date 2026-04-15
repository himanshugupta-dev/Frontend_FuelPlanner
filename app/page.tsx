"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
     <div className="theme-green min-h-screen" style={{ background: "var(--gn-bg)", color: "var(--gn-fg)" }}>
      <Header />

      <main className="flex-1">
      {/* Hero Section — Centered with search form */}
      <section className="relative px-4 pb-16 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-36" style={{ background: "var(--gn-surface)" }}>
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold"
            style={{ background: "var(--gn-primary)", color: "#fff" }}
          >
            New: Real-time diesel prices across 50 states
          </div>
          <h1 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Fuel Your Fleet.{" "}
            <span className="font-bold" style={{ color: "var(--gn-primary)" }}>
              Save Every Gallon.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: "var(--gn-muted)" }}>
            The smartest way to plan fuel stops for long-haul trucks.
            Enter your route and let us find the cheapest diesel on your path.
          </p>

          {/* Route Search Form */}
          <div
            className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl shadow-xl"
            style={{ background: "#fff", border: "1px solid var(--gn-border)" }}
          >
            <div className="grid gap-0 sm:grid-cols-[1fr_1fr_auto]">
              <div className="relative" style={{ borderRight: "1px solid var(--gn-border)" }}>
                <label className="absolute left-4 top-2.5 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--gn-primary)" }}>
                  From
                </label>
                <input
                  type="text"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="e.g. Houston, TX"
                  className="w-full px-4 pb-3 pt-8 text-base outline-none placeholder:text-gray-300"
                  style={{ color: "var(--gn-fg)" }}
                />
              </div>
              <div className="relative" style={{ borderTop: "1px solid var(--gn-border)", borderRight: "1px solid var(--gn-border)" }}>
                <label className="absolute left-4 top-2.5 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--gn-primary)" }}>
                  To
                </label>
                <input
                  type="text"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="e.g. Memphis, TN"
                  className="w-full px-4 pb-3 pt-8 text-base outline-none placeholder:text-gray-300"
                  style={{ color: "var(--gn-fg)" }}
                />
              </div>
              <button
                className="flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white sm:py-0"
                style={{ background: "var(--gn-accent)", transition: "filter 0.2s" }}
              >
                <span>🔍</span> Find Fuel
              </button>
            </div>
          </div>

          <p className="mt-4 text-sm" style={{ color: "var(--gn-muted)" }}>
            Free for individual drivers. No sign-up required.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10" style={{ background: "var(--gn-primary-dark)" }}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { value: "10K+", label: "Active Drivers" },
            { value: "$2.4M", label: "Fuel Saved" },
            { value: "150K+", label: "Routes Planned" },
            { value: "50K+", label: "Fuel Stations" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-extrabold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm" style={{ color: "var(--gn-primary-light)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features — Cards with left border accent */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--gn-accent)" }}>
              Features
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Why Truckers Choose{" "}
              <span style={{ color: "var(--gn-primary)" }}>FuelPlanner</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base" style={{ color: "var(--gn-muted)" }}>
              Purpose-built tools that save real money on every haul.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📍",
                title: "Optimized Routing",
                desc: "We plan your fuel stops around the cheapest diesel prices along your exact route — not just nearby.",
                color: "var(--gn-primary)",
              },
              {
                icon: "💵",
                title: "Live Diesel Prices",
                desc: "Hourly price updates from 50,000+ truck stops. Integrates with Pilot, Love's, TA, and more.",
                color: "var(--gn-accent)",
              },
              {
                icon: "🗺️",
                title: "Multi-Drop Support",
                desc: "Running multiple deliveries? Add all your stops and we'll optimize the entire trip for fuel cost.",
                color: "#6366f1",
              },
              {
                icon: "⛽",
                title: "Tank & MPG Aware",
                desc: "Enter your tank capacity, current level, and MPG. We make sure you never run dry — or overfill.",
                color: "var(--gn-primary)",
              },
              {
                icon: "📱",
                title: "Mobile Friendly",
                desc: "Access your planned routes from any device. Works great on phone, tablet, and in-cab screens.",
                color: "var(--gn-accent)",
              },
              {
                icon: "📊",
                title: "Fleet Dashboard",
                desc: "Fleet managers can track fuel spend, compare drivers, and find savings across the entire operation.",
                color: "#6366f1",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl p-6 shadow-sm transition-shadow hover:shadow-md"
                style={{
                  background: "#fff",
                  borderLeft: `4px solid ${feature.color}`,
                  border: `1px solid var(--gn-border)`,
                  borderLeftWidth: "4px",
                  borderLeftColor: feature.color,
                }}
              >
                <div className="mb-3 text-3xl">{feature.icon}</div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--gn-muted)" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Horizontal timeline */}
      <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: "var(--gn-surface)" }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--gn-accent)" }}>
              Simple Process
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Three Steps to{" "}
              <span style={{ color: "var(--gn-primary)" }}>Cheaper Fuel</span>
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Enter Your Route",
                desc: "Tell us where you're going. Add multiple stops if you have deliveries along the way.",
                icon: "🚚",
              },
              {
                step: "2",
                title: "Review Fuel Stops",
                desc: "We show you the cheapest stations on your path, factoring in your tank size and range.",
                icon: "⛽",
              },
              {
                step: "3",
                title: "Hit the Road",
                desc: "Follow your optimized plan and save money on every fill-up. Track savings in real time.",
                icon: "✅",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl p-8 text-center shadow-sm"
                style={{ background: "#fff", border: "1px solid var(--gn-border)" }}
              >
                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-2xl"
                  style={{ background: "var(--gn-surface-alt)" }}
                >
                  {item.icon}
                </div>
                <div
                  className="mx-auto mt-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: "var(--gn-primary)" }}
                >
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--gn-muted)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--gn-accent)" }}>
              Testimonials
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Drivers Love{" "}
              <span style={{ color: "var(--gn-primary)" }}>FuelPlanner</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Mike R.",
                role: "Owner-Operator, 15 years",
                quote: "I save about $180 a month just by following the fuel stops FuelPlanner suggests. Wish I found this sooner.",
                stars: 5,
              },
              {
                name: "Sarah K.",
                role: "Fleet Manager, 40 trucks",
                quote: "We cut our fleet fuel budget by 12% in the first quarter. The dashboard makes it easy to track everything.",
                stars: 5,
              },
              {
                name: "James T.",
                role: "Long-haul driver, 8 years",
                quote: "The route planner is dead simple. I enter my trip and it tells me exactly where to stop. No guesswork.",
                stars: 5,
              },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-6 shadow-sm"
                style={{ background: "#fff", border: "1px solid var(--gn-border)" }}
              >
                <div className="mb-3 text-lg" style={{ color: "var(--gn-accent)" }}>
                  {"★".repeat(t.stars)}
                </div>
                <p className="text-sm leading-relaxed italic" style={{ color: "var(--gn-muted)" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: "var(--gn-primary)" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs" style={{ color: "var(--gn-muted)" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Emerald gradient */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" style={{ background: "var(--gn-surface)" }}>
        <div
          className="mx-auto max-w-4xl overflow-hidden rounded-3xl p-10 text-center text-white shadow-2xl sm:p-16"
          style={{
            background: "linear-gradient(135deg, var(--gn-primary-dark) 0%, var(--gn-primary) 50%, var(--gn-primary-light) 100%)",
          }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Start Saving on Fuel Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-85">
            No credit card. No sign-up. Just enter your route and see how much you can save.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-bold shadow-lg transition-all hover:shadow-xl"
              style={{ background: "var(--gn-accent)", color: "#fff" }}
            >
              Plan a Free Route
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
}
