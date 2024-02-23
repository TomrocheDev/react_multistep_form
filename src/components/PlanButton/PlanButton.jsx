/* eslint-disable react/prop-types */
import styles from "./PlanButton.module.css";

export default function PlanButton({ state, dispatch, button }) {
    function onSelectPlan() {
        dispatch({ type: "setPlan", payload: button.name });

        if (state.paymentPeriod === "monthly")
            dispatch({ type: "setPrice", payload: button.monthly });
        if (state.paymentPeriod === "yearly")
            dispatch({ type: "setPrice", payload: button.yearly });
    }

    return (
        <div className="col-md-4 d-flex flex-column justify-content-between p-2 mt-4">
            <div
                className={`${styles.buttonContainer} p-3 d-flex flex-column gap-4`}
                onClick={onSelectPlan}
                style={state.currentPlan === button.name ? { border: "1px solid blue" } : {}}>
                <div
                    className={`${styles.iconContainer} d-flex align-items-center justify-content-center`}
                    style={{ backgroundColor: `#${button.color}` }}>
                    <img src={button.icon} className={styles.icon} />
                </div>
                <div className="d-flex flex-column">
                    <p className={`${styles.buttonTitle} mb-0`}>{button.name}</p>
                    <span className={styles.costs}>
                        $
                        {state.paymentPeriod === "monthly"
                            ? `${button.monthly}/mo`
                            : `${button.yearly}/yr`}
                    </span>
                </div>
            </div>
        </div>
    );
}
