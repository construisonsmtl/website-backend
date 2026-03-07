# Agents Guide — Construisons Montréal website-backend

Requirements
- Node.js v18 or higher (LTS recommended).

Quick setup
1. Copy the environment example:

```sh
cp .env.example .env
```

2. Install dependencies and start in development:

```sh
npm install
npm run develop
```

Notes
- After setup, the admin panel is available at: http://localhost:1337/admin

Frontend link
- Once the backend is running, you can clone and set up the frontend repository to generate the static site.

Troubleshooting & tips for agents
- Ensure `.env` contains any required values before starting.
- If the frontend fails to fetch content, confirm the backend is reachable and API tokens (Full-access) are configured correctly.
