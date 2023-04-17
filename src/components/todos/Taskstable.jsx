import React, { useState, useEffect } from "react";
import "./taskstable.css";
import TaskCard from "./TaskCard";
import Swal from "sweetalert2";
import SearchTodos from "./SearchTodos";
import ReactSwitch from "react-switch";

function Taskstable() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [showAllTasks, setShowAllTasks] = useState(true);

  useEffect(() => {
    // Load saved tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
      setFilteredTasks(savedTasks);
    }
  }, []);

  const handleAddTask = () => {
    Swal.fire({
      title: "Enter task title",
      input: "text",
      inputPlaceholder: "Task title",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Add task",
      showLoaderOnConfirm: true,
      preConfirm: (taskTitle) => {
        if (!taskTitle || taskTitle.trim() === "") {
          Swal.showValidationMessage("Task title cannot be empty");
        } else {
          // Add the new task to the tasks list
          const newTask = {
            id: Math.random().toString(),
            title: taskTitle,
            isDone: false,
          };
          setTasks([...tasks, newTask]);
          setFilteredTasks([...tasks, newTask]);
          // Save the updated tasks list to local storage
          localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
        }
      },
    });
  };

  const handleToggleDone = (updatedTask) => {
    // Find the index of the updated task in the tasks list
    const index = tasks.findIndex((task) => task.id === updatedTask.id);
    // Create a copy of the tasks list with the updated task
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    // Update the tasks list with the new task object where isDone is set to true
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
    // Save the updated tasks list to local storage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleSearch = (searchValue) => {
    if (searchValue === "") {
      setFilteredTasks(tasks);
    } else {
      const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredTasks(filteredTasks);
    }
  };

  const handleShowAllTasksChange = (checked) => {
    setShowAllTasks(checked);
    if (checked) {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks([]);
    }
  };

  const toggleLabel = showAllTasks ? "Hide All Tasks" : "Show All Tasks";

  return (
    <>
      <div className="center-div">
        <div className="tasks-table">
          <div className="header-properties">
            <div className="table-properties">
              <SearchTodos onSearch={handleSearch} />
              <div className="toggle-button">
                <span>{toggleLabel}</span>
                <ReactSwitch
                  checked={showAllTasks}
                  onChange={handleShowAllTasksChange}
                />
              </div>
            </div>
            <div className="header">
              <span id="add-btn" onClick={handleAddTask}>
                <span className="material-symbols-sharp">assignment_add</span>
                &nbsp; Add Task
              </span>
            </div>
          </div>
          <div className="tasks">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggleDone={handleToggleDone}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Taskstable;
