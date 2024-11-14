import React from "react";
import headerData from "~/data/index.json";
import GridCard from "../grid-card";
import Title from "../title";
import { IData } from "~/lib/types";

export default function Index() {
  const { title, description, products }: IData['section'] = headerData.sectionFive;
  return (
    <div className="max-w-[1291px] w-full items-center">
      <Title title={title} description={description} />
      <div className="h-full w-full">
        <GridCard product={products} />
      </div>
    </div>
  );
}
