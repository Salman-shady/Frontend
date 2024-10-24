// Function that returns a Promise to simulate an asynchronous operation
function asyncOperation(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a successful operation
        resolve(value);
      }, 1000); // Simulating a delay of 1 second
    });
  }
  
  // Promise chaining example
  asyncOperation(1)
    .then(result1 => {
      console.log(result1);
      return asyncOperation(result1 + 2);
    })
    .then(result2 => {
      console.log(result2);
      return asyncOperation(result2 * 3);
    })
    .then(result3 => {
      console.log(result3);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  