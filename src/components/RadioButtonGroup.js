import React, { useState } from 'react';
import './RadioButtonGroup.css';

/* This is a RadioButtonGroup Component
    Assignment Description


*/
const RadioButtonGroup = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);

/* Don't worry about this function, changes color when a radio is clicked */
  const handleRadioButtonClick = (event) => {
    setSelectedNumber(Number(event.target.value));
  };
/* Don't worry about this function, simply to pick the color */
  const getColor = () => {
    switch (selectedNumber) {
      case 1:
        return 'red';
      case 2:
        return 'blue';
      case 3:
        return 'green';
      case 4:
        return 'aqua';
      case 5:
        return 'purple';
      default:
        return 'black';
    }
  };
  /* What to do here

  */
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
