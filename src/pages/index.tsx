import type { NextPage } from 'next';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { data: session } = useSession();

  const { push, asPath } = useRouter();

  // to prevent default browser behaviour,
  // handle auth flows.
  const handleSignIn = () => push(`/auth/signin?callbackUrl=${asPath}`);

  const handleSignOut = (e: any) => signOut({ redirect: false });

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          {session ? (
            <div>
              <h2>Welcome, {session.user?.name}</h2>
              <h3>You're signed in as - {session.user?.email}</h3>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          ) : (
            <div>
              <h2>Sorry, You're currently not signed in.</h2>
              <button onClick={handleSignIn}>Sign In</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;