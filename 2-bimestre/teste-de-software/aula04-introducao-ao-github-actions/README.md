# 📘 AULA 24: INTRODUÇÃO AO GITHUB ACTIONS, CRIANDO PRIMEIRO WORKFLOW E FAZENDO BUILD DA APLICAÇÃO NO PIPELINE

## 🎯 Objetivos da aula

- Entender o que é GitHub Actions.
- Criar o primeiro workflow.
- Aprender estrutura básica de arquivo YAML.
- Executar build automático com Node.js.
- Relacionar push com automação real.

# 🧠 O que é GitHub Actions?

GitHub Actions é a ferramenta de automação do GitHub.

Ela permite:

- rodar testes
- fazer build
- publicar aplicações
- executar tarefas automáticas

Tudo dentro do repositório.

# 📁 Onde fica o workflow?

Dentro da pasta:

```
.github/workflows/
```

Exemplo:

```
.github/workflows/main.yml
```

# 🧠 O que é YAML?

YAML é formato de texto usado para configuração.

Exemplo:

```yaml
name: Meu Pipeline
on: push
```

# 🧱 Estrutura básica de workflow

```yaml
name: CI

on:
  pull_request:
    branches:
      - develop

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout no código
        uses: actions/checkout@v4

      - name: Instalar o Node
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Instala dependências
        run: npm install

      - name: Roda os testes
        run: npm test
```

# 🔎 Explicando linha por linha

## name

Nome visível do pipeline.

```yaml
name: CI
```

## on

Quando executa.

```yaml
on:
  push:
```

👉 Toda vez que fizer push.

## jobs

Lista de tarefas.

```yaml
jobs:
```

## runs-on

Sistema operacional da máquina virtual.

```yaml
runs-on: ubuntu-latest
```

## steps

Passos do processo.

# 📦 Workflow completo com Build

```yaml
name: CI

on:
  pull_request:
    branches:
      - develop

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout no código
        uses: actions/checkout@v4

      - name: Instalar o Node
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Instala dependências
        run: npm install

      - name: Roda os testes
        run: npm test
        
 build:
   runs-on: ubuntu-latest
   needs: test
   steps:
      - name: Checkout no código
        uses: actions/checkout@v4

      - name: Instalar o Node
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Instala dependências
        run: npm install

      - name: Roda os build
        run: npm run build
```

# 📘 Códigos Git, para não esquer!

```
# Enviar para o Github:
git status
git add .
git commit -m "ci: adiciona workflow de testes automáticos"
git push origin develop

# Criar uma branch nova:
git branch feature/atualiza-readme
git branch
git switch feature/atualiza-readme

# Puxar as alterações da branch
git branch switch develop
git pull

# Deletar branch
git branch
git branch -D feature/atualiza-readme
git branch
git branch ci/add-build-job
git switch ci/add-build-job
git status
git add .
git commit -m "ci: add build job"
git push origin ci/add-build-job
```

# 🧠 O que acontece ao fazer push?

```
Push no GitHub
↓
GitHub Actions inicia
↓
Cria máquina Ubuntu
↓
Instala Node
↓
Instala dependências
↓
Executa build
```

# 📌 Exemplo de package.json

```json
{
  "scripts": {
    "build": "echo Build realizado com sucesso"
  }
}
```

# ✅ Resultado esperado

No GitHub:

```
✔ Workflow executado com sucesso
```

# ❌ Erro comum

```
npm ERR! missing script: build
```

Significa que faltou:

```json
"build": "..."
```