
# 📝 To-Do List CLI

Uma aplicação simples e interativa de lista de tarefas via linha de comando, feita com **Node.js**. Gerencie suas tarefas com facilidade: adicione, liste, edite e remova tarefas, tudo salvo em um arquivo JSON.

## 📦 Funcionalidades

- ✅ **Adicionar tarefas** com descrição personalizada.
- 📋 **Listar todas as tarefas** salvas.
- ✏️ **Editar tarefas** existentes.
- ❌ **Remover tarefas** da lista.
- 🧼 **Limpar a tela** do terminal.
- 💾 **Armazenamento persistente** com `tasks.json`.

## 🚀 Como usar

### Pré-requisitos

- Ter o [Node.js](https://nodejs.org/) instalado.

### Instalação

1️⃣ **Clone e acesse o repositório:**

```bash
git clone https://github.com/gabrielstkz/to-do-list.git
cd to-do-list
```

2️⃣ **Instale as dependências:**

```bash
npm install
```

3️⃣ **Execute o aplicativo:**

```bash
node index.js
```

## 📁 Estrutura do Projeto

```
to-do-list/
├── messages.js       # Funções auxiliares de mensagens de erro e sucesso
├── tasks.json        # Arquivo onde as tarefas são armazenadas
├── index.js          # Arquivo principal do projeto
├── package.json      # Configurações e dependências do projeto
└── README.md         # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [Chalk](https://www.npmjs.com/package/chalk)
- [File System (fs)](https://nodejs.org/api/fs.html)

## 📄 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

---

Feito por [gabrielstkz](https://github.com/gabrielstkz)
