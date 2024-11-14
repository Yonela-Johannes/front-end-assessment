import React, { FC, useEffect, useState } from "react";
import Title from "../title";
import headerData from "~/data/index.json";
import useWindowSize from "~/hooks/useWindowSize";
import { IData } from "~/lib/types";

const index : FC = () =>  {
  const { title, header, description, bgImg, mobileBgImg, btnTitle } : IData['hero'] = headerData.hero;
  const windowSize  = useWindowSize()
  const [imgSrc, setImgSrc] = useState("")
  const { isMobile } = windowSize;

  useEffect(() =>{
    setImgSrc(()=> isMobile ? mobileBgImg : bgImg)
  }, [windowSize])

  return (
    <div
      className={`flex flex-col-reverse items-center lg:flex-row gap-y-2 lg:gap-y-[30px] lg:relative lg:w-max-[1290px] lg:h-[500px] lg:items-center text-black lg:text-white`}
    >
      <div className="flex flex-col gap-y-2 lg:absolute w-full lg:left-[72%] ">
        <Title title={title} description={description} btnTitle={btnTitle} header={header} />
      </div>

      <img src={imgSrc} className="lg:w-full lg:h-full object-cover lg:object-cover" />
    </div>
  );
}

export default index