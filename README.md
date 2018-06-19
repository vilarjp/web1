# Repositório para a disciplina de Desenvolvimento de Sistemas Web 1

> Projeto de rede de apoio para mulheres

## Comandos para rodar o projeto de forma local

``` bash
# Clonar o projeto
git clone https://github.com/vilarjp/web1

# Alterar para a branch gh-pages
git checkout gh-pages

# Entrar na página do projeto
cd web1

# Instalar as dependências (É preciso ter o nodejs e o npm instalados previamente)
npm install

# Rodar o servidor no localhost:8080 (Ambiente de desenvolvimento)
npm run dev

# Montar o código para a versão de produção (versão minificada)
1. npm run build
2. após a criação da pasta "dist" é necessário rodar a página em um servidor HTTP (github pages, Apache etc)

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
