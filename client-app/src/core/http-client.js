// Arquivo de configuração do http-client para a aplicação utilizando fetch do javascript
const BASE_URL = 'http://localhost:3000'
const httpClient = {
    get: async (url) => {
        const response = await fetch(`${BASE_URL}${url}`)
        return response.json()
    },
    post: async (url, data) => {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return response.json()
    },
    put: async (url, data) => {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return response.json()
    },
    delete: async (url) => {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'DELETE'
        })
        return response.json()
    },
}

export default httpClient;