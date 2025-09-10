# fastify-f1-api

> Uma API minimalista da Fórmula 1, construída com Node.js e Fastify para operações CRUD eficientes.

## 🚀 Tecnologias

* **[Node.js](https://nodejs.org/)**: Ambiente de execução para JavaScript.
* **[Fastify](https://www.fastify.io/)**: Framework web minimalista e de alta performance.
* **[Pino](https://github.com/pinojs/pino)**: Logger super rápido, ideal para APIs que precisam de performance.
* **[dotenv](https://github.com/motdotla/dotenv)**: Módulo para carregar variáveis de ambiente de um arquivo `.env`.

---

## ⚙️ Instalação e Uso

Siga os passos abaixo para rodar a API em sua máquina local.

### Pré-requisitos
* Node.js (versão 18 ou superior)
* npm (gerenciador de pacotes do Node.js)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/fastify-f1-api.git](https://github.com/seu-usuario/fastify-f1-api.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd fastify-f1-api
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

A API estará rodando em `http://localhost:3000`.

---

## 🛣️ Endpoints da API

A API fornece os seguintes endpoints para gerenciar dados de pilotos da Fórmula 1.

### Pilotos (Drivers)

#### `GET /api/drivers`
* **Descrição**: Retorna a lista de todos os pilotos.
* **Exemplo de Resposta**:
    ```json
    [
        {
            "id": "1",
            "name": "Lewis Hamilton",
            "team": "Mercedes",
            "carNumber": "44"
        },
        {
            "id": "2",
            "name": "Max Verstappen",
            "team": "Red Bull Racing",
            "carNumber": "1"
        }
    ]
    ```

#### `GET /api/drivers/:id`
* **Descrição**: Retorna os dados de um único piloto pelo ID.
* **Exemplo de Resposta**:
    ```json
    {
        "id": "1",
        "name": "Lewis Hamilton",
        "team": "Mercedes",
        "carNumber": "44"
    }
    ```

#### `POST /api/drivers`
* **Descrição**: Adiciona um novo piloto.
* **Corpo da Requisição (JSON)**:
    ```json
    {
        "name": "Charles Leclerc",
        "team": "Ferrari",
        "carNumber": "16"
    }
    ```

#### `PUT /api/drivers/:id`
* **Descrição**: Atualiza as informações de um piloto existente.
* **Corpo da Requisição (JSON)**:
    ```json
    {
        "team": "Ferrari",
        "carNumber": "55"
    }
    ```

#### `DELETE /api/drivers/:id`
* **Descrição**: Remove um piloto pelo ID.

---

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir [issues](link-para-issues) ou enviar [pull requests](link-para-pull-requests) para melhorar este projeto.

## 📜 Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais informações.

## 📧 Contato

Bruna Guimarães  - https://github.com/BruninhaG. 
