import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Header/Header";
import { useState } from "react";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

export default function PersonalInfo({ state, dispatch }) {
  function updateState() {
    if (name && email && phone) {
      dispatch({ type: "setName", payload: name });
      dispatch({ type: "setEmail", payload: email });
      dispatch({ type: "setPhone", payload: phone });
      dispatch({ type: "incrementStep" });
    } else {
      alert("Please fill in all the fields");
      return false;
    }
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="d-flex flex-column justify-content-right">
      <Header
        headerData={{
          title: "Personal info",
          description:
            "Please provide your name, email address, and phone number.",
        }}
      />
      <div className="d-flex flex-column gap-2 mt-2">
        <div className="my-2">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            placeholder="E.G. Sherlock Holmes"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-2">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="johndoe@example.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-2">
          <Form.Label htmlFor="phone">Phone</Form.Label>
          <Form.Control
            type="number"
            id="phone"
            placeholder="+31 12345678"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <NavigationButtons dispatch={dispatch} isFirst={true} />
    </div>
  );
}
