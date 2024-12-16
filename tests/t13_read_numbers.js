import { readFile } from 'node:fs/promises';
import Scanner from "../scanner.js";

const tStart = Date.now();
const text = await readFile('tests/numbers.txt', { encoding: 'utf-8' });
const sc = new Scanner(text);

let token = sc.nextToken();
let count = 0;
while (token !== Scanner.eof) {			    
    console.log(sc.getLexeme());
    console.log('\t', sc.getNum());
    console.log('\t', sc.getMant());
    token = sc.nextToken();			
    count++;
}
console.log(count);
console.log((Date.now() - tStart) + "ms");