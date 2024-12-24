import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, closeModal, updateTitle, currentTitle, id }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [newTitle, setNewTitle] = useState(currentTitle);

  useEffect(() => {
    if (isOpen) {
      setNewTitle(currentTitle); // Charge le titre actuel à l'ouverture
      setIsAnimating(true);
    }
  }, [isOpen, currentTitle]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => closeModal(), 300);
  };

  const handleSubmit = () => {
    updateTitle(id, newTitle);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-white rounded-lg shadow w-full max-w-md p-4 transform transition-transform duration-300 ${
          isAnimating ? 'scale-100' : 'scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-semibold text-gray-900 text-center">Edit Card</h3>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="card-title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Edit card title
            </label>
            <input
              type="text"
              name="card-title"
              id="card-title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter card title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-1/2 mr-2 text-white bg-black hover:bg-gray-900 transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="w-1/2 ml-2 text-black border border-gray-600 bg-white hover:bg-gray-100 transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;