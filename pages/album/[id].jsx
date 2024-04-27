import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistState, userState } from "../../atoms/playlistAtom";
import { shuffle } from "lodash";
import useSpotify from "../../hooks/useSpotify";
import Header from "../../components/ui/header/Header";
import SearchBar from "../../components/ui/search/SearchBar";
import Sidebar from "../../components/main/Sidebar";
import Songs from "../../components/song/Songs";

const colors = [
  "from-red-500",
  "from-blue-500",
  "from-green-500",
  "from-yellow-500",
  "from-indigo-500",
  "from-purple-500",
  "from-pink-500",
  "from-orange-500",
  "from-teal-500",
  "from-cyan-500",
];

const AlbumPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const defaultImage = "/recordImage.png";

  // get spotify api
  const spotifyAPI = useSpotify();
  // get playlist from recoil
  const [currentPlaylist, setCurrentPlaylist] = useRecoilState(playlistState);
  const [localPlaylists, setLocalPlaylists] = useState([]);
  const [localUser, setLocalUser] = useState([]);

  // get playlist on load
  useEffect(() => {
    if (spotifyAPI.getAccessToken() && id) {
      spotifyAPI
        .getPlaylist(id)
        .then((data) => setCurrentPlaylist(data.body))
        .catch((err) => console.log("Playlist failed to load.", err));
    }
  }, [spotifyAPI, playlistState, id]);

// get user / playlists and set them to local storage
 useEffect(() => {
  if (spotifyAPI.getAccessToken()) {
    const localUser = localStorage.getItem("user");
    const localPlaylists = localStorage.getItem("playlists");

    if (localUser) {
      const parsedUser = JSON.parse(localUser);
      setLocalUser(parsedUser);
    } else {
      spotifyAPI.getMe().then((data) => {
        setLocalUser(data.body);
      });
    }

    if (localPlaylists) {
      const parsedPlaylists = JSON.parse(localPlaylists);
      setLocalPlaylists(parsedPlaylists);
    } else {
      spotifyAPI.getUserPlaylists().then((data) => {
        setLocalPlaylists(data.body.items);
      });
    }
  }
}, [spotifyAPI]);

  // change color on playlist change
  const [color, setColor] = useState(null);
  useEffect(() => {
    setColor(shuffle(colors)[0]);
  }, [id]);

  return (
    <div className="flex">
      <Sidebar user={localUser} playlists={localPlaylists} />
      <div className="flex-grow h-screen w-screen overflow-y-scroll scrollbar-hide">
        <section
          className={`flex flex-col space-x-7 h-fit p-8 bg-gradient-to-b to-black ${color}`}
        >
          <Header />
          <SearchBar />
          <div className="mt-1">
            <img
              className="h-48 w-48 shadow-xl"
              src={currentPlaylist?.images?.[0]?.url || defaultImage}
              alt=""
            />
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                {currentPlaylist?.name}
              </h1>
            </div>
          </div>
        </section>

        <Songs />
      </div>
    </div>
  );
};

export default AlbumPage;
