
let sortArrayByParity = function(A) {
    let even = A.filter(n => (n%2) === 0 );
    let odd = A.filter(n => (n%2) != 0);
    return even.concat(odd);
};
