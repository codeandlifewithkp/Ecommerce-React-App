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

### 🛍️ Store & Products

- **Advanced Filtering**:
  - **Sidebar Controls**: Filter by **Price Range** (₹0 - ₹1,00,000), **Brand**, and **Availability**.
  - **Explicit Apply**: "Apply Filter" button creates a stable browsing experience.
  - **Touch-Optimized Slider**: Custom CSS slider with "filled" track visual.
- **Enhanced Product Cards**:
  - **Rich Data**: Displays Brand, Star Ratings, Review Counts, and Key Feature icons (RGB, DPI, Wireless).
  - **Smart Actions**: "Buy Now" / "Add to Cart" for available items; **"Notify Me"** for out-of-stock items.
  - **Live Status**: Dynamic "In Stock" / "Out of Stock" indicators.
  - **Wishlist**: Heart toggle button to save favorite items.
- **Product Showcase**:
  - **Interactive Carousel**: Horizontal scrolling for popular products.
  - **Smart Navigation**: Custom arrow controls with hover effects.

### 👤 User Interaction

- **Authentication Modal**:
  - Custom modal with backdrop blur.
  - Toggle between **Log In** and **Sign Up** views.
  - Form validation and password visibility toggle.
  - Background scrolling disabled when modal is open.
- **Responsive Navigation**:
  - Mobile-friendly navbar with slide-down menu.
  - **Expandable Search Bar**: Smooth slide-open animation with two-step interaction.
- **Fully Responsive Layout**:
  - **Grid System**: Adaptive 3-column product grid that handles sidebar layout gracefully.
  - **Mobile-First**: Optimized stacking for Footer and Filter Sidebar on smaller screens.
- **Organized Footer**:
  - Glassmorphism effect with backdrop blur.
  - Interactive social icons and responsive stacking.

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

- `src/Components`: Reusable UI components (Header, Modal, Footer, etc.)
- `src/Pages`: Route pages (Home, Store, CustomBuilds)
- `src/Pages/Styles`: Page-specific CSS files
- `src/App.jsx`: Main application layout and theme provider

---

_Built for the elite gamers._ 🎮
