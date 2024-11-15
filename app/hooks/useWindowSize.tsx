import {useEffect, useState} from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    isMobile: false,
  });

  const handleSize = () => {
    setWindowSize({
      isMobile: window.innerWidth < 1024,
    });
  };

  useEffect(() => {
    handleSize();
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowSize;
};

export default useWindowSize;


{/* <picture
style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}}
>
<source media="(min-width:640px)" srcSet={errorStatus == 404 ?  error404 : errorStatus === 500 ? {error500} : ""} />
<Image
  style={{ width: "300px" }}
  src={errorStatus == 404 ?  error404 : errorStatus === 500 ? {error500} : ""}
  alt={errorMessage}
/>
</picture> */}