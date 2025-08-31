import HeroText from "../atoms/HeroText";

const HeroContent = () => {
  return (
    <>
      {/* Desktop: Right aligned */}
      <div className="hidden md:block absolute right-28 bottom-60">
        <HeroText />
      </div>

      {/* Mobile: Bottom left aligned */}
      <div className="block md:hidden absolute bottom-8 left-4 right-4">
        <HeroText />
      </div>
    </>
  );
};

export default HeroContent;
