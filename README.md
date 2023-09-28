# Crate Digger

Crate Digger is a web application that connects your Spotify playlists with Discogs to help you discover vinyl records of your favorite songs. It's the perfect tool for vinyl enthusiasts who want to bring the analog charm of vinyl records to their digital music collections.

## Features

- **Seamless Spotify Integration:** Log in with your Spotify Premium account and explore your playlists effortlessly.
- **Discover Vinyl Gems:** Find out which of your favorite songs are available on vinyl and get direct links to purchase them on Discogs.
- **Create Your Vinyl Wishlist:** Keep track of vinyl records you desire by adding them to your wishlist.
- **Musical Insights:** Gain insights into your music taste through personalized statistics based on your Spotify profile.

## Technologies Used

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Spotify RESTful API](https://developer.spotify.com/documentation/web-api/)
- [Discogs RESTful API](https://www.discogs.com/developers)

## Getting Started

To run Crate Digger locally, follow these steps:

1. Clone this repository to your local machine.

```
git clone https://github.com/DavidRod1865/crate_digger.git
```

2. Navigate to the project directory.

```
cd crate_digger
```

3. Install dependencies using npm or yarn.

```
npm install
# or
yarn install
```

4. Set up environment variables:
- Create a .env.local file in the root directory.
- Add your Spotify and Discogs API credentials to this file.

```env
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
DISCOGS_API_KEY=your-discogs-api-key
DISCOGS_API_SECRET=your-discogs-api-secret
```

4. Start the development server.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

You can deploy Crate Digger to platforms like Vercel, Netlify, or GitHub Pages. Make sure to set up your environment variables in your deployment environment as well.

## Contributing

We welcome contributions! If you'd like to contribute to Crate Digger, please follow our [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

