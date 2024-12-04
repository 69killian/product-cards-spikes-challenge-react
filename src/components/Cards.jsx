import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tooltip from './Tooltip';

const Cards = ({ cardImage, cardImageAlt, title, description, buttonText, premium, points, sword, free }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, Math.random() * 700); 
    return () => clearTimeout(timer);
  }, []);

  const handleTooltipToggle = () => {
    setIsTooltipVisible(prevState => !prevState);  // Alterne la visibilité du tooltip
  };

  const handleClickOutside = (event) => {
    if (event.target.closest('.tooltip-container') === null) {
      setIsTooltipVisible(false); // Ferme le tooltip quand un clic se produit à l'extérieur
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <div className="relative">
        <div 
          className={`bg-white w-[337px] h-[389px] p-[14.74px] rounded-[19.65px] border border-solid border-[#E4E4EB] flex flex-col justify-between 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} 
          transition-all duration-200 ease-in-out
          ${isHovered ? 'shadow-[2px_2px_0px_rgba(0,0,0,0.2)]' : ''}`}
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={cardImage} 
            alt={cardImageAlt} 
          />

          <div className="flex flex-cols-2 justify-between items-center">
            <p className="font-inter font-medium text-[17.2px] my-[11.98px]">{title}</p>
            {premium && (
              <p className="text-[9.83px] font-inter font-medium bg-[#CFD2DD66] p-[4.91px] rounded-[4.91px]">Premium</p>
            )}
            {free && !premium && (
              <p className="text-[9.83px] font-inter font-medium bg-[#D3F9D8] p-[4.91px] rounded-[4.91px]">$ Free</p>
            )}
          </div>

          <p className="text-[12.28px] font-normal text-[#090C1580]">{description}</p>
          
          <div className="flex flex-cols-2 justify-between items-center mt-auto relative">
            <button className="font-inter font-medium text-[14.78px] flex items-center justify-center gap-2 border border-solid rounded-[9.83px] w-[156px] h-[35px] relative bg-white transition-all duration-200 ease-in-out hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
              <img src={sword} alt="sword" className="w-[16px] h-[16px]" />
              {buttonText}
            </button>

            <button 
              className="flex items-center justify-center border border-solid rounded-[9.83px] w-[36px] h-[36px] relative bg-white transition-all duration-200 ease-in-out hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
              onClick={handleTooltipToggle}
            >
              <img src={points} alt="points" />
            </button>
          </div>
        </div>

        {isTooltipVisible && (
          <motion.div 
            className="absolute top-[0px] left-[0px] z-50 tooltip-container"  // Ajout d'une classe pour le ciblage du clic extérieur
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Tooltip closeTooltip={() => setIsTooltipVisible(false)} />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Cards;
