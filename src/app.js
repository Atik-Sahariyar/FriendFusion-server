const express = require("express");
require("dotenv").config();
const app = express();
const applyMiddleware = require('./middleware/applyMiddleware')
const globalErrorHandler = require("./utils/globalErrorHandler");


// require all routes
const jwtRoute = require("./routes/authentication/jwtRoute");
const creatNewUserRoute = require("./routes/users/creatNewUserRoute");
const getAdminRoute = require("./routes/users/getAdminRoute");
const addPostRoute = require("./routes/posts/addPostRoute");
const getUsersRoute = require("./routes/users/getUsersRoute");
const getPostCountRoute = require("./routes/posts/getPostCountRoute");
const getMyPostsRoute = require("./routes/posts/getMyPostsRoute");
const deletePostRoute = require("./routes/posts/deletePostRoute");
const getAllPostsRoute = require("./routes/posts/getAllPostsRoute");
const updatePostRoute = require("./routes/posts/updatePostRoute");
const getPopularPostsRoute = require("./routes/posts/getPopularPostsRoute");
const getOnePostRoute = require("./routes/posts/getOnePostRoute");
const postCommentRoute = require("./routes/comments/postComment");
const getCommentsRoute = require("./routes/comments/getCommentRooute");
const makeAdminRoute = require("./routes/users/makeAdminRoute");
const postAnnouncementsRoute = require("./routes/announcments/postAnnouncementsRoute");
const getAnnnouncementsRoute = require("./routes/announcments/getAnnouncementsRoute");
const updateCommentRoute = require("./routes/comments/updateComment");
const getReportedCommentsRoute = require("./routes/comments/getReportedCommentsRoute");
const paymentSaveRoute = require("./routes/paymentRoutes/paymentSaveRoute");
const createPaymentIntentRoute = require("./routes/paymentRoutes/createPaymentIntent");
const updateUserRoute = require("./routes/users/updateUserRoute");
const getMemberRoute = require("./routes/users/getMemberUser");
const adminStatsRoute = require("./routes/admin/adminStats");




//middileare
applyMiddleware(app);
// -----------------------------------
// authentication routes
app.use(jwtRoute);

// user related api routes
app.use(creatNewUserRoute);
app.use(getAdminRoute);
app.use(getUsersRoute);
app.use(makeAdminRoute);
app.use(updateUserRoute);
app.use(getMemberRoute);


// announcements related api routes
app.use(postAnnouncementsRoute);
app.use(getAnnnouncementsRoute);

// posts related api routes
app.use(addPostRoute);
app.use(getPostCountRoute);
app.use(getMyPostsRoute);
app.use(deletePostRoute);
app.use(getAllPostsRoute);
app.use(updatePostRoute);
app.use(getPopularPostsRoute);
app.use(getOnePostRoute);

// comments related api routes
app.use(postCommentRoute);
app.use(getCommentsRoute);
app.use(updateCommentRoute);
app.use(getReportedCommentsRoute);

// payment related api routes
app.use(createPaymentIntentRoute)
app.use(paymentSaveRoute);

// admin related api routes
app.use(adminStatsRoute)
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

// const main = async () => {
//     await connectToDB();
//     app.listen(port, () => {
//         console.log(`FriendFusion Server is running on port : ${port}`);
//     });

// }
// main();

module.exports = app;
