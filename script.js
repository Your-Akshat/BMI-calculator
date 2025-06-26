const calcButton = document.getElementById("actionButton")
const weight = document.getElementById("weight")
const height = document.getElementById("height")
const tellUser = document.getElementById("ans")

let BMI = 0;

calcButton.addEventListener( 'click', (e) => {
    e.preventDefault();
    let thisWeight = parseFloat(weight.value)
    let thisHeight = parseFloat(height.value)

    if(thisWeight === '' || thisWeight<1){
        alert("Invalid Weight");
    }else if (thisHeight<1){
        alert("Invalid Height");
    }else{

        BMI = thisWeight;
        BMI = BMI / (0.0001 * thisHeight * thisHeight);
        BMI = BMI.toFixed(2);
        BMI = BMI.toLocaleString('en-IN')

        tellUser.innerHTML = `BMI = ${BMI}`
    }
})