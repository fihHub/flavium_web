import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import GithubProvider from 'next-auth/providers/github';
import LinkedinProvider from 'next-auth/providers/linkedin';
import { connectDB } from '@/src/lib/connectDB';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    LinkedinProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    
  }
  // adapter: MongoDBAdapter(clientPromise),
  // ...
});
