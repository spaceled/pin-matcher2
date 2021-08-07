// const allKeyValue = document.querySelectorAll('.button');
document.getElementById('generate-pin').addEventListener('click', function() {
    const randomNumber = generateRandomNumber();
    document.getElementById('generated-pin').value = randomNumber;
});
document.getElementById('pin-not-matched').style.display = 'none';
document.getElementById('pin-matched').style.display = 'none';

document.getElementById('submit-area').addEventListener('click', function() {
    handlePinMatching();
})

handleButtonValue('input-pin', '.button');

function handleButtonValue(inputClass, buttonClass) {
    const allKeyValue = document.querySelectorAll(buttonClass);
    const valueArray = [];
    for (let i of allKeyValue) {
        i.addEventListener('click', function (event) {
            const buttonValue = event.target.innerText;
            
            if (valueArray.length < 4) {
                valueArray.push(buttonValue);
            }

            const newArrayValue = valueArray.join('');
            const intNewArrayValue = parseInt(newArrayValue);

            document.getElementById(inputClass).value = intNewArrayValue;
        })
    };
}

function generateRandomNumber() {
    const randomNumber = Math.random() * 10000;
    const randomNumberNew = randomNumber.toFixed(0);
    return randomNumberNew;
}

function handlePinMatching() {
    const pinHandle = document.getElementById('generated-pin');
    const pinNewHandle = parseInt(pinHandle.value);

    const buttonHandle = document.getElementById('input-pin');
    const buttonNewHandle = parseInt(buttonHandle.value);

    if (pinNewHandle === buttonNewHandle) {
        const pinMatched = document.getElementById('pin-matched');
        pinMatched.style.display = 'block';
    }
    else {
        const pinNotMatched = document.getElementById('pin-not-matched');
        pinNotMatched.style.display = 'block';
    }
}