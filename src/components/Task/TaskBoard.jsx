import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import NoTaskFound from "./NoTaskFound";

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

    const handleDeleteTask=(taskId)=>{
      const tasksAfterDelete=tasks.filter(task=>task.id!==taskId)
      setTasks(tasksAfterDelete)
    }
    const handleDeleteAllTasks=()=>{
        // tasks.length=0
        //ekhane tasks array empty hoye zabe
        setTasks([])
    }
    const handleTaskFavourite=(taskId)=>{
        const taskIndex=tasks.findIndex(task=>task.id===taskId)
        const newTasks=[...tasks]
        tasks[taskIndex].isFav=!tasks[taskIndex].isFav
        setTasks(newTasks)
    }

    const handleSearch=(searchText,e)=>{
        e.preventDefault()
        const searchTasks=tasks.filter(task=>task.title.toLowerCase().includes(searchText.toLowerCase()))
        setTasks(searchTasks)
      
    }
    return (
        <section className="mb-20" id="tasks">
		{showAddTaskModal&&<AddTaskModal 
        onSave={handleAddAndEditTask}
        taskToUpdate={taskToUpdate} 
        closeModal={handleCloseModal}/>}
		<div className="container">
		<div className="p-2 flex justify-end">
			<SearchTask handleSearch={handleSearch}/>
		</div>
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskActions 
                onAddTaskClick={()=>setShowAddTaskModal(true)}
                deleteAllTasks={handleDeleteAllTasks}
                />
				<div className="overflow-auto">
					{
                    tasks.length>0 ?
                    <TaskList 
                    tasks={tasks}
                    onEdit={handleEditTask}
                    deleteTask={handleDeleteTask}
                    handleFav={handleTaskFavourite}
                     />:<NoTaskFound/>}
				</div>
			</div>
		</div>
	</section>
    );
};

export default TaskBoard;