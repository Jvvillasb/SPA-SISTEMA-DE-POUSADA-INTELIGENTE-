import { Flex } from '@chakra-ui/react';
import ListGuidesUsers from '../components/ListGuideUsers/ListGuideUsers';

const ListingGuideUsers = () => {
    return (
        <Flex direction="row" h={'92vh'}>
            <ListGuidesUsers />
        </Flex>
    );
};

export default ListingGuideUsers;
