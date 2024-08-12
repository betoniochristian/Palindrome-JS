const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultMessage = document.getElementById('results-msg');
const resultContainer = document.getElementById('result');

function palindrome (){
  const origText = textInput.value.toLowerCase().replace(/[^a-z01]+/ig, '');
  const reverseText = origText.split("").reverse().join("");
  
  if(origText === ''){
    alert("Please input a value");
    return;
  }

  if(origText === reverseText){
    resultMessage.innerText = `${textInput.value} is a Palindrome`;
  }else{
    resultMessage.innerText = `${textInput.value} is not a Palindrome`;
  }

  
};

checkButton.addEventListener('click',  palindrome);