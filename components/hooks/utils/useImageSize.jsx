import { useEffect, useState } from 'react';
import useWindowDimensions from './useWindowDimensions';

function useImageSize(
  defaultValue = {},
  options = {
    width: 2000,
    height: 1000,
  }
) {
  const [currentWidth, setWidth] = useState(null);

  const [size, setSize] = useState(defaultValue);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!currentWidth && width < 768) {
      setWidth(width);
      setSize({ ...size, ...options });
    } else if (currentWidth && width > 767) {
      setSize(defaultValue);
      setWidth(null);
    }
  }, [width]);

  return size;
}

export default useImageSize;
