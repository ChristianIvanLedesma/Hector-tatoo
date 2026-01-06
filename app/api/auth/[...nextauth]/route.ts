import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Admin",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;

                // 🔑 lista de admins 
                const admins =process.env.ADMIN_EMAIL?.split(",").map((e) => e.trim()) ?? [];

                const isAdmin =admins.includes(credentials.email) &&credentials.password === process.env.ADMIN_PASSWORD;

                if (!isAdmin) return null;

                return {
                    id: credentials.email, 
                    name: "Administrador",
                    email: credentials.email,
                    role: "ADMIN",
                };
            },
        }),
    ],

    session: { strategy: "jwt" },

    callbacks: {
        async jwt({ token, user }) {
            if (user && "role" in user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user && token.role) {
                session.user.role = token.role as string;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
