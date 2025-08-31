// src/components/atoms/CardTitle.tsx
import React from 'react';

type CardTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return <h3 className={`absolute top-2 font-semibold left-2 text-xs ${className}`}>{children}</h3>;
};

export default CardTitle;
