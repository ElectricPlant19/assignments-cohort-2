/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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
  const arrayOfPromises = [wait1(t1), wait2(t2), wait3(t3)];
  const startTime = Date.now();
  return Promise.all(arrayOfPromises).then((values) => {
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    return elapsedTime;
  });
}
module.exports = calculateTime;
