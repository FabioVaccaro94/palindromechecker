const userInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function checkForPalindrome(input) {

    if (input === '') {
        alert('Please input a value');
        return;
    }

    const filteredInput = input.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

    const isPalindrome = filteredInput === filteredInput.split('').reverse().join('');

    if (isPalindrome) {
        resultDiv.innerHTML = `<strong>${input}</strong> is a palindrome!`;
    } else {
        resultDiv.innerHTML = `<strong>${input}</strong> is not a palindrome!`;
    }

    resultDiv.classList.remove('hidden');
}

checkBtn.addEventListener('click', function () {
    checkForPalindrome(userInput.value);
});
