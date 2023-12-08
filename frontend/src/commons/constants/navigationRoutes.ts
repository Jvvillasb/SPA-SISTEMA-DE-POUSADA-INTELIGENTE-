interface RouteInfo {
    path: string;
    title: string;
}

export const authenticatedRoutes: Array<RouteInfo> = [
    { path: '/home', title: 'Home' },
    { path: '/hospedes', title: 'Hóspedes' },
    { path: '/caravanas', title: 'Caravanas' },
    { path: '/quartos', title: 'Quartos' },
    { path: '/guia', title: 'Guias' },
];

export const commonRoutes: Array<RouteInfo> = [
    { path: '/login', title: 'Login' },
];
