import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, ShieldCheck, Star, Users, MessageCircle, HelpCircle, ArrowDown } from 'lucide-react';

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
      title: "Material 1 — O Ciclo do Apagamento", 
      desc: "Entenda o que está acontecendo com seu corpo e suas emoções. Por que você se sente assim, quando começou e o que isso significa." 
    },
    { 
      id: "material-2", 
      title: "Material 2 — Hábitos que Reativam o Desejo e a Autoestima", 
      desc: "Práticas simples que você pode aplicar hoje. Não são receitas milagrosas — são hábitos que atuam diretamente nos gatilhos do apagamento feminino." 
    },
    { 
      id: "material-3", 
      title: "Material 3 — Como se Expressar e Ser Compreendida", 
      desc: "Este material te ajuda a entender suas emoções e comunicá-las — sem explodir, sem engolir, sem ser mal interpretada." 
    },
    { 
      id: "material-4", 
      title: "Material 4 — Autocuidado e Elegância: se sentir mulher de novo em 21 dias (Bônus)", 
      desc: "Um guia prático de reconexão com o seu próprio corpo. Não é sobre maquiagem ou roupa — é sobre se olhar com outros olhos." 
    }
  ];

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden selection:bg-brand-rose/20 selection:text-brand-ink">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-6 pt-16 pb-12 bg-brand-paper" id="hero">
        <motion.div {...fadeIn} className="max-w-4xl">
          <span className="text-brand-accent/60 uppercase tracking-[0.2em] text-xs font-bold mb-8 block">Protocolo da Reconexão Feminina</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8 text-brand-ink">
            Eu também me perdi. E entendo o quanto dói não se reconhecer mais.
          </h1>
          <blockquote className="border-l-4 border-brand-rose pl-6 py-2 text-brand-ink/60 italic text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-left">
            "Quantas versões de você já morreram sem você ter feito o luto?"
            <footer className="text-sm mt-2 not-italic text-brand-ink/40 uppercase tracking-widest font-bold">— O Peso do Pássaro Morto, Aline Bei</footer>
          </blockquote>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 animate-bounce"
        >
          <ArrowDown size={24} className="text-brand-rose/40" />
        </motion.div>
      </section>

      {/* Empathy Block */}
      <section className="py-12 px-6 md:px-12 max-w-5xl mx-auto" id="empathy">
        <motion.div {...fadeIn} className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-brand-ink/80 leading-relaxed">
              <p>
                Teve um tempo em que você entrava num lugar e se sentia presente. Não precisa ter sido perfeito — mas era seu. Você sabia quem era, o que queria, o que sentia.
              </p>
              <p className="font-serif text-2xl text-brand-ink italic">
                Hoje parece que essa mulher foi ficando pelo caminho. Silenciosamente. Sem que você percebesse exatamente quando.
              </p>
            </div>
            <div className="bg-brand-creme p-8 rounded-3xl border border-brand-rose/30 italic text-brand-ink/60 leading-relaxed">
              "Talvez você ainda sorria, ainda cuide de todo mundo, ainda dê conta de tudo. Mas por dentro existe uma sensação que é difícil de explicar — como se você estivesse vivendo uma vida que é sua, mas não te pertence mais."
            </div>
          </div>
          <div className="text-center py-12">
            <h2 className="text-3xl md:text-5xl font-serif text-brand-ink mb-6 font-medium">Quando foi que eu me perdi?</h2>
            <p className="text-brand-ink/60 max-w-2xl mx-auto">
              Você tenta se animar e não consegue. Tenta se sentir desejada e se sente invisível. Tenta se expressar e sente que ninguém entende de verdade. E no fim do dia, quando tudo acalma, sobra uma pergunta que dói mais do que qualquer coisa.
            </p>
          </div>
        </motion.div>
      </section>

      {/* NEW CTA SECTION */}
      <section className="py-12 px-6" id="new-cta">
        <motion.div {...fadeIn} className="max-w-xl mx-auto text-center flex flex-col items-center gap-4">
          <button 
            onClick={scrollToPricing}
            className="w-full bg-brand-accent text-white px-8 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-brand-accent/20 transition-all flex items-center justify-center gap-2 group"
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
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-brand-paper" id="testimonials">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4 text-brand-accent">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="currentColor" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-ink font-medium">O que outras mulheres estão dizendo</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Eu li a primeira página e chorei. Alguém finalmente colocou em palavras o que eu sinto há anos.", author: "Fernanda, 38 anos" },
              { text: "Não comprei esperando milagre. Comprei porque me vi em cada linha. Foi exatamente o que eu precisava.", author: "Mariana, 44 anos" },
              { text: "Sempre achei que era frescura minha. Esse protocolo me mostrou que não era — e isso sozinho já mudou tudo.", author: "Camila, 31 anos" }
            ].map((t, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="bg-brand-creme p-8 rounded-3xl border border-brand-rose/20 italic text-brand-ink/70 leading-relaxed flex flex-col justify-between shadow-sm"
              >
                <p className="mb-6">"{t.text}"</p>
                <div className="not-italic flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-rose/20 rounded-full flex items-center justify-center">
                    <Users size={16} className="text-brand-accent" />
                  </div>
                  <span className="text-sm font-semibold text-brand-ink">{t.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-brand-creme py-16 px-6" id="pains">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-brand-ink font-medium">Se você se reconhece aqui, este protocolo é pra você:</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Você acorda cansada mesmo depois de dormir",
              "Sente que perdeu o brilho que tinha",
              "Não tem mais vontade de se arrumar",
              "O desejo sumiu pelo parceiro e pela vida",
              "Você se irrita com facilidade e depois se culpa",
              "Sente que as pessoas não te entendem mais",
              "Tenta se expressar e é mal interpretada sempre",
              "Olha no espelho e não se reconhece na alma",
              "Sente que está ficando invisível",
              "Sente falta da versão que era mais viva"
            ].map((pain, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-4 hover:bg-white transition-colors rounded-xl group"
              >
                <div className="mt-1 text-brand-rose group-hover:text-brand-accent transition-colors">
                  <CheckCircle size={20} />
                </div>
                <span className="text-brand-ink/70 transition-colors">{pain}</span>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeIn} className="mt-16 text-center italic text-brand-ink/40 font-serif text-xl border-t border-brand-rose/20 pt-12">
            "Ela tinha o raro dom de não ser ninguém, de não existir para si mesma."
            <br />
            <span className="text-sm not-italic mt-2 block tracking-widest font-sans uppercase">— A Hora da Estrela, Clarice Lispector</span>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-4xl mx-auto" id="reversal">
        <motion.div {...fadeIn} className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-ink font-medium">Você não se perdeu porque é fraca.</h2>
          <p className="text-xl text-brand-ink/70 leading-relaxed">
            Você se perdeu porque ninguém te ensinou que isso ia acontecer — e muito menos como voltar.
            A sociedade te ensinou a cuidar de todo mundo. Te ensinou a sorrir exausta, a aguentar no limite, a diminuir o que sentia.
          </p>
          <blockquote className="py-8 text-2xl font-serif text-brand-ink italic border-y border-brand-rose/20 border-l-4 border-l-brand-accent/40 pl-6">
            "Você aprendeu a não querer. A não pedir. A não sentir. E chamou isso de maturidade."
            <footer className="text-sm not-italic mt-2 text-brand-ink/40 font-sans uppercase tracking-widest">— Animal, Lisa Taddeo</footer>
          </blockquote>
          <p className="text-lg text-brand-ink/70">
            Mas existe um caminho de volta. E ele começa quando você para de tratar o que sente como frescura — e começa a tratar como o que realmente é: <span className="font-semibold text-brand-ink">um sinal do seu corpo e da sua alma pedindo socorro.</span>
          </p>
          <div className="pt-12 flex flex-col gap-4 items-center max-w-xl mx-auto w-full">
            <button 
              onClick={scrollToPricing}
              className="w-full bg-brand-accent text-white px-8 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-brand-accent/20 transition-all flex items-center justify-center gap-2 group"
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
        </motion.div>
      </section>

      {/* Mechanism */}
      <section className="bg-brand-ink text-white py-16 px-6" id="mechanism">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-brand-rose uppercase tracking-widest text-xs font-bold">O MECANISMO</span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight font-medium">O Ciclo do Apagamento Feminino</h2>
              <p className="text-brand-warm/60 leading-relaxed">
                Quando a mulher acumula estresse, cobranças, mudanças hormonais ou simplesmente anos vivendo para os outros — o corpo e a mente entram no Ciclo do Apagamento Feminino.
              </p>
              <ul className="space-y-4">
                {["Não é depressão", "Não é loucura", "Não é frescura"].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-brand-warm/80">
                    <CheckCircle size={18} className="text-brand-rose" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/20 p-10 rounded-3xl border border-white/10 space-y-6">
              <p className="text-brand-warm/70 leading-relaxed">
                É um processo real, silencioso e progressivo que desliga — aos poucos — o seu desejo, a sua paciência, a sua autoestima e a sua identidade.
              </p>
              <div className="h-px bg-white/10 w-full" />
              <p className="text-xl font-serif text-white italic">
                A boa notícia é que esse ciclo tem reversão.
              </p>
              <p className="text-brand-warm/50 text-sm">
                Precisa de entendimento. E de um caminho prático pra seguir.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Product & Bonus */}
      <section className="py-16 px-6" id="product">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-brand-ink font-medium">O que você recebe no Protocolo</h2>
            <p className="text-brand-ink/60">
              Não é um curso longo, não é um livro genérico. É um caminho prático e direto feito por quem viveu isso.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="bg-brand-creme p-8 rounded-3xl border border-brand-rose/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent mb-6 font-bold shadow-sm">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold mb-4 text-brand-ink">{bonus.title}</h3>
                <p className="text-sm text-brand-ink/60 leading-relaxed">{bonus.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="bg-brand-creme py-16 px-6" id="steps">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20 text-brand-ink">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 font-medium">A Jornada em 3 Etapas</h2>
          </motion.div>

          <div className="space-y-12 relative">
            <div className="hidden md:block absolute left-[26px] top-4 bottom-4 w-px bg-brand-rose/30" />
            {steps.map((step, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="flex gap-8 items-start relative group">
                <div className="w-14 h-14 bg-brand-accent text-white rounded-full flex items-center justify-center shrink-0 z-10 font-bold transition-transform group-hover:scale-110 shadow-lg">
                  {i + 1}
                </div>
                <div className="pt-3">
                  <h3 className="text-2xl font-serif mb-3 text-brand-ink font-medium">{step.title}</h3>
                  <p className="text-brand-ink/60 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-24 text-center">
            <blockquote className="italic text-2xl font-serif text-brand-rose mb-4">
              "Não era sobre chegar a algum lugar. Era sobre se lembrar de quem ela era antes de esquecer."
            </blockquote>
            <span className="text-sm uppercase tracking-widest text-brand-ink/20 font-bold">— A Vida Invisível de Addie LaRue, V.E. Schwab</span>
          </motion.div>
        </div>
      </section>

      {/* Pricing / Anchor */}
      <section className="py-16 px-6 bg-brand-paper" id="pricing">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto bg-brand-accent text-white rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-accent/20">
          {/* Subtle patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 font-medium">O que isso vale de verdade?</h2>
            <p className="text-brand-rose/80 mb-12 leading-relaxed">
              Uma sessão de terapia custa R$300. Aqui, por menos de um jantar, você recebe o entendimento e o caminho prático pra superar.
            </p>
            
            <div className="flex flex-col items-center gap-4 mb-12">
              <span className="text-white/40 line-through text-2xl font-light">R$97</span>
              <span className="text-6xl md:text-7xl font-serif">R$47</span>
            </div>

            <button className="w-full bg-white text-brand-ink py-6 rounded-full font-bold text-xl hover:bg-brand-creme transition-all flex items-center justify-center gap-3 group shadow-xl">
              QUERO ME REENCONTRAR
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-all" />
            </button>
            
            <p className="mt-8 text-white/50 text-sm flex items-center justify-center gap-2">
              <ShieldCheck size={18} />
              Acesso imediato • Pagamento seguro
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-creme py-16 px-6" id="faq">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-ink font-medium">Dúvidas Frequentes</h2>
          </motion.div>
          
          <div className="space-y-6">
            {[
              { q: "Esse protocolo é pra mim se eu não tenho parceiro?", a: "Sim. O protocolo não é sobre relacionamento — é sobre você. Solteira, casada, divorciada — a reconexão começa sempre com você mesma." },
              { q: "Preciso de acompanhamento médico?", a: "Não. O protocolo trabalha com autoconhecimento e hábitos. Não substitui tratamento médico, mas não depende dele pra funcionar." },
              { q: "É só pra quem está na menopausa?", a: "Não. O Ciclo do Apagamento pode acontecer em qualquer fase da vida feminina por estresse, maternidade ou acúmulo de cobranças." },
              { q: "Quanto tempo leva pra ver resultado?", a: "Muitas relatam uma mudança de perspectiva já na primeira leitura. O protocolo de 21 dias foi pensado pra diferença real em menos de um mês." },
              { q: "E se eu não gostar?", a: "Você tem 30 dias de garantia total. Sem questionamentos. Reembolso total imediato." }
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} className="bg-white p-8 rounded-3xl border border-brand-rose/20 shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-brand-ink flex gap-3">
                  <MessageCircle size={20} className="text-brand-rose mt-1 shrink-0" />
                  {item.q}
                </h3>
                <p className="text-brand-ink/60 leading-relaxed ml-8">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-6 text-center" id="guarantee">
        <motion.div {...fadeIn} className="max-w-2xl mx-auto">
          <div className="w-24 h-24 bg-brand-creme rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck size={48} className="text-brand-accent" />
          </div>
          <h2 className="text-3xl font-serif mb-6 text-brand-ink font-medium">30 dias de garantia incondicional</h2>
          <p className="text-brand-ink/60 leading-relaxed mb-10 text-lg">
            Se você não se reconhecer nessas páginas — se não sentir que esse protocolo foi feito pra você — é só me avisar e eu devolvo cada centavo. Sem perguntas, sem burocracia.
          </p>
          <div className="h-px bg-brand-rose/20 max-w-xs mx-auto mb-10" />
          <p className="text-brand-ink/40 italic">"Eu confio no que construí aqui. E quero que você confie também."</p>
        </motion.div>
      </section>

      {/* Footer / Final CTA */}
      <section className="bg-brand-ink text-white py-16 px-6 text-center" id="footer">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight font-medium">
            Aquela mulher que você era — mais leve, mais viva, mais inteira — ela não foi embora.
          </h2>
          <p className="text-brand-rose/60 text-xl md:text-2xl mb-12 italic">
            Ela está esperando você se lembrar dela.
          </p>
          
          <button 
            onClick={scrollToPricing}
            className="bg-brand-accent text-white px-12 py-6 rounded-full font-bold text-2xl hover:scale-105 transition-all shadow-2xl shadow-black/20"
          >
            QUERO ME REENCONTRAR — R$47
          </button>
          
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
