import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1200px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });

  return {
    isTablet,
    isMobile,
    isDesktop,
  };
};
