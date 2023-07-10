const { getUsersPlaylists } = require('./spotify/search');
const { getSession } = require('next-auth/react');

const handler = async (req, res) => {
  try {
    const { token: { accessToken } } = await getSession({ req });
    const response = await getUsersPlaylists(accessToken);
    if (!response.ok) {
      console.log(`Failed to get playlists. Status: ${response.status}`);
    }
    const { items } = await response.json();
    return res.status(200).json({ items });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default handler