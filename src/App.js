import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormCheck from "./component/useFormCheck";

import "./App.css";
import FormStorage from "./component/FormStorage";
import CreatePass from "./component/CreatePass";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<FormStorage />} />
          <Route path="/form" element={<FormCheck />} />
          <Route path="/form2" element={<CreatePass />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
