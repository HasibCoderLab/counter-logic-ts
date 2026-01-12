// ======== 1st  Step ==========
const plus = document.getElementById('plus') as HTMLElement;
const reset = document.getElementById('reset') as HTMLElement;
const minus = document.getElementById('minus') as HTMLElement;
const counterElement = document.getElementById('counter') as HTMLElement;
const clockElement = document.getElementById("clock") as HTMLElement;

// ========= Extra =============

setInterval(() => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    clockElement.textContent = time;
}, 1000);

// =========== 2nd Step ==========
let count = 0;


//  ========= 3rd Step ==========

plus.addEventListener('click', () => {
    count = count + 1;
    counterElement.textContent =count.toString();
});

minus.addEventListener('click', () => {
    count = count - 1;
        counterElement.textContent =count.toString();

});

reset.addEventListener('click' , () =>{

     count = 0;
        counterElement.textContent =count.toString();


}
);



