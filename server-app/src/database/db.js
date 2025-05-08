const messages = [
    {
        id: "1",
        message: "Hello from the first message!",
        chatId: "1",
        createdAt: new Date().toISOString()
    },
    {
        id: "2",
        message: "This is a reply in the first chat",
        chatId: "1",
        createdAt: new Date().toISOString()
    },
    {
        id: "3",
        message: "First message in second chat",
        chatId: "2",
        createdAt: new Date().toISOString()
    }
];


const chats = [
    {
        id: "1",
        name: "Chat 1",
        messages: messages.filter(message => message.chatId === "1"),
        createdAt: new Date().toISOString()
    },
    {
        id: "2",
        name: "Chat 2",
        messages: messages.filter(message => message.chatId === "2"),
        createdAt: new Date().toISOString()
    }
];

module.exports = { chats, messages };