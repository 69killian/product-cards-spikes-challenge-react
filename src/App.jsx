import React, { useState } from 'react';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx';
import cardImage1 from './assets/cardimage1.png';
import cardImage2 from './assets/cardimage2.png';
import points from './assets/points.png';
import sword from './assets/swordicon.png';
import Header from './components/Header.jsx';
import Filters from './components/Filters.jsx';
import Modal from './components/Modal.jsx';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All Challenges');

  // Liste des cartes
  const cardData = [
    {
      cardImage: cardImage1,
      cardImageAlt: "Raycast Wallpaper #1",
      title: "Raycast Wallpaper #1",
      description: "Recreate this wallpaper using AI.",
      buttonText: "Start Challenge",
      premium: true,
      free: false,
    },
    {
      cardImage: cardImage2,
      cardImageAlt: "Raycast Wallpaper #2",
      title: "Raycast Wallpaper #2",
      description: "Recreate this wallpaper using AI.",
      buttonText: "Start Challenge",
      premium: false,
      free: true,
    },
    {
      cardImage: cardImage1,
      cardImageAlt: "Raycast Wallpaper #3",
      title: "Raycast Wallpaper #3",
      description: "Recreate this wallpaper using AI.",
      buttonText: "Start Challenge",
      premium: true,
      free: false,
    },
    {
      cardImage: cardImage1,
      cardImageAlt: "Raycast Wallpaper #4",
      title: "Raycast Wallpaper #4",
      description: "Recreate this wallpaper using AI.",
      buttonText: "Start Challenge",
      premium: true,
      free: false,
    },
    {
      cardImage: cardImage2,
      cardImageAlt: "Raycast Wallpaper #5",
      title: "Raycast Wallpaper #5",
      description: "Recreate this wallpaper using AI.",
      buttonText: "Start Challenge",
      premium: false,
      free: true,
    },
    {
      cardImage: cardImage1,
      cardImageAlt: "Raycast Wallpaper #6",
      title: "Raycast Wallpaper #6",
      description: "Recreate this wallpaper using AI.",
      buttonText: "Start Challenge",
      premium: false,
      free: true,
    },
  ];

  // Fonction pour filtrer les cartes
  const filteredCards = cardData.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === 'All Challenges' ||
      (filter === 'Premium' && card.premium) ||
      (filter === 'Free' && !card.premium);

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="App flex flex-col items-center min-h-screen">
      <Header/>
      <Modal></Modal>
      <Filters 
        setSearchQuery={setSearchQuery}
        setFilter={setFilter}
      />
      {filteredCards.length === 0 ? (
        <div className="text-center mt-20 mb-20 text-[40px]">
          <p>Sorry :/ <br /> We don't have this challenge</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14.74px] mt-10 mb-20 px-4">
          {filteredCards.map((card, index) => (
            <Cards 
              key={index}
              cardImage={card.cardImage}
              cardImageAlt={card.cardImageAlt}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              premium={card.premium}
              free={card.free}
              sword={sword}
              points={points}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}
