import type { MetaFunction } from "@remix-run/node";
import Wrapper from "~/components/";
import Footer from "~/components/footer";
import Header from "~/components/header";

import SectionOne from "~/components/section-one";
import SectionTwo from "~/components/section-two";
import SectionThree from "~/components/section-three";
import SectionFour from "~/components/section-four";
import SectionFive from "~/components/section-five";

export const meta: MetaFunction = () => {
  return [
    { title: "Frontend Assessment" },
    {
      name: "description",
      content: "Welcome to the WBWR front end assessment!",
    },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden">
      <Header />
      <Wrapper>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </Wrapper>
      <Footer />
    </div>
  );
}
