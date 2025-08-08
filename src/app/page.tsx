// app/page.tsx (or wherever your Home component lives)
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.title}>Discover Your Music Personality</h1>
        <p className={styles.lead}>
          Answer 10 questions about your music taste and uncover what it says about you!
        </p>
        <Link href="/quiz" className={styles.cta}>
          Start the Quiz
        </Link>
      </div>
    </main>
  );
}
