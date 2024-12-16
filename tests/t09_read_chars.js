import { readFile } from 'node:fs/promises';
import Scanner from "../scanner.js";

const tStart = Date.now();
const text = await readFile('tests/chars.txt', { encoding: 'utf-8' });
const sc = new Scanner(text);

sc.setOperatorChar("'");
let token = sc.nextToken();
let count = 0;
while (token !== Scanner.eof) {			
    if (token === Scanner.char) {
        console.log(sc.getLexeme());
        console.log(sc.getLexChar());
    }
    token = sc.nextToken();			
    count++;
}
console.log(count);
console.log((Date.now() - tStart) + "ms");