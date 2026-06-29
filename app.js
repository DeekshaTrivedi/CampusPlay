const express = require("express");
const cors = require("cors");
const path = require("path");
const signupRoute = require("./modules/auth/signup/signup.route");
const loginRoute = require("./modules/auth/login/login.route");
const meRoute = require("./modules/auth/me/me.route");
const authMiddleware = require("./middleware/auth.middleware");
const userRoute = require("./modules/user/user.route");
const adminRoute = require("./modules/admin/admin.route");
const createPollRoute = require("./modules/poll/createPoll/createPoll.route");
const joinPollRoute = require("./modules/poll/joinPoll/joinPoll.route");
const leavePollRoute = require("./modules/poll/leavePoll/leavePoll.route");
const deletePollRoute = require("./modules/poll/deletePoll/deletePoll.route");
const getPollsRoute = require("./modules/poll/getPolls/getPolls.route");
const getSportStatsRoute = require("./modules/poll/getPolls/getSportStats.route");
const chatRoute = require("./modules/chat/chat.route");
const sportRoute = require("./modules/sport/sport.route");
const friendRoute = require("./modules/friend/friend.route");
const notificationRoute = require("./modules/notification/notification.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth/signup", signupRoute);
app.use("/api/auth/login", loginRoute);
app.use("/api/auth/me", meRoute);
app.use("/api/users", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/polls/create", createPollRoute);
app.use("/api/polls/join", joinPollRoute);
app.use("/api/polls/leave", leavePollRoute);
app.use("/api/polls/delete", deletePollRoute);
app.use("/api/polls", getPollsRoute);
app.use("/api/polls", getSportStatsRoute);
app.use("/api/chat", chatRoute);
app.use("/api/sports", sportRoute);
app.use("/api/friends", friendRoute);
app.use("/api/notifications", notificationRoute);


app.get("/", (req, res) => {
    res.send("CampusPlay backend is running");
});


app.get("/protected", authMiddleware, (req, res) => {
    res.json({
        success: true,
        message: "You are authorized",
        user: req.user,
    });
});

module.exports = app;
