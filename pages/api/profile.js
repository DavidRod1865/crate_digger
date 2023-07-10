const { fetchProfile } = require('./spotify/search');
const { getSession } = require('next-auth/react');

const handler = async (req, res) => {
  try {
    const { token: { accessToken } } = await getSession({ req });
    const response = await fetchProfile(accessToken);
    // if (!response.ok) {
    //   console.log(`Failed to get profile. Status: ${response.status}`);
    // }
    const { profile } = await response.json();
    var result = Object.keys(response).map((key) => [key, obj[key]]);

    console.log(result);
    return res.status(200).json({ profile });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default handler;
