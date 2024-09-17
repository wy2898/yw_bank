# A Modern Digital Bank Platform

## Overview

**Modern Digital Bank Platform** is a fully responsive, web-based banking application built using **Next.js**. The project is designed to provide users with a secure and seamless banking experience, enabling them to manage accounts, transfer money, view transactions, and explore investment opportunities. With a focus on performance, security, and modern design, this application is tailored to meet the demands of digital-first banking.

The project leverages **Next.js** for server-side rendering (SSR) and static site generation (SSG), ensuring fast performance and SEO optimization.

## Features

- **Secure Authentication**: Login with two-factor authentication (2FA), secure password encryption, and social logins (OAuth).
- **Account Management**: View account details, manage multiple accounts, and track balances.
- **Money Transfers**: Easily transfer money between accounts or to other banks, with real-time notifications.
- **Transaction History**: View and filter transaction records, and export them for personal use.
- **Platform-adaptive Design**: Fully responsive layout for seamless use on desktop and mobile devices.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: MariaDB database in Appwrite
- **Authentication**: NextAuth in Appwrite for user authentication and OAuth support
- **Payment Integration**: Plaid for secure payments and Dwolla for money transfers
- **Deployment**: Vercel (for frontend and SSR), Docker (for development environment)
- **CI/CD**: GitHub Actions and Vercel

## Project Structure

```bash
.
├── components        # Reusable React components
├── app
│   ├── auth          # API routes for backend services
│   ├── root          # Authentication pages (login, register)
│   ├── api           # User dashboard for managing accounts
│   └── page.tsx      # Homepage
├── public            # Static files (images, icons)
├── styles            # Global and component-level styles
├── lib               # Utility functions and custom hooks
├── .env              # Environment variables
└── package.json      # Project dependencies
```

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/wy2898/yw_bank.git
```

### 2. Navigate to the Project Directory

```bash
cd yw_bank
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Set Up Environment Variables

Create a `.env` file from `.env.example` at the root of the project with the following variables:

```bash
# Environment variables for Next.js

#NEXTJS
NEXT_PUBLIC_SITE_URL=http://localhost:3000

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_ITEM_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
NEXT_APPWRITE_KEY=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=
DWOLLA_ENV=
```

### 5. Database Setup

banks: accountId(string),bankId(string),accessToken(string),fundingSourceUrl(string),shareableId(string),userId(relationship: banks can contain one userId, userId can belong to many banks)

transactions: name(string),amount(string),channel(string),category(string),senderId(string),receiverId(string),senderBankId(string),receiverBankId(string),email(string),

users: email(email),userId(string),dwollaCustomerUrl(string),dwollaCustomerId(string),firstName(string),lastName(string),address1(string),city(string),postalCode(string),dateOfBirth(string),ssn(string),state(string)

## 6. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to view the app.

## 7. Setup Shadcn

`https://ui.shadcn.com/docs`

```bash
npx shadcn@latest add form button input tabs table textarea select progress
```

## 8. Setup Plaid

`https://plaid.com/docs/`

```bash
npm install plaid
npm install react-plaid-link
vercel
```

## 9. Setup Dwolla

`https://developers.dwolla.com/docs`

```bash
npm install dwolla-v2 --save
vercel
```

## Testing

Run unit and integration tests with the following command:

```bash
npm run test
```

We use **Jest** and **React Testing Library** for testing.

### Code Standards

- Use **TypeScript** throughout the project for type safety.
- Follow the **Airbnb React/JSX Style Guide**.
- Make sure all changes are accompanied by corresponding tests.

## Acknowledgments

I would like to express my deepest gratitude to the following people for his invaluable contributions to this project:

- **[Adrian Hajdin](https://github.com/adrianhajdin)** - For his initial creation of this project.
