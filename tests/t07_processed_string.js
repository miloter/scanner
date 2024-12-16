import Scanner from "../scanner.js";

const scan = new Scanner(`
    "ho\\x41la"
    "mun\\tdo"
    nuevo
    y
    "parad\\u20acisiaco"
`);
scan.setOperatorString('"');

let token = scan.nextToken();

while (token !== Scanner.eof) {
    console.log(scan.getLexeme(), token);
    if (scan.getTokenClass() === Scanner.string) {
        console.log('\t', scan.getProcessedString());
    }
    token = scan.nextToken();
}