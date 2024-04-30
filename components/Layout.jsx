import { useEffect, useState } from "react";
import Header from "../components/ui/header/Header";
import Sidebar from "../components/main/Sidebar";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/playlistAtom";
import useSpotify from "../hooks/useSpotify";

const Layout = ({ children }) => {
    const spotifyAPI = useSpotify();
    const [localPlaylists, setLocalPlaylists] = useState([]);
    const [localUser, setLocalUser] = useRecoilState(userState);

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
                    localStorage.setItem("user", JSON.stringify(data.body));
                });
            }

            if (localPlaylists) {
                const parsedPlaylists = JSON.parse(localPlaylists);
                setLocalPlaylists(parsedPlaylists);
            } else {
                spotifyAPI.getUserPlaylists().then((data) => {
                    setLocalPlaylists(data.body.items);
                    localStorage.setItem("playlists", JSON.stringify(data.body.items));
                });
            }
        }
    }, [spotifyAPI, setLocalPlaylists, setLocalUser]);

    return (
        <div className="app-layout flex">
            <Sidebar user={localUser} playlists={localPlaylists} />
            <div className="main-content flex-1">
                <Header />
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Layout;
