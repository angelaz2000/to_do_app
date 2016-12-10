var addTask = function(task, type){
  var task_div = document.createElement("div")
  document.getElementById(type).appendChild(task_div)
  task_div.innerHTML = '<input class="done" type= "checkbox"><input type = "text"><button class = "Remove">Remove</button>'
  var remove = task_div.querySelector("button")
  remove.addEventListener("click", function() {
      document.getElementById(type).removeChild(task_div)
      let deleteRequest = new XMLHttpRequest()
      deleteRequest.open("DELETE", "http://todo.webtechnologybootcamp.com/tasks/" + task.id)
      deleteRequest.send()
    })
  task_div.setAttribute("class", "task")
  var title_field = task_div.querySelector("input[type = text]")
  console.log(title_field)
  var checkbox = task_div.getElementsByClassName("done")[0]
  checkbox.addEventListener("change" , function(){
    var donerequest = new XMLHttpRequest()
    donerequest.open("PATCH", "http://todo.webtechnologybootcamp.com/tasks/" + task.id)
    donerequest.setRequestHeader("Content-Type", "application/json")
    donerequest.send(JSON.stringify({done:checkbox.checked}))
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
add_homework_button.addEventListener("click", function(){
  var new_task = {
    title:new_homework_title_field.value,
    done: false,
    type:"Homework"
  }
  addTask(new_task, "Homework")
  var new_homework_task_request = new XMLHttpRequest()
  new_homework_task_request.open("POST", "http://todo.webtechnologybootcamp.com/tasks/")
  new_homework_task_request.addEventListener("load", function(){
    var new_homework_task = JSON.parse(new_homework_task_request.responseText)
    new_task.id = new_homework_task.id
  })
new_homework_task_request.setRequestHeader("Content-Type", "application/json")
new_homework_task_request.send(JSON.stringify({
  title : new_homework_title_field.value,
  done : false,
  type : "Homework"}))
})

var add_chore_button = document.getElementById("add_chore")
var new_chore_title_field = document.getElementById("new_chore_title")
add_chore_button.addEventListener("click", function(){
  var new_chore = {
    title:new_chore_title_field.value,
    done: false,
    type:"Chore"
  }
  addTask(new_chore, "Chore")
var new_chore_task_request = new XMLHttpRequest()
new_chore_task_request.open("POST", "http://todo.webtechnologybootcamp.com/tasks/")
new_chore_task_request.addEventListener("load", function(){
  var new_chore_task = JSON.parse(new_chore_task_request.responseText)
  new_chore.id = new_chore_task.id
})
new_chore_task_request.setRequestHeader("Content-Type", "application/json")
new_chore_task_request.send(JSON.stringify({
  title : new_chore_title_field.value,
  done : false,
  type : "Chore"}))
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
