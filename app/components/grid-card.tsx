import { Link } from "@remix-run/react";
import VideoPlayer from "./video-player";
import { IData } from "~/lib/types";
import { FC } from "react";


const GridCard : FC<IData["section"]["product"]> = ({ product }) => {

  return (
    <div className="grid md:grid-cols-4 w-full gap-2 justify-center items-center">
      <div className="relative col-span-2 w-full row-span-2">
        <VideoPlayer vidSrc={product[0].vidSrc} mobileVidSrc={product[0].mobileVidSrc} />
        <div className="absolute bottom-0 right-0 w-16 h-16">
          <img
            className="object-cover w-full h-full"
            src={product[0].imgSrc}
            alt={product[0].title}
          />
        </div>
      </div>

      <div className="col-span-1 row-span-2 flex flex-col gap-2 w-full h-full">
        <div className="h-full w-full">
          <img
            className="object-cover w-full h-full"
            src={product[1].imgSrc}
            alt={product[1].title}
          />
        </div>
        <div className="h-full w-full">
          <img
            className="object-cover w-full h-full"
            src={product[2].imgSrc}
            alt={product[2].title}
          />
        </div>
      </div>

      <div className="col-span-1 row-span-2 flex flex-col gap-2 w-full h-full">
        <div className="w-full h-full">
          <img
            className="object-cover w-full h-full"
            src={product[3].imgSrc}
            alt={product[3].title}
          />
        </div>
        <div className="w-full h-full">
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

export default GridCard