function mincost(cost)
{

var n = cost.length;
let list = new Array(n);

if (n == 1)
    return cost[0];

list[0] = cost[0];
list[1] = cost[1];

for (let i = 2; i < n; i++)
{
    list[i] = Math.min(list[i - 1],list[i - 2]) + cost[i];
}

return Math.min(list[n - 2],
                list[n - 1]);
}


var a=[10, 15, 20];
console.log(mincost(a));
