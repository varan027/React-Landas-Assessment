// src/components/organisms/Footer.tsx
import React from "react";
import Logo from "../../../../shared/components/Logo";
import { FaFacebook, FaInstagram, FaYoutube   } from "react-icons/fa";


const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-900 text-neutral-400 px-6 lg:px-44 py-16 text-xs">
      {/* Desktop Grid */}
      <div className="hidden lg:flex justify-between">
        {/* Left */}
        <div className="text-sm flex flex-col gap-3">
          <Logo className="lg:text-4xl mb-4"/>
          
          <p>대표이사 : 장창진</p>
          <p>사업자등록번호 : 201-86-15245</p>
          <p>서울특별시 중구 다산로 139 (랜드스빌딩) 6층</p>
          <p>통신판매업신고 : 중구 제0575호</p>
          <p>개인정보보호책임자 : 최주연</p>
          <p className="text-xs text-neutral-500" >
            Copyright © WWW.ldsB2Bmall.com All right reserved
          </p>
        </div>

        {/* Middle */}
        <div className="flex gap-20 mr-20">

          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold">대표 번호 및 AS 문의</h3>
            <p className="text-lg font-semibold text-white">1661-6244</p>
            <p>평일 : 09:00 ~ 18:00</p>
            <p>기관 : 기업은행</p>
            <p>계좌번호 : 213-111127-04-035</p>
            <p>예금주 : (주)랜드스</p>
          </div>

          {/* Right */}
          <div className="flex flex-col space-y-6">
            <div className="flex space-x-6 text-xs">
              <a href="#">개인정보처리방침</a>
              <a href="#">이용약관</a>
            </div>
            <div className="flex space-x-4 text-neutral-400">
              <a href="#"><FaInstagram className="w-6 h-6" /></a>
              <a href="#"><FaFacebook className="w-6 h-6" /></a>
              <a href="#"><FaYoutube className="w-6 h-6" /></a>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile stacked */}
      <div className="lg:hidden flex flex-col space-y-8 text-xs text-neutral-400">
        <Logo className="text-3xl" />

        <div className="space-y-2">
          <h3 className="text-lg font-semibold ">대표 번호 및 AS 문의</h3>
          <p className="text-xl font-semibold text-white mb-6">1661-6244</p>
          <p>평일 : 09:00 ~ 18:00</p>
          <p>기관 : 기업은행</p>
          <p>계좌번호 : 213-111127-04-035</p>
          <p>예금주 : (주)랜드스</p>
        </div>

        <div className="space-y-2">
          <p>대표이사 : 장창진</p>
          <p>사업자등록번호 : 201-86-15245</p>
          <p>서울특별시 중구 다산로 139 (랜드스빌딩) 6층</p>
          <p>통신판매업신고 : 중구 제0575호</p>
          <p>개인정보보호책임자 : 최주연</p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-center space-x-4">
            <a href="#"><FaInstagram className="w-6 h-6" /></a>
            <a href="#"><FaFacebook className="w-6 h-6" /></a>
            <a href="#"><FaYoutube className="w-6 h-6" /></a>
          </div>

          <div className="flex justify-center space-x-6 text-xs">
            <a href="#">개인정보처리방침</a>
            <a href="#">이용약관</a>
          </div>

          <p className="text-center text-xs">
            Copyright © WWW.ldsB2Bmall.com All right reserved
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
