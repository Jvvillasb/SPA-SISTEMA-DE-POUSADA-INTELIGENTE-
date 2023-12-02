import { useCallback, useEffect, useState } from 'react';
import { UseDeviceProps } from './useDevice.types';
import { breakpoints } from '../../constants/breakpoints';

const useDevice = (): UseDeviceProps => {
    const getDeviceInfo = () => {
        const windowWidth = window.innerWidth;
        return {
            isPhone: windowWidth < breakpoints.sm,
            isTable:
                windowWidth >= breakpoints.sm && windowWidth < breakpoints.md,
            isDesktop: windowWidth > breakpoints.md,
        };
    };

    const [deviceInfo, setDeviceInfo] = useState<UseDeviceProps>(getDeviceInfo);

    const handleResize = useCallback(() => {
        setDeviceInfo(getDeviceInfo());
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return deviceInfo;
};

export default useDevice;
