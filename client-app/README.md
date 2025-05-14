# Client App: Frontend da Aplicação de Chat

### Tecnologias Utilizadas
- Vue 3
- Vite
- JavaScript (ES6+)
- Vue Router

### Estrutura do Projeto
```
client-app/
├── src/
│   ├── assets/             # Estilos da aplicação
│   │   ├── base.css            # Estilos base da aplicação
│   │   ├── main.css            # Estilos principais
│   │
│   ├── components/         # Componentes Vue reutilizáveis
│   │   ├── NavBar.vue          # Barra de navegação
│   │   ├── ChatPage.vue        # Página principal de chat
│   │   └── AboutMe.vue         # Componente Sobre
│   │
│   ├── core/               # Arquivos principais da aplicação
│   │   ├── http-client.js    # Serviço para requisições HTTP 
│   │   └── event-mitt.js     # Gerenciador de eventos assíncronos
│   │
│   ├── router/             # Configuração de rotas
│   │   └── index.js            # Definição das rotas da aplicação
│   │
│   ├── services/           # Serviços de API
│   │   └── api-service.js      # Serviço HTTP de requisições a API
│   │
│   ├── App.vue         # Componente raiz da aplicação
│   └── main.js         # Ponto de entrada da aplicação
```

### Principais Funcionalidades
- Interface em formato de chat
- Histórico de mensagens
- Gerenciamento de chats
- Navegação entre páginas
- Sistema de eventos

### Integração com API
A aplicação integra com os seguintes endpoints:

#### Chats
- `POST /chats` - Criar novo chat
- `GET /chats` - Listar todos os chats
- `GET /chats/:id` - Buscar chat específico
- `PATCH /chats/:id` - Atualizar nome do chat
- `DELETE /chats/:id` - Deletar chat específico
- `DELETE /chats` - Limpar todos os chats

#### Mensagens
- `POST /messages` - Criar nova mensagem
- `GET /messages/:chatId` - Listar mensagens de um chat
