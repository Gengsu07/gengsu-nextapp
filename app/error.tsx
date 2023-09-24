"use client";
import Error from "next/error";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log(error);
  return (
    <>
      An UnExpeted error happened
      <div>
        <button className="btn" onClick={() => reset()}>
          Retry
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
