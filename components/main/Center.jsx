// // Importing required libraries and components
// import { useEffect, useState } from 'react';
// import { signOut, useSession } from 'next-auth/react';
// import { shuffle } from 'lodash';
// import useSpotify from "../../hooks/useSpotify";
// import { useRecoilState, useRecoilValue } from 'recoil';
// import { playlistState } from '../../atoms/playlistAtom';
// import { playlistIdState } from "../../atoms/playlistId";
// import Songs from '../song/Songs';
// import Button from '../ui/buttons/Button';
// import Header from '../ui/header/Header';

// // Array of gradient color classes
// const colors = [
//   'from-red-500',
//   'from-blue-500',
//   'from-green-500',
//   'from-yellow-500',
//   'from-indigo-500',
//   'from-purple-500',
//   'from-pink-500',
//   'from-orange-500',
//   'from-teal-500',
//   'from-cyan-500',
// ];

// const Center = ({ user, playlist }) => {
//   const spotifyAPI = useSpotify();
//   const { data: session } = useSession();
  
//   const [color, setColor] = useState(null);
//   const [user, setUser] = useState(null);
//   const playlistID = useRecoilValue(playlistIdState);  // Fixed missing parameter
//   const [playlist, setPlaylist] = useRecoilState(playlistState);  // Fixed incorrect state usage
  
//   const fetchData = async () => {
//     if (spotifyAPI.getAccessToken()) {
//       try {
//         setUser((await spotifyAPI.getMe()).body);
//         setPlaylist((await spotifyAPI.getPlaylist(playlistID)).body);
//       } catch (err) {
//         console.error('Error fetching data from Spotify:', err);
//       }
//     }
//   };

//   useEffect(fetchData, [session, spotifyAPI, playlistID]);

//   useEffect(() => {
//     setColor(shuffle(colors).pop());
//   }, [playlistID]);

//   return (
//     <div className='flex-grow h-screen w-screen overflow-y-scroll scrollbar-hide'>
//       <Header user={user} onClick={() => signOut({ callbackUrl: '/login' })} />
//       <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 p-8`}>
//         <img className='h-48 w-48 shadow-xl' src={playlist?.images?.[0]?.url || ''} alt='Playlist Cover' />
//         <div>
//           <p>PLAYLIST</p>
//           <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>{playlist?.name}</h1>
//         </div>
//       </section>
//       <div>
//         <Songs />
//       </div>
//     </div>
//   );
// };

// export default Center;

