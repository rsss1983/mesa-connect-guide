# Mesa Connect — reorganização dos blocos da landing

Reorganizar a página inicial `src/routes/index.tsx` para refletir a nova disposição pedida: o botão "Série Amigo Teófilo" sobe para o hero ao lado de "Participar do Grupo", o convite ao Manual de Integração passa a ficar antes da seção "Nosso Encontro Semanal", e o encontro passa a ser apresentado como presencial com o endereço da MESA.

## O que mudar

1. **Hero — botões lado a lado**
   - Manter o botão "Participar do Grupo" (âncora `#grupo`).
   - Adicionar o botão "Série Amigo Teófilo" ao lado dele, usando o link `https://amigo-te-filo-mesa-church-411499305206.us-east1.run.app/` e abrindo em nova aba.
   - Manter o botão "Falar com o Pastor" ao lado direito.

2. **"Quer conhecer a MESA?" antes do encontro semanal**
   - Mover o card atual do Manual de Integração de dentro da seção "Nosso Encontro Semanal" para uma seção própria posicionada imediatamente antes de `<section id="grupo">`.
   - Manter o texto convidativo e o link interno `<Link to="/manual">`.

3. **Encontro presencial com endereço**
   - Na seção "Nosso Encontro Semanal", substituir o subtítulo "Online · Google Meet" por:
     `Encontro presencial · Rua Antônio José Bastos, 33 — Parque Regina, Sala 1`.
   - Manter o horário "Terças-feiras, às 09:00".
   - Manter o botão "Quero Participar" indo para o grupo de WhatsApp.

4. **Seção pastoral**
   - Remover o botão "Série Amigo Teófilo" da seção pastoral, já que ele foi para o hero.
   - Manter a foto, o nome "Pastor Raphael Sena", o WhatsApp e o botão "Agendar Atendimento".

## Arquivos envolvidos

- `src/routes/index.tsx` — reorganização dos blocos e textos.

## Validação

- `bun run build` deve passar.
- Verificar visualmente no preview: hero com três botões, card do Manual antes do encontro, e endereço presencial na seção do grupo.
