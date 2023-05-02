import { useEffect, useState } from "react";
import Card from "./Card";
import "./Cards.css";
import Modal from '../modal/congratsModal'



function Cards(props) {
  const [audio] = useState(new Audio("/music/squidMusic.mp3"));

  useEffect(() => {
    audio
      .play()
      .then(() => console.log("Audio played successfully"))
      .catch((error) => console.error("Error playing audio:", error));
  },[])


  const [items, setItems] = useState(
    [
      { id: 1, img: "/images/circle.png", stat: "" },
      { id: 1, img: "/images/circle.png", stat: "" },
      { id: 2, img: "/images/halfCircle.png", stat: "" },
      { id: 2, img: "/images/halfCircle.png", stat: "" },
      { id: 3, img: "/images/star.png", stat: "" },
      { id: 3, img: "/images/star.png", stat: "" },
      { id: 4, img: "/images/char11.png", stat: "" },
      { id: 4, img: "/images/char11.png", stat: "" },
      { id: 5, img: "/images/char2.png", stat: "" },
      { id: 5, img: "/images/char2.png", stat: "" },
      { id: 6, img: "/images/char3.png", stat: "" },
      { id: 6, img: "/images/char3.png", stat: "" },
      { id: 7, img: "/images/doll.png", stat: "" },
      { id: 7, img: "/images/doll.png", stat: "" },
      { id: 8, img: "/images/mask.png", stat: "" },
      { id: 8, img: "/images/mask.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);
  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      // setC(c++);
      count();
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }


  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }


    let c=0;
    let [cnt,setCnt]=useState(0);
  function count(){
    
    for(let i=0;i<16;i++){
      if(items[i].stat==="correct")
      c++;
      setCnt(c);
    }
    if(c===16){
      // nextLevel();
      console.log("congo u dick")
    }
  }

  return (
    <div className="abc mt-3">
    {cnt===16?<>
    {/* <CongratulationsModal /> */}
    <Modal Up={props.Up} />
    </>
    :
  
  
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} /> 
      ))}
    </div>
}
    </div>
  );
}

export default Cards;
