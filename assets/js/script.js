var saveBtns = document.querySelectorAll("button")
var workTasks = document.querySelectorAll(".description")
var dateEl = document.querySelector(".lead")

var currentDate = function() {
    dateEl.textContent = moment().format("dddd, MMMM Do YYYY")
}

currentDate()

var time = function(){
    for (i=0; i < workTasks.length; i++) {
        if (moment().format("HH") < workTasks[i].id) {
            workTasks[i].setAttribute("class", "description col-10 future")
        } else if (moment().format("HH") === workTasks[i].id) {
            workTasks[i].setAttribute("class", "present col-10 description")
        } else if (moment().format("HH") > workTasks[i].id) {
            workTasks[i].setAttribute("class", "past col-10 description")
        }
    }
}

time()

$(saveBtns[0]).on("click", function() {
    localStorage.setItem("schedule1", JSON.stringify(workTasks[0].value))
})

$(saveBtns[1]).on("click", function() {
    localStorage.setItem("schedule2", JSON.stringify(workTasks[1].value))
})

$(saveBtns[2]).on("click", function() {
    localStorage.setItem("schedule3", JSON.stringify(workTasks[2].value))
})

$(saveBtns[3]).on("click", function() {
    localStorage.setItem("schedule4", JSON.stringify(workTasks[3].value))
})

$(saveBtns[4]).on("click", function() {
    localStorage.setItem("schedule5", JSON.stringify(workTasks[4].value))
})

$(saveBtns[5]).on("click", function() {
    localStorage.setItem("schedule6", JSON.stringify(workTasks[5].value))
})

$(saveBtns[6]).on("click", function() {
    localStorage.setItem("schedule7", JSON.stringify(workTasks[6].value))
})

$(saveBtns[7]).on("click", function() {
    localStorage.setItem("schedule8", JSON.stringify(workTasks[7].value))
})

$(saveBtns[8]).on("click", function() {
    localStorage.setItem("schedule9", JSON.stringify(workTasks[8].value))
})

var loadItem1 = function() {
    var task1 = JSON.parse(localStorage.getItem("schedule1"))
    workTasks[0].value = task1
}
var loadItem2 = function() {
    var task2 = JSON.parse(localStorage.getItem("schedule2"))
    workTasks[1].value = task2
}
var loadItem3 = function() {
    var task3 = JSON.parse(localStorage.getItem("schedule3"))
    workTasks[2].value = task3
}
var loadItem4 = function() {
    var task4 = JSON.parse(localStorage.getItem("schedule4"))
    workTasks[3].value = task4
}
var loadItem5 = function() {
    var task5 = JSON.parse(localStorage.getItem("schedule5"))
    workTasks[4].value = task5
}
var loadItem6 = function() {
    var task6 = JSON.parse(localStorage.getItem("schedule6"))
    workTasks[5].value = task6
}
var loadItem7 = function() {
    var task7 = JSON.parse(localStorage.getItem("schedule7"))
    workTasks[6].value = task7
}
var loadItem8 = function() {
    var task8 = JSON.parse(localStorage.getItem("schedule8"))
    workTasks[7].value = task8
}
var loadItem9 = function() {
    var task9 = JSON.parse(localStorage.getItem("schedule9"))
    workTasks[8].value = task9
}

loadItem1()
loadItem2()
loadItem3()
loadItem4()
loadItem5()
loadItem6()
loadItem7()
loadItem8()
loadItem9()