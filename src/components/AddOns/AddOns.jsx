import Header from "../Header/Header";
import AddOnsContainer from "../AddOnsContainer/AddOnsContainer";
import AddOnService from "../AddOnService/AddOnService";
import { Button } from "react-bootstrap";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

const services = [
  {
    service: "Online service",
    description: "Access to multiplayer games",
    cost: 1,
  },
  {
    service: "Larger storage",
    description: "Extra 1TB of cloud save",
    cost: 2,
  },
  {
    service: "Customizable profile",
    description: "Custom theme on your profile",
    cost: 2,
  },
];

export default function AddOns({ state, dispatch }) {
  return (
    <div>
      <Header
        headerData={{
          title: "Pick add-ons",
          description: "Add-ons help enhance your gaming experience.",
        }}
      />
      <AddOnsContainer>
        {services.map((service) => (
          <AddOnService
            service={service}
            state={state}
            dispatch={dispatch}
            key={service.service}
          />
        ))}
      </AddOnsContainer>
      <NavigationButtons dispatch={dispatch} isFirst={false} />
    </div>
  );
}
