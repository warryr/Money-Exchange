module.exports = function makeExchange(currency) {
    const coins = {};

    if (currency > 0){
        if (currency > 10000){
            coins.error = "You are rich, my friend! We don't have so much coins for exchange";
            return coins;
        }

        const h = parseInt(currency / 50);
        let surplus = currency - h * 50;
        const q = parseInt(surplus / 25);
        surplus -= q * 25;
        const d = parseInt(surplus / 10);
        surplus -= d * 10;
        const n = parseInt(surplus / 5);
        surplus -= n * 5;
        const p = parseInt(surplus);

        coins.H = h;
        coins.Q = q;
        coins.D = d;
        coins.N = n;
        coins.P = p;

        for (let key in coins){
            if (coins[key] === 0){
                delete coins[key];
            }
        }
    }
    return coins;
};
