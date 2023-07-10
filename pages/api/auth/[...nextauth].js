  import NextAuth from 'next-auth';
  import SpotifyProvider from 'next-auth/providers/spotify'
  import spotifyAPI, { LOGIN_URL } from '@/lib/spotify';
  
  const refreshAccessToken = async (token) => {
    try {
      spotifyAPI.setAccessToken(token.accessToken);
      spotifyAPI.setRefreshToken(token.refreshToken);
  
      const { body: refreshedToken } = await spotifyAPI.refreshAccessToken();
  
      return {
        ...token,
        accessToken: refreshedToken.access_token,
        accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,
        refreshedToken: refreshedToken.refresh_token ?? token.refreshToken
        //replaces refresh token or else falls back to old refresh token
      }
  
    }
    catch (error) {
      console.error(error)
      return {
        ...token,
        error: "RefreshAccessTokenError"
      }
    }
  }
  
  export default NextAuth({
      providers: [
        SpotifyProvider({
          clientId: process.env.REACT_APP_CLIENT_ID,
          clientSecret: process.env.REACT_APP_CLIENT_SECRET,
          authorizationURL: LOGIN_URL,
        }),
      ],
      secret: process.env.REACT_APP_JWT_SECRET,
      pages: {
        signIn: "/login"
      },
      callbacks: {
        async jwt({token, account, user}) {
          // initial sign in
          if (account && user) {
            return {
              accessToken: account.access_token,
              refreshToken: account.refresh_token,
              username: account.providerAccountId,
              accessTokenExpires: account.expires_at * 1000,
            };
          }
          //returns access token if access token did not expire
          if (Date.now() < token.accessTokenExpires) {
            console.log('EXISTING TOKEN IS VALID')
            return token;
          }
  
          //if access token expires 
          return await refreshAccessToken(token)
        },
        async session({session, token}) {
          session.user.accessToken = token.accessToken;
          session.user.refreshToken = token.refreshToken;
          session.user.username = token.username;
          session.user.image = token.picture;
          
          return session;
        },
      },
    });