import { useState } from 'react';
import Tile from './Tile/Tile';
import './App.css';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const App = () => {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    let newOutputString = outputString + letter;

    // Here i have used regex to check consecutive letter and replaced that letter with '_'
    newOutputString = newOutputString.replace(/(.)\1{2,}/g, (match) => '_'.repeat(match.length));

    setOutputString(newOutputString);
  };

  return (
    <div className="App">
      <div className="grid">
        {alphabet.map((letter) => (
          <Tile key={letter} letter={letter} onClick={handleTileClick} />
        ))}
      </div>
      <div id="outputString" className="output">
        {outputString}
      </div>
    </div>
  );
}

export default App;
