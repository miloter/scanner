import { readFile } from 'node:fs/promises';
import Scanner from "../scanner.js";

const tStart = Date.now();
const text = await readFile('tests/blanks.txt', { encoding: 'utf-8' });
const sc = new Scanner(text);

sc.setIgnoreSpacesInLine(false);
sc.setIgnoreEndOfLines(false);
// [ ][ ][ ]\t[ ]\r\n
// \t[ ]
let token = sc.nextToken();
let count = 0;
while (token !== Scanner.eof) {			
    if (token === Scanner.space) {				
        console.log(sc.tokenLength() + "|" + sc.getLexeme() + "|");
    } else if (token === Scanner.eol) {				
        console.log('');			
    } else {
        console.log(sc.getLexeme());
    }
    token = sc.nextToken();			
    count++;
}
console.log('');
console.log(count);
console.log((Date.now() - tStart) + "ms");