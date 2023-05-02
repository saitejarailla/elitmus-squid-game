import './App.css';
import { Route,Routes } from 'react-router-dom';
import { useEffect,useState,useRef } from 'react';
import Home from './Components/Home.js'
import Level1 from './Components/Level1';
import Level2 from './Components/level-2/Level2';
import Level3 from './Components/Level3';

function App() {
  let [currentLevel,LevelUp] = useState(2);
  function Up() {
    LevelUp(currentLevel+1);
  }

  
  
  return (
    <div className='' >
      <Routes>
        <Route path="" element={<Home currentLevel={currentLevel}/>}></Route>
        <Route path="level1" element={<Level1 currentLevel={currentLevel} Up={Up}/>}></Route>
        <Route path="level2" element={<Level1 currentLevel={currentLevel} Up={Up}/>}/>
        <Route path="level3" element={<Level2 currentLevel={currentLevel} Up={Up}/>}/>
      </Routes>
    </div>
  );
}

export default App;
