document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = input.value.trim();
        if (message !== '') {
            socket.emit('chat message', message);
            input.value = '';
        }
    });

    socket.on('chat message', (msg) => {
        const item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        messages.scrollTop = messages.scrollHeight;
    });
});
