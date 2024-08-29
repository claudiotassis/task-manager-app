# Task Manager App

## Descrição

O **Task Manager App** é um aplicativo de gerenciamento de tarefas simples e eficiente desenvolvido com React e TypeScript. Este aplicativo permite que os usuários adicionem, visualizem, completem e excluam tarefas. Ele utiliza o Bootstrap para um design moderno e responsivo.

## Funcionalidades

- **Adicionar Tarefas:** Adicione novas tarefas com um título descritivo.
- **Listar Tarefas:** Visualize todas as tarefas em uma lista.
- **Completar Tarefas:** Marque tarefas como concluídas.
- **Excluir Tarefas:** Remova tarefas da lista.
- **Persistência de Dados:** Armazena tarefas localmente usando `localStorage`.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para criar interfaces de usuário.
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática.
- **Bootstrap:** Framework CSS para estilização e layout responsivo.
- **React-Bootstrap:** Componentes Bootstrap em React.

## Instalação

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/usuario/task-manager-app.git
   cd task-manager-app

2. **Instale as Dependências**

   ```bash
   npm install

3. **Instale as Dependências do Bootstrap bash**

   ```bash
   npm install react-bootstrap bootstrap
   npm install --save-dev @types/react-bootstrap

4. **Inicie o Servidor de Desenvolvimento**

   ```bash
   npm start

O aplicativo estará disponível em http://localhost:3000.

**Estrutura do Projeto**
```bash
task-manager-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Task.tsx
│   │   ├── TaskForm.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
│
├── package.json
├── tsconfig.json
└── README.md


