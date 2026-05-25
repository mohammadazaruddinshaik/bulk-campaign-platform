# Bulk Campaign Platform

This repository contains a full-stack platform for orchestrating and executing targeted, data-driven bulk communication campaigns. It provides a robust backend API built with FastAPI for asynchronous task processing and a comprehensive React-based frontend for campaign management, monitoring, and analytics.

The system is designed for operational reliability, ensuring messages are validated against schemas, segmented using powerful filters, and delivered through rate-limited channels with real-time progress tracking.

## Key Features

*   **Template Management**: Create, version, and publish dynamic message templates using `{{variable}}` syntax.
*   **Data-Driven Campaigns**: Upload CSV datasets and validate them against template schemas before execution.
*   **Advanced Audience Segmentation**: Apply logical filters (AND/OR) on your datasets to target specific audience segments.
*   **Multi-Channel Integration**: Natively supports sending messages via WhatsApp (Twilio) and Email (SMTP), with configuration for rate limits.
*   **Asynchronous Execution Engine**: A robust background engine processes campaigns in a non-blocking manner, handling retries with exponential backoff.
*   **Real-time Monitoring**: Track live campaign progress via a secure WebSocket connection, providing immediate feedback on processed, successful, and failed messages.
*   **Analytics Dashboard**: Gain insights into your campaign performance with a dashboard showing KPIs, trends, channel performance, and system throughput.
*   **Multi-Tenant Architecture**: Built with a foundation for multi-organization and multi-user support, securing data at the organization level.

## Tech Stack

The project is architected as a monorepo with a distinct separation between the backend and frontend.

### Backend (Server)

*   **Framework**: FastAPI
*   **Database**: PostgreSQL with SQLAlchemy for ORM
*   **Data Processing**: Pandas for CSV parsing and in-memory filtering
*   **Authentication**: JWT-based authentication with `python-jose` and `passlib`
*   **Real-time**: WebSockets for live progress updates
*   **Async**: `asyncio` and `threading` for handling campaign execution in the background
*   **Channels**: Twilio SDK for WhatsApp, `smtplib` for Email
*   **Deployment**: Gunicorn + Uvicorn

### Frontend (Client)

*   **Framework**: React (with TypeScript)
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **Routing**: React Router
*   **Data Fetching**: Axios
*   **Visualizations**: Recharts for charts and analytics

## Project Structure

The repository is organized into two main directories:

```
/
├── client/     # React frontend application
└── server/     # FastAPI backend application
```

*   `server/app/`: Contains the core backend logic, including API routes, database models, business logic (core), and channel integrations.
*   `client/src/`: Contains the core frontend logic, including components, pages, context for auth, and routing.

## Getting Started

Follow these instructions to set up and run the platform on your local machine.

### Prerequisites

*   Python 3.11+
*   Node.js v18+ and npm
*   PostgreSQL database server

### Backend Setup

1.  **Navigate to the server directory:**
    ```bash
    cd server
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3.  **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure Environment Variables:**
    Create a `.env` file in the `server/` directory and add the following variables. Replace the placeholder values with your actual configuration.
    ```env
    # A strong, randomly generated secret key for JWT
    SECRET_KEY=your_super_secret_jwt_key

    # A 32-byte URL-safe base64-encoded key for encrypting credentials.
    # You can generate one using: python -c "from cryptography.fernet import Fernet; print(Fernet.generate_key().decode())"
    ENCRYPTION_KEY=your_super_secret_encryption_key

    # Your PostgreSQL connection string
    DATABASE_URL=postgresql://user:password@host:port/dbname
    ```

5.  **Run the Backend Server:**
    The application is configured to create database tables automatically on startup.
    ```bash
    uvicorn app.main:app --reload
    ```
    The backend will be available at `http://localhost:8000`.

### Frontend Setup

1.  **Navigate to the client directory:**
    ```bash
    cd client
    ```

2.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the `client/` directory and specify the URL of your running backend.
    ```env
    VITE_API_BASE_URL=http://localhost:8000
    ```

4.  **Run the Frontend Development Server:**
    ```bash
    npm run dev
    ```
    The frontend will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Deployment

The repository is configured for easy deployment to modern hosting platforms.

### Backend (Render)

The `render.yaml` file in the root directory defines the configuration for deploying the FastAPI backend on [Render](https://render.com/). It specifies:
*   **Runtime**: Python
*   **Build Command**: `pip install -r requirements.txt`
*   **Start Command**: `gunicorn app.main:app -k uvicorn.workers.UvicornWorker`
*   **Environment Variables**: `DATABASE_URL` and `SECRET_KEY` must be configured in your Render service settings.

### Frontend (Vercel / Netlify)

The client application is a standard Vite-based React app and can be deployed to any static hosting provider like Vercel or Netlify. The `vercel.json` file is included to handle client-side routing correctly by rewriting all paths to `index.html`.
