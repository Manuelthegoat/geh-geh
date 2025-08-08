import { useState } from "react";
import { Question } from "../lib/constants";

type QuizState = {
  currentQuestionIndex: number;
  answers: Record<number, number>; // { questionId: selectedOptionValue }
  personalityTraits: Record<string, number>; // { trait: count }
};

export default function useQuiz(questions: Question[]) {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    personalityTraits: {},
  });

  const currentQuestion = questions[quizState.currentQuestionIndex];
  const isLastQuestion = quizState.currentQuestionIndex === questions.length - 1;

  const submitAnswer = (selectedOptionValue: number) => {
    const selectedOption = currentQuestion.options.find(
      (opt) => opt.value === selectedOptionValue
    );

    // Update personality traits
    const updatedTraits = { ...quizState.personalityTraits };
    selectedOption?.personalityTrait.forEach((trait) => {
      updatedTraits[trait] = (updatedTraits[trait] || 0) + 1;
    });

    // Update quiz state
    setQuizState({
      ...quizState,
      answers: {
        ...quizState.answers,
        [currentQuestion.id]: selectedOptionValue,
      },
      personalityTraits: updatedTraits,
      currentQuestionIndex: quizState.currentQuestionIndex + 1,
    });
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      answers: {},
      personalityTraits: {},
    });
  };

  return {
    currentQuestion,
    isLastQuestion,
    submitAnswer,
    resetQuiz,
    personalityTraits: quizState.personalityTraits,
    answers: quizState.answers,
    progress: Math.round((quizState.currentQuestionIndex / questions.length) * 100),
  };
}