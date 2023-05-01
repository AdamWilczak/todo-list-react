import { useState } from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";



function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
      { id: 1, content: "naprawic rower sąsiadowi ", done: false },
      { id: 2, content: "czochrać niedzwiedzia", done: true },
    ]);

  
  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };

  return (
    <Container>
      <Header title="Simple TODO list" />
      <Section title="Add new task" body={<Form />} />
      <Section
        title="Task list"
        body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />}
        extraHeaderContent={ <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone}/>
        }
      />
    </Container>
  );
}

export default App;
