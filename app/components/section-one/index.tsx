import React, { useEffect, useState } from "react";
import Title from "../title";
import headerData from "~/data/index.json";
import VideoPlayer from "../video-player";
import useWindowSize from "~/hooks/useWindowSize";

type Props = {};

export default function index() {
  const { title, description, btnTitle, vidSrc, mobileVidSrc } = headerData.landing;
  const windowSize  = useWindowSize()
  const [videoSrc, setVideoSrc] = useState("")
  const { isMobile } = windowSize;

  useEffect(() =>{
    setVideoSrc(()=> isMobile ? mobileVidSrc : vidSrc)
  }, [])

  useEffect(() =>{
    setVideoSrc(()=> isMobile ? mobileVidSrc : vidSrc)
  }, [windowSize])

  return (
    <section className="flex flex-col-reverse lg:flex-row text-start gap-4 lg:relative w-full">
      <div className="flex items-center self-center flex-col lg:absolute w-[355.91] lg:w-[333px] left-[56%] ">
        <Title title={title} description={description} btnTitle={btnTitle} />
      </div>

      <div className="min-h[393px] lg:h-[700px]">
        <VideoPlayer vidSrc={videoSrc} />
      </div>
    </section>
  );
}
