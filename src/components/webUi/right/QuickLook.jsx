import React, { useState } from 'react';
import './quicklook.css';
import CompletedTasksImage from '../../../assets/images/Completed-Tasks.svg';
import CurrentTasksImage from '../../../assets/images/Current-Tasks.svg';
import TotalTasksImage from '../../../assets/images/All-Tasks.svg';
import DeletedTasksImage from '../../../assets/images/Deleted-Task.svg';

    function QuickLook() {
      const [completedTasks, setCompletedTasks] = useState(0);
      const [currentTasks, setCurrentTasks] = useState(0);
      const [totalTasks, setTotalTasks] = useState(0);
      const [deletedTasks, setDeletedTasks] = useState(0);
    
      return (
        <div className="app">
          <div className="quick-look">
            <div className="header">
              <h3>Quick Look</h3>
              <a href="#">Details<span className="material-symbols-sharp">chevron_right</span></a>
            </div>
    
            <div className="quick-look-element">
                      <img src={CompletedTasksImage} alt="completing photo" />
              <h4>Completed Tasks</h4>
              <div className="amount">
                <h4>{completedTasks}</h4>
                <small className="success">Task</small>
              </div>
            </div>
    
            <div className="quick-look-element">
              <img src={CurrentTasksImage} alt="Current Location Photo" />
              <h4>Current Tasks</h4>
              <div className="amount">
                <h4>{currentTasks}</h4>
                <small className="purple">Task</small>
              </div>
            </div>
    
            <div className="quick-look-element">
                      <img src={TotalTasksImage} alt="All Tasks Photo" />
              <h4>Number of all Tasks</h4>
              <div className="amount">
                <h4>{totalTasks}</h4>
                <small className="purple">Task</small>
              </div>
            </div>
    
            <div className="quick-look-element">
              <img src={DeletedTasksImage} alt="Delete Photo" />
              <h4>Deleted Task</h4>
              <div className="amount">
                <h4>{deletedTasks}</h4>
                <small className="danger">Task</small>
              </div>
            </div>
          </div>

        </div>
      );
    }
    
    export default QuickLook;
    

