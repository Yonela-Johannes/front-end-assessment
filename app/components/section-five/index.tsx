import React from "react";
import headerData from "~/data/index.json";
import GridCard from "../grid-card";
import Title from "../title";

export default function Index() {
  const {title, description, products } = headerData.sectionFive;
  return (
      <div className="max-w-[1290px] items-center">
        <Title title={title} description={description} />
      <div className="h-full w-full">
        
        <GridCard product={products} />
      </div>
    </div>
  );
}