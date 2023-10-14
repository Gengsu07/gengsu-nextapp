import Image from "next/image";
import freeplestine from "@/public/freepalestine.jpg";

export default async function Home() {
  return (
    <>
      <div className="relative h-screen">
        <Image
          src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F17b2ab44-3cba-4bc9-ac88-5f4452f5d30a%2FIMG_0068.jpg?table=block&id=c6a9e4f4-77d8-4726-b57a-66cc06d922fd&spaceId=7079325e-a6cc-4427-b5ad-762f0ab6efec&width=2000&userId=9b8717a6-3ff4-4b97-9fce-297c73702f49&cache=v2"
          alt="freeplestine"
          fill
          className="object-cover"
          sizes="(max-width:480px) 100vw,(max-width:768px) 50vw, 33vw"
          priority
        ></Image>
      </div>
    </>
  );
}
