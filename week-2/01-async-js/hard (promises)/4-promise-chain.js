/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function wait1(t) {
    const promise_1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, t * 1000);
    });
    return promise_1;
  }
  
  function wait2(t) {
    const promise_2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, t * 1000);
    });
    return promise_2;
  }
  
  function wait3(t) {
    const promise_3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, t * 1000);
    });
    return promise_3;
  }

function calculateTime(t1, t2, t3) {
    const timeStart = Date.now();
    return wait1(t1)
    .then(() => {wait2(t2)})
    .then(() => {wait3(t3)})
    .then( function finalReuslt (){
        const timeEnd = Date.now()
        const timeTaken = timeEnd - timeStart;
        return timeTaken;
    })
}

module.exports = calculateTime;
