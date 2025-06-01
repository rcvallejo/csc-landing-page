
# CSC Advogados Landing Page

## Description

This project is a responsive single-page landing page for CSC Advogados, a law firm specializing in banking and social security law. The primary goal of the page is to inform potential clients, particularly retirees, about improperly discounted union taxes from RMC (Reserva de Margem Consignável) and encourage them to contact the firm for assistance.

The page is built using React (via ESM CDN), TypeScript, and Tailwind CSS (via CDN). It includes Facebook Pixel tracking and a *simulated* Facebook Conversions API integration.

## Key Features

-   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
-   **Single-Page Layout:** All information presented on a single, scrollable page.
-   **Clear Call-to-Actions (CTAs):** Buttons prominently displayed to encourage contact via WhatsApp.
-   **Fixed WhatsApp Button:** A persistent WhatsApp button in the bottom-right corner for easy access.
-   **Informative Sections:**
    -   **Hero Section:** Headline addressing the user's problem with a direct CTA.
    -   **About Us:** Introduction to CSC Advogados and their expertise.
    -   **FAQ Section:** Answers to common questions regarding the RMC union tax issue, with expandable items.
    -   **Footer:** Copyright information.
-   **Branding:** Uses the specified color palette (Azul Petróleo and Creme Claro) and Google Fonts (Playfair Display, Cormorant Garamond).
-   **Facebook Pixel Integration:** Tracks `PageView` and `Lead` events.
-   **Simulated Facebook Conversions API:** Demonstrates how `Lead` events could be sent to the Conversions API (requires backend implementation for production).

## Technologies Used

-   **HTML5**
-   **CSS3** (via [Tailwind CSS v3](https://tailwindcss.com/))
-   **TypeScript**
-   **React 19** (via [esm.sh CDN](https://esm.sh/))
-   **Google Fonts** (Playfair Display, Cormorant Garamond)
-   **Facebook Pixel API** (client-side)
-   **Facebook Conversions API** (simulated client-side, **requires backend implementation for production**)

## Project Structure

```
/
├── index.html                # Main HTML entry point, includes CDN links and Tailwind config
├── index.tsx                 # React application entry point (renders App component)
├── App.tsx                   # Main React application component (layout)
├── metadata.json             # Application metadata (name, description)
├── types.ts                  # TypeScript type definitions (e.g., for FAQ items)
├── constants.ts              # Application constants (FAQ data, WhatsApp link)
├── README.md                 # This file
├── utils/
│   └── facebookApi.ts        # Logic for Facebook Pixel events and *simulated* Conversions API calls
└── components/
    ├── Header.tsx            # Header component with logo
    ├── HeroSection.tsx       # Main hero section with headline and CTA
    ├── AboutUsSection.tsx    # "Who We Are" section
    ├── FAQSection.tsx        # Section that lists FAQ items
    ├── FAQItem.tsx           # Component for a single expandable FAQ item
    ├── Footer.tsx            # Footer component
    ├── Button.tsx            # Reusable CTA button component
    └── WhatsAppButton.tsx    # Fixed floating WhatsApp button component
```

## Setup and Installation

This project is designed to run directly in a browser without a complex build process.

1.  **Clone the repository or download the files.**
2.  **Open `index.html` in your web browser.**

    *   All dependencies (React, ReactDOM, Tailwind CSS) are loaded via CDNs specified in `index.html`.
    *   The TypeScript code (`.tsx` files) is treated as JavaScript modules by modern browsers when `type="module"` is used, and `esm.sh` handles the JSX transformation.

    For a development environment with features like live reload, you can use a simple HTTP server:
    *   If you have Node.js installed: `npx serve .` (run from the project root)
    *   Or use an extension like "Live Server" in VS Code.

## Configuration

-   **Brand Colors & Fonts:** Defined in the `tailwind.config` object within the `<script>` tag in `index.html`.
-   **WhatsApp Link:** The target WhatsApp number can be changed in `constants.ts` (`WHATSAPP_LINK`).
-   **FAQ Content:** The questions and answers for the FAQ section are located in the `faqs` array in `constants.ts`.
-   **Facebook Pixel ID:**
    -   Set in `index.html` within the Facebook Pixel base code (`fbq('init', 'YOUR_PIXEL_ID');`).
    -   Also defined as `PIXEL_ID` in `utils/facebookApi.ts`.
    -   Currently: `3698294107135492`
-   **Facebook Conversions API Access Token:**
    -   Defined as `ACCESS_TOKEN` in `utils/facebookApi.ts`.
    -   Currently: `EAATO1zbGFqUBO...` (truncated for brevity in README)
    -   **SECURITY WARNING:** This token should **NEVER** be exposed in client-side code in a production environment. See "Facebook Pixel & Conversions API" section below.

## Facebook Pixel & Conversions API

### Facebook Pixel (Client-Side)

-   The base Pixel code is included in `index.html` and initialized with the Pixel ID.
-   `PageView` events are automatically tracked on page load.
-   `Lead` events are tracked when:
    -   The main CTA button in the Hero section (`components/Button.tsx`) is clicked.
    -   The fixed WhatsApp button (`components/WhatsAppButton.tsx`) is clicked.
-   You can verify Pixel events using the "Facebook Pixel Helper" browser extension.

### Facebook Conversions API (Simulated Client-Side)

-   The file `utils/facebookApi.ts` contains a function `sendFbConversionEvent` which *simulates* sending an event to the Facebook Conversions API.
-   When a `Lead` event is triggered by a button click, this function prepares a payload and logs it to the browser console. It also shows an `alert` message emphasizing that this is a simulation.
-   **CRITICAL SECURITY NOTE:** The `ACCESS_TOKEN` required for the Conversions API is currently included in `utils/facebookApi.ts`. **This is for demonstration purposes ONLY.** In a live production environment, the Access Token **MUST BE KEPT SECRET** on a backend server.
-   **Production Implementation:**
    1.  Remove the `ACCESS_TOKEN` from client-side code.
    2.  Create a secure backend endpoint (e.g., using Node.js/Express, Python/Flask, etc.).
    3.  When an event occurs on the client, send the relevant event data (without the token) to your backend endpoint.
    4.  Your backend server will then securely append the `ACCESS_TOKEN` and make the actual POST request to the Facebook Graph API (`https://graph.facebook.com/vXX.X/YOUR_PIXEL_ID/events`).
    5.  The console logs from `sendFbConversionEvent` show the structure of the payload your backend would need to send.
-   Use a `test_event_code` (commented out in `utils/facebookApi.ts`) in your payload when testing your backend integration with Facebook's Events Manager.

## Customization

-   **Text Content:** Modify the content directly within the respective `.tsx` components (e.g., `HeroSection.tsx`, `AboutUsSection.tsx`).
-   **Styling:** Adjust Tailwind CSS classes in the components or update the `tailwind.config` in `index.html`.
-   **Logo:** The "CSC" logo is currently text-based in `components/Header.tsx`. You can replace this with an `<img>` tag or SVG.

## Important Notes

*   **Security:** The most critical aspect for a production deployment is to handle the Facebook Conversions API Access Token securely on a backend server. **DO NOT DEPLOY WITH THE ACCESS TOKEN IN CLIENT-SIDE CODE.**
*   **CDN Reliance:** The application relies on CDNs for React, ReactDOM, and Tailwind CSS. While convenient for simple projects, for larger applications or production environments with performance and reliability concerns, consider using a package manager (npm/yarn) and a build tool (Vite, Create React App, Next.js).
*   **No Build Step:** This project is set up to run without a build step, leveraging modern browser features for ES modules and JSX transformation via `esm.sh`.
