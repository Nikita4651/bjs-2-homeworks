"use strict"


function solveEquation(a, b, c) {
  let arr = [];

  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;
  }

  if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
    return arr;
  }

  if (d > 0) {
    let dSqrRoot = Math.sqrt(d);

    let x1 = (-b + dSqrRoot) / (2 * a);
    let x2 = (-b - dSqrRoot) / (2 * a);

    arr.push(x1);
    arr.push(x2);
    return arr;
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  // создаём месячную ставку в диапазоне от 0 до 1
  let monthlyRate = (percent / 100) / 12;

  // вычисляем тело кредита: вычитаем из суммы кредита первоначальный взнос
  let creditBody = amount - contribution;

  /* вычисляем ежемесячный платёж по формуле:
  Платёж = S * (P + (P / (((1 + P)^n) - 1))),
  где:
  S — тело кредита creditBody,
  P — месячная процентная ставка monthlyRate,
  n — количество месяцев countMonths,
  */
  let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));

  // вычисляем полную стоимость кредита, умножая ежемесячный платёж на количество месяцев и складывая с первоначальным взносом
  let totalSum = (monthlyPayment * countMonths);

  // возвращаем из функции число (дробь), округлённое до двух знаком после запятой
  return parseFloat(totalSum.toFixed(2));
}
