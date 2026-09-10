# Mesa Connect — ajustes na página inicial

Ajustar a landing `src/routes/index.tsx` com os dados do pastor Raphael Sena, link do WhatsApp, série Amigo Teófilo e destaque para o Manual de Integração.

## O que mudar

1. **Foto do pastor**
   - Fazer upload da imagem `raphael_podcast.png` (user-uploads) para Lovable Assets, gerando `src/assets/raphael-sena.png.asset.json`.
   - Substituir o avatar circular com as iniciais "MC" na seção pastoral pela foto do pastor.

2. **Identificação pastoral**
   - Trocar o título "Pastor da MESA Church" por "Pastor Raphael Sena".
   - Manter o texto de cuidado/atendimento.

3. **WhatsApp do pastor**
   - Incluir o telefone `(11) 98526-6308` com link direto `https://wa.me/5511985266308` na seção pastoral.
   - O botão "Agendar Atendimento" continua indo para o WhatsApp do pastor enquanto não houver Calendly/TidyCal.

4. **Série Amigo Teófilo**
   - Adicionar botão "Série Amigo Teófilo" na seção pastoral, apontando para `https://amigo-te-filo-mesa-church-411499305206.us-east1.run.app/`.
   - Abrir em nova aba.

5. **Manual de Integração abaixo do "Participar do Grupo"**
   - Na seção "Nosso Encontro Semanal", abaixo do botão "Quero Participar", inserir um card discreto convidando para o Manual de Integração.
   - Link interno para `/manual` usando `<Link>` do TanStack Router.

## Arquivos envolvidos

- `src/routes/index.tsx` — alterações na landing.
- `src/assets/raphael-sena.png.asset.json` — ponteiro da foto do pastor.

## Validação

- `bun run build` deve passar.
- Verificar visualmente no preview: foto do pastor, nome, botões de WhatsApp e Série Amigo Teófilo, e card do Manual na seção do grupo.
