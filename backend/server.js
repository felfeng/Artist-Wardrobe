const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Artist = require('./models/Artist');
const Outfit = require('./models/Outfit');

require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// fetch artists
app.get('/api/artists', async (req, res) => {
try {
    const artists = await Artist.find();
    res.json(artists);
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
}
});

app.get('/api/outfits', async (req, res) => {
  try {
      const outfits = await Outfit.find();
      res.json(outfits);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
  }
  });

// fetch outfits
app.get('/api/outfits/:artistID', async (req, res) => {
  try {
      const outfits = await Outfit.find({ artistID: req.params.artistID });
      res.json(outfits);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
  }
});


const PORT = 5001;
app.listen(PORT, () => {
console.log(`Server started on port ${PORT}`);
});