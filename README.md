# Seyyed Uvais - Personal Portfolio

This is the complete source code for my personal developer portfolio, built with React, Vite, and Tailwind CSS. It showcases my skills, featured projects, and provides an easy way for visitors to get in touch.

**[View Live Demo](https://seyyeduvais.vercel.app/)** ⬅️

---

## Features ✨

- **Sleek UI:** A modern, clean, and fully responsive design.
- **Light & Dark Mode:** A theme toggle that respects user preference and saves it to local storage.
- **Cosmic Animations:** A custom animated star and meteor shower background.
- **Page Loader:** A smooth pre-loader that fades out once the page is ready.
- **Dynamic Components:**
  - **Hero Section:** Animated text and profile picture.
  - **About Me:** A summary of my skills and a "Download Resume" button.
  - **Skills Section:** A grouped list of my technical capabilities.
  - **Projects Section:** A filterable gallery of my featured work.
- **Contact Form:** A functional contact form that sends an email directly to my inbox using **EmailJS**.
- **WhatsApp Chat:** A floating chat button that appears only when the user scrolls to the footer section.
- **Custom 404 Page:** A branded "Not Found" page for any broken links.

---

## Tech Stack 🛠️

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS, shadcn/ui
- **Services:** EmailJS (for the contact form)
- **Icons:** Lucide React, React Icons
- **Linting:** ESLint, Prettier

---

## Getting Started

You can clone and run this project locally.

### 1. Clone the repository

```bash
git clone [https://github.com/Ucode-uvais/seyyed-portfolio.git]
cd seyyed-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up environment variables

The contact form requires API keys from EmailJS. Create a _.env.local_ file in the root of the project and add the following keys:

# Get these from your EmailJS Dashboard

```bash
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
```

### 4. Run the development server

```bash
npm run dev
```

The project will be running at _(http://localhost:5173/)_
