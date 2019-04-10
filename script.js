/* const myPromise = new Promise((resolve, reject) => {
  if (Math.random() * 100 <= 90) {
      resolve('Hello, Promises!');
  }
  reject(new Error('In 10% of the cases, I fail. Miserably.'));
});

myPromise.then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
}) */

/* const getUser = new Promise(function(resolve, reject) {
  setTimeout(function() {
      const user = 'Summit'
      if (user.length>4) {
          resolve(user)
      } else {
          reject('Error!')
      }
  }, 1000)
});
function printUser(data) {
  console.log(data)
}
console.log('hello');
getUser.then(function(data) {
  printUser(data)
}).catch(function(error) {
  console.log(error)
})
console.log('world'); */

