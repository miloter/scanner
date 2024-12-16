import { readFile } from 'node:fs/promises';
import Scanner from "../scanner.js";

const tStart = Date.now();
const text = await readFile('tests/operators.txt', { encoding: 'utf-8' });
const sc = new Scanner(text);

/*
 * +: 0, -: 1, *: 2, /: 3, %: 4, >: 5, >=: 6, !=: 7, ===: 8, !==: 9
 */
sc.addOperator(0, '+');
sc.addOperator(1, '-');
sc.addOperator(2, '*');
sc.addOperator(3, '/');
sc.addOperator(4, '%');
sc.addOperator(5, '>');
sc.addOperator(6, '>=');
sc.addOperator(7, '!=');
sc.addOperator(8, '===');
sc.addOperator(9, '!==');
let token = sc.nextToken();
let count = 0;
while (token !== Scanner.eof) {
    if (sc.getTokenClass() === Scanner.operator) {
        console.log(sc.getLexeme());
    }
    token = sc.nextToken();
    count++;
}
console.log(count);
console.log((Date.now() - tStart) + "ms");