# Mesa Connect — nova página inicial

A página inicial passa a ser a Mesa Connect: uma página curta, acolhedora e feita para o celular. O Manual de Integração continua existindo, apenas muda de endereço para `/manual`, e a nova página inicial terá um link para ele.

## O que a nova página inicial terá

**Menu no topo**
Logo da MESA e atalhos: Início, Grupo de Conexão, Atendimento Pastoral, Contribua. Em celular vira um menu compacto.

**1. Boas-vindas**
Título acolhedor e a frase "Bem-vindo à Mesa Connect. Um lugar de conexão e pertencimento onde quer que você esteja."
Dois botões: "Participar do Grupo" e "Falar com o Pastor".

**2. Nosso Encontro Semanal**
Card em destaque para o grupo de conexão: Terças-feiras, às 09:00, online. Texto convidativo sobre comunhão e Palavra, com um contador simples mostrando quanto falta para a próxima terça às 09h.
Botão "Quero Participar" → grupo de WhatsApp (https://chat.whatsapp.com/HAPS8amG15i45h5N6AOVrM).

**3. Cuidado e Atendimento Pastoral**
Card com o perfil do pastor, explicando que há aconselhamento e oração online, com uma observação sobre os dias/horários de atendimento.
Botão "Agendar Atendimento".

**4. Dízimos e Ofertas**
Card com Banco: PicPay e Chave PIX: mesachurchoficial@gmail.com.
Botão "Copiar Chave PIX" com aviso na tela "Chave PIX copiada com sucesso!". Quando você me enviar o código PIX copia-e-cola, incluo também um segundo botão "Copiar código PIX" e o QR Code.

**5. Rodapé**
Frase "Porque na MESA, ainda há lugar." e um link discreto para o Manual de Integração.

## Visual

Mantém a identidade atual (marrom quente escuro, dourado, tipografia serifada), que já corresponde à paleta pedida de tons quentes e neutros. Nada de cores novas fora do padrão.

## Preciso de você

1. **Link do agendamento pastoral** (Calendly/TidyCal ou WhatsApp direto). Enquanto não tiver, uso o WhatsApp do grupo como destino provisório e deixo marcado para trocar.
2. **Código PIX copia-e-cola** (aquele texto longo do PicPay).
3. **Foto do pastor e o nome** — sem isso, uso um espaço com as iniciais.
4. **Dias e horários de atendimento** para escrever no card.

## Detalhes técnicos

- `src/routes/index.tsx` atual é renomeado para `src/routes/manual.tsx` (rota `/manual`), com o `createFileRoute("/manual")` e metadados próprios.
- Novo `src/routes/index.tsx` com a landing Mesa Connect e seus próprios metadados (title, description, og).
- Seções com `id` para as âncoras do menu e rolagem suave.
- Botão PIX usa a Clipboard API com fallback, e toast via `sonner`.
- Contador da próxima terça 09h calculado no cliente, dentro de `useEffect`, para evitar diferença entre servidor e navegador.
- Sem backend: nenhum dado é armazenado nesta etapa.
