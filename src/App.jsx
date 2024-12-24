import React, { useState, useEffect } from 'react';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Filters from './components/Filters.jsx';
import Modal from './components/Modal.jsx';
import { DotPattern } from './components/dot-pattern';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All Challenges');
  const [cardData, setCardData] = useState([]);
  const [filteredCardData, setFilteredCardData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCardId, setModalCardId] = useState(null);
  const [modalCurrentTitle, setModalCurrentTitle] = useState('');

  // Charger les données depuis localStorage ou fichier JSON
  useEffect(() => {
    const storedCardData = localStorage.getItem('cardData');
    if (storedCardData) {
      setCardData(JSON.parse(storedCardData)); // Charger depuis localStorage
    } else {
      fetch("cardData.json")
        .then(response => response.json())
        .then(data => {
          const cardData = data.cardData;
          setCardData(cardData); // Enregistrer toutes les données
        })
        .catch(error => console.log(error));
    }
  }, []);

  // Appliquer les filtres et la recherche
  useEffect(() => {
    const filtered = cardData.filter(card => {
      if (!card.title) return false; // Assurez-vous qu'il y a un titre pour la carte
      const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()); // Comparaison avec searchQuery
      const matchesFilter =
        filter === 'All Challenges' ||
        (filter === 'Premium' && card.premium) ||
        (filter === 'Free' && !card.premium);
      return matchesSearch && matchesFilter;
    });
    setFilteredCardData(filtered); // Mettre à jour les cartes filtrées
  }, [searchQuery, filter, cardData]); // Trigger quand `searchQuery`, `filter` ou `cardData` changent
  
  // Fonction pour mettre à jour le titre et sauvegarder dans localStorage
  const updateTitle = (id, newTitle) => {
    const updatedCardData = cardData.map((card) =>
      card.id === id ? { ...card, title: newTitle } : card
    );
    setCardData(updatedCardData); // Met à jour l'état local
    setFilteredCardData(updatedCardData); // Met à jour les cartes filtrées aussi
    localStorage.setItem('cardData', JSON.stringify(updatedCardData)); // Sauvegarde dans localStorage
  };

  // Ouvrir le modal pour une carte spécifique
  const openModal = (cardId, currentTitle) => {
    setModalCardId(cardId);
    setModalCurrentTitle(currentTitle);
    setModalOpen(true);
  };

  // Fermer le modal
  const closeModal = () => {
    setModalOpen(false);
    setModalCardId(null);
    setModalCurrentTitle('');
  };

  return (
    <>
      <DotPattern
        width={20}
        height={20}
        cx={8}
        cy={8}
        cr={4}
        className="absolute top-0 left-0 w-full h-full z-0" 
      />

      <div className="App flex justify-center items-center">
        <div className="relative overflow-hidden pb-[150px]">
          <Header />
          <Filters 
            setSearchQuery={setSearchQuery}
            setFilter={setFilter}
          />
          {filteredCardData.length === 0 ? (
            <div className="text-center mt-20 mb-20 text-[40px]">
              <p>Sorry :/ <br /> We don't have this challenge</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[14.74px] mt-10 px-4">
              {filteredCardData.map((card) => (
                <Cards 
                  key={card.id}
                  cardId={card.id}
                  cardImage={card.cardImage}
                  cardImageAlt={card.cardImageAlt}
                  title={card.title}
                  description={card.description}
                  buttonText={card.buttonText}
                  premium={card.premium}
                  free={card.free}
                  updateTitle={updateTitle}  // Fonction pour mettre à jour le titre
                  openModal={openModal}  // Ouvre le modal
                />
              ))}
            </div>
          )}
          <Footer />
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          closeModal={closeModal}
          updateTitle={updateTitle}
          currentTitle={modalCurrentTitle}
          id={modalCardId}
        />
      )}
    </>
  );
}