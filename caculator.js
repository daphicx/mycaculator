const calScreen =document.querySelector(".screen")
const calBody = document.querySelector(".cal-body")
const del = document.querySelector(".del")
const equal = document.querySelector(".equal")
const answer = document.querySelector(".answer")

calBody.addEventListener("click", (button) =>{
    if(button.target.value === undefined){
        return " "
    }else{
        calScreen.innerHTML += button.target.value
    }

})

del.addEventListener("click",  () => {
    calScreen.innerHTML = ""
    answer.innerHTML =  ""
    answer.style.width = "80px"
})

equal.addEventListener("click", () => { 
        if(calScreen.innerHTML === ""){
            answer.innerHTML = ""
        }else{
            answer.innerHTML = eval(calScreen.textContent)
            answer.style.width="max-content"
        }
         
})