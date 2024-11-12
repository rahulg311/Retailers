import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
// import './styles.css'; // Import your CSS file

const Celebration = () => {
  const [windowDimension, setDimension] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [runConfetti, setRunConfetti] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Set window dimensions for confetti to cover the entire page
  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    // Trigger confetti when the component mounts
    setRunConfetti(true);

    // After 5 seconds, start the fade-out effect
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Disable confetti after the fade-out animation
      setTimeout(() => {
        setRunConfetti(false);
      }, 2000); // Duration of the fade-out animation
    }, 5000);

    // Set up event listener and clean up
    window.addEventListener('resize', detectSize);

    // Clean up on component unmount
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', detectSize);
    };
  }, []);

  return (
    <>
      {runConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          tweenDuration={1000}
          numberOfPieces={windowDimension.width < 768 ? 100 : 200} // Fewer pieces on smaller screens
          className={fadeOut ? 'confetti-fade-out' : ''}
        />
      )}
      
      {/* Responsive Page Content */}
      {/* <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-600">
          Welcome to the Celebration Page!
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-center text-gray-700">
          Enjoy the confetti animation as we celebrate together!
        </p>
      </div> */}
    </>
  );
};

export default Celebration;
