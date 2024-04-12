import { useLayoutEffect } from "react";

export function useBackgroundImage(image) {
  useLayoutEffect(() => {
    document.body.style.backgroundImage = `url(${image})`;
  }, [image]);
}