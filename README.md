# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Tela de Login com Agendamento de Reunião
Este é um projeto React criado com Vite, que apresenta uma tela de login com agendamento de reuniões. O projeto utiliza styled-components para a estilização e possui animações para melhorar a experiência do usuário.

Funcionalidades
Navbar com Gradiente: A Navbar tem um fundo gradiente entre verde e roxo.
Animações: Itens na Navbar e no formulário possuem animações de sombra, opacidade e movimento.
Agendamento de Reunião: Um formulário para agendar reuniões que coleta dados do usuário, email, data e hora.
Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.
Vite: Ferramenta de construção rápida para projetos web modernos.
styled-components: Biblioteca para estilização de componentes React usando CSS-in-JS.
Estrutura do Projeto
plaintext
Copiar código
my-react-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── LoginForm.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
Como Executar o Projeto
Pré-requisitos
Node.js instalado
npm (Node Package Manager) ou yarn
npm i ou yarn install