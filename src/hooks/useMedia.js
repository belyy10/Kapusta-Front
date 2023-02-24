import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1200px)',
  });
  const isTabletAndDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });

  return {
    isTablet,
    isMobile,
    isDesktop,
    isTabletAndDesktop,
  };
};
