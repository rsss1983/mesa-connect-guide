import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { toast } from "sonner";
import pastorPhoto from "@/assets/raphael-sena.png.asset.json";

const WHATSAPP_PASTOR = "https://wa.me/5511985266308";
const AGENDAMENTO_URL = WHATSAPP_PASTOR;
const AMIGO_TEOFILO_RUN_APP_URL =
  "https://amigo-te-filo-mesa-church-411499305206.us-east1.run.app/";
const AMIGO_TEOFILO_AI_STUDIO_URL = "https://amigo-te-filo-mesa-church.ai.studio";
const ZOOM_GRUPO_URL = "https://us04web.zoom.us/launch/jc/75521781416";
const MAPA_CULTO_URL = "https://maps.app.goo.gl/HuUnTK7REc1kNCUf6";
const PIX_KEY = "mesachurchoficial@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mesa Connect — MESA Church" },
      {
        name: "description",
        content:
          "Puxe a cadeira. Conheça a Mesa Church, participe dos encontros presenciais e online e encontre gente para caminhar com você na fé.",
      },
      { property: "og:title", content: "Mesa Connect — MESA Church" },
      {
        property: "og:description",
        content:
          "Conheça a Mesa Church, participe dos nossos encontros e caminhe com outras pessoas na fé.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MesaConnect,
});

const NAV = [
  { href: "#encontros", label: "Encontros" },
  { href: "#conheca", label: "Conheça a Mesa" },
  { href: "#pastoral", label: "Conversar" },
];

const FOCUS_STYLES =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const PRIMARY_BUTTON = `inline-flex max-w-full items-center justify-center rounded-full bg-gold px-7 py-3 text-center text-sm font-semibold leading-5 text-primary-foreground transition-transform hover:scale-[1.03] ${FOCUS_STYLES}`;
const SECONDARY_BUTTON = `inline-flex max-w-full items-center justify-center rounded-full border border-gold/50 px-7 py-3 text-center text-sm font-semibold leading-5 text-gold transition-colors hover:bg-gold/10 ${FOCUS_STYLES}`;

function MesaConnect() {
  const copiarPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
    } catch {
      const el = document.createElement("textarea");
      el.value = PIX_KEY;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    toast.success("Chave PIX copiada com sucesso!");
  };

  const fecharMenu = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.closest("details")?.removeAttribute("open");
  };

  return (
    <div className="min-h-screen scroll-smooth">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3">
          <a
            href="#inicio"
            className={`flex min-w-0 items-center rounded-md ${FOCUS_STYLES}`}
          >
            <span className="truncate whitespace-nowrap font-serif text-lg text-gold-soft">
              Mesa Connect
            </span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground sm:flex"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-sm transition-colors hover:text-gold ${FOCUS_STYLES}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <details className="relative sm:hidden">
            <summary
              className={`cursor-pointer list-none rounded-full border border-gold/40 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gold [&::-webkit-details-marker]:hidden ${FOCUS_STYLES}`}
            >
              Menu
            </summary>
            <nav
              aria-label="Menu principal"
              className="absolute right-0 top-[calc(100%+0.5rem)] flex w-56 flex-col rounded-2xl border border-gold/25 bg-popover p-2 shadow-xl"
            >
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={fecharMenu}
                  className={`rounded-xl px-4 py-3 text-sm text-popover-foreground transition-colors hover:bg-gold/10 hover:text-gold ${FOCUS_STYLES}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-24">
        <section id="inicio" className="scroll-mt-24 pb-16 pt-14 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            MESA Church
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-medium text-glow sm:text-5xl md:text-6xl">
            Puxe a cadeira. Ainda há lugar para você.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Conheça a Mesa Church, participe dos nossos encontros e encontre
            gente para caminhar com você na fé.
          </p>
          <div className="mx-auto mt-9 flex max-w-xl flex-col items-stretch justify-center gap-3 min-[420px]:flex-row min-[420px]:items-center">
            <a href="#encontros" className={PRIMARY_BUTTON}>
              Conhecer o próximo encontro
            </a>
            <a href="#pastoral" className={SECONDARY_BUTTON}>
              Conversar com a equipe
            </a>
          </div>
        </section>

        <section id="encontros" className="scroll-mt-24 py-10">
          <SectionTitle>Encontros</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            <article
              id="culto"
              className="scroll-mt-24 rounded-2xl border border-gold/25 bg-card/70 p-7 glow-gold sm:p-8"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">
                Encontro presencial
              </p>
              <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                Domingos, às 10:00
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Rua Antônio José Bastos, 33 — Parque Regina, Sala 1
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Venha celebrar conosco em um culto acolhedor, com adoração,
                Palavra e comunhão.
              </p>
              <a
                href={MAPA_CULTO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 ${SECONDARY_BUTTON}`}
              >
                Como chegar
              </a>
            </article>

            <article
              id="grupo"
              className="scroll-mt-24 rounded-2xl border border-gold/25 bg-card/70 p-7 glow-gold sm:p-8"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">
                Grupo de Conexão · Online
              </p>
              <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                Terças-feiras, às 09:00
              </h3>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
                Toda terça-feira · Horário de São Paulo
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Uma conversa sobre a Palavra, com oração e espaço para caminhar
                com gente de verdade.
              </p>
              <details className="mt-6 rounded-xl border border-border bg-background/40 p-4">
                <summary
                  className={`cursor-pointer list-none rounded-md text-sm font-semibold text-gold [&::-webkit-details-marker]:hidden ${FOCUS_STYLES}`}
                >
                  Como participar online
                </summary>
                <div className="mt-4 border-t border-border/60 pt-4">
                  <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                    <li>No horário do encontro, abra o link do Zoom abaixo.</li>
                    <li>
                      Se for seu primeiro acesso, o Zoom poderá oferecer a
                      abertura no aplicativo ou a continuação pelo navegador.
                    </li>
                    <li>Ao entrar, apresente-se e participe no seu ritmo.</li>
                  </ol>
                  <a
                    href={ZOOM_GRUPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 w-full ${PRIMARY_BUTTON}`}
                  >
                    Abrir link do Zoom
                  </a>
                </div>
              </details>
            </article>
          </div>
        </section>

        <section id="conheca" className="scroll-mt-24 py-10">
          <SectionTitle>Conheça a Mesa</SectionTitle>
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-7 sm:p-10">
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Conheça nossa história, nossa fé e como caminhamos juntos. Você
              pode começar por aqui, no seu ritmo.
            </p>
            <Link to="/manual" className={`mt-5 ${PRIMARY_BUTTON}`}>
              Conhecer nossa comunidade
            </Link>
          </div>
        </section>

        <section id="serie" className="scroll-mt-24 py-10">
          <SectionTitle>Série Amigo Teófilo</SectionTitle>
          <div className="rounded-2xl border border-border bg-card/50 p-7 sm:p-10">
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Acesse a série por um dos dois endereços disponíveis:
            </p>
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={AMIGO_TEOFILO_RUN_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={SECONDARY_BUTTON}
              >
                Série Amigo Teófilo · Run App
              </a>
              <a
                href={AMIGO_TEOFILO_AI_STUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={SECONDARY_BUTTON}
              >
                Série Amigo Teófilo · AI Studio
              </a>
            </div>
          </div>
        </section>

        <section id="pastoral" className="scroll-mt-24 py-10">
          <SectionTitle>Cuidado e Atendimento Pastoral</SectionTitle>
          <div className="flex flex-col items-center gap-7 rounded-2xl border border-border bg-card/60 p-7 text-center sm:flex-row sm:items-start sm:p-10 sm:text-left">
            <img
              src={pastorPhoto.url}
              alt="Pastor Raphael Sena"
              className="h-28 w-28 shrink-0 rounded-full border border-gold/40 object-cover"
            />
            <div className="min-w-0">
              <h3 className="font-serif text-2xl">Pastor Raphael Sena</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Quer conversar ou pedir oração? Entre em contato para combinar
                um horário.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                WhatsApp:{" "}
                <a
                  href={WHATSAPP_PASTOR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-sm text-gold underline underline-offset-4 transition-colors hover:text-gold-soft ${FOCUS_STYLES}`}
                >
                  (11) 98526-6308
                </a>
              </p>
              <a
                href={AGENDAMENTO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 ${SECONDARY_BUTTON}`}
              >
                Agendar Atendimento
              </a>
            </div>
          </div>
        </section>

        <section id="contribua" className="scroll-mt-24 py-10">
          <SectionTitle>Dízimos e Ofertas</SectionTitle>
          <div className="rounded-2xl border border-border bg-card/60 p-7 sm:p-10">
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Sua contribuição sustenta o cuidado, o discipulado e a missão da
              MESA. Toda semente semeada aqui vira mesa posta para alguém.
            </p>
            <dl className="mt-7 space-y-3">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <dt className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Banco
                </dt>
                <dd className="font-medium">PicPay</dd>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <dt className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Chave PIX
                </dt>
                <dd className="break-all font-medium text-gold">{PIX_KEY}</dd>
              </div>
            </dl>
            <button onClick={copiarPix} className={`mt-7 ${PRIMARY_BUTTON}`}>
              Copiar Chave PIX
            </button>
          </div>
        </section>

        <footer className="mt-14 border-t border-border/60 pt-10 text-center">
          <p className="font-serif text-2xl text-glow text-gold-soft">
            Porque na MESA, ainda há lugar.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            MESA Church · Igreja · Família · Propósito
          </p>
          <nav
            aria-label="Links do rodapé"
            className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            <Link
              to="/manual"
              className={`rounded-sm text-sm text-gold-soft underline underline-offset-4 hover:text-gold ${FOCUS_STYLES}`}
            >
              Manual de Integração
            </Link>
            <a
              href="#contribua"
              className={`rounded-sm text-sm text-gold-soft underline underline-offset-4 hover:text-gold ${FOCUS_STYLES}`}
            >
              Dízimos e Ofertas
            </a>
          </nav>
        </footer>
      </main>
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px flex-1 bg-border" />
      <h2 className="text-center font-serif text-sm uppercase tracking-[0.35em] text-gold-soft">
        {children}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
