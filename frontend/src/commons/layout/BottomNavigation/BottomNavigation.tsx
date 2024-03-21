import {
    BottomNavigationContainer,
    BottomNavigationList,
    BottomNavigationListItem,
    BottomNavigationListLink,
} from './BottomNavigation.styles';

import {
    MdPersonOutline,
    MdOutlineDirectionsBus,
    MdPeopleOutline,
    MdHouseSiding,
    MdOutlineHouse,
} from 'react-icons/md';

const BottomNavigation = () => {
    return (
        <BottomNavigationContainer data-testid="Bottom-Navigation">
            <BottomNavigationList>
                <BottomNavigationListItem>
                    <BottomNavigationListLink to="/home">
                        <MdOutlineHouse size="1.6rem" color="#798494" />
                    </BottomNavigationListLink>
                </BottomNavigationListItem>
                <BottomNavigationListItem>
                    <BottomNavigationListLink to="/hospedes">
                        <MdPersonOutline size="1.6rem" color="#798494" />
                    </BottomNavigationListLink>
                </BottomNavigationListItem>
                <BottomNavigationListItem>
                    <BottomNavigationListLink to="/caravanas">
                        <MdOutlineDirectionsBus size="1.6rem" color="#798494" />
                    </BottomNavigationListLink>
                </BottomNavigationListItem>
                <BottomNavigationListItem>
                    <BottomNavigationListLink to="/quartos">
                        <MdHouseSiding size="1.6rem" color="#798494" />
                    </BottomNavigationListLink>
                </BottomNavigationListItem>
                <BottomNavigationListItem>
                    <BottomNavigationListLink to="/guia">
                        <MdPeopleOutline size="1.6rem" color="#798494" />
                    </BottomNavigationListLink>
                </BottomNavigationListItem>
            </BottomNavigationList>
        </BottomNavigationContainer>
    );
};

export default BottomNavigation;
