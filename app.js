

var tasks_homework = [{
  title : "English Homework",
  done : true,
  person : "Angela Zheng"
}, {
  title : "Math Homework",
  done : false,
  person : "Angela Zheng"
}, {
  title : "Science Homework",
  done : true,
  person : "Angela Zheng"
}, {
  title : "Social Homework",
  done : true,
  person : "Angela Zheng"
}]

var tasks_chores = [{
  title : "Wash Dishes",
  done : true,
  person : "Angela Zheng"
}, {
  title : "Throw out Trash",
  done : false,
  person : "Tiffany Zheng"
}, {
  title : "Pick up Alice",
  done : true,
  Person : "Angela Zheng"
}]

var addTask = (function(task_homework){
  var task_div = document.createElement("div")
  document.getElementById("Homework").appendChild(task_div)
  task_div.innerHTML = '<input class="done" type= "checkbox"><input type = "text">'
  task_div.setAttribute("class", "task")
  var title_field = task_div.querySelector("input[type = text]")
  console.log(title_field)
  var checkbox = task_div.getElementsByClassName("done")[0]
  title_field.value = task_homework.title
  checkbox.checked = task_homework.done
})

tasks_homework.forEach(function(task_homework){
  var task_div = document.createElement("div")
  document.getElementById("Homework").appendChild(task_div)
  task_div.innerHTML = '<input class="done" type= "checkbox"><input type = "text">'
  task_div.setAttribute("class", "task")
  var title_field = task_div.querySelector("input[type = text]")
  console.log(title_field)
  var checkbox = task_div.getElementsByClassName("done")[0]
  title_field.value = task_homework.title
  checkbox.checked = task_homework.done
})

tasks_chores.forEach(function(task_chore){
  var task_div = document.createElement("div")
  document.getElementById("chore").appendChild(task_div)
  task_div.innerHTML = '<input class="done" type= "checkbox"><input type = "text">'
  task_div.setAttribute("class", "task")
  var title_field = task_div.querySelector("input[type = text]")
  console.log(title_field)
  var checkbox = task_div.getElementsByClassName("done")[0]
  title_field.value = task_chores.title
  checkbox.checked = task_chores.done
})
