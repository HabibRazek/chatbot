import React, { useState } from 'react';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { DonationForm } from './Donation_form';

const Dons = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="py-12 background-section">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
          {/* Content Section */}
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-4xl text-gray-800 font-bold mb-6">
              Donnez du bonheur
            </h2>
            <p className="mb-8">
              Votre générosité permet de financer des projets vitaux qui soutiennent l'inclusion des enfants trisomiques dans tous les aspects de la vie. Ensemble, faisons une différence!
            </p>
            <button onClick={openModal} className="mt-4 inline-flex items-center border-2 border-[#0F0A3C] text-[#0F0A3C] font-semibold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F0A3C]">
              Faire un don <FaHandHoldingHeart size={22} className="ml-2" />
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0">
            <img src="/don.png" alt="Enfants souriants" width={400} height={500} className="rounded-xl " />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 absolute inset-0" onClick={closeModal}></div>
          <div className="bg-white p-4 rounded-lg z-10">
            <DonationForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Dons;
