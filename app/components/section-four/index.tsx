import React from "react";
import Title from "../title";
import headerData from "~/data/index.json";
import Card from "../card";

type Props = {};

export default function index () {
  const { title, description, products } = headerData.sectionFour;

  return (
    <div className={`w-[1290px] items-center`}>
      <Title title={title} description={description} />
      <div className="flex">
        {products.map((category, i) => (
          <Card key={i} category={category} />
        ))}
      </div>
    </div>
  );
}
