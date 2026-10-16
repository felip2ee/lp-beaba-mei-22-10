import React, { useEffect, useRef } from 'react';
import { CheckCircle2, ChevronDown, ArrowRight, Calendar, Clock, MapPin, MessageCircle, FileText, TrendingUp, Landmark, Target, Compass, Scale } from 'lucide-react';

// Contato do evento. Trocar aqui se mudar o número ou a mensagem.
const WHATSAPP_NUMERO = '556332157404';
const WHATSAPP_MENSAGEM = 'Olá! Quero garantir minha vaga no Beabá do Crédito, edição especial Novas Regras do MEI, dia 22 de outubro.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;
const CTA_TEXT = 'Garantir minha vaga';

const EVENTO = {
  data: '22 de outubro, quinta-feira',
  horario: 'das 19h às 21h',
  local: 'Centro de Formação Vira o Jogo',
  endereco: '104 Sul, Rua SE 5, Lote 3, 2º piso, Galeria Rocha, salas 20, 21, 22 e 23, Palmas, TO',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Galeria Rocha, 104 Sul, Rua SE 5, Palmas, TO')
};

const APRENDIZADOS = [
  [Scale, 'O que muda nas regras do MEI', 'e quais são os seus direitos a partir de agora.'],
  [Landmark, 'Como as mudanças impactam seu acesso ao crédito', 'o que o banco passa a olhar diferente.'],
  [FileText, 'Como organizar seu CNPJ e seu faturamento', 'pra buscar melhores oportunidades.'],
  [TrendingUp, 'Como usar crédito de forma assertiva', 'pra investir e fazer seu negócio crescer.'],
  [Compass, 'Quais oportunidades você deve conhecer', 'pra planejar o futuro da sua empresa.'],
  [Target, 'Regularização de dívidas', 'as possíveis medidas e o que elas podem representar pro MEI, conforme as condições aplicáveis.']
];

const FAQ = [
  {
    q: 'Quanto custa?',
    a: 'Entre em contato pelo WhatsApp pra receber as informações da edição e garantir sua vaga. As vagas são limitadas ao espaço da sala.'
  },
  {
    q: 'É presencial?',
    a: `Sim. Acontece no ${EVENTO.local}, em Palmas, TO, no dia ${EVENTO.data}, ${EVENTO.horario}.`
  },
  {
    q: 'Sou MEI, mas ainda não pedi crédito. Vale a pena?',
    a: 'Vale ainda mais. Quem entende as regras antes de precisar do dinheiro arruma a casa com calma e chega no banco preparado, em vez de descobrir o problema na hora da negativa.'
  },
  {
    q: 'Tenho dívidas no CNPJ. Posso ir?',
    a: 'Pode. Vamos conversar sobre as possíveis medidas de regularização de dívidas e o que elas podem representar pro MEI, conforme as condições aplicáveis. Saber o que resolver, e em que ordem, é o primeiro passo.'
  },
  {
    q: 'Vocês garantem a aprovação do crédito?',
    a: 'Não, e desconfie de quem garante. Quem aprova é o banco. A palestra prepara você pra chegar lá do jeito certo: CNPJ organizado, faturamento legível, pedido na linha certa e no valor que cabe no caixa.'
  },
  {
    q: 'Como garanto minha vaga?',
    a: 'Clique em qualquer botão da página. Você cai direto no WhatsApp da equipe e recebe as informações pra confirmar.'
  }
];

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const elems = mainRef.current?.querySelectorAll('.fade-up') ?? [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -15% 0px' }
    );

    elems.forEach((elem) => observer.observe(elem));
    return () => observer.disconnect();
  }, []);

  const CtaButton = ({ text = CTA_TEXT, className = '' }) => (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-magnetic inline-flex items-center justify-center gap-2 whitespace-nowrap bg-gradient-to-r from-accent to-[#F9D776] text-[#332200] font-bold uppercase tracking-wide rounded-full shadow-[0_0_30px_rgba(220,164,82,0.4)] hover:shadow-[0_0_40px_rgba(220,164,82,0.65)] transition-all ${className}`}
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      {text}
      <ArrowRight className="w-5 h-5 shrink-0 hidden sm:block" />
    </a>
  );

  const EventoInfo = ({ className = '' }) => (
    <ul className={`grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-left ${className}`}>
      {[
        [Calendar, 'Data', EVENTO.data],
        [Clock, 'Horário', EVENTO.horario],
        [MapPin, 'Local', EVENTO.local]
      ].map(([Icon, label, value]) => (
        <li key={label} className="flex items-center gap-2.5 bg-secondary/40 border border-accent/15 rounded-lg px-3 py-2.5">
          <Icon className="w-5 h-5 text-accent shrink-0" />
          <span className="text-[13px] sm:text-xs leading-tight">
            <span className="text-white/60 block uppercase tracking-wider text-[10px]">{label}</span>
            <strong className="text-white">{value}</strong>
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div ref={mainRef} className="w-full bg-background min-h-screen text-white font-sans selection:bg-accent selection:text-dark">
      <div className="noise-overlay"></div>

      {/* HERO */}
      <section className="relative w-full min-h-[100svh] flex flex-col bg-primary overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] mix-blend-overlay pointer-events-none">
          <img
            src="/assets/chave-hero.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width="800"
            height="800"
            className="w-[420px] md:w-[700px] h-auto object-contain animate-float-spin"
          />
        </div>

        <div className="relative z-10 w-full bg-secondary py-2 px-4 text-center">
          <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-white/90 tracking-wider uppercase leading-snug">
            Edição especial · Novas Regras do MEI · Presencial em Palmas, TO
          </p>
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 py-6 sm:py-8 text-center">
          <img
            src="/assets/logo-beaba.webp"
            alt="Beabá do Crédito"
            width="300"
            height="300"
            fetchpriority="high"
            decoding="async"
            className="w-20 sm:w-24 md:w-32 mb-3 md:mb-4 drop-shadow-2xl"
          />

          <p className="text-accent/90 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Empresário, você é MEI? Esta edição é pra você.
          </p>

          <h1 className="font-display font-extrabold text-accent uppercase leading-[1.12] text-[1.75rem] sm:text-3xl md:text-[2.6rem] drop-shadow-lg">
            As regras do MEI mudaram.<br className="hidden sm:block" />{' '}
            <span className="text-white">Seu acesso ao crédito também.</span>
          </h1>

          <p className="mt-3 md:mt-4 text-white/90 text-base md:text-lg leading-snug max-w-2xl">
            No dia <strong className="text-white">22 de outubro</strong>, a Rainha do Crédito mostra, ao vivo, o que muda nas novas regras, como organizar suas finanças e como se preparar pra conquistar crédito com estratégia.
          </p>

          <EventoInfo className="w-full mt-5 md:mt-6" />

          <div className="w-full mt-5 md:mt-6">
            <CtaButton className="w-full sm:w-auto text-base md:text-xl px-5 py-4 md:px-12 md:py-5" />
            <p className="mt-2 text-white/60 text-xs sm:text-sm">
              Vagas limitadas · Atendimento pelo WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="py-20 md:py-28 px-5 bg-background">
        <div className="max-w-4xl mx-auto fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase leading-tight text-center mb-8">
            Você sabe o que muda nas novas regras do MEI?
          </h2>

          <div className="bg-secondary/40 border border-accent/20 rounded-3xl p-6 md:p-10 shadow-2xl space-y-5 text-white/85 text-base md:text-lg leading-relaxed">
            <p>
              A maioria dos MEIs vai descobrir as mudanças do jeito mais caro: na hora que o pedido de crédito volta negado, ou quando a dívida já virou problema.
            </p>
            <p>
              O banco não olha só o seu CNPJ. Ele olha como você fatura, como declara, como organiza a conta da empresa. <strong className="text-white">Regra nova muda o que o banco enxerga.</strong> Quem entende antes, se prepara. Quem não entende, pede no escuro.
            </p>
            <p className="text-accent font-bold">
              Crédito não é dívida. É alavancagem quando existe estratégia e planejamento.
            </p>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI DESCOBRIR */}
      <section className="py-20 md:py-28 px-5 bg-primary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-accent opacity-[0.04] blur-[140px] rounded-full"></div>
        <div className="max-w-3xl mx-auto relative z-10 fade-up">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-accent uppercase text-center mb-3">
            O que você vai descobrir nessa palestra
          </h2>
          <p className="text-center text-white/70 mb-10">Duas horas, ao vivo, com quem estrutura crédito há mais de 16 anos.</p>

          <div className="space-y-4">
            {APRENDIZADOS.map(([Icon, title, sub]) => (
              <div key={title} className="bg-secondary rounded-2xl p-6 flex gap-4 border border-accent/20">
                <Icon className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
                  <p className="text-white/70 leading-relaxed">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CtaButton className="w-full md:w-auto text-base md:text-xl px-5 py-4 md:px-10 md:py-5" />
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="py-20 md:py-24 px-5 bg-background">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 fade-up">
          <div className="w-full md:w-2/5 relative">
            <div className="absolute inset-0 bg-accent rounded-full blur-[100px] opacity-20"></div>
            <img
              src="/assets/eliane.webp"
              alt="Eliane Moreira"
              width="640"
              height="960"
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full max-w-xs mx-auto rounded-3xl border-4 border-accent shadow-2xl object-cover"
            />
          </div>
          <div className="w-full md:w-3/5 text-center md:text-left">
            <p className="text-accent/80 text-sm font-semibold uppercase tracking-widest mb-2">Quem vai conduzir a palestra</p>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase mb-2">Eliane Moreira</h2>
            <h3 className="text-lg font-bold text-white mb-5">A Rainha do Crédito</h3>
            <div className="grid grid-cols-2 gap-3 mb-5 max-w-sm mx-auto md:mx-0">
              <div className="bg-secondary/60 border border-accent/20 rounded-xl p-3">
                <p className="text-accent font-display font-black text-2xl md:text-3xl">16+</p>
                <p className="text-white/70 text-xs md:text-sm">anos no mercado financeiro</p>
              </div>
              <div className="bg-secondary/60 border border-accent/20 rounded-xl p-3">
                <p className="text-accent font-display font-black text-2xl md:text-3xl">R$ 500 mi</p>
                <p className="text-white/70 text-xs md:text-sm">em operações de crédito aprovadas</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Participou da estruturação de mais de R$ 500 milhões em crédito pra centenas de empresas. Viu de perto por que empresa boa toma "não" e o que muda quando ela chega preparada.
            </p>
            <p className="text-white/80 leading-relaxed">
              Nesta edição, ela traduz as novas regras do MEI pra linguagem de quem precisa decidir: o que mudou, o que fazer primeiro e como usar crédito como alavanca, não como dívida.
            </p>
          </div>
        </div>
      </section>

      {/* LOCAL */}
      <section className="py-20 md:py-24 px-5 bg-primary">
        <div className="max-w-3xl mx-auto fade-up">
          <div className="bg-secondary/40 border-2 border-accent rounded-[2.5rem] p-6 md:p-12 text-center shadow-[0_0_60px_rgba(220,164,82,0.15)]">
            <p className="text-accent/80 text-sm font-semibold uppercase tracking-widest mb-3">Beabá do Crédito</p>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase mb-6">
              Edição especial: Novas Regras do MEI
            </h2>
            <EventoInfo className="mb-6" />
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-2 flex items-start justify-center gap-2">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
              <span>{EVENTO.endereco}</span>
            </p>
            <a
              href={EVENTO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 text-sm hover:text-white transition-colors"
            >
              Ver no mapa
            </a>
            <div className="mt-8">
              <CtaButton className="w-full md:w-auto text-base md:text-lg px-5 py-4 md:px-10 md:py-5" />
            </div>
          </div>
        </div>
      </section>

      {/* DÚVIDAS */}
      <section className="py-20 md:py-28 px-5 bg-background">
        <div className="max-w-3xl mx-auto fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-accent uppercase text-center mb-10">
            Perguntas frequentes
          </h2>
          <div className="space-y-3">
            {FAQ.map((faq, i) => (
              <details key={i} className="group bg-secondary rounded-2xl p-5 md:p-6 cursor-pointer border border-transparent hover:border-accent/30 transition-colors">
                <summary className="font-bold text-base md:text-lg text-white list-none flex justify-between items-center gap-4">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-accent shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-white/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 md:py-20 bg-dark text-white/40 text-center px-5 border-t border-white/5">
        <div className="max-w-3xl mx-auto mb-12 fade-up">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white uppercase mb-3">Quer participar?</h2>
          <h3 className="text-xl md:text-2xl text-accent font-bold mb-3">Entre em contato pra obter informações e garantir sua vaga.</h3>
          <p className="text-white/60 mb-8">22 de outubro, das 19h às 21h, no Centro de Formação Vira o Jogo, em Palmas. Esperamos você!</p>
          <CtaButton className="w-full md:w-auto text-base md:text-lg px-5 py-4 md:px-10 md:py-5" />
        </div>

        <div className="max-w-3xl mx-auto pt-8 border-t border-white/5">
          <h3 className="font-display font-bold text-lg text-white/60 mb-5 uppercase tracking-widest leading-relaxed">
            Beabá do Crédito
            <br />
            Eliane Moreira
          </h3>
          <p className="text-sm mb-8 max-w-2xl mx-auto leading-relaxed">
            Este site não é afiliado ao Facebook. A participação na palestra não garante aprovação de crédito; quem decide é a instituição financeira. As medidas de regularização de dívidas dependem das condições aplicáveis a cada caso.
          </p>
          <p className="text-xs">Copyright © 2026 Todos os Direitos Reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
