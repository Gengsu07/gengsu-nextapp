import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1> Gengsu HelloWorld</h1>
      <li>
        <Link href={"/users"}>Users</Link>
      </li>
      <li>
        <Link href={"/users/detail"}>Users Detail</Link>
      </li>
    </main>
  );
}
