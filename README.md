# Projeto de Aplicação de Chat

Este repositório contém 2 projetos que trabalham em conjunto para criar uma aplicação de chat:

1. **Client App (Frontend)**
   - Desenvolvido com Vue 3 + Vite
   - Interface moderna e responsiva
   - Gerenciamento de estado e eventos
   - Integração com API REST

2. **Server App (Backend)**
   - API REST com Node.js e Express
   - Gerenciamento de chats e mensagens
   - Arquitetura modular

## Configuração de Desenvolvimento

### Pré-requisitos
- Node.js 20.11.0 ou superior
- npm (Node Package Manager)

### Configuração dos Projetos

1. **Client App**
   ```sh
   cd client-app
   npm install
   ```

2. **Server App**
   ```sh
   cd server-app
   npm install
   ```

### Desenvolvimento

1. **Iniciar o Servidor (Backend)**
   ```sh
   cd server-app
   npm run dev
   ```
   O servidor estará disponível em: `http://localhost:3000`

2. **Iniciar o Cliente (Frontend)**
   ```sh
   cd client-app
   npm run dev
   ```
   A aplicação estará disponível em: `http://localhost:5173`


## Documentação Adicional

Para mais detalhes sobre cada projeto, consulte seus respectivos READMEs:
- [Client App README](./client-app/README.md)
- [Server App README](./server-app/readme.md)