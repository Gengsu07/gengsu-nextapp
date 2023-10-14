import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { OAuthOption } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import freeplestine from "@/public/freepalestine.jpg";

export default async function Home() {
  const session = await getServerSession(OAuthOption);
  return (
    <>
      <h1 className="font-montserrat text-black">
        Hello {session?.user?.email}
      </h1>
      <Image src={freeplestine} alt="freeplestine"></Image>
      <ul>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
        {session ? (
          <ProductCard />
        ) : (
          <div>
            <p>Please Login or Register</p>
            <div>
              <Link href={"/signup"}>
                <button className="btn bg-blue-800 text-white mx-2 my-2 hover:bg-blue-500 hover:text-gray-700">
                  Register
                </button>
              </Link>
            </div>
          </div>
        )}

        <li>
          <Link href={"/users/detail"}>Users Detail</Link>
        </li>
      </ul>
    </>
  );
}
