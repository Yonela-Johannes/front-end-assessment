import React from "react";
import Title from "../title";
import headerData from "~/data/index.json";
import Card from "../card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useWindowSize from "~/hooks/useWindowSize";
import { ICategory, IData } from "~/lib/types";
import ContentWrapper from "../content-wrapper";

type Props = {};

export default function index() {
  const windowSize = useWindowSize();
  const { isMobile } = windowSize;

  const { title, description, categories }: IData["section"] =
    headerData.sectionOne;
  return (
    <div className="flex flex-col w-full max-w-[1292px]">
      <Title title={title} description={description} />
      {isMobile ? (
        <ContentWrapper>
          <div className="flex">
            <Carousel
              emulateTouch={true}
              showArrows={false}
              showStatus={false}
              showIndicators={false}
            >
              {categories.map((category, i: number) => (
                <Card key={i} elem={category as ICategory} />
              ))}
            </Carousel>
          </div>
        </ContentWrapper>
      ) : (
        <div className="flex gap-x-2">
          {categories.map((category, i: number) => (
            <Card key={i} elem={category as ICategory} />
          ))}
        </div>
      )}
    </div>
  );
}
