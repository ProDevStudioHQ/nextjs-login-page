"use client";

import { useState } from "react";
import Link from "next/link";
import Background from "../../components/Background";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [isError, setIsError] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") setEmailValid(null);
    else setEmailValid(!!validateEmail(value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsError(false);
    
    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("website");
    
    if (honeypot) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsError(true);
      setTimeout(() => setIsError(false), 500);
    }, 1500);
  };

  return (
    <>
      <Background />
      <main className="login-wrapper">
        <div className={`login-card ${isError ? "shake" : ""}`}>
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
              <h1>Create Account</h1>
              <p>Start your journey with us today.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="hidden-honey">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-wrapper">
                  <i className="ph ph-user"></i>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <div className={`input-wrapper ${emailValid === true ? "success" : emailValid === false ? "error" : ""}`}>
                  <i className="ph ph-envelope-simple"></i>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="name@company.com" 
                    required 
                    onChange={handleEmailChange}
                  />
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
                    placeholder="Create a strong password" 
                    className="with-toggle"
                    required 
                  />
                  <button 
                    type="button" 
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`ph ${showPassword ? "ph-eye-slash" : "ph-eye"}`}></i>
                  </button>
                </div>
              </div>

              <div className="form-actions">
                <label className="remember-me">
                  <input type="checkbox" name="terms" required />
                  <span className="checkmark"></span>
                  I agree to the <Link href="#" className="terms-link">&nbsp;Terms & Conditions</Link>
                </label>
              </div>

              <button type="submit" className="btn-primary" disabled={isLoading}>
                {isLoading ? <span className="loading-dots">Creating Account</span> : "Sign Up"}
              </button>

              <div className="divider"><span>or sign up with</span></div>

              <div className="social-login">
                <button type="button" className="btn-social btn-google">
                  <svg viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.14-4.53z" fill="#EA4335"/>
                  </svg>
                </button>
                <button type="button" className="btn-social btn-github">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </button>
              </div>
            </form>

            <p className="signup-prompt">
              Already have an account? <Link href="/">Sign In</Link>
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