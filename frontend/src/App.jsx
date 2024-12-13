import React, { useState } from 'react';
import axios from 'axios';
import './App.css';  

const App = () => {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [likes, setLikes] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!youtubeLink) {
      setError('Please enter a valid YouTube link.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/data/fetch-data', { youtubeLink });
      setLikes(response.data.likes);
      setComments(response.data.comments.slice(0, 5));
    } catch (err) {
      setError('Failed to fetch data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h1>YouTube Likes and Comments</h1>

        <div className="input-container">
          <input
            type="text"
            className="input-field"
            placeholder="Enter YouTube Video URL"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
          />
        </div>

        <div className="button-container">
          <button onClick={handleSubmit} className="submit-button">
            {loading ? 'Loading...' : 'Fetch Data'}
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        {likes !== null && !loading && (
          <div className="result-container">
            <p className="likes">Likes: {likes}</p>
            <div className="comments">
              <h2>5 Comments:</h2>
              {comments.length === 0 ? (
                <p>No comments available.</p>
              ) : (
                <ul>
                  {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
