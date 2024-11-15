import React, { useEffect, useState } from "react";
import Title from "../title";
import headerData from "~/data/index.json";
import VideoPlayer from "../video-player";

export default function index() {
  const { title, description, btnTitle, vidSrc, mobileVidSrc } =
    headerData.landing;
  return (
    <section className="flex flex-col-reverse lg:flex-row text-start gap-4 lg:relative w-full">
      <div className="flex items-center self-center flex-col lg:absolute w-[355.91] lg:w-[333px] left-[56%] ">
        <Title title={title} description={description} btnTitle={btnTitle} />
      </div>
      <div className="">
        <VideoPlayer vidSrc={vidSrc} mobileVidSrc={mobileVidSrc} />
      </div>
    </section>
  );
}
