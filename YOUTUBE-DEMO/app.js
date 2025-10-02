// express 모듈 셋팅
const express = require('express');
const app = express();
app.listen(3000);

// user-demo, channel-demo 가져오기
const userRouter = require('./routes/users.js')
const channelRouter = require('./routes/channels.js')

app.use("/", userRouter)
app.use("/channels", channelRouter)
