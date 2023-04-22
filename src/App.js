import Form from "./form";
import Tasks from "./tasks";



const tasks = [
  { id: 1, content: "naprawic rower ", done: false },
  { id: 2, content: "czochrać niedzwiedzia", done: true },

];

const hideDoneTasks = false;

function App() {
  return (
    <main className="container">
    <header>
      <h1>Simple TODO list</h1>
    </header>

    <section className="section">
      <h2 className="section__header">Add task</h2>
      <div className="section">
       <Form/>
      </div>
    </section>
    <section className="section">
      <header className="section__header">
        <h2 className="section__tittle">Tasks list</h2>
        <div className="buttons"></div>
      </header>

      <div className="section">
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
      </div>
    </section>
  </main>
  );
}

export default App;
