import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = () => {
    setIsAnimating(true); // Démarre l'animation
    setIsOpen(true); // Rend le modal visible
  };

  const closeModal = () => {
    setIsAnimating(false); // Joue l'animation de fermeture
    setTimeout(() => setIsOpen(false), 300); // Attend que l'animation se termine
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche la réactualisation de la page
    console.log('Form submitted');
    closeModal(); // Optionnel : Ferme le modal après la soumission
  };

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={openModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
            isAnimating ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative bg-white rounded-lg shadow w-full max-w-md p-4 transform transition-transform duration-300 ${
              isAnimating ? 'scale-100' : 'scale-95'
            }`}
            onClick={(e) => e.stopPropagation()} // Empêche la propagation pour ne pas fermer le modal
          >
            {/* Modal Header */}
            <h3 className="text-2xl font-semibold text-gray-900 text-center">
              Edit Card
            </h3>

            {/* Modal Body */}
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
                  onClick={closeModal}
                  className="w-1/2 ml-2 text-black border border-gray-600 bg-white hover:bg-gray-100 transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
