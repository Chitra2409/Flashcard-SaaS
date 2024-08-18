
# <img src="public/logo3.webp" alt="Logo" width="50" height="50"> InsightInk

<!-- Add your project logo or banner here -->


## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Demo Video](#demo-video)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

<!-- Briefly describe your project here -->
This project is a web application that allows users to generate and manage flashcards for efficient learning. It also includes a pricing page and user authentication through sign-up and sign-in flows. Additionally, it integrates with Stripe for handling payments and subscriptions.

## Features

- **AI-Powered Flashcard Generator**: 
  Automatically converts PDFs, Docs, Txt, or manually entered text into study flashcards using AI.

- **Stripe Payment Integration**: 
  Supports secure subscription payments via Stripe with options for monthly or annual plans.

- **Responsive Design**: 
  Fully responsive, accessible on desktop, tablet, and mobile devices.

- **Smart Flashcards**: 
  AI generates flashcards by summarizing key concepts to optimize study sessions.

- **Cross-Device Accessibility**: 
  Access flashcards anytime, anywhere, across all devices.

## Architecture
<img src="public/architecture.PNG" alt="architecture" >

## Getting Started

To get a local copy of this project up and running, follow these steps.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A Google account for Google Analytics (optional)
- A Stripe account for payment integration (optional)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourproject.git
   cd yourproject
    ```
2. Install dependencies:
    ```bash
   npm install
    ```
3. Create a .env.local file in the root directory and add the necessary environment variables as outlined below.

## Environment Variables

The project requires some environment variables for API keys and service configurations. These should be added to a .env.local file in the root directory.

    ```bash
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
    STRIPE_SECRET_KEY=your-stripe-secret-key
    
    OPENAI_API_KEY=your-openai-api-key
    
    NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY=your-google-translate-api-key

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
    CLERK_SECRET_KEY=your-clerk-secret-key

    #  Firebase Configuration
    NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
    NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-firebase-measurement-id
    ```

## Usage

### Running the Development Server

To start the development server, run:

    ```bash
    npm run dev
    ```

Visit http://localhost:3000 to see the application running locally.


## Building for Production

To create a production build, run:

    ```bash
    npm run build
    ```
This will optimize the project for deployment

To start the production server, run:

    ```bash
    npm start
    ```
## Demo Video

[Demo Video](https://drive.google.com/file/d/1dombUuWFM1zHIawsSyvWKS27-46_OVvB/view?usp=drive_link)

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Material-UI**: A popular React UI framework for building responsive and styled components.
- **Stripe**: A payment processing platform used for handling subscriptions and secure payments.
- **Firebase**: Provides authentication, database, and hosting solutions.
- **OpenAI**: Powers the AI-based flashcard generation.

## Deployment

### Deploying to Vercel

The project is optimized for deployment on [Vercel](https://vercel.com/).

1. Connect your GitHub repository to Vercel.
2. Set up your environment variables in the Vercel dashboard.
3. Deploy your app with a single click.

### Other Platforms

You can also deploy this project to platforms like Heroku, Netlify, or Firebase Hosting. Ensure that you set up your environment variables appropriately on the chosen platform.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.
