import * as ws from 'ws';
import { WebSocket } from './app/websocket/websocket';

module.exports = app => {
    app.once('server', (server: any) => {
        // websocket
        const WebSocketServer = ws.Server;
        let wss = new WebSocketServer({
            server: server
        });

        app.wss = wss;

        wss.on('connection', (ws: any) => {
            app.ws = ws;
            new WebSocket(ws, wss);
        });
    });
    app.on('error', () => {
        // report error
    });
    app.on('request', () => {
        // log receive request
    });
    app.on('response', () => {
        // ctx.starttime is set by framework
        // const used = Date.now() - ctx.starttime;
        // log total cost
    });
};