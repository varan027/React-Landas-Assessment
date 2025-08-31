// src/components/atoms/CardSubtitle.tsx
import React from 'react';

type CardSubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

const CardSubtitle: React.FC<CardSubtitleProps> = ({ children, className }) => {
  return <p className={`text-xs font-semibold absolute bottom-10 left-6 ${className}`}>{children}</p>;
};

export default CardSubtitle;
