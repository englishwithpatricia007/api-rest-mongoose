# Projeto: Gráficos de Vendas Mensais

Este projeto é composto por um **frontend** e um **backend** que trabalham juntos para exibir gráficos de vendas mensais utilizando dados armazenados em um banco de dados MongoDB.

## Estrutura do Projeto

- **Frontend**: Localizado na pasta `frontend/`, é uma aplicação React configurada com Vite.
- **Backend**: Localizado na pasta `backend/`, é uma API REST desenvolvida com Node.js, Express e Mongoose.

---

## Tecnologias Utilizadas

### Frontend

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para desenvolvimento com React.
- **Chart.js**: Biblioteca para criação de gráficos.
- **React Chart.js 2**: Wrapper para integrar o Chart.js com React.
- **Firebase Authentication**: Serviço de autenticação para login e logout.
- **ESLint**: Ferramenta para análise de código e boas práticas.

### Backend

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework para criação de APIs REST.
- **Mongoose**: Biblioteca para modelagem de dados no MongoDB.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **CORS**: Middleware para habilitar o compartilhamento de recursos entre diferentes origens.

---

## Funcionalidades

### Backend

- **Endpoints**:
  - `POST /vendas`: Adiciona uma nova venda mensal.
  - `GET /vendas`: Retorna todas as vendas mensais.
  - `PUT /vendas/:id`: Atualiza uma venda mensal pelo ID.
  - `DELETE /vendas/:id`: Remove uma venda mensal pelo ID.
- **Banco de Dados**: MongoDB, com o modelo `VendaMensal` que contém os campos:
  - `mes`: Número do mês.
  - `valorVendido`: Valor total vendido no mês.

### Frontend

- **Gráfico de Vendas Mensais**:
  - Exibe os dados de vendas mensais em um gráfico de barras.
  - Consome os dados do backend através de uma requisição HTTP.
- **Autenticação com Firebase**:
  - Login e logout utilizando o Firebase Authentication.
  - Exibição do gráfico de vendas apenas para usuários autenticados.

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado.
- MongoDB configurado e rodando.
- Variável de ambiente `MONGO_URI` configurada no arquivo `backend/.env`.
- Configuração do Firebase Authentication no arquivo `frontend/src/firebaseConfig.js`.

### Backend

Navegue até a pasta backend/
`cd backend`

1. Instale as dependências
   `npm install`
2. Inicie o servidor
   `node server.js`

### Backend

Navegue até a pasta backend/
`cd frontend`

1. Instale as dependências
   `npm install`
2. Inicie o servidor de desenvolvimento
   `npm run dev`
