import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 60 },
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>UsersPage</h1>
      <table className="table">
        <thead>
          <tr>
            <th>
              <h3 className="font-bold text-black">Nama</h3>
            </th>
            <th>
              <h3 className="font-bold text-black">Email</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
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
