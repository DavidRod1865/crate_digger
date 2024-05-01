import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useSpotify from "../../hooks/useSpotify";
import Header from "../ui/header/Header";
import PlaylistGroup from "../ui/playlist/PlaylistGroup";
import { useRecoilState } from "recoil";
import { playlistState } from "../../atoms/playlistAtom";

const Dashboard = () => {
  // get spotify api
  const spotifyAPI = useSpotify();
  // get session
  const { data: session, status } = useSession();

  // local state for user and playlists
  const [localPlaylists, setLocalPlaylists] = useState([]);
  const [playlistRecoil, setPlaylistRecoil] = useRecoilState(playlistState);

  // get user / playlists and set them to local storage
  useEffect(() => {
    if (spotifyAPI.getAccessToken()) {
      const localPlaylists = localStorage.getItem("playlists");

      if (localPlaylists) {
        const parsedPlaylists = JSON.parse(localPlaylists);
        setLocalPlaylists(parsedPlaylists);
        setPlaylistRecoil(parsedPlaylists);
      } else {
        spotifyAPI.getUserPlaylists().then((data) => {
          setLocalPlaylists(data.body.items);
          localStorage.setItem("playlists", JSON.stringify(data.body.items));
          setPlaylistRecoil("playlists", JSON.stringify(data.body.items));
        });
      }
    }
  }, [session, spotifyAPI]);

  return (
      <div>
        <Header />
        <PlaylistGroup playlists={localPlaylists} />
      </div>
  );
};

export default Dashboard;
