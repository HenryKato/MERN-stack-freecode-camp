const express = require('express') // getting the express framework to be able to expose endpoints and set up a sever
const cors = require('cors');

const mongoose = require('mongoose'); // Establish an ORM-ish connector to mongodb

require('dotenv').config(); // to setup and read environment variables (.env file) and convert those into process environment

const app = express(); // instantiate an express server application
const port = process.env.PORT || 5000;

//=====MIDDLEWARE==================
app.use(cors());
app.use(express.json()); // since the server will send and receive json
//=====================================================================

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo db connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// Now we can start the server application to listen to the port above
app.listen(port, () => {
    console.log(`Server started running at port: ${port}`)
});