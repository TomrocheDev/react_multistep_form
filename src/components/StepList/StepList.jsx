import { stepList } from "./StepList.module.css";

export default function StepList({ children }) {
  return (
    <div className={`${stepList} col-md-4`}>
      <ul className="d-flex flex-column gap-3 p-4">{children}</ul>
    </div>
  );
}
