   document.getElementById("newTask").addEventListener("keypress", (event) => {
         if (document.getElementById("newTask").value.trim() && event.key == "Enter") inputTask();
   });

inputTask = () => {
   const task_el = document.getElementById("newTask");
   if (task_el.value.trim()) createTask(task_el);
   render();
   task_el.value = null;

};

updateScreen = () => {
   lists = data_tasks.reduce((allTasks, task) => {
      allTasks += `<li id-data="${task.id}">${task.data.description} <button onclick=removeTask(this) class="deleteButton" data-id="btn-${task.id}"> X </button></li>`;

      return allTasks;
   }, "");

   var list = `<ul>${lists}</ul>`;
   document.getElementById("list").innerHTML = list;
};

removeTask = (taskToDelete) => {
   deleteTask(taskToDelete.getAttribute("data-btn-id"));
   render();
}