var a = [1, 2, 3, 3, 4], b = [5, 7, 3, 5, 4, 2, 2, 6, 7];
var c = a.concat(b);
var d = c.filter(function(item, idx, self) {
    return self.indexOf(item) === idx;
});
var sum = a.reduce(function(prev, cur, index, array) {
    return prev + cur;
});
console.dir(sum);
//first decrease in mass then contact
/***
 * removeRepetitionItem
 * @param a
 * @returns {*}
 */
function removeRepetitionItem(a) {
    for(var i = 0; i < a.length - 1; i++) {
        for(var k = i + 1; k < a.length; k++) {
            if (a[i] === a[k]) {
                a.splice(k, 1);
                k--;
            }
        }
    }
    return a;
}
console.dir(d);

[1, 2, 3].map(parseInt);
[1, 2, 3].map(function(item, idx, self) {
    return parseInt(item, idx);
});

//尝试看看 还是要密码？？？
removeRepetitionItem(c);
