data_tasks = [{id:"unico", name:"<< Estilizar o meninão ai 🐀"}];

idGenerator = () => {
   let timestamp = new Date();

   return `${timestamp.getHours()}${timestamp.getMinutes()}${timestamp.getSeconds()}${timestamp.getMilliseconds()}`;

};

capitalize = (string) =>  {
   return string.charAt(0).toUpperCase() + string.slice(1);
};

saveTask = (element) => {
   const found = data_tasks.find(register => register.name === element.value);
   if (!found){
         let task = {
         id: idGenerator(),
         name: element.value.toLowerCase(),
      };
      data_tasks.push(task);
   }
   else {return false;}

};

sendTaskToTable = () => {
   const value = $('#newTask')[0].value;
   var row = $('#list tbody')[0].insertRow(-1);
   let cbxCell = row.insertCell(0);
   cbxCell.innerHTML = `<input type="checkbox">`;
   cbxCell.className = 'checkbox';
   let taskCell = row.insertCell(1);
   taskCell.innerHTML = capitalize(value);
   taskCell.className = 'task';
   let delbtnCell = row.insertCell(2);
   delbtnCell.innerHTML = `<button onclick=removeTask(this.parentElement) class="deleteButton"> X </button>`;
   delbtnCell.className = 'delete';

}

render = () => {
   data_tasks.forEach(task => {
      var row = $('#list tbody')[0].insertRow(-1);
      let cbxCell = row.insertCell(0);
      cbxCell.innerHTML = `<input type="checkbox">`;
      cbxCell.className = 'checkbox';
      let taskCell = row.insertCell(1);
      taskCell.innerHTML = capitalize(task.name);
      taskCell.className = 'task';
      let delbtnCell = row.insertCell(2);
      delbtnCell.innerHTML = `<button onclick=removeTask(this.parentElement) class="deleteButton"> X </button>`;
      delbtnCell.className = 'delete';
   });
}

deleteTask = (value) => {
   const response = data_tasks.findIndex((object) => {
      object.name == value
   });
   data_tasks.splice(response, 1);
}
