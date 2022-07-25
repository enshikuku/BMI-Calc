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
let statements = document.querySelectorAll('.result-statement')

let BMI, height, weight

metCalc.addEventListener('submit', (e)=>{
    e.preventDefault()
    height = Number(heightInput.value) / 100 
    weight = Number(weightInput.value)
    BMI = weight/(height**2)
    result.innerText = `Your BMI is ${BMI.toFixed(1)}`
    
    statements.forEach(statement => statement.style.backgroundColor = 'white')
    if (BMI > 29.9){
        statements[3].style.backgroundColor = 'lightgreen'
    } else if(BMI > 25){
        statements[2].style.backgroundColor = 'lightgreen'     
    } else if (BMI >= 18.5){
        statements[1].style.backgroundColor = 'lightgreen' 
    } else{
        statements[0].style.backgroundColor = 'lightgreen' 
    }
}) 
impCalc.addEventListener('submit', (e)=>{
    e.preventDefault()
    //(weight in pounds x 703) / (height in inches x height in inches).
    height = ((Number(heightFeet.value) * 12) + Number(heightInches.value))
    weight = Number(weightImperial.value)
    BMI = 703 * weight/(height**2)
    result.innerText = `Your BMI is ${BMI.toFixed(1)}`
    
    
    statements.forEach(statement => statement.style.backgroundColor = 'white')
    if (BMI > 29.9){
        statements[3].style.backgroundColor = 'lightgreen'
    } else if(BMI > 25){
        statements[2].style.backgroundColor = 'lightgreen'     
    } else if (BMI >= 18.5){
        statements[1].style.backgroundColor = 'lightgreen' 
    } else{
        statements[0].style.backgroundColor = 'lightgreen' 
    }  
})
metricbtn.style.backgroundColor = 'lightgreen'
imperialbtn.style.backgroundColor = 'rgb(211, 210, 210)'
metricbtn.addEventListener('click', ()=>{
    metricbtn.style.backgroundColor = 'lightgreen'
    imperialbtn.style.backgroundColor = 'rgb(211, 210, 210)'
    metCalc.style.display = 'block'
    impCalc.style.display = 'none'
    statements.forEach(statement => statement.style.backgroundColor = 'white')
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
    statements.forEach(statement => statement.style.backgroundColor = 'white')
    heightInput.value = ''
    weightInput.value = ''
    result.innerText = ''
})