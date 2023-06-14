import React from 'react';
import { Flex } from '@chakra-ui/react';
import ListClients from '../components/ListClients/ListClients';
import SideMenu from '../components/SideMenu/SideMenu';

const Listing = () => {
  return (
    <Flex direction="row" h={'92vh'}>
      <SideMenu />
      <ListClients />
    </Flex>
  );
}

export default Listing;
