import "./App.css";
import FormGenerator from "./forms/FormGenerator";
import { surveyForm } from "./forms/forms";

function App() {
  return (
    <div className="app">
      <h2>Developer Survey</h2>
      <FormGenerator schema={surveyForm} />
    </div>
  );
}

export default App;
