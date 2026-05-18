# 📘 AULA 22: GIT FLOW, ESTRATÉGIAS DE BRANCH, PULL REQUESTS E CODE REVIEWS NO FLUXO DE CI

## 🎯 Objetivos da aula

- Entender o papel das branches em projetos reais.
- Conhecer branches principais de um fluxo profissional.
- Aprender o que é Pull Request.
- Entender como revisão humana e automação trabalham juntas.
- Relacionar branches com gatilhos de CI.

# 🧠 O que são branches?

Branch é uma linha paralela de desenvolvimento.

Permite trabalhar sem mexer direto na principal.

# 🌳 Principais branches de um projeto

## 🔹 main

Branch principal.

```
Versão estável / produção
```

## 🔹 feature/*

Branch específica de funcionalidade.

Exemplos:

```
feature/login
feature/dashboard
feature/cadastro
```

## 🔹 hotfix/*

Usada para corrigir erros urgentes em produção.

Exemplo:

```
hotfix/pagamento
```

## 🔹 develop

Branch de integração / staging.

Onde novidades são reunidas antes da produção.

# 🧠 Exemplo visual

```
main
 └── produção

develop
 └── integração

feature/login
feature/menu

hotfix/erro-checkout
```

# ⚙️ Gatilhos automáticos por branch

Cada branch pode disparar ações diferentes.

## 📌 Push na main

```
Rodar testes
Rodar linter
Rodar build
Atualizar servidor
```

## 📌 Push em feature/*

```
Rodar testes
Rodar linter
Rodar build
```

(sem publicar)

## 📌 Pull Request para main

```
Rodar testes
Validar merge
Esperar revisão
```

# 🔎 O que é Pull Request (PR)?

É uma requisição para pegar código de uma branch e misturar com outra.

Exemplo:

```
feature/test → develop
```

Ou:

```
develop → main
```

# 🧭 Passo a passo do Pull Request

## 1️⃣ Criar branch develop

No GitHub.

## 2️⃣ Criar branch feature/test

Alterar algo simples, como README.

## 3️⃣ Notificação aparece

Na branch principal pode surgir botão:

```
Compare & pull request
```

## 4️⃣ Abrir menu Pull Requests

Selecionar:

```
Base: develop
Compare: feature/test
```

## 5️⃣ Enviar PR

Agora existe uma solicitação aberta.

# 🧠 O que aparece no PR?

Na aba Conversation normalmente aparece:

- comentários
- histórico
- pipeline rodando
- botão:

```
Merge pull request
```

# 👀 O que é Code Review?

Antes do merge, alguém revisa:

- lógica
- clareza
- organização
- segurança
- bugs possíveis

# 🤝 PR une duas forças

## 🔹 Verificação automática

Pipeline CI.

## 🔹 Revisão humana

Code Review.

# 📌 Exemplo real

```
Dev cria feature/login
↓
Abre PR para develop
↓
CI roda testes
↓
Professor / líder revisa
↓
Merge aprovado
```

# ⚠️ Problemas sem PR

- código entra sem revisão
- bugs passam
- equipe perde padrão
- difícil acompanhar mudanças