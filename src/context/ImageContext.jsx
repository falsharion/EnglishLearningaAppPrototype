
import React, { createContext, useState, useEffect } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const preloadImages = () => {
      const imageSources = {
        read: "read.png",
        writing: "writing.png",
        speak: "speak.png",
        listening: "listening.png",
        lesson1: "speaking.png",
        lesson2: "vocab.png",
        lesson3: "vocab.png",
        lesson4: "speaking.png",
        lesson5: "vocab.png",
        lesson6: "speaking.png",
        
      };

      const loadedImages = {};
      Object.keys(imageSources).forEach((key) => {
        const img = new Image();
        img.src = imageSources[key];
        loadedImages[key] = img.src;
      });

      setImages(loadedImages);
    };

    preloadImages();
  }, []);

  return (
    <ImageContext.Provider value={images}>
      {children}
    </ImageContext.Provider>
  );
};
