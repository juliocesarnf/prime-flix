# Projeto Prime Flix

Este projeto é um sistema de gerenciamento de filmes que busca os filmes em destaque em uma API e permite ao usuário visualizar informações e salvar títulos.

## Indice

1. [Funcionalidades](#Funcionalidades).
2. [Tecnologias](#Tecnologias).
3. [Como Rodar](#Como-Rodar).
4. [Como Usar](#Como-Usar).
5. [Contato](#Contato).

## Funcionalidades

- Visualizar os dez principais filmes do momento.
- Salvar filmes, adicionando-os à aba de favoritos.
- Redirecionamento para o trailer dos filmes no YouTube.
- Excluir filmes salvos da lista.

##Tecnologias

- TypeScript
- React
- Tailwind CSS

## Como Rodar

Para rodar este projeto localmente, siga estas etapas:

1. Clone o repositório:
   git clone https://github.com/juliocesarnf/prime-flix
2. Acesse o diretório do projeto.
3. Obtenha uma chave da API The Movie DB.
4. Abra `src/service/api.ts` e substitua `'SUA_CHAVE_API'` pela sua chave.
5. Instale as dependências:
   npm install
6. Faça o build:
   npm run build
7. Rode o preview de produção:
   npm run preview

## Como Usar

- Ao acessar, você verá uma lista com os dez filmes mais populares do momento.
- No header:
  - **Prime Flix**: retorna à página inicial.
  - **Meus Filmes**: abre a lista de favoritos.
- Na home:
    - **Acessar**: exibe informações detalhadas.
- Na página de detalhes do filme:
  - **Trailer**: abre o YouTube com a busca pelo trailer do filme.
  - **Salvar**: adiciona o filme aos favoritos.
- Em **Meus Filmes**:
  - **Excluir**: remove o filme da lista.
  - **Detalhes**: volta para a página do filme.

## Contato

Julio Cesar Martins de Souza - julio2001nf@gmail.com

Link do Projeto: https://github.com/juliocesarnf/prime-flix
