import { useEffect, useState } from "react";
import styles from "./AddOnService.module.css";
import Form from "react-bootstrap/Form";

export default function AddOnService({ service, state, dispatch }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) dispatch({ type: "setService", payload: service });
    else dispatch({ type: "removeService", payload: service });
  }, [isActive]);

  return (
    <div
      className={`${styles.addOn} d-flex justify-content-between align-items-center  p-3`}
      style={
        isActive
          ? { border: "1px solid blue" }
          : { border: "1px solid #b3b3e0" }
      }
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <div className="d-flex align-items-center gap-3">
        <Form.Check
          checked={isActive}
          onChange={() => {
            setIsActive(!isActive);
          }}
        />
        <div>
          <p className={`${styles.addOnTitle} m-0`}>{service.service}</p>
          <span className={styles.addOnDescription}>{service.description}</span>
        </div>
      </div>
      <span className={styles.cost}>+${service.cost}/mo</span>
    </div>
  );
}
