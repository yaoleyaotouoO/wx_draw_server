import { Application } from 'egg';

export default (app: Application) => {
    const { controller, router } = app;

    router.get('/', controller.home.index);

    router.get('/api/getUserInfo', controller.user.getUserInfo);

    router.post('/api/login', controller.user.login);

    router.get('/api/findRoom', controller.home.findRoom);
};
