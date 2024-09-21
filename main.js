let line = document.querySelectorAll(".Skills .bo .line span")
let skills = document.querySelector(".Skills ")
let number = document.querySelectorAll(".stats .box .number")
let stat = document.querySelector(".stats")
let stop1 = false


window.onscroll = function() {

    if (window.scrollY >= skills.offsetTop - 200) {
        line.forEach((el) => {
            el.style.width = el.dataset.width;
        })
    }
    if (window.scrollY >= stat.offsetTop - 300) {
        if (stop1 == false) {
            number.forEach((ele) => targat(ele))
            stop1 = true
        }

    }
}

function targat(num) {
    let goal = num.dataset.goal
    let time = setInterval(() => {
        num.textContent++
            if (num.textContent == goal) {
                clearInterval(time)
            }
    }, 2000 / goal)
}