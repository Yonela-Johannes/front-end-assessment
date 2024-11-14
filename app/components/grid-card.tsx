import { Link } from "@remix-run/react";
import VideoPlayer from "./video-player";

type Props = {
  product: Array<{
    imgSrc: string;
    title: string;
  }>;
};

export default function GridCard({ product }: Props) {
  console.log(product);
  return (
    <div className="grid lg:grid-cols-4 w-full justify-center items-center">
      <div className="relative col-span-2 w-full h-[461px] lg:h-[744px] lg:w-[595px] row-span-2 bg-blue-700">
        <VideoPlayer vidSrc={product[0].vidSrc} />
        <div className="absolute bottom-0 right-0 w-16 h-16">
          <img
            className="object-cover w-full h-full"
            src={product[0].imgSrc}
            alt={product[0].title}
          />
        </div>
      </div>

      <div className="col-span-1 row-span-2 gap-2 flex flex-col w-full h-full lg:-ml-10">
        <div className="w-[178px] h-[194px] lg:w-[338px] lg:h-[368px]">
          <img
            className="object-cover w-full h-full"
            src={product[1].imgSrc}
            alt={product[1].title}
          />
        </div>
        <div className="w-[178px] h-[194px] lg:w-[338px] lg:h-[368px]">
          <img
            className="object-cover w-full h-full"
            src={product[2].imgSrc}
            alt={product[2].title}
          />
        </div>
      </div>

      <div className="col-span-1 row-span-2 gap-2 flex flex-col w-full h-full lg:-ml-4">
        <div className="w-[178px] h-[194px] lg:w-[338px] lg:h-[368px]">
          <img
            className="object-cover w-full h-full"
            src={product[3].imgSrc}
            alt={product[3].title}
          />
        </div>
        <div className="w-[178px] h-[194px] lg:w-[338px] lg:h-[368px]">
          <img
            className="object-cover w-full h-full"
            src={product[4].imgSrc}
            alt={product[4].title}
          />
        </div>
      </div>
    </div>
  );
}
