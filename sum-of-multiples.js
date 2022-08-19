

console.log(sum(10));

function sum(limit){ //limit is equal to 10
    let sum = 0; //Initialize sum to zero

    for(let i = 0; i <= limit; i++)
        if (i % 2 === 0 || i % 5 === 0)
            sum += i; //sum starts at zero and keeps adding the multiples until the limit is 10
    return sum;
}