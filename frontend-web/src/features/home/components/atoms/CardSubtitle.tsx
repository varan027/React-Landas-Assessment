// src/components/atoms/CardSubtitle.tsx
import React from 'react';

type CardSubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

const CardSubtitle: React.FC<CardSubtitleProps> = ({ children, className }) => {
  return <p className={`text-xs font-semibold absolute bottom-4 left-4 ${className}`}>{children}</p>;
};

export default CardSubtitle;
