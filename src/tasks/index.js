import "./style.css"

const Tasks = (props) => (
  <ul className="taskslist">
    {props.Tasks.map(task => (
      <li>
        {task.content}
      </li>
    ))}
  </ul>);

export default Tasks;