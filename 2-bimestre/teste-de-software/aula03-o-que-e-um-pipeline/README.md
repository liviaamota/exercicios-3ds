# 📘 AULA 23: O QUE É UM PIPELINE E COMO ELE FUNCIONA

## 🎯 Objetivos da aula

- Entender o que é um **pipeline** no contexto de CI/CD.
- Compreender as etapas automáticas de validação de software.
- Conhecer o fluxo desde o push até a entrega.
- Entender por que pipelines reduzem erros.
- Visualizar exemplos reais de uso.

# 🧠 O que é Pipeline?

Pipeline é uma **sequência automática de etapas** executadas quando algo acontece no projeto.

Exemplo:

```
Primeiro executado o gatilho)
Trigger (gatilho):

	 Depois é executado uma tarefa. Cada job é executado em uma máquina nova, ou seja, executado o job de test, a máquina é excluída.
	Job: test
	
		E a seguir, executado os passos, chamados de steps
		- ir até a branch (checkout/switch)
		- Instalar dependências (npm install)
		- Rodar testes (npm test)
		
  Job: build
	  - checkout/switch
	  - npm install
	  - npm run build
	  - salvar dist/
	  Isso cria o chamado "artifact" ou artefato, que pode ser utilizado para o próximo job
	  
	 Job: deploy
		 - baixar artifact
		 - envia o ssh
		 - restart app
```

👉 Em resumo:

> Pipeline = linha de produção automática do software.
> 

# 🏭 Comparando com fábrica

Imagine uma fábrica de carros:

```
Montagem
↓
Inspeção
↓
Teste
↓
Entrega
```

No software:

```
Código
↓
Testes
↓
Build
↓
Deploy
```

# 🔎 Quando o pipeline roda?

Geralmente quando acontece:

- `push`
- `pull request`
- merge na branch principal
- agendamento automático
- publicação manual

# 📌 Exemplo real

Você altera um botão no sistema e faz:

```bash
git push
```

Automaticamente o pipeline pode:

- instalar pacotes
- testar login
- testar API
- gerar versão pronta

# 🧱 Etapas comuns de um Pipeline

## 1️⃣ Checkout do código

Baixa os arquivos do repositório.

## 2️⃣ Instalação de dependências

Exemplo:

```bash
npm install
```

## 3️⃣ Testes automatizados

Exemplo:

```bash
npm test
```

## 4️⃣ Build

Gera versão final:

```bash
npm run build
```

## 5️⃣ Deploy (quando configurado)

Publica site ou sistema.

# ⚠️ Se uma etapa falhar?

O pipeline para.

Exemplo:

```
Teste falhou
↓
Build não continua
↓
Erro detectado cedo
```

Isso evita código quebrado em produção.

# 📦 Exemplo visual de pipeline

```
Push realizado
✅ Instala dependências
✅ Testes passaram
✅ Build concluído
🚀 Pronto para entrega
```

# ❌ Exemplo com erro

```
Push realizado
✅ Instala dependências
❌ Teste login falhou
⛔ Pipeline encerrado
```

# 🧠 Benefícios do pipeline

- Automatiza tarefas repetitivas
- Detecta erro rápido
- Padroniza qualidade
- Economiza tempo
- Dá confiança para publicar

# 📌 Pipeline em projetos pequenos

Mesmo projeto simples pode usar pipeline.

Exemplo:

- site pessoal
- sistema escolar
- API simples
- portfólio