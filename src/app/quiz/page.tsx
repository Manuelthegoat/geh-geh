// src/app/quiz/page.tsx
"use client";

import useQuiz from "@/hooks/useQuiz";
import { QUESTIONS, COURSES } from "@/lib/constants";
import styles from "../Quiz.module.css";

export default function QuizPage() {
  const {
    currentQuestion,
    submitAnswer,
    goBack,
    resetQuiz,
    personalityTraits,
    progress,
    totalQuestions,
    selectedValue,
    isFirstQuestion,
  } = useQuiz(QUESTIONS);

  const getResult = () => {
    const entries = Object.entries(personalityTraits) as [
      keyof typeof COURSES,
      number
    ][];

    if (entries.length === 0) {
      return {
        name: "Dept. of Undeclared Studies",
        description:
          "Admission pending. Go back and answer like person wey dey woke.",
      };
    }

    // Tie-breaker: keep the first-defined course if counts tie
    const orderedKeys = Object.keys(COURSES) as (keyof typeof COURSES)[];
    const top = entries.reduce(
      (best, [trait, count]) => {
        if (count > best.count) return { trait, count };
        if (count === best.count) {
          return orderedKeys.indexOf(trait) < orderedKeys.indexOf(best.trait)
            ? { trait, count }
            : best;
        }
        return best;
      },
      { trait: orderedKeys[0], count: -1 }
    );

    return COURSES[top.trait];
  };

  // Finished: when index has moved past the last question, currentQuestion is undefined
  if (!currentQuestion) {
    const result = getResult();
    return (
      <div className={styles.main}>
        <div className={styles.card} style={{ textAlign: "center" }}>
          <h1 className={styles.resultTitle}>Your GehGeh Course:</h1>
          <h2 className={styles.resultName}>{result.name}</h2>
          <p className={styles.resultDesc}>{result.description}</p>

          <button onClick={resetQuiz} className={styles.retakeBtn}>
            Retake Test
          </button>

          <p style={{ marginTop: "1.25rem", fontSize: "0.8rem", opacity: 0.9 }}>
            made with love by <strong>emmasavageboy</strong>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        {/* Progress */}
        <div className={styles.progressWrap}>
          <div className={styles.progressLabel}>
            Question {currentQuestion.id}/{totalQuestions}
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Question */}
        <h1 className={styles.question}>{currentQuestion.text}</h1>

        {/* Options */}
        <div className={styles.options}>
          {currentQuestion.options.map((option) => {
            const isSelected = selectedValue === option.value;
            return (
              <button
                key={option.value}
                onClick={() => submitAnswer(option.value)}
                className={styles.optionBtn}
                aria-pressed={isSelected}
                style={
                  isSelected
                    ? {
                        borderColor: "rgba(255,255,255,0.5)",
                        backgroundColor: "rgba(255,255,255,0.08)",
                      }
                    : undefined
                }
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Nav buttons */}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
          <button
            onClick={goBack}
            disabled={isFirstQuestion}
            className={styles.retakeBtn}
            style={{
              background: "transparent",
              color: "var(--text)",
              border: "1px solid rgba(255,255,255,0.25)",
              opacity: isFirstQuestion ? 0.5 : 1,
            }}
          >
            ← Previous
          </button>
        </div>

        <p
          style={{
            marginTop: "1.25rem",
            fontSize: "0.85rem",
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          made with love by <strong>emmasavageboy</strong>
        </p>
      </div>
    </div>
  );
}
