import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import p4 from './images/p4.jpg';
import p5 from './images/p5.jpg';
import p6 from './images/p6.jpg';
import p7 from './images/p7.jpg';
import p8 from './images/p8.jpg';
import p9 from './images/p9.jpg';
import './Level2.css';
import Modal from '../modal/deathModal'
import CongratsModal from '../modal/congratsModal';

function Level2(props) {
    let [cnt,setCnt] = useState([]);
    let [alive,setAlive]=useState(true);
    const navigate=useNavigate();
    function nextLevel() {
        props.Up();
        navigate("/");
    }

    function handleDragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.id);
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }
    
    function handleDrop(e) {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const img = document.getElementById(id);
        img.style.visibility = "hidden";
        e.target.style.backgroundImage = `url(${img.src})`;
        const tid = e.target.id;
        const pid = 'p'+id;
        if(pid===tid)
        {
           setCnt([...cnt,id]);

          

        }
        else{
            setAlive(false);
        }
        console.log(cnt.length)
    }


    

    return ( 
        <div>
            {alive ? (cnt.length!==9)?
            <>
            
            <div className="box mt-3 ms-3">
                <div className="r1 eachRow">
                    <div id="pone" className="tile" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="ptwo" className="tile" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="pthree" className="tile" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                </div>
                <div className="r2 eachRow">
                    <div id="pfour" className="tile" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="pfive" className="tile" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="psix" className="tile" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                </div>
                <div className="r3 eachRow">
                    <div id="pseven" className="tile" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="peight" className="tile" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                    <div id="pnine" className="tile" onDragOver={handleDragOver} onDrop={handleDrop}></div>
                </div>
            </div>
            <img
                id="one"
                src={p1}
                alt='no img'
                className="slice3"
                width="10%"
                draggable="true"
                onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", "one");
                }}
            />
            <img
                id="two"
                src={p2}
                alt='no img'
                className="slice1"
                width="10%"
                draggable="true"
                onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", "two");
            }}
            />
            <img
                id="three"
                src={p3}
                alt='no img'
                className="slice2"
                width="10%"
                draggable="true"
                onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", "three");
            }}
            />
            <img
                id="four"
                src={p4}
                className="slice5"
                width="10%"
                alt='no img'
                draggable="true"
                onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", "four");
            }}
            />
            <img
                id="five"
                src={p5}
                className="slice6"
                width="10%"
                alt='no img'
                draggable="true"
                onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", "five");
            }}
            />
            <img
                id="six"
                src={p6}
                className="slice4"
                width="10%"
                alt='no img'
                draggable="true"
                onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", "six");
            }}
            />
            <img
                id="seven"
                src={p7}
                className="slice8"
                width="10%"
                alt='no img'
                draggable="true"
                onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", "seven");
            }}
            />
            <img
                id="eight"
                src={p8}
                className="slice7"
                width="10%"
                alt='no img'
                draggable="true"
                onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", "eight");
            }}
            />
            <img
                id="nine"
                src={p9}
                className="slice9"
                width="10%"
                alt='no img'
                draggable="true"
                onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", "nine");
            }}
            />
        </>:
        <CongratsModal Up={props.Up} />:
        <Modal Up={props.Up} />}
    </div>
);

}

export default Level2;