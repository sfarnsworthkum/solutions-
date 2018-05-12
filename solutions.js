function maxProfit(arr) {
    let maxprofit = 0;
    let buy;
    let sell;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let profit = arr[j] - arr[i];
            if (profit > maxprofit) {
                maxprofit = profit;
                buy = i;
                sell = j;
            }
        }
    }
    return [buy, sell];
}

// "a" <the rest of the string> <-- permutations of the rest of the string

// "bcd"
// "bdc"
// "cbd"
// "cdb"
// "dbc"
// "dcb"

function permutations(str) {
    if (str.length <= 1) {
        return [str];
    }

    let perms = [];
    for (let perm of permutations(str.slice(1))) {
        for (let i = 0; i <= perm.length; i++) {
            let newPerm = perm.slice(0, i) + str[0] + perm.slice(i);
            perms.push(newPerm);
        }
    }
    return perms;
}

console.assert(JSON.stringify(permutations("")) === '[""]');
console.assert(JSON.stringify(permutations("a")) === '["a"]');
console.assert(
    JSON.stringify(permutations("abc")) ===
        '["abc","bac","bca","acb","cab","cba"]'
);

