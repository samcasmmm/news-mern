import healthRoute from './health';
import { Response, Request, NextFunction } from 'express';
const mid1 = (req: Request, res: Response, next: NextFunction) => {
    console.log('m1');
    next();
};
const mid2 = (req: Request, res: Response, next: NextFunction) => {
    console.log('m2');
    next();
};
const mid3 = (req: Request, res: Response, next: NextFunction) => {
    console.log('m3');
    next();
};

const pathBuilder = (path?: string) => {
    return '/api/' + path;
};

export const ROUTES = [
    {
        title: 'Health',
        description: 'Check health of server',
        pseudoPath: '/api/health',
        path: pathBuilder(''),
        middleware: [mid1, mid2, mid3],
        route: healthRoute,
    },
    {
        title: 'Users',
        description: 'Users routes',
        pseudoPath: '/api/users',
        path: pathBuilder(''),
        middleware: [mid1, mid2, mid3],
        route: healthRoute,
    },
];
