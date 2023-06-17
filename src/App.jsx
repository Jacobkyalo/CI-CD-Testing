import TestComponent from "./components/TestComponent";
import "./App.css";

function App() {
  // const printName = (name) => {
  //   console.log(name);
  // };

  return (
    <>
      <h1>CI/CD Testing</h1>
      <p>Deployment using GitHub Actions.</p>
      <TestComponent />
    </>
  );
}

export default App;
