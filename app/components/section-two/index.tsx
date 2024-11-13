import React from "react";
import Title from "../title";
import headerData from "~/data/index.json";
import Card from "../card";

type Props = {};

export default function index() {
  const { title, description, categories } = headerData.sectionOne;
  return (
    <div className="flex flex-col w-full items-center h-[395px] justify-center">
      {/* <Title title={title} description={description} /> */}
      <div className="flex">
        {categories.map((category, i) => (
          <Card key={i} category={category} />
        ))}
      </div>
    </div>
  );
}
