const password = document.getElementById('password');
const valeurRange = document.querySelector('.valeurRange');
const range = document.getElementById('range');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const submit = document.querySelector('.submit');
const diff = document.getElementById('diff');
const btnDiff1 = document.getElementById('btnDiff1');
const btnDiff2 = document.getElementById('btnDiff2');
const btnDiff3 = document.getElementById('btnDiff3');
const btnDiff4 = document.getElementById('btnDiff4');
const copy = document.getElementById('copy');

const alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz';
const alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number = '0123456789';
const symbol = '!@#$%^&*()_+';

copy.addEventListener('click', () => {
    if (document.hasFocus()) {
        navigator.clipboard.writeText(password.textContent);
        alert('Password copied to clipboard');
    }
});

range.addEventListener('input', () => {
    valeurRange.textContent = range.value;
});

submit.addEventListener('click', (event) => {
    event.preventDefault();

    let characters = '';
    if (uppercase.checked) characters += alphabetUpperCase;
    if (lowercase.checked) characters += alphabetLowerCase;
    if (numbers.checked) characters += number;
    if (symbols.checked) characters += symbol;

    const passwordLength = parseInt(range.value);
    password.textContent = generatePassword(passwordLength, characters);
    
    if (valeurRange.textContent >= 25) {
        diff.textContent = 'STRONG';  
        btnDiff1.classList.remove('btnDiffActiveMedium')
        btnDiff2.classList.remove('btnDiffActiveMedium')
        btnDiff3.classList.remove('btnDiffActiveMedium')  
        btnDiff1.classList.remove('btnDiffActiveWeak')
        btnDiff2.classList.remove('btnDiffActiveWeak')
        btnDiff1.classList.remove('btnDiffActiveToWeak')
        btnDiff1.classList.add('btnDiffActiveStrong')
        btnDiff2.classList.add('btnDiffActiveStrong')
        btnDiff3.classList.add('btnDiffActiveStrong')
        btnDiff4.classList.add('btnDiffActiveStrong')
    } else if (valeurRange.textContent >= 15) {
        diff.textContent = 'MEDIUM';
        btnDiff1.classList.remove('btnDiffActiveStrong')
        btnDiff2.classList.remove('btnDiffActiveStrong')
        btnDiff3.classList.remove('btnDiffActiveStrong')
        btnDiff4.classList.remove('btnDiffActiveStrong')
        btnDiff1.classList.remove('btnDiffActiveWeak')
        btnDiff2.classList.remove('btnDiffActiveWeak')
        btnDiff1.classList.remove('btnDiffActiveToWeak')
        btnDiff1.classList.add('btnDiffActiveMedium')
        btnDiff2.classList.add('btnDiffActiveMedium')
        btnDiff3.classList.add('btnDiffActiveMedium')
        btnDiff4.classList.add('btnDiffNotActive')
    } else if (valeurRange.textContent >= 10) {
        diff.textContent = 'WEAK';
        btnDiff1.classList.remove('btnDiffActiveStrong')
        btnDiff2.classList.remove('btnDiffActiveStrong')
        btnDiff3.classList.remove('btnDiffActiveStrong')
        btnDiff4.classList.remove('btnDiffActiveStrong')
        btnDiff1.classList.remove('btnDiffActiveMedium')
        btnDiff2.classList.remove('btnDiffActiveMedium')
        btnDiff3.classList.remove('btnDiffActiveMedium') 
        btnDiff1.classList.remove('btnDiffActiveToWeak')
        btnDiff1.classList.add('btnDiffActiveWeak')
        btnDiff2.classList.add('btnDiffActiveWeak')
        btnDiff3.classList.add('btnDiffNotActive')
        btnDiff4.classList.add('btnDiffNotActive')
    } else if (valeurRange.textContent < 10) {
        diff.textContent = 'TO WEAK';
        btnDiff1.classList.remove('btnDiffActiveStrong')
        btnDiff2.classList.remove('btnDiffActiveStrong')
        btnDiff3.classList.remove('btnDiffActiveStrong')
        btnDiff4.classList.remove('btnDiffActiveStrong')
        btnDiff1.classList.remove('btnDiffActiveMedium')
        btnDiff2.classList.remove('btnDiffActiveMedium')
        btnDiff3.classList.remove('btnDiffActiveMedium') 
        btnDiff1.classList.remove('btnDiffActiveWeak')
        btnDiff2.classList.remove('btnDiffActiveWeak')
        btnDiff1.classList.add('btnDiffActiveToWeak')
        btnDiff2.classList.add('btnDiffNotActive')
        btnDiff3.classList.add('btnDiffNotActive')
        btnDiff4.classList.add('btnDiffNotActive')
    }
});

function generatePassword(length, characters) {
    if (!characters) return 'Select options';

    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result.length > 22 ? result.replace(/(.{22})/g, '$1\n') : result;
}
