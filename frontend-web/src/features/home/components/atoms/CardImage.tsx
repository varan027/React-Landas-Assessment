// src/components/atoms/CardImage.tsx
import React from 'react';

type CardImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const CardImage: React.FC<CardImageProps> = ({ src, alt = '', className }) => {
  return <img src={src} alt={alt} className={`w-full h-full object-cover p-6 ${className}`} />;
};

export default CardImage;
