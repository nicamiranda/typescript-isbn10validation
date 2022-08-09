let isbn10:string = "048665088X";
//let isbn10:string = "1112223339";
let isbn = isbn10.split("");
let sum: number = 0;

export const isvalidISBN10 = (isbn) => {
    if (isbn.length !== 10 || !isbn.toString().match("[0-9]{9}[X0-9]{1}")) {
        for (let i = 0; i < isbn.length; i++) {
            if (isbn[i] === 'X') {
                isbn[i] = 10;
            }
            sum += parseInt(isbn[i]) * (i + 1);
        }
        if (sum % 11 === 0) {
            return true;
        }

    }
    return false;
}
console.log(isbn10 + " --> " + isvalidISBN10(isbn));