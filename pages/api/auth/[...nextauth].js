import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify'

export default NextAuth({
    providers: [
      SpotifyProvider({
        authorization:
          'https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,playlist-read-collaborative,user-library-read',
        clientId: process.env.REACT_APP_CLIENT_ID,
        clientSecret: process.env.REACT_APP_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      async jwt({token, account}) {
        if (account) {
          token.accessToken = account.refresh_token;
        }
        return token;
      },
      async session(session, user) {
        session.user = user;
        return session;
      },
    },
  });