"use strict"

/* Task 1 */

function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0) {
    return arr;
  } else if (D === 0) {
    let x = -b / (2 * a);
    return [x];
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D))/(2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return [x1, x2];
  }
}

/* Task 2 */

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = (percent / 100) / 12;
  const S = amount - contribution;
  const payMonth = S * (P + (P / ((Math.pow((1 + P), countMonths)) - 1)));
  const totalPayment = (payMonth * countMonths).toFixed(2);
  return Number(totalPayment);
}