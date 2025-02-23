import Header from "./components/header/Header";
import Main_body from "./components/main_body/Main_body"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>

<Router>
  <Header />
  <Routes>
    <Route path="/" element={<Main_body />} />
  </Routes>
</Router>
    </div>
  )
}

export default App
