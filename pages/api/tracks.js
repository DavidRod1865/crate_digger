const { getPlaylistTracks } = require('./spotify/search');
const { getSession } = require('next-auth/react');

const handler = async (req, res) => {
  try {
    const { token: { accessToken } } = await getSession({ req });
    const playlistId = req.query.id; // Retrieve the playlist ID from the request query parameter
    const response = await getPlaylistTracks(accessToken, playlistId); // Pass the playlist ID to the getPlaylistTracks function
    if (!response.ok) {
      console.log(`Failed to get tracks. Status: ${response.status}`);
    }
    const { items } = await response.json();
    return res.status(200).json({ items });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default handler;
