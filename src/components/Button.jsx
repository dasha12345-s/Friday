import { useState } from "react";
import myImg1 from '../assets/giphy.gif'
import myImg2 from '../assets/giphy2.gif'
import myImg3 from '../assets/giphy3.gif'

const myImg = [myImg1, myImg2, myImg3];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Button(){

const [isVisible, setIsVisible] = useState(false);

const img5 = myImg[genRandomInt(2)]; 

function handleAnimation(){
  setIsVisible(true);
  setTimeout(() => {
    setIsVisible(false);
  }, 3000); 
}  

  return(
  <>
  {isVisible && (<p> Let's drink vino!</p>)}
  {isVisible && (
        <img className="image" src={img5} alt="Funny GIF" />
      )}

      {!isVisible && <button onDoubleClick={handleAnimation}> Double Click me if today is FRIDAY </button>}
  
  </>
  )
}


//   return (
//     <header>
//         <img src={reactImg} alt="Stylized atom" />
//         <h1>React Essentials</h1>
//         <p>
//           {description} React concepts you will need for almost any app you are
//           going to build!
//         </p>
//       </header>
//   );
// }
