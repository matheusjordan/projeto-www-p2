class Chat {
    constructor(id, name, messages) {
        this.id = id;
        this.name = name;
        this.messages = messages;
        this.createdAt = new Date().toISOString();
    }
}

module.exports = Chat;