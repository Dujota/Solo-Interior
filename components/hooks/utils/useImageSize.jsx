import { useEffect, useState } from 'react';
import useWindowDimensions from './useWindowDimensions';

function useImageSize({ defaultValue = {} }) {
  const [currentWidth, setWidth] = useState(null);

  const [size, setSize] = useState(defaultValue);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!currentWidth && width < 768) {
      setWidth(width);
      setSize({ ...size, height: 1500 });
    } else if (currentWidth && width > 767) {
      setSize(defaultValue);
      setWidth(null);
    }
  }, [width]);

  return size;
}

export default useImageSize;
