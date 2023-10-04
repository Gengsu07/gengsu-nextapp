export {default} from "next-auth/middleware"

export const config = {
    //* ; zero or more => /users dan semua alamat dibelakangnya tidak bisa/terprotek
    //+ : one or more => halaman users tidak termasuk
    //? : zero or one => users dan satu level dibawahnya termasuk
    matcher : ['/users/:id?']
}