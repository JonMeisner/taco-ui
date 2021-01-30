/** @format */

import { useEffect } from "react";

export const useKeyListeners = (closeApplication) => {
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
