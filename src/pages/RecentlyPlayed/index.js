import { useState, useEffect } from 'react'

import { getRecentlyPlayed } from '../../services/spotify'

export default function RecentlyPlayed() {
  const [recent, setRecent] = useState(null)

  const fetchRecentPlayed = async () => {
    const recentPlayed = await getRecentlyPlayed()
    console.log(recentPlayed)
    setRecent(recentPlayed?.data?.items)
  }

  useEffect(() => {
    fetchRecentPlayed()
  }, [])
  return (
    <div>
      <ul>
        {recent?.map((history) => (
          <li>{history?.track?.name}</li>
        ))}
      </ul>
    </div>
  )
}