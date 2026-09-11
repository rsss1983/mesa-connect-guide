# Manual de Integração — Voltar e Introdução Fechada

## O que será feito

1. Adicionar um botão "Voltar" no topo da página `/manual` que leva o visitante de volta à página inicial (`/`).
2. Fazer com que a caixa da introdução inicie fechada ao abrir a página. Hoje ela abre automaticamente.

## Mudanças técnicas

- Em `src/routes/manual.tsx`:
  - Trocar o estado inicial `openId` de `STEPS[0].id` para `null` (nenhum passo aberto).
  - Incluir um botão/link de voltar no cabeçalho, posicionado à esquerda do título/logo ou no topo do conteúdo, usando o componente `Link` do `@tanstack/react-router`.
  - Manter o estilo visual da página (cores douradas, tipografia serifada, bordas arredondadas).

## Validação

- `bun run build` deve passar.
- Verificar no preview se a introdução começa fechada e se o botão "Voltar" leva à página inicial.
