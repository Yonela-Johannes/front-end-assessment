import React from "react";
import Title from "../title";
import headerData from "~/data/index.json";
import Card from "../card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useWindowSize from "~/hooks/useWindowSize";
import { IData, ITitle } from "~/lib/types";
import ContentWrapper from "../content-wrapper";

export default function index() {
  const { title, description, products }: IData["section"] =
    headerData.sectionFour;
  const windowSize = useWindowSize();
  const { isMobile } = windowSize;

  return (
    <ContentWrapper>
      <div className={`max-w-[1292px] flex-col w-full items-center`}>
        <Title title={title} description={description} btnTitle={""} />
        <div className="flex gap-2">
          {isMobile ? (
            <Carousel
              emulateTouch={true}
              showArrows={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              centerMode={false}
            >
              {products.map((product, i) => (
                <Card key={i} elem={product} />
              ))}
            </Carousel>
          ) : (
            products.map((product, i) => <Card key={i} elem={product} />)
          )}
        </div>
      </div>
    </ContentWrapper>
  );
}
