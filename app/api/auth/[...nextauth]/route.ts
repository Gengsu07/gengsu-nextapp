import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvier from "next-auth/providers/github"
import CredentialsProvider  from "next-auth/providers/credentials"
import prisma from "@/prisma/client"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import bcrypt from "bcrypt"


export const OAuthOption:NextAuthOptions = {
    
    adapter : PrismaAdapter(prisma),
    providers:[
    CredentialsProvider({
        name: "Credentials",
        credentials:{
            email:{label:'email', type:'email', placeholder:'adakadabra@gmail.com'},
            password:{label:'password', type:'password', placeholder:'Password'}
        },
        async authorize(credentials,req){
            if (!credentials?.email || !credentials.password) return null;
            const user = await prisma.user.findUnique({where:{email: credentials.email}})
            if (!user) return null

            const passwordMatch = await bcrypt.compare(credentials.password, user.password!)
            return passwordMatch?user:null;
        }
    })    ,
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret : process.env.GOOGLE_CLIENT_SECRET!
    }),
    GithubProvier({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!
    })
],
session:{strategy:'jwt'},
pages:{
    newUser:'/register',
    signIn:'/login'
}
}

const handler = NextAuth( OAuthOption)

export { handler as GET, handler as POST }