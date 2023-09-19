import Link from "next/link";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}
interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 },
  });
  const users: User[] = await res.json();
  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (u) => u.email : (u) => u.name
  );

  return (
    <>
      <h1>UsersPage</h1>
      <p> sorted by: {sortOrder}</p>
      <table className="table">
        <thead>
          <tr>
            <th>
              <Link href={"/users?sortOrder=name"}>
                <h3 className="font-bold text-black">Nama</h3>
              </Link>
            </th>
            <th>
              <Link href={"/users?sortOrder=email"}>
                <h3 className="font-bold text-black">Email</h3>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id} className="hover">
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
