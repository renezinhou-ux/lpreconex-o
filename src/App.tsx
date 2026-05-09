import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Quiz from './components/Quiz';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <main className="min-h-screen bg-brand-paper">
      <AnimatePresence mode="wait">
        {!showQuiz ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage onOpenQuiz={() => setShowQuiz(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center min-h-screen"
          >
            <div className="w-full">
              <div className="max-w-4xl mx-auto flex justify-between items-center px-6 pt-10">
                <button 
                  onClick={() => setShowQuiz(false)}
                  className="text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2"
                >
                  ← Voltar para o site
                </button>
              </div>
              <Quiz onComplete={() => setShowQuiz(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
