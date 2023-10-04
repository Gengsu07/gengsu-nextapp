import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { OAuthOption } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(OAuthOption);
  return (
    <>
      <h1> Hello {session?.user?.name}</h1>
      <ul>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
        <ProductCard />

        <li>
          <Link href={"/users/detail"}>Users Detail</Link>
        </li>
      </ul>
    </>
  );
}
