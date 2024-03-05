// src/components/Sidebar.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  const navItems = [
    { text: 'Inicio', icon: '\\public\\img\\home.png', link: '#' },
    { text: 'Segundo', icon: '\\public\\img\\second.png', link: '#' },
    { text: 'Informe', icon: '\\public\\img\\tree.png', link: '#' },
    { text: 'Journal', icon: '\\public\\img\\JournalText.png', link: '#' },
    { text: 'Config', icon: '\\public\\img\\config.png', link: '#' },
    // Agrega más elementos según sea necesario
  ];

  return (
    <div className={`bg-NavBarColor text-black h-${isCollapsed ? 'screen' : 'screen'} w-${isCollapsed ? '1/12' : '1/12'} min-w-max fixed top-0 left-0 transition-all duration-300 flex flex-col items-center`}>
      <button onClick={toggleSidebar} className="text-red-600 focus:outline-none mt-2 mb-16 p-4">
        <FontAwesomeIcon icon={isCollapsed ? faBars : faTimes} />
      </button>

      <ul className="flex flex-col items-center justify-center mt-2 w-full p-0">
        {navItems.map((item, index) => (
          <li key={index} className="mb-2 flex items-center justify-center mt-2 w-full p-3">
            {/* Cambia la ruta a la ubicación correcta de tus iconos */}
            <img
              src={item.icon}
              alt={`Icono de ${item.text}`}
              className=" w-5 h-5" // Aumenté el margen a mr-4
            />
            <span className={`hover:text-gray-300 p-1 ${isCollapsed ? 'hidden' : 'block'}`}>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
