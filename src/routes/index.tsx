import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import mesaLogo from "@/assets/mesa-logo.jpeg";
import pastorPhoto from "@/assets/raphael-sena.png.asset.json";

const WHATSAPP_GRUPO = "https://chat.whatsapp.com/HAPS8amG15i45h5N6AOVrM";
const WHATSAPP_PASTOR = "https://wa.me/5511985266308";
const AGENDAMENTO_URL = WHATSAPP_PASTOR;
const AMIGO_TEOFILO_URL =
  "https://amigo-te-filo-mesa-church-411499305206.us-east1.run.app/";
const PIX_KEY = "mesachurchoficial@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mesa Connect — MESA Church" },
      {
        name: "description",
        content:
          "Um lugar de conexão e pertencimento onde quer que você esteja. Grupo de conexão às terças 09h, atendimento pastoral online e contribuição via PIX.",
      },
      { property: "og:title", content: "Mesa Connect — MESA Church" },
      {
        property: "og:description",
        content:
          "Grupo de conexão às terças 09h, cuidado pastoral online e contribuição via PIX.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MesaConnect,
});

const NAV = [
  { id: "inicio", label: "Início" },
  { id: "culto", label: "Culto de Celebração" },
  { id: "grupo", label: "Grupo de Conexão" },
  { id: "pastoral", label: "Atendimento Pastoral" },
  { id: "contribua", label: "Contribua" },
];

function nextTuesday9() {
  const now = new Date();
  const d = new Date(now);
  d.setHours(9, 0, 0, 0);
  const delta = (2 - d.getDay() + 7) % 7;
  d.setDate(d.getDate() + delta);
  if (d.getTime() <= now.getTime()) d.setDate(d.getDate() + 7);
  return d;
}

function Countdown() {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => {
      const diff = nextTuesday9().getTime() - Date.now();
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const mins = Math.floor((diff % 3600000) / 60000);
      setLabel(`${days}d ${hours}h ${mins}min`);
    };
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mt-6 inline-flex items-baseline gap-3 rounded-xl border border-border bg-background/40 px-5 py-3">
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Próximo encontro em
      </span>
      <span className="font-serif text-2xl text-gold text-glow tabular-nums">
        {label ?? "—"}
      </span>
    </div>
  );
}

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

  return (
    <div className="min-h-screen scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src={mesaLogo}
              alt="MESA Church"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="whitespace-nowrap font-serif text-lg text-gold-soft">
              Mesa Connect
            </span>
          </a>
          <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-24">
        {/* Hero */}
        <section id="inicio" className="scroll-mt-24 pt-14 pb-16 text-center">
          <div className="mx-auto mb-8 w-32 sm:w-40">
            <img
              src={mesaLogo}
              alt="Logotipo da MESA Church"
              className="w-full rounded-full glow-gold"
            />
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold-soft/80">
            MESA Church
          </p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-glow">
            Bem-vindo à Mesa Connect
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            Um lugar de conexão e pertencimento onde quer que você esteja.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#grupo"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Participar do Grupo
            </a>
            <a
              href={AMIGO_TEOFILO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gold/50 px-7 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              Série Amigo Teófilo
            </a>
            <a
              href="#pastoral"
              className="rounded-full border border-gold/50 px-7 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              Falar com o Pastor
            </a>
          </div>
        </section>

        {/* Conheça a MESA */}
        <section className="scroll-mt-24 py-10">
          <SectionTitle>Quer conhecer a MESA?</SectionTitle>
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-7 sm:p-10">
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Caminhe pelos passos do nosso Manual de Integração e descubra
              como assumir o seu lugar à mesa.
            </p>
            <Link
              to="/manual"
              className="mt-5 inline-flex items-center gap-1 rounded-full bg-gold px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Acessar Manual de Integração <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        {/* Culto de Celebração */}
        <section id="culto" className="scroll-mt-24 py-10">
          <SectionTitle>Culto de Celebração</SectionTitle>
          <div className="rounded-2xl border border-gold/25 bg-card/70 p-7 sm:p-10 glow-gold">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">
              Encontro Presencial
            </p>
            <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
              Domingos, às 10:00
            </h3>
            <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
              Rua Antônio José Bastos, 33 — Parque Regina, Sala 1
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Venha celebrar conosco em um culto acolhedor, com adoração,
              Palavra e comunhão. Um espaço para toda a família encontrar
              direção, esperança e pertencimento no Reino de Deus.
            </p>
            <div className="mt-7">
              <a
                href="https://maps.app.goo.gl/HuUnTK7REc1kNCUf6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-gold/50 px-8 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
              >
                Quero Ir no Domingo
              </a>
            </div>
          </div>
        </section>

        {/* Grupo de Conexão */}
        <section id="grupo" className="scroll-mt-24 py-10">
          <SectionTitle>Nosso Encontro Semanal</SectionTitle>
          <div className="rounded-2xl border border-gold/25 bg-card/70 p-7 sm:p-10 glow-gold">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">
              Grupo de Conexão Mesa
            </p>
            <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
              Terças-feiras, às 09:00
            </h3>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Uma hora para respirar, abrir a Palavra juntos e caminhar com
              gente de verdade. Sem palco, sem máscara — só uma mesa aberta,
              conversa honesta e oração uns pelos outros. Você não precisa
              chegar pronto; basta chegar.
            </p>
            <Countdown />
            <div className="mt-7">
              <a
                href={WHATSAPP_GRUPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-gold px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Quero Participar
              </a>
            </div>
          </div>
        </section>

        {/* Pastoral */}
        <section id="pastoral" className="scroll-mt-24 py-10">
          <SectionTitle>Cuidado e Atendimento Pastoral</SectionTitle>
          <div className="flex flex-col items-center gap-7 rounded-2xl border border-border bg-card/60 p-7 text-center sm:flex-row sm:items-start sm:p-10 sm:text-left">
            <img
              src={pastorPhoto.url}
              alt="Pastor Raphael Sena"
              className="h-28 w-28 shrink-0 rounded-full border border-gold/40 object-cover"
            />
            <div>
              <h3 className="font-serif text-2xl">Pastor Raphael Sena</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Precisa de oração, aconselhamento ou direcionamento? Você pode
                conversar diretamente com o nosso pastor, de forma reservada e
                online. Um espaço seguro para o que você carrega.
              </p>
              <p className="mt-3 text-sm text-gold-soft">
                Atendimentos com horário marcado durante a semana.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                WhatsApp:{" "}
                <a
                  href={WHATSAPP_PASTOR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline underline-offset-4 transition-colors hover:text-gold-soft"
                >
                  (11) 98526-6308
                </a>
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={AGENDAMENTO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-gold/50 px-8 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
                >
                  Agendar Atendimento
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contribua */}
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
            <button
              onClick={copiarPix}
              className="mt-7 inline-flex rounded-full bg-gold px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
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
          <Link
            to="/manual"
            className="mt-5 inline-block text-sm text-gold-soft underline underline-offset-4 hover:text-gold"
          >
            Manual de Integração
          </Link>
        </footer>
      </main>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-px flex-1 bg-border" />
      <h2 className="font-serif text-sm uppercase tracking-[0.35em] text-gold-soft">
        {children}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
