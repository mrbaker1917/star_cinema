import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Star Cinema</h1>
        <h2>Welcome to the Star Cinema in Sidney by the Sea (BC)</h2>
      </header>
      <main className={styles.main}>
      </main>
      <footer></footer>
    </div>
  );
}
