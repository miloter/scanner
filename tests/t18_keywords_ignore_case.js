import Scanner from "../scanner.js";

const tStart = Date.now();
const tIf = 0, tThen = 1;
const scan = new Scanner(
    'hola if mundo then nuevo, if que then nos If hace Then caso', false);

scan.addKeyword(tIf, 'if');
scan.addKeyword(tThen, 'then');

let token = scan.nextToken();
let count = 0;
while (token !== Scanner.eof) {
    if (scan.getTokenClass() === Scanner.keyword) {
        console.log(scan.getLexeme());
    }
    token = scan.nextToken();
    count++;
}
console.log(count);
console.log((Date.now() - tStart) + "ms");