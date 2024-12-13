const mongoose = require('mongoose');

const youtubeDataSchema = new mongoose.Schema({
    videoId: { type: String, required: true, unique: true },
    likes: { type: Number },
    comments: { type: [String] },
    fetchedAt: { type: Date, default: Date.now },
});

const YouTubeData = mongoose.model('YouTubeData', youtubeDataSchema);
module.exports = YouTubeData;
