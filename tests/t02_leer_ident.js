import Scanner from "../scanner.js";

const scan = new Scanner('hola mundo\n nuevo \r\n que nos \t traes');

let token = scan.nextToken();

while (token === Scanner.ident) {
    console.log(scan.getLexeme());
    token = scan.nextToken();
}