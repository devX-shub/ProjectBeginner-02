const form = document.querySelector('form')
const weightWarning = document.querySelector('#warningweight')
const heightWarning = document.querySelector('#warningHeight')
//form submit event
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    if((weight <= 0 || isNaN(weight)) && (height <= 0 || isNaN(height)))
    {
        weightWarning.innerHTML = 'Invalid weight..plase enter correct weight'
        heightWarning.innerHTML = 'Invalid height..plase enter correct height'
    }
    else if((weight === '') && (height === ''))
    {
        weightWarning.innerHTML = 'weight can not be empty'
        heightWarning.innerHTML = 'height can not be empty'
    }
    else if((height === '') && (weight <= 0 || isNaN(weight)))
    {
        heightWarning.innerHTML = 'height can not be empty'
    }
    else if((weight === '') && (height <= 0 || isNaN(height)))
    {
        weightWarning.innerHTML = 'weight can not be empty'
    }
    else if(weight == '')
    {
        weightWarning.innerHTML = 'weight can not be empty'
    }
    else if(height === '')
    {
        heightWarning.innerHTML = 'height can not be empty'
    }
    else{
    const bmi = (weight / ((height * height)/1000)).toFixed(2);
    const result = document.querySelector('#result')
    result.innerHTML = `<span>"Your BMI is " ${bmi}</span>`
    }
})