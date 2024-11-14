import React from "react";
import Title from "../title";
import headerData from "~/data/index.json";
import { desktopUAThemeVideo, mobileUAThemeVideo } from "~/assets";
import { Button } from "../ui/button";

type Props = {};

export default function index() {
  const { title, description } = headerData.landing;
  return (
    <div className="flex text-start relative w-full">
      <div className="flex items-center self-center flex-col absolute w-[333px] left-[56%] ">
        <Title title={title} description={description} />
      </div>
      <div className="h-[700px] bg-blue-600">
        <video id="video" height="100%" loop playsInline autoPlay muted>
          <source src={desktopUAThemeVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
