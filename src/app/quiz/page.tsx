"use client";

import { useEffect, useState } from "react";
import useQuiz from "@/hooks/useQuiz";
import { QUESTIONS, PERSONALITY_TYPES } from "@/lib/constants";
import styles from "../Quiz.module.css";

export default function QuizPage() {
  const {
    currentQuestion,
    submitAnswer,
    personalityTraits,
    progress,
    answers,
    resetQuiz,
    totalQuestions,
  } = useQuiz(QUESTIONS);

  const pickedDavido = answers[2] === 2; // Q2: Davido has value 2
  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    if (pickedDavido) {
      const messages = ["Davido??? Really???", "Wizkid is the GOAT!", "Wizkid >>>"];
      setRandomMessage(messages[Math.floor(Math.random() * messages.length)]);
    } else {
      setRandomMessage("");
    }
  }, [pickedDavido]);

  const getResult = () => {
    // Find the canonical trait with the highest count
    const entries = Object.entries(personalityTraits) as [keyof typeof PERSONALITY_TYPES, number][];
    if (entries.length === 0) {
      return {
        name: "Music Lover",
        description: "You have a unique and diverse taste in music!",
      };
    }

    // Tie-breaker: if counts tie, prefer the one that appears first in PERSONALITY_TYPES order
    const orderedKeys = Object.keys(PERSONALITY_TYPES) as (keyof typeof PERSONALITY_TYPES)[];
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

    return PERSONALITY_TYPES[top.trait];
  };

  // Finished: no current question -> show result
  if (!currentQuestion) {
    const result = getResult();
    return (
      <div className={styles.main}>
        <div className={styles.card} style={{ textAlign: "center" }}>
          <h1 className={styles.resultTitle}>Your Music Personality:</h1>
          <h2 className={styles.resultName}>{result.name}</h2>
          <p className={styles.resultDesc}>{result.description}</p>

          {pickedDavido && (
            <p style={{ marginTop: "1rem", color: "#ff4d4f", fontWeight: "bold" }}>
              {randomMessage}
            </p>
          )}

          <button onClick={resetQuiz} className={styles.retakeBtn}>
            Retake Quiz
          </button>

          <p style={{ marginTop: "1.5rem", fontSize: "0.7rem", color: "#fff" }}>
            made with love by <strong>emmasavageboy</strong>
          </p>
        </div>
      </div>
    );
  }

  // In-progress
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
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() => submitAnswer(option.value)}
              className={styles.optionBtn}
            >
              {option.label}
            </button>
          ))}
        </div>

        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "0.9rem",
            color: "#fff",
            textAlign: "center",
          }}
        >
          made with love by <strong>emmasavageboy</strong>
        </p>
      </div>
    </div>
  );
}
