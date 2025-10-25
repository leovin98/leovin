## My Personal Website

![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)

This is my personal website, a minimalist design built with Next.js, TypeScript, and Tailwind CSS. This site share a bit about myself and my professional journey. I also use this site to store my personal collections and articles.

## Folder Structure

```bash
├── app/
│   ├── (app)/                      # Main route group
│   │   ├── collection/             # Post collection
│   │   │  └── [slug]/              # Dynamic route for each post/project
│   │   │       └── page.tsx
│   │   ├── layout.tsx              # Layout for (app)
│   │   └── page.tsx                # Home page
│   │
│   └── layout.tsx                  # Root layout
│
├── components/                     # Reusable UI components
├── content/                        # Source content managed by Velite
│   └── collection/                 # Markdown/MDX posts or projects
├── lib/                            # Utilities and helper functions
├── public/                         # Static assets (images, favicon, etc.)
│   └── favicon.ico
├── styles/                         # Global styles
│   └── globals.css
└── velite.config.ts                # Velite schema & config
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/leovin98/leovin.git
cd leovin
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project.
