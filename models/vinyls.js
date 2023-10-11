import mongoose from 'mongoose';

/* VinylSchema will correspond to a collection in your MongoDB database. */
const VinylSchema = new mongoose.Schema({
  title: {
    /* The title of the vinyl record */
    type: String,
    required: [true, 'Please provide a title for this vinyl.'],
    maxLength: [150, 'Title cannot be more than 150 characters'],
  },
  artist: {
    /* The artist or band of the vinyl record */
    type: String,
    required: [true, "Please provide the artist or band's name for this vinyl."],
    maxLength: [100, "Artist's name cannot be more than 100 characters"],
  },
  release_year: {
    /* The year the vinyl was released */
    type: Number,
    required: [true, 'Please specify the release year of the vinyl.'],
  },
  genre: {
    /* Genre of the music on the vinyl */
    type: String,
    required: [true, 'Please specify the genre of the vinyl.'],
    maxLength: [50, 'Genre cannot be more than 50 characters'],
  },
  image_url: {
    /* Url to vinyl cover image */
    required: [true, 'Please provide an image url for this vinyl.'],
    type: String,
  },
  label: {
    /* Record label that produced the vinyl */
    type: String,
    maxLength: [100, "Label's name cannot be more than 100 characters"],
  },
  comments: {
    /* Any additional comments or notes about the vinyl */
    type: String,
    maxLength: [500, 'Comments cannot be more than 500 characters'],
  },
});

export default mongoose.models.Vinyl || mongoose.model('Vinyl', VinylSchema);
