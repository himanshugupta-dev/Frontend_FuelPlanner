"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { authService, type LoginData } from "../services/auth.service";

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export default function LoginPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const successMessage = searchParams.get("message") || "";

  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    const result = await authService.login(formData);

    if (result.success && result.data) {
      // Store the token
      localStorage.setItem("token", result.data.token);
      if (result.data.user) {
        localStorage.setItem("user", JSON.stringify(result.data.user));
      }
      // Redirect to home/dashboard
      router.push("/home");
    } else {
      setErrors({
        general: result.message || "Login failed. Please try again.",
      });
    }

    setIsLoading(false);
  };

  return (
    <div
      className="theme-green min-h-screen"
      style={{ background: "var(--gn-bg)", color: "var(--gn-fg)" }}
    >
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--gn-primary)" }}
            >
              Welcome Back
            </h1>
            <p className="text-sm" style={{ color: "var(--gn-muted)" }}>
              Sign in to your FuelPlanner account
            </p>
          </div>

          {/* Success message from verify-otp redirect */}
          {successMessage && (
            <div className="mb-6 rounded-lg p-4 text-sm text-green-700 bg-green-50 border border-green-200">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.general && (
              <div className="rounded-lg p-4 text-sm text-red-700 bg-red-50 border border-red-200">
                {errors.general}
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--gn-fg)" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors ${
                  errors.email
                    ? "border-red-300 bg-red-50"
                    : "border-gray-300"
                }`}
                style={{ background: "#fff" }}
                placeholder="user@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium"
                  style={{ color: "var(--gn-fg)" }}
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-medium hover:underline"
                  style={{ color: "var(--gn-primary)" }}
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-colors pr-12 ${
                    errors.password
                      ? "border-red-300 bg-red-50"
                      : "border-gray-300"
                  }`}
                  style={{ background: "#fff" }}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium"
                  style={{ color: "var(--gn-muted)" }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-full px-6 py-3 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: "var(--gn-primary)" }}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm" style={{ color: "var(--gn-muted)" }}>
              Don&apos;t have an account?{" "}
              <a
                href="/signup"
                className="font-medium hover:underline"
                style={{ color: "var(--gn-primary)" }}
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
