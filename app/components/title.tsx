import React, { FC, Fragment } from "react";
import { ITitle } from "~/lib/types";
import { Button } from "./ui/button";
import compare from "../data/index.json";
import useWindowSize from "~/hooks/useWindowSize";
import ContentWrapper from "./content-wrapper";

const Title: FC<ITitle> = ({ title, description, btnTitle, header }) => {
  const { title: t, description: d } = compare.landing;
  const { title: heroTitle } = compare.hero;
  const windowSize = useWindowSize();
  const { isMobile } = windowSize;

  return (
    <ContentWrapper>
      {title === t ? (
        <header className={`flex flex-col gap-[20px] lg:gap-y-[30px]`}>
          <h1
            className={`text-[48px] lg:text-[105px] font-np-cond-black leading-[90%] uppercase`}
          >
            {title}
          </h1>
          <p
            className={`text-[14px] w-full lg:text-[12px] lg:w-[238px] font-np-regular`}
          >
            {description}
          </p>
          <Button className="w-full lg:w-[258.8px] bg-black text-white capitalize lg:uppercase">
            {btnTitle}
          </Button>
        </header>
      ) : title === heroTitle ? (
        <header className={`flex flex-col gap-y-2 lg:gap-y-[30px] h-full bold`}>
          {header  ? (<p className="capitalize font-np-bold text-[16-px]">{header}</p>) : ('')}
          <h1
            className={`text-[48px] lg:text-[64px] font-np-cond-black leading-[90%] uppercase lg:w-[260px]`}
          >
            {title}
          </h1>
          <p className={`w-full lg:w-[333px] text-[14px]font-np-regular`}>
            {description}
          </p>
          <Button
            variant={isMobile ? "" : "outline"}
            className="text-[14px] w-full lg:w-[258.8px] bg-black text-white lg:bg-transparent lg:text-white capitalize"
          >
            {btnTitle}
          </Button>
        </header>
      ) : (
        <header className={`flex flex-col  gap-y-1 lg:gap-y-2 my-4 h-full`}>
          <h1 className={`font-np-bold text-[22px] lg:text-[24px]`}>{title}</h1>
          <p className={`'text-[14px] lg:text-[14px]'} font-np-regular`}>
            {description}
          </p>
        </header>
      )}
    </ContentWrapper>
  );
}

export default Title