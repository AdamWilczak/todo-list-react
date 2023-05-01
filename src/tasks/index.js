import "./style.css";

function Tasks({ tasks, hideDone }) {
  return (
    <ul className="tasksList">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`tasksList__item ${
            task.done && hideDone ? "tasksList__item--hidden" : ""
          }`}
        >
          <button className=" tasksList__button tasksList__button--done">
            {task.done ? "✔" : ""}
          </button>
          <span
            className={`tasksList__content ${
              task.done ? "tasksList__content--done" : ""
            }`}
          >
            {task.content}
          </span>
          <button className=" tasksList__button tasksList__button--remove">
            🗑
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;