## VerifyLook App

A web application which authenticates user by face detection and recognition using ReactJs, ExpressJs, NodeJs and Face_api.js

## Deployed App

* https://verify-look.vercel.app/

## System Requirements 

* NodeJS 
* NPM (comes with node)
* MongoDb 

## Installation

1. *Clone Repository*: Clone the repository to your local machine using the following command:
   
   git clone repository-url
   

2. *Install Dependencies*: Navigate to the project directory and install dependencies for both frontend and backend:
   
   * cd project-directory
    * npm install
   

3. *Configure Environment Variables*: Set up environment variables for MongoDB connection, JWT secret, and any other necessary configurations. Create a .env file in the backend directory and add your configurations:
   
   * MONGODB_URI=your-mongodb-uri
   * JWT_SECRET=your-jwt-secret
   * API_PORT=your-api-port
   ...
   

4. *Start Backend Server*: Run the following command to start the backend server:
   
   * cd ~/path/to/your/VerifyLook/server
   * npm run dev
   

5. *Start Frontend*: In a separate terminal, navigate to the frontend directory and start the React development server:
   
   * cd ~/path/to/your/VerifyLook/client
   * npm start
   

6. *Access Application*: Open your web browser and navigate to http://localhost:3000 to access the face recognition web application.

## Operating Instructions

1. *Sign Up or Log In*: On the first page of the website, you can either sign up for a new account or log in with existing credentials. React.js facilitates easy information entry, and face recognition helps verify your identity.

2. *Dashboard*: Once logged in, React.js assists in displaying the dashboard on the second page. The dashboard showcases a similarity score indicating how closely your face matches others in the system.

3. *Face Recognition*: The AI integration, utilizing the Face API library, accurately detects and recognizes faces, ensuring a smooth and secure user experience.

4. *Logout*: To log out, simply click on the logout button or navigate away from the dashboard page.