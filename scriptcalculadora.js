let input = document.getElementById('result');

function addNumber(number) {
  input.value += number;
}

function addDecimal() {
  if (!input.value.includes('.')) {
    input.value += '.';
  }
}

function addOperator(operator) {
  if (input.value.slice(-1) !== operator) {
    input.value += operator;
  }
}

function clearResult() {
  input.value = '';
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = 'Erro';
  }
}