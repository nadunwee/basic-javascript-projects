const characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const passwdPara = document.querySelector('.password-p');
const lengthValue = document.getElementById('length-value');
const lengthSlider = document.getElementById('password-length');

function generatePassword() {
  let password = '';
  const length = lengthSlider.value; // Desired password length

  for (let i = 0; i < length; i++) {
    const randomIndex = randomNumber();
    password += characters[randomIndex];
  }

  passwdPara.textContent = password;
}

function randomNumber() {
  return Math.floor(Math.random() * characters.length);
}

function updateLengthValue() {
  lengthValue.textContent = lengthSlider.value;
}

