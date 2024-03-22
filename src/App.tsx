import { useSelector } from "react-redux"
import "./App.css"
import { Button } from "./components/ui/button"
import { RootState, store } from "./store"
import { InitHandleCount } from "./store/actions"

function App() {
  const { count = 0 } = useSelector((state: RootState) => state.Init)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold">{count}</h1>
        <Button onClick={() => store.dispatch(InitHandleCount(1))}>
          increments
        </Button>
        <Button onClick={() => store.dispatch(InitHandleCount(-1))}>
          dicrements
        </Button>
      </header>
    </div>
  )
}

export default App
