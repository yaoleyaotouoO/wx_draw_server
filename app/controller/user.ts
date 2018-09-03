import { Controller } from 'egg';

export default class UserController extends Controller {
    async getUserInfo() {
        const { ctx, service, logger, app } = this;
        console.log("XJX2222222222222222app: ", app.wss);

        const result = await service.user.getUserInfo();

        logger.info("xjx start! ");
        logger.info("userInfo: ", result);

        ctx.body = result;
        ctx.status = 200;
    }

    async login() {
        const { ctx, service, logger } = this;
        const createRule = {
            userName: 'string',
            passWord: 'string'
        }

        // 校验参数
        // 如果不传第二个参数会自动校验 `ctx.request.body`
        ctx.validate(createRule, ctx.request.body);

        const { userName, passWord } = ctx.request.body;
        logger.info("userName: ", userName);
        logger.info("passWord: ", passWord);

        const result = await service.user.login({ userName, passWord });

        ctx.body = result;
        ctx.status = 200;
    } 
}