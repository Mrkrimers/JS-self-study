const counterNode = document.querySelector(".js-couter");
const incBtnNode = document.querySelector(".js-inc-btn");
const clearBtnNode = document.querySelector(".js-clear-btn");
// console.log(counterNode)

let couter = 0;

function render() {
    counterNode.innerHTML = couter;
}

counterNode.innerHTML = couter;

incBtnNode.addEventListener('click', () => {
    couter += 1;
    render();
})

clearBtnNode.addEventListener('click', () => {
    couter = 0;
    render();
})



// console.log(couter);

