import React from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const providers = [
  {
    name: 'github',
    Icon: BsGithub
  },
  {
    name: 'Linkedin',
    Icon: BsLinkedin
  }
]

const SignIn = () => {
  const { push } = useRouter();
  const { data: session, status } = useSession();

  const handleOAuthSignIn = (name: string) => signIn()

  if (status === 'loading') {
    return (
      <div>
        <h2>Checking Authentication...</h2>
      </div>
    );
  }

  if (session) {
    setTimeout(() => {
      push('/');
    }, 5000);
    return (
      <div>
        <h2>You signed in already...</h2>
      </div>
    );
  }

  return (
    <div>
      <div>{providers.map(({ name, Icon }) => (
        <div key={name} onClick={() => handleOAuthSignIn(name)}>
          <Icon />
          <button>Sign in using {name}</button>
        </div>
      ))}</div>
    </div>
  );
};

export default SignIn;
