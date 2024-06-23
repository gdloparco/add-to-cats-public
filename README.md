# Add to Cats
Add to Cats is a simple web application that allows users to maintain a shopping list using Firebase Realtime Database.

## Features

- **Realtime Updates**: Items added or removed from the shopping list are immediately reflected across all clients.
- **Persistent Storage**: Data is stored securely in Firebase, ensuring data integrity and availability.
- **Responsive Design**: The interface is designed to work seamlessly across different devices and screen sizes.

## Technologies Used

- **Firebase Realtime Database**: For storing and synchronizing the shopping list data in real-time.
- **HTML, CSS, JavaScript**: Frontend technologies for building the user interface and interacting with Firebase.
- **Vite.js**: A modern JavaScript module bundler that helps in managing dependencies and optimizing the frontend code.

## Getting Started

To run this project locally:

### Clone the repository:

```bash
git clone https://github.com/gdloparco/add-to-cats-public.git
cd add-to-cats
```

### Install dependencies:

```bash
npm install
```

### Set up Firebase:

Create a Firebase project.
Enable Firebase Realtime Database in your project.
Copy the Firebase project's configuration (specifically the apiKey, authDomain, databaseURL, projectId, etc.) into your index.js file under appSettings.

### Run the application:

```bash
npm start
```

This command starts the Vite development server. Open your browser and navigate to http://localhost:3000 to view the application.

## Project Structure

- **index.html**: HTML file defining the structure of the web page and importing necessary styles and scripts.
- **index.css**: CSS file (using Normalize.css) for styling the web page.
- **index.js**: JavaScript file responsible for interacting with Firebase Realtime Database, handling user inputs, and updating the shopping list dynamically.
- **vite.config.js**: Configuration file for Vite.js.
