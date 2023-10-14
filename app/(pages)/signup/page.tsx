"use client";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import gengsu from "../../../public/Gen.png";
import Link from "next/link";

const schema = z.object({
  name: z.string().min(5, { message: "name too short" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8, { message: "password too short" }),
});

type SignupData = z.infer<typeof schema>;

export default function SignUp() {
  const [info, setInfo] = useState({ error: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({ resolver: zodResolver(schema) });

  const router = useRouter();

  const onSubmit = async (data: FieldValues) => {
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    });
    if (response.status === 200) {
      router.push("/login");
    } else {
      const ket = await response.json();
      setInfo(ket);
    }
  };
  return (
    <>
      <div className="flex items-center max-w-xl justify-center px-3 md:mx-auto md:my-5  md:px-6 lg:px-8 py-12  bg-blue-950 md:rounded-lg ">
        <div className=" sm:w-full sm:max-w-sm flex-col p-3  ">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Register Account
          </h2>
          <div className="mt-3">
            <Image
              className="mx-auto h-10 w-auto"
              src={gengsu}
              alt="Your Company"
              width={700}
              height={200}
            />
          </div>

          <div className="mt-10 text-center text-md  leading-9 tracking-tight text-red-500">
            {info && <p>{info.error}</p>}
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium  text-white"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  type="name"
                  autoComplete="name"
                  {...register("name")}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-blue-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                />

                <div className="text-md  leading-9 tracking-tight text-red-500">
                  <p>{errors.email?.message}</p>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium  text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-blue-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                <div className="text-md  leading-9 tracking-tight text-red-500">
                  <p>{errors.email?.message}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium  text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password")}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-blue-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className="text-md  leading-9 tracking-tight text-red-500">
                  <p>{errors.password?.message}</p>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div>
            <p className="text-center text-white mt-2">
              Sudah punya akun?
              <Link href={"/login"}>
                <span className=" text-white font-bold"> login disini</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
