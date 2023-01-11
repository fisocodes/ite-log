/**
 * Nextauth configuration
 * @author Oscar Figueroa
 * @version 1.0.0
 * January 3, 2023
 */


import type { User } from '@prisma/client'

import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { readUserByEmail } from '@/prisma/users'
import bcrypt from 'bcrypt'

export default NextAuth(
    {
        providers: [
            CredentialsProvider({
                name: 'Credentials',
                credentials: {
                    email: {label: 'Email', type: 'email', placeholder: 'correo@ite.edu.mx'},
                    password: {label: 'Contraseña', type: 'password'}
                },
                async authorize(credentials, req){

                    const user: User = await readUserByEmail(credentials.email)

                    if(user){
                        const match = await bcrypt.compare(credentials.password, user.password)

                        if(match){
                            return user
                        }else{
                            return null
                        }

                    }else{
                        return null
                    }
                }
            })
        ],
        callbacks: {
            async jwt({ token, user }){
                if(user)
                    token.user = user
                return token
            },
            async session({ session, token }){
                //@ts-ignore
                session.user = token.user
                return session
            },
        },
        pages: {
            signIn: '/signin',
        }
    }
)