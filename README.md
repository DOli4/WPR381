# Github link
https://github.com/DOli4/WPR381

# Community Portal – LeGastronome College

A responsive and structured Node.js + Express + EJS web application designed as a community portal for culinary arts students and faculty. This project serves as both a learning resource and an interactive platform for event engagement, institutional information, and public communication.

## Project Overview

This web application provides:

- A public-facing portal for showcasing events, workshops, and institutional highlights.
- Modular and reusable views using EJS templating.
- A styled and responsive frontend leveraging glassmorphism design patterns.
- Contact functionality with form handling and dynamic feedback.
- A maintainable Express.js backend architecture.

## Technology Stack

- **Backend Framework:** Node.js with Express
- **Templating Engine:** EJS (Embedded JavaScript)
- **Styling:** Custom CSS (Glassmorphism and responsive layout)
- **Development Tools:** Nodemon for live-reloading

## Folder Structure

```
.
├── app.js                 # Application entry point
├── routes/
│   └── pageRoutes.js      # Routing logic for views
├── views/
│   ├── pages/             # EJS page templates (home, about, contact, etc.)
│   └── partials/          # Reusable header and footer templates
├── public/
│   ├── css/style.css      # Global styles
│   └── images/            # Static image assets
├── package.json
├── .gitignore
└── README.md
```

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development

Start the development server with automatic reload:

```bash
npm run dev
```

Visit the application at: `http://localhost:3000`

### Production

Start the server normally:

```bash
npm start
```

## Features

- Dynamic team listing on the "About" page.
- Event and course listings with dates, descriptions, and pricing.
- Contact form with POST handling and user feedback.
- Responsive design for accessibility across devices.

## Team

- **Dieter** – Team Lead / Frontend Developer  
- **Keitumetse** – Backend Developer  
- **Magotso** – Data Manager  
- **Mogau** – Documentation Manager  

## Contact

For inquiries, suggestions, or collaboration opportunities, please use the contact form on the `/contact` route within the application.

## License

This project is provided for academic and demonstration purposes. It is not licensed for commercial use.
