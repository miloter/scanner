import { readFile } from 'node:fs/promises';
import Scanner from "../scanner.js";

const tStart = Date.now();
const text = await readFile('tests/comments.txt', { encoding: 'utf-8' });
const sc = new Scanner(text);

sc.setIgnoreComments(false);
sc.setOperatorCommentEol('//');
sc.setOperatorCommentMultilineBegin('/*');
sc.setOperatorCommentMultilineEnd('*/');

let token = sc.nextToken();
let count = 0;
while (token !== Scanner.eof) {			
    if (token === Scanner.comment) {				
        console.log(sc.getLexeme());    
    }
    token = sc.nextToken();			
    count++;
}
console.log('');
console.log(count);
console.log((Date.now() - tStart) + "ms");