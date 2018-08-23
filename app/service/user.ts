import { Service } from 'egg';

/**
 * User Service
 */
export default class UserService extends Service {
    async getUserInfo() {
        const { app } = this;
        const result = await app.mysql.select('draw_userinfo');

        return result;
    }

    async login({ userName, passWord }) {
        const { app } = this;
        const result = await app.mysql.get('draw_userinfo', { userName, passWord });

        return result;
    }
}
