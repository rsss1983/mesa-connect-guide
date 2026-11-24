import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import mesaLogo from "@/assets/mesa-logo.jpeg";

export const Route = createFileRoute("/manual")({
  head: () => ({
    meta: [
      { title: "Conheça a Mesa — MESA Church" },
      {
        name: "description",
        content:
          "Conheça nossa história, nossa fé e como caminhamos juntos. Você pode começar por aqui, no seu ritmo.",
      },
      { property: "og:title", content: "Conheça a Mesa — MESA Church" },
      {
        property: "og:description",
        content:
          "Conheça a Mesa Church, explore as leituras no seu ritmo e consulte a formação e o serviço.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
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
    title: "Visão da MESA CHURCH",
    subtitle: "Desacelere o passo. Ninguém senta à mesa correndo.",
    body: [
      "Em Lucas 14, Jesus apresenta um convite que alcança quem muitas vezes fica de fora. Na Mesa, queremos acolher com respeito e oferecer companhia na caminhada da fé.",
      "Lucas 14:23 — \"Sai pelos caminhos e valados, e força-os a entrar, para que a minha casa se encha\".",
      "Nossa caminhada acontece na convivência, na oração, no aprendizado da Palavra e no serviço. Você pode conhecer a comunidade e conversar com a liderança no seu tempo.",
      "Puxe a cadeira. Ainda há lugar para você.",
    ],
  },
  {
    id: "salvacao",
    chapter: "Capítulo 1",
    title: "A Salvação em Cristo",
    subtitle: "O resgate do design original da nossa humanidade.",
    body: [
      "Na ótica da Mesa Church, salvação não é seguro contra o inferno nem ferramenta utilitarista para “vencer na vida”. É o resgate do design original da humanidade.",
      "A carne caída nos separou da glória de Deus e distorceu a identidade, nos empurrando ao orgulho autossuficiente ou ao desespero do isolamento. Jesus, 100% Deus, esvaziou-se e operou como 100% homem para pagar uma dívida que não era Dele. Na cruz e na ressurreição, Ele rasgou o véu e nos reconciliou com o Pai.",
      "Quando confessamos Cristo como Kyrios — Senhor e Dono das nossas vidas — mudamos do barco do esforço humano para o barco da obediência ao Rei. Você não performa para ser aceito; você já foi aceito pelo sangue do Cordeiro.",
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
    title: "Servir Na Mesa",
    subtitle: "Igreja, Família e Propósito.",
    body: [
      "Ser membro da MESA é entender que você foi chamado para fazer parte, não apenas para assistir. Rejeitamos a cultura do espetáculo onde poucos trabalham no palco e muitos consomem na plateia.",
      "O maior modelo é Jesus, que lavou os pés dos discípulos e declarou que não veio para ser servido, mas para servir. Nossa membresia se apoia em três pilares práticos: Igreja, Família e Propósito.",
      "Servir na MESA não é ativismo religioso nem agenda pesada para inflar estrutura. É proteção e utilidade no Reino — usar os dons do Espírito para edificar o irmão, acolher os novos e preservar a atmosfera de casa. Quando você serve, puxa mais uma cadeira para que outra pessoa se assente.",
    ],
    action: {
      label: "Quero Ser Colaborador",
      note: "Conte com quais dons você chega. Encontramos o seu lugar na engrenagem.",
    },
  },
  {
    id: "trilhas",
    chapter: "Capítulo 5",
    title: "Caminho do Peregrino",
    subtitle: "Escolha a sua trilha e caminhe com propósito.",
    body: [
      "As trilhas de discipulado da MESA são caminhos práticos para amadurecer em áreas específicas da sua vida.",
      "Escolha as trilhas que dialogam com o seu momento — família, relacionamentos, trabalho e propósito.",
      "Clique em uma trilha abaixo para explorar os caminhos disponíveis.",
    ],
  },
];

const STORAGE_KEY = "mesa.manual.completed.v1";
const FUNCAO_KEY = "mesa.funcao.v1";
const FUNCAO_CHECK_KEY = "mesa.funcao.checklist.v1";
const FOCUS_STYLES =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background";

type FuncaoInfo = {
  nome: string;
  icone: string;
  titulo: string;
  status: string;
  requisito?: string;
  itens: string[];
  foco: string;
};

const FUNCOES: FuncaoInfo[] = [
  {
    nome: "Membro",
    icone: "🪑",
    titulo: "A Cadeira à Mesa",
    status:
      "Alguém que decidiu puxar a cadeira e assumir o seu lugar na MESA Church.",
    itens: [
      "Concluir a trilha de Onboarding: Visão da Mesa Church (A Base Profética, Os 3 Pilares, Manifesto)",
      "Participar do Café com o Pastor",
      "Integrar-se a uma Mesa Familiar",
      "Escolher uma frente do Caminho do Peregrino (Cura Emocional, Cura Profissional ou Mulheres Posicionadas)",
    ],
    foco:
      "Romper com a autossuficiência, viver em transparência relacional e vivenciar o discipulado vivo.",
  },
  {
    nome: "Cooperador",
    icone: "🤝",
    titulo: "Serviço & Aliança",
    status: "O membro que decidiu servir ativamente no corpo.",
    requisito:
      "Ter concluído a trilha inicial do membro e feito o Intensivão de Voluntários (1 dia).",
    itens: [
      "Concluir o Intensivão de Voluntários (1 dia)",
      "Atuar em uma equipe de serviço (Acolhimento, Mídia, Kids, Infraestrutura...)",
      "Presença assídua nos encontros do Grupo Familiar",
      "Concluir o curso Introdução ao Serviço Ministerial",
      "Concluir a trilha prática da sua área (Louvor, Palavra, Intercessão ou Evangelismo)",
    ],
    foco: "Cultivar o coração de servo e ser fiel nas pequenas tarefas.",
  },
  {
    nome: "Diácono",
    icone: "🛡️",
    titulo: "Apascentando e Discipulando Pessoas",
    status:
      "Líder em formação e suporte da liderança espiritual da congregação.",
    requisito: "Conclusão do Curso de Diaconato (3 meses).",
    itens: [
      "Concluir o Curso de Diaconato (3 meses)",
      "Discipular diretamente 3 pessoas",
      "Servir nos cultos, eventos e relógios de oração",
      "Dar suporte prático às famílias",
      "Cobrir e auxiliar os presbíteros do ministério",
      "Concluir o módulo Fundamentos Teológicos & Cuidado de Vidas",
    ],
    foco:
      "Testemunho de vida exemplar, maturidade e discernimento no cuidado direto.",
  },
  {
    nome: "Presbítero",
    icone: "🏛️",
    titulo: "Governo e Liderança de Grupos",
    status:
      "Oficial responsável pelo pastoreio direto e governo de pequenos grupos.",
    requisito: "Conclusão do Curso de Presbítero (1 ano).",
    itens: [
      "Concluir o Curso de Presbítero (1 ano)",
      "Liderar e fazer crescer 1 Grupo Familiar",
      "Formar e mentorear 5 diáconos (encontro R12 de acompanhamento)",
      "Realizar visitas aos lares e oração pelos enfermos",
      "Cobertura espiritual regional",
      "Acompanhar o relatório de saúde do seu Grupo Familiar",
    ],
    foco:
      "Sabedoria pastoral, combate em batalha espiritual e formação de novos líderes.",
  },
  {
    nome: "Pastor",
    icone: "📜",
    titulo: "Visão, Expansão e Pastoreio de Líderes",
    status:
      "O líder visionário que cuida de regiões, ministérios e do corpo geral de líderes.",
    requisito:
      "Curso Pastoral (4 anos) ou percurso prévio de Evangelista/Missionária + Teologia avançada.",
    itens: [
      "Concluir o Curso Pastoral (4 anos)",
      "Apascentar 1 Região Familiar ou presidir um departamento da igreja",
      "Pastorear e discipular 5 presbíteros / evangelistas",
      "Pregar e alinhar a cultura da casa",
      "Zelar pela pureza da doutrina",
      "Formar novos pastores",
    ],
    foco:
      "Paternidade espiritual, discernimento de governo, unção e zelo pelo crescimento saudável da igreja.",
  },
];

function Manual() {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});
  const [completedCarregado, setCompletedCarregado] = useState(false);
  const [completedPodeSalvar, setCompletedPodeSalvar] = useState(true);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    let podeSalvar = true;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved: unknown = JSON.parse(raw);
        if (saved && typeof saved === "object" && !Array.isArray(saved)) {
          setCompleted(saved as Record<string, boolean>);
        } else {
          podeSalvar = false;
        }
      }
    } catch {
      podeSalvar = false;
    }
    setCompletedPodeSalvar(podeSalvar);
    setCompletedCarregado(true);
  }, []);

  useEffect(() => {
    if (!completedCarregado || !completedPodeSalvar) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {}
  }, [completed, completedCarregado, completedPodeSalvar]);

  const leiturasRealizadas = STEPS.filter((s) => completed[s.id]).length;

  const toggle = (id: string) =>
    setCompleted((c) => ({ ...c, [id]: !c[id] }));

  const [aceito, setAceito] = useState(false);
  const [aceitoCarregado, setAceitoCarregado] = useState(false);
  const [aceitoPodeSalvar, setAceitoPodeSalvar] = useState(true);

  const [trilha, setTrilha] = useState<string | null>(null);
  const [familiaSub, setFamiliaSub] = useState<string | null>(null);

  const [funcao, setFuncao] = useState<string | null>(null);
  const [funcaoCarregada, setFuncaoCarregada] = useState(false);
  const [funcaoPodeSalvar, setFuncaoPodeSalvar] = useState(true);
  const [funcaoChecksPodeSalvar, setFuncaoChecksPodeSalvar] = useState(true);
  const [funcaoChecks, setFuncaoChecks] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let podeSalvarFuncao = true;
    try {
      const saved = localStorage.getItem(FUNCAO_KEY);
      if (saved) {
        if (FUNCOES.some((f) => f.nome === saved)) {
          setFuncao(saved);
        } else {
          podeSalvarFuncao = false;
        }
      }
    } catch {
      podeSalvarFuncao = false;
    }

    let podeSalvarChecks = true;
    try {
      const rawChecks = localStorage.getItem(FUNCAO_CHECK_KEY);
      if (rawChecks) {
        const savedChecks: unknown = JSON.parse(rawChecks);
        if (
          savedChecks &&
          typeof savedChecks === "object" &&
          !Array.isArray(savedChecks)
        ) {
          setFuncaoChecks(savedChecks as Record<string, boolean>);
        } else {
          podeSalvarChecks = false;
        }
      }
    } catch {
      podeSalvarChecks = false;
    }

    setFuncaoPodeSalvar(podeSalvarFuncao);
    setFuncaoChecksPodeSalvar(podeSalvarChecks);
    setFuncaoCarregada(true);
  }, []);

  useEffect(() => {
    if (!funcaoCarregada || !funcaoPodeSalvar) return;
    try {
      localStorage.setItem(FUNCAO_KEY, funcao ?? "");
    } catch {}
  }, [funcao, funcaoCarregada, funcaoPodeSalvar]);

  useEffect(() => {
    if (!funcaoCarregada || !funcaoChecksPodeSalvar) return;
    try {
      localStorage.setItem(FUNCAO_CHECK_KEY, JSON.stringify(funcaoChecks));
    } catch {}
  }, [funcaoChecks, funcaoCarregada, funcaoChecksPodeSalvar]);

  const funcaoAtiva = FUNCOES.find((f) => f.nome === funcao) ?? null;

  useEffect(() => {
    let podeSalvar = true;
    try {
      const saved = localStorage.getItem("mesa.salvacao.aceito");
      if (saved === "true" || saved === "false") {
        setAceito(saved === "true");
      } else if (saved !== null) {
        podeSalvar = false;
      }
    } catch {
      podeSalvar = false;
    }
    setAceitoPodeSalvar(podeSalvar);
    setAceitoCarregado(true);
  }, []);

  useEffect(() => {
    if (!aceitoCarregado || !aceitoPodeSalvar) return;
    try {
      localStorage.setItem("mesa.salvacao.aceito", String(aceito));
    } catch {}
  }, [aceito, aceitoCarregado, aceitoPodeSalvar]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-12 text-center">
          <Link
            to="/"
            className={`absolute left-6 top-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-2 text-sm font-medium text-gold transition hover:bg-gold/10 ${FOCUS_STYLES}`}
          >
            <span aria-hidden>←</span> Voltar
          </Link>
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
          <h1 className="mt-4 font-serif text-5xl font-medium text-glow sm:text-6xl md:text-7xl">
            Conheça a Mesa
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Conheça nossa história, nossa fé e como caminhamos juntos. Você
            pode começar por aqui, no seu ritmo.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Você pode visitar nossos encontros sem concluir estas leituras.
            Cada pessoa compartilha sua história no seu tempo.
          </p>
          <div className="mx-auto mt-8 flex max-w-lg flex-col items-stretch justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              hash="encontros"
              className={`inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-center text-sm font-semibold text-primary-foreground transition hover:bg-gold-soft ${FOCUS_STYLES}`}
            >
              Ver os encontros
            </Link>
            <a
              href="#leituras"
              className={`inline-flex items-center justify-center rounded-full border border-gold/40 bg-gold/5 px-7 py-3 text-center text-sm font-semibold text-gold transition hover:bg-gold/10 ${FOCUS_STYLES}`}
            >
              Explorar as leituras
            </a>
          </div>

        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-20">
        <section
          aria-labelledby="pilares-title"
          className="border-y border-border/60 py-10"
        >
          <h2
            id="pilares-title"
            className="text-center font-serif text-sm uppercase tracking-[0.35em] text-gold-soft"
          >
            Nossa forma de caminhar
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card/50 p-5">
              <h3 className="font-serif text-xl text-gold">
                Transparência Relacional
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Construímos relações com sinceridade e respeito ao tempo de cada
                pessoa.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card/50 p-5">
              <h3 className="font-serif text-xl text-gold">Discipulado Vivo</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Aprendemos a seguir Jesus na convivência e nas escolhas do dia a
                dia.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-card/50 p-5">
              <h3 className="font-serif text-xl text-gold">Vida no Reino</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Buscamos viver a fé no trabalho, na família e no cuidado com as
                pessoas.
              </p>
            </article>
          </div>
        </section>

        <section id="leituras" aria-labelledby="leituras-title" className="mt-14 scroll-mt-6">
          <h2
            id="leituras-title"
            className="text-center font-serif text-sm uppercase tracking-[0.3em] text-gold-soft"
          >
            Leituras para conhecer e caminhar
          </h2>
          <div className="mt-6 flex items-center justify-between gap-4 text-xs uppercase tracking-widest text-muted-foreground">
            <span>Leituras realizadas</span>
            <span className="shrink-0 text-gold">
              {leiturasRealizadas} de {STEPS.length}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Este progresso fica salvo neste navegador e não é um cadastro de
            membro ou reconhecimento de liderança.
          </p>
          {!completedPodeSalvar && (
            <p role="status" className="mt-3 rounded-xl border border-gold/30 bg-gold/5 p-3 text-sm leading-relaxed text-muted-foreground">
              Não foi possível ler o progresso anterior. Ele não foi apagado;
              novas marcações de leitura não serão salvas neste navegador.
            </p>
          )}

        <ol className="mt-6 space-y-4">
          {STEPS.map((step, i) => {
            const open = openId === step.id;
            const done = !!completed[step.id];
            const nextStep = STEPS[i + 1];
            return (
              <li
                key={step.id}
                className={`rounded-2xl border bg-card/60 backdrop-blur transition-all ${
                  open ? "border-gold/50 glow-gold" : "border-border hover:border-gold/30"
                }`}
              >
                <button
                  type="button"
                  id={`botao-${step.id}`}
                  aria-expanded={open}
                  aria-controls={`conteudo-${step.id}`}
                  onClick={() => setOpenId(open ? null : step.id)}
                  className={`grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl px-4 py-5 text-left sm:gap-4 sm:px-5 ${FOCUS_STYLES}`}
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
                  <span className="min-w-0">
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
                  <div
                    id={`conteudo-${step.id}`}
                    role="region"
                    aria-labelledby={`botao-${step.id}`}
                    className="border-t border-border/60 px-5 pb-6 pt-5 sm:px-16"
                  >
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
                          {
                            label: "Visão da Mesa",
                            href: "https://visaodamesa.ai.studio",
                          },
                          {
                            label: "Transparência Relacional",
                            href: "https://mesa-church-governe-sua-mesa.ai.studio",
                          },
                          {
                            label: "Vida no Reino",
                            href: "https://daily-devotion-rhythm.lovable.app",
                          },
                          { label: "Formulário de Voluntário" },
                          {
                            label: "Treinamento de Guardiões de Mesa",
                            href: "https://guardiaodamesa.ai.studio",
                          },
                        ].map(({ label, href }) => {
                          const cls =
                            "inline-flex items-center rounded-full border border-gold/40 bg-gold/5 px-5 py-2 text-sm font-medium text-gold transition hover:bg-gold/10";
                          return href ? (
                            <a
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cls}
                            >
                              {label}
                            </a>
                          ) : (
                            <button key={label} className={cls}>
                              {label}
                            </button>
                          );
                        })}
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

                    {step.id === "trilhas" && (
                      <TrilhasBlock
                        trilha={trilha}
                        setTrilha={(t) => {
                          setTrilha(t);
                          setFamiliaSub(null);
                        }}
                        familiaSub={familiaSub}
                        setFamiliaSub={setFamiliaSub}
                      />
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
                      {nextStep && (
                        <button
                          type="button"
                          onClick={() => setOpenId(nextStep.id)}
                          className={`rounded-md text-sm text-gold-soft hover:text-gold ${FOCUS_STYLES}`}
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
        </section>

        <section
          aria-labelledby="formacao-title"
          className="mt-16 border-t border-gold/25 pt-12"
        >
          <h2
            id="formacao-title"
            className="text-center font-serif text-sm uppercase tracking-[0.35em] text-gold-soft"
          >
            Formação e serviço
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            A leitura ajuda na formação. O reconhecimento para servir em
            funções de liderança envolve acompanhamento pastoral, caráter,
            experiência e discernimento da comunidade. Concluir etapas de
            leitura não concede cargos.
          </p>

          <details className="mt-6 rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
            <summary
              className={`cursor-pointer list-none rounded-md font-serif text-xl text-gold [&::-webkit-details-marker]:hidden ${FOCUS_STYLES}`}
            >
              Conhecer a formação e o serviço
            </summary>
            <div className="mt-6 border-t border-border/60 pt-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Consulte os papéis e seus critérios como conteúdo de formação,
                sem ordem de ranking. Todos estão disponíveis para leitura.
              </p>

              {(!funcaoPodeSalvar || !funcaoChecksPodeSalvar) && (
                <p role="status" className="mt-4 rounded-xl border border-gold/30 bg-gold/5 p-3 text-sm leading-relaxed text-muted-foreground">
                  Algumas anotações anteriores não puderam ser lidas e não foram
                  apagadas. Novas alterações nesses dados não serão salvas neste
                  navegador.
                </p>
              )}

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {FUNCOES.map((f) => {
                  const ativa = funcao === f.nome;
                  const painelId = `funcao-${f.nome.toLowerCase()}`;
                  return (
                    <button
                      key={f.nome}
                      type="button"
                      aria-pressed={ativa}
                      aria-expanded={ativa}
                      aria-controls={painelId}
                      onClick={() => setFuncao(ativa ? null : f.nome)}
                      className={`inline-flex max-w-full items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition ${FOCUS_STYLES} ${
                        ativa
                          ? "border-gold bg-gold text-primary-foreground"
                          : "border-gold/40 bg-gold/5 text-gold hover:bg-gold/10"
                      }`}
                    >
                      <span aria-hidden>{f.icone}</span>
                      {f.nome}
                    </button>
                  );
                })}
              </div>

              {funcaoAtiva && (
                <div
                  id={`funcao-${funcaoAtiva.nome.toLowerCase()}`}
                  role="region"
                  aria-label={`Formação: ${funcaoAtiva.nome}`}
                  className="mt-5 rounded-2xl border border-gold/25 bg-card/60 p-5 text-left sm:p-6"
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold-soft/80">
                    {funcaoAtiva.icone} {funcaoAtiva.nome}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-glow">
                    {funcaoAtiva.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {funcaoAtiva.status}
                  </p>
                  {funcaoAtiva.requisito && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="text-gold">Requisito: </span>
                      {funcaoAtiva.requisito}
                    </p>
                  )}

                  <div className="mt-5 flex items-center justify-between gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                    <span>Anotações pessoais</span>
                    <span className="shrink-0 text-gold">
                      {
                        funcaoAtiva.itens.filter(
                          (it) => funcaoChecks[`${funcaoAtiva.nome}::${it}`],
                        ).length
                      }
                      /{funcaoAtiva.itens.length}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Estas marcações são anotações pessoais e não representam
                    nomeação ou reconhecimento para uma função.
                  </p>

                  <ul className="mt-4 space-y-2">
                    {funcaoAtiva.itens.map((item) => {
                      const chave = `${funcaoAtiva.nome}::${item}`;
                      const marcado = !!funcaoChecks[chave];
                      return (
                        <li key={chave}>
                          <button
                            type="button"
                            aria-pressed={marcado}
                            onClick={() =>
                              setFuncaoChecks((c) => ({
                                ...c,
                                [chave]: !c[chave],
                              }))
                            }
                            className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left text-sm transition ${FOCUS_STYLES} ${
                              marcado
                                ? "border-gold/50 bg-gold/10 text-foreground"
                                : "border-border bg-background/40 text-muted-foreground hover:border-gold/40"
                            }`}
                          >
                            <span
                              aria-hidden
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[11px] ${
                                marcado
                                  ? "border-gold bg-gold text-primary-foreground"
                                  : "border-gold/40"
                              }`}
                            >
                              {marcado ? "✓" : ""}
                            </span>
                            <span className="min-w-0">{item}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    <span className="text-gold">Foco espiritual: </span>
                    {funcaoAtiva.foco}
                  </p>
                </div>
              )}
            </div>
          </details>
        </section>

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

function TrilhaBtn({
  label,
  active,
  onClick,
  variant = "default",
  href,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
  variant?: "default" | "sub" | "leaf";
  href?: string;
}) {
  const base =
    "inline-flex items-center rounded-full px-5 py-2 text-sm font-medium transition";
  const styles =
    variant === "leaf"
      ? "border border-gold-soft/40 bg-transparent text-gold-soft hover:bg-gold/10"
      : variant === "sub"
        ? "border border-gold/40 bg-gold/5 text-gold hover:bg-gold/10"
        : active
          ? "bg-gold text-primary-foreground"
          : "border border-gold/40 bg-gold/5 text-gold hover:bg-gold/10";
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
      >
        {label}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {label}
    </button>
  );
}

function TrilhasBlock({
  trilha,
  setTrilha,
  familiaSub,
  setFamiliaSub,
}: {
  trilha: string | null;
  setTrilha: (t: string | null) => void;
  familiaSub: string | null;
  setFamiliaSub: (s: string | null) => void;
}) {
  const trilhas: { label: string; href?: string }[] = [
    { label: "Família" },
    {
      label: "Cura Emocional",
      href: "https://mentesafesaudavel.lovable.app",
    },
    { label: "Empresário Cristão" },
    { label: "\u00a0Cura Profissional" },
  ];
  const familiaOpts = ["Homem", "Mulheres Posicionadas", "Filho"];
  const subOpts: Record<string, { label: string; href?: string }[]> = {
    Homem: [{ label: "Pai" }, { label: "Marido" }],
    "Mulheres Posicionadas": [{ label: "Mãe" }, { label: "Esposa" }],
    Filho: [
      { label: "Criança", href: "https://mesa-guide-app.lovable.app" },
      { label: "Jovem", href: "https://mesa-guide-app.lovable.app" },
      { label: "Jovem Adulto" },
    ],
  };

  return (
    <div className="mt-8 space-y-5">
      <div>
        <p className="mb-3 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Trilhas iniciais
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {trilhas.map((t) => (
            <TrilhaBtn
              key={t.label}
              label={t.label}
              href={t.href}
              active={trilha === t.label}
              onClick={() => setTrilha(trilha === t.label ? null : t.label)}
            />
          ))}
        </div>
      </div>

      {trilha === "Família" && (
        <div>
          <p className="mb-3 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Família
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {familiaOpts.map((o) => (
              <TrilhaBtn
                key={o}
                label={o}
                variant="sub"
                onClick={() => setFamiliaSub(familiaSub === o ? null : o)}
              />
            ))}
          </div>
        </div>
      )}

      {trilha === "Família" && familiaSub && (
        <div>
          <p className="mb-3 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {familiaSub}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {subOpts[familiaSub].map((l) => (
              <TrilhaBtn
                key={l.label}
                label={l.label}
                href={l.href}
                variant="leaf"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
