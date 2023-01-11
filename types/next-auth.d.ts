import NextAuth from 'next-auth'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {

    interface Session {
        expires: string,
        user: {
            id: string,
            role: string,
            name: string,
            lastname: string,
            email: string,
        }
    }

}