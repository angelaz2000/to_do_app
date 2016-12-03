var addTask = function(task, type){
  var task_div = document.createElement("div")
  document.getElementById(type).appendChild(task_div)
  task_div.innerHTML = '<input class="done" type= "checkbox"><input type = "text">'
  task_div.setAttribute("class", "task")
  var title_field = task_div.querySelector("input[type = text]")
  console.log(title_field)
  var checkbox = task_div.getElementsByClassName("done")[0]
  checkbox.addEventListener("change" , function(){
    var donerequest = new XMLHttpRequest()
    donerequest.open("PATCH", "http://todo.webtechnologybootcamp.com/tasks/" + task.id)
    donerequest.setRequestHeader("Content-Type", "application/json")
    donerequest.send(JSON.stringify({done:checkbox.checked}))
    donerequest.addEventListener("load", function(){
      alert(donerequest.responseText)
    })
  })
  title_field.value = task.title
  checkbox.checked = task.done
}

var homework_request = new XMLHttpRequest()
homework_request.open("GET", "http://todo.webtechnologybootcamp.com/tasks/Homework")
homework_request.send()

homework_request.addEventListener("load", function(){
  var tasks_homework = JSON.parse(homework_request.responseText)

  tasks_homework.forEach(function(task_homework){
    addTask(task_homework, "Homework")
  })
})

var chores_request = new XMLHttpRequest()
chores_request.open("GET", "http://todo.webtechnologybootcamp.com/tasks/Chore")
chores_request.send()

chores_request.addEventListener("load", function(){
  var tasks_chore = JSON.parse(chores_request.responseText)

  tasks_chore.forEach(function(task_chore){
    addTask(task_chore, "Chore")
  })
})


var add_homework_button = document.getElementById("add_homework")
var new_homework_title_field = document.getElementById("new_homework_title")
add_homework_button.addEventListener("click", function() {
  addTask({
    title:new_homework_title_field.value,
    done: false,
    type:"Homework"
  }, "Homework")
  
})
// var tasks_homework = [{
//   title : "English Homework",
//   done : true,
//   person : "Angela Zheng"
// }, {
//   title : "Math Homework",
//   done : false,
//   person : "Angela Zheng"
// }, {
//   title : "Science Homework",
//   done : true,
//   person : "Angela Zheng"
// }, {
//   title : "Social Studies Homework",
//   done : true,
//   person : "Angela Zheng"
// }]

// var tasks_chore = [{
//   title : "Wash Dishes",
//   done : true,
//   person : "Angela Zheng"
// }, {
//   title : "Throw out Trash",
//   done : false,
//   person : "Tiffany Zheng"
// }, {
//   title : "Pick up Alice",
//   done : true,
//   Person : "Angela Zheng"
// }, {
//   title : "Sweep Floor",
//   done : false,
//   person : "Tiffany"
// }]
