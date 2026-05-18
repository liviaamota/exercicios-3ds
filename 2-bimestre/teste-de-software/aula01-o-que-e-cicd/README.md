# 📘 AULA 21: O QUE É CI/CD E COMO O CÓDIGO VAI DO COMPUTADOR ATÉ A PRODUÇÃO

## 🎯 Objetivos da aula

- Entender o significado de **CI/CD**.
- Conhecer o papel da automação no desenvolvimento moderno.
- Compreender o fluxo manual de deploy e o fluxo automatizado.
- Entender por que testes são essenciais.
- Visualizar como o código sai do computador até a produção.

# 🧠 O que significa CI/CD?

CI/CD são práticas modernas usadas para entregar software com mais **qualidade**, **segurança** e **velocidade**.

## 📌 CI = Continuous Integration

Em português:

> **Integração Contínua**
> 

Significa integrar mudanças no projeto constantemente.

Sempre que alguém envia código para o repositório, processos automáticos podem ser executados.

## 📌 CD = Continuous Delivery / Continuous Deployment

CD pode significar duas coisas:

### 🔹 Continuous Delivery

O sistema fica pronto para publicar.

### 🔹 Continuous Deployment

O sistema é publicado automaticamente após passar nas verificações.

# 🧠 Para saber se o código está bom...

É necessário testar.

Sem testes:

- bugs chegam ao usuário
- erros quebram produção
- mudanças causam medo

Com testes:

- problemas aparecem antes
- equipe tem confiança
- deploy fica mais seguro

# 🛡️ O CI/CD protege do quê?

CI/CD protege contra situações como:

- código quebrado entrando no sistema
- erro humano no deploy
- esquecer build
- esquecer reiniciar servidor
- publicar código sem testar

# 🔁 Processo do CI

Quando você faz push no repositório:

```bash
git push
```

Automaticamente pode ser engatilhada (triggered) uma sequência:

```
Push
↓
Rodar testes
↓
Rodar verificações
↓
Rodar build
↓
Rodar linter
```

# 🧪 O que o CI garante?

> O CI garante a qualidade do código.
> 

Porque ele verifica automaticamente se o projeto continua saudável.

# 🚀 Processo do CD

Após passar no CI:

```
Código aprovado
↓
Verifica branch correta
↓
Envia para servidor
↓
Sistema atualizado em produção
```

# ⚙️ Antes da automação: fluxo manual

Antes do CI/CD, o processo comum era:

```
Dev escreve código
↓
Testa manualmente
↓
Envia para repositório
↓
Acessa servidor via SSH
↓
git pull
↓
build
↓
reinicia servidor
↓
abre sistema e testa novamente
```

# ❌ Problema do fluxo manual

Se algo der errado:

```
Erro encontrado
↓
Corrigir código
↓
Push novamente
↓
Entrar no servidor de novo
↓
Repetir tudo
```

Muito tempo perdido.

# ✅ Fluxo moderno com CI/CD

```
Dev escreve código
↓
Cria testes
↓
Envia para repositório
↓
Pipeline CI/CD
↓
Testes automáticos
↓
Build
↓
Atualiza servidor staging
↓
Atualiza produção
```

# 🧠 O que é Staging?

Servidor intermediário.

Serve para testar antes da produção.

```
Local → Staging → Produção
```

# 📦 Exemplo real

Um site de vendas recebe nova funcionalidade.

Sem CI/CD:

- risco alto de quebrar checkout

Com CI/CD:

- testes rodam antes
- build validado
- deploy controlado