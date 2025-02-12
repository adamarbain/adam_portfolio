This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## We are using 'shadcn' as UI library
- You can find the documentation [here](https://shadcn.vercel.app/)


Below is the command on how to add components from 'shadcn' to your project
```bash
npx shadcn@latest add [component-name]
```

## Lucide Icons
We are using Lucide Icons in this project. You can find the icons [here](https://lucide.dev/)

## Build and Run Docker Container
### 1.Build Docker Image
```bash
docker build -t my-portfolio .
```
docker build → This tells Docker to create a Docker image from the Dockerfile.
-t my-portfolio → The -t flag tags the image with a name (my-portfolio), making it easier to reference.
. → The dot (.) means "use the current directory" (where the Dockerfile is located) as the build context.

### 2.Run Docker Container
```bash
docker run -d -p 3000:3000 my-portfolio
```
docker run → Runs a container from the my-portfolio image.
-p 3000:3000 → This maps port 3000 inside the container to port 3000 on your machine, so you can access the app in your browser at http://localhost:3000.
my-portfolio → This specifies the Docker image name to run.

### 3.Stop Docker Container
```bash
docker ps
docker stop [container-id]
```