const express = require("express");
require("dotenv").config();
const app = express();
const applyMiddleware = require('./middleware/applyMiddleware')
const globalErrorHandler = require("./utils/globalErrorHandler");
const connectToDB = require("./config/database");
const jwtRoute = require("./routes/authentication/jwtRoute");
const port = process.env.PORT || 5000;


//middileare
applyMiddleware(app);
// -----------------------------------
// authentication route
app.use(jwtRoute);


// ------------------------------------
app.get('/', (req, res) => {
    res.send('FriendFusion server is running');
});


// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
});

// error handling middleware
app.use(globalErrorHandler);

const main = async () => {
    await connectToDB();
    app.listen(port, () => {
        console.log(`FriendFusion Server is running on port : ${port}`);
    });

}
main();