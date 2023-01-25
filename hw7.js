//  Task 1
//  function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Выполнен"), ms);
//     });
//   }
//   delay(3000).then(() => alert('выполнилось через 3 секунды'));


// Task 2
  let promise = new Promise(function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);
//   alert окно выведет 1, так как только первый resolve вызовится 

// Task 3
// promise.then(f1).catch(f2);
// promise.then(f1, f2);
// they are not the same.  then : when a promise is successful, 
// you can then use the resolved data. catch : when a promise fails, 
// you catch the error, and do something with the error information