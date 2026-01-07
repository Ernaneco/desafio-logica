let balance;
let rank;

function calculateRank(victory, defeat) {
    balance = victory - defeat;
    if (balance < 10) {
        rank = "Ferro";
    } else if (balance < 20) {
        rank = "Bronze";
    } else if (balance < 50) {
        rank = "Prata";
    } else if (balance < 80) {
        rank = "Ouro";
    } else if (balance < 90) {
        rank = "Diamante";
    } else if (balance < 100) {
        rank = "Lendário";
    } else if (balance >= 101) {
        rank = "Imortal"
    }
    return rank;
}

calculateRank(103, 2);
console.log(`O Herói tem saldo ${balance} e está no nível de ${rank}.`);