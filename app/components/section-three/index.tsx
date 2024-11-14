import React from "react";
import Title from "../title";
import headerData from "~/data/index.json";

type Props = {};

export default function index () {
  const { title, description, bgImg } = headerData.sectionThree;
  return (
    <div className={`bg-[url(${bgImg})] w-[1290px] h-[500px] items-center text-center`}>
      {/* <Title title={title} description={description} /> */}

    <img src={bgImg} className="h-full w-full object-cover" />
    </div>
  );
}
