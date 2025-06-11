import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Star Cinema</h1>
        <h2>Welcome to the Star Cinema!</h2> 
        <p>(in Sidney by the Sea)</p>
      </header>
      <main className={styles.main}>
        <p>here are some movies</p>
        <FontAwesomeIcon icon={faFilm} />
      </main>
      <footer></footer>
    </div>
  );
}
