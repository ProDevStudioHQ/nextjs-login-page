"use client";

import Link from "next/link";
import Background from "../../components/Background";

export default function TermsOfService() {
  return (
    <>
      <Background />
      <main className="login-wrapper">
        <div className="login-card" style={{ flexDirection: 'column', maxWidth: '800px', padding: '3rem', maxHeight: '80vh', overflowY: 'auto' }}>
          <div className="form-header">
            <Link href="/" style={{ color: 'var(--neon-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <i className="ph ph-arrow-left"></i> Back to Login
            </Link>
            <h1>Terms of Service</h1>
            <p>Last updated: March 26, 2026</p>
          </div>

          <div style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
              <p>By accessing or using Digital Studio LF, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>2. User Accounts</h2>
              <p>You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. Automated access (bots) is strictly prohibited unless authorized.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>3. Service Availability</h2>
              <p>While we aim for 100% uptime, Digital Studio LF is provided on an "as is" and "as available" basis. We reserve the right to suspend or terminate access for maintenance or security reasons.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>4. Intellectual Property</h2>
              <p>All content, designs, and templates provided within Digital Studio LF are the intellectual property of Digital Studio LF and may not be redistributed without permission.</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}