# Let's Study Portal

A student portal that displays student profiles and applications.

## Features
- User authentication (login/signup)
- Responsive UI

## Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Deployment:** Vercel (Frontend & Backend) 

## Dependencies
### Frontend:
- React
- React-Router
- Axios
- Tailwind CSS
- React-Toastify

### Backend:
- Express.js
- Mongoose
- JSON Web Token (JWT)
- bcrypt.js
- CORS
- dotenv
- Validator

## Setup Instructions
### Prerequisites:
- Node.js installed
- MongoDB (local or Atlas)

### Frontend Setup:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup:
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the backend root directory and add:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
4. Start the server:
   ```bash
   npm run dev
   ```

## Deployment
- **Frontend:** Deploy on Vercel
- **Backend:** Deploy on Render or Heroku

## Contributing
Feel free to fork the repo and submit pull requests for enhancements or bug fixes.



