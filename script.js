const tasks = [
  {
    title: "Homework",
    status: "todo",
  },
  {
    title: "Workout",
    status: "completed",
  },
];

function render() {
  const tasksHTML = tasks
    .map((tasks, index) => {
      return `
    <div class="task task-${tasks.status}">
        <input type="checkbox" ${
          tasks.status == "completed" ? "checked" : ""
        } onclick="changeStatus(${index}, '${
        tasks.status == "completed" ? "todo" : "completed"
      }')">
        <span onclick="editTask(${index});">${tasks.title}</span>
      <div class="remove-edit">
        <i class="fa-solid fa-xmark" onclick="removeTask(${index})"></i>
      </div>
    </div>
    `;
    })
    .join("");

  document.getElementById("tasksElement").innerHTML = tasksHTML;
}

function addTask() {
  const title = prompt("Task title:");
  if (title === null) {
    return;
  }
  tasks.push({
    title: title,
  });
  render();
}

function removeTask(deleteIndex) {
  const deleteConfirmed = confirm("Та устгахдаа итгэлтэй байна уу?");
  if (deleteConfirmed) {
    tasks.splice(deleteIndex, 1);
    render();
  }
}

function editTask(editIndex) {
  const newTitle = prompt("Title", tasks[editIndex].title);
  if (newTitle != null) {
    tasks[editIndex].title = newTitle;
    render();
  }
}

function changeStatus(index, status) {
  tasks[index].status = status;
  render();
  console.log({ index, status });
}

render();
