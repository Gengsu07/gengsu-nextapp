import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex ">
      <aside className="bg-sky-300 p-5 mr-2">Sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
