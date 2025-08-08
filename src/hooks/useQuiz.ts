import { useState } from "react";
import type { Question, CanonicalTrait } from "@/lib/constants";
import { PERSONALITY_TYPES, TRAIT_ALIASES } from "@/lib/constants";

type QuizState = {
  currentQuestionIndex: number;
  answers: Record<number, number>; // { questionId: selectedOptionValue }
  personalityTraits: Partial<Record<CanonicalTrait, number>>; // canonical counts
};

export default function useQuiz(questions: Question[]) {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    personalityTraits: {},
  });

  const currentQuestion =
    quizState.currentQuestionIndex < questions.length
      ? questions[quizState.currentQuestionIndex]
      : undefined;

  const isLastQuestion =
    quizState.currentQuestionIndex === questions.length - 1;

  const submitAnswer = (selectedOptionValue: number) => {
    if (!currentQuestion) return;

    const selectedOption = currentQuestion.options.find(
      (opt) => opt.value === selectedOptionValue
    );
    if (!selectedOption) return;

    // Normalize traits to canonical keys before counting
    const updatedTraits = { ...quizState.personalityTraits };
    for (const raw of selectedOption.personalityTrait) {
      const canonical = (TRAIT_ALIASES[raw] ?? raw) as CanonicalTrait;
      if (canonical in PERSONALITY_TYPES) {
        updatedTraits[canonical] = (updatedTraits[canonical] ?? 0) + 1;
      }
      // Unknown traits are ignored
    }

    // Advance
    setQuizState((prev) => ({
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: selectedOptionValue,
      },
      personalityTraits: updatedTraits,
    }));
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      answers: {},
      personalityTraits: {},
    });
  };

  const progress = Math.round(
    (quizState.currentQuestionIndex / questions.length) * 100
  );

  return {
    currentQuestion,
    isLastQuestion,
    submitAnswer,
    resetQuiz,
    personalityTraits: quizState.personalityTraits,
    answers: quizState.answers,
    progress,
    totalQuestions: questions.length,
  };
}
