import React from "react";
import Title from "../title";
import headerData from "~/data/index.json";
import Card from "../card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useWindowSize from "~/hooks/useWindowSize";

type Props = {};

export default function index() {
  const { title, description, products } = headerData.sectionFour;
  const windowSize = useWindowSize();
  const { isMobile } = windowSize;

  return (
    <div className={`max-w-[1292px] flex-col w-full items-center`}>
      <Title title={title} description={description} />
      <div className="flex">
        {isMobile ? (
          <Carousel
            emulateTouch={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            centerMode={false}
          >
            {products.map((category, i) => (
              <Card key={i} category={category} />
            ))}
          </Carousel>
        ) : (
          products.map((category, i) => <Card key={i} category={category} />)
        )}
      </div>
    </div>
  );
}
