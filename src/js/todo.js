   render();
   document.getElementById("newTask").addEventListener("keypress", (event) => {
         if (document.getElementById("newTask").value.trim() && event.key == "Enter") includeTask();
   });

includeTask = () => {
   const task_el = document.getElementById("newTask");
   if (!task_el.value.trim()) return; // confere se o campo está vazio.
   let creation = saveTask(task_el); 
   if (creation == false) { // tratativa para o caso de tarefa duplicada.
      alert('Tarefa já adicionada à lista.')
      return /* TODO: criar dps um tooltip alert informando que já existe a tarefa adicionada */
   }
   sendTaskToTable();
   task_el.value = null;
};

removeTask = (taskToDelete) => {
   let taskValue = taskToDelete.parentElement.childNodes[1].innerHTML.toLowerCase();
   taskToDelete.parentElement.remove();
   deleteTask(taskValue);
}
