import React from "react";
import HeroContent from "../molecules/HeroContent";
import heroImage from "../../../../../public/assets/Hero-Image.jpg";

const HeroSection:React.FC = () => {
  return (
    <section className="relative h-[80vh] md:h-[100vh] bg-black w-full">
      <img
        src={heroImage}
        alt="Hero Background"
        className="w-full h-full object-cover md:object-top opacity-90"
      />
    
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent to-10%"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent to-50%"></div>

      <HeroContent />
    </section>
  );
};

export default HeroSection;
