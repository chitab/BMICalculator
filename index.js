const height= document.querySelector('#height');
const weight = document.querySelector('#weight');
const bmi = document.querySelector('#bmi');
const bmiValue = document.querySelector('#bmiValue');
let heightValue = 0;
let weightValue = 0;
height.addEventListener('change', () => {
    heightValue = height.valueAsNumber;
});
weight.addEventListener('change', () => {
    weightValue = weight.valueAsNumber;
});
bmi.addEventListener('click', () => {
    const heightInMeter = heightValue / 100;
    bmiValue.textContent = (weightValue / (heightInMeter ** 2)).toFixed(2);
})