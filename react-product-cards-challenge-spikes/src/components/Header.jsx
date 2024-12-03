import React, { useEffect, useState } from 'react';

const Header = () => {
  const text = 'Product Selection';
  const [letters, setLetters] = useState([]);

  // Séparer le texte en lettres tout en conservant les espaces
  useEffect(() => {
    setLetters(
      text.split('').map((char) => (char === ' ' ? '\u00A0' : char)) // Remplacer les espaces par des espaces insécables
    );
  }, [text]);

  return (
    <div className="flex items-center justify-center ">
      <header className="text-black font-inter text-4xl font-semibold flex ">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-fade-in"
            style={{
              animationDelay: `${Math.random() * 500}ms`, // Délai aléatoire pour chaque lettre
            }}
          >
            {letter}
          </span>
        ))}
      </header>
    </div>
  );
};

export default Header;
