import React, { useState, useEffect } from "react";

const Anime = (array = null, delay) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const typing = (array, delay) => {
    if (array != null) {
      const timeout = setTimeout(() => {
        if (currentIndex < array.length) {
          setCurrentText(currentText + array[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }
        return () => clearTimeout(timeout);
      }, delay);
      console.log(array);
    }
  };

  useEffect(() => {
    typing(array.array, array.delay);
  }, [array, delay]);

  return <span>{currentText}</span>;
};

export default Anime;
