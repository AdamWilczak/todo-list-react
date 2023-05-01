import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAlldone }) => (
  <div className="buttons">
    {tasks.lenght > 0 && (
      <>
        <button onClick={toggleHideDone} className="buttons__button">
          {hideDone ? "Show" : "Hide"} done
        </button>
        <button
          onClick={setAlldone}
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Done all
        </button>
      </>
    )}
  </div>
);


export default Buttons;
