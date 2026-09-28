# Lumina

Lumina is a small ecommerce storefront built with React and Vite. Browse a curated product collection, add items to your cart, adjust quantities, and complete the demo checkout.

## Features

- Product catalog with category, price, and product imagery
- Shopping cart with quantity controls, item removal, and a running total
- Checkout form with basic name, email, and shipping-address validation
- Client-side routing for the storefront and cart

Checkout is a front-end demo: it does not process payments or send orders to a server, and cart contents are not persisted after a page reload.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Tech stack

- React 19
- React Router
- Vite
- lucide-react icons
