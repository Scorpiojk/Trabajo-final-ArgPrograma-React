const TaskItem = (props) => {
    return (
      <div
        className="task"
        style={{ backgroundColor: props.complete ? "aquamarine" : "white" }}
      >
        <h1>{props.taskName}</h1>
        <button onClick={() => console.log(props.completeTask(props.id))}>Finalizar</button>
        <button onClick={() => props.deleteTask(props.id)}>x</button>
      </div>
    );
  }

export default TaskItem