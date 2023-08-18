const clientId = process.env.NEXT_PUBLIC_DISC_ID
const clientSecret = process.env.NEXT_PUBLIC_DISC_SECRET

const SEARCH_URL = `https://api.discogs.com/database/search?q=${artist}&track=${track}&album=${album}&format=vinyl&key=${clientId}}&secret=${clientSecret}`

export { SEARCH_URL };