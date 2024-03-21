import { authenticatedRoutes, commonRoutes } from './navigationRoutes';

describe('authenticatedRoutes', () => {
    it('should contain the correct routes', () => {
        const expectedRoutes = [
            { path: '/home', title: 'Home' },
            { path: '/hospedes', title: 'Hóspedes' },
            { path: '/caravanas', title: 'Caravanas' },
            { path: '/quartos', title: 'Quartos' },
            { path: '/guia', title: 'Guias' },
        ];

        expect(authenticatedRoutes).toEqual(expectedRoutes);
    });
});

describe('commonRoutes', () => {
    it('should contain the correct routes', () => {
        const expectedRoutes = [
            { path: '/login', title: 'Login' },
        ];

        expect(commonRoutes).toEqual(expectedRoutes);
    });
});