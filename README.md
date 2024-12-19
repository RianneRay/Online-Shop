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

- **Frontend**:
  - **React**: JavaScript library for building user interfaces.
  - **Chakra UI**: React component library for creating accessible and styled components.
  - **React Router**: For routing and navigation within the React app.
  
- **Backend**:
  - **Node.js**: JavaScript runtime for the server.
  - **Express**: Web framework for Node.js to build the API.
  - **MongoDB**: NoSQL database for storing product data.
  - **Mongoose**: ODM (Object Document Mapping) library for MongoDB.
  
- **Development Tools**:
  - **Nodemon**: For automatic server restarts during development.

---

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version)
- [MongoDB](https://www.mongodb.com/) (you can also use MongoDB Atlas for cloud-based DB)
- [Git](https://git-scm.com/) for version control

### Steps to Run the Project Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/RianneRay/Online-Shop.git
    cd Online-Shop
    ```

2. **Install server dependencies**:
    - Navigate to the backend folder and install dependencies:
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:
    - Navigate to the frontend folder and install dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up environment variables for the backend**:
    - Install `dotenv` to manage environment variables:
      ```bash
      npm install dotenv
      ```
    - Create a `.env` file in the backend project root directory and add your MongoDB connection string:
      ```plaintext
      MONGO_URI=your_mongodb_connection_string
      ```

5. **Build the frontend**:
    - Navigate to the frontend directory and run the build command:
      ```bash
      npm run build
      ```

6. **Start the backend server**:
    - Navigate to the root directory and start the server:
      ```bash
      npm run start
      ```


7. **Visit the app**:
    - Once both the frontend and backend servers are running, open your browser and visit:
      - [Root: http://localhost:4000](http://localhost:4000)


---

## Usage

Once the app is running, you can:
- **Create new products** using the "Create Product" button on the homepage.
- **View products** displayed on the homepage.
- **Update or delete products** by clicking the respective buttons on each product card.

---

## Environment Variables

To run the backend project, you need to set up environment variables:
- Create a `.env` file in the backend directory.
- Use the `.env.example` file as a reference. Add your MongoDB connection string, for example:

```plaintext
MONGO_URI=your_mongodb_connection_string
```

## Contact

If you have any questions, feel free to reach out to:
- **Email**: [riannerayrelevo04@gmail.com](mailto:riannerayrelevo04@gmail.com)
- **GitHub**: [RianneRay](https://github.com/RianneRay)