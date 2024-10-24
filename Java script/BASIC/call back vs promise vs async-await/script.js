// Callback example
function callbackExample(value, callback) {
    setTimeout(() => {
      const result = value * 2;
      callback(result);
    }, 1000);
  }
  
  // Promise example
  function promiseExample(value) {
    return new Promise(resolve => {
      setTimeout(() => {
        const result = value * 2;
        resolve(result);
      }, 1000);
    });
  }
  
  // Async/Await example
  async function asyncAwaitExample(value) {
    return new Promise(resolve => {
      setTimeout(() => {
        const result = value * 2;
        resolve(result);
      }, 1000);
    });
  }
  
  // Using Callback
  callbackExample(3, result => {
    console.log("Callback result:", result);
  
    // Using Promise
    promiseExample(3)
      .then(result => {
        console.log("Promise result:", result);
  
        // Using Async/Await
        (async () => {
          const result = await asyncAwaitExample(3);
          console.log("Async/Await result:", result);
        })();
      });
  });
  