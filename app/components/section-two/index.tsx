import React from "react";
import Title from "../title";
import headerData from "~/data/index.json";
import Card from "../card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import useWindowSize from "~/hooks/useWindowSize";

type Props = {};

export default function index() {
  const windowSize = useWindowSize();
  const { isMobile } = windowSize;

  const { title, description, categories } = headerData.sectionOne;
  return (
    <div className="flex flex-col w-full max-w-[1292px]">
      <Title title={title} description={description} />
      {isMobile ? (
        <div className="flex">
          <Carousel
            emulateTouch={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
          >
            {categories.map((category, i) => (
              <Card key={i} category={category} />
            ))}
          </Carousel>
        </div>
      ) : (
        <div className="flex">
          {categories.map((category, i) => (
            <Card key={i} category={category} />
          ))}
        </div>
      )}
    </div>
  );
}
