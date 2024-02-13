const test = document.querySelector(".test");
const menu = document.querySelector(".menu");

console.log(test,menu)
test.addEventListener("click",()=>{
    test.classList.toggle("active");
    menu.classList.toggle("move");
}) 