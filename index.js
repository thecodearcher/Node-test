const express = require('express');
const bodyParser = require('body-parser');

// init the app
const app = express();

// Import routes
const apiRoutes = require("./route/api-routes")

// configure BodyParser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


// setup server port
const port = process.env.PORT || 3000;

// register Api routes in the App
app.use('/', apiRoutes)

// Launch Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});