// script.js

function submitNumber() {
  var userNumber = document.getElementById('numberInput').value;
  var randomNumber = Math.floor(Math.random() * 10) + 1;

  if (userNumber == randomNumber) {
    alert('Congratulation!! Play it to a lottery!!!');
  } else {
    alert('Try again! The correct number was ' + randomNumber);
  }
}

function resetForm() {
  document.getElementById('numberInput').value = '';
}