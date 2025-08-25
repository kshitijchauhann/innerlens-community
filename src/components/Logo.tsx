"use client"

import React, { useState, useEffect } from 'react';

const IrisLogo = () => {
  const [blink, setBlink] = useState(false);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    const checkDarkMode = () => {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeQuery.matches);
    };

    checkDarkMode();
    
    // Listen for changes in color scheme preference
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDarkMode(e.matches);
    darkModeQuery.addEventListener('change', handleChange);

    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 120);
    }, 4000);

    const eyeRollInterval = setInterval(() => {
      // Full 360 degree eye roll with larger radius, ending at bottom
      const steps = 20;
      const radius = 8; // Increased radius for full rotation around iris
      
      for (let i = 0; i <= steps; i++) {
        setTimeout(() => {
          // Start from top (90 degrees) and go clockwise to bottom (270 degrees)
          const angle = (Math.PI / 2) + (i / steps) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          setEyePosition({ x, y });
          
          // When rotation completes (at bottom), blink and return to center
          if (i === steps) {
            setTimeout(() => {
              setBlink(true);
              setTimeout(() => {
                setBlink(false);
                setEyePosition({ x: 0, y: 0 }); // Return to center
              }, 120);
            }, 500); // Wait 500ms at bottom before blinking
          }
        }, i * 100);
      }
    }, 6000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(eyeRollInterval);
      darkModeQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div style={{ position: 'flex' }}>
      {/* Simple eye */}
      <div 
        style={{
          width: '64px',
          height: blink ? '4px' : '64px',
          backgroundColor: isDarkMode ? 'white' : 'black',
          borderRadius: blink ? '2px' : '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 100ms'
        }}
      >
        {!blink && (
          <div style={{
            width: '30px',
            height: '30px',
            backgroundColor: isDarkMode ? 'black' : 'white',
            borderRadius: '50%',
            position: 'relative',
            overflow: 'visible'
          }}>
            <div 
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: isDarkMode ? 'white' : 'black',
                borderRadius: '50%',
                transition: 'all 200ms ease-out',
                position: 'absolute',
                transform: `translate(${8 + eyePosition.x}px, ${8 + eyePosition.y}px)`
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IrisLogo;
