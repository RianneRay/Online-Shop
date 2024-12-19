# Online Shop

A simple online shop application built with the **MERN stack** (MongoDB, Express, React, Node.js) and styled using **Chakra UI**. This project demonstrates basic CRUD operations for managing products and includes both light and dark mode toggling for better user experience.

---

## Features

- **Homepage**: Displays a list of products.
- **Create Product**: Button at the top to add new products.
- **Edit and Delete**: Each product has buttons for editing and deleting.
- **Light/Dark Mode**: A button to toggle between light and dark themes.
- **CRUD Operations**: Create, Read, Update, and Delete products.

---

## Tech Stack

- **Frontend**: React, Chakra UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Build/Package Management**: npm

---

## Installation and Usage

Follow these steps to clone and run the project locally:

### Prerequisites

Make sure you have the following installed:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js.
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/RianneRay/Online-Shop.git
   cd Online-Shop

2. Install dependencies:

For the root project:

npm install

For the frontend:

npm install --prefix frontend



3. Configure environment variables:

Create a .env file in the backend directory.

Add the following keys:

MONGO_URI=your-mongodb-uri
PORT=4000



4. Build the frontend:

npm run build


5. Start the production server:

npm run start


6. Open your browser and navigate to:

http://localhost:4000




---

Project Structure

Online-Shop/
├── backend/
│   ├── server.js          # Backend entry point
│   ├── models/            # Database models
│   ├── routes/            # API routes
├── frontend/
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   └── store/         # State management (if applicable)
├── package.json           # Root project scripts and dependencies
├── README.md              # Project documentation


---

Scripts

Here are the key npm scripts for this project:

Build:

npm run build

This installs dependencies for the root project and the frontend, then builds the frontend.

Start:

npm run start

Starts the production server.



---

Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.


2. Create a new branch for your feature:

git checkout -b feature-name


3. Commit your changes:

git commit -m "Add feature-name"


4. Push the branch:

git push origin feature-name


5. Open a pull request.


---

Acknowledgments

Built with love using the MERN stack and Chakra UI.

Inspired by the need for simple CRUD-based applications.
