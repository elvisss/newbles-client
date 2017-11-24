((module) => {
    let simulations = [{
        date: ['1 Enero 2017', '1 Junio 2017', '1 Enero 2018'],
        amount: [10000, 10200, 10400],
        earnedInterest: [null, 200, 400],
        profitability: [null, 2, 4]
    }];

    module.exports = simulations;
})(module);
