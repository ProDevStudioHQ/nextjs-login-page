# DIGITAL STUDIO LF — Auth

> Modern authentication frontend built with Next.js 16 + TypeScript, deployable to **Dokploy** via **GitHub** integration.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Node](https://img.shields.io/badge/Node-%3E%3D20.9.0-green?logo=node.js)
![Docker](https://img.shields.io/badge/Docker-ready-blue?logo=docker)
![Dokploy](https://img.shields.io/badge/Dokploy-compatible-purple)

---

## 🚀 Quick Start (Local)

```bash
# 1. Clone
git clone https://github.com/YOUR_ORG/digital-studio-lf-auth.git
cd digital-studio-lf-auth

# 2. Install
npm ci

# 3. Configure
cp .env.example .env.local
# Fill in .env.local with your values

# 4. Run dev server
npm run dev
# http://localhost:3000
```

---

## 🌍 Deploy to Dokploy via GitHub

### 1 — Push to GitHub

```bash
git add .
git commit -m "chore: ready for Dokploy"
git push origin main
```

### 2 — Create a Dokploy Application

1. Open your **Dokploy** dashboard → **New Application**
2. Source → **GitHub** → select this repository + branch `main`
3. Build method → **Dockerfile** *(recommended)* or **Nixpacks**
4. Set the following **Environment Variables** in Dokploy:

| Variable | Value |
|---|---|
| `NODE_ENV` | `production` |
| `PORT` | `3000` |
| `NEXT_PUBLIC_APP_URL` | `https://your-domain.com` |
| `NEXTAUTH_URL` | `https://your-domain.com` |
| `NEXTAUTH_SECRET` | *(generate: `openssl rand -base64 32`)* |
| `GITHUB_CLIENT_ID` | *(from GitHub OAuth App)* |
| `GITHUB_CLIENT_SECRET` | *(from GitHub OAuth App)* |

5. **Domain** tab → add your domain and enable HTTPS
6. Click **Deploy** 🎉

### 3 — GitHub OAuth App Setup

1. Go to [GitHub → Settings → Developer settings → OAuth Apps](https://github.com/settings/developers)
2. Click **New OAuth App**
3. Fill in:
   - **Application name**: `Digital Studio LF`
   - **Homepage URL**: `https://your-domain.com`
   - **Authorization callback URL**: `https://your-domain.com/api/auth/callback/github`
4. Copy **Client ID** and **Client Secret** into Dokploy env vars

---

## 🐳 Docker (manual)

```bash
# Build
docker build -t digital-studio-lf-auth .

# Run
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXTAUTH_URL=http://localhost:3000 \
  -e NEXTAUTH_SECRET=your-secret \
  digital-studio-lf-auth
```

---

## 🏥 Health Check

```
GET /api/health
→ 200 { "status": "ok", "timestamp": "..." }
```

Used by Docker `HEALTHCHECK` and Dokploy uptime monitoring.

---

## 📁 Project Structure

```
app/
├── api/health/route.ts   # Health check endpoint
├── forgot-password/      # Forgot password page
├── signup/               # Sign up page
├── privacy-policy/       # Privacy policy page
├── terms-of-service/     # Terms of service page
├── globals.css           # Global styles
├── layout.tsx            # Root layout
└── page.tsx              # Login page
components/
└── Background.tsx        # Animated background
Dockerfile                # Multi-stage Docker build
nixpacks.toml             # Nixpacks config (Dokploy alternative)
.env.example              # Environment variable template
```

---

## ⚙️ Build Modes

| Mode | Command | Notes |
|---|---|---|
| Development | `npm run dev` | Hot reload, no optimizations |
| Production | `npm run build && npm start` | Optimized, standalone |
| Docker | `docker build + run` | Self-contained image |
| Dokploy | Auto-build on push | Uses Dockerfile or Nixpacks |
