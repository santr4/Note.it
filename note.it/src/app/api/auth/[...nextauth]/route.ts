import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GG_ID as string,
            clientSecret: process.env.GG_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };