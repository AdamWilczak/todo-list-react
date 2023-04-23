import "./style.css";

const Buttons = ({ tasks, hideTasksDone }) => (
  <div className="buttons">
    {tasks.lenght > 0 && (
      <>
        <button className="buttons__button">
          {hideTasksDone ? "Show" : "Hide"} done
        </button>
        <button
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
