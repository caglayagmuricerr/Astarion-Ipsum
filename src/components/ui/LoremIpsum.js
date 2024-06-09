import React, { useState } from 'react';
import { astarionLines } from '../lines/astarionLines';
import GeneratedTextDisplay from './GeneratedTextDisplay';

const LoremIpsumGenerator = () => {
  const [numLines, setNumLines] = useState(3);
  const [generatedText, setGeneratedText] = useState('');

  const generateLoremIpsum = () => {
    const lines = getRandomLines(astarionLines, numLines);

    const loremIpsum = [...lines];
    setGeneratedText(loremIpsum.join(' '));
  };

  const getRandomLines = (lines, num) => {
    const shuffledLines = shuffleArray(lines);
    return shuffledLines.slice(0, num);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleNegativeInput = (event) => {
    let value = parseInt(event.target.value);
    if (value < 0) {
      value = 0;
    }
    setNumLines(value);
  };

  return (
    <div className='txt-center txt-m fade-in'>
      <label>Number of lines :</label>
      <input
        type="number"
        id="numLines"
        value={numLines}
        onChange={handleNegativeInput}
      />
      <button
        className='button-style'
        onClick={generateLoremIpsum}
      >
        Generate
      </button>
      <br />
      <span> (max : {astarionLines.length})</span>
      <br />
      {generatedText && <GeneratedTextDisplay generatedText={generatedText} />}
    </div>
  );
};

export default LoremIpsumGenerator;
