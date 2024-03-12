import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css"
import {Dashboard,Analytics} from "./pages"
function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<h>Hi welcom</h>}/>
        <Route path="/dashboard" element={<Dashboard/>} >
        <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
      </Router>
    </>
  )
}

export default App
