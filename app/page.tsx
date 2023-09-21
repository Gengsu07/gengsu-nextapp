import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <>
      <h1> Gengsu HelloWorld</h1>
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
