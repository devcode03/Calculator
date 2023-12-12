document.addEventListener('DOMContentLoaded', function () {
  // Get necessary elements
  let displayElement = document.querySelector('#display');
  let inputValuesElement = document.querySelector('.inputValues');
  let calculatorButtons = Array.from(document.getElementsByClassName('btn'));

  calculatorButtons.map((button) => {
    button.addEventListener('click', (e) => {
      switch (e.target.innerText) {
        case 'AC': {
          inputValuesElement.innerText = '';
          displayElement.innerText = '';
          break;
        }
        case 'DEL':
          inputValuesElement.innerText = inputValuesElement.innerText.slice(0, -1);
          break;
        case '=':
          try {
            displayElement.innerText = eval(inputValuesElement.innerText);
          } catch {
            displayElement.innerText = "Error!";
          }

        default: {
          inputValuesElement.innerText += e.target.innerText;
          displayElement.innerText = eval(inputValuesElement.innerText);
        }
      }
    });
  });
});
