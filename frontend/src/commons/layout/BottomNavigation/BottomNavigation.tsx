import {
    BottomNavigationContainer,
    BottomNavigationList,
    BottomNavigationListItem,
    BottomNavigationListLink,
} from './BottomNavigation.styles';

import {
    MdOutlineHome,
    MdPersonOutline,
    MdOutlineDirectionsBus,
    MdPeopleOutline,
    MdHouseSiding,
} from 'react-icons/md';

const BottomNavigation = () => {
    return (
        <BottomNavigationContainer>
            <BottomNavigationList>
                <BottomNavigationListItem>
                    <BottomNavigationListLink to="/">
                        <MdOutlineHome size="1.6rem" color="#798494" />
                    </BottomNavigationListLink>
                </BottomNavigationListItem>
                <BottomNavigationListItem>
                    <BottomNavigationListLink to="/usuarios">
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
