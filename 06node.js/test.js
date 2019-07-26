// let newClass = function (a, b) {
//     this.a = a;
//     this.b = b;
//     this.show = function () {
//         console.log(a, b);
//     };
// }

class newClass {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.show = function () {
            console.log(a, b);
        };
    }
}

let test = new newClass("qwe", "qwr");
console.log(test.a);
test.show();