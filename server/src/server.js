const app = require("./index");
const connect = require("./configs/db");

const cors = require("cors");
const port = process.env.PORT || 3001


app.use(cors());


// app.all('/', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next()
//   });


//   const { createProxyMiddleware } = require('http-proxy-middleware');
// app.use('/api', createProxyMiddleware({ 
//     target: 'http://localhost:3001', //original url
//     changeOrigin: true, 
//     //secure: false,
//     onProxyRes: function (proxyRes, req, res) {
//        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//     }
// }));
app.listen(port, async () => {
    try {
        await connect();
        console.log("listening on port 3001")
    } catch (error) {
        console.log(error.message)
    }
})
