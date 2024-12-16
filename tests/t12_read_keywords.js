import { readFile } from 'node:fs/promises';
import Scanner from "../scanner.js";

const tStart = Date.now();
const text = await readFile('tests/keywords.txt', { encoding: 'utf-8' });
const sc = new Scanner(text);

sc.addKeyword(0, 'k01');
sc.addKeyword(1, 'k02');
let token = sc.nextToken();
let count = 0;
while (token !== Scanner.eof) {			    
    if (sc.getTokenClass() === Scanner.keyword) {
        console.log('Keyword:', sc.getLexeme());
    } else {
        console.log('Otro:', sc.getLexeme());
    }
    token = sc.nextToken();			
    count++;
}
console.log(count);
console.log((Date.now() - tStart) + "ms");