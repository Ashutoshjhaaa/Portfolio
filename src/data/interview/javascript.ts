import { Question } from './types';

export const JS_QUESTIONS: Question[] = [
  {
    "id": "js-01",
    "number": "01",
    "question": "What is JavaScript and what is it used for?",
    "difficulty": "easy",
    "section": "JavaScript Basics",
    "answer": {
      "simple": "JavaScript is a programming language that makes web pages interactive and dynamic. It runs in the browser and controls behavior — like showing a popup, validating a form, fetching data, or animating elements. It also runs on servers via Node.js.",
      "exampleLabel": "🧩 HTML vs CSS vs JS",
      "example": "HTML = structure (the skeleton). CSS = style (the appearance). JavaScript = behavior (the brain). Without JS, websites are just static pages. With JS, they become apps that react to users.",
      "code": "// JavaScript runs in the browser and can:\ndocument.getElementById('btn').addEventListener('click', () => {\n  alert('You clicked the button!');\n});\n\n// Or on the server with Node.js:\nconst http = require('http');\nhttp.createServer((req, res) => res.end('Hello World')).listen(3000);"
    }
  },
  {
    "id": "js-02",
    "number": "02",
    "question": "What is the difference between var, let, and const?",
    "difficulty": "easy",
    "section": "JavaScript Basics",
    "answer": {
      "simple": "<code>var</code> is old — function-scoped, hoisted, can be re-declared (avoid it). <code>let</code> is block-scoped, can be reassigned. <code>const</code> is block-scoped, cannot be reassigned. Use <code>const</code> by default, <code>let</code> when you need to reassign, never <code>var</code>.",
      "code": "// var — function-scoped, hoisted, old (avoid)\nvar x = 1;\nvar x = 2;     // ✔ can re-declare — confusing!\nif (true) { var y = 5; }\nconsole.log(y); // 5 — leaks out of the if block!\n\n// let — block-scoped, can reassign\nlet count = 0;\ncount = 1;     // ✔ reassign is fine\n// let count = 2; // ✘ cannot re-declare in same scope\n\n// const — block-scoped, cannot reassign\nconst PI = 3.14;\n// PI = 3;      // ✘ TypeError — cannot reassign const\n\n// const with objects/arrays — the REFERENCE is constant, not the value\nconst arr = [1, 2, 3];\narr.push(4);   // ✔ you CAN mutate the contents\n// arr = [];   // ✘ cannot reassign the variable itself",
      "note": "Always use <code>const</code> unless you know the value will change, then use <code>let</code>. Never use <code>var</code> in modern JavaScript. This makes your code more predictable and easier to understand."
    }
  },
  {
    "id": "js-03",
    "number": "03",
    "question": "What are the JavaScript data types?",
    "difficulty": "easy",
    "section": "JavaScript Basics",
    "answer": {
      "simple": "JavaScript has 8 data types. 7 are <strong>primitive</strong> (stored by value): <code>string</code>, <code>number</code>, <code>boolean</code>, <code>undefined</code>, <code>null</code>, <code>symbol</code>, <code>bigint</code>. 1 is <strong>non-primitive</strong> (stored by reference): <code>object</code> (includes arrays and functions).",
      "code": "// Primitives — stored by value\nlet str  = \"hello\";          // string\nlet num  = 42;               // number (integers + decimals)\nlet bool = true;             // boolean\nlet undef;                   // undefined (declared but no value)\nlet empty = null;            // null (intentionally empty)\nlet sym  = Symbol('id');     // symbol (unique identifier)\nlet big  = 9007199254740991n;// bigint (very large integers)\n\n// Non-primitive — stored by reference\nlet obj  = { name: \"Alice\" };// object\nlet arr  = [1, 2, 3];        // array (type of object)\nlet fn   = () => {};         // function (type of object)\n\n// Check type:\ntypeof \"hello\"   // \"string\"\ntypeof 42        // \"number\"\ntypeof true      // \"boolean\"\ntypeof undefined // \"undefined\"\ntypeof null      // \"object\" ← famous JS bug!\ntypeof []        // \"object\"\ntypeof {}        // \"object\"\ntypeof function(){}  // \"function\""
    }
  },
  {
    "id": "js-04",
    "number": "04",
    "question": "What is the difference between == and ===?",
    "difficulty": "easy",
    "section": "JavaScript Basics",
    "answer": {
      "simple": "<code>==</code> is loose equality — it converts types before comparing (type coercion). <code>===</code> is strict equality — it checks both value AND type, no conversion. Always use <code>===</code> in real code to avoid confusing bugs.",
      "code": "// == (loose) — converts types first, then compares\n0 == false      // true  (false → 0)\n\"\" == false     // true  (\"\" → 0, false → 0)\nnull == undefined // true  (special rule)\n1 == \"1\"        // true  (\"1\" → 1)\n[] == false     // true  (complex conversion)\n\n// === (strict) — no conversion, must match type AND value\n0 === false     // false (different types: number vs boolean)\n\"\" === false    // false (different types)\nnull === undefined // false (different types)\n1 === \"1\"       // false (different types: number vs string)\n1 === 1         // true  ✔\n\n// Real-world consequence:\nif (userInput == 0) {  // ✘ triggers for 0, \"\", false, null, []\nif (userInput === 0) { // ✔ only triggers for the number 0"
    }
  },
  {
    "id": "js-05",
    "number": "05",
    "question": "What is type coercion in JavaScript?",
    "difficulty": "easy",
    "section": "JavaScript Basics",
    "answer": {
      "simple": "Type coercion is when JavaScript automatically converts one data type to another. It happens with <code>==</code>, arithmetic operators, and string concatenation. It often produces surprising results — understanding it prevents bugs.",
      "code": "// String + Number = String concatenation (+ favors strings)\n\"5\" + 3       // \"53\"   (3 is converted to string)\n\"5\" - 3       // 2      (- forces number conversion)\n\"5\" * \"2\"     // 10     (both converted to numbers)\n\n// Truthy / Falsy coercion (in if conditions)\n// Falsy values (convert to false):\nif (0)         { }  // false\nif (\"\")        { }  // false\nif (null)      { }  // false\nif (undefined) { }  // false\nif (NaN)       { }  // false\nif (false)     { }  // false\n// Everything else is truthy:\nif ([])        { }  // true! (empty array is truthy)\nif ({})        { }  // true! (empty object is truthy)\nif (\"0\")       { }  // true! (non-empty string is truthy)\n\n// Explicit conversion (safe)\nNumber(\"42\")   // 42\nString(42)     // \"42\"\nBoolean(1)     // true"
    }
  },
  {
    "id": "js-06",
    "number": "06",
    "question": "What is null vs undefined in JavaScript?",
    "difficulty": "easy",
    "section": "JavaScript Basics",
    "answer": {
      "simple": "<code>undefined</code> means a variable has been declared but no value was assigned — JS assigned it automatically. <code>null</code> means you, the developer, intentionally set something to \"empty\" or \"nothing\". Both represent absence of value but for different reasons.",
      "exampleLabel": "🧩 Analogy",
      "example": "Imagine a parking spot. <code>undefined</code> = the spot exists but nobody told you if there's a car (you didn't check). <code>null</code> = you checked and deliberately confirmed the spot is empty.",
      "code": "let name;         // undefined — declared but not assigned\nconsole.log(name); // undefined\n\nlet user = null;  // null — intentionally set to \"no user\"\n\n// Function with no return value:\nfunction doSomething() { /* no return */ }\nconst result = doSomething(); // result is undefined\n\n// Common pattern — check for both with ==\nif (value == null) { }   // catches BOTH null and undefined\nif (value === null) { }  // catches ONLY null\nif (value === undefined) { } // catches ONLY undefined\n\n// Nullish coalescing ?? — use when you want a fallback for null/undefined:\nconst name = user?.name ?? \"Guest\";\n// Only triggers for null/undefined, NOT for 0 or \"\""
    }
  },
  {
    "id": "js-07",
    "number": "07",
    "question": "What is NaN and how do you check for it?",
    "difficulty": "easy",
    "section": "JavaScript Basics",
    "answer": {
      "simple": "<code>NaN</code> stands for \"Not a Number\" — it's the result of an invalid math operation. The weirdest thing about NaN: it's the only value in JavaScript that is NOT equal to itself. Use <code>Number.isNaN()</code> to check for it.",
      "code": "// NaN appears when math fails\nparseInt(\"hello\")  // NaN\nundefined * 2      // NaN\n0 / 0              // NaN\nMath.sqrt(-1)      // NaN\n\n// The weird part:\nNaN === NaN        // false (!!) — NaN is not equal to itself\nNaN == NaN         // also false\n\n// Wrong way to check:\nif (value === NaN) { } // ✘ never works!\n\n// Right ways:\nNumber.isNaN(NaN)      // ✔ true (only for actual NaN)\nNumber.isNaN(\"hello\")  // false (string, not NaN)\n\nisNaN(\"hello\")         // true — old function, converts first (confusing)\nisNaN(NaN)             // true\n\n// Or check by exploiting the self-inequality:\nfunction isItNaN(val) { return val !== val; }  // clever but use isNaN"
    }
  },
  {
    "id": "js-08",
    "number": "08",
    "question": "What is hoisting in JavaScript?",
    "difficulty": "medium",
    "section": "JavaScript Basics",
    "answer": {
      "simple": "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code runs. <code>var</code> declarations are hoisted (but initialized as <code>undefined</code>). Function declarations are fully hoisted. <code>let</code> and <code>const</code> are hoisted but NOT initialized (Temporal Dead Zone).",
      "exampleLabel": "💡 Temporal Dead Zone",
      "example": "The TDZ is the period between when a let/const variable is hoisted and when it's initialized. During this time, accessing the variable throws a ReferenceError. This is actually a feature — it prevents using variables before they're defined.",
      "code": "// Function declarations are FULLY hoisted\nsayHello(); // ✔ works! \"Hello\"\nfunction sayHello() { console.log(\"Hello\"); }\n\n// var is hoisted as undefined\nconsole.log(x); // undefined (not error — hoisted)\nvar x = 5;\nconsole.log(x); // 5\n\n// let/const — hoisted but in \"Temporal Dead Zone\"\nconsole.log(y); // ✘ ReferenceError — TDZ!\nlet y = 10;\n\n// Function EXPRESSIONS are not hoisted\ngreet(); // ✘ TypeError — greet is undefined (var) or ReferenceError (let)\nvar greet = function() { console.log(\"Hi\"); };"
    }
  },
  {
    "id": "js-09",
    "number": "09",
    "question": "What are the different ways to declare a function?",
    "difficulty": "easy",
    "section": "Functions & Scope",
    "answer": {
      "simple": "There are 4 main ways: Function Declaration (hoisted), Function Expression (not hoisted), Arrow Function (no own <code>this</code>), and Method shorthand (in objects). Each has different behavior with hoisting and <code>this</code>.",
      "code": "// 1. Function Declaration — fully hoisted\nfunction greet(name) { return `Hello, ${name}!`; }\n\n// 2. Function Expression — not hoisted\nconst greet = function(name) { return `Hello, ${name}!`; };\n\n// 3. Arrow Function — concise, no own 'this'\nconst greet = (name) => `Hello, ${name}!`;\nconst greet = name  =>  `Hello, ${name}!`; // single param: no parens\nconst add   = (a, b) => a + b;             // single expr: no braces\nconst square = n => ({ value: n * n });    // return obj: wrap in ()\n\n// 4. Method shorthand (inside objects)\nconst obj = {\n  greet(name) { return `Hello, ${name}!`; }\n};\n\n// Named function expression (useful for recursion + debugging)\nconst factorial = function fact(n) {\n  return n <= 1 ? 1 : n * fact(n - 1); // can call itself by name\n};"
    }
  },
  {
    "id": "js-10",
    "number": "10",
    "question": "What is scope in JavaScript?",
    "difficulty": "medium",
    "section": "Functions & Scope",
    "answer": {
      "simple": "Scope determines where a variable is accessible. JavaScript has 3 types: <strong>Global</strong> (accessible everywhere), <strong>Function/Local</strong> (inside a function only), and <strong>Block</strong> (inside {} with let/const). Inner scopes can access outer, but not vice versa.",
      "code": "// Global scope — accessible everywhere\nconst globalVar = \"I'm global\";\n\nfunction outer() {\n  // Function scope — accessible inside outer()\n  const outerVar = \"I'm in outer\";\n\n  function inner() {\n    // Function scope — accessible inside inner()\n    const innerVar = \"I'm in inner\";\n    console.log(globalVar); // ✔ can access global\n    console.log(outerVar);  // ✔ can access outer (closure!)\n    console.log(innerVar);  // ✔ can access own\n  }\n\n  console.log(globalVar); // ✔\n  // console.log(innerVar); // ✘ cannot access inner's vars\n}\n\n// Block scope (let/const)\nif (true) {\n  const blockVar = \"block scoped\";\n  var funcVar = \"function scoped\";\n}\n// console.log(blockVar); // ✘ ReferenceError\nconsole.log(funcVar);     // ✔ var leaks out of blocks"
    }
  },
  {
    "id": "js-11",
    "number": "11",
    "question": "What is a closure and why is it important?",
    "difficulty": "hard",
    "section": "Functions & Scope",
    "answer": {
      "simple": "A closure is when an inner function remembers and can access variables from its outer function even after the outer function has finished running. The function \"closes over\" those variables — they're captured in memory.",
      "exampleLabel": "🧩 Analogy",
      "example": "A closure is like a backpack. When an inner function is created, it packs up (closes over) the variables it needs from its surroundings. Even when the function travels to a different place and the outer scope is gone, it still has its backpack with all those variables.",
      "code": "// Classic closure example\nfunction makeCounter() {\n  let count = 0;           // outer variable\n\n  return function() {      // inner function\n    count++;               // accesses outer variable\n    return count;\n  };\n}\n\nconst counter = makeCounter(); // outer function has returned!\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\nconsole.log(counter()); // 3\n// count is still alive because the inner function holds a reference to it\n\n// Practical use — private data (data hiding)\nfunction createUser(name) {\n  let role = 'user';  // private — can't access directly\n\n  return {\n    getName: () => name,\n    getRole: () => role,\n    promote: () => { role = 'admin'; }\n  };\n}\nconst user = createUser('Alice');\nuser.promote();\nconsole.log(user.getRole()); // 'admin'\n// user.role === undefined  — truly private!"
    }
  },
  {
    "id": "js-12",
    "number": "12",
    "question": "What is the classic closure bug in loops and how do you fix it?",
    "difficulty": "hard",
    "section": "Functions & Scope",
    "answer": {
      "simple": "When using <code>var</code> in a loop with async callbacks, all callbacks share the same variable — by the time they run, the loop has finished and the variable holds the final value. Fix by using <code>let</code> (block-scoped) or an IIFE.",
      "code": "// ✘ The classic bug with var\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}\n// Prints: 3 3 3 — all share the same 'i', which is 3 after loop\n\n// ✔ Fix 1: Use let (creates a new 'i' for each iteration)\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}\n// Prints: 0 1 2 ✓\n\n// ✔ Fix 2: IIFE captures the current value\nfor (var i = 0; i < 3; i++) {\n  ((j) => {  // j is a new variable for each iteration\n    setTimeout(() => console.log(j), 100);\n  })(i);     // immediately invoked with current i\n}\n// Prints: 0 1 2 ✓"
    }
  },
  {
    "id": "js-13",
    "number": "13",
    "question": "What is an IIFE (Immediately Invoked Function Expression)?",
    "difficulty": "medium",
    "section": "Functions & Scope",
    "answer": {
      "simple": "An IIFE is a function that is defined and called at the same time. It creates a private scope — variables inside don't pollute the global scope. Before ES6 modules, this was the main pattern for encapsulation.",
      "code": "// IIFE syntax — wrap function in (), then call it with ()\n(function() {\n  const privateVar = \"nobody can access me from outside\";\n  console.log(\"IIFE ran!\");\n})();\n\n// Arrow function IIFE\n(() => {\n  console.log(\"Arrow IIFE\");\n})();\n\n// IIFE with parameters\n(function(name) {\n  console.log(`Hello, ${name}!`);\n})(\"Alice\");\n\n// Practical use: avoid polluting globals in scripts\n(function() {\n  const config = { apiKey: \"secret\" };  // stays private\n  // ... all your code here\n})();\n\n// Modern alternative: just use a block with let/const\n{\n  const privateVar = \"block scoped\";\n}\n// or ES6 modules — each file has its own scope automatically"
    }
  },
  {
    "id": "js-14",
    "number": "14",
    "question": "What is the difference between arguments object and rest parameters?",
    "difficulty": "medium",
    "section": "Functions & Scope",
    "answer": {
      "simple": "The <code>arguments</code> object is an old array-like object available in regular functions that contains all passed arguments. <code>...rest</code> parameters are modern, real arrays that collect remaining arguments. Always prefer rest parameters.",
      "code": "// Old way — arguments object\nfunction sum() {\n  let total = 0;\n  for (let i = 0; i < arguments.length; i++) {\n    total += arguments[i];\n  }\n  return total;\n}\n// arguments is NOT available in arrow functions!\n// arguments is array-LIKE but not a real array (no .map, .filter, etc.)\n\n// Modern way — rest parameters\nfunction sum(...numbers) {  // real array!\n  return numbers.reduce((total, n) => total + n, 0);\n}\nsum(1, 2, 3, 4, 5); // 15\n\n// Rest collects the REMAINING arguments\nfunction first(a, b, ...rest) {\n  console.log(a);    // 1\n  console.log(b);    // 2\n  console.log(rest); // [3, 4, 5]\n}\nfirst(1, 2, 3, 4, 5);"
    }
  },
  {
    "id": "js-15",
    "number": "15",
    "question": "What are default parameters in functions?",
    "difficulty": "easy",
    "section": "Functions & Scope",
    "answer": {
      "simple": "Default parameters let you specify a fallback value for a function argument if the caller doesn't provide one (or passes <code>undefined</code>). Introduced in ES6 — much cleaner than the old <code>param = param || default</code> pattern.",
      "code": "// ES6 default parameters\nfunction greet(name = \"World\", greeting = \"Hello\") {\n  return `${greeting}, ${name}!`;\n}\ngreet();              // \"Hello, World!\"\ngreet(\"Alice\");       // \"Hello, Alice!\"\ngreet(\"Bob\", \"Hi\");  // \"Hi, Bob!\"\ngreet(undefined, \"Hey\"); // \"Hey, World!\" — undefined triggers default\n\n// Old way (error-prone)\nfunction greet(name, greeting) {\n  name = name || \"World\";     // ✘ fails if name is 0 or \"\"\n  greeting = greeting !== undefined ? greeting : \"Hello\"; // verbose\n}\n\n// Default can be an expression or function call\nfunction createId(id = Math.random().toString(36).slice(2)) {\n  return id;\n}\n\n// Default from previous parameter\nfunction makeArray(value, length = value.length) {\n  return Array(length).fill(value);\n}"
    }
  },
  {
    "id": "js-16",
    "number": "16",
    "question": "What is the 'this' keyword and how does it work?",
    "difficulty": "hard",
    "section": "Functions & Scope",
    "answer": {
      "simple": "<code>this</code> refers to the object that is executing the current function. Its value depends on HOW the function is called, not where it's written. This is one of the most confusing parts of JavaScript.",
      "code": "// 1. Method call — this = the object before the dot\nconst user = {\n  name: \"Alice\",\n  greet() { console.log(this.name); }  // this = user\n};\nuser.greet(); // \"Alice\"\n\n// 2. Regular function — this = global (window) or undefined (strict mode)\nfunction showThis() { console.log(this); }\nshowThis(); // window (or undefined in strict mode)\n\n// 3. Arrow function — no own 'this', inherits from outer scope\nconst obj = {\n  name: \"Alice\",\n  greet: () => { console.log(this.name); } // this = outer (window!)\n};\nobj.greet(); // undefined — arrow doesn't have own 'this'!\n\n// 4. new — this = newly created object\nfunction Person(name) { this.name = name; }\nconst p = new Person(\"Bob\"); // this.name = \"Bob\"\n\n// 5. call/apply/bind — explicitly set this\nfunction greet() { return `Hi ${this.name}`; }\ngreet.call({ name: \"Carol\" });  // \"Hi Carol\"\ngreet.apply({ name: \"Dave\" }); // \"Hi Dave\"\nconst boundGreet = greet.bind({ name: \"Eve\" });\nboundGreet(); // \"Hi Eve\""
    }
  },
  {
    "id": "js-17",
    "number": "17",
    "question": "What is the difference between call(), apply(), and bind()?",
    "difficulty": "hard",
    "section": "Functions & Scope",
    "answer": {
      "simple": "All three let you set <code>this</code> explicitly. <code>call()</code> invokes immediately with arguments listed. <code>apply()</code> invokes immediately with arguments as an array. <code>bind()</code> returns a new function with <code>this</code> permanently fixed — doesn't invoke immediately.",
      "code": "function introduce(greeting, punctuation) {\n  return `${greeting}, I'm ${this.name}${punctuation}`;\n}\nconst person = { name: \"Alice\" };\n\n// call() — args listed individually\nintroduce.call(person, \"Hello\", \"!\");   // \"Hello, I'm Alice!\"\n\n// apply() — args as array (useful when you have an array already)\nintroduce.apply(person, [\"Hi\", \"?\"]);   // \"Hi, I'm Alice?\"\n\n// bind() — returns NEW function, doesn't call it yet\nconst aliceIntro = introduce.bind(person, \"Hey\");\naliceIntro(\"...\");  // \"Hey, I'm Alice...\"\naliceIntro(\"!!!\");  // \"Hey, I'm Alice!!!\"\n\n// Practical use of bind:\nclass Timer {\n  constructor() { this.count = 0; }\n  start() {\n    // Without bind, 'this' inside callback = window\n    setInterval(this.tick.bind(this), 1000);\n  }\n  tick() { this.count++; console.log(this.count); }\n}"
    }
  },
  {
    "id": "js-18",
    "number": "18",
    "question": "What are the most important array methods in JavaScript?",
    "difficulty": "easy",
    "section": "Arrays & Objects",
    "answer": {
      "simple": "The most important array methods are: <code>map()</code> (transform each item), <code>filter()</code> (keep some items), <code>reduce()</code> (combine all into one value), <code>forEach()</code> (loop), <code>find()</code> (get first match), <code>some()</code>/<code>every()</code> (test conditions).",
      "code": "const nums = [1, 2, 3, 4, 5];\n\n// map — transform each element, returns NEW array\nnums.map(n => n * 2);          // [2, 4, 6, 8, 10]\n\n// filter — keep elements that pass the test\nnums.filter(n => n % 2 === 0); // [2, 4]  (evens only)\n\n// reduce — combine all into one value\nnums.reduce((sum, n) => sum + n, 0); // 15 (total sum)\n\n// find — first element that matches\nnums.find(n => n > 3);         // 4 (first match)\nnums.findIndex(n => n > 3);    // 3 (index of first match)\n\n// some — true if ANY element passes\nnums.some(n => n > 4);         // true (5 > 4)\n\n// every — true if ALL elements pass\nnums.every(n => n > 0);        // true (all positive)\n\n// includes — true if value exists\nnums.includes(3);              // true\n\n// flat + flatMap\n[[1,2],[3,4]].flat();           // [1,2,3,4]\nnums.flatMap(n => [n, n * 2]); // [1,2, 2,4, 3,6, ...]"
    }
  },
  {
    "id": "js-19",
    "number": "19",
    "question": "What is the difference between map() and forEach()?",
    "difficulty": "medium",
    "section": "Arrays & Objects",
    "answer": {
      "simple": "<code>map()</code> returns a NEW array with transformed values — use it when you need the results. <code>forEach()</code> returns <code>undefined</code> — use it only for side effects (logging, DOM updates) when you don't need the results.",
      "code": "const numbers = [1, 2, 3];\n\n// map — creates a new array, use the result\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);  // [2, 4, 6]\nconsole.log(numbers);  // [1, 2, 3] — original unchanged\n\n// forEach — returns undefined, use for side effects only\nconst result = numbers.forEach(n => n * 2); // returns undefined!\nconsole.log(result); // undefined\n\nnumbers.forEach(n => console.log(n));  // just logs: 1, 2, 3\n\n// Rule: need the transformed array? → map\n//       just want to do something with each element? → forEach\n\n// map is chainable, forEach is not:\nconst result2 = numbers\n  .map(n => n * 2)      // [2, 4, 6]\n  .filter(n => n > 3);  // [4, 6]\n// numbers.forEach(...).filter(...) — ✘ cannot chain"
    }
  },
  {
    "id": "js-20",
    "number": "20",
    "question": "What is the spread operator and how do you use it?",
    "difficulty": "medium",
    "section": "Arrays & Objects",
    "answer": {
      "simple": "The spread operator <code>...</code> expands an array or object into individual elements. It's perfect for copying arrays/objects, merging them, or passing array items as function arguments.",
      "code": "// Spread with arrays\nconst a = [1, 2, 3];\nconst b = [4, 5, 6];\n\nconst combined = [...a, ...b];  // [1, 2, 3, 4, 5, 6]\nconst copy = [...a];            // [1, 2, 3] — shallow copy\nconst withExtra = [...a, 7, 8]; // [1, 2, 3, 7, 8]\n\n// Spread with objects\nconst user = { name: \"Alice\", age: 25 };\nconst updatedUser = { ...user, age: 26, role: \"admin\" };\n// { name: \"Alice\", age: 26, role: \"admin\" }\n\n// Spread in function calls\nfunction sum(a, b, c) { return a + b + c; }\nconst nums = [1, 2, 3];\nsum(...nums);  // same as sum(1, 2, 3)\n\n// Practical: add item to array without mutation\nconst addItem = (arr, item) => [...arr, item];\n// Practical: update object without mutation\nconst update = (obj, key, val) => ({ ...obj, [key]: val });"
    }
  },
  {
    "id": "js-21",
    "number": "21",
    "question": "What is destructuring in JavaScript?",
    "difficulty": "medium",
    "section": "Arrays & Objects",
    "answer": {
      "simple": "Destructuring lets you unpack values from arrays or properties from objects into distinct variables in one line. Makes code cleaner and more readable — especially with function parameters.",
      "code": "// Array destructuring\nconst [first, second, ...rest] = [1, 2, 3, 4, 5];\n// first = 1, second = 2, rest = [3, 4, 5]\n\n// Skip elements\nconst [,, third] = [10, 20, 30];  // third = 30\n\n// Default values\nconst [a = 0, b = 0] = [5];  // a = 5, b = 0\n\n// Object destructuring\nconst user = { name: \"Alice\", age: 25, role: \"admin\" };\nconst { name, age } = user;\n// name = \"Alice\", age = 25\n\n// Rename while destructuring\nconst { name: userName, role: userRole } = user;\n// userName = \"Alice\", userRole = \"admin\"\n\n// Default values in objects\nconst { name, score = 100 } = { name: \"Bob\" };\n// score = 100 (default)\n\n// In function parameters (very common in React!)\nfunction greet({ name, age = 0 }) {\n  return `${name} is ${age} years old`;\n}\ngreet(user); // \"Alice is 25 years old\""
    }
  },
  {
    "id": "js-22",
    "number": "22",
    "question": "What is shallow copy vs deep copy in JavaScript?",
    "difficulty": "medium",
    "section": "Arrays & Objects",
    "answer": {
      "simple": "A <strong>shallow copy</strong> copies the top-level properties only — nested objects/arrays still share the same reference. A <strong>deep copy</strong> recursively copies everything — fully independent. Spread and Object.assign() make shallow copies.",
      "code": "// Shallow copy — nested objects still shared\nconst original = { name: \"Alice\", address: { city: \"NYC\" } };\nconst shallow = { ...original };\n\nshallow.name = \"Bob\";              // ✔ doesn't affect original\nshallow.address.city = \"LA\";       // ✘ MUTATES original.address.city too!\n// original.address.city === \"LA\" — shared reference!\n\n// Deep copy options:\n\n// 1. JSON method (simple but has limits)\nconst deep1 = JSON.parse(JSON.stringify(original));\n// ✘ Loses: undefined, functions, Dates, RegExp, Map/Set, circular refs\n\n// 2. structuredClone (modern, best native option)\nconst deep2 = structuredClone(original);  // ✔ ES2022\n// Handles: nested objects, arrays, Dates, Map, Set, circular refs\n// ✘ Does NOT copy functions\n\n// 3. Lodash cloneDeep (handles everything)\nimport { cloneDeep } from 'lodash';\nconst deep3 = cloneDeep(original); // ✔ handles functions too"
    }
  },
  {
    "id": "js-23",
    "number": "23",
    "question": "What are the methods to iterate over objects?",
    "difficulty": "medium",
    "section": "Arrays & Objects",
    "answer": {
      "simple": "You can't use array methods on plain objects, but there are several ways to loop over them. The most useful are <code>Object.keys()</code>, <code>Object.values()</code>, and <code>Object.entries()</code> — they return arrays you can work with.",
      "code": "const user = { name: \"Alice\", age: 25, role: \"admin\" };\n\n// Object.keys() — array of property names\nObject.keys(user);    // [\"name\", \"age\", \"role\"]\nObject.keys(user).forEach(key => console.log(key, user[key]));\n\n// Object.values() — array of values\nObject.values(user);  // [\"Alice\", 25, \"admin\"]\n\n// Object.entries() — array of [key, value] pairs (most useful!)\nObject.entries(user).forEach(([key, val]) => {\n  console.log(`${key}: ${val}`);\n});\n\n// for...in loop (also works, but includes inherited props)\nfor (const key in user) {\n  if (user.hasOwnProperty(key)) {  // filter inherited properties\n    console.log(key, user[key]);\n  }\n}\n\n// Convert object to array of entries, transform, convert back\nconst upperUser = Object.fromEntries(\n  Object.entries(user).map(([k, v]) => [k, String(v).toUpperCase()])\n);"
    }
  },
  {
    "id": "js-24",
    "number": "24",
    "question": "What are template literals?",
    "difficulty": "easy",
    "section": "ES6+ Modern JavaScript",
    "answer": {
      "simple": "Template literals use backticks (`) instead of quotes and allow you to embed expressions with <code>${}</code> and write multi-line strings easily. Much cleaner than string concatenation.",
      "code": "const name = \"Alice\";\nconst age = 25;\n\n// Old way — string concatenation (messy)\nconst old = \"Hello, \" + name + \"! You are \" + age + \" years old.\";\n\n// Template literal — clean and readable\nconst modern = `Hello, ${name}! You are ${age} years old.`;\n\n// Multi-line strings\nconst html = `\n  <div class=\"card\">\n    <h2>${name}</h2>\n    <p>Age: ${age}</p>\n  </div>\n`;\n\n// Expressions inside ${}\nconst price = 9.99;\nconsole.log(`Total: $${(price * 1.1).toFixed(2)}`); // Total: $10.99"
    }
  },
  {
    "id": "js-25",
    "number": "25",
    "question": "What are optional chaining (?.) and nullish coalescing (??)?",
    "difficulty": "easy",
    "section": "ES6+ Modern JavaScript",
    "answer": {
      "simple": "<code>?.</code> (optional chaining) safely accesses nested properties — if any part is <code>null</code>/<code>undefined</code>, it returns <code>undefined</code> instead of throwing an error. <code>??</code> (nullish coalescing) provides a fallback only for <code>null</code>/<code>undefined</code>, not for <code>0</code> or <code>\"\"</code>.",
      "code": "const user = { profile: { address: { city: \"NYC\" } } };\n\n// Old way — verbose and error-prone\nconst city = user && user.profile && user.profile.address && user.profile.address.city;\n\n// Optional chaining ?. — short and safe\nconst city = user?.profile?.address?.city; // \"NYC\"\nconst zip  = user?.profile?.address?.zip;  // undefined (no error!)\n\n// Works with methods too\nconst result = user?.getPermissions?.();   // undefined if method doesn't exist\n\n// Works with arrays\nconst first = users?.[0]?.name;           // undefined if array is empty\n\n// Nullish coalescing ??\nconst score = 0;\nscore || \"No score\"   // \"No score\" ✘ — 0 is falsy, wrong!\nscore ?? \"No score\"   // 0 ✔ — ?? only triggers for null/undefined\n\n// Combined\nconst username = user?.profile?.name ?? \"Anonymous\";\n\n// Nullish assignment ??=\nuser.name ??= \"Guest\"; // only sets if user.name is null/undefined"
    }
  },
  {
    "id": "js-26",
    "number": "26",
    "question": "What are Map and Set in JavaScript?",
    "difficulty": "medium",
    "section": "ES6+ Modern JavaScript",
    "answer": {
      "simple": "<code>Map</code> is like an object but keys can be ANY type (including objects and functions), and it remembers insertion order. <code>Set</code> is a collection of unique values — duplicates are automatically removed.",
      "code": "// Map — key can be any type\nconst map = new Map();\nmap.set(\"name\", \"Alice\");\nmap.set(42, \"number key\");\nmap.set({ id: 1 }, \"object key\");  // objects as keys!\n\nmap.get(\"name\");      // \"Alice\"\nmap.has(\"name\");      // true\nmap.size;             // 3\nmap.delete(\"name\");\n\n// Iterate\nmap.forEach((value, key) => console.log(key, value));\nfor (const [key, value] of map) { }\n\n// Set — unique values only\nconst set = new Set([1, 2, 2, 3, 3, 3]);\nconsole.log(set); // Set {1, 2, 3} — duplicates removed!\n\nset.add(4);\nset.has(2);        // true\nset.delete(1);\nset.size;          // 3\n\n// Remove duplicates from array (classic trick!)\nconst unique = [...new Set([1, 2, 2, 3, 3])]; // [1, 2, 3]\n\n// WeakMap and WeakSet — hold weak references\n// (objects can be garbage collected even if they're in the WeakMap)\n// Good for: caching data associated with objects without preventing GC"
    }
  },
  {
    "id": "js-27",
    "number": "27",
    "question": "What are symbols in JavaScript?",
    "difficulty": "medium",
    "section": "ES6+ Modern JavaScript",
    "answer": {
      "simple": "A <code>Symbol</code> is a guaranteed unique primitive value. No two symbols are ever equal, even if they have the same description. Useful for creating truly unique property keys that won't collide with any other code.",
      "code": "// Every Symbol is unique\nconst sym1 = Symbol(\"id\");\nconst sym2 = Symbol(\"id\");\nsym1 === sym2;  // false — always unique!\n\n// Use as object property keys (won't conflict)\nconst ID = Symbol(\"id\");\nconst user = {\n  name: \"Alice\",\n  [ID]: 12345    // square brackets needed for computed key\n};\n\nuser.name;  // \"Alice\"\nuser[ID];   // 12345\nuser.id;    // undefined — string \"id\" ≠ Symbol id!\n\n// Symbols are NOT enumerable — hidden from for...in and Object.keys()\nObject.keys(user);      // [\"name\"] — no symbol!\nObject.getOwnPropertySymbols(user); // [Symbol(id)]\n\n// Well-known symbols — customize built-in behavior\nclass MyArray {\n  [Symbol.iterator]() {  // make your object iterable!\n    let i = 0;\n    const data = [1, 2, 3];\n    return { next: () => ({ value: data[i++], done: i > data.length }) };\n  }\n}\nfor (const n of new MyArray()) { console.log(n); } // 1, 2, 3"
    }
  },
  {
    "id": "js-28",
    "number": "28",
    "question": "What are generators in JavaScript?",
    "difficulty": "medium",
    "section": "ES6+ Modern JavaScript",
    "answer": {
      "simple": "A generator is a special function that can pause its execution (using <code>yield</code>) and resume later. It returns an iterator — you call <code>.next()</code> to get the next value. Perfect for lazy sequences and async flow control.",
      "code": "// Generator function — note the * after function\nfunction* counter() {\n  let i = 0;\n  while (true) {\n    yield i++;  // pause here, return i, then resume next time\n  }\n}\n\nconst gen = counter();\ngen.next().value; // 0\ngen.next().value; // 1\ngen.next().value; // 2\n// Never exhausted — lazy infinite sequence\n\n// Finite generator\nfunction* range(start, end) {\n  for (let i = start; i <= end; i++) {\n    yield i;\n  }\n}\n\nfor (const n of range(1, 5)) {\n  console.log(n); // 1, 2, 3, 4, 5\n}\n\n// Two-way communication — send values back in with .next(value)\nfunction* calculator() {\n  const x = yield \"Enter first number:\";\n  const y = yield \"Enter second number:\";\n  return x + y;\n}\nconst calc = calculator();\ncalc.next();         // ask for first number\ncalc.next(10);       // send 10\ncalc.next(20).value; // 30 — result!"
    }
  },
  {
    "id": "js-29",
    "number": "29",
    "question": "What is the Event Loop and how does JavaScript handle asynchronous code?",
    "difficulty": "medium",
    "section": "Asynchronous JavaScript",
    "answer": {
      "simple": "JavaScript is single-threaded — it can only do one thing at a time. The Event Loop manages async operations: when an async task completes, its callback is placed in a queue. The Event Loop continuously checks if the Call Stack is empty, then moves the next callback from the queue onto the stack.",
      "exampleLabel": "🧩 Analogy",
      "example": "The Event Loop is like a restaurant waiter. The waiter can only serve one table at a time (single-threaded). When a customer orders (async task), the waiter gives it to the kitchen (Web APIs). When food is ready (async complete), it goes to the pickup counter (queue). The waiter checks the counter between serving each table (event loop).",
      "code": "console.log(\"1 — start\");      // synchronous, runs first\n\nsetTimeout(() => {\n  console.log(\"3 — timeout\");  // goes to callback queue\n}, 0);                          // even with 0ms, it waits!\n\nPromise.resolve().then(() => {\n  console.log(\"2 — promise\");  // goes to microtask queue\n});\n\nconsole.log(\"4 — end\");        // synchronous, runs now\n\n// Output order: 1, 4, 2, 3\n// Why? Microtask queue (promises) runs before callback queue (setTimeout)!\n\n// The order of priority:\n// 1. Synchronous code (Call Stack)\n// 2. Microtasks: Promises, queueMicrotask(), MutationObserver\n// 3. Macrotasks: setTimeout, setInterval, setImmediate, I/O"
    }
  },
  {
    "id": "js-30",
    "number": "30",
    "question": "What is a callback and what is \"callback hell\"?",
    "difficulty": "medium",
    "section": "Asynchronous JavaScript",
    "answer": {
      "simple": "A callback is a function passed as an argument to another function, to be called when an async operation completes. \"Callback hell\" is deeply nested callbacks that make code unreadable — solved by Promises and async/await.",
      "code": "// Callback — function passed to be called later\nsetTimeout(() => console.log(\"done\"), 1000);\n\n// Callback hell — the \"pyramid of doom\"\ngetUser(userId, (user) => {\n  getPosts(user.id, (posts) => {\n    getComments(posts[0].id, (comments) => {\n      getAuthor(comments[0].authorId, (author) => {\n        displayData(user, posts, comments, author, (result) => {\n          // By now you're 5 levels deep and completely lost\n        });\n      });\n    });\n  });\n});\n// Problems: hard to read, hard to handle errors, hard to maintain\n\n// Solution: Promises (then chains)\ngetUser(userId)\n  .then(user => getPosts(user.id))\n  .then(posts => getComments(posts[0].id))\n  .then(comments => getAuthor(comments[0].authorId))\n  .catch(error => console.error(error));\n\n// Best solution: async/await (looks synchronous!)\nasync function loadData() {\n  try {\n    const user = await getUser(userId);\n    const posts = await getPosts(user.id);\n    // ...\n  } catch (error) {\n    console.error(error);\n  }\n}"
    }
  },
  {
    "id": "js-31",
    "number": "31",
    "question": "What is a Promise and how does it work?",
    "difficulty": "medium",
    "section": "Asynchronous JavaScript",
    "answer": {
      "simple": "A Promise represents a value that will be available in the future. It has 3 states: <strong>pending</strong> (not done yet), <strong>fulfilled</strong> (success), or <strong>rejected</strong> (error). Use <code>.then()</code> for success, <code>.catch()</code> for errors, <code>.finally()</code> for cleanup.",
      "code": "// Creating a Promise\nconst fetchUser = (id) => new Promise((resolve, reject) => {\n  setTimeout(() => {\n    if (id > 0) {\n      resolve({ id, name: \"Alice\" }); // success\n    } else {\n      reject(new Error(\"Invalid ID\")); // failure\n    }\n  }, 1000);\n});\n\n// Consuming a Promise\nfetchUser(1)\n  .then(user => {\n    console.log(user);         // { id: 1, name: \"Alice\" }\n    return user.name;          // chain by returning\n  })\n  .then(name => console.log(name)) // \"Alice\"\n  .catch(err => console.error(err)) // handles any error\n  .finally(() => console.log(\"done\")); // always runs\n\n// Promise states:\n// pending  → waiting for resolve/reject\n// fulfilled → resolve() was called ✔\n// rejected  → reject() was called ✘\n// settled   → either fulfilled or rejected (not pending)"
    }
  },
  {
    "id": "js-32",
    "number": "32",
    "question": "What are Promise.all(), Promise.race(), Promise.allSettled(), Promise.any()?",
    "difficulty": "medium",
    "section": "Asynchronous JavaScript",
    "answer": {
      "simple": "These run multiple promises in parallel with different behaviors when they resolve or reject.",
      "code": "const p1 = fetchUser(1);   // resolves in 1s\nconst p2 = fetchPost(1);   // resolves in 2s\nconst p3 = fetchData(1);   // rejects in 0.5s\n\n// Promise.all — wait for ALL, fail if ANY rejects\nPromise.all([p1, p2])\n  .then(([user, post]) => console.log(user, post)); // both results\n// ✘ If one rejects, the whole thing rejects\n\n// Promise.race — resolve/reject as soon as the FIRST one settles\nPromise.race([p1, p2])\n  .then(first => console.log(first)); // result of p1 (faster)\n\n// Promise.allSettled — wait for ALL, never rejects, gives status of each\nPromise.allSettled([p1, p2, p3])\n  .then(results => {\n    results.forEach(r => {\n      if (r.status === 'fulfilled') console.log(r.value);\n      else console.log(r.reason); // error\n    });\n  }); // ✔ never throws, always runs\n\n// Promise.any — first FULFILLED (ignores rejections, rejects if ALL fail)\nPromise.any([p1, p2, p3])\n  .then(first => console.log(first)); // p1 (p3 rejected, ignored)"
    }
  },
  {
    "id": "js-33",
    "number": "33",
    "question": "What is async/await and how does it work?",
    "difficulty": "easy",
    "section": "Asynchronous JavaScript",
    "answer": {
      "simple": "<code>async/await</code> is syntax sugar over Promises that makes async code look and behave like synchronous code. An <code>async</code> function always returns a Promise. <code>await</code> pauses execution inside the function until the Promise resolves.",
      "code": "// Promise version\nfunction loadUser(id) {\n  return fetch(`/api/users/${id}`)\n    .then(res => res.json())\n    .then(user => user)\n    .catch(err => console.error(err));\n}\n\n// async/await version — reads like normal code!\nasync function loadUser(id) {\n  try {\n    const res  = await fetch(`/api/users/${id}`); // pause here\n    const user = await res.json();                 // pause here\n    return user;\n  } catch (error) {\n    console.error(error);\n  }\n}\n\n// async function ALWAYS returns a Promise\nconst result = loadUser(1);  // Promise, not a user yet\nresult.then(user => console.log(user)); // or use await in another async fn\n\n// Run multiple awaits in parallel (don't do one then the other!)\n// ✘ Sequential — slow (1s + 2s = 3s total)\nconst user = await fetchUser(1);   // wait 1s\nconst posts = await fetchPosts(1); // THEN wait 2s\n\n// ✔ Parallel — fast (max of 1s and 2s = 2s total)\nconst [user, posts] = await Promise.all([fetchUser(1), fetchPosts(1)]);"
    }
  },
  {
    "id": "js-34",
    "number": "34",
    "question": "What is the difference between microtasks and macrotasks?",
    "difficulty": "hard",
    "section": "Asynchronous JavaScript",
    "answer": {
      "simple": "Microtasks (Promises, MutationObserver) run immediately after the current task, before anything else. Macrotasks (setTimeout, setInterval, I/O) run in the next event loop iteration. The microtask queue is FULLY drained before the next macrotask starts.",
      "code": "console.log(\"1 — sync\");\n\nsetTimeout(() => console.log(\"4 — macrotask\"), 0); // macrotask queue\n\nPromise.resolve()\n  .then(() => console.log(\"2 — microtask 1\"))  // microtask queue\n  .then(() => console.log(\"3 — microtask 2\")); // added to microtask queue\n\nconsole.log(\"5 — sync end\");\n\n// Output: 1, 5, 2, 3, 4\n// Reason: sync runs first (1, 5)\n//         then ALL microtasks drain (2, 3)\n//         then macrotask runs (4)\n\n// Why this matters:\n// If you queue many microtasks (Promise chains), they all run\n// before the browser can repaint or handle setTimeout callbacks.\n// Too many microtasks = blocked UI!"
    }
  },
  {
    "id": "js-35",
    "number": "35",
    "question": "What is the Fetch API and how do you handle errors properly?",
    "difficulty": "medium",
    "section": "Asynchronous JavaScript",
    "answer": {
      "simple": "The Fetch API is the modern way to make HTTP requests. It returns a Promise. Critical gotcha: <code>fetch()</code> does NOT reject on HTTP error status codes (like 404 or 500) — you must check <code>response.ok</code> manually.",
      "code": "// Basic fetch\nconst response = await fetch('https://api.example.com/users');\nconst data = await response.json();\n\n// ⚠️ fetch() ONLY rejects on network errors (no internet, DNS fail)\n// It does NOT reject for 404, 500 etc.\n\n// ✔ Correct error handling\nasync function fetchUsers() {\n  try {\n    const response = await fetch('/api/users');\n\n    if (!response.ok) {  // check for 4xx/5xx manually!\n      throw new Error(`HTTP Error: ${response.status}`);\n    }\n\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    if (error.name === 'TypeError') {\n      console.error('Network error — no internet');\n    } else {\n      console.error('Request failed:', error.message);\n    }\n  }\n}\n\n// POST request\nconst response = await fetch('/api/users', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: 'Alice' })\n});"
    }
  },
  {
    "id": "js-36",
    "number": "36",
    "question": "What is the prototype chain in JavaScript?",
    "difficulty": "hard",
    "section": "Prototypes, Classes & OOP",
    "answer": {
      "simple": "Every JavaScript object has a hidden <code>[[Prototype]]</code> link to another object. When you access a property that doesn't exist on an object, JS looks up the chain — to the prototype, then to the prototype's prototype — until it reaches <code>null</code>.",
      "code": "const animal = { breathes: true };\nconst dog = { barks: true };\n\n// Set dog's prototype to animal\nObject.setPrototypeOf(dog, animal);\n\ndog.barks;    // true — own property\ndog.breathes; // true — found on prototype (animal)!\ndog.flies;    // undefined — not found anywhere in chain\n\n// How it works:\n// dog → animal → Object.prototype → null (end of chain)\n\n// Every array's chain:\n// [] → Array.prototype → Object.prototype → null\n// That's why arrays have .map, .filter etc. — they come from Array.prototype\n\nconst arr = [1, 2, 3];\narr.hasOwnProperty('length'); // true — from Object.prototype\narr.map;    // function — from Array.prototype\narr.map === Array.prototype.map; // true!\n\n// Check prototype\nObject.getPrototypeOf(dog) === animal; // true\ndog.__proto__ === animal;             // true (legacy, use getPrototypeOf)"
    }
  },
  {
    "id": "js-37",
    "number": "37",
    "question": "What are ES6 Classes and how do they relate to prototypes?",
    "difficulty": "medium",
    "section": "Prototypes, Classes & OOP",
    "answer": {
      "simple": "ES6 classes are <strong>syntactic sugar</strong> over prototype-based inheritance — they make OOP code cleaner but underneath they still use prototypes. Classes add nothing new — they're just a nicer way to write constructor functions and set up prototypes.",
      "code": "// ES6 Class syntax\nclass Animal {\n  constructor(name) {\n    this.name = name;  // instance property\n  }\n\n  speak() {            // method on Animal.prototype\n    return `${this.name} makes a sound`;\n  }\n\n  static create(name) {  // static method — on the class itself, not instances\n    return new Animal(name);\n  }\n}\n\n// Inheritance with extends\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);           // MUST call super() first!\n    this.breed = breed;\n  }\n\n  speak() {                // override parent method\n    return `${this.name} barks!`;\n  }\n}\n\nconst dog = new Dog(\"Rex\", \"Labrador\");\ndog.speak();              // \"Rex barks!\"\ndog instanceof Dog;       // true\ndog instanceof Animal;    // true (inheritance chain)\n\n// Under the hood:\n// Dog.prototype → Animal.prototype → Object.prototype → null"
    }
  },
  {
    "id": "js-38",
    "number": "38",
    "question": "What are private class fields and methods?",
    "difficulty": "medium",
    "section": "Prototypes, Classes & OOP",
    "answer": {
      "simple": "Private class fields (using <code>#</code> prefix) are truly private — they cannot be accessed or modified from outside the class. Even subclasses can't access them. This is real encapsulation in JavaScript (ES2022).",
      "code": "class BankAccount {\n  #balance = 0;       // private field — truly inaccessible outside\n  #owner;             // private field\n  #transactionHistory = [];\n\n  constructor(owner, initialDeposit) {\n    this.#owner = owner;  // can only set from inside\n    this.#balance = initialDeposit;\n  }\n\n  get balance() {         // public getter — controlled access\n    return `$${this.#balance}`;\n  }\n\n  deposit(amount) {\n    this.#balance += amount;\n    this.#log('deposit', amount);\n  }\n\n  #log(type, amount) {    // private method!\n    this.#transactionHistory.push({ type, amount });\n  }\n}\n\nconst account = new BankAccount(\"Alice\", 1000);\naccount.deposit(500);\nconsole.log(account.balance); // \"$1500\"\naccount.#balance;              // ✘ SyntaxError — truly private!\naccount.#log();                // ✘ SyntaxError"
    }
  },
  {
    "id": "js-39",
    "number": "39",
    "question": "What is the difference between hasOwnProperty and the 'in' operator?",
    "difficulty": "medium",
    "section": "Prototypes, Classes & OOP",
    "answer": {
      "simple": "<code>hasOwnProperty()</code> checks if a property belongs directly to the object (not inherited). The <code>in</code> operator checks the entire prototype chain — including inherited properties.",
      "code": "const parent = { inherited: true };\nconst child = Object.create(parent);\nchild.own = \"mine\";\n\n// in — checks the entire prototype chain\n\"own\" in child;        // true  (own property)\n\"inherited\" in child;  // true  (inherited from parent)\n\"toString\" in child;   // true  (from Object.prototype)\n\n// hasOwnProperty — only own properties\nchild.hasOwnProperty(\"own\");        // true\nchild.hasOwnProperty(\"inherited\");  // false\nchild.hasOwnProperty(\"toString\");   // false\n\n// Modern replacement: Object.hasOwn() (ES2022 — preferred)\nObject.hasOwn(child, \"own\");        // true\nObject.hasOwn(child, \"inherited\");  // false\n// Object.hasOwn is safer — works even if hasOwnProperty is overridden\n\n// Practical use\nconst config = { debug: false };\nif (Object.hasOwn(config, 'debug')) {\n  // 'debug' was explicitly set (even as false/null/0)\n  // different from: if (config.debug) — would miss falsy values!\n}"
    }
  },
  {
    "id": "js-40",
    "number": "40",
    "question": "What is the DOM?",
    "difficulty": "easy",
    "section": "DOM & Browser APIs",
    "answer": {
      "simple": "The DOM (Document Object Model) is a tree representation of an HTML page. The browser creates it from your HTML. JavaScript can read and modify the DOM to dynamically change the page — add elements, change styles, handle events.",
      "code": "// Selecting elements\ndocument.getElementById('header');         // by id\ndocument.querySelector('.card');           // first matching CSS selector\ndocument.querySelectorAll('.card');        // all matching (NodeList)\ndocument.getElementsByClassName('btn');   // by class (live HTMLCollection)\n\n// Reading/writing content\nelement.textContent = \"New text\";          // text only, safe from XSS\nelement.innerHTML = \"<strong>Bold</strong>\"; // parses HTML (XSS risk!)\n\n// Modifying styles\nelement.style.color = \"red\";\nelement.style.fontSize = \"18px\";\nelement.classList.add(\"active\");\nelement.classList.remove(\"hidden\");\nelement.classList.toggle(\"open\");\nelement.classList.contains(\"active\");     // true/false\n\n// Creating and adding elements\nconst div = document.createElement(\"div\");\ndiv.className = \"card\";\ndiv.textContent = \"Hello\";\nparent.appendChild(div);\nparent.append(div, \"text\");               // modern, appends multiple\nparent.prepend(div);\nparent.removeChild(div);\ndiv.remove();                             // modern"
    }
  },
  {
    "id": "js-41",
    "number": "41",
    "question": "What is event delegation and why is it useful?",
    "difficulty": "medium",
    "section": "DOM & Browser APIs",
    "answer": {
      "simple": "Event delegation attaches one event listener to a parent element instead of many listeners on each child. When a child is clicked, the event bubbles up to the parent, which handles it. Efficient and works for dynamically added elements.",
      "code": "// ✘ Without delegation — listener on every item (inefficient)\ndocument.querySelectorAll('.list-item').forEach(item => {\n  item.addEventListener('click', handleClick);\n  // 100 items = 100 listeners!\n  // Also: dynamically added items DON'T get the listener!\n});\n\n// ✔ With delegation — ONE listener on the parent\ndocument.querySelector('.list').addEventListener('click', (event) => {\n  // Check if the clicked element matches what we want\n  if (event.target.classList.contains('list-item')) {\n    handleClick(event.target);\n  }\n\n  // Or use closest() for nested elements\n  const item = event.target.closest('.list-item');\n  if (item) handleClick(item);\n});\n\n// Benefits:\n// 1. One listener instead of many → less memory\n// 2. Works for dynamically added elements (they bubble up too!)\n// 3. No need to add/remove listeners when items change"
    }
  },
  {
    "id": "js-42",
    "number": "42",
    "question": "What is event bubbling and capturing?",
    "difficulty": "medium",
    "section": "DOM & Browser APIs",
    "answer": {
      "simple": "When you click a child element, the event travels in two phases: <strong>Capturing</strong> (from window down to target), then <strong>Bubbling</strong> (from target back up to window). By default, event listeners use the bubble phase. Use <code>stopPropagation()</code> to stop the travel.",
      "code": "// Bubbling (default) — event fires from child UP to parent\n<div id=\"outer\">\n  <button id=\"inner\">Click me</button>\n</div>\n\n// Clicking the button fires both handlers (inner → outer order)\nouter.addEventListener('click', () => console.log('outer'));\ninner.addEventListener('click', () => console.log('inner'));\n// Output: \"inner\", then \"outer\"\n\n// Stop bubbling\ninner.addEventListener('click', (e) => {\n  e.stopPropagation(); // stops event from bubbling up to outer\n  console.log('inner only');\n});\n\n// Capturing — listen in the capture phase (3rd argument = true)\nouter.addEventListener('click', () => console.log('outer capture'), true);\n// Fires BEFORE inner — outer capture, inner, outer bubble\n\n// preventDefault — stop browser's default action\nlink.addEventListener('click', (e) => {\n  e.preventDefault();  // stops link from navigating\n  handleCustomNavigation();\n});"
    }
  },
  {
    "id": "js-43",
    "number": "43",
    "question": "What is localStorage, sessionStorage, and cookies?",
    "difficulty": "medium",
    "section": "DOM & Browser APIs",
    "answer": {
      "simple": "Three ways to store data in the browser. <strong>localStorage</strong> persists forever until cleared. <strong>sessionStorage</strong> persists until the tab is closed. <strong>Cookies</strong> persist until expiry date, are sent with every HTTP request, and can be HttpOnly (server-only).",
      "code": "// localStorage — persists across sessions\nlocalStorage.setItem('user', JSON.stringify({ name: 'Alice' }));\nconst user = JSON.parse(localStorage.getItem('user'));\nlocalStorage.removeItem('user');\nlocalStorage.clear(); // removes ALL\n\n// sessionStorage — same API, but lost when tab closes\nsessionStorage.setItem('draft', 'my draft text');\nsessionStorage.getItem('draft');\n// Gone when user closes the tab\n\n// Cookies (more complex, read/write via document.cookie)\n// Setting:\ndocument.cookie = \"username=Alice; expires=Fri, 31 Dec 2025 00:00:00 UTC; path=/\";\n// Reading: document.cookie returns ALL cookies as one string\n\n// Comparison:\n// localStorage:   ~5MB, no expiry, JS only, same origin\n// sessionStorage: ~5MB, tab lifetime, JS only, same origin\n// Cookies:        ~4KB, custom expiry, sent with requests, works with server\n//                 HttpOnly flag = JS cannot read (safer for auth tokens)"
    }
  },
  {
    "id": "js-44",
    "number": "44",
    "question": "What is the Intersection Observer API?",
    "difficulty": "hard",
    "section": "DOM & Browser APIs",
    "answer": {
      "simple": "The Intersection Observer watches when an element enters or leaves the viewport (or a parent element). It's efficient — no scroll event listeners needed. Perfect for lazy loading images, infinite scroll, and scroll-triggered animations.",
      "code": "// Create an observer\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      // Element is visible in the viewport!\n      entry.target.classList.add('visible');\n      observer.unobserve(entry.target); // stop watching after first trigger\n    }\n  });\n}, {\n  threshold: 0.1,    // trigger when 10% of element is visible\n  rootMargin: '0px 0px -50px 0px' // offset from viewport edges\n});\n\n// Watch elements\ndocument.querySelectorAll('.fade-in').forEach(el => observer.observe(el));\n\n// Lazy loading images\nconst imgObserver = new IntersectionObserver(entries => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src; // set real src when visible\n      imgObserver.unobserve(img);\n    }\n  });\n});\ndocument.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));"
    }
  },
  {
    "id": "js-45",
    "number": "45",
    "question": "How does try/catch/finally work?",
    "difficulty": "easy",
    "section": "Error Handling & Debugging",
    "answer": {
      "simple": "<code>try</code> runs code that might fail. <code>catch</code> handles the error if one occurs. <code>finally</code> always runs — whether there was an error or not. Perfect for cleanup code like closing database connections.",
      "code": "try {\n  const data = JSON.parse(invalidJSON);  // throws SyntaxError\n  console.log(data);\n} catch (error) {\n  console.error(error.name);    // \"SyntaxError\"\n  console.error(error.message); // \"Unexpected token...\"\n  console.error(error.stack);   // full stack trace\n} finally {\n  console.log(\"This ALWAYS runs\");  // cleanup here\n  // db.close(); connection.release(); etc.\n}\n\n// Custom errors\nclass ValidationError extends Error {\n  constructor(message, field) {\n    super(message);\n    this.name = \"ValidationError\";\n    this.field = field;\n  }\n}\n\ntry {\n  throw new ValidationError(\"Too short\", \"username\");\n} catch (error) {\n  if (error instanceof ValidationError) {\n    console.log(`${error.field}: ${error.message}`);\n  } else {\n    throw error; // re-throw errors you can't handle\n  }\n}\n\n// async/await error handling\nasync function fetchData() {\n  try {\n    const res = await fetch('/api/data');\n    return await res.json();\n  } catch (error) {\n    console.error('Failed:', error);\n  }\n}"
    }
  },
  {
    "id": "js-46",
    "number": "46",
    "question": "What are the different types of errors in JavaScript?",
    "difficulty": "medium",
    "section": "Error Handling & Debugging",
    "answer": {
      "simple": "JavaScript has 7 built-in error types. Understanding them helps you quickly identify what went wrong from an error message.",
      "code": "// SyntaxError — invalid JS syntax (can't even parse the code)\neval(\"let = 5\");  // SyntaxError: Unexpected token '='\n\n// ReferenceError — accessing variable that doesn't exist\nconsole.log(undeclaredVar);  // ReferenceError: not defined\nlet x = y + 1;               // ReferenceError: y is not defined\n\n// TypeError — wrong type for operation\nnull.property;         // TypeError: Cannot read properties of null\nundefined();           // TypeError: undefined is not a function\n1 + {} toString();     // TypeError\n\n// RangeError — value outside allowed range\nnew Array(-1);         // RangeError: Invalid array length\n(1.5).toFixed(200);    // RangeError: too many decimals\n\n// URIError — bad URI encoding\ndecodeURIComponent('%');  // URIError\n\n// EvalError — error with eval() (rare)\n\n// AggregateError — multiple errors (Promise.any rejection)\nPromise.any([Promise.reject('a'), Promise.reject('b')])\n  .catch(e => e.errors); // ['a', 'b']"
    }
  },
  {
    "id": "js-47",
    "number": "47",
    "question": "What are pure functions and why are they important?",
    "difficulty": "medium",
    "section": "Functional Programming Concepts",
    "answer": {
      "simple": "A pure function always returns the same output for the same input, and has no side effects (doesn't change anything outside itself). Pure functions are predictable, easy to test, and can be safely used with memoization.",
      "code": "// Pure function — same input always = same output, no side effects\nfunction add(a, b) { return a + b; }\nadd(2, 3); // always 5, no matter what\n\n// Impure — depends on external state\nlet total = 0;\nfunction addToTotal(n) { total += n; return total; }\n// Different result each time depending on 'total'\n\n// Impure — side effect (modifies external thing)\nfunction addUser(user) {\n  database.users.push(user); // modifies external state\n  return user;\n}\n\n// Pure version — return new state instead of mutating\nfunction addUser(users, newUser) {\n  return [...users, newUser]; // doesn't touch original\n}\n\n// Why pure functions matter:\n// ✔ Easy to test (no setup/teardown needed)\n// ✔ Memoizable (cache results safely)\n// ✔ Parallelizable (no race conditions)\n// ✔ Referentially transparent (can replace call with result)"
    }
  },
  {
    "id": "js-48",
    "number": "48",
    "question": "What is currying in JavaScript?",
    "difficulty": "medium",
    "section": "Functional Programming Concepts",
    "answer": {
      "simple": "Currying transforms a function that takes multiple arguments into a series of functions that each take one argument. Instead of <code>add(1, 2)</code>, you get <code>add(1)(2)</code>. Makes functions highly reusable and composable.",
      "code": "// Regular function\nfunction add(a, b) { return a + b; }\nadd(2, 3); // 5\n\n// Curried version\nfunction curriedAdd(a) {\n  return function(b) {\n    return a + b;\n  };\n}\nconst add5 = curriedAdd(5);\nadd5(3);  // 8\nadd5(10); // 15\n\n// Arrow function currying (concise)\nconst multiply = a => b => a * b;\nconst double = multiply(2);\nconst triple = multiply(3);\ndouble(5); // 10\ntriple(5); // 15\n\n// Practical example\nconst filter = predicate => array => array.filter(predicate);\nconst isEven = n => n % 2 === 0;\nconst getEvens = filter(isEven);\ngetEvens([1, 2, 3, 4, 5]); // [2, 4]\n\n// Generic curry function\nconst curry = fn => {\n  const curried = (...args) =>\n    args.length >= fn.length ? fn(...args) : (...more) => curried(...args, ...more);\n  return curried;\n};"
    }
  },
  {
    "id": "js-49",
    "number": "49",
    "question": "What is function composition?",
    "difficulty": "hard",
    "section": "Functional Programming Concepts",
    "answer": {
      "simple": "Function composition means combining small functions to build a bigger one. The output of one function becomes the input of the next. It's the building block of functional programming — small focused functions piped together.",
      "code": "// Small, focused functions\nconst double = x => x * 2;\nconst addTen = x => x + 10;\nconst square = x => x * x;\n\n// Manual composition\nconst result = square(addTen(double(5)));\n// 5 → double → 10 → addTen → 20 → square → 400\n\n// Compose helper — applies right to left (mathematical order)\nconst compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);\nconst transform = compose(square, addTen, double);\ntransform(5); // 400\n\n// Pipe helper — applies left to right (readable order)\nconst pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);\nconst process = pipe(double, addTen, square);\nprocess(5); // 400 — same result, more readable\n\n// Real-world example\nconst processUser = pipe(\n  validateUser,\n  normalizeEmail,\n  hashPassword,\n  saveToDatabase\n);\nawait processUser(rawUserData);"
    }
  },
  {
    "id": "js-50",
    "number": "50",
    "question": "What is memoization?",
    "difficulty": "medium",
    "section": "Functional Programming Concepts",
    "answer": {
      "simple": "Memoization is caching the result of a function call so that subsequent calls with the same arguments return the cached result instantly instead of recomputing. Makes expensive pure functions fast.",
      "code": "// Without memoization — recalculates every time\nfunction fib(n) {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n}\nfib(40); // extremely slow — 2^40 calls!\n\n// With memoization — cache results\nfunction memoize(fn) {\n  const cache = new Map();\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) {\n      return cache.get(key); // instant!\n    }\n    const result = fn.apply(this, args);\n    cache.set(key, result);\n    return result;\n  };\n}\n\nconst memoFib = memoize(function fib(n) {\n  if (n <= 1) return n;\n  return memoFib(n - 1) + memoFib(n - 2);\n});\n\nmemoFib(40); // fast! each value calculated once\nmemoFib(40); // instant — from cache\n\n// React's useMemo and useCallback are memoization!"
    }
  },
  {
    "id": "js-51",
    "number": "51",
    "question": "What are ES Modules (import/export)?",
    "difficulty": "medium",
    "section": "Modules & Design Patterns",
    "answer": {
      "simple": "ES Modules are the official way to split JavaScript into files. <code>export</code> makes code available to other files. <code>import</code> brings it in. Each module has its own scope — no global pollution.",
      "code": "// math.js — named exports\nexport const PI = 3.14159;\nexport function add(a, b) { return a + b; }\nexport function multiply(a, b) { return a * b; }\n\n// Or export at the bottom\nconst helper = () => {};\nexport { helper };\n\n// math.js — default export (one per file)\nexport default function calculate(a, b) { return a + b; }\n\n// app.js — importing\nimport { PI, add, multiply } from './math.js';  // named imports\nimport calculate from './math.js';               // default import\nimport * as Math from './math.js';               // import all as namespace\nimport { add as sum } from './math.js';          // rename on import\n\n// Dynamic import — lazy load at runtime\nconst module = await import('./heavy-module.js');\n// OR\nbutton.addEventListener('click', async () => {\n  const { format } = await import('./formatter.js');\n  format(data);\n});"
    }
  },
  {
    "id": "js-52",
    "number": "52",
    "question": "What is the Module pattern?",
    "difficulty": "hard",
    "section": "Modules & Design Patterns",
    "answer": {
      "simple": "The Module pattern uses closures to create private state and expose a public API. It was the go-to pattern before ES6 modules existed and is still useful for understanding encapsulation.",
      "code": "// Module pattern using IIFE + closure\nconst CounterModule = (function() {\n  // Private — not accessible from outside\n  let count = 0;\n  const history = [];\n\n  function logChange(action) {\n    history.push({ action, value: count, time: Date.now() });\n  }\n\n  // Public API — returned object\n  return {\n    increment() {\n      count++;\n      logChange('increment');\n    },\n    decrement() {\n      count--;\n      logChange('decrement');\n    },\n    getCount() { return count; },\n    getHistory() { return [...history]; } // return copy, not reference\n  };\n})();\n\nCounterModule.increment();\nCounterModule.increment();\nCounterModule.getCount();   // 2\nCounterModule.count;        // undefined — truly private!\nCounterModule.getHistory(); // [{action:'increment',...}, ...]"
    }
  },
  {
    "id": "js-53",
    "number": "53",
    "question": "What is the Observer pattern (publish/subscribe)?",
    "difficulty": "hard",
    "section": "Modules & Design Patterns",
    "answer": {
      "simple": "The Observer pattern lets objects \"subscribe\" to events and be notified when something happens, without the publisher knowing who's listening. The foundation of event systems, React state, Redux, and most UI frameworks.",
      "code": "class EventEmitter {\n  #events = {};\n\n  on(event, listener) {\n    if (!this.#events[event]) this.#events[event] = [];\n    this.#events[event].push(listener);\n    return () => this.off(event, listener); // return unsubscribe fn\n  }\n\n  off(event, listener) {\n    this.#events[event] = this.#events[event]?.filter(l => l !== listener);\n  }\n\n  emit(event, ...args) {\n    this.#events[event]?.forEach(listener => listener(...args));\n  }\n\n  once(event, listener) {\n    const wrapper = (...args) => {\n      listener(...args);\n      this.off(event, wrapper);\n    };\n    this.on(event, wrapper);\n  }\n}\n\nconst emitter = new EventEmitter();\n\nconst unsubscribe = emitter.on('data', data => console.log('received:', data));\nemitter.on('error', err => console.error('error:', err));\n\nemitter.emit('data', { users: [1, 2, 3] }); // \"received: { users: [1,2,3] }\"\nunsubscribe(); // stop listening"
    }
  },
  {
    "id": "js-54",
    "number": "54",
    "question": "What is the Singleton pattern?",
    "difficulty": "hard",
    "section": "Modules & Design Patterns",
    "answer": {
      "simple": "The Singleton pattern ensures a class has only ONE instance and provides a global access point to it. Useful for shared resources like a database connection, configuration, or state store.",
      "code": "// Classic Singleton\nclass Database {\n  static #instance = null;\n  #connection;\n\n  constructor(url) {\n    if (Database.#instance) {\n      return Database.#instance; // return existing instance\n    }\n    this.#connection = url;\n    Database.#instance = this;\n  }\n\n  static getInstance(url) {\n    if (!Database.#instance) {\n      Database.#instance = new Database(url);\n    }\n    return Database.#instance;\n  }\n\n  query(sql) { /* ... */ }\n}\n\nconst db1 = Database.getInstance('mongodb://localhost');\nconst db2 = Database.getInstance('other-url');\ndb1 === db2; // true — same instance!\n\n// ES Module as Singleton (simplest approach)\n// config.js\nlet instance = null;\nexport function getConfig() {\n  if (!instance) instance = loadConfig();\n  return instance;\n}\n// Modules are cached after first load — effectively a singleton"
    }
  },
  {
    "id": "js-55",
    "number": "55",
    "question": "What is a Proxy in JavaScript?",
    "difficulty": "hard",
    "section": "Advanced JavaScript Concepts",
    "answer": {
      "simple": "A <code>Proxy</code> wraps an object and lets you intercept and customize operations on it — like property reads, writes, function calls, and more. Vue 3's reactivity system is built with Proxies.",
      "code": "const handler = {\n  get(target, prop) {\n    console.log(`Getting ${prop}`);\n    return prop in target ? target[prop] : `Property ${prop} doesn't exist`;\n  },\n  set(target, prop, value) {\n    if (typeof value !== 'number') throw new TypeError('Only numbers!');\n    target[prop] = value;\n    console.log(`Set ${prop} = ${value}`);\n    return true; // must return true from set trap\n  },\n  has(target, prop) {\n    console.log(`Checking if ${prop} exists`);\n    return prop in target;\n  }\n};\n\nconst scores = new Proxy({}, handler);\nscores.alice = 95;        // \"Set alice = 95\"\nscores.bob = \"high\";      // ✘ TypeError: Only numbers!\nscores.alice;             // \"Getting alice\" → 95\nscores.charlie;           // \"Getting charlie\" → \"Property charlie doesn't exist\"\n'alice' in scores;        // \"Checking if alice exists\" → true\n\n// Reactive object (like Vue's data)\nfunction reactive(obj) {\n  return new Proxy(obj, {\n    set(target, prop, value) {\n      target[prop] = value;\n      render(); // re-render on any change!\n      return true;\n    }\n  });\n}"
    }
  },
  {
    "id": "js-56",
    "number": "56",
    "question": "What is Reflect in JavaScript?",
    "difficulty": "hard",
    "section": "Advanced JavaScript Concepts",
    "answer": {
      "simple": "<code>Reflect</code> is a built-in object with static methods that mirror Proxy traps. It lets you perform the default behavior inside a Proxy trap, and provides functional versions of operators like <code>in</code>, <code>delete</code>, and property access.",
      "code": "// Reflect mirrors Proxy traps exactly\nReflect.get(obj, 'name');           // same as obj.name\nReflect.set(obj, 'name', 'Alice');  // same as obj.name = 'Alice'\nReflect.has(obj, 'name');           // same as 'name' in obj\nReflect.deleteProperty(obj, 'name');// same as delete obj.name\nReflect.ownKeys(obj);               // all keys (including symbols)\n\n// Most useful: inside Proxy traps to call the default behavior\nconst handler = {\n  set(target, prop, value) {\n    // Do something extra\n    console.log(`Setting ${prop}`);\n    // Then do the default behavior\n    return Reflect.set(target, prop, value); // cleaner than target[prop] = value\n  },\n  get(target, prop) {\n    // Track access\n    trackAccess(prop);\n    // Default behavior\n    return Reflect.get(target, prop);\n  }\n};\n\n// Without Reflect you'd write: target[prop] = value; return true;\n// Reflect.set handles edge cases properly (prototype chains, etc.)"
    }
  },
  {
    "id": "js-57",
    "number": "57",
    "question": "What is garbage collection in JavaScript?",
    "difficulty": "hard",
    "section": "Advanced JavaScript Concepts",
    "answer": {
      "simple": "Garbage collection (GC) automatically frees memory when objects are no longer reachable (no references pointing to them). JavaScript's GC uses \"mark and sweep\" — it marks all reachable objects from root, then sweeps away (frees) everything else.",
      "code": "// Memory is freed when references are gone\nlet user = { name: \"Alice\" };  // object created in heap\nuser = null;  // reference removed → object eligible for GC\n\n// Memory leak — object kept alive unintentionally\nconst cache = new Map();\nfunction processUser(user) {\n  cache.set(user, computeExpensiveData(user));\n  // If 'user' objects are never removed from cache,\n  // they can never be garbage collected → memory leak!\n}\n\n// Fix: use WeakMap — keys are held weakly (don't prevent GC)\nconst weakCache = new WeakMap();\nfunction processUser(user) {\n  weakCache.set(user, computeExpensiveData(user));\n  // When 'user' has no other references, GC can collect it\n  // and the WeakMap entry is automatically removed!\n}\n\n// Other memory leak sources:\n// - Forgotten event listeners (always removeEventListener on cleanup)\n// - Closures holding large objects\n// - Global variables\n// - setInterval not cleared"
    }
  },
  {
    "id": "js-58",
    "number": "58",
    "question": "What is debouncing and throttling?",
    "difficulty": "hard",
    "section": "Advanced JavaScript Concepts",
    "answer": {
      "simple": "<strong>Debounce</strong> waits until the user stops doing something for X ms, then fires once. <strong>Throttle</strong> fires at most once per X ms, no matter how often triggered. Debounce = wait for pause. Throttle = rate limit.",
      "code": "// Debounce — fires AFTER user stops for delay ms\nfunction debounce(fn, delay) {\n  let timerId;\n  return function(...args) {\n    clearTimeout(timerId);\n    timerId = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n\n// Search only after user stops typing for 300ms\nconst searchInput = document.querySelector('#search');\nsearchInput.addEventListener('input', debounce((e) => {\n  fetchResults(e.target.value); // API call only after pause\n}, 300));\n\n// Throttle — fires at most once per interval ms\nfunction throttle(fn, interval) {\n  let lastRun = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - lastRun >= interval) {\n      lastRun = now;\n      fn.apply(this, args);\n    }\n  };\n}\n\n// Scroll handler — max once per 100ms\nwindow.addEventListener('scroll', throttle(() => {\n  updateScrollProgress();\n}, 100));\n\n// Debounce = search inputs, form validation, window resize\n// Throttle = scroll handlers, mousemove, resize, button clicks (prevent spam)"
    }
  },
  {
    "id": "js-59",
    "number": "59",
    "question": "What is WeakRef and FinalizationRegistry?",
    "difficulty": "hard",
    "section": "Advanced JavaScript Concepts",
    "answer": {
      "simple": "<code>WeakRef</code> holds a \"weak\" reference to an object — it doesn't prevent garbage collection. <code>FinalizationRegistry</code> lets you register a callback that runs when an object is garbage collected. Both are advanced GC-related features (ES2021).",
      "code": "// WeakRef — holds object weakly (doesn't prevent GC)\nlet heavyObject = { data: new Array(1000000).fill('data') };\nconst ref = new WeakRef(heavyObject);\n\n// Still has the object\nref.deref()?.data.length; // 1000000\n\nheavyObject = null; // remove strong reference\n// At some point, GC may collect it\n// ref.deref() will return undefined after GC\n\n// Caching with WeakRef — cache that doesn't prevent GC\nconst cache = new Map();\nfunction getCachedData(key, computeFn) {\n  const ref = cache.get(key);\n  const cached = ref?.deref();\n  if (cached) return cached;\n\n  const value = computeFn();\n  cache.set(key, new WeakRef(value));\n  return value;\n}\n\n// FinalizationRegistry — callback when object is GC'd\nconst registry = new FinalizationRegistry((heldValue) => {\n  console.log(`Object with token ${heldValue} was garbage collected`);\n});\n\nlet obj = { name: \"Alice\" };\nregistry.register(obj, \"alice-token\"); // register with a held value\nobj = null; // when GC collects obj, logs the token"
    }
  },
  {
    "id": "js-60",
    "number": "60",
    "question": "What is tail call optimization?",
    "difficulty": "hard",
    "section": "Advanced JavaScript Concepts",
    "answer": {
      "simple": "A tail call is when a function's last action is calling another function. Tail call optimization (TCO) allows the engine to reuse the current stack frame instead of creating a new one — preventing stack overflows in deep recursion. Specified in ES6 but only Safari implements it fully.",
      "code": "// Regular recursion — creates new stack frame each call\nfunction factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1); // ← NOT a tail call (multiplies after)\n  // Stack: factorial(5) → factorial(4) → factorial(3) → ...\n  // With large n, causes Stack Overflow!\n}\n\n// Tail-recursive — last action is just the call\nfunction factorialTCO(n, acc = 1) {\n  if (n <= 1) return acc;\n  return factorialTCO(n - 1, n * acc); // ← tail call! acc carries result\n}\n// Engine can reuse stack frame instead of adding a new one\n\n// Practical alternative — use a loop for deep recursion\nfunction factorialLoop(n) {\n  let result = 1;\n  while (n > 1) { result *= n--; }\n  return result;\n}"
    }
  },
  {
    "id": "js-61",
    "number": "61",
    "question": "What are Web Workers?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Web Workers run JavaScript on a background thread — separate from the main thread. This means heavy computations don't block the UI. Workers communicate with the main thread via <code>postMessage()</code> and can't access the DOM.",
      "code": "// Main thread — main.js\nconst worker = new Worker('worker.js');\n\n// Send data to worker\nworker.postMessage({ numbers: [1, 2, 3, ..., 1000000] });\n\n// Receive results from worker\nworker.onmessage = (event) => {\n  console.log('Result:', event.data.result); // UI stays responsive!\n};\n\n// Worker thread — worker.js\nself.onmessage = (event) => {\n  const { numbers } = event.data;\n  // Heavy computation here — doesn't block UI!\n  const result = numbers.reduce((sum, n) => sum + n, 0);\n  self.postMessage({ result }); // send result back\n};\n\n// Worker types:\n// Dedicated Worker — one page only\n// Shared Worker — multiple pages/tabs can connect\n// Service Worker — intercepts network requests (offline/cache)"
    }
  },
  {
    "id": "js-62",
    "number": "62",
    "question": "What is the difference between setTimeout(fn, 0) and queueMicrotask()?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "<code>setTimeout(fn, 0)</code> queues in the macrotask queue — runs after all microtasks and after the browser renders. <code>queueMicrotask(fn)</code> queues in the microtask queue — runs immediately after current code, before any renders or setTimeout callbacks.",
      "code": "console.log('1 sync');\n\nqueueMicrotask(() => console.log('3 microtask'));\nsetTimeout(() => console.log('5 macrotask'), 0);\nPromise.resolve().then(() => console.log('2 promise microtask'));\n\nconsole.log('4 sync end');\n\n// Order: 1, 4, 2, 3, 5\n// Because: sync → all microtasks (promises first, then queueMicrotask) → macrotasks\n\n// Use cases:\n// queueMicrotask: when you need to run AFTER current code but BEFORE rendering\n//                 useful for batching DOM updates\nqueueMicrotask(() => {\n  batchedDOMUpdates(); // all changes, then browser renders once\n});\n\n// setTimeout(0): defer to next \"tick\" — let browser paint first\nsetTimeout(() => {\n  renderLargeList(); // after current render cycle\n}, 0);"
    }
  },
  {
    "id": "js-63",
    "number": "63",
    "question": "What is requestAnimationFrame?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "<code>requestAnimationFrame()</code> tells the browser to run your function just before the next screen repaint. It syncs animations with the display refresh rate (usually 60fps) — much better than setInterval for animations.",
      "code": "// Bad — setInterval for animation\nsetInterval(() => {\n  element.style.left = position + \"px\";\n  position++;\n}, 16); // approximately 60fps, but can drift, and runs when hidden\n\n// Good — requestAnimationFrame\nfunction animate() {\n  position += 2;\n  element.style.left = position + \"px\";\n\n  if (position < 500) {\n    requestAnimationFrame(animate); // schedule next frame\n  }\n}\nrequestAnimationFrame(animate); // start!\n\n// Benefits vs setInterval:\n// ✔ Pauses when tab is hidden (saves battery/CPU)\n// ✔ Syncs with display refresh rate (no tearing)\n// ✔ No drift — always runs just before paint\n// ✔ Given a timestamp for precise timing"
    }
  },
  {
    "id": "js-64",
    "number": "64",
    "question": "What is a Service Worker?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "A Service Worker is a background script that acts as a network proxy — it can intercept requests, cache responses, and serve cached content when offline. It's the technology behind Progressive Web Apps (PWAs) and push notifications.",
      "code": "// Register a service worker (main.js)\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js').then(reg => {\n    console.log('SW registered:', reg);\n  });\n}\n\n// Service worker (sw.js)\nconst CACHE_NAME = 'my-app-v1';\nconst ASSETS = ['/', '/index.html', '/app.js', '/styles.css'];\n\n// Install — cache essential files\nself.addEventListener('install', (event) => {\n  event.waitUntil(\n    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))\n  );\n});\n\n// Fetch — serve from cache first, then network\nself.addEventListener('fetch', (event) => {\n  event.respondWith(\n    caches.match(event.request).then(cached => {\n      return cached || fetch(event.request); // cache or network\n    })\n  );\n});"
    }
  },
  {
    "id": "js-65",
    "number": "65",
    "question": "What are JavaScript iterators and the iterable protocol?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "An <strong>iterator</strong> is an object with a <code>.next()</code> method that returns <code>{value, done}</code>. An <strong>iterable</strong> is an object with <code>[Symbol.iterator]()</code> that returns an iterator. Arrays, Strings, Maps, Sets are built-in iterables. You can make anything iterable.",
      "code": "// Built-in iterables support for...of, spread, destructuring\nfor (const char of \"hello\") console.log(char); // h,e,l,l,o\nconst letters = [...'hello']; // ['h','e','l','l','o']\n\n// Manual iterator\nconst range = {\n  from: 1, to: 5,\n  [Symbol.iterator]() {           // makes this object iterable\n    let current = this.from;\n    const last = this.to;\n    return {\n      next() {\n        if (current <= last) {\n          return { value: current++, done: false };\n        }\n        return { value: undefined, done: true };\n      }\n    };\n  }\n};\n\nfor (const n of range) console.log(n); // 1, 2, 3, 4, 5\n[...range]; // [1, 2, 3, 4, 5]"
    }
  },
  {
    "id": "js-66",
    "number": "66",
    "question": "What are async generators and async iterators?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Async generators combine generators and async/await — they produce values asynchronously with <code>yield</code> and use <code>await</code> inside. Consume them with <code>for await...of</code>. Perfect for streaming APIs and paginated data.",
      "code": "// Async generator — produces values asynchronously\nasync function* fetchPaginatedUsers() {\n  let page = 1;\n  while (true) {\n    const res  = await fetch(`/api/users?page=${page}`);\n    const data = await res.json();\n    if (!data.users.length) break;\n    yield data.users; // pause and yield each page\n    page++;\n  }\n}\n\n// Consume with for await...of\nasync function processAllUsers() {\n  for await (const users of fetchPaginatedUsers()) {\n    users.forEach(user => processUser(user));\n    // automatically fetches next page on each iteration\n  }\n}"
    }
  },
  {
    "id": "js-67",
    "number": "67",
    "question": "What is Object.freeze() vs Object.seal()?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "<code>Object.freeze()</code> makes an object completely immutable — no adding, removing, or changing properties. <code>Object.seal()</code> prevents adding or removing properties but allows changing existing values.",
      "code": "// Object.freeze — completely immutable\nconst config = Object.freeze({\n  apiUrl: 'https://api.example.com',\n  maxRetries: 3\n});\n\nconfig.apiUrl = 'other';    // silently fails (or throws in strict mode)\nconfig.newProp = 'hello';   // silently fails\ndelete config.apiUrl;       // silently fails\n\n// Object.seal — can change, can't add/remove\nconst user = Object.seal({ name: 'Alice', age: 25 });\nuser.name = 'Bob';     // ✔ changing allowed\nuser.email = 'a@b.c'; // ✘ adding NOT allowed\ndelete user.age;       // ✘ deleting NOT allowed"
    }
  },
  {
    "id": "js-68",
    "number": "68",
    "question": "What is the difference between == comparison with objects?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Objects are compared by <strong>reference</strong>, not by value. Two different objects with identical content are NOT equal. They're equal only if they point to the exact same object in memory.",
      "code": "// Objects — compared by REFERENCE (memory address)\nconst a = { name: \"Alice\" };\nconst b = { name: \"Alice\" };\nconst c = a;\n\na === b;  // false — different objects in memory\na === c;  // true  — same reference!\na == b;   // false — same result for objects\n\n// Primitive — compared by VALUE\n\"hello\" === \"hello\"; // true\n5 === 5;             // true"
    }
  },
  {
    "id": "js-69",
    "number": "69",
    "question": "What is the Temporal API (modern date handling)?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "The old <code>Date</code> API is notoriously broken. <code>Temporal</code> is the new proposal (stage 3) that fixes everything — immutable, timezone-aware, precise calendar support. Not yet in browsers, but coming soon.",
      "code": "// Old Date API — broken in many ways\nconst d = new Date(2024, 0, 15); // January (0-indexed, confusing!)\nd.getMonth(); // 0 — January is 0?!\n\n// Temporal API — fixes everything\nconst today = Temporal.Now.plainDateISO();\ntoday.year;  today.month;  today.day;  // 1-indexed months!\n\n// Immutable — always returns new objects\nconst date = Temporal.PlainDate.from('2024-01-15');\nconst nextMonth = date.add({ months: 1 });  // returns NEW date"
    }
  },
  {
    "id": "js-70",
    "number": "70",
    "question": "What are tagged template literals?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Tagged templates let you process a template literal with a function. The function receives the string parts and interpolated values separately, letting you transform the output. Used by styled-components, GraphQL (gql), and SQL libraries.",
      "code": "function highlight(strings, ...values) {\n  return strings.reduce((result, str, i) => {\n    const value = values[i - 1];\n    return result + (value ? `<mark>${value}</mark>` : '') + str;\n  });\n}\n\nconst name = \"Alice\";\nconst role = \"admin\";\nhighlight`User ${name} has ${role} access`;"
    }
  },
  {
    "id": "js-71",
    "number": "71",
    "question": "What is the structuredClone() function?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "<code>structuredClone()</code> creates a deep clone of an object — fully independent copy with no shared references. It's the native deep clone function added in ES2022, replacing the hacky JSON.parse/JSON.stringify workaround.",
      "code": "const original = {\n  name: \"Alice\",\n  address: { city: \"NYC\" },\n  tags: [\"dev\", \"admin\"],\n  createdAt: new Date(),     // ✔ handles Dates\n  data: new Map([[1, 'a']]), // ✔ handles Map\n  scores: new Set([1, 2])    // ✔ handles Set\n};\n\nconst clone = structuredClone(original);\nclone.address.city = \"LA\";   // ✔ original.address.city stays \"NYC\""
    }
  },
  {
    "id": "js-72",
    "number": "72",
    "question": "What is Array.from() and when is it useful?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "<code>Array.from()</code> creates a real array from array-like or iterable objects (NodeList, arguments, string, Map, Set). Optionally applies a mapping function to each element.",
      "code": "// Convert NodeList to array\nconst elements = Array.from(document.querySelectorAll('.card'));\nelements.map(el => el.textContent); // ✔ now works!\n\n// Create array of N items\nArray.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]"
    }
  },
  {
    "id": "js-73",
    "number": "73",
    "question": "What is the logical assignment operators (&&=, ||=, ??=)?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "ES2021 added three assignment operators that combine logical operators with assignment. They're shorthand that only assigns if the left side meets a condition — avoiding unnecessary writes.",
      "code": "title ||= \"Untitled\";  // assign if falsy\nname ??= \"Guest\";    // assign if null/undefined\nuser.isAdmin &&= checkPermissions(user); // assign if truthy"
    }
  },
  {
    "id": "js-74",
    "number": "74",
    "question": "What are the new Array methods in modern JavaScript?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Recent JavaScript versions added several useful array methods: <code>at()</code>, <code>toSorted()</code>, <code>toReversed()</code>, <code>toSpliced()</code>, <code>with()</code>, and <code>findLast()</code>. The \"to\" methods return new arrays — they don't mutate the original.",
      "code": "arr.at(-1);   // 5  (last element!)\nconst sorted = arr.toSorted(); // new array, no mutation\nconst withNew = arr.with(2, 99); // [1,2,99,4,5]"
    }
  },
  {
    "id": "js-75",
    "number": "75",
    "question": "What is Object.create() and how is it different from new?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "<code>Object.create(proto)</code> creates a new object with the specified object as its prototype. Unlike <code>new</code>, it doesn't call a constructor function. Useful for creating clean prototype chains.",
      "code": "const dog = Object.create(animal);\ndog.name = \"Rex\";\n\n// Create with null prototype (no inherited properties!)\nconst cleanObj = Object.create(null);"
    }
  },
  {
    "id": "js-76",
    "number": "76",
    "question": "What is the typeof operator and its quirks?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "<code>typeof</code> returns a string describing the type of a value. It has a few famous quirks that trip up developers — especially <code>typeof null === \"object\"</code> which is a historic bug.",
      "code": "typeof null         // \"object\"  ← FAMOUS BUG!\ntypeof []           // \"object\"  ← arrays are objects!\ntypeof NaN          // \"number\"  ← Not a Number is a number type!"
    }
  },
  {
    "id": "js-77",
    "number": "77",
    "question": "What is the difference between proto and prototype?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "<code>prototype</code> is a property that ONLY exists on functions. It's the object that will be assigned as the prototype of any instances created with that function. <code>__proto__</code> is the actual internal link every object has to its prototype."
    }
  },
  {
    "id": "js-78",
    "number": "78",
    "question": "What is the difference between a shallow copy and a deep copy?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "A shallow copy only copies the top level of an object; nested objects/arrays are still shared by reference. A deep copy recursively copies everything, creating a completely independent object."
    }
  },
  {
    "id": "js-79",
    "number": "79",
    "question": "What is the execution context and the call stack?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "The execution context is the environment where JS code is evaluated. The call stack is a mechanism to keep track of function calls (LIFO — Last In, First Out). Current function on top, caller below."
    }
  },
  {
    "id": "js-80",
    "number": "80",
    "question": "What is use strict and what does it do?",
    "difficulty": "easy",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "<code>'use strict'</code> is a directive that enables strict mode in JS. It catches common mistakes (like global variables), prevents using future reserved keywords, and makes the language more secure and predictable."
    }
  },
  {
    "id": "js-81",
    "number": "81",
    "question": "What is the difference between null and undefined?",
    "difficulty": "easy",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "<code>undefined</code> is the default value for an uninitialized variable (JS says \"I don't know\"). <code>null</code> is an intentional assignment representing an empty value (the developer says \"It's empty\")."
    }
  },
  {
    "id": "js-82",
    "number": "82",
    "question": "What is the difference between function declaration and function expression?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Function declarations are fully hoisted (you can call them before they are written). Function expressions are not hoisted (they behave like normal variables)."
    }
  },
  {
    "id": "js-83",
    "number": "83",
    "question": "What is the difference between Map and WeakMap?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "A <code>Map</code> holds strong references to its keys, which can lead to memory leaks if not cleared. A <code>WeakMap</code> holds weak references — if the key has no other references, it can be garbage collected even if it's in the WeakMap."
    }
  },
  {
    "id": "js-84",
    "number": "84",
    "question": "What is the difference between Set and WeakSet?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "A <code>Set</code> holds any values. A <code>WeakSet</code> can only hold objects and holds them weakly — if an object in the WeakSet has no other references, it will be garbage collected."
    }
  },
  {
    "id": "js-85",
    "number": "85",
    "question": "What is the purpose of the Object.assign() method?",
    "difficulty": "easy",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "<code>Object.assign()</code> copies all enumerable own properties from one or more source objects to a target object. It's often used for merging objects or making shallow copies."
    }
  },
  {
    "id": "js-86",
    "number": "86",
    "question": "How do you handle multiple asynchronous operations in parallel?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Use <code>Promise.all()</code> to run multiple promises at once and wait for all to succeed, or <code>Promise.allSettled()</code> to wait for all to finish regardless of success or failure."
    }
  },
  {
    "id": "js-87",
    "number": "87",
    "question": "What is the difference between for...of and for...in?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "<code>for...of</code> iterates over the <strong>values</strong> of any iterable (arrays, strings, Maps, Sets). <code>for...in</code> iterates over the <strong>keys/property names</strong> of an object (including inherited ones — a pitfall)."
    }
  },
  {
    "id": "js-88",
    "number": "88",
    "question": "What is the difference between synchronous and asynchronous iteration?",
    "difficulty": "medium",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Synchronous iteration processes items one at a time immediately. Asynchronous iteration (with <code>for await...of</code>) waits for each item's Promise to resolve before moving to the next — perfect for paginated APIs, streams, and async data sources."
    }
  },
  {
    "id": "js-89",
    "number": "89",
    "question": "What are the most important JavaScript performance tips?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Optimizing JavaScript requires attention to DOM interactions, memory management, and efficient execution.",
      "exampleLabel": "📋 Top Performance Tips",
      "example": "<strong>1. Avoid layout thrashing</strong> — batch DOM reads and writes separately. Alternating read/write forces reflow each time.<br><br>\n<strong>2. Use DocumentFragment for bulk DOM inserts</strong> — one reflow instead of N..<br><br>\n<strong>3. Debounce/throttle event handlers</strong> — scroll, resize, input events fire hundreds of times per second.<br><br>\n<strong>4. Use virtual scrolling for long lists</strong> — only render visible items (React Window, TanStack Virtual).<br><br>\n<strong>5. Lazy load code</strong> — dynamic import() to load code only when needed.<br><br>\n<strong>6. Memoize expensive computations</strong> — don't recalculate what hasn't changed.<br><br>\n<strong>7. Use Web Workers for heavy computation</strong> — keep the main thread free for UI.<br><br>\n<strong>8. Avoid memory leaks</strong> — removeEventListener, cancel timers, clear WeakMap entries."
    }
  },
  {
    "id": "js-90",
    "number": "90",
    "question": "What are the common JavaScript security vulnerabilities?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Security in JS involves protecting against script injection and data theft.",
      "exampleLabel": "📋 XSS, Injection & More",
      "example": "<strong>1. XSS (Cross-Site Scripting)</strong> — injecting scripts via user input. Never use innerHTML with user data. Use textContent instead."
    }
  },
  {
    "id": "js-91",
    "number": "91",
    "question": "What are common JavaScript coding interview patterns?",
    "difficulty": "easy",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Common patterns include Two Pointers, Sliding Window, Frequency Counter, and Multiple Pointers for optimizing array/string problems."
    }
  },
  {
    "id": "js-92",
    "number": "92",
    "question": "How does JavaScript handle numbers and what is floating point precision?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "JavaScript uses 64-bit floating point (IEEE 754) for all numbers. This means some decimal operations produce unexpected results. It also means there's a maximum safe integer beyond which precision is lost."
    }
  },
  {
    "id": "js-93",
    "number": "93",
    "question": "What is the Revealing Module pattern?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "The Revealing Module pattern is a variation of the Module pattern where all functions are defined privately and only selected ones are exposed in the returned object. Makes it very clear what's public vs private."
    }
  },
  {
    "id": "js-94",
    "number": "94",
    "question": "What are the differences between Promise and Observable?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "A Promise handles ONE future value and is eager (starts immediately). An Observable handles MULTIPLE values over time, is lazy (starts only when subscribed), and can be cancelled. Observables are from the RxJS library, popular in Angular."
    }
  },
  {
    "id": "js-95",
    "number": "95",
    "question": "What are the common JavaScript mistakes and how to avoid them?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Avoiding common pitfalls makes code more reliable and maintainable.",
      "exampleLabel": "📋 Common Pitfalls",
      "example": "<strong>Using == instead of ===</strong> — always use strict equality.<br><br>\n<strong>Mutating function arguments (objects/arrays)</strong> — always work with copies.<br><br>\n<strong>Not handling Promise rejections</strong> — always add .catch() or try/catch with await.<br><br>\n<strong>Missing await on async functions</strong> — you get a Promise, not a value.<br><br>\n<strong>Synchronous loops with async operations</strong> — forEach doesn't await; use for...of instead.<br><br>\n<strong>var in loops</strong> — use let. var creates closure bugs.<br><br>\n<strong>Comparing objects with ===</strong> — objects are compared by reference.<br><br>\n<strong>Swallowing errors silently</strong> — catch blocks that log nothing hide bugs."
    }
  },
  {
    "id": "js-96",
    "number": "96",
    "question": "What is the difference between call stack overflow and heap out of memory?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "The <strong>call stack</strong> is fixed-size memory for function calls. Overflow = too much recursion (function calls itself without stopping). The <strong>heap</strong> is dynamic memory for objects. Out of memory = too many objects created without being freed (memory leak)."
    }
  },
  {
    "id": "js-97",
    "number": "97",
    "question": "What is the TC39 process and how do JavaScript features progress?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "TC39 is the committee that evolves JavaScript. New features go through 5 stages (0-4) before becoming official. Stage 4 = in the spec (ship it!). Browsers often implement stage 3 features early."
    }
  },
  {
    "id": "js-98",
    "number": "98",
    "question": "What are the latest ES2024 JavaScript features?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "ES2024 introduces Object.groupBy, Map.groupBy, Promise.withResolvers, Atomics.waitAsync, and better support for complex string operations."
    }
  },
  {
    "id": "js-99",
    "number": "99",
    "question": "What makes excellent JavaScript architecture for large applications?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Excellent architecture involves modularity, clean separation of concerns (Logic vs UI), consistent state management, comprehensive error handling, and a robust testing strategy."
    }
  },
  {
    "id": "js-100",
    "number": "100",
    "question": "What are the key differences between JavaScript runtime environments?",
    "difficulty": "hard",
    "section": "Performance, Web Workers & Modern JS",
    "answer": {
      "simple": "Runtime environments differ in available APIs, security models, and performance characteristics.",
      "exampleLabel": "📋 Runtime Comparison",
      "example": "🌐 <strong>Browser</strong>: DOM, Web APIs (fetch, localStorage, WebGL, WebRTC), sandboxed, security restrictions, window as global.<br><br>\n⚙️ <strong>Node.js</strong>: File system, HTTP servers, native modules (fs, path, crypto, child_process), CommonJS + ESM, global as global object.<br><br>\n🦕 <strong>Deno</strong>: Built-in TypeScript, ESM only, secure by default (must grant permissions), compatible with many browser APIs, built-in test runner.<br><br>\n🍞 <strong>Bun</strong>: Extremely fast (JavaScriptCore engine), drop-in Node replacement, native TypeScript, fast package manager, fast test runner."
    }
  }
];
