import httpClient from '../core/http-client'

const apiService = {
    // Chat endpoints
    chats: {
        create: (name) => httpClient.post('/chats', { name }),
        getAll: () => httpClient.get('/chats'),
        getById: (id) => httpClient.get(`/chats/${id}`),
        updateName: (id, name) => httpClient.patch(`/chats/${id}`, { name }),
        delete: (id) => httpClient.delete(`/chats/${id}`),
        clearAll: () => httpClient.delete('/chats')
    },

    // Message endpoints
    messages: {
        create: (data) => httpClient.post('/messages', data),
        getByChatId: (chatId) => httpClient.get(`/messages/${chatId}`)
    }
}

export default apiService