
# Projeto Laravel + Vue 3 com Docker

Este projeto utiliza Laravel no backend e Vue 3 no frontend, integrados com Inertia.js. Todo o ambiente roda dentro de containers Docker para facilitar o desenvolvimento.

---

## Pré-requisitos

- Docker
- Docker Compose
- Node.js e npm (apenas para rodar comandos npm dentro do container, se preferir rodar local pode instalar localmente)

---

## Como rodar o projeto

### 1. Clone o repositório

```bash
git clone <url-do-seu-repositorio>
cd <nome-do-repositorio>
```

### 2. Inicie os containers Docker

```bash
docker-compose up -d
```

### 3. Instale as dependências do backend (Laravel)

Entre no container PHP (ajuste o nome conforme seu container):

```bash
docker exec -it seu-container-php bash
```

Dentro do container, rode:

```bash
composer install
php artisan key:generate
php artisan migrate
```

Saia do container com `exit`.

### 4. Instale as dependências do frontend (Vue 3)

Se preferir rodar dentro do container Node (se existir), ou localmente:

```bash
npm install
```

### 5. Compile os assets (usar Laravel Mix ou Vite)

Para desenvolvimento, rode:

```bash
npm run dev
```

Para build produção:

```bash
npm run build
```

Para observar em tempo real, rode:

```bash
npm run watch
```

### 6. Acesse o projeto no navegador

Abra [http://localhost](http://localhost) (ou a porta que seu Docker está expondo por ex: http://localhost:8000/)

---

## Comandos úteis

- Parar containers: `docker-compose down`
- Ver logs: `docker-compose logs -f`
- Rodar watch para recompilar assets automaticamente:

```bash
npm run watch
```

---

## Observações

- Caso use Docker com volume para o código, edite os arquivos localmente e o container já verá as mudanças.
- Configure permissões para a pasta `storage` do Laravel se tiver problemas.
- Ajuste as variáveis de ambiente no `.env` conforme necessário.
