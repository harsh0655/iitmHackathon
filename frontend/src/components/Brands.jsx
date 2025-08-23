// src/components/FeaturedIn.jsx
import React from "react";
import viewLogo from "../assets/the-view.png";
import gmaLogo from "../assets/good-morning-america.png";
import nytLogo from "../assets/new-york-times.png";
import rachaelLogo from "../assets/rachael.png";
import dailyShowLogo from "../assets/daily-show.png";

export default function Brands() {
    return (
      <section className="bg-[#F1F1DC] py-6 border-t border-b border-[#222] w-full h-40">
        <div className="max-w-6xl mx-auto px-6 flex items-center h-full w-full">
          {/* Text */}
          <span className="text-xs tracking-[0.15em] font-bold text-[#1E1E1C]">
            FEATURED IN:
          </span>
  
          {/* Logos */}
          <div className="flex items-center space-x-14 h-full w-8/12">
            <img src={viewLogo} alt="The View" className="h-full object-contain" />
            <img src={gmaLogo} alt="Good Morning America" className="h-full object-contain" />
            <img src={nytLogo} alt="The New York Times" className="h-full object-contain" />
            <img src={rachaelLogo} alt="Rachael" className="h-full object-contain" />
            <img src={dailyShowLogo} alt="The Daily Show" className="h-full object-contain" />
          </div>
        </div>
      </section>
    );
  };  
