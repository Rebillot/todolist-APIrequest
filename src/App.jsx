import React, { useEffect, useState } from 'react';

function TodoList() {
  const [task, setTask] = useState([]);
  const APIurl = "https://assets.breatheco.de/apis/fake/todos/user/rebillot";


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APIurl);
        const data = await response.json();
        console.log(data);
        setTask(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);




  const handleAddTask = async () => {
    const newTask = prompt("Enter new task:");
    if (newTask !== null && newTask !== "") {
      
      try { 

        const response = await fetch(APIurl);
        const data = await response.json();
        console.log(data);

        const newTaskObject = { label: newTask, done: false };
        const updatedTaskList = [...data, newTaskObject]
        console.log(newTaskObject)
        
        await fetch(APIurl, {
          method: "PUT",
          body: JSON.stringify(updatedTaskList),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setTask(updatedTaskList);
      } catch (error) {
        console.error(error);
      }
    }
  };
  

  const handleDeleteAllTasks = async () => {
    try {
      await fetch(APIurl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.reload();

      await fetch(APIurl, {
        method: "POST",
        body: JSON.stringify([]),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <div className="row">
      <h1 className="">to do list</h1>
      <ul className="table-info">
        {task.map((task, index) => (
          <li className="" key={index}>
            {index + 1} {task.label}
          </li>
        ))}
      </ul>

      <div className="btn btn-primary" onClick={handleAddTask}>
        Add Task
      </div>
      <div className="btn btn-danger" onClick={handleDeleteAllTasks}>
        delete todito
      </div>
    </div>
  );
}

export default TodoList;




// Recycle Bin

  //   const addInitialTasks = async () => {
  //     try {
  //       await fetch(APIurl, {
  //         method: "POST",
  //         body: JSON.stringify([]),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   addInitialTasks();
  // }, []);