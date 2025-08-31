import React from "react";
import BannerChat from "../atoms/BannerChat";



const BannerSection: React.FC = () => {
  return (
    <section className="relative w-full text-white flex flex-col justify-center py-30 lg:px-36">
      <div className="w-full h-70 md:h-86 bg-black flex flex-col justify-center p-4 sm:p-10 ">
        <h2 className="md:text-3xl font-bold mb-2">
          B2B 전문 의류 쇼핑몰!
        </h2>
        <h3 className=" md:text-3xl font-bold mb-4">
          15년 이상의 노하우로 믿고 거래 하세요
        </h3>
        <p className="text-xs md:text-sm md:font-semibold text-gray-300">
          수많은 기업이 선택한 신뢰받는 쇼핑 소식, 지금 만나보세요
        </p>
      </div>
      <div className="absolute right-10 bottom-8 lg:bottom-30 lg:right-16">
        <BannerChat />
      </div>
    </section>
  );
};

export default BannerSection;
