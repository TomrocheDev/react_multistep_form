import { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppContainer from "./components/AppContainer/AppContainer";
import StepList from "./components/StepList/StepList";
import Step from "./components/Step/Step";
import Form from "./components/Form/Form";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Plan from "./components/Plan/Plan";
import AddOns from "./components/AddOns/AddOns";
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import Receipt from "./components/Receipt/Receipt";
import PlanTotal from "./components/PlanTotal/PlanTotal";
import NavigationButtons from "./components/NavigationButtons/NavigationButtons";
import End from "./components/End/End";

const stepListInfo = [
  { listIndex: 1, description: "your info" },
  { listIndex: 2, description: "select plan" },
  { listIndex: 3, description: "add-ons" },
  { listIndex: 4, description: "summary" },
];

const initialFormData = {
  currentStep: 1,
  paymentPeriod: "monthly",
  currentPlan: "Arcade",
  price: 9,
  services: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setStepManually":
      return { ...state, currentStep: action.payload };
    case "incrementStep":
      return { ...state, currentStep: state.currentStep + 1 };
    case "decrementStep":
      return { ...state, currentStep: state.currentStep - 1 };
    case "setName":
      return { ...state, name: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPhone":
      return { ...state, phone: action.payload };
    case "setPaymentPeriod":
      return { ...state, paymentPeriod: action.payload };
    case "setPlan":
      return { ...state, currentPlan: action.payload };
    case "setPeriodCost":
      return { ...state, periodCost: action.payload };
    case "setPrice":
      return { ...state, price: action.payload };
    case "setService":
      const serviceExists = state.services.some(
        (service) => service.service === action.payload.service
      );
      if (!serviceExists) {
        return { ...state, services: [...state.services, action.payload] };
      }
    case "removeService":
      return {
        ...state,
        services: state.services.filter(
          (fService) => fService !== action.payload
        ),
      };
    case "reset":
      return { ...initialFormData };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialFormData);

  return (
    <div className="app d-flex align-items-center justify-content-center">
      <AppContainer>
        <StepList>
          {stepListInfo.map((stepListItem) => (
            <Step
              stepListItem={stepListItem}
              currentStep={state.currentStep}
              key={stepListItem.listIndex}
            />
          ))}
        </StepList>
        <Form>
          {state.currentStep === 1 && (
            <PersonalInfo state={state} dispatch={dispatch} />
          )}
          {state.currentStep === 2 && (
            <Plan state={state} dispatch={dispatch} />
          )}
          {state.currentStep === 3 && (
            <AddOns state={state} dispatch={dispatch} />
          )}
          {state.currentStep === 4 && (
            <Summary>
              <Header
                headerData={{
                  title: "Finishing up",
                  description:
                    "Please double check everything before confirming.",
                }}
              />
              <Receipt state={state} dispatch={dispatch} />
              <PlanTotal state={state} dispatch={dispatch} />
              <NavigationButtons dispatch={dispatch} isFirst={false} />
            </Summary>
          )}
          {state.currentStep === 5 && <End dispatch={dispatch} />}
        </Form>
      </AppContainer>
    </div>
  );
}

export default App;
