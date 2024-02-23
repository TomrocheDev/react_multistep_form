import { Button } from "react-bootstrap";

export default function End({ dispatch }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <p>Thanks for checking this app out.</p>
      <Button
        className="mainButton"
        onClick={() => dispatch({ type: "reset" })}
      >
        Start over
      </Button>
    </div>
  );
}
