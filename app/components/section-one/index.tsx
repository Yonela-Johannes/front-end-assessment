import React from "react";
import Title from "../title";
import headerData from "~/data/index.json";
import { desktopUAThemeVideo, mobileUAThemeVideo } from "~/assets";
import { Button } from "../ui/button";

type Props = {};

export default function index() {
  const { title, description } = headerData.landing;
  return (
    <div className="flex text-start relative bg-white items-center w-full">
      <div className="absolute w-[333px] right-64 top-0">
        <Title title={title} description={description} />
        <Button className="w-full bg-black ">Shop UA New Arrivals</Button>
      </div>
      <div className="h-[700px] bg-blue-600">
        <video id="video" height="100%" loop playsinline autoPlay muted>
          <source src={desktopUAThemeVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
