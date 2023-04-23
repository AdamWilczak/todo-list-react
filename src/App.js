
import Buttons from "./buttons";
import Form from "./form";
import Tasks from "./tasks";
import Section from "./section";
import Header from "./header"
import Container  from "./container";

const tasks = [
  { id: 1, content: "naprawic rower sąsiadowi ", done: false },
  { id: 2, content: "czochrać niedzwiedzia", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container >
      <Header title="Simple TODO list"/>
      <Section
        title="Add new task"
        body={<Form />}
      />
      <Section
        title="Task list"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Container>
  );
}

export default App;
