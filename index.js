let button = document.getElementById("calculate");
let resetButton = document.getElementById("reset1");
let myForm = document.getElementById("myForm");

function call() {
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value) / 100;
    if (isNaN(weight) || isNaN(height) || height === 0 || height<0 || weight<0) {
        document.getElementById('bmi').innerHTML = 'Please enter valid numbers.';
        return;
    }
    let bmi = weight / (height * height);

    (bmi < 18.5) ?
        document.getElementById('bmiStat').innerHTML = 'You are underweight.' :
        (bmi >= 18.5 && bmi < 25) ?
            document.getElementById('bmiStat').innerHTML = 'You are normal weight.' :
            (bmi >= 25 && bmi < 30) ?
                document.getElementById('bmiStat').innerHTML = 'You are overweight.' :
                (bmi >= 30) ?
                    document.getElementById('bmiStat').innerHTML = 'You are obese.':'';


                    document.getElementById('bmi').innerHTML = 'Your BMI is ' + bmi.toFixed(2);
}

function resetFunction() {
    myForm.reset();
    document.getElementById('bmi').innerHTML = "";
    document.getElementById('bmiStat').innerHTML = "";
}


button.addEventListener("click", call);
resetButton.addEventListener("click", resetFunction);



