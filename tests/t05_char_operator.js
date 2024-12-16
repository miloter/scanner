import Scanner from "../scanner.js";

const scan = new Scanner(`
    hola 'm' 'u' 'n' 'd' 'o' nuevo
`);
scan.setOperatorChar("'");

scan.setop
let token = scan.nextToken();

while (token !== Scanner.eof) {
    console.log(scan.getLexeme(), token);
    token = scan.nextToken();
}