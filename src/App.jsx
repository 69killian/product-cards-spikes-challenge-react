import React, { useState } from 'react';
import Cards from './components/Cards.jsx';
import Footer from './components/Footer.jsx';
import cardImage from './assets/Frame 2.svg';
import points from './assets/points.svg';
import sword from './assets/swordicon.png';
import Header from './components/Header.jsx';
import Filters from './components/Filters.jsx';
import Modal from './components/Modal.jsx';
import { DotPattern } from './components/dot-pattern';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All Challenges');

  // Liste des cartes
  const cardData = [
    {
      cardImage: cardImage,
      cardImageAlt: "Raycast Wallpaper #1",
      title: "Raycast Wallpaper #1",
      description: "Recreate this wallpaper using AI.",
      buttonText: "Start Challenge",
      premium: true,
      free: false,
    },
    {
      cardImage: cardImage,
      cardImageAlt: "Raycast Wallpaper #2",
      title: "Raycast Wallpaper #2",
      description: "Recreate this wallpaper using AI.",
      buttonText: "Start Challenge",
      premium: false,
      free: true,
    },
    {
      cardImage: cardImage,
      cardImageAlt: "Raycast Wallpaper #3",
      title: "Raycast Wallpaper #3",
      description: "Recreate this wallpaper using AI.",
      buttonText: "Start Challenge",
      premium: true,
      free: false,
    },
    {
      cardImage: cardImage,
      cardImageAlt: "Raycast Wallpaper #4",
      title: "Raycast Wallpaper #4",
      description: "Recreate this wallpaper using AI.",
      buttonText: "Start Challenge",
      premium: true,
      free: false,
    },
    {
      cardImage: cardImage,
      cardImageAlt: "Raycast Wallpaper #5",
      title: "Raycast Wallpaper #5",
      description: "Recreate this wallpaper using AI.",
      buttonText: "Start Challenge",
      premium: false,
      free: true,
    },
    {
      cardImage: cardImage,
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
    <>
    <DotPattern
        width={20}
        height={20}
        cx={8}
        cy={8}
        cr={4}
        className="absolute top-0 left-0 w-full h-screen z-0" 
      />
      <div 
    className="absolute text-center bg-white w-[500px] h-[500px] rounded-full"
    style={{
        zIndex: 0,
        filter: "blur(50px)",
    }}
></div>
      
    <div className="App items-center justify-center relative mt-[1350px] sm:mt-[150px] md:mt-[150px] lg:mt-[0px] xl:mt-[0px]">
      
      
      <div className="relative z-10 w-full ">
        <Header />
        <Filters 
          setSearchQuery={setSearchQuery}
          setFilter={setFilter}
        />
        {filteredCards.length === 0 ? (
          <div className="text-center mt-20 mb-20 text-[40px]">
            <p>Sorry :/ <br /> We don't have this challenge</p>
          </div>
        ) : (
          <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[14.74px] mt-10 px-4">
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
            <Modal />
                      
          </div>
        )}
        <Footer />  
      </div>
    </div>
    </>
  );
}
