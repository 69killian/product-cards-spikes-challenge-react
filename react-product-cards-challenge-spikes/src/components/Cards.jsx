import React, { useEffect, useState } from 'react';

const Cards = ({ cardImage, cardImageAlt, title, description, buttonText, premium, points, sword }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, Math.random() * 500); // Décalage aléatoire entre 0 et 500ms pour chaque carte
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bg-white w-[337px] h-[389px] p-[14.74px] rounded-[19.65px] border border-solid border-[#E4E4EB] flex flex-col justify-between 
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} 
      transition-all duration-500 ease-in-out`}>
        
      <div className="relative overflow-hidden rounded-[9.83px]">
        <img 
          src={cardImage} 
          alt={cardImageAlt} 
          className="transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-110"
        />
      </div>

      <div className="flex flex-cols-2 justify-between items-center">
        <p className="font-inter font-medium text-[17.2px] my-[11.98px]">{title}</p>
        {premium && (
          <p className="text-[9.83px] font-inter font-medium bg-[#CFD2DD66] p-[4.91px] rounded-[4.91px]">Premium</p>
        )}
      </div>

      <p className="text-[12.28px] font-normal text-[#090C1580]">{description}</p>
        
      <div className="flex flex-cols-2 justify-between items-center mt-auto">
        <button className="font-inter font-medium text-[14.78px] flex items-center justify-center gap-2 border border-solid rounded-[9.83px] w-[156px] h-[35px] relative bg-white transition-all duration-300 ease-in-out hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
          <img src={sword} alt="sword" className="w-[16px] h-[16px]" />
          {buttonText}
        </button>

        <button className="flex items-center justify-center border border-solid rounded-[9.83px] w-[36px] h-[36px] relative bg-white transition-all duration-300 ease-in-out hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
          <img src={points} alt="points" />
        </button>
      </div>
    </div>
  );
};

export default Cards;
