import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { createTransport } from 'nodemailer'

const prisma = new PrismaClient()

export default NextAuth(
    {
        adapter: PrismaAdapter(prisma),
        providers: [
            EmailProvider(
                {
                    server: {
                        host: process.env.EMAIL_SERVER_HOST,
                        port: process.env.EMAIL_SERVER_PORT,
                        auth: {
                            user: process.env.EMAIL_SERVER_USER,
                            pass: process.env.EMAIL_SERVER_PASSWORD
                        }
                    },
                    from: process.env.EMAIL_FROM,
                    async sendVerificationRequest({ identifier, url, provider, theme }) {
                        const { host } = new URL(url)

                        const html = ({url, host, theme}) => {
                            
                            const escapedHost = host.replace(/\./g, "&#8203;.")
                            console.log(escapedHost)

                            return `<body>
                                        <table width="100%">
                                            <tr>
                                                <td align="center" style="font-family: Arial, Helvetica, sans-serif;">
                                                    <img src="https://www.ensenada.tecnm.mx/wp-content/themes/tecnm/images/logo-ensenada.png" style="height: 10rem;"/>
                                                    <h3 style="text-align: center; color: #1C7ED6;">Instituto Tecnológico de Ensenada</h3>
                                                    <h2 style="text-align: center; color: #1C7ED6;">Soporte Técnico</h2>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="font-family: Arial, Helvetica, sans-serif;">
                                                    <p style="text-align: center; color: black;">Utiliza el siguiente enlace para ingresar a Soporte Técnico.</p>
                                                    <p style="text-align: center; color: black;">Si no solicitaste este correo puedes ignorarlo.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" style="padding: 2rem; font-family: Arial, Helvetica, sans-serif;">
                                                    <a href="${url}" onMouseOver="this.style.backgroundColor='#228BE6'" onMouseOut="this.style.backgroundColor='#1C7ED6'"  style="background-color: #1C7ED6; border: none; color: white; padding: 1.5rem; padding-left: 3rem; padding-right: 3rem; font-size: 1.5rem; border-radius: 0.5rem; text-decoration: none;">Ingresar</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </body>`
                        }

                        const transport = createTransport(provider.server)
                        const result = await transport.sendMail(
                            {
                                to: identifier,
                                from: 'soporte-tecnico@ite.edu.mx',
                                subject: `Iniciar sesión en Soporte Técnico`,
                                html: html({ url, host, theme }),
                            }
                        )

                        const failed = result.rejected.concat(result.pending).filter(Boolean)
                        if (failed.length) {
                            throw new Error(`El correo (${failed.join(", ")}) no pudo ser enviado.`)
                        }

                        
                    },
                }
            )
        ],
        callbacks: {
            async session({ session, user }){
                session.user = user;
                return session;
            },
        },
        pages: {
            signIn: '/signin',
            verifyRequest: '/verify',
            error: '/error',
            newUser: '/welcome'
        }
    }
)