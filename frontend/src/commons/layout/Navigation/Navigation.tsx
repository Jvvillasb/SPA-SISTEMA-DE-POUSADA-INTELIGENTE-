import { useCookies } from 'react-cookie';
import useDevice from '../../hooks/useDevice/useDevice';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import TopNavigation from '../TopNavigation/TopNavigation';

const Navigation = () => {
    const { isPhone } = useDevice();
    const [cookies] = useCookies(['access_token']);
    const isAuthenticated = !!cookies.access_token;

    return (
        <>
            <TopNavigation />
            {isPhone && isAuthenticated ? <BottomNavigation /> : null}
        </>
    );
};

export default Navigation;
