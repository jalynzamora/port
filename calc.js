const calculator = {
	number1: 0,
	number2: 0,
	operation:'',
	inputOutput: document.getElementById('calcInput'),
	clear: function() {
		this.inputOutput.value = '';
	},
}

buttonClicked: function(button) { button = button#nine
  console.log(button);
   console.dir(button);
  let inputBox = document.getElementById('calcInput');

  switch (button.innerHTML) {
    case 'M':
      break;
    case 'C':
	  this.clear();
      break;
    case '/':
      break;
    case 'X':
      break;
    case '-':
      break;
    case '+':
      break;
    case '=':
      break;
    default:
      //if it made it to here it's a number
      inputBox.value = inputBox.value + button.innerHTML;
  }
}