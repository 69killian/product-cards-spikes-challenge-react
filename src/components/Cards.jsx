import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tooltip from './Tooltip';
import points from '../assets/points.svg';
import sword from '../assets/swordicon.png';

const Cards = ({ cardImage, cardImageAlt, title, initialTitle, description, buttonText, premium, free }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [localTitle, setLocalTitle] = useState(title); // Initialise avec `title` par défaut

  useEffect(() => {
    // met à jour `localTitle` avec `initialTitle` si `localTitle` est vide
    if (localTitle === "") {
      setLocalTitle(initialTitle);
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, [initialTitle, localTitle]);

  const handleTooltipToggle = () => {
    setIsTooltipVisible(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest('.tooltip-container') === null) {
      setIsTooltipVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fonction pour mettre à jour le titre
  const updateTitle = (newTitle) => {
    if (newTitle.trim() !== '') {
      setLocalTitle(newTitle); 
    }
  };

  return (
    <>
      <div className="relative flex justify-center items-center">
        
        <div 
          className={`bg-white w-[337px] h-[389px] p-[14.74px] rounded-[19.65px] border border-solid border-[#E4E4EB] flex flex-col justify-between 
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} 
          transition-all duration-200 ease-in-out
         `}
        >
          <img 
            src={cardImage} 
            alt={cardImageAlt} 
          />

          <div className="flex flex-cols-2 justify-between items-center">
            <p className="font-inter font-medium text-[17.2px] my-[11.98px]">
              {localTitle || title}  {/* Affiche `localTitle` après modification, sinon affiche `title` */}
            </p>
            {premium && (
              <p className="text-[9.83px] font-inter font-medium bg-[#CFD2DD66] p-[4.91px] rounded-[4.91px]">Premium</p>
            )}
            {free && !premium && (
              <p className="text-[9.83px] font-inter font-medium bg-[#D3F9D8] p-[4.91px] rounded-[4.91px]">$ Free</p>
            )}
          </div>

          <p className="text-[12.28px] font-normal text-[#090C1580]">{description}</p>
          
          <div className="flex flex-cols-2 justify-between items-center mt-auto relative">
            <button className="font-inter font-medium text-[14.78px] flex items-center justify-center gap-2 border border-solid rounded-[9.83px] w-[156px] h-[35px] relative bg-white">
              <img src={sword} alt="sword" className="w-[16px] h-[16px]" />
              {buttonText}
            </button>

            <button 
              className="flex items-center justify-center border border-solid rounded-[9.83px] w-[36px] h-[36px] relative bg-white  ease-in-out hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] focus:outline focus:outline-2 focus:outline-offset-2"
              onClick={handleTooltipToggle}
            >
              <img src={points} alt="points" />
            </button>
          </div>
        </div>

        {isTooltipVisible && (
          <motion.div
          className="absolute top-[0px] left-[0px] z-50 tooltip-container"
          initial={{ opacity: 0, y: -10 }}  // Commence 10px plus bas
          animate={{ opacity: 1, y: 0 }}   // Monte à sa position d'origine
          exit={{ opacity: 0, y: 10 }}     // Lorsqu'il disparaît, il descend de 10px
          transition={{ duration: 0.3 }}
        >
            <Tooltip closeTooltip={() => setIsTooltipVisible(false)} updateTitle={updateTitle} />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Cards;
