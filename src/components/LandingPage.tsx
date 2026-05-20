import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Sparkles, Heart, ShieldCheck, Star, Users, MessageCircle, HelpCircle, ArrowDown } from 'lucide-react';

declare const fbq: any;

interface LandingPageProps {
  onOpenQuiz: () => void;
}

export default function LandingPage({ onOpenQuiz }: LandingPageProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const steps = [
    { title: "1. Reconhecer", desc: "Você entende o que está acontecendo com você de verdade. Não é frescura, não é fraqueza — é o Ciclo do Apagamento. Só de entender isso, algo muda." },
    { title: "2. Entender", desc: "Você identifica onde o apagamento entrou na sua vida — e quais gatilhos estão mantendo ele ativo. Esse passo é o mais poderoso porque ninguém te ensinou isso antes." },
    { title: "3. Reconectar", desc: "Você aplica o protocolo no seu ritmo, no seu tempo. E aos poucos aquela mulher que estava escondida começa a aparecer de novo." }
  ];

  const bonuses = [
    { 
      id: "material-1", 
      title: "O Despertar — entenda o que está acontecendo com você", 
      desc: "Entenda o que está acontecendo com seu corpo e suas emoções. Por que você se sente assim, quando começou e o que isso significa." 
    },
    { 
      id: "material-2", 
      title: "A Virada — hábitos que reativam o desejo e a autoestima", 
      desc: "Práticas simples que você pode aplicar hoje. Não são receitas milagrosas — são hábitos que atuam diretamente nos gatilhos do apagamento feminino." 
    },
    { 
      id: "material-3", 
      title: "A Voz — como se expressar e ser compreendida de verdade", 
      desc: "Este material te ajuda a entender suas emoções e comunicá-las — sem explodir, sem engolir, sem ser mal interpretada." 
    },
    { 
      id: "material-4", 
      title: "O Reencontro — se sentir mulher de novo em 21 dias ✦", 
      desc: "Um guia prático de reconexão com o seu próprio corpo. Não é sobre maquiagem ou roupa — é sobre se olhar com outros olhos." 
    }
  ];

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden selection:bg-brand-rose/20 selection:text-brand-ink">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16 pb-12"
        id="hero"
      >
        {/* Fundo vinho escuro */}
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(160deg, #2D1520 0%, #1A0D12 60%, #2D1520 100%)' }} />
        {/* Imagem por cima do fundo com baixa opacidade */}
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage: 'url(https://i.imgur.com/ipBan1m.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            opacity: 0.22
          }}
        />
        {/* Conteúdo */}
        <motion.div {...fadeIn} className="relative z-10 max-w-4xl">
          <span className="italic text-white/30 text-sm mb-8 block tracking-normal font-normal">
            Leia com calma. Talvez seja sobre você.
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight mb-8 text-white">
            Eu também me perdi. E entendo o quanto dói não se reconhecer mais.
          </h1>
          <div className="mt-6 mb-10 space-y-3">
            <p className="text-white/50 text-lg md:text-xl font-serif italic">
              Você acorda cansada. Perdeu o brilho.
            </p>
            <p className="text-white text-4xl md:text-6xl font-display font-bold tracking-normal" style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              Não se reconhece mais.
            </p>
            <p className="text-brand-rose font-medium text-base md:text-lg mt-6 block not-italic font-sans tracking-wide">
              Se isso é você — continue lendo.
            </p>
          </div>
          <button 
            onClick={() => document.getElementById('empathy')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-brand-rose/70 italic font-serif text-lg hover:text-brand-rose transition-colors"
          >
            Continuar lendo →
          </button>
        </motion.div>
      </section>

      <section id="empathy" className="py-14 md:py-20 px-6 bg-brand-paper">
        <motion.div {...fadeIn} className="max-w-2xl mx-auto text-center space-y-10">
          {/* entrada suave */}
          <p className="font-serif text-lg md:text-xl text-brand-ink/60 leading-relaxed italic">
            Eu sei o que é acordar e sentir que algo foi embora sem você perceber quando.
          </p>
          {/* cresce */}
          <p className="font-serif text-xl md:text-2xl text-brand-ink leading-relaxed">
            Sei o que é carregar tudo — as expectativas que colocaram em você antes mesmo de você saber quem era, as responsabilidades que foram chegando sem manual, a vida adulta que ninguém te preparou pra ter.
          </p>
          {/* acelera — lista rápida */}
          <p className="font-serif text-base md:text-lg text-brand-ink/50 italic leading-loose tracking-wide">
            A conta pra pagar. O trabalho que consome. A família que precisa. Os sonhos que foram ficando pra depois.
          </p>
          {/* ponte para os bullets — substitui a citação do Aline Bei */}
          <p className="font-serif text-base text-brand-ink/35 italic pt-4 border-t border-brand-rose/15">
            Se você chegou até aqui — o que vem abaixo foi escrito pra você.
          </p>
        </motion.div>
      </section>

      <div className="w-full h-[280px] md:h-[380px] relative overflow-hidden">
        <img 
          src="https://i.imgur.com/H64bsIx.jpg" 
          alt="" 
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.85) saturate(0.9)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-paper/40 via-brand-ink/50 to-brand-rose/30" />
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <p className="font-serif italic text-white text-2xl md:text-3xl text-center drop-shadow-2xl max-w-lg leading-relaxed">
            "E no fim do dia —<br/>aquele vazio que não tem nome certo."
          </p>
        </div>
      </div>

      {/* Pain Points */}
      <section className="bg-brand-rose/10 py-16 px-6" id="pains">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <p className="text-brand-ink/40 text-sm uppercase tracking-widest font-sans mb-4">Você se reconhece aqui?</p>
            <h2 className="leading-tight">
              <span className="block text-5xl md:text-6xl text-brand-ink" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}>Isso também</span>
              <span className="block text-4xl md:text-5xl font-serif italic text-brand-accent font-light">é sobre você.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6">
            {[
              "Você acorda cansada mesmo depois de dormir",
              "Sente que perdeu o brilho que tinha",
              "O desejo sumiu — pela vida, pelas coisas, por você mesma",
              "Você se irrita com facilidade e depois se culpa",
              "Sente que as pessoas não te entendem mais",
              "Olha no espelho e não se reconhece na alma",
              "Se cobra por não ser feminina, organizada ou dedicada o suficiente",
              "Olha pras redes sociais e sente que sua vida ou seu corpo não são suficientes",
              "Perdeu contato com quem você realmente é — seus gostos, sua personalidade, suas vontades",
              "Sente falta da versão que era mais viva"
            ].map((pain, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-4 hover:bg-brand-rose/20 transition-colors rounded-xl group"
              >
                <span className="text-brand-accent font-bold text-lg mt-0.5">—</span>
                <span className="text-brand-ink/80 transition-colors">{pain}</span>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeIn} className="mt-16 bg-brand-ink rounded-3xl p-8 md:p-14 text-center">
            <p className="italic text-white font-serif text-xl md:text-3xl font-medium leading-relaxed">
              "Ela tinha o raro dom de não ser ninguém, de não existir para si mesma."
            </p>
            <span className="text-white/30 text-xs not-italic mt-6 block tracking-widest font-sans uppercase">
              — A Hora da Estrela, Clarice Lispector
            </span>
          </motion.div>
          
          <p className="text-center font-serif italic text-brand-ink/40 text-lg mt-10 mb-2">
            Você não está sozinha nisso.<br/>
            <span className="text-brand-accent not-italic font-medium text-base">E existe um caminho de volta.</span>
          </p>
          
          <div className="mt-12 flex flex-col gap-4 items-center max-w-xl mx-auto w-full">
            <button 
              onClick={() => {
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'InitiateCheckout');
                }
                window.open('https://checkout.vitalite.life/VCCL1O8SD2H7', '_blank');
              }}
              className="w-full bg-brand-accent text-white px-8 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-brand-accent/20 transition-all flex items-center justify-center gap-2 group text-center"
            >
              QUERO ME REENCONTRAR — R$47
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-all" />
            </button>
            <button 
              onClick={onOpenQuiz}
              className="w-full border-[1.5px] border-brand-accent text-brand-accent bg-transparent px-8 py-5 rounded-full font-bold transition-all hover:bg-brand-accent/5"
            >
              Fazer o teste do Ciclo do Apagamento →
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-brand-creme" id="reversal">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-serif text-brand-ink/40 font-light italic">
                Você não se perdeu
              </h2>
              <h2 className="text-5xl md:text-7xl text-brand-ink" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900 }}>
                porque é fraca.
              </h2>
            </div>
            <p className="text-xl text-brand-ink/80 leading-relaxed">
              Você se perdeu porque ninguém te ensinou que isso ia acontecer — e muito menos como voltar.
              A sociedade te ensinou a cuidar de todo mundo. Te ensinou a sorrir exausta, a aguentar no limite, a diminuir o que sentia.
            </p>
            <div className="bg-brand-ink/5 border-l-4 border-brand-accent rounded-r-2xl py-8 px-8 text-left">
              <p className="text-2xl font-serif text-brand-ink italic leading-relaxed">
                "Você aprendeu a não querer. A não pedir. A não sentir. E chamou isso de maturidade."
              </p>
              <span className="text-xs not-italic mt-4 block text-brand-ink/30 uppercase tracking-widest font-bold">
                — Animal, Lisa Taddeo
              </span>
            </div>

            <div className="w-full h-[260px] md:h-[360px] relative overflow-hidden rounded-3xl my-8">
              <img 
                src="https://i.imgur.com/eOl2rgx.jpg" 
                alt="" 
                className="w-full h-full object-cover object-center"
                style={{ filter: 'brightness(0.9) saturate(0.85)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-creme/80 via-transparent to-transparent" />
            </div>

            <p className="text-lg text-brand-ink/80">
              Mas existe um caminho de volta. E ele começa quando você para de tratar o que sente como frescura — e começa a tratar como o que realmente é: <span className="font-semibold text-brand-ink">um sinal do seu corpo e da sua alma pedindo socorro.</span>
            </p>
            <button onClick={scrollToPricing} className="text-brand-accent font-medium text-lg underline underline-offset-8 decoration-brand-rose hover:decoration-brand-accent transition-colors mt-4">
              Quero encontrar meu caminho de volta →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="text-white py-16 px-6" style={{ background: 'linear-gradient(135deg, #2D1520 0%, #3D1A2A 100%)' }} id="mechanism">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <span className="text-brand-rose uppercase tracking-widest text-xs font-bold">O MECANISMO</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight font-light">O Ciclo do Apagamento Feminino</h2>
            <p className="text-brand-warm/80 leading-relaxed text-lg">
              Quando a mulher acumula estresse, cobranças, mudanças hormonais ou simplesmente anos vivendo para os outros — o corpo e a mente entram no Ciclo do Apagamento Feminino.
            </p>
          </div>
          
          <div className="space-y-6 text-brand-warm/80 leading-relaxed">
            <p>
              É um processo real, silencioso e progressivo que desliga — aos poucos — o seu desejo, a sua paciência, a sua autoestima e a sua identidade.
            </p>
            <div className="py-12 border-y border-white/10">
              <p className="text-white/30 text-sm uppercase tracking-widest font-sans mb-4">
                mas aqui está o que ninguém te disse:
              </p>
              <p className="text-4xl md:text-5xl text-white leading-snug" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800 }}>
                A boa notícia é que esse ciclo tem reversão.
              </p>
            </div>
            <p className="text-lg">
              Precisa de entendimento. E de um caminho prático pra seguir.
            </p>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-6">
              {["Não é depressão", "Não é loucura", "Não é frescura"].map((item, i) => (
                <li key={i} className="flex gap-3 items-center text-brand-warm/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-rose" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The Product & Bonus */}
      <section className="py-16 px-6" id="product">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20 max-w-2xl mx-auto">
            <p className="text-brand-ink/30 text-sm uppercase tracking-widest font-sans mb-4">o que foi feito pra você</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-brand-ink font-light">O que você recebe no Protocolo</h2>
            <p className="text-brand-ink/80">
              Não é um curso longo, não é um livro genérico. É um caminho prático e direto feito por quem viveu isso.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { ...bonuses[0], icon: BookOpen },
              { ...bonuses[1], icon: Sparkles },
              { ...bonuses[2], icon: MessageCircle },
              { ...bonuses[3], icon: Heart }
            ].map((bonus, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="bg-brand-creme p-8 rounded-3xl border border-brand-rose/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all relative group"
              >
                <div className="absolute top-6 right-6 text-brand-ink/20 font-bold text-sm tracking-widest">
                  0{i + 1}
                </div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <bonus.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-ink leading-tight">{bonus.title}</h3>
                <p className="text-sm text-brand-ink/80 leading-relaxed">{bonus.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="bg-brand-creme py-16 px-6" id="steps">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20 text-brand-ink">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 font-light">A Jornada em 3 Etapas</h2>
          </motion.div>

          <div className="space-y-12 relative">
            <div className="hidden md:block absolute left-[26px] top-4 bottom-4 w-px bg-brand-rose/30" />
            {steps.map((step, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="flex gap-8 items-start relative group">
                <div className="w-14 h-14 bg-brand-accent text-white rounded-full flex items-center justify-center shrink-0 z-10 font-bold transition-transform group-hover:scale-110 shadow-lg">
                  {i + 1}
                </div>
                <div className="pt-3">
                  <h3 className="text-2xl font-serif mb-3 text-brand-ink font-light">{step.title}</h3>
                  <p className="text-brand-ink/80 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-24 text-center">
            <blockquote className="italic text-2xl font-serif text-brand-rose mb-4">
              "Não era sobre chegar a algum lugar. Era sobre se lembrar de quem ela era antes de esquecer."
            </blockquote>
            <span className="text-sm uppercase tracking-widest text-brand-ink/40 font-bold">— A Vida Invisível de Addie LaRue, V.E. Schwab</span>
          </motion.div>
        </div>
      </section>

      {/* Pricing / Anchor */}
      <section className="py-16 px-6 bg-brand-paper" id="pricing">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto bg-brand-accent text-white rounded-[40px] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-accent/20">
          {/* Subtle patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 font-light">O que isso vale de verdade?</h2>
            <p className="text-brand-rose/80 mb-12 leading-relaxed">
              Uma sessão de terapia custa R$300. Aqui, por menos de um jantar, você recebe o entendimento e o caminho prático pra superar.
            </p>
            
            <div className="flex flex-col items-center gap-4 mb-4">
              <span className="text-white/40 line-through text-2xl font-light">R$97</span>
              <span className="text-6xl md:text-7xl font-sans font-bold">R$47</span>
            </div>

            <div className="mb-8">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-6">
                ⏳ Oferta de lançamento — preço retorna a R$97 em breve
              </p>
            </div>

            <button 
              onClick={() => {
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'InitiateCheckout');
                }
                window.open('https://checkout.vitalite.life/VCCL1O8SD2H7', '_blank');
              }}
              className="w-full bg-white text-brand-ink py-6 rounded-full font-bold text-xl hover:bg-brand-creme transition-all flex items-center justify-center gap-3 group shadow-xl text-center"
            >
              QUERO ME REENCONTRAR — R$47
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-all" />
            </button>
            
            <p className="mt-8 text-white/50 text-sm flex items-center justify-center gap-2">
              <ShieldCheck size={18} />
              Acesso imediato • Pagamento seguro
            </p>
          </div>
        </motion.div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-6 text-center" id="guarantee">
        <motion.div {...fadeIn} className="max-w-2xl mx-auto">
          <div className="w-24 h-24 bg-brand-creme rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck size={48} className="text-brand-rose" />
          </div>
          <h2 className="text-3xl font-serif mb-6 text-brand-ink font-light">30 dias de garantia incondicional</h2>
          <p className="text-brand-ink/80 leading-relaxed mb-4 text-lg">
            Se você não se reconhecer nessas páginas — se não sentir que esse protocolo foi feito pra você — é só me avisar e eu devolvo cada centavo. Sem perguntas, sem burocracia.
          </p>
          <p className="text-brand-ink/30 text-sm mb-10">
            Basta enviar um e-mail em até 30 dias. Reembolso processado em até 7 dias úteis.
          </p>
          <div className="h-px bg-brand-rose/20 max-w-xs mx-auto mb-10" />
          <p className="text-brand-ink/40 italic">"Eu confio no que construí aqui. E quero que você confie também."</p>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-brand-paper" id="testimonials">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-ink font-light mb-4">O que você vai sentir ao ler</h2>
            <p className="text-brand-ink/50 text-sm italic">Baseado em relatos de mulheres que passaram por isso</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                feeling: "Finalmente alguém colocou em palavras o que eu sinto há anos e não conseguia explicar.", 
                name: "Fernanda, 38 anos",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
              },
              { 
                feeling: "Eu parei de ler três vezes porque precisava respirar. Me reconheci em cada linha.", 
                name: "Mariana, 45 anos",
                image: "https://i.imgur.com/qmac9QM.png"
              },
              { 
                feeling: "Achei que era frescura minha. Descobri que tinha nome. E isso sozinho já mudou algo em mim.", 
                name: "Camila, 31 anos",
                image: "https://i.imgur.com/Bqr0wao.png"
              }
            ].map((t, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}
                className="bg-brand-creme p-8 rounded-3xl border border-brand-rose/20 shadow-sm flex flex-col gap-6 group hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-0.5 text-brand-accent">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                </div>
                
                <p className="italic text-brand-ink/80 leading-relaxed flex-1">"{t.feeling}"</p>
                
                <div className="flex items-center gap-4 not-italic mt-4">
                  <div className="w-12 h-12 rounded-full border-2 border-brand-rose/30 overflow-hidden shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    {t.image ? (
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-brand-rose/20 flex items-center justify-center">
                        <span className="text-brand-accent font-bold text-sm">{t.name[0]}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-brand-ink">{t.name}</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-ink/40">Depoimento Verificado</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-creme py-16 px-6" id="faq">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-ink font-light">Dúvidas Frequentes</h2>
          </motion.div>
          
          <div className="space-y-6">
            {[
              { q: "Esse protocolo é pra mim se eu não tenho parceiro?", a: "Sim. O protocolo não é sobre relacionamento — é sobre você. Solteira, casada, divorciada — a reconexão começa sempre com você mesma.", icon: Heart },
              { q: "Preciso de acompanhamento médico?", a: "Não. O protocolo trabalha com autoconhecimento e hábitos. Não substitui tratamento médico, mas não depende dele pra funcionar.", icon: ShieldCheck },
              { q: "É só pra quem está na menopausa?", a: "Não. O Ciclo do Apagamento pode acontecer em qualquer fase da vida feminina por estresse, maternidade ou acúmulo de cobranças.", icon: Sparkles },
              { q: "Quanto tempo leva pra ver resultado?", a: "Muitas relatam uma mudança de perspectiva já na primeira leitura. O protocolo de 21 dias foi pensado pra diferença real em menos de um mês.", icon: Star },
              { q: "E se eu não gostar?", a: "Você tem 30 dias de garantia total. Sem questionamentos. Reembolso total imediato.", icon: ShieldCheck }
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} className="bg-white p-8 rounded-3xl border border-brand-rose/20 shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-brand-ink flex gap-3">
                  <item.icon size={20} className="text-brand-rose mt-1 shrink-0" />
                  {item.q}
                </h3>
                <p className="text-brand-ink/80 leading-relaxed ml-8">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <section className="bg-brand-ink text-white py-16 px-6 text-center" id="footer">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-serif mb-8 leading-tight font-light">
            Aquela mulher que você era — mais leve, mais viva, mais inteira — ela não foi embora.
          </h2>
          <p className="text-brand-rose text-2xl md:text-4xl mt-4 mb-12" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Ela está esperando você se lembrar dela.
          </p>
          
          <p className="font-serif italic text-white/25 text-lg mb-8">
            "Não era sobre chegar a algum lugar. Era sobre se lembrar de quem ela era antes de esquecer."
            <span className="block text-xs not-italic uppercase tracking-widest text-white/15 mt-2 font-bold">— A Vida Invisível de Addie LaRue, V.E. Schwab</span>
          </p>

          <div className="w-full h-[320px] md:h-[420px] relative overflow-hidden rounded-3xl mb-12 mx-auto max-w-2xl">
            <img 
              src="https://i.imgur.com/9iLHDKn.jpg" 
              alt="" 
              className="w-full h-full object-cover object-top"
              style={{ filter: 'brightness(0.7) saturate(0.8)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent" />
          </div>
          
          <button 
            onClick={() => {
              if (typeof fbq !== 'undefined') {
                fbq('track', 'InitiateCheckout');
              }
              window.open('https://checkout.vitalite.life/VCCL1O8SD2H7', '_blank');
            }}
            className="inline-block bg-brand-accent text-white px-12 py-6 rounded-full font-bold text-2xl hover:scale-105 transition-all shadow-2xl shadow-black/20 text-center"
          >
            QUERO ME REENCONTRAR — R$47
          </button>
          
          <button onClick={onOpenQuiz} className="mt-4 border-[1.5px] border-white/30 text-white/70 bg-transparent px-12 py-4 rounded-full font-medium text-lg transition-all hover:border-white hover:text-white block mx-auto">
            Fazer o teste do Ciclo do Apagamento →
          </button>
          
          <p className="text-white/30 text-sm mt-6">
            Acesso imediato após a compra · Garantia incondicional de 30 dias
          </p>
          
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/10 gap-8">
            <span className="text-brand-warm/30 text-sm">© 2026 Protocolo da Reconexão Feminina • Vitalité Ads</span>
            <div className="flex gap-8 text-brand-warm/30 text-sm font-medium">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
