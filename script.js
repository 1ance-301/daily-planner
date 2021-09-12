// function to display tasks saved in local storage
var task = $("textarea.description")
function loadTasks() {
    var storedTask = localStorage.getItem("task");
    var taskText = JSON.parse(storedTask);
    $("textarea.description").text(taskText);
    if (task === null) {
        task = "";
        return false;
    }
}
loadTasks();

// funtion to display current date
var currentDate = moment().format('LL');
$( "p#currentDay").html(currentDate);

// funtion to save tasks to local storage
$("button.saveBtn").click(saveTask);
function saveTask() {
    localStorage.setItem("task", JSON.stringify(task));
};

// funtion to change task descption background color depending on the time of day
var presentHour = moment().format('h A');
var hour = $("p.time-block").text();

if (presentHour == hour) {
    $("textarea.description").toggleClass( "present");
} else if (presentHour > hour) {
    $("textarea.description").toggleClass( "past");
} else if (presentHour < hour) {
    $("textarea.description").toggleClass( "future");
} else {};




