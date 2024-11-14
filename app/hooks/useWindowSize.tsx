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
