import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema({
  list_name: {
    /* The title of the vinyl record */
    type: String,
    required: [true, 'Please provide a title for this vinyl.'],
    maxLength: [150, 'Name cannot be more than 150 characters'],
  },
  comments: {
    /* Any additional comments or notes about the vinyl */
    type: String,
    maxLength: [500, 'Comments cannot be more than 500 characters'],
  },
  vinyls: {
    /* The vinyls in the playlist */
    type: Array,
    required: [true, 'Please provide at least one vinyl for this playlist.'],
  },
});

export default mongoose.models.List || mongoose.model('List', ListSchema);
