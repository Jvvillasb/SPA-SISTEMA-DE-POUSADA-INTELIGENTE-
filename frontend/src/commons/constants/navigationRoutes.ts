interface RouteInfo {
    path: string;
    title: string;
}

export const authenticatedRoutes: Array<RouteInfo> = [
    { path: '/usuarios', title: 'Home' },
    { path: '/usuarios', title: 'Usuários' },
    { path: '/caravanas', title: 'Caravanas' },
    { path: '/quartos', title: 'Quartos' },
];

export const commonRoutes: Array<RouteInfo> = [
    { path: '/register', title: 'Cadastro' },
    { path: '/login', title: 'Login' },
];
