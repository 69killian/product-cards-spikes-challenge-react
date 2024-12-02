import Cards from "./components/Cards.jsx";
import cardImage1 from './assets/cardimage1.png';
import cardImage2 from './assets/cardimage2.png';
import points from './assets/points.png';
import sword from './assets/swordicon.png';

export default function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-3 gap-[14.74px] mt-10">
    <Cards 
      cardImage={cardImage1} 
      cardImageAlt="Raycast Wallpaper #1" 
      title="Raycast Wallpaper #1" 
      description="Recreate this wallpaper using AI."
      buttonText="Start Challenge"
      premium={true} 
      sword={sword}
      points={points}
    />
    <Cards 
      cardImage={cardImage2} 
      cardImageAlt="Raycast Wallpaper #2" 
      title="Raycast Wallpaper #2" 
      description="Recreate this wallpaper using AI."
      buttonText="Start Challenge"
      premium={false} 
      sword={sword}
      points={points}
    />
    <Cards 
      cardImage={cardImage1} 
      cardImageAlt="Raycast Wallpaper #1" 
      title="Raycast Wallpaper #3" 
      description="Recreate this wallpaper using AI."
      buttonText="Start Challenge"
      premium={true} 
      sword={sword}
      points={points}
    />
    <Cards 
      cardImage={cardImage1} 
      cardImageAlt="Raycast Wallpaper #1" 
      title="Raycast Wallpaper #4" 
      description="Recreate this wallpaper using AI."
      buttonText="Start Challenge"
      premium={true} 
      sword={sword}
      points={points}
    />
    <Cards 
      cardImage={cardImage2} 
      cardImageAlt="Raycast Wallpaper #2" 
      title="Raycast Wallpaper #5" 
      description="Recreate this wallpaper using AI."
      buttonText="Start Challenge"
      premium={false} 
      sword={sword}
      points={points}
    />
    <Cards 
      cardImage={cardImage1} 
      cardImageAlt="Raycast Wallpaper #1" 
      title="Raycast Wallpaper #6" 
      description="Recreate this wallpaper using AI."
      buttonText="Start Challenge"
      premium={true} 
      sword={sword}
      points={points}
    />
    </div>
  </div>
  );
}
