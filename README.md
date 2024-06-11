This real estate website goes beyond simple listings, offering a suite of features that empower users to take control of their experience.
Effortless Searching: Find your dream property with ease! Utilize our robust search functionality with various filters like location, price range, property type, and more. Refine your search results to pinpoint listings that perfectly match your needs.
Manage Your Properties: Landlords and sellers can seamlessly manage their property portfolios. Create new listings with detailed descriptions, captivating photos, and relevant filtering options to showcase their offerings effectively. The ability to edit existing listings ensures information stays current, and removing properties that are no longer available keeps the marketplace fresh.

Features:
1.User Authentication with Google Sign-in (Firebase)
2.User Profile Management with Photo Upload (Firebase Storage)
3.Property Listing (Details, Photos, etc.)
4.Search Functionality for Properties
5.Responsive Design (Tailwind CSS)

Technologies:
1.Frontend: React.js, Tailwind CSS
2.Backend: Node.js, Express.js
3.Database: MongoDB Atlas
4.Authentication: Firebase

Prerequisites
1.Node.js and npm (or yarn) installed on your system
2.A Firebase project with Google Sign-in enabled
3.A MongoDB Atlas account with a database configured
4.react.js

Setup:

1.Clone this repository:
Bash
git clone https://github.com/your-username/real-estate-website.git

2.Install dependencies:
cd real-estate-website
npm install (or yarn install)

3.Configure Firebase:
Create a .env file in the project root directory.
Add your Firebase project configuration details to the .env file, including:
REACT_APP_FIREBASE_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET

4.Configure MongoDB Atlas:
Update the connection string in your backend code to point to your MongoDB Atlas database.

5.Running the backend of the application
cd api
npm run dev

6.Running the frontend of the application
cd client
npm run dev

Preview:
https://find-your-nest.onrender.com
