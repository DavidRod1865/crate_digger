const clientId = local.env.REACT_APP_DISCOGS_SECRET
const clientSecret = local.env.REACT_APP_DISCOGS_ID

const SEARCH_URL = `https://api.discogs.com/database/search?q=${artist}&track=${track}&format=vinyl &key=${clientId}}&secret=${clientSecret}`

export { SEARCH_URL };