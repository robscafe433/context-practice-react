import "./App.css";
import InfoContainer from "./InfoContainer";

// https://medium.com/@danfyfe/using-react-context-with-functional-components-153cbd9ba214
// Above is website for this practice. It goes over passing data through context-react.

// We have a parent component, InfoContainer, which has two children, ListContainer and GraphContainer, which each have their own components for displaying.

function App() {
  return (
    <div className="App">
      <InfoContainer />
    </div>
  );
}

export default App;
