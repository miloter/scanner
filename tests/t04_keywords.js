import Scanner from "../scanner.js";

const tIf = 0, tThen = 1, tAs = 2, tSwitch = 3;
const scan = new Scanner('hola if mundo\n then nuevo \r\n que as nos switch');

scan.addKeyword(tIf, 'if');
scan.addKeyword(tThen, 'then');
scan.addKeyword(tAs, 'as');
scan.addKeyword(tSwitch, 'switch');
let token = scan.nextToken();

while (token !== Scanner.eof) {
    console.log(scan.getLexeme(), '(', token, ')');
    token = scan.nextToken();
}