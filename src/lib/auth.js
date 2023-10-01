import { prisma } from "@/lib/prismaclient";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        const existingUser = await prisma.user.findUnique({
          where: { username: credentials.username },
        });

        if (!existingUser) return null;

        const passwordMatch = existingUser.password == credentials.password;

        if (!passwordMatch) return null;

        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          fullname: existingUser.fullname,
          roleuser: existingUser.roleuser,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, username: user.username, roleuser: user.roleuser };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          roleuser: token.roleuser,
        },
      };
      return session;
    },
  },
};

export default authOptions;
