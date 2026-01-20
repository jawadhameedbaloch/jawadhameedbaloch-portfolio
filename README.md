# Professional Portfolio

A modern, responsive, and interactive personal portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases professional experience, skills, and projects with a focus on comprehensive user experience, utilizing smooth scrolling and advanced animations.

## Overview

This application serves as a digital curriculum vitae and project showcase. It is designed to provide potential employers and collaborators with a clear, engaging, and professional view of technical capabilities and professional history. The design emphasizes minimalism, performance, and accessibility.

## Technologies Used

The project is built using a robust modern web development stack:

- **Core Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Smooth Scrolling**: Studio Freight Lenis
- **Form Handling**: EmailJS (for contact functionality)

## Key Features

- **Responsive Design**: Fully adaptive layout that functions seamlessly across desktop, tablet, and mobile devices.
- **Dynamic Animations**: Utilizes Framer Motion for smooth component transitions and reveal effects.
- **Smooth Scrolling**: Implemented using Lenis for a refined navigation experience.
- **Project Showcase**: Dedicated sections for displaying technical projects with detailed descriptions.
- **Contact Integration**: Functional contact form powered by EmailJS.
- **Modern UI Components**: Custom modular components for reusability and maintainability.

## Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- Node.js (Version 16 or higher recommended)
- npm (Node Package Manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Running the Development Server:**
    Start the local development server to view the application.
    ```bash
    npm run dev
    ```
    The application will typically be accessible at `http://localhost:5173`.

### Configuration

This project uses EmailJS for the contact form functionality. To make the contact form work:

1.  Refer to `emailjs-setup.md` in the root directory for detailed instructions on obtaining your Service ID, Template ID, and Public Key.
2.  Update the credentials in the relevant component (typically `src/components/sections/Contact.tsx` or similar) or configure them as environment variables as per best practices.

### Building for Production

To create an optimized build for deployment:

1.  Run the build command:
    ```bash
    npm run build
    ```
    This generates a `dist` directory containing the compiled assets.

2.  To preview the production build locally:
    ```bash
    npm run preview
    ```

## Project Structure

The codebase follows a standard Vite + React structure:

- `src/`: Contains the source code.
  - `components/`: Reusable UI components and section layouts.
  - `App.tsx`: The main application component.
  - `main.tsx`: The entry point of the application.
- `public/`: Static assets such as images and the resume file.
- `tailwind.config.js`: Configuration for Tailwind CSS.
- `vite.config.ts`: Configuration for Vite.

## License

This project is available for personal and professional use. Please review the specific license terms in the repository if applicable.
