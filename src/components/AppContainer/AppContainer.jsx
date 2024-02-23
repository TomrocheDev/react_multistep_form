import { appContainer } from "./AppContainer.module.css";

export default function AppContainer({ children }) {
  return <div className={`${appContainer} row container p-4`}>{children}</div>;
}
