import { readFile } from 'node:fs/promises';
import Scanner from "../scanner.js";

const tStart = Date.now();
const text = await readFile('tests/strings.txt', { encoding: 'utf-8' });
const sc = new Scanner(text);

sc.setOperatorString('"');
sc.setCsvMode(true);
let token = sc.nextToken();
let count = 0;
while (token !== Scanner.eof) {			    
    if (token === Scanner.string) {
        console.log(sc.getLexeme());
        console.log('\t', sc.getProcessedString());
    }
    token = sc.nextToken();			
    count++;
}
console.log(count);
console.log((Date.now() - tStart) + "ms");