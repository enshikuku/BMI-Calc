// Mertic Calculator
let heightInput = document.querySelector('.heightInput') 
let weightInput = document.querySelector('.weightInput') 
let calculateButton = document.querySelector('.calculate')
// Imperical calculator
let heightFeet = document.querySelector('.heightInput-1')
let heightInches = document.querySelector('.heightInput-1-1') 
let weightImperial = document.querySelector('.weightInput-1') 
let calculateBtn = document.querySelector('.calculate-1') 
//  Switch tabs
let metricbtn = document.querySelector('.metric')
let imperialbtn = document.querySelector('.imperial')
let metCalc = document.querySelector('.metric-calculator')
let impCalc = document.querySelector('.imperial-calculator')
// Result Section
let result = document.querySelector('.result')
let statement1 = document.querySelector('#result-statement-1')
let statement2 = document.querySelector('#result-statement-2')
let statement3 = document.querySelector('#result-statement-3')
let statement4 = document.querySelector('#result-statement-4')

let BMI, height, weight 

calculateButton.addEventListener('click', ()=>{

    height = heightInput.value/100 
    weight = weightInput.value 
    BMI = weight/(height**2)
    result.innerText = `Your BMI is ${BMI.toFixed(1)}`
    
    statement1.style.backgroundColor = 'white'
    statement2.style.backgroundColor = 'white'
    statement3.style.backgroundColor = 'white'
    statement4.style.backgroundColor = 'white'
    if(BMI < 18.5){
        statement1.style.backgroundColor = 'lightgreen'     
    } else if ((BMI >= 18.5) && (BMI <= 24.9)){
        statement2.style.backgroundColor = 'lightgreen' 
    } else if ((BMI > 25) && (BMI <= 29.9 )){
        statement3.style.backgroundColor = 'lightgreen' 
    } else if (BMI > 29.9){
        statement4.style.backgroundColor = 'lightgreen'
    }
}) 
calculateBtn.addEventListener('click', ()=>{
    let impHeight = (heightFeet.value * 30.48) + (heightInches.value * 2.54)
    height = impHeight / 100
    weight = weightImperial.value * 0.453592
    BMI = weight/(height**2)
    result.innerText = `Your BMI is ${BMI.toFixed(1)}`
    
    
    statement1.style.backgroundColor = 'white'
    statement2.style.backgroundColor = 'white'
    statement3.style.backgroundColor = 'white'
    statement4.style.backgroundColor = 'white'
    if(BMI < 18.5){
        statement1.style.backgroundColor = 'lightgreen'     
    } else if ((BMI >= 18.5) && (BMI <= 24.9)){
        statement2.style.backgroundColor = 'lightgreen' 
    } else if ((BMI > 25) && (BMI <= 29.9 )){
        statement3.style.backgroundColor = 'lightgreen' 
    } else if (BMI > 29.9){
        statement4.style.backgroundColor = 'lightgreen'
    }
})
metricbtn.style.backgroundColor = 'lightgreen'
imperialbtn.style.backgroundColor = 'rgb(211, 210, 210)'
metricbtn.addEventListener('click', ()=>{
    metricbtn.style.backgroundColor = 'lightgreen'
    imperialbtn.style.backgroundColor = 'rgb(211, 210, 210)'
    metCalc.style.display = 'block'
    impCalc.style.display = 'none'
    statement1.style.backgroundColor = 'white'
    statement2.style.backgroundColor = 'white'
    statement3.style.backgroundColor = 'white'
    statement4.style.backgroundColor = 'white'
    result.innerText = ''
    heightFeet.value = ''
    heightInches.value = ''
    weightImperial.value = ''
})
imperialbtn.addEventListener('click', ()=>{
    metricbtn.style.backgroundColor = 'rgb(211, 210, 210)'
    imperialbtn.style.backgroundColor = 'lightgreen'
    metCalc.style.display = 'none'
    impCalc.style.display = 'block'
    statement1.style.backgroundColor = 'white'
    statement2.style.backgroundColor = 'white'
    statement3.style.backgroundColor = 'white'
    statement4.style.backgroundColor = 'white'
    heightInput.value = ''
    weightInput.value = ''
    result.innerText = ''
})