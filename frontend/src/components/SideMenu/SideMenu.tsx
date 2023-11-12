import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SideMenuContainer, MenuItem } from './SideMenu.style';

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
            navigate('/list');
        }
    };

    return (
        <SideMenuContainer>
            <MenuItem
                selected={selectedItem === 'Caravanas'}
                onClick={() => handleItemClick('Caravanas')}
            >
                Caravanas
            </MenuItem>
            <MenuItem
                selected={selectedItem === 'clientes'}
                onClick={() => handleItemClick('clientes')}
            >
                Clientes
            </MenuItem>
        </SideMenuContainer>
    );
};

export default SideMenu;
