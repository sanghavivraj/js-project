const form = document.querySelector('form');

// this usecase  will give the empty value
// const wight = parseInt(document.querySelector('#weight').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if (bmi <= 18.6 && bmi > 0) {
      results.innerHTML = `<span> under Weight ${bmi}</span>`;
    } else if (bmi <= 24.9 && bmi > 18.6) {
      results.innerHTML = `<span> normal Weight ${bmi}</span>`;
    } else {
      results.innerHTML = `<span> overWeight ${bmi}</span>`;
    }
  }
});
