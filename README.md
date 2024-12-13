# YouTube Comments and Likes Fetcher

This is a full-stack application built using React for the frontend and Node.js for the backend. The application allows users to input a YouTube video URL, fetch the number of likes, and display the top 5 most liked comments from the video.

## Features

- Fetch YouTube video details, including the number of likes and comments.
- Sort comments by the number of likes and display the top 5 most liked comments.
- Easy-to-use interface to input YouTube links.
- Built with React for the frontend and Node.js/Express for the backend.

## Technologies Used

- **Frontend**: React, Axios, CSS
- **Backend**: Node.js, Express, YouTube Data API
- **Database**: MongoDB (optional for storing fetched data)

## Prerequisites

Before running this project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name


Navigate to the backend folder:

bash
Copy code
cd backend

Install the necessary dependencies:

bash
Copy code
npm install
Set up YouTube API Key: You need to get a YouTube API key from the Google Cloud Console. Once you have the key, create a .env file in the backend directory and add the following:

plaintext
Copy code
YOUTUBE_API_KEY=your_youtube_api_key
Replace your_youtube_api_key with your actual YouTube Data API key.

Start the backend server:

bash
Copy code
npm start
The backend should now be running on http://localhost:3000.

Set up the Frontend:

The frontend is built using React.

Navigate to the frontend folder:

bash
Copy code
cd frontend
Install the necessary dependencies:

bash
Copy code
npm install
Update API URL: In frontend/src/App.js, ensure that the frontend is making requests to http://localhost:3000 (or your backend's deployed URL if applicable):

javascript
Copy code
const response = await axios.post('http://localhost:3000/data/fetch-data', { youtubeLink });
Start the React app:

bash
Copy code
npm start
The React app should now be running on http://localhost:3001.
