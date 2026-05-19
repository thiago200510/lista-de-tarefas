#  Lista de Tarefas

Projeto desenvolvido como atividade prática da disciplina de Desenvolvimento de Sistemas, com o objetivo de aplicar os conceitos de versionamento de código utilizando Git e GitHub.

## Objetivo

Criar um miniprojeto web simples que demonstre o uso de boas práticas de versionamento, incluindo commits organizados, branches, issues e pull requests.

## Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| Adicionar tarefa | O usuário digita uma tarefa e clica em "Adicionar" ou pressiona Enter |
| Marcar como concluída | Clique sobre o texto da tarefa para marcar/desmarcar como concluída |
| Remover tarefa | Botão "✕" ao lado de cada tarefa para removê-la da lista |
| Persistência de dados | As tarefas são salvas no `localStorage` do navegador |
| Contador de tarefas | Exibe quantas tarefas foram concluídas do total cadastrado |

## Tecnologias Utilizadas

- **HTML5** — estrutura da página
- **CSS3** — estilização e layout responsivo
- **JavaScript (ES6+)** — lógica de interação e manipulação do DOM

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/thiago200510/lista-de-tarefas.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd lista-de-tarefas
   ```
3. Abra o arquivo `index.html` diretamente no navegador.

## Estrutura do Projeto

```
lista-de-tarefas/
├── index.html   # Estrutura HTML da aplicação
├── style.css    # Estilos e layout visual
├── app.js       # Lógica JavaScript da aplicação
└── README.md    # Documentação do projeto
```

## Práticas de Git Aplicadas

- Commits organizados e descritivos seguindo boas práticas
- Uso de branches para desenvolvimento de funcionalidades isoladas
- Criação e resolução de issues com referência nos commits
- Pull Request para integração das alterações ao branch principal


