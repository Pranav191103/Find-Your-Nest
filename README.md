This real estate website goes beyond simple listings, offering a suite of features that empower users to take control of their experience.
Effortless Searching:  Find your dream property with ease! Utilize our robust search functionality with various filters like location, price range, property type, and more. Refine your search results to pinpoint listings that perfectly match your needs.
Manage Your Properties:  Landlords and sellers can seamlessly manage their property portfolios. Create new listings with detailed descriptions, captivating photos, and relevant filtering options to showcase their offerings effectively. The ability to edit existing listings ensures information stays current, and removing properties that are no longer available keeps the marketplace fresh.
Personalized User Profiles:  Maintain complete control over your user profile. Update your personal information, including uploading a profile picture, to personalize your account and enhance your experience on the platform.

Features
 User Authentication with Google Sign-in (Firebase)
 User Profile Management with Photo Upload (Firebase Storage)
 Property Listing (Details, Photos, etc.)
 Search Functionality for Properties
 Responsive Design (Tailwind CSS)

Technologies
 Frontend: React.js, Tailwind CSS
 Backend: Node.js, Express.js
 Database: MongoDB Atlas
 Authentication: Firebase

Prerequisites
 Node.js and npm (or yarn) installed on your system
 A Firebase project with Google Sign-in enabled
 A MongoDB Atlas account with a database configured
 react.js 
 
Setup
 
 Clone this repository:
  Bash
   git clone https://github.com/your-username/real-estate-website.git
 
 Install dependencies:
  cd real-estate-website
  npm install (or yarn install)

 Configure Firebase:
  Create a .env file in the project root directory.
  Add your Firebase project configuration details to the .env file, including:
  REACT_APP_FIREBASE_API_KEY
  REACT_APP_FIREBASE_AUTH_DOMAIN
  REACT_APP_FIREBASE_PROJECT_ID
  REACT_APP_FIREBASE_STORAGE_BUCKET

 Configure MongoDB Atlas:
  Update the connection string in your backend code to point to your MongoDB Atlas database.

 Running the backend of the application
  cd api
  npm run dev

 Running the frontend of the application 
  cd client 
  npm run dev




