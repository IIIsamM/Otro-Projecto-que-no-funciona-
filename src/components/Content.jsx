// src/components/Content.jsx

import React from 'react';
import icono1 from '../assets/icons/HALEON.png';
import icono2 from '../assets/icons/DHL.png';

const Content = () => {
  return (

      <div className="flex items-center">
        <div className="mr-4">
          <img src={icono1} alt="Icono 1" className="w-8" />
        </div>

        <div>
          <img src={icono2} alt="Icono 2" className="w-8" />
        </div>
      </div>
  );
};

export default Content;
