# Lexical analyzer for texts in memory.

Implementation of a class whose main function is to
serve as a lexical analyzer or scanner.
The classes of lexical components that it can recognize are:
Blanks (space, horizontal and vertical tab, form feed).
    Comments.
    Keywords.
    Identifiers.
    Numeric constants.
    Character constants.
    String constants.
    Operators.
    End of line (carriage return and/or new line).
    End of file.
    Unknown character.
In case of ambiguity, priority is established
by the order given above from top to bottom.

## Note:
scanner is an ESM module so you will need to add to your package.json: "type": "module"

## Installation
```bash/powershell
npm install @miloter/scanner
```

## Usage
```js
import Scanner from '@miloter/scanner';

const scan = new Scanner('hello world\n new \r\n what do you \t bring us');

let token = scan.nextToken();

while (token === Scanner.ident) {
    console.log(scan.getLexeme());
    token = scan.nextToken();
}
```

## Examples

### Creating instances
```js
import Scanner from '@miloter/scanner';

const scan1 = new Scanner('hola mundo', true, true);
const scan2 = new Scanner('hola mundo', true);
const scan3 = new Scanner('hola mundo');
```

### Reading identifiers
```js
import Scanner from '@miloter/scanner';

const scan = new Scanner('hola mundo\n nuevo \r\n que nos \t traes');

let token = scan.nextToken();

while (token === Scanner.ident) {
    console.log(scan.getLexeme());
    token = scan.nextToken();
}
```
