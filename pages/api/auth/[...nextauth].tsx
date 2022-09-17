import NextAuth, { Awaitable, RequestInternal, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { getUserByEmail } from '../../../lib/users'

const bcrypt = require('bcrypt')

export default NextAuth(
    {
        providers: [
            CredentialsProvider(
                {
                    name: 'Credentials',
                    type: 'credentials',
                    credentials: {
                        email: {
                            label: 'Correo',
                            type: 'email',
                            placeholder: 'usuario@ite.edu.mx'
                        },
                        password: {
                            label: 'Contraseña',
                            type: 'password',
                        }
                    },
                    authorize: async (credentials, req) => {
                        
                        const user = await getUserByEmail(credentials.email)
                        const match = await bcrypt.compare(credentials.password, user.password)

                        if(user && match){
                            return user
                        }else{
                            return null
                        }
                    }
                }
            )
        ],
        callbacks: {
            async jwt({ token, user }){
                if(user)
                    token.user = user;
                return token;
            },
            async session({ session, token }){
                session.user = token.user;
                return session;
            },
        },
        pages: {
            signIn: '/signin'
        }
    }
)