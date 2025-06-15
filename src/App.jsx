import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
import Results from "./components/Results.jsx";

const input = [
  { type: "text", label: "Initial Investment" },
  { type: "text", label: "Annual Investment" },
  { type: "number", label: "Expected Return" },
  { type: "text", label: "Duration" },
];

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputisValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputisValid && (
        <p className="center">Please enter duration greater than zero</p>
      )}
      {inputisValid && <Results input={userInput} />}
    </>
  );
}

export default App;
