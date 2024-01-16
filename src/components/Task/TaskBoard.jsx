import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

const TaskBoard = () => {
    const defaultTask={
        'id':crypto.randomUUID(),
        'title':'Lear React Native',
        'description':'React Native is a cross platform mobile application development tool by JS',
        'priority':'High',
        'isFav':false,
        'tags':['React', 'JS', 'Web']
    }
    const [tasks, setTasks]=useState([defaultTask])
    const [showAddTaskModal, setShowAddTaskModal]=useState(false)
    const [taskToUpdate, setTaskToUpdate]=useState(null)

    //add korbe and update korbe
    const handleAddAndEditTask=(newTask,e,isAdd)=>{
        e.preventDefault()
        if(isAdd){
            setTasks([
                ...tasks,newTask
                 ])
        }
        else{
            setTasks(tasks.map(task=>{
                if(task.id===newTask.id){
                    return newTask
                }
                return task
             }))
        }
    
       setShowAddTaskModal(false)
    }

    const handleEditTask=(taskToEdit)=>{
       setTaskToUpdate(taskToEdit)
       setShowAddTaskModal(true)

       
    }

    const handleCloseModal=()=>{
        setShowAddTaskModal(false)
        setTaskToUpdate(null)
    }
    
    return (
        <section className="mb-20" id="tasks">
		{showAddTaskModal&&<AddTaskModal 
        onSave={handleAddAndEditTask}
        taskToUpdate={taskToUpdate} 
        closeModal={handleCloseModal}/>}
		<div className="container">
		<div className="p-2 flex justify-end">
			<SearchTask/>
		</div>
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskActions onAddTaskClick={()=>setShowAddTaskModal(true)}/>
				<div className="overflow-auto">
					<TaskList onEdit={handleEditTask} tasks={tasks}/>
				</div>
			</div>
		</div>
	</section>
    );
};

export default TaskBoard;