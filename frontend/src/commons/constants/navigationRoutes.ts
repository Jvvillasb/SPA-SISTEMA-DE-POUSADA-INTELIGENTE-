interface RouteInfo {
    path: string;
    title: string;
}

export const authenticatedRoutes: Array<RouteInfo> = [
    { path: '/usuarios', title: 'Home' },
    { path: '/usuarios', title: 'Usuários' },
    { path: '/caravanas', title: 'Caravanas' },
    { path: '/quartos', title: 'Quartos' },
    { path: '/guia', title: 'Guias' },
];

export const commonRoutes: Array<RouteInfo> = [
    { path: '/register', title: 'Cadastro' },
    { path: '/login', title: 'Login' },
];
