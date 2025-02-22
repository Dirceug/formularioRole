# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

│   │   └── 


FORMULARIOROLE2/
├── dist/                # Diretório de build (ou "build")
│   ├── index.html       # Arquivo de entrada após build
│   ├── assets/          # Outros arquivos estáticos
│   └── ...              # Outros arquivos gerados pelo build
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── routes/
├── firebase.json        # Configuração do Firebase Hosting
├── firestore.rules      # Regras do Firestore
├── firestore.indexes.json # Indexes do Firestore
├── public/
│   └── index.html       # Arquivo de entrada original (não utilizado no build)
├── vite.config.js
├── package.json