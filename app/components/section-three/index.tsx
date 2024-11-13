import React from "react";
import Title from "../title";
import headerData from "~/data/index.json";

type Props = {};

export default function index () {
  const { title, description } = headerData.sectionThree;
  return (
    <div className="items-center text-center w-full bg-slate-900">
      <Title title={title} description={description} />
    </div>
  );
}
