import "./Tetris.css"
import { Board } from "/src/components/Board"

import {useBoard} from "/src/hooks/useBoard"

export const Tetris = ({ rows, columns, setGameOver }) => {
  const [board, setBoard] = useBoard({rows, columns});

  return (
    <Board board={board} />
  )
}