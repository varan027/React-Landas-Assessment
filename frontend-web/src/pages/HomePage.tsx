import React from "react";
import Navbar from "../features/home/components/organisms/Navbar";
import HeroSection from "../features/home/components/organisms/HeroSection";
import CardSection from "../features/home/components/organisms/Cardsection";
import { cardsData } from "../data/cardData";
import ProductSection from "../features/home/components/organisms/ProductSection";
import sampleProducts from "../data/sampleProducts";
import BannerSection from "../features/home/components/organisms/BannerSection";
import Footer from "../features/home/components/organisms/Footer";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CardSection cards={cardsData} />
        <ProductSection
        heading="상품진열이 타이틀이 들어갑니다."
        subheading="부타이틀이 필요할 경우 텍스트가 들어갑니다."
        products={sampleProducts}
        />
        <ProductSection
        heading="상품진열이 타이틀이 들어갑니다."
        subheading="부타이틀이 필요할 경우 텍스트가 들어갑니다."
        products={sampleProducts}
      />
      <BannerSection />
       </main>
      <Footer />
    </div>
  );
};

export default HomePage;
