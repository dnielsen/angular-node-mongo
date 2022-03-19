const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
};
app.use(cors(corsOptions));

app.use(bodyParser.json()); // data tranfer middleware

const db = require("./app/models");
// check connection
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

require("./app/routes/turorial.routes")(app);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to node with mongo api" });
    console.log(app.route);
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});