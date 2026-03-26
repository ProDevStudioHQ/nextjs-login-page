"use client";

import Link from "next/link";
import Background from "../../components/Background";

export default function ForgotPassword() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    alert(`Reset Link Requested for: ${email}`);
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
              <h1>Reset Password</h1>
              <p>Enter the email address associated with your account, and we'll send you a link to reset your password.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="input-group" style={{ marginBottom: "2rem" }}>
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <i className="ph ph-envelope-simple"></i>
                  <input type="email" id="email" name="email" placeholder="name@company.com" required />
                </div>
              </div>

              <button type="submit" className="btn-primary">Send Reset Link</button>
            </form>

            <p className="signup-prompt">
              <Link href="/"><i className="ph ph-arrow-left"></i> Back to Sign In</Link>
            </p>
          </div>
        </div>
        <p className="bottom-text">Secure access for modern teams</p>
      </main>
    </>
  );
}