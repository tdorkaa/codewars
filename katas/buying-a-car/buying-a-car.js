module.exports = (startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) => {
    let numberOfMonthUntilBuying = 0;
    let savedMoney = 0;
    let lossPerMonth = percentLossByMonth;

    console.log('first month', startPriceNew - (startPriceOld + savedMoney));
    console.log('lost', lossPerMonth);
    console.log('........................................');

    while ((startPriceNew - (startPriceOld + savedMoney)) >= 0) {
        lossPerMonth = getPercentOfLoss(numberOfMonthUntilBuying, lossPerMonth);
        console.log(lossPerMonth);
        startPriceNew = getPrice(numberOfMonthUntilBuying, startPriceNew, lossPerMonth);
        startPriceOld = getPrice(numberOfMonthUntilBuying, startPriceOld, lossPerMonth);
        savedMoney = savedMoney + savingperMonth;
        numberOfMonthUntilBuying++;

        console.log('new price', startPriceNew);
        console.log('old price', startPriceOld);
        console.log('saved money', savedMoney);
        console.log('month', numberOfMonthUntilBuying);
        console.log('paros month', numberOfMonthUntilBuying % 2 === 0);
        console.log('remaining money after buying', startPriceNew - (startPriceOld + savedMoney));
        console.log('.......................................................');

    }
    return [numberOfMonthUntilBuying, ((startPriceOld + savedMoney) - startPriceNew)];
};

const getPrice = (numberOfMonthUntilBuying, price, percentLossByMonth) => {
    const percentOfLossEvery2Month = 1 - ((percentLossByMonth + 0.5)/100);
    const percentOfLossEveryEvenMonth = 1 - (percentLossByMonth/100);
    return (numberOfMonthUntilBuying % 2 === 0) ? price * percentOfLossEvery2Month : price * percentOfLossEveryEvenMonth;
};

const getPercentOfLoss = (numberOfMonthUntilBuying, oldLoss) => {
    return (numberOfMonthUntilBuying % 2 === 0) ? (oldLoss + 0.5) : oldLoss;
};

//The description was unnecessarily unclear and lead me in the wrong direction.
// Thanks to @creightonja 's (and others) comments I learned the intended incrementing pattern of the bi-monthly percentage
// - 1.5 in month 1, 2 in month 2, 2 in month 3, and 2.5 in month 4, etc.
