function convertTemp() {
  const degree = parseFloat(document.getElementById('degree').value);
  const type = document.getElementById('type').value;
  const result = document.getElementById('result');

  if (isNaN(degree)) {
    result.value = "Please enter a valid number";
    return;
  }

  let converted;
  if (type === "fahrenheit") {
    converted = ((degree - 32) * 5 / 9).toFixed(4);
    result.value = `${converted} °C`;
  } else {
    converted = ((degree * 9 / 5) + 32).toFixed(4);
    result.value = `${converted} °F`;
  }
}
