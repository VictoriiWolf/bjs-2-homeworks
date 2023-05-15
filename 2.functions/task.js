function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = Number((arr.reduce((accumulator, number) => accumulator + number, 0) / arr.length).toFixed(2));
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
    for (let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return max - min;
  } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.length < 0) {
      return 0;
    } else if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    } 
    }
    return sumEvenElement - sumOddElement;
  }

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr.length <= 0) {
      return 0;
    } else if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    func(...arrOfArr[i]);
  }

  const resultFunc = makeWork(arrOfArr, func);

  if (resultFunc > maxWorkerResult) {
    maxWorkerResult = resultFunc;
  }
  return maxWorkerResult;
}
