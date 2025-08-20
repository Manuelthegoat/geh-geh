// src/hooks/useQuiz.ts
import { useState, useMemo } from "react";
import type { Question, CanonicalTrait } from "@/lib/constants";
import { COURSES, TRAIT_ALIASES } from "@/lib/constants";

type QuizState = {
  currentQuestionIndex: number;
  answers: Record<number, number>; // { questionId: selectedOptionValue }
};

export type UseQuizReturn = {
  currentQuestion?: Question;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  submitAnswer: (selectedOptionValue: number) => void;
  goBack: () => void;
  resetQuiz: () => void;
  personalityTraits: Partial<Record<CanonicalTrait, number>>;
  answers: Record<number, number>;
  selectedValue?: number;
  progress: number; // 0 - 100
  totalQuestions: number;
};

export default function useQuiz(questions: Question[]): UseQuizReturn {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
  });

  const totalQuestions = questions.length;

  const currentQuestion =
    quizState.currentQuestionIndex < totalQuestions
      ? questions[quizState.currentQuestionIndex]
      : undefined;

  const isFirstQuestion = quizState.currentQuestionIndex === 0;
  const isLastQuestion = quizState.currentQuestionIndex === totalQuestions - 1;

  // Recompute trait tallies from the current answers map (prevents double-counting)
  const personalityTraits = useMemo(() => {
    const tallies: Partial<Record<CanonicalTrait, number>> = {};
    for (const q of questions) {
      const selectedValue = quizState.answers[q.id];
      if (selectedValue == null) continue;
      const opt = q.options.find((o) => o.value === selectedValue);
      if (!opt) continue;

      for (const raw of opt.personalityTrait) {
        const canonical = (TRAIT_ALIASES[raw] ?? raw) as CanonicalTrait;
        if (canonical in COURSES) {
          tallies[canonical] = (tallies[canonical] ?? 0) + 1;
        }
      }
    }
    return tallies;
  }, [quizState.answers, questions]);

  const submitAnswer = (selectedOptionValue: number) => {
    if (!currentQuestion) return;

    setQuizState((prev) => {
      const newAnswers = {
        ...prev.answers,
        [currentQuestion.id]: selectedOptionValue,
      };

      // If user just answered the last question, move index to totalQuestions to trigger results screen.
      const nextIndex =
        prev.currentQuestionIndex + 1 <= totalQuestions
          ? prev.currentQuestionIndex + 1
          : totalQuestions;

      return {
        currentQuestionIndex: nextIndex,
        answers: newAnswers,
      };
    });
  };

  const goBack = () => {
    setQuizState((prev) => {
      const nextIndex =
        prev.currentQuestionIndex > 0 ? prev.currentQuestionIndex - 1 : 0;
      return {
        ...prev,
        currentQuestionIndex: nextIndex,
      };
    });
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      answers: {},
    });
  };

  const progress = Math.round(
    (Math.min(quizState.currentQuestionIndex, totalQuestions) / totalQuestions) * 100
  );

  const selectedValue =
    currentQuestion ? quizState.answers[currentQuestion.id] : undefined;

  return {
    currentQuestion,
    isFirstQuestion,
    isLastQuestion,
    submitAnswer,
    goBack,
    resetQuiz,
    personalityTraits,
    answers: quizState.answers,
    selectedValue,
    progress,
    totalQuestions,
  };
}
