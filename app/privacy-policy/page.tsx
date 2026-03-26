"use client";

import Link from "next/link";
import Background from "../../components/Background";

export default function PrivacyPolicy() {
  return (
    <>
      <Background />
      <main className="login-wrapper">
        <div className="login-card" style={{ flexDirection: 'column', maxWidth: '800px', padding: '3rem', maxHeight: '80vh', overflowY: 'auto' }}>
          <div className="form-header">
            <Link href="/" style={{ color: 'var(--neon-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <i className="ph ph-arrow-left"></i> Back to Login
            </Link>
            <h1>Privacy Policy</h1>
            <p>Last updated: March 26, 2026</p>
          </div>

          <div style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>1. Information We Collect</h2>
              <p>We collect information you provide directly to us when you create an account, such as your name, email address, and password. We also collect automated data through cookies to enhance your experience with Digital Studio LF.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>2. How We Use Information</h2>
              <p>Your data is used to provide, maintain, and improve our services, including processing your login requests and sending technical notices or security alerts.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>3. Data Security</h2>
              <p>We implement industry-standard security measures, including the "floating glass" encryption and bot-detection honeypots, to protect your personal information from unauthorized access.</p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>4. Your Rights</h2>
              <p>You have the right to access, update, or delete your account information at any time through your dashboard settings.</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}