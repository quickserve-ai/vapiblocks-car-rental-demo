# CarHive
add vapi blocks
A car rental website built with **Next.js (App Router)**, pre-configured with VapiBlocks.

Add you Vapi Assistant ID from Vapi AI dashboard into your `.env` file. 
```bash
NEXT_PUBLIC_VAPI_PUBLIC_KEY=
NEXT_PUBLIC_VAPI_ASSISTANT_ID=
```

![opengraph-image](https://github.com/eduamdev/car-rental-react/assets/35645733/f6c831fc-3992-4972-9c31-2c2964a55b56)

## Features

- `/app` dir
- Routing, Layouts and Nested Layouts
- Server and Client Components
- Loading UI
- Metadata files
- Responsive User Interface
- Styled using **Tailwind CSS**
- UI Components built using **Shadcn/ui**
- Interactive Map View using **Leaflet**
- Validations using **Zod**
- Form Validation using **React Hook Form**
- Authentication and User Management with **Clerk**
- Serverless SQL using **Vercel Postgres**
- Image Management using **Cloudinary**
- Infinite Logo Slider
- Search Bar
- Advanced Filters
- Code Linting
- Written in **TypeScript**

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (v18+)
- pnpm
- [Vercel account](https://vercel.com/) and a [Postgres Database](https://vercel.com/docs/storage/vercel-postgres) created
- [Cloudinary account](https://cloudinary.com/)
- [Clerk account](https://clerk.com/)

## Running Locally

1. Install dependencies using pnpm:

```bash
pnpm install
```

2. Set up environment variables

- Copy the `.env.example` file to `.env.local` at the root of the project:

  ```bash
  cp .env.example .env.local
  ```

- Update the `.env.local` file with your configuration details

3. Seed initial data:

```bash
pnpm seed
```

4. Start the Development Server:

```bash
pnpm dev
```
