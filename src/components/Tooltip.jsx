import React from 'react';
import penIcon from '../assets/enregistrer.svg';
import shareIcon from '../assets/partager.svg';
import deleteIcon from '../assets/signaler.svg';
import Modal from './Modal';

// Composant Tooltip
const Tooltip = ({ closeTooltip, updateTitle, cardId, currentTitle, openModal }) => {
  return (
    <>
      <section
        className="absolute top-[380px] left-[225px] ml-2 z-[10] border w-[134.39px] h-[90px] bg-white rounded-[9.83px] flex flex-col justify-between py-1 px-1"
      >
        <div
          className="font-inter text-[9.83px] flex flex-row items-center gap-2 w-full h-[23.34px] hover:bg-gray-100 cursor-pointer rounded-[4.94px] p-[4.94px] transition-colors duration-200"
          onClick={openModal} // Ouvre le modal en passant les bons paramètres
        >
          <img src={penIcon} alt="squarepenicon" className="w-[13.33px] h-[12.71px]" />
          Enregistrer
        </div>
        <div className="font-inter text-[9.83px] flex flex-row items-center gap-2 w-full h-[23.34px] hover:bg-gray-100 cursor-pointer rounded-[4.94px] p-[4.94px] transition-colors duration-200">
          <img src={shareIcon} alt="shareicon" className="w-3 h-3" />
          Partager
        </div>
        <div className="font-inter text-[9.83px] text-red-600 flex flex-row items-center gap-2 w-full h-[23.34px] hover:bg-gray-100 cursor-pointer rounded-[4.94px] p-[4.94px] transition-colors duration-200">
          <img src={deleteIcon} alt="deleteicon" className="w-3 h-3" />
          Signaler
        </div>
      </section>
    </>
  );
};

export default Tooltip;

