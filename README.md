## Product-Form
This project is a React application that allows users to create a product using a form built with Shopify Polaris. The form includes fields for Title, Price, Stock Quantity, and Description. State management is handled using MobX, and the form submission simulates an API call to mimic the process of creating a product. For the backend, I used AdonisJS to handle the requests from the frontend and MySQL for the database.

### Table of Contents

* [Features]
* [Installation]
* [Usage]
* [Technologies Used]

### Features

* Product creation form with fields: Title, Price, Stock Quantity, and Description
* Form validation to ensure all fields are correctly filled
* State management using MobX
* Simulated API call on form submission
* Success and error messages based on the submission result
* AdonisJS for the backend
* MySQL for the database.

## Installation

### Prerequisites

* Node.js (version 14.x or later)
* npm (version 6.x or later)

### Steps

1. Clone the repository:

git clone https://github.com/jedidia-nku/Product-Form.git
cd Product-Form
cd frontend and cd backend

2. Install dependencies:

npm install

3. Start the development server:

npm start or npm run dev

## Usage

1. Open your web browser and navigate to http://localhost:5173.
2. Fill out the product creation form with the necessary details.
3. Click the "Create Product" button to create the product.
4. You will see a success message if the product is created successfully, or an error message if there is an issue with the submission.

## Technologies Used

* **React**: JavaScript library for building user interfaces
* **TypeScript**: Superset of JavaScript that adds static types
* **Shopify Polaris**: Design system used for building Shopify apps
* **MobX**: State management library
* **AdonisJS**: handle the requests from the frontend and save them in Database
* **MySQL**: Database to store Product's Details