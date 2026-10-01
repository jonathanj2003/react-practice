# Build Path — Full-Stack Auth App

A full-stack web application built from scratch while learning full-stack development — React frontend, Node.js/Express backend, PostgreSQL database, and complete JWT-based authentication, deployed live.

**Live app:** [https://react-practice-ashen.vercel.app/](https://react-practice-ashen.vercel.app/)

**Backend repo:** [https://github.com/jonathanj2003/build-path-server](https://github.com/jonathanj2003/build-path-server)

## Features

- User signup and login with hashed passwords (bcrypt) and JWT-based sessions

- Protected route that verifies a logged-in user's identity

- Client-side email validation with an automated test suite

- Deployed with a real production database, fully separate from local development

## Tech Stack

**Frontend:** React, Vite, Vitest (testing), oxlint (linting)

**Backend:** Node.js, Express, PostgreSQL, Prisma ORM, bcrypt, JSON Web Tokens

**Deployment:** Vercel (frontend), Render (backend + database)

## Running it locally

```

git clone [https://github.com/jonathanj2003/react-practice.git](https://github.com/jonathanj2003/react-practice.git)

cd react-practice

pnpm install

```

Create a `.env` file in the project root with:

```

VITE_API_URL=[http://localhost:3000](http://localhost:3000)

```

Then start the dev server:

```

pnpm dev

```

(Requires the [backend]([https://github.com/jonathanj2003/build-path-server](https://github.com/jonathanj2003/build-path-server)) running locally too — see that repo's README.)

## Running tests

```

pnpm test

```

## What I learned

This project was built end-to-end as a self-directed learning project: HTML/CSS/JS fundamentals, Git/GitHub workflows, building a REST API with Express, working with a relational database through Prisma, implementing authentication with bcrypt and JWTs, building a UI in React, writing automated tests, and deploying a full production system across multiple cloud services.

