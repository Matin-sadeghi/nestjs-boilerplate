# NestJS Boilerplate

A batteries-included starter for building secure, production-ready REST APIs with **NestJS 11**, MongoDB and JWT authentication.

---

## ✨ Highlights

- **NestJS 11 + TypeScript** – modern, opinionated structure
- **MongoDB (Mongoose)** – configure via `MONGO_URI_CONN`
- **Auth & RBAC** – JWT strategy, role guards & decorators
- **Swagger UI** – live API docs at `/api`
- **Seeder module** – populate dev databases in one call
- **ESLint + Prettier + Jest** – quality & testing built-in

---

## Folder Structure

```
src
 ├── auth/          # login, register, JWT strategy, guards
 ├── user/          # user schema, repository, DTOs, controller
 ├── seed/          # database seeding logic & controller
 ├── utils/         # shared helpers & decorators
 ├── app.module.ts
 └── main.ts
```

---

## Prerequisites

| Tool  | Version                        |
| ----- | ------------------------------ |
| Node  | ≥ 18                           |
| npm   | ≥ 9                            |
| Mongo | 5.x+ (local, Docker, or Atlas) |

`pnpm` or `yarn` will also work – swap commands if you prefer.

---

## Quick Start

```bash
# 1. Clone
 git clone https://github.com/<your-org>/nestjs-boilerplate.git
 cd nestjs-boilerplate

# 2. Install
 npm ci            # or npm install

# 3. Environment variables
 cp .env.example .env   # then edit as needed
```

### .env example

```ini
# Database
MONGO_URI_CONN=mongodb://localhost:27017/nest-boilerplate

# JWT signing key
JWT_SECRET=super-secret-key

# Optional – HTTP port (default 3000)
PORT=3000
```

---

## Running

```bash
# Dev mode (hot reload)
npm run start:dev

# Production
npm run build
npm run start:prod
```

Open `http://localhost:3000/api` for Swagger docs.

---

## Seeding the DB (optional)

Start the server, then call:

```
POST http://localhost:3000/seed
```

Customize logic in `src/seed/`.

---

## Testing & Linting

```bash
npm run test       # unit tests
npm run test:e2e   # end-to-end tests
npm run test:cov   # coverage
npm run lint       # ESLint
npm run format     # Prettier
```

---

## Docker (example)

```bash
# build and run
docker build -t nestjs-boilerplate .
docker run -p 3000:3000 --env-file .env nestjs-boilerplate
```

---

## Contributing

1. Fork & create a branch `git checkout -b feature/my-feature`
2. Commit `git commit -m "feat: add x"`
3. Push & open a Pull Request 🙌

---

## License

MIT © 2025 Your Name
