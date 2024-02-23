import styles from "./Header.module.css";

export default function Header({ headerData }) {
  return (
    <header className="mb-2">
      <h2 className={styles.title}>{headerData.title}</h2>
      <span className={styles.description}>{headerData.description}</span>
    </header>
  );
}
