
import react, {useState} from 'react';

function TodoList(){
  const [task,setTask] = useState([]);

  const handleAddTask = () => {
    const newTask = prompt('Enter new task:');
    if (newTask !== null && newTask !== ''){
      setTask((prevTask) => [...prevTask, newTask]);
    }
  };

  const handleDeleteAllTasks = () =>{
    setTask([]);
  };

  return (
    <div className="row">
      <h1 className=''>to do list</h1>
      <table className='table-info'>
        {task.map((task,index) => (
          <li className='' key={index}>{index + 1} {task}</li>
        ))}
      </table>

      <div className="btn btn-primary" onClick={handleAddTask}>Add Task</div>
      <div className="btn btn-danger" onClick={handleDeleteAllTasks}>delete todito</div>
    </div>
  );
}



export default TodoList;