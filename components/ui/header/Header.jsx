import { useEffect, useState } from 'react';
import useSpotify from '../../../hooks/useSpotify';
import Button from '../buttons/Button';
import { useSession } from 'next-auth/react';

function Header(){
    const spotifyAPI = useSpotify();
    const [user, setUser] = useState(null);
    const { data: session } = useSession();

    useEffect(() => {
        if (spotifyAPI.getAccessToken() && session) {
          spotifyAPI.getMe().then((data) => setUser(data.body));
        }
    }, [session, spotifyAPI]);

    return (
        <header className='flex items-center justify-center bg-transparent px-8 pt-4'>
            <div className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#18D860] relative sm:inline-block p-1 mr-8'>
                <h1 className='relative text-black font-bold text-lg'>
                  Crate Digger
                </h1>
            </div>
            <Button href="/" text="Home" />
        </header>
    )
}

export default Header