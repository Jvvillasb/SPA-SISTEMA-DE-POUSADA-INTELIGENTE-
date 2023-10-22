import useDevice from '../../hooks/useDevice/useDevice';
import BottomNavigation from '../BottomNavigation/BottomNavigation';
import TopNavigation from '../TopNavigation/TopNavigation';

const Navigation = () => {
    const { isPhone } = useDevice();

    return (
        <>
            <TopNavigation />
            {isPhone ? <BottomNavigation /> : null}
        </>
    );
};

export default Navigation;
