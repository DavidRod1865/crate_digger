import React from 'react'
import Playlist from '../components/Playlist'
import Profile from '../components/Profile'
import Nav from '../components/Nav'
import { topTracks } from '../api/spotify/search'

const Dashboard = () => {

  return (
    <>
      <Nav />
      <Profile />
      <div className='p-5 flex justify-between'>
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
      <main className='items-center h-screen w-full'>
        Dashboard Goes Here!
    <div>
      <button onClick={topTracks}>Fetch Top Tracks</button>
    </div>
      </main>
    </>
  )
}

export default Dashboard