import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import ListClients from '../components/ListClients/ListClients';
import SideMenu from '../components/SideMenu/SideMenu';
import axiosInstance from '../axiosConfig';

const Listing = () => {
  useEffect(() => {
    axiosInstance.get('/guest').then((response) => {
      console.log(response.data);
    });
  }, []); // A função dentro do useEffect será chamada apenas quando o componente for montado

  return (
    <Flex direction="row" h={'92vh'}>
      <SideMenu />
      <ListClients />
    </Flex>
  );
};

export default Listing;
