# Transporindo Agung Sejahtera Website

This repository contains the official source code for the **Transporindo Agung Sejahtera** website — a modern, responsive platform built to showcase logistics services, fleet capabilities, and company updates.

## Technologies Used

- **Next.js (App Router)** – React framework for high‑performance web applications.
- **TypeScript** – Ensures type‑safety and more reliable development.
- **Tailwind CSS** – Utility‑first styling for rapidly building responsive UI.
- **Framer Motion** – Smooth, scroll‑triggered animations.
- **Sanity.io** – Headless CMS for managing dynamic content.

## Key Features

### **Dynamic Content Management**

All text, images, and service descriptions are managed through **Sanity Studio**, enabling non‑developers to update content instantly.

### **Scroll‑Triggered Animations**

Framer Motion is used to animate elements as users scroll, creating a fluid and engaging browsing experience.

### **Responsive UI**

Optimized layouts adjust seamlessly for mobile, tablet, and desktop using Tailwind's responsive utilities.

### **Performance Optimization**

Next.js Image component optimizes assets for faster loading and improved Core Web Vitals.

## Localization

The website supports **Indonesian and English** using a **Document‑Level Translation** strategy.

- **Structure**: Each language version exists as its own document in Sanity, allowing unique content and layouts per language.
- **Routing**: User locale is detected and mapped to the correct language document set.

## Project Structure

```
app/        → Pages, layouts, routing logic
components/ → UI components (Navbar, Footer, sections)
sanity/     → Sanity schemas, client configuration, GROQ queries
public/     → Static assets (images, fonts)
```

## Deployment

The project is optimized for **Vercel** deployment.

Make sure to configure the required **environment variables** for connecting to the Sanity production dataset.

## License

**Private** – All rights reserved.
