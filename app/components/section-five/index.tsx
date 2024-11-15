import React from "react";
import headerData from "~/data/index.json";
import GridCard from "../grid-card";
import Title from "../title";
import { IData } from "~/lib/types";
import ContentWrapper from "../content-wrapper";

export default function Index() {
  const { title, description, products }: IData["section"] =
    headerData.sectionFive;
  return (
    <ContentWrapper>
      <div className="max-w-[1291px] w-full items-center">
        <Title title={title} description={description} />
        <div className="h-full w-full">
          <GridCard product={products} />
        </div>
      </div>
    </ContentWrapper>
  );
}
