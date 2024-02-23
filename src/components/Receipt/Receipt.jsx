import styles from "./Receipt.module.css";

export default function Receipt({ state, dispatch }) {
  return (
    <div className={`${styles.receipt} d-flex flex-column mt-4 p-4`}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex flex-column">
          <p className={`${styles.plan} m-0`}>
            {state.currentPlan} (
            <span className={styles.cap}>{state.paymentPeriod}</span>)
          </p>
          <span
            className={styles.change}
            onClick={() => dispatch({ type: "setStepManually", payload: 2 })}
          >
            Change
          </span>
        </div>
        <p className={`${styles.planPrice} m-0`}>{`$${state.price}/${
          state.paymentPeriod === "monthly" ? "mo" : "yr"
        } `}</p>
      </div>
      <hr />
      <div className="d-flex flex-column gap-3">
        {state.services.map((service) => {
          return (
            <div
              key={service.service}
              className="d-flex justify-content-between align-items-center"
            >
              <span className={styles.serviceName}>{service.service}</span>
              <p className={`${styles.serviceCost} m-0`}>{`+$${
                state.paymentPeriod === "yearly"
                  ? service.cost * 12
                  : service.cost
              }/${state.paymentPeriod === "monthly" ? "mo" : "yr"}`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
