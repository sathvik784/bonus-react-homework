import React, { useState } from 'react';
import './RadioButtonGroup.css';

/* This is a RadioButtonGroup Component
    Assignment Description


*/
const RadioButtonGroup = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleRadioButtonClick = (event) => {
    /* TODO: use the hook from line 10 to change the selectedNumber */
    /* hint: you can get the new number with event.target.value */
  };

  const getColor = () => {
    switch (selectedNumber) {
      /* TODO: write logic to return the appropriate color */
    }
  };
  
  return (
    <div className="radio-button-group" style={{ backgroundColor: getColor() }}>
      {[1, 2, 3, 4, 5].map(number => (
        <div className="radio-button-container" key={number}>
          <label>
            {number}
            <input
              type="radio"
              value={number}
              checked={selectedNumber === number}
              onChange={handleRadioButtonClick}
            />
          </label>
        </div>
      ))}
      <p>Selected Number: {selectedNumber}</p>
    </div>
  );
};

export default RadioButtonGroup;
