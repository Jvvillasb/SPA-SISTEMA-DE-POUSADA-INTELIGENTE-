import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import Styles from './SideMenu.module.scss';

const SideMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedItem, setSelectedItem] = useState('');

    useEffect(() => {
        if (location.pathname.includes('/list')) {
            setSelectedItem('clientes');
        } else if (location.pathname.includes('/caravanas')) {
            setSelectedItem('Caravanas');
        }
    }, [location]);

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        if (item === 'clientes') {
            navigate('/list');
        } else if (item === 'Caravanas') {
            navigate('/');
        }
    };

    return (
        <Box className={Styles.sideMenu} width="204px">
            <div className={Styles.sideMenuOptions}>
                <a
                    className={`${Styles.options} ${
                        selectedItem === 'Caravanas' ? Styles.selected : ''
                    }`}
                    onClick={() => handleItemClick('Caravanas')}
                >
                    Caravanas
                </a>
                <a
                    className={`${Styles.options} ${
                        selectedItem === 'clientes' ? Styles.selected : ''
                    }`}
                    onClick={() => handleItemClick('clientes')}
                >
                    Clientes
                </a>
            </div>
        </Box>
    );
};

export default SideMenu;
