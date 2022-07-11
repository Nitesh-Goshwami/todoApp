const app = require("./index");
const connect = require("./configs/db");

const cors = require("cors");
const port = process.env.PORT || 3001


app.use(cors());

app.listen(port, async () => {
    try {
        await connect();
        console.log("listening on port 3001")
    } catch (error) {
        console.log(error.message)
    }
})
