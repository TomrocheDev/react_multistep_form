import { Button } from "react-bootstrap";

export default function NavigationButtons({ dispatch, isFirst }) {
  return (
    <div className="d-flex justify-content-between mt-5">
      {isFirst ? (
        <div></div>
      ) : (
        <Button
          className="tertiaryButton"
          onClick={() => dispatch({ type: "decrementStep" })}
        >
          Go Back
        </Button>
      )}

      <Button
        className="mainButton"
        onClick={() => dispatch({ type: "incrementStep" })}
      >
        Next Step
      </Button>
    </div>
  );
}
