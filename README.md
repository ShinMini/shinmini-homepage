# ShinMini Homepage Web App

## Introduction

This is the repository of ShinMini Homepage Web.

you can check the web site from here [shinmini.com](https://shinmini.com).

Shinmini Homepage Web App is developed on [React](https://react.dev/) and [Svelte](https://svelte.dev/) with [TypeScript](https://www.typescriptlang.org/).

The DataBase was configured with [PostgreSQL v.15](https://www.postgresql.org/) with [Prisma](https://www.prisma.io/).

The main Back-End server was built on [Nest.js](https://nestjs.com/) framework.

Lastly the Cloud cluster is [Firebase](https://firebase.google.com/) for SNS Login & Data Analyst.

## Now Getting Started!

First, run the development server on Front-End side:

```bash
cd server
yarn dev
```

And then, run the development server on Back-End side:

Oops!, before your start the BE server, don't forget to set up the PostgreSQL server for sure :)

* please fill the `.env` up to running server.

``` .env
# ./server/.env

# for JWT Auth
PUBLIC_KEY="PLEASE PUT YOUR PUBLIC_KEY"
JWT_SECRET="PLEASE PUT YOUR JWT_SECRET KEY"

PORT=8080
DATABASE_URL="postgresql://${your_name}:${your_password}@localhost:5432/${your_db}?schema=${your_schema}"

# Algorithm set up
ENCRYPT_ALGORITHM ="aes-256-ctr"
# MD5 Hash of the Salt
ENCRYPT_SALT="PUT YOUR SALT INFO"
# SHA1 Hash of the password
ENCRYPT_KEY_PASSWORD="PUT YOUR PWD INFO"
```

```bash
cd server
yarn start:dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
