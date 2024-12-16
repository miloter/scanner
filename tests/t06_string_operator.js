import Scanner from "../scanner.js";

const scan = new Scanner(`
    hola
    "mundo"
    nuevo
    y
    "paradisiaco"
`);
scan.setOperatorString('"');

let token = scan.nextToken();

while (token !== Scanner.eof) {
    console.log(scan.getLexeme(), token);
    token = scan.nextToken();
}