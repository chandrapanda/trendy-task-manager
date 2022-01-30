
//Buttons
document.getElementById("add-a-task").addEventListener("click", addTask());
document.getElementById("add-a-routine").addEventListener("click", addRoutine());
document.getElementById("view-edit-button").addEventListener("click", viewEditTask());
document.getElementById("add-deadline").addEventListener("click", addDeadline());
// document.getElementById("mark-in-progress").addEventListener("click", markInProgress());
// document.getElementById("mark-complete").addEventListener("click", markComplete());
document.getElementById("delete-task").addEventListener("click", deleteTask());

//TODO: Create function to enable user to add tasks to db.json file
function addTask() {
    console.log("A task has been added!");
};

//TODO: Create function to enable user to delete tasks from db.json file
function deleteTask() {
    console.log("Your task has been deleted");
};

//TODO: Create function to generate task cards
function generateCards() {
    console.log("A card has been generated!");
};

//TODO: Create function to enable user to add deadlines (use moment?)
function addDeadline() {
    console.log("A deadline has been added!");
};

//TODO: Create function to add a routine
function addRoutine() {
    console.log("A routine has been created!");
};

//TODO: Create function to VIEW or EDIT task
function viewEditTask() {
    console.log("You may now view or edit your task");
}

//TODO: Create function to enable user to prioritize tasks

