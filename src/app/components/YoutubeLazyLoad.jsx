"use client";

import React, { useState } from "react";
import Image from "next/image";

const YouTubeVideo = ({image, imageWidth, imagHeigth, videoId, videoWidth, videoHeight}) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleLoadVideo = () => {
    setIsVideoVisible(true);
  };

  return (
    <div className="video-container content-end">
      {!isVideoVisible ? (
        <div className="" onClick={handleLoadVideo}>
          {/* Imagen o botón para cargar el video */}
          <Image
            src={`/images/${image}`} // Reemplaza con la URL de tu imagen
            alt="Video Thumbnail"
            className="cursor-pointer mx-auto"
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
            srcSet={`/images/${image} 768w, /images/${image} 1024w`}
            width={imageWidth}
            height={imagHeigth}
          />
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0`}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl mx-auto"
          width={videoWidth} height={videoHeight} 
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeVideo;
