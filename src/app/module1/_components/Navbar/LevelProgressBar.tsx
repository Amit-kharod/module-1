import React, { useState } from 'react';

const LevelProgressBar = () => {
  const [startActivity, setStartActivity] = useState(1);

  const showNextActivities = () => {
    if (startActivity + 5 <= 15) {
      setStartActivity((prev) => prev + 5);
    }
  };

  const showPreviousActivities = () => {
    if (startActivity - 5 >= 1) {
      setStartActivity((prev) => prev - 5);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={showPreviousActivities}
        disabled={startActivity === 1}
        className={`px-3 py-1 rounded-full  text-white text-xl  ${
          startActivity === 1 ? ' cursor-not-allowed' : ''
        }`}
      >
        &lt;
      </button>
      <div className="flex items-center space-x-4 relative">
        {Array.from({ length: 5 }, (_, index) => (
          <React.Fragment key={startActivity + index}>
            {index !== 0 && (
              <div
                className="h-1 w-8 bg-Lavender"
                style={{ transform: 'translateX(50%)' }}
              ></div>
            )}
            <div className="flex items-center">
              <div className="font-bold font-['Roboto'] rounded-full h-8 w-8 flex items-center justify-center border-2 border-Lavender text-blue-500 text-white">
                {startActivity + index}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <button
        onClick={showNextActivities}
        disabled={startActivity + 5 > 15}
        className={`px-3 py-1 rounded-full text-white text-xl ${
          startActivity + 5 > 15 ? ' cursor-not-allowed' : ' '
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default LevelProgressBar;
