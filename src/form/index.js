import "./style.css"

const Form = (props) => (
  <form className="form">
    <input className="form__input" placeholder="What is your task?" />
    <button className="form__button">Add</button>
  </form>
);
export default Form;