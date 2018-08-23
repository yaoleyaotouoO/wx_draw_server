declare module 'egg' {
    interface IMysqlDto {
        select: (tableName: string, Query?: Object) => Object;
        get: (tableName: string, Query?: Object) => Object;
    }

    interface IService {
    }

    // 扩展 app
    interface Application {
        mysql: IMysqlDto;
    }

    // 扩展 context
    interface Context {

    }

    // 扩展你的配置
    interface EggAppConfig {

    }
}