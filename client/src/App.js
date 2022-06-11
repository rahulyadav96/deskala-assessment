import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>This is Home Page.</h1>
      <p>
        Please, <Link to="/login">Click here</Link> to see the candidates list.0
      </p>
    </div>
  );
}

export default App;
