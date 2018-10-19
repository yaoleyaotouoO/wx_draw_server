import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';
import * as fs from 'fs';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
    sourceUrl: string;
}

const filePath = path.join(__dirname, '../config.json');
const mysqlConfig = JSON.parse(fs.readFileSync(filePath) as any);

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig> & BizConfig;

    // app special config
    config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1535012845176_1740';

    // add your config here
    config.middleware = [];
    
    config.mysql = {
        client: mysqlConfig,
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    }

    return config;
};
