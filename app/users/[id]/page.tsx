"use client";
import { notFound, useRouter } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
}

const UsersDetail = ({ params: { id } }: Props) => {
  const router = useRouter();
  if (id > 10) notFound();
  return (
    <div>
      Users :{id}
      <div>
        <button
          className="btn btn-primary"
          onClick={() => router.push("/users")}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default UsersDetail;
