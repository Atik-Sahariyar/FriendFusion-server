const express = require("express");
require("dotenv").config();
const app = express();
const applyMiddleware = require('./middleware/applyMiddleware')
const globalErrorHandler = require("./utils/globalErrorHandler");
const connectToDB = require("./config/database");
const port = process.env.PORT || 5000;

// require all routes
const jwtRoute = require("./routes/authentication/jwtRoute");
const creatNewUserRoute = require("./routes/users/creatNewUserRoute");
const getAdminRoute = require("./routes/users/getAdminRoute");
const addPostRoute = require("./routes/posts/addPostRoute");
const getUsersRoute = require("./routes/users/getUsersRoute");
const getUserPostsRoute = require("./routes/posts/getUserPostsRoute");


//middileare
applyMiddleware(app);
// -----------------------------------
// authentication routes
app.use(jwtRoute);

// user related api routes
app.use(creatNewUserRoute);
app.use(getAdminRoute);
app.use(getUsersRoute);

// posts related api routes
app.use(addPostRoute);
app.use(getUserPostsRoute);

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