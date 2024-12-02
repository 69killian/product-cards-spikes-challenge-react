import React from 'react';

const Cards = ({ cardImage, cardImageAlt, title, description, buttonText, premium, points, sword }) => {
  return (
      <div className="bg-white w-[337px] h-[389px] p-[14.74px] rounded-[19.65px] border border-solid border-[#E4E4EB] flex flex-col justify-between">
        
        <img src={cardImage} alt={cardImageAlt} />

        <div className="flex flex-cols-2 justify-between items-center">
          <p className="font-inter font-medium text-[17.2px] my-[11.98px]">{title}</p>
          {premium && (
            <p className="text-[9.83px] font-inter font-medium bg-[#CFD2DD66] p-[4.91px] rounded-[4.91px]">Premium</p>
          )}
        </div>

        <p className="text-[12.28px] font-normal text-[#090C1580]">{description}</p>
        
        <div className="flex flex-cols-2 justify-between items-center mt-auto">
          <button className="font-inter font-medium text-[14.78px] flex items-center justify-center gap-2 border border-solid rounded-[9.83px] w-[156px] h-[35px] relative shadow-[inset_0px_-3px_0px_rgba(243,243,243,0.5),0px_2px_2px_rgba(211,211,211,0.5)]">
            <img src={sword} alt="sword" className="w-[16px] h-[16px]" />
            {buttonText}
          </button>

          <button className="flex items-center justify-center border border-solid rounded-[9.83px] w-[36px] h-[36px] relative shadow-[inset_0px_-3px_0px_rgba(243,243,243,0.5),0px_2px_2px_rgba(211,211,211,0.5)]">
            <img src={points} alt="points" />
          </button>
        </div>
      </div>
  );
};



export default Cards;
