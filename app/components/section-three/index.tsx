import React, { useEffect, useState } from "react";
import Title from "../title";
import headerData from "~/data/index.json";
import useWindowSize from "~/hooks/useWindowSize";

type Props = {};

export default function index() {
  const { title, header, description, bgImg, mobileBgImg, btnTitle } = headerData.hero;
  const windowSize  = useWindowSize()
  const [imgSrc, setImgSrc] = useState("")
  const { isMobile } = windowSize;

  useEffect(() =>{
    setImgSrc(()=> isMobile ? mobileBgImg : bgImg)
  }, [windowSize])

  return (
    <div
      className={`flex flex-col-reverse lg:flex-row lg:gap-y-[30px] lg:relative lg:w-max-[1290px] lg:h-[500px] lg:items-center text-black lg:text-white`}
    >
      <div className="flex flex-col gap-y-2 lg:absolute w-full lg:left-[72%] ">
        <p className="capitalize font-np-bold text-[16-px]">{header}</p>
        <Title title={title} description={description} btnTitle={btnTitle} />
      </div>

      <img src={imgSrc} className="w-[393px] h-[467px] lg:w-full lg:h-full object-cover lg:object-cover" />
    </div>
  );
}
