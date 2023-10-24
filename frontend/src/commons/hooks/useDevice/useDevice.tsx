import { useCallback, useEffect, useState } from 'react';
import { UseDeviceProps } from './useDevice.types';
import { breakpoints } from '../../constants/breakpoints';

const useDevice = (): UseDeviceProps => {
    const [deviceInfo, setDeviceInfo] = useState<UseDeviceProps>({
        isPhone: false,
        isTable: false,
        isDesktop: false,
    });

    const handleResize = useCallback(() => {
        const windowWidth = window.innerWidth;

        let isPhone = false;
        let isTable = false;
        let isDesktop = false;

        if (windowWidth < breakpoints.sm) {
            isPhone = true;
        }
        if (windowWidth >= breakpoints.sm && windowWidth < breakpoints.md) {
            isTable = true;
        }
        if (windowWidth > breakpoints.md) {
            isDesktop = true;
        }

        setDeviceInfo({
            isPhone,
            isTable,
            isDesktop,
        });
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize, false);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return deviceInfo;
};

export default useDevice;
