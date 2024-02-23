export default function Form({ children }) {
  return (
    <form className="col-md-8 d-flex flex-column justify-content-center px-5 py-2">
      {children}
    </form>
  );
}
