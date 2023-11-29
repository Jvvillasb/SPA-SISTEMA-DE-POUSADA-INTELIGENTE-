import { useCookies } from 'react-cookie';

import {
    TopNavigationContainer,
    TopNavigationBrand,
    TopNavigationItem,
    TopNavigationList,
    TopNavigationLink,
} from './TopNavigation.styles';
import { MdLogout } from 'react-icons/md';
import {
    authenticatedRoutes,
    commonRoutes,
} from './../../../commons/constants/navigationRoutes';

const TopNavigation = () => {
    const [cookies, , removeCookie] = useCookies(['access_token']);

    const isAuthenticated = !!cookies.access_token;

    const handleLogout = () => {
        removeCookie('access_token');
        window.location.href = '/login';
    };

    return (
        <TopNavigationContainer>
            <TopNavigationBrand to="/home">SPI</TopNavigationBrand>
            <TopNavigationList>
                {isAuthenticated ? (
                    <>
                        {authenticatedRoutes.map(({ path, title }) => (
                            <TopNavigationItem key={`${path}_${title}`}>
                                <TopNavigationLink to={path}>
                                    {title}
                                </TopNavigationLink>
                            </TopNavigationItem>
                        ))}
                    </>
                ) : (
                    <>
                        {commonRoutes.map(({ path, title }) => (
                            <TopNavigationItem key={`${path}_${title}`}>
                                <TopNavigationLink to={path}>
                                    {title}
                                </TopNavigationLink>
                            </TopNavigationItem>
                        ))}
                    </>
                )}
            </TopNavigationList>
            {isAuthenticated ? (
                <button onClick={handleLogout}>
                    <MdLogout size="24px" color="#798494" />
                </button>
            ) : null}
        </TopNavigationContainer>
    );
};

export default TopNavigation;
