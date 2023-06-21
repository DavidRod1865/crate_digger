import {useSession, signIn} from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const {data: session} = useSession();

  useEffect(() => {
    if (session) {
      router.push('/dashboard'); // Redirect to the dashboard page
    }
  }, [session]);

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}