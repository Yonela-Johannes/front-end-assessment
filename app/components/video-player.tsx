import { useLoaderData } from "@remix-run/react";
import useWindowSize from "~/hooks/useWindowSize";

type Props = {
  vidSrc?: string;
  mobileVidSrc?: string;
};

export default function VideoPlayer({ vidSrc, mobileVidSrc }: Props) {
  const windowSize = useWindowSize();
  const { isMobile } = windowSize;

  return (
    <>
      {isMobile ? (
        <video id="video" height="100%" loop playsInline autoPlay muted>
          <source src={mobileVidSrc} type="video/mp4" />
        </video>
      ) : (
        <>
          <video id="video" height="100%" loop playsInline autoPlay muted>
            <source src={vidSrc} type="video/mp4" />
          </video>
        </>
      )}
    </>
  );
}
