const tasks = [
  {
    title: "Homework",
  },
  {
    title: "Workout",
  },
];

function render() {
  let taskHTML = ``;
  let index = 0;

  while (tasks.length > index) {
    taskHTML =
      taskHTML +
      `
        <div class="task">
            <span onclick="editTask(${index});">${tasks[index].title}</span>
          <div class="remove-edit">
            <i class="fa-solid fa-xmark" onclick="removeTask(${index})"></i>
          </div>
        </div>
        `;
    index = index + 1;
  }

  document.getElementById("tasksElement").innerHTML = taskHTML;
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
  const deleteConfirmed = confirm("Usgah uu?");
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

render();
