import PageHeader from "components/__Shared/PageHeader"
import { Route, Routes } from "react-router-dom"
import Dashboard from "components/Dashboard"
import Reservation from "components/Reservation"
import { Toaster } from "components/ui/Toaster"

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <PageHeader />
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/reservation"} element={<Reservation />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
