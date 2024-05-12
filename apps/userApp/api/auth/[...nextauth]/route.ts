import NextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: 'email', type: 'text', placeholder='username'
                },
                password: {
                    label:'password',type:'password',placeholder:'password'
                }
            },
            async authorize(credentials: any) {
                return {
                    id:"userID"
                };
            },
        })
    ]
})

export const GET = handler;
export const POST = handler;