import {Menu} from "./Menu"
import {Tetris} from "/src/components/Tetris"

import {useGameOver} from "/src/hooks/useGameOver"

export const Game  = ({rows, columns}) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver()
  }

  return (
    <div className="Game"> 
    {gameOver ? (
      <Menu onClick={start} />
    ) : (
     <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
    )
    }
    </div>
  )
}

