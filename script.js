//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
  const inputNumber = document.getElementById('ip').value;

  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputNumber);
    }, 2000);
  });

  promise1.then((number) => {
    document.getElementById('output').textContent = `Result: ${number}`;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number);
      }, 2000);
    });
  }).then((number) => {
    document.getElementById('output').textContent = `Result: ${number}`;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number * 2);
      }, 1000);
    });
  }).then((number) => {
    document.getElementById('output').textContent = `Result: ${number}`;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number - 3);
      }, 1000);
    });
  }).then((number) => {
    document.getElementById('output').textContent = `Result: ${number}`;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number / 2);
      }, 1000);
    });
  }).then((number) => {
    document.getElementById('output').textContent = `Result: ${number}`;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number + 10);
      }, 1000);
    });
  }).then((number) => {
    document.getElementById('output').textContent = `Final Result: ${number}`;
  });
});
