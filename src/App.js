import "./App.scss";
import { Routes } from "react-router-dom";
import {Route} from "react-router";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
      </Routes>
    </>
  );
}

export default App;
