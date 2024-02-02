import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "../lib/types";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credential",
      credentials: {
        username: {
          label: "User Name",
          type: "text",
          placeholder: "Your Username",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const res = await fetch(
          "http://127.0.0.1:8000/api/employees/get_user",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials?.username),
          }
        );
        if (!res.ok) throw new Error("Username or Password is not correct");
        const user = res.json();
        const isPasswordCorrect = await bcrypt.compare(
          credentials?.password,
          user["password"]
        );

        if (!isPasswordCorrect)
          throw new Error("Username or Password is not correct");
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/login'
  },

  callbacks: {
    
    async jwt({token, user}) {
        return token;
    },
    async session({token, session}) {
        return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}