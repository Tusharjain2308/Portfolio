import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import RINGS from 'vanta/dist/vanta.rings.min';

const VantaAnimation = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = RINGS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x000000, // Set the background color to black
      THREE: THREE 
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="h-screen w-full"></div>;
};

export default VantaAnimation;
