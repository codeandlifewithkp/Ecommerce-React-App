# Gaming Gear Ecommerce Store

A high-performance, cyberpunk-themed ecommerce web application built with React and Vite. This project focuses on a premium gaming aesthetic with neon visuals, smooth animations, and interactive elements.

## 🚀 Features

### 🎨 Visual & UI/UX

- **Cyberpunk Aesthetic**: Immersive dark mode with neon orange (`#FF5722`) accents and glitch text effects.
- **Dynamic Theming**: Global light/dark mode toggle.
  - _Dark Mode_: Deep black/gray backgrounds with neon orange glow.
  - _Light Mode_: Crisp blue color palette (`#0D47A1` & `#1565C0`) for a clean look.
- **Smooth Animations**:
  - Infinite scrolling brand marquee with seamless loop.
  - Hover effects on product cards (lift & shine).
  - Modal pop-in and fade-in text animations.

### 🛍️ Store Functionality

- **Product Showcase**:
  - **Interactive Carousel**: Horizontal scrolling for popular products.
  - **Smart Navigation**: Custom arrow controls with hover effects and "disabled" state logic at list boundaries.
  - **Entry Animations**: Products slide up and fade in (`slideUpFade`) for a premium feel.
  - **Wishlist Integration**: Heart icon on every product card to toggle wishlist status (with `empty`/`filled` states).
- **Interactive Product Cards**:
  - "Game card" style design with distinct "Buy Now" and "Add to Cart" actions.
  - Modularized `ProductCard` component for better maintainability.

### 👤 User Interaction & Authentication

- **Authentication System**:
  - **Guest Mode**: "Log In" button opens the Auth Modal.
  - **Logged In Mode**: Displays user avatar (initials) and a dropdown menu (Profile, Orders, Settings, Logout).
  - **User Context**: Global state management for user sessions.
- **Authentication Modal**:
  - Custom modal with backdrop blur.
  - Toggle between **Log In** and **Sign Up** views.
  - Real-time form input handling (updates global user state).
  - Form validation and password visibility toggle.
  - Background scrolling disabled when modal is open.
- **Responsive Navigation**:
  - Mobile-friendly navbar with slide-down menu.
  - **Expandable Search Bar**:
    - Desktop: Smooth slide-open animation, click-outside-to-close logic.
    - Mobile: Optimized full-width search input within the menu.
    - Two-step interaction: Open -> Type -> Search.
- **Fully Responsive Layout**:
  - Standardized breakpoints (`1024px`, `768px`, `480px`) for seamless viewing on all devices.
  - Mobile-optimized stacking for Footer and Home page sections.
- **Organized Footer**:
  - Glassmorphism effect with backdrop blur.
  - Responsive stacking layout (vertical on mobile, grid on desktop).
  - Transparent aesthetic with interactive social icons.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Custom properties & Animations)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Si, Fa, Io, Md)

## 📦 Installation & Setup

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd Ecommerce-React-App
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

- `src/Components`: Reusable UI components (Header, Modal, Footer, Product-Card, Marquee-Container, etc.)
- `src/Data`: Static data files (productsData.js, marqueeData.jsx)
- `src/Context`: Global state providers (UserContext, CartContext)
- `src/Pages`: Route pages (Home, Store, CustomBuilds)
- `src/Pages/Styles`: Page-specific CSS files
- `src/App.jsx`: Main application layout and theme provider

---

_Built for the elite gamers._ 🎮
