import { useCallback } from 'react';

export const useResetWorksSlider = () => {
  const resetWorksSlider = useCallback(() => {
    window.dispatchEvent(new Event('works-slider-reset'));
  }, []);

  return { resetWorksSlider };
};
