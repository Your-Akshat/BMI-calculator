const calcButton = document.getElementById("actionButton")
const weight = document.getElementById("weight")
const height = document.getElementById("height")
const tellUser = document.getElementById("ans")
const clearButton = document.getElementById("clear")

let BMI = 0;

calcButton.addEventListener( 'click', (e) => {
    e.preventDefault();
    let thisWeight = parseFloat(weight.value)
    let thisHeight = parseFloat(height.value)

    if(thisWeight === '' || thisWeight<1 || Number.isNaN(thisWeight)){
        alert("Error: wrong weight");
    }else if(thisHeight === '' || thisHeight<1 || Number.isNaN(thisHeight)){
        alert("Error: wrong height");
    }else{

        BMI = thisWeight / (0.0001 * thisHeight * thisHeight);
        BMI = BMI.toFixed(2);
        BMI = BMI.toLocaleString('en-IN')

        tellUser.innerHTML = `<span class='h2header'>BMI</span> = ${BMI}`
    }
})

clearButton.addEventListener( 'click', (e) => {
    e.preventDefault();
    weight.value = '';
    height.value = '';
    BMI = 0;

    tellUser.innerHTML = 'BMI = N/A'
})