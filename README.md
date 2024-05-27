# Event Management System

A backend system for a virtual event management platform focusing on user registration, event scheduling, and participant management. The system uses in-memory data structures for storage and offers secure user authentication with bcrypt and JWT.

## Features

- **User Authentication**: Registration and login using bcrypt for password hashing and JWT for session management.
- **Event Management**: Create, update, delete, and view event details.
- **Participant Management**: Register users for events and manage participant lists.
- **RESTful API**: Exposes endpoints for user and event management.
- **Email Notifications**: Sends email on successful user registration.

## Technologies Used

- Node.js
- Express.js
- bcryptjs
- jsonwebtoken
- nodemailer
- body-parser

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/pratyakshroy47/event-management-system-airtribe.git
    ```

2. Navigate to the project directory:
    ```bash
    cd event-management-system-airtribe
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    JWT_SECRET=your_jwt_secret_key
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_email_password
    ```

### Running the Application

Start the server:
```bash
node app.js

