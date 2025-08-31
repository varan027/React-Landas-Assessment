import React from 'react'
import { IoChatbubbleSharp } from "react-icons/io5";

const BannerChat:React.FC = () => {
  return (
    <div className="relative bg-yellow-300 w-16 h-16 rounded-full">
      <IoChatbubbleSharp className="text-black mx-auto text-5xl absolute top-2 left-2"/>
      <p className="absolute font-bold top-4 left-5 text-yellow-300 text-xl">ch</p>
    </div>
  )
}

export default BannerChat