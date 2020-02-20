const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const PORT = 3000;
const io = require('socket.io')(http);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


http.listen(PORT, () => {
    console.log('listening on port ', PORT);
})