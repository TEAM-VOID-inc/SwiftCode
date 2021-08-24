const express = require("express");
const http = require("http");
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require("passport");
const path = require("path");
const {getgfgdata} = require('./socket/socketgfg');
const {getcodeforcesdata} = require('./socket/codeforces');

//connection uri and port
const connUri = process.env.MONGO_LOCAL_CONN_URL;
const port = process.env.PORT || 3001;

const app = express();


app.use(cors());


// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: false }));
//form-urlencoded

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;
mongoose.connect(connUri, { useNewUrlParser: true , useCreateIndex: true,  useUnifiedTopology: true, useFindAndModify: true });

const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB connected sucessfully'));
connection.on('error', (err) => {
    console.log("MongoDB connection error" + err);
    process.exit();
});


//=== 3 - INITIALIZE PASSPORT MIDDLEWARE
app.use(passport.initialize());
require("./middlewares/jwt")(passport);


//Configure Route
require('./routes/index')(app);


//Socket building
const server = http.createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});


io.on("connection", socket => {
    console.log("New client connected"), 
    getgfgdata(socket);
    getcodeforcesdata(socket);
    socket.on("disconnect", () => console.log("CLIENT DISCONNECT"));
});


server.listen(port, () => console.log(`Listening on port ${port}`));