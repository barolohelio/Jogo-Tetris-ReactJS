import "./Menu.css"

export const Menu = ({onClick}) => {
  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        Play Tetris
      </button>
    </div>
  )
}