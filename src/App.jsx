import './App.css'

import { Game } from "./components/Game"

export function App() {
  return (
    <div className='App'>
      <Game rows={20} columns={10} />
    </div>
  )
}


