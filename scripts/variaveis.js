//Vou escrever e explicar sobre variáveis.
//Espero que ajude quem está começando. é super importante entender bem o básico para prosseguir em assuntos mais complexos.
//Recomendo testar os códigos abaixo e fazer umas mudanças pra ver como ocorre os processamentos.

/* Existem esses TIPOS de variáveis:

Tipos Primitivos:

String
Number
Boolean
Null
Undefined
Symbol

Outros tipos:

Object
Function
Array
*/

//String:
var name = "Larissa"; //"Larissa" é uma string e você pode identificar pelas aspas. Basicamente envolve textos.
//Funções importantes com strings:

//Retorna o tamanho da string:
const animal = "Elephant".length;
console.log("Quantidade de letras: ${animal}");

//Retorna o array quebrando a string por um delimitador:
const house = "door".split("x");
console.log("\nArray com as posições separadas pelo delimitador:", house);

//Busca por uma valor e substitui por outro:
const search = "find".replace("find", "dnif");
console.log("\nSubstituição de valor:", search);

//Retorna a "fatia" de um valor:
const cake = "sweet".slice(-1);
console.log("\nÚltima letra de uma string:", cake);

const fruit = "apple".slice(0, -1);
console.log("\nValor da String da primeira letra menos a última:", fruit);

const body = "ear".slice(1);
console.log("Valor da string da segunda letra até a última:", body);

//Retorna N caracteres a partir de uma posição:
const position = "first".substr(0, 2);
console.log("\nAs duas primeiras letras são;", first);



//Number:
var age = 13; //13 é number. Representa números.
const myNumber = 3.14238;

//Funções comuns utilizando numbers:
//Transformar number para String:
const numberAsString = myNumber.toString();
console.log("Número transformado em string:", typeof numberAsString);

//Retorna número de casas decimais:
const fixedTwoDecimals = myNumber.toFixed(2);
console.log("\nNúmero com duas casas decimais:", fixedTwoDecimals);

//Transforma uma string em float(number que permite casas decimais):
console.log("\nString parseada para float:", parseFloat("13.22"));

//Transforma uma string em int(number que não permite casas decimais):
console.log("\nString parseada para int:", parseInt("13.20"));



//Boolean: Representa True (verdadeiro) ou False (Falso). 
const isActive = true;
const isAuthenticated = false;

console.log("Tipo da variável:", typeof isActive);

//Null: Representa o null.
const nullVariable = null;
console.log(typeof nullVariable);


//Undefined: Variável existe mas não foi definida.
let undefinedVariable;
console.log("Tipo da variável:", typeof undefinedVariable);




//Symbol: Permite criar valores únicos.
const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos:
console.log("symbol1 é igual a symbol2:", symbol1 === symbol2);

//Previne conflitos entre nomes de propriedades:
const nameSymbol1 = Symbol("name");
const nameSymbol2 = Symbol("name");

const user = {
    [namesymbol1]: "Hilary",
    [nameSymbol2]: "Outro nome",
    lastName: "Shirley"
}

console.log(user);

//Symbols criam propriedades que não são enumberables:

for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log("\nValor da chave ${key}: ${user[key]}");
    }
}

console.log("Propriedades do objeto user:", Object.keys(user));
console.log("Valores da propriedades do objeto user:", Objetc.values(user));

//Exibir symbols de um objeto:
console.log("Symbols registrados no objeto user:", Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto:
console.log("Todas as propriedades do objeto user:", Reflect.ownKeys(user));

//Criam um enum:
const directions = {
    UP : Symbol("UP"),
    DOWN : Symbol("DOWN"),
    LEFT : Symbol("LEFT"),
    RIGHT : Symbol("RIGHT")
};



//Object: Objeto.

let user = {
    name: "Hilary"
};
console.log(user);

//Alterando a propriedade de um objeto:
user.name = "Outro nome 1";
console.log(user);
user["name"] = "Outro nome 2";
console.log(user);

const prop = "name";
user[prop] = "Outro nome 3";
console.log(user);

//Criando uma propriedade:
user.lastName = "Shirley Carneiro dos Santos";

//Deletando uma propriedade:
delete user.lastName;


//Mais sobre OBJETOS:

const theUser = {
    firstName: "Hilary",
    lastName: "Shirley"
}

//Recupera as chaves do objeto:
console.log("Propriedades do objeto theUser:", Object.keys(theUser));

//Recupera os valores das chaves do objeto:
console.log("\nValores das propriedades do objeto user:", Object.values(theUser));

//Retorna um array de arrays contendo [nome_prop, valor_prop]:
console.log("\nLista de propriedades e valores:", Object.entries(theUser));

//Mergear propriedades de objetos:
Object.assign(theUser, {fullName: "Hilary Shirley"});

console.log("\nAdiciona a propriedade fullName no objeto theUser:", theUser);
console.log("\nRetorna um novo objeto mergeando dois ou mais objetos", Object.assign({}, theUser, {age: 17}));

//Previne todas as alterações em um objeto:
const newObj = { foo: bar };
Object.freeze(newObj);

newObj.foo = "changes";
delete newObj.foo;
newObj.bar = "foo";
console.log("\nVariável newObj após as alterações:", newObj);

//Permite apenas a alteração de propriedades existentes em um objeto:
const person = {name: "Hilary"};
Object.seal(person);

person.name = "Hilary Shirley";
delete person.name;
person.age = 17;

console.log("\nVariável person após as alterações:", person);

//Function: Também é um objeto. Mas um objeto que permite ser chamado.

//Array: Lista de valores, com índices e tipos. Também é um objeto.