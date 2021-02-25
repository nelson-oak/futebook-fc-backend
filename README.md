# Futebook FC - API

Uma API de uma rede social para falar de futebol.
Projeto criado para ensinar um amigo a programar em Node.js e Typescript

## Entidades

| Entidades | Atributos |
| - | - |
| users | id, name, email, password, created_at, updated_at |
| teams | id, name, created_at, updated_at |
| posts | id, description, likes, dislikes, team_id, created_at, updated_at |
| comments | id, description, likes, dislikes, created_at, updated_at |
| tags | id, name, created_at, updated_at |
| post_tag | id, post_id, tag_id, created_at, updated_at |

## Funcionalidades

- Cadastro e alteração de usuários
- Cadastro, listagem, filtros, alteração e exclusão de posts
- Cadastro, alteração e exclusão de comentários
- Cadastro de times
- Cadastro de tags

## Recursos

- Express

## Iniciando o projeto

Após clonar o projeto, é necessário atualizar as dependências.

### Comandos para baixar dependências e iniciar a aplicação

```bash
yarn
yarn dev:server
```

### Configurações adicionais
