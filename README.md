# 🦷 Royal Dent Clinics - Official Website

A modern, responsive, and bilingual (English & Arabic) dental clinic website built with clean HTML5, CSS3, and Vanilla JavaScript, optimized for fast performance and hosted via Firebase Hosting.

---

## 🌟 Features

- **🌐 Bilingual Support (EN / AR):**
  - Full English version (`index.html`)
  - Full Arabic version (`index-ar.html`) with right-to-left (RTL) layout support.
  - Instant language switcher in the navigation bar.

- **📱 Fully Responsive Design:**
  - Optimized for desktops, tablets, and smartphones.
  - Mobile-friendly navigation menu with animated hamburger toggle.

- **✨ Modern UI & Smooth Animations:**
  - Clean and luxurious aesthetic tailored for a high-end medical clinic.
  - Intersection Observer API for smooth fade-in animations on scroll.
  - Dynamic sticky header with scroll-aware styling.

- **📅 Interactive Appointment Booking:**
  - Client-side validated booking form.
  - Interactive submission feedback without page reloads.

- **🩺 Specialized Sections:**
  - **Hero Section:** Engaging headline with call-to-action buttons.
  - **About Us:** Clinic values, atmosphere, and technology highlights.
  - **Services Grid:** Overview of cosmetic dentistry, orthodontics, implants, and general dentistry.
  - **Specialist Team:** Doctor profiles and specialties.
  - **Contact & Location:** Quick access to clinic phone number, address, and social links.

---

## 🛠️ Tech Stack

- **Markup:** HTML5 (Semantic Elements, Accessibility-focused)
- **Styles:** Vanilla CSS3 (Custom CSS Variables, Flexbox, CSS Grid, Media Queries)
- **Scripts:** Vanilla JavaScript (ES6+, DOM Manipulation, Intersection Observer API)
- **Icons & Fonts:** [Font Awesome 6](https://fontawesome.com/), [Google Fonts (Poppins & Cairo)](https://fonts.google.com/)
- **Hosting & Deployment:** [Firebase Hosting](https://firebase.google.com/products/hosting)

---

## 📁 Project Structure

```plaintext
Royal Dent Clinics/
├── .firebase/                  # Firebase CLI cache & build configurations
├── .firebaserc                 # Firebase project configuration
├── .gitignore                  # Git ignored files & directories
├── firebase.json               # Firebase Hosting routing & rewrite rules
├── README.md                   # Project documentation
└── public/                     # Public web root deployed to Firebase
    ├── index.html              # English homepage
    ├── index-ar.html           # Arabic homepage (RTL)
    ├── style.css               # Main stylesheet (shared & responsive rules)
    ├── script.js              # Interactive scripts & scroll animations
    ├── about-image.png         # Clinic interior imagery
    ├── doctor_ahmed_alsayed.png# Specialist profile image
    ├── doctor_layla_mahmoud.png# Specialist profile image
    └── doctor_omar_khalid.png  # Specialist profile image
```

---

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser. For local development or deployment, having Node.js / Firebase CLI installed is recommended.

### 1. Running Locally

#### Option A: Quick Browser Launch
Double-click `public/index.html` or open it directly in any browser (Chrome, Edge, Firefox, Safari).

#### Option B: VS Code Live Server
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `public/index.html` and click **"Open with Live Server"**.

#### Option C: Local HTTP Server
Using Python:
```bash
# Navigate to the public folder
cd public

# Start a local web server
python -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

---

## ☁️ Deployment (Firebase Hosting)

The project is preconfigured for Firebase Hosting.

1. **Install Firebase CLI** (if not already installed):
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Deploy the Site**:
   ```bash
   firebase deploy --only hosting
   ```

---

## 🎨 Customization

- **Contact Info & Location:** Update phone numbers, email, and address in `index.html` and `index-ar.html` inside the `#booking` section.
- **Branding & Theme Colors:** Modify color variables in `public/style.css` (primary colors, typography, spacing).
- **Doctors & Services:** Edit or add new cards in the `#services` and `#team` sections.

---

## 📄 License

This project is open-source and available for customization and personal or commercial clinic use.
