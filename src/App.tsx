import "./App.css";
import Bar from "./components/Bar";
import Scatter from "./components/Scatter";

function App() {
  return (
    <div className="App">
      <div className="Chart">
        <div>
          Scatter Plot
          <Scatter /> {/* Rendering Scatter plot in App component */}
        </div>
        <div>
          Bar Chart
          <Bar /> {/* Rendering Bar chart in App component */}
        </div>
      </div>
    </div>
  );
}

export default App;
