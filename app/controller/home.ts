import { Controller } from 'egg';

export default class HomeController extends Controller {
    public async index() {
        const { ctx } = this;
        ctx.body = await ctx.service.test.sayHi('egg');
    }

    async findRoom() {
        const { ctx, service } = this;
        const createRule = {
            roomName: 'string'
        }

        ctx.validate(createRule, ctx.request.query);
        const { roomName } = ctx.request.query;
        const result = await service.home.findRoom({ roomName });

        ctx.body = result;
        ctx.status = 200;
    }
}
