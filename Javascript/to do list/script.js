let tasks = [];
function addTask() {
  const IP = document.getElementById("Input");
  console.log(IP);
  const taskText = IP.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push(taskText);

  console.log("Task Added=", taskText);
  console.log("All Tasks=", tasks);

  const li = document.createElement("li");
  li.textContent = taskText;

  const delbtn = document.createElement("button");
  delbtn.textContent = "Delete";
  delbtn.className = "delete";
  delbtn.onclick = function () {
    li.remove();
    console.log("Task deleted=", taskText);
  };

  li.appendChild(delbtn);
  document.getElementById("tasklist").appendChild(li);

  Input.value = "";
}

function deleteall() {
  const tasklist = document.getElementById("tasklist");
  tasklist.innerHTML = "";
  console.log("All tasks deleted");
}
