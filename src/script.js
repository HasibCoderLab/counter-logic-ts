"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ======== 1st  Step ==========
const plus = document.getElementById('plus');
const reset = document.getElementById('reset');
const minus = document.getElementById('minus');
const counterElement = document.getElementById('counter');
const clockElement = document.getElementById("clock");
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
    counterElement.textContent = count.toString();
});
minus.addEventListener('click', () => {
    count = count - 1;
    counterElement.textContent = count.toString();
});
reset.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count.toString();
});
//# sourceMappingURL=script.js.map