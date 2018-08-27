const mqtt = require('mqtt');
const client = mqtt.connect('wxs://0.0.0.0:7001');

module.exports = app => {
    app.once('server', () => {
        // websocket
        console.log("websocket start");

        client.on('connect', () => {
            client.subscribe('draw/drawClient');
            client.publish('draw/drawServer', 'hello mqtt, my is Server');
        })

        client.on('message', function (topic: string, message: string, packet: any) {
            if (topic.indexOf('draw/drawClient') > -1) {
                // 处理开锁信息，关闭连接
                console.log("message: ", message);
                console.log("packet: ", packet);
                client.end();
            }
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