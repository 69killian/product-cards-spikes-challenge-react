import React from 'react';
import penIcon from '../assets/penicon.png';
import shareIcon from '../assets/shareicon.png';
import deleteIcon from '../assets/deleteicon.png';
import Modal from './Modal';

const Tooltip = ({ closeTooltip, updateTitle }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <section
        className="absolute top-[376px] left-[278px] ml-2 z-10 border w-[134.39px] h-[90px] bg-white rounded-[9.83px] flex flex-col justify-between py-1 px-1"
      >
        <div
          className="font-inter text-[9.83px] flex flex-row items-center gap-2 w-full h-[23.34px] hover:bg-gray-100 cursor-pointer rounded-[4.94px] p-[4.94px] transition-colors duration-200"
          onClick={openModal}
        >
          <img src={penIcon} alt="squarepenicon" className="w-3 h-3" />
          Edit Challenge
        </div>
        <div className="font-inter text-[9.83px] flex flex-row items-center gap-2 w-full h-[23.34px] hover:bg-gray-100 cursor-pointer rounded-[4.94px] p-[4.94px] transition-colors duration-200">
          <img src={shareIcon} alt="shareicon" className="w-3 h-3" />
          Share Challenge
        </div>
        <div className="font-inter text-[9.83px] text-red-600 flex flex-row items-center gap-2 w-full h-[23.34px] hover:bg-gray-100 cursor-pointer rounded-[4.94px] p-[4.94px] transition-colors duration-200">
          <img src={deleteIcon} alt="deleteicon" className="w-3 h-3" />
          Delete Challenge
        </div>
      </section>

      <Modal isOpen={isModalOpen} closeModal={closeModal} updateTitle={updateTitle} />
    </>
  );
};

export default Tooltip;
