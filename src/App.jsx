import { ToastContainer } from "react-toastify";
import TestComponent from "./components/TestComponent";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  // const printName = (name) => {
  //   console.log(name);
  // };

  return (
    <>
      <ToastContainer autoClose={1000} />
      <h1>CI/CD Testing</h1>
      <p>Deployment using GitHub Actions.</p>
      <TestComponent />
      <Login />
    </>
  );
}

export default App;
