import "./App.css"
import PageHeader from "components/__shared/page-header"
import { Route, Routes } from "react-router-dom"
import Dashboard from "components/Dashboard"
import Reservation from "components/Reservation"

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/reservation"} element={<Reservation />} />
      </Routes>
    </div>
  )
}

export default App
