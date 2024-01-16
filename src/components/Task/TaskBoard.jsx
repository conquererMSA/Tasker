import { useState } from "react";
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
    return (
        <section className="mb-20" id="tasks">
		
		<div className="container">
		<div className="p-2 flex justify-end">
			<SearchTask/>
		</div>
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskActions/>
				<div className="overflow-auto">
					<TaskList tasks={tasks}/>
				</div>
			</div>
		</div>
	</section>
    );
};

export default TaskBoard;