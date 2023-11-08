import {
    BottomNavigationContainer,
    BottomNavigationList,
    BottomNavigationListItem,
    BottomNavigationListLink,
} from './BottomNavigation.styles';

import {
    MdOutlineRoom,
    MdOutlineHome,
    MdPersonOutline,
    MdOutlineDirectionsBus,
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
                        <MdOutlineRoom size="1.6rem" color="#798494" />
                    </BottomNavigationListLink>
                </BottomNavigationListItem>
                <BottomNavigationListItem>
                    <BottomNavigationListLink to="/quartos">
                        <MdOutlineDirectionsBus size="1.6rem" color="#798494" />
                    </BottomNavigationListLink>
                </BottomNavigationListItem>
            </BottomNavigationList>
        </BottomNavigationContainer>
    );
};

export default BottomNavigation;
