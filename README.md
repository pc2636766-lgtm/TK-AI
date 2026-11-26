# TK AI

Assistente de inteligência artificial com identidade própria, chat, voz e memória individual.

## Estado atual

Esta primeira versão contém a interface responsiva do chat e a estrutura inicial em React + TypeScript + Vite. A integração com o modelo de IA, autenticação, persistência de conversas, memória por usuário e recursos de voz ainda precisa ser configurada.

## Executar localmente

```bash
npm install
npm run dev
```

## Próximas etapas

1. Criar backend seguro para chamadas ao modelo de IA (a chave da API nunca deve ficar no navegador).
2. Configurar Supabase para autenticação, histórico e memória individual.
3. Implementar reconhecimento de fala e respostas em áudio.
4. Adicionar controles de privacidade para consultar e apagar memórias.

As chaves e credenciais devem ser configuradas como variáveis de ambiente no servidor e no provedor de hospedagem.
