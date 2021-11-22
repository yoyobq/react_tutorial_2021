import './ToolBar.css';
function Toolbar() {
  function onClick(e) {
    e.stopPropagation();
    alert('Playing!')
  }

  return (
    <div
      className="tool-bar"
      onClick={() => {
        alert('You clicked on the toolbar!');
      }}
    >
      <span
        onClick={onClick}
        className="btn"
      >
        Play Movie
      </span>
    </div>
  );
}

export default Toolbar;