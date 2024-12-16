import Scanner from "../scanner.js";

const tPlus = 0, tMinus = 1, tMul = 2, tDiv = 3, tEqu = 4, tEquStrict = 5;

const scan = new Scanner(
    'hola + mundo - nuevo * vida / salud == buen === provecho == diario');
scan.addOperator(tPlus, '+');
scan.addOperator(tMinus, '-');
scan.addOperator(tMul, '*');
scan.addOperator(tDiv, '/');
scan.addOperator(tEqu, '==');
scan.addOperator(tEquStrict, '===');

let token = scan.nextToken();

while (token === Scanner.ident || scan.getTokenClass() === Scanner.operator) {
    if (token === Scanner.ident) console.log('ident');
    if (scan.getTokenClass() === Scanner.operator) console.log('operator');
    console.log('\t', scan.getLexeme(), '(', token, ')');

    token = scan.nextToken();
}