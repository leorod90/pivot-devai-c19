// ---- TASK LOGIC ----
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");

  // task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.onclick = function () {
    span.classList.toggle("completed");
  };

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    li.remove();
  };

  // add everything to the list item
  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = ""; // clear input
}

// ---- LOGOUT ----
function logout() {
  window.location.href = "index.html";
}