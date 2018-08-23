const mqtt = require('mqtt');
const client = mqtt.connect('wxs://0.0.0.0:7001');

module.exports = app => {
    app.once('server', () => {
        // websocket
        console.log("websocket start");

        client.on('connect', () => {
            client.subscribe('xjx1');
            client.publish('xjx2', 'xjx2 hello mqtt');
        })
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