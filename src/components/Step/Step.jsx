import styles from "./Step.module.css";

export default function Step({ stepListItem, currentStep }) {
  return (
    <li className="d-flex align-items-center gap-3">
      <div
        className={`${styles.stepIndexMarker} d-flex align-items-center justify-content-center`}
        style={
          currentStep === stepListItem.listIndex
            ? {
                backgroundColor: "var(--color-highlight)",
                color: "var(--color-inactive-dark)",
              }
            : {}
        }
      >
        <span>{stepListItem.listIndex}</span>
      </div>
      <div className="d-flex flex-column">
        <span className={styles.stepText}>step {stepListItem.listIndex}</span>
        <span className={styles.stepTitle}>{stepListItem.description}</span>
      </div>
    </li>
  );
}
