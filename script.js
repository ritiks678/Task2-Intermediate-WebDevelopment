// Form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    if (name === "" || email === "") {
      alert("Please fill out all fields.");
      event.preventDefault();
    } else if (!email.match(emailPattern)) {
      alert("Please enter a valid email.");
      event.preventDefault();
    }
  });
  
  // To-Do List functionality
  function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value === "") return;
  
    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
  
    newTask.onclick = function() {
      taskList.removeChild(newTask);
    };
  
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
  