/** @format */

import { useEffect } from "react";

export const useKeyListeners = () => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => onKeyPress(e));
    return (e) => {
      if (e.keyCode === 27) {
        document.removeEventListener("keydown", (e) => onKeyPress(e));
      }
    };
  }, []);

  const onKeyPress = (e) => {
    if (e.keyCode === 27) {
      closeApplication();
    }
  };
};
