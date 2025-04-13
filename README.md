# 🛍️ Whys Catalog

Entry task for the Whys company application, created by Martin Mlýnek.

## Task requirements

- Create a simple product catalog application using React and TypeScript:
- Include two pages: a product listing page (landing page) and a product detail view
- Use TanStack Query for data fetching from a mock API source of your choice
- Use a UI library of your choice (or none if you prefer)
- Implement basic error handling
- Include basic styles and ensure minimal responsiveness (desktop/mobile), but don't worry about the design too much
- Write reusable clean code
- Keep it simple and don't overengineer your solution
- Feel free to use an LLM (in fact it is recommended), but be prepared to discuss your design decisions
- Submit a GitHub repository with your project and brief README

## 🚀 Getting Started

### Prerequisites

- Node.js v22.14.0
- npm v11.3.0

### Installation and Run

```bash
npm install
npm run dev
```

## Technologies

- React
- Vite
- TypeScript
- TanStack Query
- TanStack Router
- Material UI
- Eslint
- Prettier
- Zod
- Axios

## 🧩 Application Features

- Includes two pages: **Product List** and **Product Detail**
- Displays a product catalog fetched from an API
- Features a navigation bar for switching between the product list and product detail pages
- The product list page supports pagination
- Clicking on a product redirects the user to its detail view
- The product detail page shows detailed information and a non-functional "Buy" button
- Failed API requests trigger a notification with a "Try Again" button
- Unexpected errors are handled by an Error Boundary with options to reload the app or return to the home page
- Displays a loading spinner while fetching data
- All API responses are validated using Zod schemas
- All pages include basic responsiveness for desktop and mobile
