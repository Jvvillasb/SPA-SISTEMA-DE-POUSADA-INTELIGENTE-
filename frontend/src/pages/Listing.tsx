import { Flex } from '@chakra-ui/react';
import ListClients from '../components/ListClients/ListClients';

const Listing = () => {
    return (
        <Flex direction="row" h={'92vh'}>
            <ListClients />
        </Flex>
    );
};

export default Listing;
