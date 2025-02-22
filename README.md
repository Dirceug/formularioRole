# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

│   │   └── 


FORMULARIOROLE2/
├── src/
│   ├── components/
│   │   ├── FormularioCadastro.jsx
│   │   ├── ExibicaoProdutos.jsx
│   │   ├── PedidosFeitos.jsx
│   │   ├── InsercaoPix.jsx
│   │   ├── Login.jsx
│   │   └── Navegacao.jsx
│   ├── pages/            # Componentes de página (rotas)
│   │   ├── Cadastro.jsx   # Wrapper para FormularioCadastro
│   │   ├── Cardapio.jsx   # Wrapper para ExibicaoProdutos
│   │   ├── Comanda.jsx # Wrapper para ExibicaoProdutosFeitos
│   │   ├── Pix.jsx # Wrapper para InsercaoPix
│   │   └── Home.jsx # Wrapper para Login
│   ├── App.jsx            # Componente principal (rotas)
│   ├── main.jsx           # Ponto de entrada
│   ├── index.css          # Estilos globais
│   └── routes/            # Arquivo de rotas
│       └── routes.jsx
├── firebase.js            # Arquivo de configuração do firebase
│    
├── public/
│   └── index.html
├── vite.config.js       # Configuração do Vite
├── package.json         # Dependências do projeto