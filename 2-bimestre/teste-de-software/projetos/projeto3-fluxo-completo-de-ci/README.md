# 📘 PROJETO 3: SIMULANDO UM FLUXO COMPLETO DE CI COM BRANCHES E PULL REQUESTE

# 🧩 PROBLEMA

Você faz parte de uma equipe que está desenvolvendo um sistema web.

A equipe decidiu organizar o projeto usando:

- branches
- Pull Requests
- pipeline automático de CI

Seu trabalho será preparar um repositório seguindo o fluxo da equipe.

# 📋 PROJETO

O projeto atualmente possui apenas a branch principal (main) e nenhum processo automático.

Você deverá:

- criar branches corretamente
- simular fluxo de feature
- configurar pipeline básico
- preparar Pull Request
- garantir que o build rode automaticamente

# 📌 REQUISITOS

**Esse projeto deve ser feito em um repositório novo**, ou seja, não é para ser feito no repositório “Forkado”!

O nome do repositório deverá ser: **`projeto3-fluxo-completo-de-ci`**.

# ✅ Requisito 1 — Criar branch develop

O projeto deve possuir uma branch:

develop

Ela representará a branch de integração/staging.

# ✅ Requisito 2 — Criar branch de funcionalidade

Criar uma branch:

feature/(nome da funcionalidade)

Essa branch deve conter uma alteração no script do projeto.

# ✅ Requisito 3 — Criar workflow do GitHub Actions

Criar o arquivo:

.github/workflows/main.yml

O workflow deve:

- rodar no push
- instalar dependências
- rodar build

# ✅ Requisito 4 — Criar script de build

No package.json deve existir:

"build": "echo Build executado com sucesso"

# ✅ Requisito 5 — Simular Pull Request

O aluno deve:

- abrir Pull Request
- usar:
    - Base: develop
    - Compare: feature/(nome da funcionalidade)

**Atenção: não apague a branch feature!**

# **🧠 Fluxo esperado**

```
main
↓
develop
↓
feature/test
↓
Pull Request
↓
GitHub Actions roda pipeline
```

# 📦 Estrutura esperada do projeto

```
projeto
┣ .github
┃ ┗ workflows
┃   ┗ main.yml
┣ package.json
┣ README.md
```

Boas práticas! 🤙