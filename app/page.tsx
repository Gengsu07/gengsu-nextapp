import Image from "next/image";
import freeplestine from "@/public/freepalestine.jpg";
import { getServerSession } from "next-auth";
import { OAuthOption } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(OAuthOption);
  return (
    <>
      <h1 className="font-montserrat text-black">
        Hello {session?.user?.email}
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
        sollicitudin urna. Duis sit amet facilisis nunc. Pellentesque vel nisi
        nec tortor pharetra fringilla. Phasellus ac tristique ligula, at
        porttitor velit. Vivamus et nisi sed quam pulvinar iaculis. Pellentesque
        auctor leo nec metus pretium eleifend. Duis vitae laoreet nisl, nec
        euismod lorem. Donec elementum ipsum aliquet odio aliquet aliquam. Donec
        interdum justo vel lobortis accumsan. Praesent sed libero sit amet purus
        efficitur malesuada nec sed risus. Sed dignissim nunc nec tempus
        scelerisque. Morbi at nisi vel eros finibus sagittis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
        sollicitudin urna. Duis sit amet facilisis nunc. Pellentesque vel nisi
        nec tortor pharetra fringilla. Phasellus ac tristique ligula, at
        porttitor velit. Vivamus et nisi sed quam pulvinar iaculis. Pellentesque
        auctor leo nec metus pretium eleifend. Duis vitae laoreet nisl, nec
        euismod lorem. Donec elementum ipsum aliquet odio aliquet aliquam. Donec
        interdum justo vel lobortis accumsan. Praesent sed libero sit amet purus
        efficitur malesuada nec sed risus. Sed dignissim nunc nec tempus
        scelerisque. Morbi at nisi vel eros finibus sagittis.
      </p>
      <div className="flex items-center mx-auto">
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg relative mx-5">
          <Image
            src="https://drive.google.com/uc?export=view&id=1BjtJi-cMUPBg_LJa-OwJn0nF7s9Z7NCz"
            alt="maountain"
            objectFit="cover"
            width={800}
            height={600}
            // sizes="(max-width:480px) 100vw,(max-width:768px) 50vw, 33vw"
          ></Image>
        </div>
        <div className="max-w-sm rounded-md overflow-hidden shadow-lg relative mx-5">
          <Image
            src={freeplestine}
            alt="freepalestine"
            objectFit="cover"
            width={800}
            height={600}
          ></Image>
        </div>
      </div>
    </>
  );
}
