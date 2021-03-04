data_tasks = [];

idGenerator = () => {
   let timestamp = new Date();

   return `${timestamp.getHours()}${timestamp.getMinutes()}${timestamp.getSeconds()}${timestamp.getMilliseconds()}`;

};

createTask = (element) => {
   let task = {
      id: idGenerator(),
      value: element.value,
   };

   data_tasks.push(task);

};

render = () => {

   let htmlRender = data_tasks.reduce((formatterList, task) => {
      formatterList += `<li data-id="${task.id}" class="itemTask">${task.value}<button onclick=removeTask(this) class="deleteButton" data-btn-id="${task.id}"> X </button></li>`;
      return formatterList
   },"");

   document.getElementById("list").innerHTML = htmlRender
}

deleteTask = (taskId) => {
   data_tasks = data_tasks.filter(element => element.id !== taskId );
}
