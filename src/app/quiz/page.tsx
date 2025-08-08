"use client";
import useQuiz from "@/hooks/useQuiz";
import { QUESTIONS, PERSONALITY_TYPES } from "@/lib/constants";
import styles from "../Quiz.module.css";
import { useState, useEffect } from "react";  // Add this import

export default function QuizPage() {
  const {
    currentQuestion,
    submitAnswer,
    personalityTraits,
    progress,
    answers,
  } = useQuiz(QUESTIONS);
  const pickedDavido = answers[2] === 2; // Question 2, Davido has value 2
  const [randomMessage, setRandomMessage] = useState("");  // Add this state

  // Add this useEffect to set a random message when pickedDavido is true
  useEffect(() => {
    if (pickedDavido) {
      const messages = [
        "Davido??? Really???",
        "Wizkid is the GOAT!",
        "Wizkid >>>"
      ];
      const randomIndex = Math.floor(Math.random() * messages.length);
      setRandomMessage(messages[randomIndex]);
    }
  }, [pickedDavido]);

  const getResult = () => {
    const dominantTrait = Object.entries(personalityTraits).reduce(
      (max, [trait, count]) => (count > max.count ? { trait, count } : max),
      { trait: "", count: 0 }
    );

    return (
      PERSONALITY_TYPES[dominantTrait.trait] || {
        name: "Music Lover",
        description: "You have a unique and diverse taste in music!",
      }
    );
  };

  if (!currentQuestion) {
    const result = getResult();
    return (
      <div className={styles.main}>
        <div className={styles.card} style={{ textAlign: "center" }}>
          <h1 className={styles.resultTitle}>Your Music Personality:</h1>
          <h2 className={styles.resultName}>{result.name}</h2>
          <p className={styles.resultDesc}>{result.description}</p>
          {pickedDavido && (
            <p
              style={{
                marginTop: "1rem",
                color: "#ff4d4f",
                fontWeight: "bold",
              }}
            >
              {randomMessage}
            </p>
          )}

          <button
            onClick={() => window.location.reload()}
            className={styles.retakeBtn}
          >
            Retake Quiz
          </button>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.9rem",
              color: "#777",
            }}
          >
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
            Question {currentQuestion.id}/{QUESTIONS.length}
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            ></div>
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