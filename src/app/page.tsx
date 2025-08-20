// src/app/page.tsx
import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.title}>GehGeh University Admission Test 🎓</h1>
        <p className={styles.lead}>
          Answer 30 unserious questions and discover which GehGeh course you
          dey major in. Stay woke, avoid bill traps.
        </p>
        <Link href="/quiz" className={styles.cta}>
          Start the Test
        </Link>
      </div>
    </main>
  );
}
