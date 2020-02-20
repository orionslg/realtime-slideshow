const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const PORT = 3000;
const io = require('socket.io')(http);

app.use(express.urlencoded({ extended: false }));
app.use(cors());

io.on('connection', function(socket){
    socket.on('nextSlide', (slide) => {
        io.emit('changeSlide', slide);
    })

    socket.on('previousSlide', (slide) => {
        io.emit('changeSlide', slide)
    })
})

http.listen(PORT, () => {
    console.log('listening on port ', PORT);
})