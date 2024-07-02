const array = [];
const n = 30;
let container = document.querySelector('.container');
let btn = document.getElementById("button");
let rset = document.getElementById("reset");


const reset = () => {
    array.length = 0; 
    container.innerHTML = ''; 

    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 600));
    }

    for (let element of array) {
        let bar = document.createElement('div');
        bar.style.height = `${element}px`;
        bar.classList.add('bar');
        container.appendChild(bar);
    }
}

reset();

async function bubbleSort(array) {
    let bars = document.querySelectorAll('.bar');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                bars[j].style.height = `${array[j]}px`;
                
                bars[j + 1].style.marginBottom = '10px'; //To Denote the greatest element in the comparsion
                bars[j + 1].style.height = `${array[j + 1]}px`;

                bars[j].style.backgroundColor = 'red';
                bars[j + 1].style.backgroundColor = 'red';
                await new Promise(resolve => setTimeout(resolve, 100));

                bars[j].style.backgroundColor = 'black';
                
                bars[j + 1].style.marginBottom = '0px';
                bars[j + 1].style.backgroundColor = 'black';
            }
        }
        bars[array.length - 1 - i].style.backgroundColor = 'blue';
    }
}





btn.addEventListener('click', () => bubbleSort(array));
rset.addEventListener('click', reset);
