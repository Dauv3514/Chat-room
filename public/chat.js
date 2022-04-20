const socket = io();

new Vue({
    el: '#app',
    data: {
        user: 'pseudo',
        pseudo: null,
        message: null,
        messages: []
    },
    methods: {
        send() {
            socket.emit('chat-message', {
                pseudo: this.pseudo,
                message: this.message,
                date: new Date().getTime()
            });

            this.message = null;
        },
        signIn() {
            if (!this.pseudo) {
                return ;
            }  

            this.user= 'chat';
        }
    },
    mounted() {
        socket.on('chat-message', (msg) => {
            this.messages.push(msg);

            setTimeout(() => {
                const chatContainer = document.querySelector(".chat-container");
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, 10);

        });
    }
});