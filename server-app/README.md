# Server App: Projeto Backend de Aplicação de Chat

Projeto de API Rest com Node.js e Express para gerenciamento de chats e mensagens.

### Tecnologias Utilizadas
- Node.js 20.11.0
- Express 4.19.2
- JavaScript (ES6+)

### Estrutura do Projeto
```
server-app/
├── src/
│   ├── config/              # Camada de Configuração da Aplicação
│   │   └── server-routes.js     # Configuração de Rotas
|   |   └── server.js            # Configuração do Server
│   │   
│   ├── database/            # Camada de persistência
│   │   └── db.js                # Base de dados
│   │   
│   ├── modules/             # Módulos da aplicação 
│   │   ├── chat/
│   │   │   ├── controller.js
│   │   │   ├── models.js
│   │   │   ├── repository.js
│   │   │   └── routes.js
│   │   └── messages/
│   │       ├── controller.js
│   │       ├── models.js
│   │       ├── repository.js
│   │       └── routes.js
│   └── tests.http            # Testes da API
```

### Estrutura dos Módulos
```
modules/
├── chat/
│   ├── controller.js   # Responsável por processar as requisições HTTP
│   ├── models.js       # Modelo de dados do módulo
│   ├── repository.js   # Responsável por persistir dados na base de dados
│   └── routes.js       # Configuração de do módulo
...
```

### Principais Classes

#### Chat
- **Controller**: Gerencia as requisições relacionadas a chats
  - `createChat`: Cria um novo chat
  - `getChats`: Lista todos os chats
  - `getChatById`: Busca um chat específico
  - `clearChat`: Limpa mensagens de um chat
  - `deleteChat`: Deleta um chat
  - `clearAllChats`: Limpa todos os chats
  - `updateChatName`: Atualiza o nome de um chat

- **Repository**: Implementa o padrão Singleton para acesso aos dados
  - Gerencia operações CRUD para chats
  - Mantém uma única instância do repositório

- **Model**: Define a estrutura de um chat
  ```javascript
  {
    id: string,
    message: string,
    createdAt: Date
  }
  ```

#### Mensagens
- **Controller**: Gerencia as requisições relacionadas a mensagens
  - `createMessage`: Cria uma nova mensagem
  - `getMessages`: Lista mensagens de um chat específico

- **Repository**: Implementa o padrão Singleton para acesso aos dados
  - Gerencia operações para mensagens
  - Mantém uma única instância do repositório

- **Model**: Define a estrutura de uma mensagem
  ```javascript
  {
    id: string,
    message: string,
    chatId: string,
    createdAt: Date
  }
  ```

### Endpoints da API

#### Chats
- `POST /chats` - Criar novo chat
- `GET /chats` - Listar todos os chats
- `GET /chats/:id` - Buscar chat específico
- `DELETE /chats/:id` - Limpar chat específico
- `DELETE /chats` - Limpar todos os chats
- `PATCH /chats/:id` - Atualiza o nome de um chat

#### Mensagens
- `POST /messages` - Criar nova mensagem
- `GET /messages/:chatId` - Listar mensagens de um chat

### Testes
O projeto inclui um arquivo `tests.http` com testes para todos os endpoints da API. Para executar os testes:
1. Inicie o servidor
2. Use o arquivo `tests.http` em seu IDE (ex: VS Code com extensão REST Client)
3. Execute os testes em sequência para validar o fluxo completo da aplicação

