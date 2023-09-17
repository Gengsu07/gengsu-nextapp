import ProductCard from "@/app/components/ProductCard/ProductCard";
import React from "react";

interface Props {
  params: { id: number };
}

const UsersDetail = ({ params: { id } }: Props) => {
  return (
    <div>
      Users :{id}
      <ProductCard />
    </div>
  );
};

export default UsersDetail;
