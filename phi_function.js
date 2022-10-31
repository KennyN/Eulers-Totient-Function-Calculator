let phi = (n, counter) => {
    let track = [];
    if (n == 1) {
        counter++;
        console.log(`\nf(n) = ${counter}`);
        return counter;
    }
    for (let i = 1; i <= n; i++) {
        let prime = gcd(i, n);
        if (prime == 1) {
            // mutually prime
            track.push(i);
        }
    }
    console.log(`The Total Amount of Divisors of ${n} are: ${track.length}`);
    console.log(track);
    counter++;
    return phi(track.length, counter);
}

let gcd = (x, y) => {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      let t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

let n = 1;
console.log(phi(n, 0));

while (true) {
    if (phi(n, 0) == 10) {
        console.log(`!!!! f(n) = 10 when n is ${n} !!!!`);
        break;
    } else {
        console.log(`f(n) is not = 10 when n is ${n}`);
        n++;
    }
}