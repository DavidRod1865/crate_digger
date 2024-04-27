import { atom } from "recoil"

const playlistState = atom({
    key: "playlistState",
    default: []
})

const userState = atom({
    key: "userState",
    default: []
})

export { playlistState , userState }