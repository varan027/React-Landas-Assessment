// src/components/molecules/Card.tsx
import React from 'react';
import CardImage from '../atoms/CardImage';
import CardTitle from '../atoms/CardTitle';
import CardSubtitle from '../atoms/CardSubtitle';

type CardProps = {
  image: string;
  title: string;
  subtitle: string;
  highlighted?: boolean;
  size?: 'large';
};

const Card: React.FC<CardProps> = ({ image, title, subtitle, highlighted, size }) => {
  return (
    <div
      className={`relative w-64 h-64 lg:h-90 lg:w-56 sm:h-80 duration-300 rounded-br-[4rem] lg:rounded-b-none 
        ${ highlighted ? 'w-68 h-78 sm:w-80 sm:h-96 lg:w-56 lg:h-90 lg:scale-100' : ''}
          ${ size === 'large' ? 'lg:h-120 lg:w-108 lg:rounded-br-[4rem] mt-16 lg:mt-0' : 'mt-16'}
         bg-[#EFEFEF]`}
    >
      <div className={`absolute inset-0 rounded-br-[4rem] bg-gradient-to-t from-[#efefef] from-10% to-transparent to-40% `}></div>

      <CardImage src={image} />
     
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </div>
  );
};

export default Card;
