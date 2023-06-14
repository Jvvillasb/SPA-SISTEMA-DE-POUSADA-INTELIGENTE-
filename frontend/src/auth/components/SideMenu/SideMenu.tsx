import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Styles from './SideMenu.module.scss';

const SideMenu = () => {
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <Box className={Styles.sideMenu} width="204px">
      <div className={Styles.sideMenuOptions}>
        <a
          className={`${Styles.options} ${selectedItem === 'atendimentos' ? Styles.selected : ''}`}
          onClick={() => handleItemClick('atendimentos')}
        >
          Atendimentos
        </a>
        <a
          className={`${Styles.options} ${selectedItem === 'clientes' ? Styles.selected : ''}`}
          onClick={() => handleItemClick('clientes')}
        >
          Clientes
        </a>
      </div>
    </Box>
  );
}

export default SideMenu;
