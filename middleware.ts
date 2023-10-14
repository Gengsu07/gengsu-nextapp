import { getServerSession } from "next-auth"
import { OAuthOption } from "./app/api/auth/[...nextauth]/route"
import { NextRequest, NextResponse } from "next/server"
export {default} from "next-auth/middleware"



export const config = {
    //* ; zero or more => /users dan semua alamat dibelakangnya tidak bisa/terprotek
    //+ : one or more => halaman users tidak termasuk
    //? : zero or one => users dan satu level dibawahnya termasuk
    matcher : ['/users/:id?']
}

// async function CustomMiddleware(req:NextRequest,res:NextResponse){
//     const session = await getServerSession(OAuthOption)
//     if (!session) return NextResponse.redirect(new URL('/login', req.url))
//     return res
// }