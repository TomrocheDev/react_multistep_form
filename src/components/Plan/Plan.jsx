/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import Header from "../Header/Header";
import PlanButton from "../PlanButton/PlanButton";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

const planButtonsContent = [
  {
    icon: "../../../public/plan-1.svg",
    color: "ffaf7e",
    name: "Arcade",
    monthly: 9,
    yearly: 90,
  },
  {
    icon: "../../../public/plan-2.svg",
    color: "f9818e",
    name: "Advanced",
    monthly: 12,
    yearly: 120,
  },
  {
    icon: "../../../public/plan-3.svg",
    color: "483eff",
    name: "Pro",
    monthly: 15,
    yearly: 150,
  },
];

export default function Plan({ state, dispatch }) {
  const selectedPlan = planButtonsContent.filter(
    (plan) => plan.name === state.currentPlan
  )[0];

  return (
    <div>
      <Header
        headerData={{
          title: "Select your plan",
          description: "You have the option of monthly or yearly billing.",
        }}
      />
      <div className="container">
        <div className="row">
          {planButtonsContent.map((button) => (
            <PlanButton
              button={button}
              state={state}
              dispatch={dispatch}
              key={button.name}
            />
          ))}
        </div>
        <div className="d-flex justify-content-center gap-2 mt-2">
          <Button
            onClick={() => {
              dispatch({ type: "setPaymentPeriod", payload: "monthly" });
              dispatch({ type: "setPrice", payload: selectedPlan.monthly });
            }}
            className={`${
              state.paymentPeriod === "monthly"
                ? "mainButton"
                : "secondaryButton"
            } btn-sm w-25`}
          >
            Monthly
          </Button>
          <Button
            onClick={() => {
              dispatch({ type: "setPaymentPeriod", payload: "yearly" });
              dispatch({ type: "setPrice", payload: selectedPlan.yearly });
            }}
            className={`${
              state.paymentPeriod === "yearly"
                ? "mainButton"
                : "secondaryButton"
            } btn-sm w-25`}
          >
            Yearly
          </Button>
        </div>
        <NavigationButtons dispatch={dispatch} isFirst={false} />
      </div>
    </div>
  );
}
