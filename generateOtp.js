function generateOtp(length) {
    let otp = '';
    for(let i=0; i<length; i++) {
        otp += Math.floor(Math.random() * 10).toString();
    }
    return otp;
}
console.log(generateOtp(3))

// function generate(num) {
//     let result = "";
//     for(let i=0; i<num; i++) {
//         result += Math.floor(Math.random() * 10).toString();
//     }
//     return result;
// }
// console.log(generate(3))