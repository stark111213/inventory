import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import CreateUser from "./app/api/create-user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
  callbacks: {
    async signIn({ user }) {
      await CreateUser(user);
      return true;
    },
  },
});
