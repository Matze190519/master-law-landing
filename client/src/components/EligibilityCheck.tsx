import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

interface Question {
  id: string;
  text: string;
  correctAnswer: boolean; // true for Yes, false for No
}

interface EligibilityCheckProps {
  title: string;
  questions: Question[];
  successMessage: string;
  failMessage: string;
}

export default function EligibilityCheck({ title, questions, successMessage, failMessage }: EligibilityCheckProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isEligible, setIsEligible] = useState(false);

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Check eligibility
      const eligible = newAnswers.every((ans, index) => ans === questions[index].correctAnswer);
      setIsEligible(eligible);
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
    setIsEligible(false);
  };

  return (
    <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-white/5 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">{title}</h3>

      {!showResult ? (
        <div className="space-y-8">
          <div className="flex justify-between text-sm text-white/40 uppercase tracking-widest mb-4">
            <span>Frage {currentStep + 1} von {questions.length}</span>
            <span>{Math.round(((currentStep) / questions.length) * 100)}%</span>
          </div>
          
          <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-8">
            <div 
              className="h-full bg-white transition-all duration-500 ease-out"
              style={{ width: `${((currentStep) / questions.length) * 100}%` }}
            ></div>
          </div>

          <h4 className="text-xl md:text-2xl font-medium text-white text-center min-h-[80px] flex items-center justify-center">
            {questions[currentStep].text}
          </h4>

          <div className="grid grid-cols-2 gap-4">
            <Button 
              onClick={() => handleAnswer(true)}
              className="h-16 text-lg font-bold bg-white/10 hover:bg-white/20 border border-white/10"
            >
              Ja
            </Button>
            <Button 
              onClick={() => handleAnswer(false)}
              className="h-16 text-lg font-bold bg-white/10 hover:bg-white/20 border border-white/10"
            >
              Nein
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6 py-8 animate-in fade-in zoom-in duration-500">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto ${isEligible ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
            {isEligible ? <Check className="w-10 h-10" /> : <X className="w-10 h-10" />}
          </div>
          
          <h4 className="text-2xl font-bold text-white">
            {isEligible ? "Herzlichen Glückwunsch!" : "Vielen Dank für Ihre Antworten."}
          </h4>
          
          <p className="text-white/70 text-lg leading-relaxed">
            {isEligible ? successMessage : failMessage}
          </p>

          <div className="pt-6">
            <Button 
              onClick={() => window.location.href = "#contact"}
              className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg"
            >
              Jetzt Beratung vereinbaren <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            {!isEligible && (
              <button onClick={reset} className="block w-full mt-4 text-sm text-white/40 hover:text-white underline">
                Test wiederholen
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
