const app = require("./index");
const connect = require("./configs/db");

const cors = require("cors");
const port = process.env.PORT || 3001

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});


app.listen(port, async () => {
    try {
        await connect();
        console.log("listening on port 3001")
    } catch (error) {
        console.log(error.message)
    }
})
