import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface QuizProps {
  onComplete: () => void;
}

const questions = [
  {
    id: 1,
    question: "Como você tem se sentido com mais frequência ultimamente?",
    options: [
      "Cansada sem motivo aparente",
      "Irritada com coisas pequenas",
      "Vazia, como se faltasse algo",
      "Invisível para as pessoas ao redor"
    ]
  },
  {
    id: 2,
    question: "Quando foi a última vez que você se sentiu verdadeiramente você mesma?",
    options: [
      "Faz alguns meses",
      "Faz mais de um ano",
      "Não consigo nem lembrar",
      "Não sei se algum dia me senti assim"
    ]
  },
  {
    id: 3,
    question: "O que mais te incomoda no seu dia a dia?",
    options: [
      "Não me reconheço mais no espelho",
      "Perdi o desejo por coisas que amava",
      "Me sinto incompreendida por todos",
      "Cuido de todo mundo menos de mim"
    ]
  },
  {
    id: 4,
    question: "Como você descreveria sua relação com seu próprio corpo hoje?",
    options: [
      "Distante — parece que não me pertence",
      "Com raiva — me cobro muito",
      "Indiferente — parei de me importar",
      "Perdida — não sei mais o que sinto"
    ]
  }
];

export default function Quiz({ onComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  if (isFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto text-left px-6 py-12"
        id="quiz-result"
      >
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
          onClick={onComplete}
          className="w-full bg-brand-accent text-white py-5 rounded-full font-bold text-xl hover:bg-brand-accent/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-accent/20"
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
          <h2 className="text-3xl font-serif font-medium mb-10 leading-snug text-brand-ink">
            {questions[currentStep].question}
          </h2>
          
          <div className="space-y-4">
            {questions[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-6 border border-brand-rose/20 rounded-2xl hover:border-brand-accent hover:bg-brand-creme transition-all group flex justify-between items-center"
                id={`quiz-option-${currentStep}-${idx}`}
              >
                <span className="text-brand-ink font-medium">{option}</span>
                <ArrowRight size={18} className="text-brand-rose group-hover:text-brand-accent transition-colors" />
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
