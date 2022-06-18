import axios from 'axios'

export const getTopTracks = async (cat, limit = 5) => {
  const token = localStorage.getItem('_act_')
  return await axios({
    // url: '/search?type=album&include_external=audio&q=harlow',
    url: `/me/top/${cat}?time_range=medium_term&limit=${limit}`,
    method: 'get',
    baseURL: 'https://api.spotify.com/v1',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
} 

export const getRecentlyPlayed = async () => {
  const token = localStorage.getItem('_act_')
  return await axios({
    url: `/me/player/recently-played?limit=50&before=${Date.now()}`,
    method: 'get',
    baseURL: 'https://api.spotify.com/v1',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
}
