# Chuks Kitchen - Authentic Nigerian Food Delivery

A high-performance, responsive React application built for the Trueminds Frontend Internship. This project delivers a seamless food-ordering experience with 6 polished screens, adhering strictly to Figma design specifications and layout integrity.

## Live Demo
https://chuks-resturant.vercel.app/

## Tech Stack
* **React 18** (Vite)
* **Tailwind CSS** (Styling & Responsive Design)
* **React Router Dom** (Single Page Application Routing)
* **Lucide React** (Icons)

## Project Screens
1. **Welcome/Onboarding**: Entry point with brand value propositions.
2. **Home Page**: Featured categories and "Chef's Specials."
3. **Explore/Menu**: Full food listing with category filtering and unique descriptions.
4. **Sign In**: Secure access with a custom split-screen layout.
5. **Sign Up**: New user registration with validation-ready UI.

## Technical Decisions & Implementation
* **Routing Logic**: Implemented a conditional `AppContent` wrapper to dynamically hide the Navbar and Footer on Auth and Onboarding screens for a cleaner UX.
* **Layout Integrity**: Used **CSS Grid** to maintain exactly 3 cards per row on desktop, ensuring the UI remains stable across different resolutions.
* **Component-Based Architecture**: Created reusable components like `FoodCard` and `AuthLayout` to minimize code duplication and improve maintainability.
* **Typography**: Integrated 'Inter' and 'Island Moments' fonts to match the specific branding requirements of the Figma design.

## 🏃‍♂️ How to Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/IamJusttimmy/chuks-resturant
   Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
