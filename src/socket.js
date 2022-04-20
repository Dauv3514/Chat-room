module.exports = (http) => {
    
    const io = require('socket.io')(http);

    io.on('connection', (socket) => {

        console.log('user connecté');

        // evenement (reception d'un msg envoyé par le client). 

        socket.on('chat-message', (msg => {

            // tout le monde va recevoir le message

            io.emit('chat-message', msg);

        }));

        socket.on('disconnect', () => {

            console.log('user deconnecté');

        });

    });

}