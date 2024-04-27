import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useSpotify from "../../hooks/useSpotify";
import Header from "../ui/header/Header";
import SearchBar from "../ui/search/SearchBar";
import Sidebar from "../main/Sidebar";
import Playlists from "../ui/playlist/Playlists";
import { playlistState, userState } from "../../atoms/playlistAtom";
import { useRecoilState } from "recoil";

const Dashboard = () => {
  // get spotify api
  const spotifyAPI = useSpotify();
  // get session
  const { data: session, status } = useSession();

  // use recoil to get playlist and user
  const [playlists, setPlaylistRecoil] = useRecoilState(playlistState);
  const [user, setUserRecoil] = useRecoilState(userState);

  // local state for user and playlists
  const [localPlaylists, setLocalPlaylists] = useState([]);
  const [localUser, setLocalUser] = useState([]);

  // get user / playlists and set them to local storage
  useEffect(() => {
    if (spotifyAPI.getAccessToken()) {
      const localUser = localStorage.getItem("user");
      const localPlaylists = localStorage.getItem("playlists");

      if (localUser) {
        const parsedUser = JSON.parse(localUser);
        setLocalUser(parsedUser);
        setUserRecoil(parsedUser);
      } else {
        spotifyAPI.getMe().then((data) => {
          setLocalUser(data.body);
          localStorage.setItem("user", JSON.stringify(data.body));
          setUserRecoil("user", JSON.stringify(data.body));
        });
      }

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
    <div className="flex">
      <Sidebar user={localUser} playlists={localPlaylists}/>
      <div className="w-screen">
        <Header />
        <SearchBar playlists={localPlaylists} />
        <Playlists playlists={localPlaylists} />
      </div>
    </div>
  );
};

export default Dashboard;
