import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import mesaLogo from "@/assets/mesa-logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MESA Church — Manual de Integração" },
      {
        name: "description",
        content:
          "Puxe a cadeira. Manual de integração da MESA Church — Igreja, Família e Propósito.",
      },
    ],
  }),
  component: Manual,
});

type Step = {
  id: string;
  chapter: string;
  title: string;
  subtitle: string;
  body: string[];
  action?: { label: string; note: string };
};

const STEPS: Step[] = [
  {
    id: "manifesto",
    chapter: "Introdução",
    title: "O Manifesto da Mesa",
    subtitle: "Desacelere o passo. Ninguém senta à mesa correndo.",
    body: [
      "Em uma metrópole acelerada como São Paulo, é fácil se perder na multidão. A cultura nos condicionou a camuflar fraquezas, vestir máscaras de alta performance e medir nosso valor pela produtividade.",
      "O sistema religioso muitas vezes copiou esse ritmo — templos viraram auditórios, cristãos viraram espectadores no “modo plateia”. Entra correndo, consome um show de palco no isolamento, e vai embora sozinho com seus fardos.",
      "Na MESA Church, escolhemos o caminho inverso. A mesa exige mudança de postura, física e espiritual. Este manual não é um livro de regras — é um convite para você puxar a cadeira, deixar as máscaras caírem e entender o design original que o Pai preparou para a sua jornada.",
    ],
  },
  {
    id: "salvacao",
    chapter: "Capítulo 1",
    title: "A Salvação em Cristo",
    subtitle: "O resgate do design original da nossa humanidade.",
    body: [
      "Na ótica da Humanologia, salvação não é seguro contra o inferno nem ferramenta utilitarista para “vencer na vida”. É o resgate do design original da humanidade.",
      "A carne caída nos separou da glória de Deus e distorceu a identidade, nos empurrando ao orgulho autossuficiente ou ao desespero do isolamento. Jesus, 100% Deus, esvaziou-se e operou como 100% homem para pagar uma dívida que não era Dele. Na cruz e na ressurreição, Ele rasgou o véu e nos reconciliou com o Pai.",
      "Quando confessamos Cristo como Kyrios — Senhor e Dono das nossas vidas — transitamos do barco do esforço humano para o barco da obediência ao Rei. Você não performa para ser aceito; você já foi aceito pelo sangue do Cordeiro.",
      "Romanos 10:9 — “Se você confessar com a sua boca que Jesus é Senhor e crer em seu coração que Deus o ressuscitou dentre os mortos, será salvo.”",
      "A Oração de Entrega",
      "Senhor Jesus, eu reconheço que sou pecador e preciso do Teu perdão. Creio que Tu morreste por meus pecados e ressuscitaste para me dar vida eterna. Neste momento, eu abro meu coração e minha vida para Ti. Eu Te aceito como meu Senhor e Salvador. Eu Te peço que perdoe todos os meus pecados, limpes meu coração e faças de mim uma nova criatura.",
      "Enche-me com o Teu Espírito Santo e guia-me nos Teus caminhos. Ajuda-me a viver uma vida que Te honre e glorifique. Obrigado por me amar incondicionalmente e por me aceitar como sou. Eu entrego minha vida a Ti e confio que Tu cuidarás de mim todos os dias. Em Teu nome, Jesus, eu oro. Amém.",
    ],
    action: {
      label: "Reconhecer Cristo como Senhor",
      note: "Um passo interior de rendição. Converse com a liderança sempre que quiser.",
    },
  },
  {
    id: "batismo",
    chapter: "Capítulo 2",
    title: "O Batismo",
    subtitle: "A ruptura pública com o passado.",
    body: [
      "O batismo não é ritual tradicional nem “formatura espiritual” para quem já é perfeito. É o sepultamento público da velha natureza e a ressurreição para uma nova vida em Cristo (Romanos 6:4).",
      "É o momento de arrastar o barco da velha vida para a praia, romper com os antigos senhores — medo, culpa, ativismo, pecado — e declarar: “eu não pertenço mais a mim mesmo; agora eu sigo o Rei”.",
      "Se o seu coração queima por essa nova jornada, alinhe-se com a liderança da MESA e dê esse passo inegociável de obediência. Não adie o que Jesus já ordenou.",
    ],
    action: {
      label: "Quero ser batizado",
      note: "Fale com um líder da MESA para agendar o próximo batismo. Recomendamos o início do curso Escola Bíblica Interativa.",
    },
  },
  {
    id: "ceia",
    chapter: "Capítulo 3",
    title: "A Santa Ceia à Mesa",
    subtitle: "Todo terceiro domingo. Traga o seu pão.",
    body: [
      "Na MESA celebramos a Ceia no formato mais fiel ao modelo de Jesus com os discípulos: ao redor da mesa, sempre no terceiro domingo de cada mês.",
      "Não é um momento místico isolado onde cada um fecha os olhos e ignora o irmão ao lado. Nossa visão exige o partir do pão comunitário — por isso, cada um leva o seu próprio pão para a mesa.",
      "Ao dividirmos o pão, relembramos duas verdades: o sacrifício do Rei — corpo partido, sangue derramado para curar nossa humanidade — e a unidade do Corpo, o compromisso de carregar os fardos uns dos outros (Gálatas 6:2).",
    ],
    action: {
      label: "Marcar o próximo terceiro domingo",
      note: "Leve o seu pão. A vulnerabilidade é acolhida à mesa.",
    },
  },
  {
    id: "voluntariado",
    chapter: "Capítulo 4",
    title: "Voluntariado e Serviço",
    subtitle: "Igreja, Família e Propósito.",
    body: [
      "Ser membro da MESA é entender que você foi chamado para fazer parte, não apenas para assistir. Rejeitamos a cultura do espetáculo onde poucos trabalham no palco e muitos consomem na plateia.",
      "O maior modelo é Jesus, que lavou os pés dos discípulos e declarou que não veio para ser servido, mas para servir. Nossa membresia se apoia em três pilares práticos: Igreja, Família e Propósito.",
      "Servir na MESA não é ativismo religioso nem agenda pesada para inflar estrutura. É proteção e utilidade no Reino — usar os dons do Espírito para edificar o irmão, acolher os novos e preservar a atmosfera de casa. Quando você serve, puxa mais uma cadeira para que outra pessoa se assente.",
    ],
    action: {
      label: "Quero ser voluntário",
      note: "Conte com quais dons você chega. Encontramos o seu lugar na engrenagem.",
    },
  },
  {
    id: "trilhas",
    chapter: "Capítulo 6",
    title: "Trilhas de Discipulado",
    subtitle: "Escolha a sua trilha e caminhe com propósito.",
    body: [
      "As trilhas de discipulado da MESA são caminhos práticos para amadurecer em áreas específicas da sua vida.",
      "Comece pela trilha principal e, conforme avança, escolha as trilhas que dialogam com o seu momento — família, relacionamentos, trabalho e propósito.",
      "Clique em uma trilha abaixo para explorar os caminhos disponíveis.",
    ],
  },
];

const STORAGE_KEY = "mesa.manual.completed.v1";

function Manual() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [openId, setOpenId] = useState<string>(STEPS[0].id);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCompleted(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {}
  }, [completed]);

  const progress = useMemo(() => {
    const done = STEPS.filter((s) => completed[s.id]).length;
    return Math.round((done / STEPS.length) * 100);
  }, [completed]);

  const toggle = (id: string) =>
    setCompleted((c) => ({ ...c, [id]: !c[id] }));

  const [aceito, setAceito] = useState(() => {
    try {
      return localStorage.getItem("mesa.salvacao.aceito") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("mesa.salvacao.aceito", String(aceito));
    } catch {}
  }, [aceito]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-12 text-center">
          <div className="mx-auto mb-8 w-40 sm:w-48">
            <img
              src={mesaLogo}
              alt="MESA Church"
              className="w-full rounded-full glow-gold"
            />
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            MESA Church
          </p>
          <h1 className="mt-4 font-serif text-5xl sm:text-6xl md:text-7xl font-medium text-glow">
            O seu lugar à Mesa
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Manual de Integração — Igreja, Família e Propósito. Puxe a cadeira,
            deixe as máscaras caírem, e caminhe pelos passos que preparamos para
            você.
          </p>

          {/* Progress */}
          <div className="mx-auto mt-10 max-w-md">
            <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
              <span>Sua Jornada</span>
              <span className="text-gold">{progress}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-gradient-to-r from-ember via-gold to-gold-soft transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Steps */}
      <main className="mx-auto max-w-3xl px-6 pb-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px flex-1 bg-border" />
          <h2 className="font-serif text-sm uppercase tracking-[0.35em] text-gold-soft">
            Seus Passos
          </h2>
          <span className="h-px flex-1 bg-border" />
        </div>

        <ol className="space-y-4">
          {STEPS.map((step, i) => {
            const open = openId === step.id;
            const done = !!completed[step.id];
            return (
              <li
                key={step.id}
                className={`rounded-2xl border bg-card/60 backdrop-blur transition-all ${
                  open ? "border-gold/50 glow-gold" : "border-border hover:border-gold/30"
                }`}
              >
                <button
                  onClick={() => setOpenId(open ? "" : step.id)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-serif text-lg transition ${
                      done
                        ? "border-gold bg-gold text-primary-foreground"
                        : "border-gold/40 text-gold"
                    }`}
                  >
                    {done ? "✓" : i + 1}
                  </span>
                  <span className="flex-1">
                    <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {step.chapter}
                    </span>
                    <span className="mt-1 block font-serif text-2xl leading-tight">
                      {step.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {step.subtitle}
                    </span>
                  </span>
                  <span
                    className={`text-gold-soft transition-transform ${
                      open ? "rotate-90" : ""
                    }`}
                    aria-hidden
                  >
                    ›
                  </span>
                </button>

                {open && (
                  <div className="border-t border-border/60 px-5 pb-6 pt-5 sm:px-16">
                    <div className="space-y-4 text-[15px] leading-relaxed text-foreground/90">
                      {step.body.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {step.action && (
                      <div className="mt-6 rounded-xl border border-gold/25 bg-gold/5 p-4">
                        <p className="font-serif text-lg text-gold">
                          {step.action.label}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {step.action.note}
                        </p>
                      </div>
                    )}

                    {step.id === "batismo" && (
                      <div className="mt-6 flex items-center justify-center">
                        <a
                          href="https://ebook-to-interactive-v1a9.bolt.host"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold text-primary-foreground transition-all duration-500 bg-gold hover:bg-gold-soft"
                        >
                          Escola Bíblica Interativa
                        </a>
                      </div>
                    )}

                    {step.id === "voluntariado" && (
                      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        {[
                          "Visão da Mesa",
                          "Transparência Relacional",
                          "Vida no Reino",
                          "Formulário de Voluntário",
                          "Treinamento de Anfitriões de Mesa",
                        ].map((label) => (
                          <button
                            key={label}
                            className="inline-flex items-center rounded-full border border-gold/40 bg-gold/5 px-5 py-2 text-sm font-medium text-gold transition hover:bg-gold/10"
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    )}

                    {step.id === "salvacao" && (
                      <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
                        <button
                          onClick={() => setAceito((a) => !a)}
                          className={`inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold text-white transition-all duration-500 ${
                            aceito
                              ? "bg-emerald-700 hover:bg-emerald-600"
                              : "bg-red-700 hover:bg-red-600"
                          }`}
                        >
                          {aceito ? "Filho de Deus" : "Aceito"}
                        </button>
                        {aceito && (
                          <a
                            href="https://ebook-to-interactive-wbcc.bolt.host"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold text-primary-foreground transition-all duration-500 bg-gold hover:bg-gold-soft"
                          >
                            Primeiros Passos
                          </a>
                        )}
                      </div>
                    )}

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => toggle(step.id)}
                        className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition ${
                          done
                            ? "border-gold/40 bg-transparent text-muted-foreground hover:text-foreground"
                            : "border-gold bg-gold text-primary-foreground hover:bg-gold-soft"
                        }`}
                      >
                        {done ? "Desmarcar" : "Marcar como concluído"}
                      </button>
                      {i < STEPS.length - 1 && (
                        <button
                          onClick={() => setOpenId(STEPS[i + 1].id)}
                          className="text-sm text-gold-soft hover:text-gold"
                        >
                          Próximo passo →
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        {/* Hub */}
        <section className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <h2 className="font-serif text-sm uppercase tracking-[0.35em] text-gold-soft">
              Hub MESA
            </h2>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <HubCard
              title="Playlist do Próximo Culto"
              detail="- Comece a entender o que vai ser cantado"
              cta="Ouvir no Spotify"
              href="https://open.spotify.com/playlist/2drJP3g3ZDDNjyg1XQOiUC?si=Rd9HuyszRNWCVl2AGk3IXw"
            />
            <HubCard
              title="Drops Na Mesa"
              detail="Encontre Resposta da sua Humanidade na Graça"
              cta="Ouvir no Spotify"
              href="https://open.spotify.com/show/5xxzWtFUAw4ADv4EZ3PH2b?si=e367fcb3d5a545cf"
            />
          </div>
        </section>

        <footer className="mt-20 text-center">
          <p className="font-serif text-2xl text-glow text-gold-soft">
            Porque na MESA, ainda há lugar.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            MESA Church · Igreja · Família · Propósito
          </p>
        </footer>
      </main>
    </div>
  );
}

function HubCard({
  title,
  detail,
  cta,
  href,
}: {
  title: string;
  detail: string;
  cta: string;
  href?: string;
}) {
  const content = (
    <>
      <h3 className="font-serif text-xl text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
      <p className="mt-4 inline-flex items-center gap-1 text-sm text-gold group-hover:text-gold-soft">
        {cta} <span aria-hidden>→</span>
      </p>
    </>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-border bg-card/50 p-5 transition hover:border-gold/40"
    >
      {content}
    </a>
  ) : (
    <div className="group rounded-2xl border border-border bg-card/50 p-5 transition hover:border-gold/40">
      {content}
    </div>
  );
}
