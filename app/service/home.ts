import { Service } from 'egg';

/**
 * Home Service
 */
export default class HomeService extends Service {
    async findRoom({ roomName }) {
        const { app } = this;
        const result = await app.mysql.get('draw_room', { name: roomName });

        return result;
    }
}
