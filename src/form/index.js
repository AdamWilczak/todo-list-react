import { useState } from "react";
import "./style.css"

const Form = ({addNewTask}) => {

  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  }


  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="form__input"
        onChange={({target}) => setNewTaskContent(target.value)}
      />
      
      <button className="form__button">Add</button>
    </form>
  );
};
export default Form;