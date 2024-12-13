const express = require('express');
const axios = require('axios');
const YouTubeData = require('../models/data');

const router = express.Router();

router.post('/fetch-data', async (req, res) => {
    const { youtubeLink } = req.body;

    if (!youtubeLink) {
        return res.status(400).json({ error: 'YouTube link is required' });
    }

    const videoId = youtubeLink.split('v=')[1]?.split('&')[0]; 

    if (!videoId) {
        return res.status(400).json({ error: 'Invalid YouTube link format' });
    }

    try {
        const videoResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${process.env.API_KEY}`
        );
        const commentResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${process.env.API_KEY}`
        );

        const likes = videoResponse.data.items[0]?.statistics?.likeCount || 0;
        const comments = commentResponse.data.items.map(item =>
            item.snippet.topLevelComment.snippet.textDisplay
        );

        const youtubeData = new YouTubeData({
            videoId,
            likes,
            comments,
        });
        await youtubeData.save();

        res.json({ message: 'Data fetched and saved successfully!', likes, comments });
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).send('Error fetching or saving data');
    }
});

module.exports = router;
