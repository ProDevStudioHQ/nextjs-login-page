"use client";

import { useState } from "react";
import Link from "next/link";
import Background from "../components/Background";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      alert("Sign In successful (Simulated)");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Background />
      <main className="login-wrapper">
        <div className="login-card">
          <div className="brand-panel">
            <div className="brand-header">
              <div className="logo-placeholder"><i className="ph ph-planet"></i></div>
              <h2>DIGITAL STUDIO LF</h2>
            </div>
            <div className="abstract-illustration">
              <div className="glow-orb main-orb"></div>
              <div className="glow-orb secondary-orb"></div>
              <div className="glass-ring"></div>
            </div>
            <div className="brand-footer">
              <h3>Automate the future.</h3>
              <p>Next-generation infrastructure for scaling your vision.</p>
            </div>
          </div>

          <div className="form-panel">
            <div className="form-header">
              <h1>Welcome Back</h1>
              <p>Sign in to continue to your dashboard</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <i className="ph ph-envelope-simple"></i>
                  <input type="email" id="email" name="email" placeholder="name@company.com" required />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <i className="ph ph-lock-key"></i>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    className="with-toggle"
                    required 
                  />
                  <button 
                    type="button" 
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <i className={`ph ${showPassword ? "ph-eye-slash" : "ph-eye"}`}></i>
                  </button>
                </div>
              </div>

              <div className="form-actions">
                <label className="remember-me">
                  <input type="checkbox" name="remember" />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <Link href="/forgot-password" className="forgot-link">Forgot password?</Link>
              </div>

              <button type="submit" className="btn-primary" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </button>

              <div className="divider"><span>or continue with</span></div>

              <div className="social-login">
                <button type="button" className="btn-social btn-google"><i className="ph ph-google-logo"></i></button>
                <button type="button" className="btn-social btn-apple"><i className="ph ph-apple-logo"></i></button>
                <button type="button" className="btn-social btn-facebook"><i className="ph ph-facebook-logo"></i></button>
                <button type="button" className="btn-social btn-github"><i className="ph ph-github-logo"></i></button>
              </div>
            </form>

            <p className="signup-prompt">
              Don't have an account? <Link href="/signup">Create account</Link>
            </p>
          </div>
        </div>
        <div className="bottom-text">
          <p>Secure access for modern teams</p>
          <div className="legal-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </main>
    </>
  );
}