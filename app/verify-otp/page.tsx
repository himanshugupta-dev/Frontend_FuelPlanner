"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { authService } from "../services/auth.service";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface VerifyOtpData {
  email: string;
  otp: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export default function VerifyOtpPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get('email') || '';

  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResendLoading, setIsResendLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [resendTimer, setResendTimer] = useState(300); // 5 minutes in seconds
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (!email) {
      router.push('/signup');
      return;
    }

    // Start the 5-minute timer
    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [email, router]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    if (value.length <= 6) {
      setOtp(value);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await authService.verifyOtp({
        email,
        otp,
      });

      if (result.success) {
        setSuccess(true);
        // Redirect to login or dashboard after a delay
        setTimeout(() => {
          router.push('/login?message=Email verified successfully. Please login.');
        }, 2000);
      } else {
        setError(result.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;

    setIsResendLoading(true);
    setError('');

    // For now, show a message that resend is not available
    // In a real app, you'd call a resend-otp endpoint
    setTimeout(() => {
      setError('Resend functionality will be available soon. Please check your email or try registering again.');
      setIsResendLoading(false);
    }, 1000);
  };

  if (success) {
    return (
      <div className="theme-green min-h-screen" style={{ background: "var(--gn-bg)", color: "var(--gn-fg)" }}>
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--gn-primary)" }}>
                Email Verified!
              </h1>
              <p className="text-sm" style={{ color: "var(--gn-muted)" }}>
                Your email has been successfully verified. Redirecting to login...
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="theme-green min-h-screen" style={{ background: "var(--gn-bg)", color: "var(--gn-fg)" }}>
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--gn-primary)" }}>
              Verify Your Email
            </h1>
            <p className="text-sm" style={{ color: "var(--gn-muted)" }}>
              We've sent a 6-digit verification code to
            </p>
            <p className="text-sm font-medium" style={{ color: "var(--gn-primary)" }}>
              {email}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="rounded-lg p-4 text-sm text-red-700 bg-red-50 border border-red-200">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="otp" className="block text-sm font-medium mb-2 text-center" style={{ color: "var(--gn-fg)" }}>
                Enter Verification Code
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={handleOtpChange}
                className="w-full px-4 py-3 rounded-lg border text-center text-2xl font-mono tracking-widest border-gray-300 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                style={{ background: "#fff" }}
                placeholder="000000"
                maxLength={6}
                autoFocus
              />
              <p className="mt-2 text-xs text-center" style={{ color: "var(--gn-muted)" }}>
                Enter the 6-digit code sent to your email
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading || otp.length !== 6}
              className="w-full rounded-full px-6 py-3 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: "var(--gn-primary)" }}
            >
              {isLoading ? 'Verifying...' : 'Verify Email'}
            </button>
          </form>

          <div className="mt-6 text-center space-y-4">
            <div>
              <p className="text-sm" style={{ color: "var(--gn-muted)" }}>
                Didn't receive the code?
              </p>
              <button
                onClick={handleResendOtp}
                disabled={!canResend || isResendLoading}
                className="mt-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:underline"
                style={{ color: "var(--gn-primary)" }}
              >
                {isResendLoading ? 'Sending...' : canResend ? 'Resend Code' : `Resend in ${formatTime(resendTimer)}`}
              </button>
            </div>

            <div>
              <button
                onClick={() => router.push('/signup')}
                className="text-sm hover:underline"
                style={{ color: "var(--gn-muted)" }}
              >
                ← Back to Sign Up
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}