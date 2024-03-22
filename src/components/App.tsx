import PageHeader from "components/_Shared/PageHeader"
import { Route, Routes } from "react-router-dom"
import Dashboard from "components/Dashboard"
import Reservation from "components/Reservation"

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <PageHeader />
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/reservation"} element={<Reservation />} />
      </Routes>
    </div>
  )
}

export default App
