import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

declare const fbq: any;

interface QuizProps {
  onComplete: () => void;
}

const questions = [
  {
    question: "Como você tem se sentido com mais frequência ultimamente?",
    subtitle: "Pode marcar mais de uma opção",
    options: [
      "Cansada sem motivo aparente",
      "Irritada com coisas pequenas",
      "Vazia, como se faltasse algo",
      "Invisível para as pessoas ao redor",
      "Sobrecarregada e sem energia pra mais nada"
    ]
  },
  {
    question: "Quando foi a última vez que você se sentiu verdadeiramente você mesma?",
    subtitle: "Pode marcar mais de uma opção",
    options: [
      "Faz alguns meses",
      "Faz mais de um ano",
      "Não consigo nem lembrar",
      "Não sei se algum dia me senti assim",
      "Me sinto assim às vezes, mas passa rápido"
    ]
  },
  {
    question: "O que mais te incomoda no seu dia a dia?",
    subtitle: "Pode marcar mais de uma opção",
    options: [
      "Não me reconheço mais no espelho",
      "Perdi o desejo por coisas que amava",
      "Me sinto incompreendida por todos",
      "Cuido de todo mundo menos de mim",
      "Me cobro por não ser feminina ou dedicada o suficiente"
    ]
  },
  {
    question: "Como você descreveria sua relação com seu próprio corpo hoje?",
    subtitle: "Pode marcar mais de uma opção",
    options: [
      "Distante — parece que não me pertence",
      "Com raiva — me cobro muito",
      "Indiferente — parei de me importar",
      "Perdida — não sei mais o que sinto",
      "Com vergonha — me comparo muito com outras mulheres"
    ]
  },
  {
    question: "O que você mais sente quando olha pras redes sociais?",
    subtitle: "Pode marcar mais de uma opção",
    options: [
      "Que minha vida não é suficiente",
      "Que meu corpo não é o ideal",
      "Que estou ficando pra trás",
      "Que preciso mudar pra ser aceita",
      "Que perdi minha identidade tentando me encaixar"
    ]
  }
];

export default function Quiz({ onComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string[]>>({});
  const [isFinished, setIsFinished] = useState(false);

  const toggleOption = (option: string) => {
    const currentSelected = selectedAnswers[currentStep] || [];
    if (currentSelected.includes(option)) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentStep]: currentSelected.filter(o => o !== option)
      });
    } else {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentStep]: [...currentSelected, option]
      });
    }
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const currentSelections = selectedAnswers[currentStep] || [];
  const canGoNext = currentSelections.length > 0;
  const totalSelected = Object.values(selectedAnswers).reduce((acc, curr) => acc + curr.length, 0);

  const progress = ((currentStep + 1) / questions.length) * 100;

  if (isFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto text-left px-6 py-12"
        id="quiz-result"
      >
        <p className="text-brand-accent font-sans font-semibold text-lg mb-6">
          Você se identificou com {totalSelected} situações diferentes.
        </p>
        <p className="text-brand-ink/60 text-sm italic mb-8">
          Isso não é coincidência.
        </p>

        <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-brand-ink leading-tight">
          Você não está sozinha.
        </h2>
        
        <div className="space-y-6 text-lg text-brand-ink/80 leading-relaxed mb-12">
          <p className="text-brand-ink">
            O que você sente tem nome. E tem caminho de volta.
          </p>
          <p>
            Eu também passei por isso. Por noites sem conseguir explicar o que faltava. Por dias sorrindo pra fora enquanto por dentro algo estava se apagando.
          </p>
          <p>
            Foi por isso que criei o Protocolo da Reconexão Feminina. Não como especialista. Como mulher que se perdeu — e encontrou o caminho de volta.
          </p>
        </div>

        <blockquote className="bg-brand-creme border-l-4 border-brand-accent p-8 text-brand-ink/70 italic text-xl mb-12">
          "Não era sobre chegar a algum lugar. Era sobre se lembrar de quem ela era antes de esquecer."
          <footer className="text-xs mt-4 not-italic text-brand-ink/40 uppercase tracking-widest font-bold">
            — A Vida Invisível de Addie LaRue, V.E. Schwab
          </footer>
        </blockquote>

        <button
          onClick={() => {
            if (typeof fbq !== 'undefined') {
              fbq('track', 'InitiateCheckout');
            }
            window.open('https://checkout.vitalite.life/VCCL1O8SD2H7', '_blank');
          }}
          className="w-full bg-brand-accent text-white py-5 rounded-full font-bold text-xl hover:bg-brand-accent/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-accent/20 text-center"
          id="quiz-finish-cta"
        >
          QUERO COMEÇAR MINHA RECONEXÃO — R$47
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="mt-6 text-center text-stone-400 text-sm">
          Acesso imediato · Garantia de 30 dias
        </p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10" id="quiz-container">
      <div className="mb-12">
        <h3 className="text-brand-ink/40 text-xs uppercase tracking-widest mb-4 font-semibold">
          Pergunta {currentStep + 1} de {questions.length}
        </h3>
        <div className="w-full h-1 bg-brand-rose/20 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-brand-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-10">
            <h2 className="text-3xl font-serif font-medium mb-2 leading-snug text-brand-ink">
              {questions[currentStep].question}
            </h2>
            <p className="text-brand-ink/40 text-sm italic">
              {questions[currentStep].subtitle}
            </p>
          </div>
          
          <div className="space-y-4">
            {questions[currentStep].options.map((option, idx) => {
              const isSelected = currentSelections.includes(option);
              return (
                <button
                  key={idx}
                  onClick={() => toggleOption(option)}
                  className={`w-full text-left p-6 border rounded-2xl transition-all group flex justify-between items-center ${
                    isSelected 
                      ? 'border-brand-accent bg-brand-accent/10' 
                      : 'border-brand-rose/20 hover:border-brand-accent hover:bg-brand-creme'
                  }`}
                  id={`quiz-option-${currentStep}-${idx}`}
                >
                  <span className={`font-medium ${isSelected ? 'text-brand-accent' : 'text-brand-ink'}`}>{option}</span>
                  {isSelected ? (
                    <Check size={20} className="text-brand-accent" />
                  ) : (
                    <ArrowRight size={18} className="text-brand-rose group-hover:text-brand-accent transition-colors opacity-0 group-hover:opacity-100" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-10 h-16">
            {canGoNext && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleNext}
                className="w-full bg-brand-accent text-white py-5 rounded-full font-bold text-lg hover:bg-brand-accent/90 transition-all flex items-center justify-center gap-2 group"
                id="quiz-next-btn"
              >
                {currentStep === questions.length - 1 ? 'Ver meu resultado →' : 'Próxima pergunta →'}
              </motion.button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
