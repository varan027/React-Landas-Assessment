// src/components/organisms/CardSection.tsx
import React, { useState, useRef, useEffect } from 'react';
import Card from '../molecules/Card';

type CardData = {
  image: string;
  title: string;
  subtitle: string;
};

type CardSectionProps = {
  cards: CardData[];
};

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerIndex, setCenterIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const children = Array.from(container.children[0].children) as HTMLElement[]; 
        // ^ since your scrollable div has one child (the flex wrapper)

        const containerCenter = container.offsetWidth / 2 + container.scrollLeft;

        let closestIndex = 0;
        let closestDistance = Infinity;

        children.forEach((child, index) => {
          const childCenter = child.offsetLeft + child.offsetWidth / 2;
          const distance = Math.abs(containerCenter - childCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        setCenterIndex(closestIndex);
      }
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on mount

    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full py-24 lg:px-[12%] flex flex-col">
      <h1 className="font-semibold sm:mb-6 ml-12 sm:px-0 lg:ml-0 text-sm sm:text-lg">
        스타일과 실용성을 모두 담은 시즌 셀렉션
      </h1>

      <div
        ref={containerRef}
        className="overflow-x-auto lg:overflow-x-visible scrollbar-hide snap-x snap-mandatory"
      >
        <div className="flex space-x-3 sm:space-x-4 px-14 sm:px-24 md:px-[20%] lg:px-0 w-max lg:w-full items-center justify-center lg:items-end">
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              highlighted={index === centerIndex}
              size={index === 3 ? 'large' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
