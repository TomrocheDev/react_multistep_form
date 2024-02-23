import styles from "./PlanTotal.module.css";

export default function PlanTotal({ state, dispatch }) {
  function calculateTotal() {
    let total = state.price;

    state.services.map((service) =>
      state.paymentPeriod === "monthly"
        ? (total += service.cost)
        : (total += service.cost * 12)
    );

    return total;
  }

  return (
    <div className="d-flex justify-content-between align-items-center p-4">
      <span className={styles.totalTitle}>{`Total (per ${
        state.paymentPeriod === "monthly" ? "month" : "year"
      })`}</span>
      <span className={styles.totalPrice}>{`$${calculateTotal()}/${
        state.paymentPeriod === "monthly" ? "mo" : "yr"
      }`}</span>
    </div>
  );
}
