import "./App.css";
import Contact from "./components/Contact";
import First from "./components/First";
import Medicine from "./components/Medicine";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Medicine2 from "./components/Medicine2";
import Medicine3 from "./components/Medicine3";
import { Provider } from "react-redux";
import store from "./components/store";
import ListMedicine from "./components/ListMedicine";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/Medicine" element={<Medicine />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Medicine2" element={<Medicine2 />} />
            <Route path="/Medicine3" element={<Medicine3 />} />
            <Route path="/ListMedicine" element={<ListMedicine />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
