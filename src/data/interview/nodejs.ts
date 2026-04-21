import { Question } from './types';

export const NODEJS_QUESTIONS: Question[] = [
  {
    "id": "nodejs-01",
    "number": "01",
    "section": "Fundamentals",
    "question": "What is Node.js and why do developers use it?",
    "difficulty": "easy",
    "answer": {
      "simple": "Node.js is a JavaScript runtime built on Chrome's V8 engine. It lets you run JavaScript <strong>outside the browser</strong> — on a server. Before Node.js, JavaScript only ran inside web browsers. Now you can use it to build backends, APIs, tools, and real-time apps.",
      "example": "Think of JavaScript as a train. The browser was the only track it could run on. Node.js built a whole new track — now the same JavaScript train can run on servers, read files, connect to databases, and handle thousands of users at once."
    }
  },
  {
    "id": "nodejs-02",
    "number": "02",
    "section": "Fundamentals",
    "question": "What is non-blocking I/O and why is it important?",
    "difficulty": "easy",
    "answer": {
      "simple": "Non-blocking I/O means Node.js does NOT wait for slow operations (reading files, querying databases, calling APIs). It starts the operation, moves on to handle other things, and comes back when the result is ready.",
      "example": "A waiter takes orders from 10 tables, sends them all to the kitchen, and handles whoever's food is ready first. He never stands at one table waiting. Node.js is that waiter — one thread serving thousands of requests at once.",
      "code": "// Blocking — freezes while waiting:\nconst data = fs.readFileSync('bigfile.txt'); // waits here!\nconsole.log('only runs AFTER file is done');\n\n// Non-blocking — moves on immediately:\nfs.readFile('bigfile.txt', (err, data) => {\n  console.log('file is ready now!');\n});\nconsole.log('runs IMMEDIATELY while file loads');"
    }
  },
  {
    "id": "nodejs-03",
    "number": "03",
    "section": "Fundamentals",
    "question": "What is the difference between Node.js and the browser?",
    "difficulty": "easy",
    "answer": {
      "simple": "Both run JavaScript with V8, but they have completely different APIs. The browser has the DOM, window, localStorage. Node.js has the file system, networking, OS access — but no DOM.",
      "example": "<strong>Browser has</strong>: <code>window</code>, <code>document</code>, <code>localStorage</code>, <code>fetch</code>, DOM APIs — all for UI.<br><br>\n      <strong>Node.js has</strong>: <code>global</code> (not window), <code>process</code>, <code>__dirname</code>, <code>require()</code>, <code>fs</code> (file system), <code>http</code>, <code>os</code>, <code>crypto</code> — all for servers.<br><br>\n      Browser: sandboxed — cannot touch your files or system. Node.js: full system access — can read/write files, run commands, connect to databases."
    }
  },
  {
    "id": "nodejs-04",
    "number": "04",
    "section": "Fundamentals",
    "question": "What is the global object in Node.js?",
    "difficulty": "easy",
    "answer": {
      "simple": "In the browser, everything global lives on <code>window</code>. In Node.js, it lives on <code>global</code>. Variables added to <code>global</code> are accessible everywhere in your app — but avoid doing this, it creates messy code.",
      "code": "// Important Node.js globals you use constantly:\n__dirname   // full path to the current file's folder\n__filename  // full path to the current file\nprocess     // info about the running Node.js process\nrequire()   // function to import other modules\nmodule      // info about the current module\nexports     // what this module shares with others\n\n// NOTE: __dirname and __filename do NOT exist in ES modules!\n// In ESM use: new URL('.', import.meta.url).pathname"
    }
  },
  {
    "id": "nodejs-05",
    "number": "05",
    "section": "Fundamentals",
    "question": "What is the process object in Node.js?",
    "difficulty": "medium",
    "answer": {
      "simple": "<code>process</code> is a global object that gives you information and control over the current Node.js process — environment variables, command-line arguments, memory, and the ability to exit cleanly.",
      "code": "process.env.NODE_ENV      // 'production' or 'development'\nprocess.env.PORT          // your custom env variables\nprocess.argv              // command-line args array\nprocess.cwd()             // current working directory\nprocess.pid               // process ID (a number)\nprocess.version           // Node.js version: 'v20.5.0'\nprocess.platform          // 'linux', 'darwin', 'win32'\nprocess.memoryUsage()     // { heapUsed, heapTotal, rss, external }\nprocess.uptime()          // seconds since app started\n\n// Exit the process:\nprocess.exit(0)  // 0 = success\nprocess.exit(1)  // 1 = error\n\n// Catch fatal errors — prevents crash:\nprocess.on('uncaughtException', (err) => {\n  console.error('Fatal error:', err);\n  process.exit(1); // must exit after this!\n});\nprocess.on('unhandledRejection', (reason) => {\n  console.error('Unhandled promise rejection:', reason);\n});"
    }
  },
  {
    "id": "nodejs-06",
    "number": "06",
    "section": "Architecture",
    "question": "What is single-threaded in Node.js and is it a problem?",
    "difficulty": "easy",
    "answer": {
      "simple": "Node.js runs JavaScript on a <strong>single thread</strong> — only one piece of code runs at a time. This is NOT a problem for I/O (files, network, databases) because Node offloads those to the OS. It IS a problem for CPU-heavy work like image processing or math.",
      "example": "90% of web server work is waiting — waiting for the database, waiting for the API, waiting for the file. Node.js hands all that waiting off to the OS and serves other requests in the meantime.<br><br>\n      The only problem: if you do heavy math on the main thread for 2 seconds, ALL other requests are frozen for 2 seconds. Solutions: <strong>Worker Threads</strong>, <strong>Child Processes</strong>, or <strong>Cluster module</strong>."
    }
  },
  {
    "id": "nodejs-07",
    "number": "07",
    "section": "Architecture",
    "question": "What is V8 and what role does it play in Node.js?",
    "difficulty": "easy",
    "answer": {
      "simple": "V8 is Google's JavaScript engine — the same one that runs JavaScript in Chrome. Node.js uses V8 to run your JavaScript code. V8 compiles JavaScript directly to machine code (JIT compilation), which makes Node.js fast.",
      "example": "<strong>V8</strong>: runs your JavaScript, compiles it to machine code.<br>\n      <strong>libuv</strong>: provides the event loop, thread pool, and async I/O (file, network).<br>\n      <strong>Node.js bindings</strong>: connects V8 + libuv and adds built-in modules (fs, http, etc.).<br><br>\n      When you write <code>fs.readFile()</code>, Node.js tells libuv to read the file (in a background thread), and V8 keeps running your other JavaScript while it waits."
    }
  },
  {
    "id": "nodejs-08",
    "number": "08",
    "section": "Architecture",
    "question": "What is libuv and what does it do?",
    "difficulty": "easy",
    "answer": {
      "simple": "libuv is a C library that powers Node.js's async I/O and event loop. It provides a <strong>thread pool</strong> for operations that can't be done async at the OS level — like file system, DNS lookups, and crypto.",
      "example": "The <strong>Event Loop</strong> — the main loop that picks up callbacks and runs them.<br>\n      The <strong>Thread Pool</strong> — 4 threads by default for file I/O, crypto, DNS.<br>\n      OS-level async APIs — epoll (Linux), kqueue (macOS), IOCP (Windows).<br><br>\n      When you call <code>fs.readFile()</code>: libuv hands it to a thread pool thread. That thread blocks (it reads from disk). When done, libuv pushes the callback into the event loop queue. Your JS thread picks it up and runs the callback."
    }
  },
  {
    "id": "nodejs-09",
    "number": "09",
    "section": "Architecture",
    "question": "What is the Event Loop in Node.js?",
    "difficulty": "medium",
    "answer": {
      "simple": "The Event Loop is the heart of Node.js. It continuously checks: \"Is there any work to do?\" It picks up completed async operations (file reads, network responses, timers) and runs their callbacks on the single JavaScript thread.",
      "example": "1. Your code runs synchronously (the call stack).<br>\n      2. Async operations start (setTimeout, fs.readFile, fetch) — handed off to OS/thread pool.<br>\n      3. Node.js is free to run other code while waiting.<br>\n      4. When an async operation completes, its callback is put in a queue.<br>\n      5. The Event Loop checks — is the call stack empty? If yes, pick a callback from the queue and run it.<br>\n      6. Repeat forever until there's nothing left to do."
    }
  },
  {
    "id": "nodejs-10",
    "number": "10",
    "section": "Architecture",
    "question": "What are the phases of the Event Loop?",
    "difficulty": "hard",
    "answer": {
      "simple": "The event loop runs in 6 phases, each with its own queue. It processes all callbacks in one phase before moving to the next. Between each phase, it drains the microtask queue (Promises + nextTick).",
      "example": "1. <strong>timers</strong>: runs <code>setTimeout</code> and <code>setInterval</code> callbacks whose time has expired.<br>\n      2. <strong>pending callbacks</strong>: I/O callbacks deferred from the previous loop iteration.<br>\n      3. <strong>idle, prepare</strong>: internal Node.js use only — you can ignore this.<br>\n      4. <strong>poll</strong>: retrieves new I/O events and runs their callbacks. If nothing to do, waits here for new events.<br>\n      5. <strong>check</strong>: runs <code>setImmediate()</code> callbacks.<br>\n      6. <strong>close callbacks</strong>: runs cleanup callbacks like <code>socket.on('close')</code>.<br><br>\n      <strong>Between every phase</strong>: Node.js runs the microtask queue — all <code>process.nextTick()</code> callbacks first, then all Promise <code>.then()</code> callbacks. These have the highest priority!"
    }
  },
  {
    "id": "nodejs-11",
    "number": "11",
    "section": "Asynchrony",
    "question": "What is the exact execution order: sync → nextTick → Promise → setTimeout → setImmediate?",
    "difficulty": "hard",
    "answer": {
      "simple": "The order is: <strong>synchronous code</strong> → <strong>process.nextTick</strong> → <strong>Promises (.then)</strong> → <strong>setTimeout/setInterval</strong> → <strong>setImmediate</strong>.",
      "example": "Sync code runs first — it's on the call stack, nothing else can run.<br>\n      <code>process.nextTick</code> runs before Promises — it's a special \"micro-microtask\".<br>\n      Promises run — they're microtasks, cleared before returning to the event loop.<br>\n      <code>setTimeout(0)</code> — macrotask, runs in the timers phase.<br>\n      <code>setImmediate</code> — runs in the check phase (after poll), often after setTimeout.",
      "code": "console.log('1 - sync start');\n\nsetTimeout(() => console.log('5 - setTimeout'), 0);\nsetImmediate(() => console.log('6 - setImmediate'));\n\nPromise.resolve().then(() => console.log('3 - Promise'));\nprocess.nextTick(() => console.log('2 - nextTick'));\n\nconsole.log('4 - sync end');\n\n// Output: 1, 4, 2, 3, 5, 6\n// (note: sync first, then nextTick, then Promise,\n//  then macrotasks: setTimeout then setImmediate)"
    }
  },
  {
    "id": "nodejs-12",
    "number": "12",
    "section": "Asynchrony",
    "question": "What is process.nextTick() and when should you use it?",
    "difficulty": "medium",
    "answer": {
      "simple": "<code>process.nextTick()</code> schedules a callback to run <strong>at the end of the current operation</strong>, before the event loop continues — even before Promises. It's the highest priority async callback in Node.js.",
      "example": "✅ Emit events after a constructor returns (so listeners can be attached first).<br>\n      ✅ Throw errors asynchronously after setting up something synchronously.<br>\n      ✅ Ensure a callback runs in a consistent async manner.<br><br>\n      ⚠️ <strong>Warning</strong>: Don't use it recursively — if nextTick keeps scheduling new nextTick calls, the event loop starves. I/O callbacks never run and your server freezes!",
      "code": "console.log('start');\nprocess.nextTick(() => console.log('nextTick'));\nPromise.resolve().then(() => console.log('Promise'));\nconsole.log('end');\n// Output: start → end → nextTick → Promise\n// nextTick runs before Promise!"
    }
  },
  {
    "id": "nodejs-13",
    "number": "13",
    "section": "Asynchrony",
    "question": "What is the difference between process.nextTick() and setImmediate()?",
    "difficulty": "medium",
    "answer": {
      "simple": "Both schedule a callback — but at different points. <code>process.nextTick</code> runs before the event loop continues (highest priority). <code>setImmediate</code> runs in the check phase of the NEXT event loop iteration (after I/O callbacks).",
      "example": "Use <strong>process.nextTick</strong>: when you need something to run before any I/O. Rare — usually only for library internals or error handling patterns.<br><br>\n      Use <strong>setImmediate</strong>: when you want to break up CPU work or defer something to after I/O. Safer — it doesn't starve I/O the way nextTick can.<br><br>\n      The Node.js team recommends <code>setImmediate</code> over <code>process.nextTick</code> in most cases because it's less likely to cause issues."
    }
  },
  {
    "id": "nodejs-14",
    "number": "14",
    "section": "Architecture",
    "question": "What is the Thread Pool in Node.js?",
    "difficulty": "hard",
    "answer": {
      "simple": "Node.js has a background thread pool (managed by libuv) with <strong>4 threads by default</strong>. These threads handle operations that can't be done async at the OS level — like file I/O, DNS lookups, crypto, and zlib compression.",
      "example": "<code>fs.readFile</code>, <code>fs.writeFile</code> — file system operations.<br>\n      <code>crypto.pbkdf2</code>, <code>crypto.scrypt</code>, <code>crypto.randomBytes</code> — crypto hashing.<br>\n      <code>dns.lookup</code> (but NOT <code>dns.resolve</code> — that's async!).<br>\n      <code>zlib</code> — compression and decompression.<br><br>\n      <strong>Performance gotcha</strong>: If 4 bcrypt password hashes run at once, the 5th must wait. Your server has 8 CPU cores doing nothing while 1 thread pool thread is busy. Fix: increase <code>UV_THREADPOOL_SIZE=8</code> environment variable."
    }
  },
  {
    "id": "nodejs-15",
    "number": "15",
    "section": "Modules",
    "question": "What is the CommonJS module system (require/module.exports)?",
    "difficulty": "easy",
    "answer": {
      "simple": "CommonJS is Node.js's built-in module system. Use <code>require()</code> to import code from other files. Use <code>module.exports</code> to share code from a file. This is the default in Node.js — no setup needed.",
      "example": "Node.js caches every module after the first <code>require()</code>. So requiring the same module 10 times only runs its code once — the same object is returned every time. This makes modules act like <strong>singletons</strong> — perfect for database connections!",
      "code": "// math.js — exporting:\nfunction add(a, b) { return a + b; }\nconst PI = 3.14159;\nmodule.exports = { add, PI };\n\n// app.js — importing:\nconst { add, PI } = require('./math');   // your own file\nconst fs = require('fs');                // built-in module\nconst express = require('express');      // npm package\n\n// How require resolves files:\n// './math'    → looks for ./math.js, ./math/index.js\n// 'express'   → looks in node_modules/express\n// 'fs', 'http' → built-in Node.js modules"
    }
  },
  {
    "id": "nodejs-16",
    "number": "16",
    "section": "Modules",
    "question": "What is the difference between module.exports and exports?",
    "difficulty": "medium",
    "answer": {
      "simple": "<code>exports</code> is a shortcut reference that initially points to the same object as <code>module.exports</code>. If you <em>reassign</em> <code>exports</code>, it breaks the connection — <code>module.exports</code> is what actually gets exported.",
      "example": "Adding properties → use <code>exports.thing = value</code> (shortcut is fine).<br>\n      Replacing entirely → use <code>module.exports = value</code>.<br>\n      When in doubt → <strong>always use module.exports</strong>. It always works.",
      "code": "// Adding to the object — both work the same:\nexports.add = (a, b) => a + b;    // ✅\nmodule.exports.add = (a, b) => a + b; // ✅ same thing\n\n// Reassigning — only module.exports works:\nmodule.exports = { add, PI };    // ✅ works\nexports = { add, PI };           // ❌ breaks the link!\n// exports now points to a NEW object\n// module.exports is still {} — nothing gets exported!"
    }
  },
  {
    "id": "nodejs-17",
    "number": "17",
    "section": "Modules",
    "question": "What are ES Modules (import/export) in Node.js?",
    "difficulty": "medium",
    "answer": {
      "simple": "ES Modules are the modern JavaScript standard — using <code>import</code>/<code>export</code> syntax. Node.js supports them from v12+. They're the same syntax used in the browser. Enable them with <code>.mjs</code> extension or <code>\"type\": \"module\"</code> in package.json.",
      "example": "<code>__dirname</code> / <code>__filename</code>: available in CJS, NOT in ESM (use <code>import.meta.url</code>).<br>\n      <code>require()</code>: CJS only. ESM uses <code>import()</code> (dynamic import).<br>\n      Top-level <code>await</code>: ESM only — you can await at the top level without async!<br>\n      Loading: CJS = synchronous. ESM = asynchronous (allows static analysis, tree-shaking).<br>\n      Exports: CJS exports a copy. ESM exports live bindings (the importer sees changes).",
      "code": "// math.mjs — named exports:\nexport const add = (a, b) => a + b;\nexport const PI = 3.14159;\n\n// default export (one per file):\nexport default function multiply(a, b) { return a * b; }\n\n// importing:\nimport multiply, { add, PI } from './math.js';\nimport * as MathUtils from './math.js'; // import all as object\nimport { add as sum } from './math.js'; // rename on import"
    }
  },
  {
    "id": "nodejs-18",
    "number": "18",
    "section": "Fundamentals",
    "question": "What are the built-in (core) modules in Node.js?",
    "difficulty": "medium",
    "answer": {
      "simple": "Node.js ships with built-in modules you can use without installing anything from npm. They cover file system, networking, crypto, path handling, and more.",
      "example": "<code>fs</code> / <code>fs/promises</code> — read, write, delete files and folders.<br>\n      <code>path</code> — join and resolve file paths cross-platform.<br>\n      <code>http</code> / <code>https</code> — create HTTP servers, make HTTP requests.<br>\n      <code>events</code> — EventEmitter class (base for most of Node.js).<br>\n      <code>stream</code> — handle streaming data (Readable, Writable, Transform).<br>\n      <code>crypto</code> — hashing, encryption, random values.<br>\n      <code>os</code> — CPU count, memory, hostname, platform.<br>\n      <code>child_process</code> — run shell commands, other programs.<br>\n      <code>worker_threads</code> — true multi-threading.<br>\n      <code>cluster</code> — run multiple processes on multiple CPU cores.<br>\n      <code>url</code> — parse and format URLs.<br>\n      <code>util</code> — promisify, inspect, and other helpers."
    }
  },
  {
    "id": "nodejs-19",
    "number": "19",
    "section": "Streams",
    "question": "What are streams in Node.js?",
    "difficulty": "medium",
    "answer": {
      "simple": "Streams let you process data piece by piece (in <strong>chunks</strong>) instead of loading all of it into memory at once. This is crucial for large files, video, or real-time data — you process data as it arrives.",
      "example": "Watching Netflix — you don't download the entire 4GB movie before watching. It streams to you chunk by chunk as you watch. Node.js streams work the same: process a 10GB log file chunk by chunk instead of loading 10GB into RAM at once.",
      "code": "const fs = require('fs');\n\n// Without streams — loads entire 2GB file into RAM!\nconst data = fs.readFileSync('2gb-log.txt'); // ❌ crashes!\n\n// With streams — uses fixed small amount of memory:\nconst readStream = fs.createReadStream('2gb-log.txt');\nconst writeStream = fs.createWriteStream('output.txt');\nreadStream.pipe(writeStream); // ✅ handles any file size!"
    }
  },
  {
    "id": "nodejs-20",
    "number": "20",
    "section": "Streams",
    "question": "What is pipe() in streams and how does it work?",
    "difficulty": "medium",
    "answer": {
      "simple": "<code>pipe()</code> connects a Readable stream to a Writable stream — data flows automatically from one to the other. It also handles <strong>backpressure</strong> for you: if the writer is slow, it pauses the reader so memory doesn't overflow.",
      "example": "<code>pipe()</code> doesn't forward errors — if the source errors, the destination keeps open and leaks. <code>pipeline()</code> from <code>stream/promises</code> properly closes all streams when any one errors. Always prefer <code>pipeline()</code> in production code.",
      "code": "const fs = require('fs');\nconst zlib = require('zlib');\n\n// Chain multiple pipes — compress a file:\nfs.createReadStream('large-file.txt')   // read file\n  .pipe(zlib.createGzip())              // compress it\n  .pipe(fs.createWriteStream('large-file.txt.gz')); // write compressed\n\n// Handle errors in pipe chain:\nconst { pipeline } = require('stream/promises');\nawait pipeline(\n  fs.createReadStream('input.txt'),\n  zlib.createGzip(),\n  fs.createWriteStream('output.gz')\n);\n// pipeline() is better than pipe() — handles errors properly!"
    }
  },
  {
    "id": "nodejs-21",
    "number": "21",
    "section": "Streams",
    "question": "What is backpressure in streams and why does it matter?",
    "difficulty": "hard",
    "answer": {
      "simple": "Backpressure happens when data is being produced faster than it can be consumed — the buffer fills up and memory spikes. Streams handle this by signaling \"slow down\" to the producer. <code>pipe()</code> does this automatically.",
      "example": "A fire hose filling a bathtub faster than the drain can empty it — eventually the tub overflows (memory crash). Backpressure is the drain saying \"slow down the hose.\" <code>pipe()</code> handles this automatically: when the write buffer is full, it pauses reading.",
      "code": "// Manual backpressure — what pipe() does internally:\nreadStream.on('data', (chunk) => {\n  const canContinue = writeStream.write(chunk);\n  if (!canContinue) {\n    readStream.pause(); // stop reading — write buffer full!\n  }\n});\nwriteStream.on('drain', () => {\n  readStream.resume(); // write buffer cleared — keep reading!\n});\n\n// Just use pipe() — it handles all of this for you:\nreadStream.pipe(writeStream);"
    }
  },
  {
    "id": "nodejs-22",
    "number": "22",
    "section": "Streams",
    "question": "How do you create a custom Transform stream?",
    "difficulty": "hard",
    "answer": {
      "simple": "Extend the <code>Transform</code> class and implement <code>_transform(chunk, encoding, callback)</code>. This lets you process data as it flows through — like filtering lines, converting formats, or encrypting on the fly.",
      "code": "const { Transform } = require('stream');\n\n// Custom transform: uppercase every line:\nclass UpperCaseTransform extends Transform {\n  _transform(chunk, encoding, callback) {\n    // chunk is a Buffer — convert to string, process, push result:\n    const upperCased = chunk.toString().toUpperCase();\n    this.push(upperCased); // send to the next stream\n    callback(); // signal we're done with this chunk\n  }\n}\n\n// Use it in a pipeline:\nconst { pipeline } = require('stream/promises');\nawait pipeline(\n  fs.createReadStream('input.txt'),\n  new UpperCaseTransform(), // transform in the middle\n  fs.createWriteStream('output.txt')\n);"
    }
  },
  {
    "id": "nodejs-23",
    "number": "23",
    "section": "Events",
    "question": "What is EventEmitter in Node.js?",
    "difficulty": "medium",
    "answer": {
      "simple": "EventEmitter is the core pub/sub system in Node.js. Objects can <strong>emit</strong> named events. Other code can <strong>listen</strong> to those events. Almost everything in Node.js (streams, HTTP server, process) is built on EventEmitter.",
      "code": "const EventEmitter = require('events');\n\nclass OrderService extends EventEmitter {\n  async placeOrder(item) {\n    const order = await saveToDatabase(item);\n    this.emit('orderPlaced', order); // fire the event!\n    return order;\n  }\n}\n\nconst service = new OrderService();\n\n// Subscribe — multiple listeners can listen to same event:\nservice.on('orderPlaced', (order) => sendConfirmationEmail(order));\nservice.on('orderPlaced', (order) => updateInventory(order));\nservice.on('orderPlaced', (order) => notifyWarehouse(order));\n\n// Run only once then auto-removes:\nservice.once('orderPlaced', sendWelcomeBonus);\n\n// Unsubscribe:\nservice.off('orderPlaced', handler);  // modern (Node 10+)\nservice.removeListener('orderPlaced', handler); // older way\n\nawait service.placeOrder('Pizza'); // all 3 listeners fire!"
    }
  },
  {
    "id": "nodejs-24",
    "number": "24",
    "section": "Events",
    "question": "What is the 'error' event and why is it special?",
    "difficulty": "medium",
    "answer": {
      "simple": "The <code>'error'</code> event is special in Node.js. If an EventEmitter emits <code>'error'</code> and nobody is listening — Node.js <strong>throws the error and crashes the process</strong>. Always add an error listener on EventEmitters!",
      "example": "Streams are EventEmitters too. If you forget <code>.on('error', handler)</code> on a stream and a read fails (file not found, network drop), Node.js crashes. With <code>pipeline()</code> this is handled automatically — one more reason to prefer pipeline over manual piping.",
      "code": "const emitter = new EventEmitter();\n\n// DANGEROUS — no error listener:\nemitter.emit('error', new Error('boom'));\n// ❌ Uncaught Error: process crashes!\n\n// SAFE — always handle errors:\nemitter.on('error', (err) => {\n  console.error('Handled:', err.message); // logs, doesn't crash!\n});\nemitter.emit('error', new Error('boom')); // ✅ handled\n\n// This is why you always see:\nserver.on('error', handler);\nstream.on('error', handler);\nsocket.on('error', handler);"
    }
  },
  {
    "id": "nodejs-25",
    "number": "25",
    "section": "Events",
    "question": "What is the maximum number of listeners and memory leak warning?",
    "difficulty": "hard",
    "answer": {
      "simple": "By default, EventEmitter warns if more than <strong>10 listeners</strong> are added to the same event. This is a memory leak detection feature — you probably forgot to remove old listeners in a loop.",
      "code": "const emitter = new EventEmitter();\n\n// Node.js warns after 10 listeners:\nfor (let i = 0; i < 15; i++) {\n  emitter.on('data', handler); // after 10: MaxListenersExceededWarning!\n}\n\n// Fix 1 — increase the limit if intentional:\nemitter.setMaxListeners(20);\nEventEmitter.defaultMaxListeners = 20; // for all emitters\n\n// Fix 2 — remove listeners when done:\nfunction handleData(data) { /* ... */ }\nemitter.on('data', handleData);\n// Later when done:\nemitter.off('data', handleData); // removes THIS specific listener\n\n// Check listener count:\nemitter.listenerCount('data'); // number of listeners for 'data'\nemitter.eventNames();          // ['data', 'error', ...]"
    }
  },
  {
    "id": "nodejs-26",
    "number": "26",
    "section": "Asynchrony",
    "question": "What are callbacks and what is callback hell?",
    "difficulty": "easy",
    "answer": {
      "simple": "A callback is a function you pass to another function, to be called when an async operation is done. Callback hell is when you nest callbacks inside callbacks inside callbacks — creating a hard-to-read \"pyramid of doom.\"",
      "example": "❌ Deep nesting — hard to read and maintain.<br>\n      ❌ Error handling on every callback — repeated code.<br>\n      ❌ Can't use try/catch — errors don't propagate.<br>\n      ❌ Hard to run things in parallel.<br>\n      ✅ Solution: <strong>Promises</strong> and <strong>async/await</strong>.",
      "code": "// Callback hell — nesting makes this unreadable:\ngetUser(id, function(err, user) {\n  if (err) return handleError(err);\n  getPosts(user.id, function(err, posts) {\n    if (err) return handleError(err);\n    getComments(posts[0].id, function(err, comments) {\n      if (err) return handleError(err);\n      // 4 levels deep, 3 error handlers, total mess!\n    });\n  });\n});"
    }
  },
  {
    "id": "nodejs-27",
    "number": "27",
    "section": "Asynchrony",
    "question": "What is util.promisify() and when do you use it?",
    "difficulty": "medium",
    "answer": {
      "simple": "<code>util.promisify()</code> converts an old-style callback function into a Promise-returning function, so you can use it with async/await. Works on any function that follows the Node.js callback convention: <code>(err, result)</code> as the last argument.",
      "code": "const util = require('util');\nconst fs = require('fs');\n\n// Old callback style — can't use await:\nfs.readFile('file.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\n\n// Convert to Promise:\nconst readFile = util.promisify(fs.readFile);\n\n// Now use async/await:\nconst data = await readFile('file.txt', 'utf8');\nconsole.log(data);\n\n// Tip: most Node.js APIs now have a promises version built in:\nconst { readFile } = require('fs/promises');    // CJS\nimport { readFile } from 'node:fs/promises';    // ESM\n// So you often don't even need util.promisify anymore!"
    }
  },
  {
    "id": "nodejs-28",
    "number": "28",
    "section": "Asynchrony",
    "question": "What is the difference between sequential and parallel async operations?",
    "difficulty": "hard",
    "answer": {
      "simple": "<strong>Sequential</strong>: operations run one after another — next starts only after previous finishes. <strong>Parallel</strong>: all operations start at the same time — you wait for all to complete. Parallel is much faster when operations don't depend on each other.",
      "code": "// Sequential — slow! Each waits for the previous (600ms total):\nasync function sequential() {\n  const user  = await fetchUser(1);   // 200ms\n  const posts = await fetchPosts(2);  // 200ms\n  const tags  = await fetchTags(3);   // 200ms\n}\n\n// Parallel — fast! All start at the same time (200ms total):\nasync function parallel() {\n  const [user, posts, tags] = await Promise.all([\n    fetchUser(1),   // starts immediately\n    fetchPosts(2),  // starts immediately\n    fetchTags(3),   // starts immediately\n  ]);\n}\n\n// Parallel with concurrency limit:\n// Don't hammer an API with 1000 requests at once!\nasync function limitedParallel(ids) {\n  const chunks = [];\n  for (let i = 0; i < ids.length; i += 5) {\n    chunks.push(ids.slice(i, i + 5));\n  }\n  const results = [];\n  for (const chunk of chunks) {\n    const chunkResults = await Promise.all(chunk.map(fetchItem));\n    results.push(...chunkResults);\n  }\n  return results;\n}"
    }
  },
  {
    "id": "nodejs-29",
    "number": "29",
    "section": "Asynchrony",
    "question": "How do you handle errors properly with async/await in Node.js?",
    "difficulty": "hard",
    "answer": {
      "simple": "Wrap <code>await</code> calls in <code>try/catch</code>. Async errors behave like synchronous errors inside async functions — catch handles both. The most common mistake is forgetting try/catch and getting unhandled Promise rejections.",
      "code": "// ✅ Correct — try/catch catches async errors:\nasync function getUser(id) {\n  try {\n    const user = await User.findById(id);\n    return user;\n  } catch (err) {\n    throw new Error(`Failed to get user: ${err.message}`);\n  }\n}\n\n// ❌ Common mistake — try/catch doesn't catch async:\nfunction badHandler(req, res) {\n  try {\n    fetchData().then(data => res.json(data)); // .then is async!\n    // if fetchData rejects, try/catch MISSES it!\n  } catch (err) {} // never runs for Promise errors!\n}\n\n// ✅ Fix — await the Promise:\nasync function goodHandler(req, res, next) {\n  try {\n    const data = await fetchData(); // await makes it catchable!\n    res.json(data);\n  } catch (err) {\n    next(err); // pass to Express error handler\n  }\n}\n\n// Useful pattern — wrap to avoid repetitive try/catch:\nconst safe = async (promise) => {\n  try { return [null, await promise]; }\n  catch (e) { return [e, null]; }\n};\nconst [err, data] = await safe(fetchData());\nif (err) return handleError(err);"
    }
  },
  {
    "id": "nodejs-30",
    "number": "30",
    "section": "Asynchrony",
    "question": "What is the race condition problem in async code and how do you fix it?",
    "difficulty": "hard",
    "answer": {
      "simple": "A race condition happens when multiple async operations are in flight and responses arrive out of order — the UI or data can show stale/wrong results. The most common example: typing in a search box, older results arriving after newer ones.",
      "code": "// RACE CONDITION — older query result overwrites newer:\nlet currentResults = null;\n\nasync function search(query) {\n  const results = await fetchResults(query); // async!\n  currentResults = results; // what if an older fetch finishes LAST?\n}\n\n// user types: 're' then 'react'\n// Both fetches start. 'react' resolves first (maybe cached).\n// Then 're' resolves and OVERWRITES with wrong data!\n\n// FIX 1 — cancel old requests with AbortController:\nlet currentController = null;\nasync function search(query) {\n  if (currentController) currentController.abort(); // cancel previous\n  currentController = new AbortController();\n  try {\n    const results = await fetchResults(query, currentController.signal);\n    currentResults = results;\n  } catch (err) {\n    if (err.name === 'AbortError') return; // expected — ignore\n    throw err;\n  }\n}\n\n// FIX 2 — ignore stale responses with a sequence counter:\nlet requestId = 0;\nasync function search(query) {\n  const id = ++requestId;\n  const results = await fetchResults(query);\n  if (id !== requestId) return; // a newer request was made — ignore this\n  currentResults = results;\n}"
    }
  },
  {
    "id": "nodejs-31",
    "number": "31",
    "section": "Express",
    "question": "How does Express.js middleware work?",
    "difficulty": "easy",
    "answer": {
      "simple": "Middleware is a function with three parameters — <code>(req, res, next)</code>. It runs between the request arriving and the response being sent. Each middleware can modify the request, send a response, or call <code>next()</code> to pass control to the next middleware.",
      "example": "Express runs middleware in the order you call <code>app.use()</code>. Error handlers MUST go last. Auth middleware must be placed BEFORE the routes it protects. If you define a route before adding body parsing middleware, the body won't be available.",
      "code": "// Middleware signature:\nfunction logger(req, res, next) {\n  console.log(`${req.method} ${req.url}`);\n  next(); // MUST call next() or the request hangs forever!\n}\n\nfunction auth(req, res, next) {\n  const token = req.headers.authorization;\n  if (!token) return res.status(401).json({ error: 'No token' });\n  req.user = verifyToken(token); // attach data to request\n  next();\n}\n\n// Apply globally — runs for every request:\napp.use(express.json()); // parse JSON bodies\napp.use(logger);\n\n// Apply to specific routes only:\napp.get('/profile', auth, (req, res) => {\n  res.json(req.user); // auth middleware added this!\n});\n\n// Error-handling middleware — MUST have 4 parameters:\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(err.status || 500).json({ error: err.message });\n});"
    }
  },
  {
    "id": "nodejs-32",
    "number": "32",
    "section": "Express",
    "question": "What is the exact order Express executes middleware and routes?",
    "difficulty": "medium",
    "answer": {
      "simple": "Express runs code in the exact order it's registered. Every call to <code>app.use()</code>, <code>app.get()</code>, etc. adds to the stack. The request travels through them one by one until a response is sent or error handler is reached.",
      "code": "// Request travels top to bottom:\napp.use(express.json());    // 1. parse body\napp.use(cors());            // 2. CORS headers\napp.use(logger);            // 3. log the request\napp.use(authenticate);      // 4. verify JWT token\n\napp.get('/users', handler); // 5. handle GET /users\napp.post('/users', handler);// 5. handle POST /users\n\n// Error handler — LAST, after all routes:\napp.use((err, req, res, next) => res.status(500).json({ err }));\n\n// If no route matches — 404 handler (also last):\napp.use((req, res) => res.status(404).json({ error: 'Not Found' }));\n\n// Chain stops when:\n// - res.send/json/end is called (response sent)\n// - next(err) is called (jumps to error handler)\n// - next() is never called (request hangs!)"
    }
  },
  {
    "id": "nodejs-33",
    "number": "33",
    "section": "Express",
    "question": "How do you handle errors globally in an Express app?",
    "difficulty": "hard",
    "answer": {
      "simple": "Express has a special error-handling middleware with 4 parameters <code>(err, req, res, next)</code>. Any call to <code>next(err)</code> or an unhandled error in async code jumps straight to this handler. Place it LAST after all routes.",
      "code": "// Async route wrapper — avoids try/catch in every route:\nconst asyncHandler = fn => (req, res, next) =>\n  Promise.resolve(fn(req, res, next)).catch(next);\n\n// Clean routes — no try/catch needed:\napp.get('/users/:id', asyncHandler(async (req, res) => {\n  const user = await User.findById(req.params.id);\n  if (!user) {\n    const err = new Error('User not found');\n    err.status = 404;\n    throw err; // asyncHandler catches and calls next(err)\n  }\n  res.json(user);\n}));\n\n// Custom error class for structured errors:\nclass AppError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.status = statusCode;\n    this.isOperational = true; // mark as handled error\n  }\n}\n\n// Global error handler — MUST be last:\napp.use((err, req, res, next) => {\n  const status = err.status || 500;\n  // Don't leak stack traces to production:\n  const message = process.env.NODE_ENV === 'production' && status === 500\n    ? 'Internal Server Error'\n    : err.message;\n  console.error(err); // log full error with stack\n  res.status(status).json({ error: message });\n});"
    }
  },
  {
    "id": "nodejs-34",
    "number": "34",
    "section": "Express",
    "question": "What is the difference between app.use() and app.get()/post()/put()/delete()?",
    "difficulty": "medium",
    "answer": {
      "simple": "<code>app.use()</code> matches <strong>any HTTP method</strong> and <strong>any path starting with</strong> the prefix. <code>app.get/post/put/delete()</code> match only <strong>that specific method</strong> and an <strong>exact path</strong>.",
      "code": "app.use('/api', router);     // matches ALL methods: GET /api, POST /api/users...\napp.use(logger);             // matches everything (no path = all paths)\n\napp.get('/users', handler);  // only GET /users exactly\napp.post('/users', handler); // only POST /users exactly\n\n// Router — a mini Express app for grouping routes:\nconst router = express.Router();\nrouter.get('/', getAll);      // GET /api/users (when mounted at /api/users)\nrouter.post('/', create);     // POST /api/users\nrouter.get('/:id', getOne);   // GET /api/users/42\nrouter.put('/:id', update);   // PUT /api/users/42\nrouter.delete('/:id', remove);// DELETE /api/users/42\n\napp.use('/api/users', router);"
    }
  },
  {
    "id": "nodejs-35",
    "number": "35",
    "section": "Fundamentals",
    "question": "What is the Buffer class and when do you use it?",
    "difficulty": "medium",
    "answer": {
      "simple": "A Buffer is a fixed-size chunk of raw binary data (bytes). Node.js uses it to handle binary data — like image files, network packets, or encrypted data — before converting to strings.",
      "code": "// Create buffers:\nconst buf1 = Buffer.from('Hello', 'utf8');     // from string\nconst buf2 = Buffer.from([0x48, 0x65, 0x6c]);  // from byte array\nconst buf3 = Buffer.alloc(10);                 // 10 zero bytes\nconst buf4 = Buffer.allocUnsafe(10);           // 10 uninitialized bytes (faster)\n\n// Convert buffer to string:\nbuf1.toString('utf8');   // \"Hello\"\nbuf1.toString('hex');    // \"48656c6c6f\"\nbuf1.toString('base64'); // \"SGVsbG8=\"\n\n// Info:\nbuf1.length;  // 5 bytes\nbuf1[0];      // 72 (ASCII code of 'H')\n\n// Buffers are what you get from streams by default:\nfs.createReadStream('photo.jpg').on('data', (chunk) => {\n  // chunk is a Buffer of raw bytes!\n  console.log(chunk instanceof Buffer); // true\n});"
    }
  },
  {
    "id": "nodejs-36",
    "number": "36",
    "section": "Fundamentals",
    "question": "What is the path module and why do you always need it?",
    "difficulty": "medium",
    "answer": {
      "simple": "The <code>path</code> module builds file paths correctly for every operating system. Windows uses backslashes (<code>\\</code>), Mac/Linux use forward slashes (<code>/</code>). <code>path</code> handles this automatically — never manually concatenate paths with string concatenation!",
      "code": "const path = require('path');\n\n// ALWAYS use path.join — handles OS differences:\npath.join(__dirname, 'public', 'images', 'logo.png');\n// \"/home/user/app/public/images/logo.png\" (Linux)\n// \"C:\\Users\\user\\app\\public\\images\\logo.png\" (Windows)\n\n// ❌ Never do this — breaks on Windows!\n__dirname + '/public/' + 'logo.png'; // breaks!\n\n// Resolve — creates absolute path from cwd:\npath.resolve('uploads', 'photo.jpg');\n// \"/home/user/app/uploads/photo.jpg\"\n\n// Parse parts:\npath.basename('/home/user/photo.jpg'); // \"photo.jpg\"\npath.dirname('/home/user/photo.jpg');  // \"/home/user\"\npath.extname('/home/user/photo.jpg');  // \".jpg\"\npath.parse('/home/user/photo.jpg');\n// { root:'/', dir:'/home/user', base:'photo.jpg', ext:'.jpg', name:'photo' }"
    }
  },
  {
    "id": "nodejs-37",
    "number": "37",
    "section": "Performance",
    "question": "What is the Cluster module and how does it use multiple CPU cores?",
    "difficulty": "hard",
    "answer": {
      "simple": "The Cluster module lets you run <strong>multiple Node.js processes</strong> — one per CPU core. A master process manages worker processes. Each worker runs your full app and handles requests independently. This multiplies throughput linearly with core count.",
      "example": "<code>pm2 start app.js -i max</code> — starts one worker per CPU automatically, with auto-restart, logging, zero-downtime reload. PM2 is much easier than managing raw Cluster code. Use Cluster only if you need custom logic between master and workers.",
      "code": "const cluster = require('cluster');\nconst os = require('os');\n\nif (cluster.isPrimary) {\n  const numCPUs = os.cpus().length;\n  console.log(`Master ${process.pid} — spawning ${numCPUs} workers`);\n\n  // One worker per CPU core:\n  for (let i = 0; i < numCPUs; i++) cluster.fork();\n\n  // Auto-restart crashed workers:\n  cluster.on('exit', (worker, code) => {\n    console.log(`Worker ${worker.pid} died — restarting`);\n    cluster.fork();\n  });\n} else {\n  // Each worker is a fully independent Express app:\n  const app = require('./app');\n  app.listen(3000);\n  console.log(`Worker ${process.pid} started`);\n}"
    }
  },
  {
    "id": "nodejs-38",
    "number": "38",
    "section": "Performance",
    "question": "What are Worker Threads and how are they different from Cluster?",
    "difficulty": "hard",
    "answer": {
      "simple": "Worker Threads run JavaScript in <strong>true separate threads</strong> within the same process — perfect for CPU-intensive tasks that would block the main thread. Cluster creates separate <strong>processes</strong>.",
      "example": "<strong>Cluster</strong>: Multiple processes. Separate memory. For scaling HTTP servers — each process handles requests independently. No shared memory.<br><br>\n      <strong>Worker Threads</strong>: Multiple threads. Can share memory (SharedArrayBuffer). For CPU-heavy work within one process — image processing, crypto, data analysis.",
      "code": "// main.js — offload heavy work to a thread:\nconst { Worker } = require('worker_threads');\n\napp.get('/calculate', async (req, res) => {\n  const result = await new Promise((resolve, reject) => {\n    const worker = new Worker('./heavy.js', {\n      workerData: { input: req.query.n }\n    });\n    worker.on('message', resolve);\n    worker.on('error', reject);\n  });\n  res.json({ result }); // main thread stayed responsive!\n});\n\n// heavy.js — runs in a separate thread:\nconst { workerData, parentPort } = require('worker_threads');\nlet sum = 0;\nfor (let i = 0; i < workerData.input; i++) sum += i; // heavy CPU work!\nparentPort.postMessage(sum); // send back to main thread"
    }
  },
  {
    "id": "nodejs-39",
    "number": "39",
    "section": "Performance",
    "question": "What causes memory leaks in Node.js and how do you prevent them?",
    "difficulty": "hard",
    "answer": {
      "simple": "A memory leak is when objects that are no longer needed stay in memory — because something still holds a reference to them. Over time, the process uses more RAM until it slows or crashes.",
      "example": "1. <strong>Event listeners not removed</strong>: Adding listeners in a loop without removing. Fix: always <code>emitter.off(event, handler)</code> when done.<br>\n      2. <strong>Timers not cleared</strong>: <code>setInterval</code> keeps running after its component is gone. Fix: <code>clearInterval(id)</code> in cleanup.<br>\n      3. <strong>Growing in-memory caches</strong>: unbounded <code>Map</code> or <code>Array</code> that grows forever. Fix: use size limits + eviction, or WeakMap.<br>\n      4. <strong>Closures holding large data</strong>: function captures a huge object it no longer needs. Fix: null out large references when done.<br>\n      5. <strong>Global variables accumulating data</strong>: accidental global variables. Fix: strict mode, proper scoping.",
      "code": "// Detect leaks:\nconsole.log(process.memoryUsage());\n// { heapUsed: 12MB, heapTotal: 20MB, rss: 45MB, external: 1MB }\n\n// Monitor over time — if heapUsed keeps growing → leak!\n\n// Bounded cache — prevents unbounded growth:\nconst cache = new Map();\nconst MAX = 1000;\nfunction addToCache(key, value) {\n  if (cache.size >= MAX) {\n    const firstKey = cache.keys().next().value;\n    cache.delete(firstKey); // evict oldest\n  }\n  cache.set(key, value);\n}"
    }
  },
  {
    "id": "nodejs-40",
    "number": "40",
    "section": "Performance",
    "question": "What is graceful shutdown and why is it critical?",
    "difficulty": "hard",
    "answer": {
      "simple": "Graceful shutdown means stopping the server cleanly — finishing all in-progress requests, closing database connections, and releasing resources — before the process exits. Without it, active requests get dropped and data can be corrupted.",
      "example": "Kubernetes/Docker sends SIGTERM before force-killing a process. Without graceful shutdown: ongoing database transactions are aborted, active HTTP requests get connection reset errors, file writes are incomplete. With graceful shutdown: users get their responses, data stays consistent.",
      "code": "const server = app.listen(3000);\n\nasync function shutdown(signal) {\n  console.log(`${signal} received — shutting down...`);\n\n  // Step 1: Stop accepting new requests:\n  server.close(async () => {\n    console.log('HTTP server closed');\n    // Step 2: Close database connections:\n    await mongoose.connection.close();\n    await pgPool.end();\n    // Step 3: Close other connections:\n    await redisClient.quit();\n    await bullWorker.close();\n    console.log('All connections closed');\n    process.exit(0);\n  });\n\n  // Step 4: Force exit if shutdown takes too long:\n  setTimeout(() => {\n    console.error('Forcing exit after 30s timeout');\n    process.exit(1);\n  }, 30_000);\n}\n\n// Listen for shutdown signals:\nprocess.on('SIGTERM', () => shutdown('SIGTERM')); // Docker/k8s stop\nprocess.on('SIGINT', () => shutdown('SIGINT'));   // Ctrl+C"
    }
  },
  {
    "id": "nodejs-41",
    "number": "41",
    "section": "Auth",
    "question": "How does JWT authentication work in Node.js?",
    "difficulty": "medium",
    "answer": {
      "simple": "A JWT (JSON Web Token) is a signed token containing user info. After login, the server creates a JWT and sends it to the client. The client sends it back with every request. The server verifies the signature — no database lookup needed.",
      "code": "const jwt = require('jsonwebtoken');\nconst SECRET = process.env.JWT_SECRET; // keep this secret!\n\n// LOGIN — create the token:\napp.post('/login', async (req, res) => {\n  const user = await User.findOne({ email: req.body.email });\n  const ok = await bcrypt.compare(req.body.password, user.password);\n  if (!ok) return res.status(401).json({ error: 'Wrong credentials' });\n\n  const token = jwt.sign(\n    { userId: user._id, email: user.email, role: user.role },\n    SECRET,\n    { expiresIn: '7d' }\n  );\n  res.json({ token });\n});\n\n// AUTH MIDDLEWARE — verify on every protected request:\nfunction authenticate(req, res, next) {\n  const token = req.headers.authorization?.replace('Bearer ', '');\n  if (!token) return res.status(401).json({ error: 'No token' });\n  try {\n    req.user = jwt.verify(token, SECRET); // throws if invalid/expired!\n    next();\n  } catch (err) {\n    res.status(401).json({ error: 'Invalid or expired token' });\n  }\n}\n\n// PROTECTED ROUTE:\napp.get('/profile', authenticate, (req, res) => {\n  res.json({ user: req.user }); // jwt.verify decoded payload\n});"
    }
  },
  {
    "id": "nodejs-42",
    "number": "42",
    "section": "Auth",
    "question": "How do you hash passwords correctly in Node.js?",
    "difficulty": "medium",
    "answer": {
      "simple": "Use <strong>bcrypt</strong>. Never store plain text passwords. bcrypt hashes with salt (prevents rainbow tables) and is intentionally slow (prevents brute force). Always hash on register, compare on login.",
      "example": "SHA256 is designed to be fast (hashes billions per second). An attacker can try every word in a dictionary instantly. bcrypt is deliberately slow — 100ms per hash. Even with GPUs, brute force takes centuries. Cost factor 12 means: 2^12 = 4096 iterations. If hardware gets faster, increase the rounds!",
      "code": "const bcrypt = require('bcrypt');\nconst SALT_ROUNDS = 12; // 10-12 is standard — higher = slower\n\n// REGISTER — hash before saving:\nasync function register(email, plainPassword) {\n  const hash = await bcrypt.hash(plainPassword, SALT_ROUNDS);\n  // \"$2b$12$...\" — this is what goes in the database\n  await User.create({ email, password: hash });\n}\n\n// LOGIN — compare, never dehash:\nasync function login(email, plainPassword) {\n  const user = await User.findOne({ email });\n  if (!user) throw new Error('User not found');\n  const match = await bcrypt.compare(plainPassword, user.password);\n  if (!match) throw new Error('Wrong password');\n  return user;\n}"
    }
  },
  {
    "id": "nodejs-43",
    "number": "43",
    "section": "Auth",
    "question": "What are the most important security practices for Node.js?",
    "difficulty": "hard",
    "answer": {
      "simple": "Security in Node.js is about layering defenses — input validation, proper headers, rate limiting, secrets management, and keeping dependencies updated.",
      "example": "1. <strong>Validate all input</strong>: Use Joi or Zod. Never trust client data.<br>\n      2. <strong>Helmet.js</strong>: Sets 15+ security HTTP headers in one line.<br>\n      3. <strong>Rate limiting</strong>: 5 login attempts per 15 min. Use express-rate-limit.<br>\n      4. <strong>HTTPS only</strong>: Never serve over plain HTTP in production.<br>\n      5. <strong>Parameterized queries</strong>: Never build SQL/queries with string concatenation — use ORM or placeholders.<br>\n      6. <strong>Secrets in environment variables</strong>: Never commit .env or API keys. Use secret managers in production.<br>\n      7. <strong>npm audit</strong>: Run weekly. Fix vulnerabilities in dependencies.<br>\n      8. <strong>Don't run as root</strong>: Create a non-root user for your Node.js process in production.",
      "code": "const helmet = require('helmet');\nconst rateLimit = require('express-rate-limit');\n\napp.use(helmet()); // sets 15 security headers instantly!\n\napp.use('/api/auth', rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 5,                    // 5 attempts max\n  message: { error: 'Too many login attempts' }\n}));"
    }
  },
  {
    "id": "nodejs-44",
    "number": "44",
    "section": "Auth",
    "question": "What is CORS and how do you configure it in Node.js?",
    "difficulty": "medium",
    "answer": {
      "simple": "CORS (Cross-Origin Resource Sharing) is a browser security rule that blocks your frontend from calling an API on a different domain — unless the API explicitly says it's allowed. You configure this on the Node.js server.",
      "example": "<code>app.use(cors())</code> with no options allows ALL origins — any website on the internet can call your API! Always specify exactly which origins you trust.",
      "code": "const cors = require('cors');\n\n// Allow specific origins only (production):\napp.use(cors({\n  origin: ['https://myapp.com', 'https://admin.myapp.com'],\n  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],\n  allowedHeaders: ['Content-Type', 'Authorization'],\n  credentials: true, // allow cookies / Authorization header\n}));\n\n// Dynamic origin check:\napp.use(cors({\n  origin: (origin, callback) => {\n    const allowed = ['https://myapp.com', 'https://app2.com'];\n    if (!origin || allowed.includes(origin)) {\n      callback(null, true); // allow\n    } else {\n      callback(new Error('Not allowed by CORS'));\n    }\n  }\n}));"
    }
  },
  {
    "id": "nodejs-45",
    "number": "45",
    "section": "Database",
    "question": "What is connection pooling and why is it critical?",
    "difficulty": "medium",
    "answer": {
      "simple": "Opening a fresh database connection for every request is slow (50-200ms) and resource-intensive. <strong>Connection pooling</strong> keeps a set of open connections ready to reuse — no wait time, much faster.",
      "example": "Summoning an Uber for every trip vs having 10 taxis sitting outside your building. The taxis (pool) are always ready — no 5-minute wait for a new car. Connection pooling is the fleet of pre-warmed database connections.",
      "code": "const { Pool } = require('pg');\n\nconst pool = new Pool({\n  connectionString: process.env.DATABASE_URL,\n  max: 10,          // max 10 connections in the pool\n  min: 2,           // keep at least 2 warm at all times\n  idleTimeoutMillis: 30000, // close idle connections after 30s\n  connectionTimeoutMillis: 2000, // error if can't get connection in 2s\n});\n\n// Uses a connection from pool, returns it when done:\nconst result = await pool.query('SELECT * FROM users WHERE id = $1', [1]);\n\n// Mongoose also pools connections — the default is 5:\nawait mongoose.connect(uri, { maxPoolSize: 10 });\n\n// ALWAYS close pool on shutdown:\nprocess.on('SIGTERM', async () => {\n  await pool.end();\n  process.exit(0);\n});"
    }
  },
  {
    "id": "nodejs-46",
    "number": "46",
    "section": "Database",
    "question": "What is the N+1 query problem and how do you fix it?",
    "difficulty": "medium",
    "answer": {
      "simple": "The N+1 problem: you fetch N records, then make 1 extra database query for EACH record to get related data. 100 users = 101 queries instead of 2. This is a silent performance killer in Node.js apps.",
      "code": "// N+1 PROBLEM — 1 + N queries:\nconst users = await User.find();   // 1 query\nfor (const user of users) {\n  user.posts = await Post.find({ userId: user._id }); // N queries!\n}\n// 100 users = 101 queries! Slow!\n\n// FIX 1 — Mongoose populate (2 queries total):\nconst users = await User.find().populate('posts');\n\n// FIX 2 — batch load manually (2 queries total):\nconst users = await User.find();\nconst ids = users.map(u => u._id);\nconst posts = await Post.find({ userId: { $in: ids } }); // 1 query for all!\n\n// Group posts by userId:\nconst postMap = posts.reduce((map, post) => {\n  (map[post.userId] ??= []).push(post);\n  return map;\n}, {});\n\nusers.forEach(user => { user.posts = postMap[user._id] || []; });\n// 2 queries total ✅"
    }
  },
  {
    "id": "nodejs-47",
    "number": "47",
    "section": "Performance",
    "question": "What is caching and how do you implement it with Redis?",
    "difficulty": "hard",
    "answer": {
      "simple": "Caching stores frequently accessed data in fast memory so you don't hit the database every time. Redis is the standard caching layer in Node.js — it's in-memory (fast!) and supports TTL (automatic expiry).",
      "code": "const Redis = require('ioredis');\nconst redis = new Redis(process.env.REDIS_URL);\n\n// Cache-aside pattern (most common):\nasync function getUser(id) {\n  // 1. Check cache first:\n  const cached = await redis.get(`user:${id}`);\n  if (cached) return JSON.parse(cached); // cache hit — fast!\n\n  // 2. Cache miss — fetch from database:\n  const user = await User.findById(id);\n  if (!user) return null;\n\n  // 3. Store in cache with 5-minute expiry:\n  await redis.setex(`user:${id}`, 300, JSON.stringify(user));\n  return user;\n}\n\n// When user is updated — invalidate the cache!\nasync function updateUser(id, data) {\n  const user = await User.findByIdAndUpdate(id, data, { new: true });\n  await redis.del(`user:${id}`); // ❌ stale cache removed!\n  return user;\n}\n\n// Useful Redis commands:\nawait redis.set('key', 'value');          // set\nawait redis.get('key');                   // get\nawait redis.setex('key', 300, 'value');   // set with 5-min TTL\nawait redis.del('key');                   // delete\nawait redis.ttl('key');                   // remaining lifetime in seconds"
    }
  },
  {
    "id": "nodejs-48",
    "number": "48",
    "section": "Database",
    "question": "What are database transactions and when do you need them?",
    "difficulty": "hard",
    "answer": {
      "simple": "A transaction groups multiple database operations so they either ALL succeed or ALL fail (rollback). Critical for operations that must be atomic — like transferring money, where deducting and crediting must both succeed or neither should.",
      "code": "// MongoDB transaction with Mongoose:\nconst session = await mongoose.startSession();\nsession.startTransaction();\n\ntry {\n  // Both operations are part of the SAME transaction:\n  await Account.updateOne(\n    { userId: senderId },\n    { $inc: { balance: -amount } },\n    { session }\n  );\n  await Account.updateOne(\n    { userId: receiverId },\n    { $inc: { balance: +amount } },\n    { session }\n  );\n  await session.commitTransaction(); // both succeed — commit!\n  console.log('Transfer complete');\n} catch (error) {\n  await session.abortTransaction(); // any failure — rollback!\n  console.log('Transfer failed — rolled back');\n  throw error;\n} finally {\n  session.endSession();\n}\n// Without transaction: if server crashes after deducting but before\n// crediting → money disappears! Transaction prevents this."
    }
  },
  {
    "id": "nodejs-49",
    "number": "49",
    "section": "Fundamentals",
    "question": "What is the child_process module and when do you use it?",
    "difficulty": "hard",
    "answer": {
      "simple": "The <code>child_process</code> module lets you spawn other programs from Node.js — run shell commands, execute Python scripts, or start other Node processes. It's how Node.js reaches outside its own environment.",
      "example": "<code>exec</code>: runs shell command, buffers output (good for small commands, vulnerable to shell injection with user input!).<br>\n      <code>spawn</code>: runs command directly, streams output (good for long output, no shell injection risk).<br>\n      <code>fork</code>: only for Node.js files, has built-in 2-way messaging via <code>process.send()</code>.",
      "code": "const { exec, spawn, fork } = require('child_process');\n\n// exec — run command, buffer all output (for small output):\nconst { promisify } = require('util');\nconst execAsync = promisify(exec);\nconst { stdout } = await execAsync('git log --oneline -5');\nconsole.log(stdout);\n\n// spawn — stream output (for large output or long-running):\nconst ls = spawn('ls', ['-la', '/home']);\nls.stdout.on('data', d => process.stdout.write(d));\nls.on('close', code => console.log(`Exited with code ${code}`));\n\n// fork — specifically for Node.js child processes, has IPC:\nconst child = fork('./worker.js');\nchild.send({ task: 'heavy-compute', data: bigArray });\nchild.on('message', (result) => console.log('Done:', result));"
    }
  },
  {
    "id": "nodejs-50",
    "number": "50",
    "section": "Architecture",
    "question": "What is AsyncLocalStorage and why is it useful?",
    "difficulty": "hard",
    "answer": {
      "simple": "<code>AsyncLocalStorage</code> stores data that follows an async chain automatically — like a request ID or user session — without passing it through every function call. It's how you associate data with a specific request across the entire async chain.",
      "code": "const { AsyncLocalStorage } = require('async_hooks');\nconst requestStorage = new AsyncLocalStorage();\n\n// Middleware — attach a request ID to the context:\napp.use((req, res, next) => {\n  const requestId = crypto.randomUUID();\n  requestStorage.run({ requestId, userId: req.user?.id }, () => {\n    next(); // everything async inside this runs with this context!\n  });\n});\n\n// Deep inside a service or utility — no need to pass requestId!\nfunction logMessage(message) {\n  const ctx = requestStorage.getStore(); // get the current context\n  console.log(`[${ctx?.requestId}] [user:${ctx?.userId}] ${message}`);\n}\n\n// Without AsyncLocalStorage, you'd pass requestId to every function:\n// fetchUser(id, requestId) → getProfile(userId, requestId) → log(requestId)\n// Messy! AsyncLocalStorage eliminates this prop-drilling for async context."
    }
  },
  {
    "id": "nodejs-51",
    "number": "51",
    "section": "Scalability",
    "question": "What are job queues and why are they essential?",
    "difficulty": "hard",
    "answer": {
      "simple": "A job queue offloads slow or heavy tasks (emails, image resizing, PDF generation) to background workers — so your API responds instantly without waiting. The API adds a job to the queue and returns immediately. Workers process jobs in the background.",
      "example": "Welcome/notification emails, password reset emails, image/video processing, PDF generation, data imports, payment webhooks, sending bulk notifications.",
      "code": "// Using BullMQ (backed by Redis):\nconst { Queue, Worker } = require('bullmq');\nconst connection = { host: 'localhost', port: 6379 };\n\n// In your API route — add job and respond immediately:\nconst emailQueue = new Queue('emails', { connection });\n\napp.post('/register', async (req, res) => {\n  const user = await User.create(req.body);\n\n  // Don't wait for email — just queue it!\n  await emailQueue.add('welcome', {\n    to: user.email,\n    name: user.name\n  });\n\n  res.status(201).json({ user }); // responds in <10ms!\n});\n\n// Separate worker process — runs in background:\nconst worker = new Worker('emails', async (job) => {\n  if (job.name === 'welcome') {\n    await sendWelcomeEmail(job.data.to, job.data.name);\n  }\n}, { connection });\n\nworker.on('completed', job => console.log(`Email sent: ${job.id}`));\nworker.on('failed', (job, err) => console.error(`Failed: ${err.message}`));"
    }
  },
  {
    "id": "nodejs-52",
    "number": "52",
    "section": "Real-time",
    "question": "What is WebSocket and how do you implement real-time features?",
    "difficulty": "medium",
    "answer": {
      "simple": "WebSocket is a protocol for two-way real-time communication — both client and server can send messages anytime without re-requesting. Unlike HTTP (client asks, server answers), WebSocket keeps the connection permanently open.",
      "example": "Live chat apps, collaborative document editing (Google Docs style), live dashboards (stock prices, sports scores), multiplayer games, notifications, live code collaboration.",
      "code": "// Using Socket.IO (easier, handles fallbacks):\nconst { Server } = require('socket.io');\nconst httpServer = require('http').createServer(app);\nconst io = new Server(httpServer, { cors: { origin: '*' } });\n\nio.on('connection', (socket) => {\n  console.log(`Connected: ${socket.id}`);\n\n  // Receive messages from THIS client:\n  socket.on('chat:send', ({ room, message }) => {\n    // Send to everyone in the room:\n    io.to(room).emit('chat:message', {\n      from: socket.id, message, time: Date.now()\n    });\n  });\n\n  // Joining rooms:\n  socket.on('room:join', (room) => {\n    socket.join(room);\n    socket.to(room).emit('user:joined', socket.id);\n  });\n\n  socket.on('disconnect', () => {\n    console.log(`Disconnected: ${socket.id}`);\n  });\n});"
    }
  },
  {
    "id": "nodejs-53",
    "number": "53",
    "section": "Performance",
    "question": "What is rate limiting and how do you implement it?",
    "difficulty": "medium",
    "answer": {
      "simple": "Rate limiting restricts how many requests a client can make in a time window. It protects against DDoS attacks, API abuse, and brute-force login attempts.",
      "code": "const rateLimit = require('express-rate-limit');\n\n// General API rate limit:\napp.use('/api/', rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100,\n  standardHeaders: true, // send RateLimit-* headers\n  message: { error: 'Too many requests, try again in 15 minutes' }\n}));\n\n// Strict limit for auth endpoints:\napp.use('/api/auth', rateLimit({\n  windowMs: 15 * 60 * 1000,\n  max: 5, // only 5 login attempts per 15 min!\n  skipSuccessfulRequests: true, // don't count successful logins\n}));\n\n// For multiple server instances — use Redis store:\nconst RedisStore = require('rate-limit-redis');\napp.use(rateLimit({\n  store: new RedisStore({ sendCommand: (...args) => redis.call(...args) }),\n  windowMs: 15 * 60 * 1000,\n  max: 100\n  // This counts requests across ALL server instances!\n}));"
    }
  },
  {
    "id": "nodejs-54",
    "number": "54",
    "section": "Scalability",
    "question": "How do you schedule recurring tasks (cron jobs) in Node.js?",
    "difficulty": "medium",
    "answer": {
      "simple": "Use <strong>node-cron</strong> to schedule tasks — clean up expired sessions, send daily reports, sync data every hour. The cron syntax defines when the task runs.",
      "example": "If you have 4 server instances (Cluster), your cron job runs on ALL 4 — sending the email 4 times! Fix: use BullMQ with <code>repeat</code> option (Redis ensures only one instance runs it), or use a distributed lock with Redis.",
      "code": "const cron = require('node-cron');\n\n// Cron syntax: second  minute  hour  day  month  weekday\n//                 *      *      *     *     *       *\n\n// Every day at midnight:\ncron.schedule('0 0 * * *', async () => {\n  await deleteExpiredSessions();\n  await cleanupOldLogs();\n});\n\n// Every Monday at 9am:\ncron.schedule('0 9 * * 1', async () => {\n  await generateWeeklyReport();\n  await sendReportEmails();\n});\n\n// Every 30 seconds:\ncron.schedule('*/30 * * * * *', () => {\n  checkSystemHealth();\n});"
    }
  },
  {
    "id": "nodejs-55",
    "number": "55",
    "section": "Architecture",
    "question": "What is input validation and how do you do it properly?",
    "difficulty": "medium",
    "answer": {
      "simple": "Always validate user input before using it — never trust what comes from the client. Use <strong>Joi</strong> or <strong>Zod</strong> to define a schema and validate against it. Invalid data returns a 400 error before it touches your business logic or database.",
      "code": "const Joi = require('joi');\n\nconst createUserSchema = Joi.object({\n  name: Joi.string().min(2).max(50).required(),\n  email: Joi.string().email().required(),\n  age: Joi.number().integer().min(0).max(120),\n  role: Joi.string().valid('user', 'admin').default('user')\n});\n\n// Validation middleware factory:\nfunction validate(schema) {\n  return (req, res, next) => {\n    const { error, value } = schema.validate(req.body, {\n      abortEarly: false,  // return ALL errors, not just the first\n      stripUnknown: true  // remove any fields not in schema!\n    });\n    if (error) {\n      return res.status(400).json({\n        error: 'Validation failed',\n        details: error.details.map(d => d.message)\n      });\n    }\n    req.body = value; // use the cleaned, validated data\n    next();\n  };\n}\n\napp.post('/users', validate(createUserSchema), createUser);"
    }
  },
  {
    "id": "nodejs-56",
    "number": "56",
    "section": "Architecture",
    "question": "What is the Repository Pattern and why use it?",
    "difficulty": "hard",
    "answer": {
      "simple": "The Repository Pattern separates your business logic from data access code. Instead of calling the ORM/database directly in your service, you go through a repository class. This makes testing easy (inject a fake repository) and swapping databases painless.",
      "code": "// Repository — all database operations for User:\nclass UserRepository {\n  async findById(id)          { return User.findById(id).lean(); }\n  async findByEmail(email)    { return User.findOne({ email }).lean(); }\n  async create(data)          { return User.create(data); }\n  async update(id, data)      { return User.findByIdAndUpdate(id, data, { new: true }); }\n  async delete(id)            { return User.findByIdAndDelete(id); }\n}\n\n// Service — business logic, uses repository:\nclass UserService {\n  constructor(userRepo) {\n    this.userRepo = userRepo; // injected — easy to mock in tests!\n  }\n  async register(email, password) {\n    const exists = await this.userRepo.findByEmail(email);\n    if (exists) throw new AppError('Email already taken', 409);\n    const hashed = await bcrypt.hash(password, 12);\n    return this.userRepo.create({ email, password: hashed });\n  }\n}\n\n// Production:\nconst service = new UserService(new UserRepository());\n\n// Testing — inject a fake:\nconst fakeRepo = { create: async (d) => d, findByEmail: async () => null };\nconst service = new UserService(fakeRepo); // no real database!"
    }
  },
  {
    "id": "nodejs-57",
    "number": "57",
    "section": "Architecture",
    "question": "What is dependency injection and how does it help in Node.js?",
    "difficulty": "hard",
    "answer": {
      "simple": "Dependency injection means passing dependencies (database, email service, logger) into a class or function instead of creating them inside. This makes code testable — you can inject mocks instead of real services during tests.",
      "code": "// WITHOUT DI — hard to test (can't swap DB):\nclass UserService {\n  async getUser(id) {\n    return await User.findById(id); // directly uses Mongoose!\n  }\n}\n\n// WITH DI — easy to test (inject anything):\nclass UserService {\n  constructor(db, emailService, logger) {\n    this.db = db;\n    this.email = emailService;\n    this.logger = logger;\n  }\n  async registerUser(data) {\n    const user = await this.db.users.create(data);\n    await this.email.sendWelcome(user.email);\n    this.logger.info(`User registered: ${user.id}`);\n    return user;\n  }\n}\n\n// Production:\nconst service = new UserService(mongoDb, sendGridEmail, winstonLogger);\n\n// Tests — inject fakes:\nconst fakeDb = { users: { create: async d => ({ ...d, id: '1' }) } };\nconst fakeEmail = { sendWelcome: async () => {} };\nconst fakeLogger = { info: () => {} };\nconst service = new UserService(fakeDb, fakeEmail, fakeLogger);\n// Fast tests, no network calls, no database needed!"
    }
  },
  {
    "id": "nodejs-58",
    "number": "58",
    "section": "Performance",
    "question": "What is the Circuit Breaker pattern in Node.js?",
    "difficulty": "hard",
    "answer": {
      "simple": "A circuit breaker stops calling a failing external service after too many errors — instead of every request failing and waiting for timeout, it \"opens the circuit\" and returns a fast error. After a timeout, it carefully tests if the service recovered.",
      "example": "<strong>Closed</strong> (normal): All requests go through. Failures are tracked.<br>\n      <strong>Open</strong> (failing): After too many failures, reject requests immediately. Don't even try.<br>\n      <strong>Half-Open</strong> (testing): After timeout, let 1 request through. If it succeeds → Closed. If it fails → back to Open.",
      "code": "const Opossum = require('opossum');\n\nconst options = {\n  timeout: 3000,                 // 3s timeout = failure\n  errorThresholdPercentage: 50,  // 50% failures = open circuit\n  resetTimeout: 30000            // try again after 30s\n};\nconst breaker = new Opossum(callPaymentService, options);\n\nbreaker.on('open',     () => console.warn('Circuit OPEN!'));\nbreaker.on('halfOpen', () => console.log('Testing recovery...'));\nbreaker.on('close',    () => console.log('Circuit CLOSED — normal!'));\nbreaker.fallback(() => ({ status: 'payment queued for retry' }));\n\n// Use instead of calling directly:\nconst result = await breaker.fire({ amount: 99.99, card: '****1234' });\n// If service is down — returns fallback instantly!"
    }
  },
  {
    "id": "nodejs-59",
    "number": "59",
    "section": "Performance",
    "question": "What is PM2 and why use it in production?",
    "difficulty": "medium",
    "answer": {
      "simple": "PM2 is a process manager for Node.js. It keeps your app alive (auto-restarts on crash), runs multiple instances (cluster mode), handles logs, and lets you deploy with zero downtime. The standard tool for production Node.js deployments.",
      "code": "# Install globally:\nnpm install pm2 -g\n\n# Start in cluster mode — one worker per CPU core:\npm2 start app.js -i max --name \"my-api\"\n\n# Daily restart (prevents memory leaks accumulating):\npm2 start app.js --cron-restart=\"0 3 * * *\"\n\n# Useful PM2 commands:\npm2 list                # see all processes and status\npm2 logs my-api         # view live logs\npm2 monit               # live monitoring dashboard\npm2 restart my-api      # restart gracefully\npm2 reload my-api       # zero-downtime reload!\npm2 stop my-api         # stop\npm2 delete my-api       # remove from PM2\n\n# Auto-start on server reboot:\npm2 save               # save current process list\npm2 startup            # generate startup script\n# Follow the output instructions!"
    }
  },
  {
    "id": "nodejs-60",
    "number": "60",
    "section": "Architecture",
    "question": "What is the Observer pattern with EventEmitter — practical patterns?",
    "difficulty": "hard",
    "answer": {
      "simple": "The Observer pattern with EventEmitter lets you <strong>decouple services</strong>. When something happens (order placed, user registered), emit an event. Other services react without the emitter knowing about them. New behavior = just add a new listener — don't touch the emitter.",
      "code": "// This is the Open/Closed Principle in action:\nclass OrderService extends EventEmitter {\n  async placeOrder(orderData) {\n    const order = await Order.create(orderData);\n    this.emit('order:placed', order); // fire and forget!\n    return order;\n    // OrderService has NO idea who's listening or what they do!\n  }\n}\n\nconst orders = new OrderService();\n\n// Add behaviors independently — no changes to OrderService:\norders.on('order:placed', async o => await emailService.sendConfirmation(o));\norders.on('order:placed', async o => await inventory.reserve(o.items));\norders.on('order:placed', async o => await analytics.track('purchase', o));\n\n// 6 months later — add a new behavior:\norders.on('order:placed', async o => await loyaltyService.addPoints(o));\n// Zero changes to OrderService! Completely decoupled."
    }
  },
  {
    "id": "nodejs-61",
    "number": "61",
    "section": "Performance",
    "question": "What is logging in production Node.js and what should you use?",
    "difficulty": "medium",
    "answer": {
      "simple": "Use a proper logging library like <strong>Winston</strong> or <strong>Pino</strong> instead of <code>console.log</code>. They support log levels, structured JSON output (great for log aggregators), and multiple destinations.",
      "code": "const winston = require('winston');\n\nconst logger = winston.createLogger({\n  level: process.env.LOG_LEVEL || 'info',\n  format: winston.format.combine(\n    winston.format.timestamp(),\n    winston.format.errors({ stack: true }),\n    winston.format.json() // structured JSON — searchable in Datadog/Splunk!\n  ),\n  transports: [\n    new winston.transports.Console({\n      format: process.env.NODE_ENV === 'development'\n        ? winston.format.simple() // human-readable in dev\n        : winston.format.json()   // JSON in production\n    }),\n    new winston.transports.File({ filename: 'error.log', level: 'error' })\n  ]\n});\n\n// Use log levels appropriately:\nlogger.error('DB connection failed', { error: err.message, stack: err.stack });\nlogger.warn('Rate limit almost reached', { ip: req.ip, count: 95 });\nlogger.info('User registered', { userId: user.id, email: user.email });\nlogger.debug('Cache hit', { key, ttl }); // only shows in dev"
    }
  },
  {
    "id": "nodejs-62",
    "number": "62",
    "section": "Asynchrony",
    "question": "What is the difference between synchronous and asynchronous error handling patterns?",
    "difficulty": "hard",
    "answer": {
      "simple": "Synchronous errors are caught with try/catch. Async errors (rejected Promises) need try/catch inside async functions or .catch() on Promises. The most common Node.js bug is mixing them up and letting async errors go unhandled.",
      "code": "// Sync error — caught by try/catch:\ntry { JSON.parse(\"{invalid}\"); }\ncatch (err) { console.log(\"caught:\", err.message); }\n\n// Async error — try/catch with await:\ntry { await failingOperation(); }\ncatch (err) { console.log(\"caught:\", err.message); }\n\n// CLASSIC MISTAKE — try/catch can't catch callback errors:\ntry {\n  someCallbackAPI('data', function(err, result) {\n    if (err) throw err; // ❌ This throw is NOT caught by outer try/catch!\n    // It becomes an uncaughtException!\n  });\n} catch (err) {} // never runs!\n\n// FIX:\nsomeCallbackAPI('data', function(err, result) {\n  if (err) return handleError(err); // handle inside the callback!\n});\n\n// Properly catching Promise errors — ALWAYS do one of these:\nmyPromise.catch(err => handleError(err));          // .catch()\nconst result = await myPromise.catch(handleError);  // inline catch\ntry { await myPromise; } catch (err) { ... }        // try/catch"
    }
  },
  {
    "id": "nodejs-63",
    "number": "63",
    "section": "Fundamentals",
    "question": "What is pagination and how do you implement it properly?",
    "difficulty": "hard",
    "answer": {
      "simple": "Never return all records at once — always paginate. Two approaches: <strong>offset-based</strong> (simple, but slow for large datasets) and <strong>cursor-based</strong> (fast, scales to billions of records).",
      "code": "// Offset-based pagination:\napp.get('/api/users', async (req, res) => {\n  const page  = parseInt(req.query.page)  || 1;\n  const limit = parseInt(req.query.limit) || 20;\n  const skip  = (page - 1) * limit;\n\n  const [users, total] = await Promise.all([\n    User.find().skip(skip).limit(limit).sort({ createdAt: -1 }),\n    User.countDocuments()\n  ]);\n\n  res.json({\n    data: users,\n    pagination: {\n      page, limit, total,\n      totalPages: Math.ceil(total / limit),\n      hasNext: page * limit < total,\n      hasPrev: page > 1\n    }\n  });\n});\n\n// Cursor-based (better for large/real-time data):\napp.get('/api/feed', async (req, res) => {\n  const cursor = req.query.cursor; // last seen item's ID\n  const limit  = 20;\n  const query  = cursor ? { _id: { $lt: cursor } } : {};\n\n  const items = await Post.find(query).limit(limit).sort({ _id: -1 });\n  res.json({\n    data: items,\n    nextCursor: items.length === limit ? items.at(-1)._id : null\n  });\n});"
    }
  },
  {
    "id": "nodejs-64",
    "number": "64",
    "section": "Testing",
    "question": "How do you test Node.js/Express APIs?",
    "difficulty": "hard",
    "answer": {
      "simple": "Use <strong>Jest</strong> as the test framework and <strong>Supertest</strong> to make real HTTP requests to your Express app in tests — without running an actual server on a port.",
      "code": "// app.js — export app WITHOUT calling listen():\nconst express = require('express');\nconst app = express();\n// ... routes ...\nmodule.exports = app;\n\n// server.js — entry point:\nconst app = require('./app');\napp.listen(3000);\n\n// users.test.js — test the app:\nconst request = require('supertest');\nconst app = require('./app');\n\ndescribe('Users API', () => {\n  it('GET /api/users returns 200 with array', async () => {\n    const res = await request(app).get('/api/users');\n    expect(res.status).toBe(200);\n    expect(Array.isArray(res.body.data)).toBe(true);\n  });\n\n  it('POST /api/users creates user', async () => {\n    const res = await request(app)\n      .post('/api/users')\n      .set('Authorization', 'Bearer valid-token')\n      .send({ name: 'Alice', email: 'alice@test.com' });\n    expect(res.status).toBe(201);\n    expect(res.body.name).toBe('Alice');\n  });\n\n  it('POST /api/users returns 400 for missing email', async () => {\n    const res = await request(app).post('/api/users').send({ name: 'Bob' });\n    expect(res.status).toBe(400);\n  });\n});"
    }
  },
  {
    "id": "nodejs-65",
    "number": "65",
    "section": "Testing",
    "question": "What is mocking in tests and how do you mock database calls?",
    "difficulty": "hard",
    "answer": {
      "simple": "Mocking replaces real dependencies (database, external APIs) with fake ones during tests. This makes tests fast (no real network/DB), reliable (no flakiness), and isolated (one thing fails = one test fails).",
      "code": "// users.service.js:\nconst User = require('./models/User');\nexports.getUserById = async (id) => {\n  return User.findById(id);\n};\n\n// users.service.test.js — mock the User model:\njest.mock('./models/User');\n\nconst userService = require('./users.service');\n\ndescribe('getUserById', () => {\n  it('returns user when found', async () => {\n    const fakeUser = { id: '123', name: 'Alice' };\n    User.findById.mockResolvedValue(fakeUser); // fake DB response!\n\n    const result = await userService.getUserById('123');\n    expect(result).toEqual(fakeUser);\n    expect(User.findById).toHaveBeenCalledWith('123');\n  });\n\n  it('returns null when not found', async () => {\n    User.findById.mockResolvedValue(null);\n    const result = await userService.getUserById('999');\n    expect(result).toBeNull();\n  });\n\n  it('propagates DB errors', async () => {\n    User.findById.mockRejectedValue(new Error('DB Error'));\n    await expect(userService.getUserById('1')).rejects.toThrow('DB Error');\n  });\n});"
    }
  },
  {
    "id": "nodejs-66",
    "number": "66",
    "section": "Fundamentals",
    "question": "What are environment variables and how do you manage them?",
    "difficulty": "medium",
    "answer": {
      "simple": "Environment variables store configuration and secrets outside your code. Database URLs, API keys, JWT secrets — these change between environments (dev/staging/production) and should NEVER be committed to git.",
      "example": "Use: AWS Secrets Manager, GCP Secret Manager, Azure Key Vault, Vercel/Railway environment UI, Kubernetes Secrets, or Docker secrets. These are encrypted, audited, and rotatable. A .env file on disk is a security risk.",
      "code": "# .env file (local dev only — in .gitignore!):\nPORT=3000\nNODE_ENV=development\nDATABASE_URL=mongodb://localhost:27017/myapp\nJWT_SECRET=dev_secret_change_in_production\nSENDGRID_API_KEY=SG.xxxxx\n\n# Load in your app:\nrequire('dotenv').config();\n\nconst port = process.env.PORT || 3000;\nconst db   = process.env.DATABASE_URL;\n\n// Validate required vars on startup — fail fast!\nconst required = ['DATABASE_URL', 'JWT_SECRET', 'SENDGRID_API_KEY'];\nrequired.forEach(key => {\n  if (!process.env[key]) {\n    console.error(`❌ Missing required env var: ${key}`);\n    process.exit(1); // fail loudly before serving any traffic!\n  }\n});"
    }
  },
  {
    "id": "nodejs-67",
    "number": "67",
    "section": "Architecture",
    "question": "What is the proper folder structure for a Node.js project?",
    "difficulty": "hard",
    "answer": {
      "simple": "A clean structure separates concerns — routes define endpoints, controllers handle requests, services contain business logic, and repositories manage database access. This makes testing, debugging, and scaling much easier.",
      "example": "Your tests import <code>app.js</code> directly and Supertest binds it to a random port. If you call <code>listen()</code> inside <code>app.js</code>, every test starts the server — port conflicts, slow tests. Separating them keeps tests clean and fast.",
      "code": "project/\n├── src/\n│   ├── config/          # DB setup, env validation\n│   │   ├── database.js  # mongoose.connect or pg Pool\n│   │   └── env.js       # validate required env vars\n│   ├── controllers/     # thin — receive req, call service, send res\n│   │   └── users.controller.js\n│   ├── middleware/      # auth, validation, rate limit, logger\n│   │   ├── auth.middleware.js\n│   │   └── validate.middleware.js\n│   ├── models/          # Mongoose/Prisma schemas\n│   │   └── User.js\n│   ├── repositories/    # all database operations\n│   │   └── users.repository.js\n│   ├── routes/          # route definitions — map URL to controller\n│   │   └── users.routes.js\n│   ├── services/        # business logic — fat, calls repositories\n│   │   └── users.service.js\n│   ├── utils/           # helpers: email, crypto, formatters\n│   └── app.js           # Express setup — NO app.listen() here!\n├── tests/               # mirrors src/ structure\n├── .env.example         # template (no real values)\n├── .gitignore           # includes node_modules, .env\n├── package.json\n└── server.js            # entry point: require('./src/app').listen(PORT)"
    }
  },
  {
    "id": "nodejs-68",
    "number": "68",
    "section": "Scalability",
    "question": "What is the difference between horizontal and vertical scaling in Node.js?",
    "difficulty": "hard",
    "answer": {
      "simple": "<strong>Vertical scaling</strong>: make the server bigger (more RAM, faster CPU). Hit a ceiling. <strong>Horizontal scaling</strong>: add more servers running the same app behind a load balancer. Node.js is excellent for horizontal scaling — it's lightweight (30-100MB RAM) and starts in seconds.",
      "example": "<strong>Level 1 — PM2 Cluster</strong>: Use all CPU cores on one server. Free. Works for moderate traffic.<br>\n      <strong>Level 2 — Multiple servers + Nginx</strong>: Nginx load-balances traffic across 3 Node.js servers. Need shared state (Redis for sessions, DB for data).<br>\n      <strong>Level 3 — Container orchestration (Kubernetes)</strong>: Auto-scale based on CPU/memory metrics. Add pods automatically under load. Remove when quiet. Self-healing (restarts crashed pods).<br>\n      <strong>Level 4 — Microservices</strong>: Scale each service independently. User service getting hammered? Scale it from 3 to 10 instances — without touching the payment service."
    }
  },
  {
    "id": "nodejs-69",
    "number": "69",
    "section": "Real-time",
    "question": "What is Server-Sent Events (SSE) and how is it different from WebSockets?",
    "difficulty": "hard",
    "answer": {
      "simple": "SSE is a one-way real-time channel — server pushes updates to the client over a regular HTTP connection. WebSockets are two-way. SSE is simpler to implement, auto-reconnects, and works over HTTP/2 natively.",
      "example": "<strong>SSE</strong>: server → client only. HTTP-based. Auto-reconnect. Works through proxies. Great for: live feeds, notifications, progress updates.<br>\n      <strong>WebSocket</strong>: two-way. Separate protocol (ws://). Must handle reconnects. Great for: chat, gaming, collaborative editing.",
      "code": "// SSE server — stream events to client:\napp.get('/events', (req, res) => {\n  res.setHeader('Content-Type', 'text/event-stream');\n  res.setHeader('Cache-Control', 'no-cache');\n  res.setHeader('Connection', 'keep-alive');\n  res.flushHeaders(); // send headers immediately\n\n  // Push an event every second:\n  const interval = setInterval(() => {\n    const data = JSON.stringify({ time: new Date(), count: ++counter });\n    res.write(`event: update\\n`);    // event name\n    res.write(`data: ${data}\\n\\n`); // data (double newline = end of event!)\n  }, 1000);\n\n  // Clean up when client disconnects:\n  req.on('close', () => {\n    clearInterval(interval);\n    res.end();\n  });\n});"
    }
  },
  {
    "id": "nodejs-70",
    "number": "70",
    "section": "Performance",
    "question": "What are common Node.js performance anti-patterns to avoid?",
    "difficulty": "hard",
    "answer": {
      "simple": "Performance in Node.js is often about keeping the event loop spinning and minimizing blocking I/O.",
      "example": "❌ <strong>Blocking the event loop</strong>: CPU-heavy sync code in route handlers. Fix: Worker Threads, offload to queue.<br>\n      ❌ <strong>readFileSync/writeFileSync in routes</strong>: Blocks ALL requests while reading. Fix: always use async fs.promises.<br>\n      ❌ <strong>No database indexes</strong>: Full table scans on every query. Fix: index queried fields — can be 1000x faster.<br>\n      ❌ <strong>N+1 queries</strong>: 101 queries instead of 2. Fix: populate, joins, batch loading.<br>\n      ❌ <strong>Loading entire datasets into memory</strong>: <code>User.find()</code> returns 1 million records. Fix: pagination, streams, cursors.<br>\n      ❌ <strong>No connection pooling</strong>: New DB connection per request. Fix: pg Pool, Mongoose pools automatically.<br>\n      ❌ <strong>Unhandled promise rejections</strong>: Silent failures, undefined behavior. Fix: always catch, set up global handler.<br>\n      ❌ <strong>No graceful shutdown</strong>: Requests dropped on deploy. Fix: handle SIGTERM, close server first."
    }
  },
  {
    "id": "nodejs-71",
    "number": "71",
    "section": "Fundamentals",
    "question": "What is TypeScript with Node.js and why should you use it?",
    "difficulty": "medium",
    "answer": {
      "simple": "TypeScript adds static types to JavaScript. Your editor catches type errors before you run the code. In Node.js, server-side bugs affect all users — TypeScript prevents an entire class of runtime errors before they reach production.",
      "example": "Catch null reference crashes before production. Autocomplete for your API models. Safe refactoring — find all breaking changes instantly. Self-documenting code — types ARE the documentation. Industry standard for serious backends in 2024+.",
      "code": "// TypeScript catches errors at write time:\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n  createdAt: Date;\n}\n\nasync function getUser(id: number): Promise<User | null> {\n  return db.findById(id); // TypeScript verifies return type!\n}\n\n// Express with types:\nimport { Request, Response, NextFunction } from 'express';\n\napp.get('/users/:id', async (req: Request, res: Response, next: NextFunction) => {\n  const id = parseInt(req.params.id); // TypeScript: params are string\n  const user: User | null = await getUser(id);\n  if (!user) return res.status(404).json({ error: 'Not found' });\n  res.json(user); // TypeScript confirms user matches User interface\n});"
    }
  },
  {
    "id": "nodejs-72",
    "number": "72",
    "section": "Auth",
    "question": "What is npm audit and how do you handle security vulnerabilities?",
    "difficulty": "hard",
    "answer": {
      "simple": "<code>npm audit</code> scans your dependencies for known security vulnerabilities and reports them with severity levels. Run it regularly — a transitive dependency (a package your package uses) could have a critical CVE.",
      "example": "Add <code>npm audit --audit-level=moderate</code> to your CI pipeline. This blocks deployment if medium+ severity vulnerabilities are found. Dependabot or Renovate automatically creates pull requests when new vulnerable versions are discovered and fixed versions are available.",
      "code": "# Check for vulnerabilities:\nnpm audit\n\n# Auto-fix where possible:\nnpm audit fix\n\n# Fix even breaking changes (major versions):\nnpm audit fix --force  # careful — may break things!\n\n# See detailed report:\nnpm audit --json | jq '.vulnerabilities'\n\n# In CI/CD — fail the build if high vulnerabilities:\nnpm audit --audit-level=high\n\n# Check specific package:\nnpm why lodash    # why is this package in my dependencies?\n\n# Keep dependencies updated (use a tool like Dependabot):\n# GitHub → Settings → Security → Dependabot alerts\n# Creates PRs automatically when vulnerabilities are found!"
    }
  },
  {
    "id": "nodejs-73",
    "number": "73",
    "section": "Fundamentals",
    "question": "What is distributed tracing and how do you add it to Node.js?",
    "difficulty": "hard",
    "answer": {
      "simple": "In a microservices system, one user request might touch 10 services. Distributed tracing follows that request's entire journey — how long each service took, where errors occurred, which database calls were slow.",
      "example": "Request → API Gateway (5ms) → User Service (12ms) → MongoDB query (45ms) → Redis cache write (2ms) → Response (total: 64ms). Without tracing, debugging slow requests is guesswork. With tracing, you see exactly which step was slow.",
      "code": "// OpenTelemetry — the standard for distributed tracing:\nconst { NodeSDK } = require('@opentelemetry/sdk-node');\nconst { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');\nconst { OTLPTraceExporter } = require('@opentelemetry/exporter-otlp-http');\n\nconst sdk = new NodeSDK({\n  traceExporter: new OTLPTraceExporter({\n    url: process.env.OTLP_ENDPOINT // Jaeger, Datadog, Honeycomb, etc.\n  }),\n  instrumentations: [\n    getNodeAutoInstrumentations() // auto-instruments: http, express, mongodb!\n  ]\n});\nsdk.start(); // MUST start before importing other modules!\n\n// Now every request automatically gets a trace ID and spans!\n// View complete request journey in your APM tool."
    }
  },
  {
    "id": "nodejs-74",
    "number": "74",
    "section": "Fundamentals",
    "question": "What is the health check endpoint and why is it essential?",
    "difficulty": "hard",
    "answer": {
      "simple": "A health check endpoint (<code>GET /health</code>) lets load balancers, Kubernetes, and monitoring tools check if your app is working. If it returns an error, the orchestrator routes traffic away from that instance automatically.",
      "code": "app.get('/health', async (req, res) => {\n  const status = { status: 'ok', uptime: process.uptime(), checks: {} };\n\n  // Check database connectivity:\n  try {\n    await mongoose.connection.db.admin().ping();\n    status.checks.database = 'ok';\n  } catch (err) {\n    status.checks.database = 'error';\n    status.status = 'degraded';\n  }\n\n  // Check Redis:\n  try {\n    await redis.ping();\n    status.checks.redis = 'ok';\n  } catch (err) {\n    status.checks.redis = 'error';\n    status.status = 'degraded';\n  }\n\n  // Add memory check:\n  const { heapUsed, heapTotal } = process.memoryUsage();\n  status.checks.memory = `${Math.round(heapUsed/1024/1024)}MB / ${Math.round(heapTotal/1024/1024)}MB`;\n\n  const code = status.status === 'ok' ? 200 : 503;\n  res.status(code).json(status);\n});"
    }
  },
  {
    "id": "nodejs-75",
    "number": "75",
    "section": "Architecture",
    "question": "What are API versioning strategies in Node.js?",
    "difficulty": "hard",
    "answer": {
      "simple": "API versioning lets you change your API without breaking existing clients. Old clients use v1, new clients use v2 — both work simultaneously. The most common approach: version in the URL path.",
      "code": "// URL versioning (most common, most explicit):\napp.use('/api/v1/users', v1UserRoutes);\napp.use('/api/v2/users', v2UserRoutes);\n\n// Header versioning (cleaner URLs, less discoverable):\napp.use((req, res, next) => {\n  req.apiVersion = req.headers['accept-version'] || '1';\n  next();\n});\napp.get('/api/users', (req, res) => {\n  return req.apiVersion === '2' ? v2Handler(req, res) : v1Handler(req, res);\n});\n\n// Deprecation headers (warn clients before removing old version):\napp.use('/api/v1', (req, res, next) => {\n  res.set('Deprecation', 'true');\n  res.set('Sunset', 'Sat, 31 Dec 2025 23:59:59 GMT');\n  res.set('Link', '&lt;https://api.example.com/api/v2&gt;; rel=\"successor-version\"');\n  next();\n});"
    }
  },
  {
    "id": "nodejs-76",
    "number": "76",
    "section": "Auth",
    "question": "What is session management vs JWT and which should you use?",
    "difficulty": "hard",
    "answer": {
      "simple": "Sessions store user state on the server, browser gets a session ID. JWTs store everything in the token, server is stateless. Each has real trade-offs — choosing depends on your architecture.",
      "example": "<strong>Sessions</strong>:<br>\n      ✅ Easy to invalidate instantly — delete from Redis/DB.<br>\n      ✅ Small cookie — just a session ID (not the user's data).<br>\n      ❌ Requires server-side storage — needs Redis for multi-server setups.<br>\n      ❌ Every request requires a Redis lookup.<br><br>\n      <strong>JWT</strong>:<br>\n      ✅ Stateless — no server storage needed, works across microservices.<br>\n      ✅ Contains user info — no DB lookup per request (faster!).<br>\n      ❌ Hard to invalidate — can't revoke a token before it expires (need a blocklist!).<br>\n      ❌ Grows with payload size. If secret leaks, ALL tokens are compromised.<br><br>\n      <strong>Use sessions</strong>: traditional web apps, when you need instant logout.<br>\n      <strong>Use JWT</strong>: stateless APIs, microservices, mobile apps, third-party token sharing."
    }
  },
  {
    "id": "nodejs-77",
    "number": "77",
    "section": "Fundamentals",
    "question": "What is file upload handling and what are the security considerations?",
    "difficulty": "hard",
    "answer": {
      "simple": "Use <strong>Multer</strong> for handling file uploads in Express. Always validate file type, size, and name — attackers will try to upload malicious files.",
      "code": "const multer = require('multer');\nconst path = require('path');\n\nconst storage = multer.diskStorage({\n  destination: 'uploads/',\n  filename: (req, file, cb) => {\n    // NEVER use the original filename — path traversal attack!\n    const safeFilename = `${Date.now()}-${Math.random().toString(36)}`\n      + path.extname(file.originalname).toLowerCase();\n    cb(null, safeFilename);\n  }\n});\n\nconst upload = multer({\n  storage,\n  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max\n  fileFilter: (req, file, cb) => {\n    // Validate MIME type — check mimetype AND extension:\n    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];\n    const allowedExts  = ['.jpg', '.jpeg', '.png', '.webp'];\n    const ext = path.extname(file.originalname).toLowerCase();\n\n    if (allowedTypes.includes(file.mimetype) && allowedExts.includes(ext)) {\n      cb(null, true);\n    } else {\n      cb(new Error('Only JPEG, PNG, WebP images allowed'));\n    }\n  }\n});\n\napp.post('/upload', upload.single('photo'), (req, res) => {\n  res.json({ filename: req.file.filename });\n});"
    }
  },
  {
    "id": "nodejs-78",
    "number": "78",
    "section": "Database",
    "question": "What is database indexing and why does it matter for Node.js apps?",
    "difficulty": "hard",
    "answer": {
      "simple": "A database index is like a book's index — instead of scanning every page to find a topic, you jump straight to it. Without indexes, the database scans every row (O(n)). With indexes, it finds records in O(log n). The difference: 2ms vs 2000ms for a million-row table.",
      "code": "// MongoDB — add indexes in Mongoose schema:\nconst userSchema = new mongoose.Schema({\n  email: { type: String, unique: true }, // unique creates an index!\n  name: String,\n  age: Number,\n  role: String,\n  createdAt: { type: Date, default: Date.now }\n});\n\nuserSchema.index({ email: 1 });           // single field index\nuserSchema.index({ name: 1, age: -1 });   // compound index\nuserSchema.index({ name: 'text' });       // full-text search index\nuserSchema.index({ createdAt: -1 });      // sort index for newest first\n\n// PostgreSQL:\n// CREATE INDEX CONCURRENTLY idx_users_email ON users(email);\n// CREATE INDEX idx_users_name_age ON users(name, age DESC);\n\n// When to index:\n// ✅ Fields in WHERE clauses: WHERE email = '...'\n// ✅ Fields you ORDER BY: ORDER BY created_at DESC\n// ✅ Fields in JOIN conditions\n// ❌ Don't index every field — indexes slow down writes and use disk space!"
    }
  },
  {
    "id": "nodejs-79",
    "number": "79",
    "section": "Architecture",
    "question": "What are microservices and how does Node.js fit in?",
    "difficulty": "hard",
    "answer": {
      "simple": "Microservices architecture splits an app into many small, independent services — each responsible for one feature, deployed independently, scaling independently. Node.js is ideal: lightweight, fast startup, excellent I/O performance.",
      "example": "Instead of ONE large monolith:<br>\n      ✅ <strong>user-service</strong>: registration, login, profile.<br>\n      ✅ <strong>product-service</strong>: catalog, inventory, pricing.<br>\n      ✅ <strong>order-service</strong>: checkout, order history.<br>\n      ✅ <strong>notification-service</strong>: emails, push notifications, SMS.<br>\n      ✅ <strong>api-gateway</strong>: routes requests to correct service, handles auth.<br><br>\n      Services communicate via: REST HTTP (simple), gRPC (fast, typed), or message queues (Kafka, RabbitMQ — async, decoupled).<br><br>\n      Node.js per service: 30-100MB RAM, starts in <1 second. Run hundreds of instances cheaply. Perfect for microservices!"
    }
  },
  {
    "id": "nodejs-80",
    "number": "80",
    "section": "Performance",
    "question": "What is compression and how does it improve API performance?",
    "difficulty": "hard",
    "answer": {
      "simple": "Compression reduces HTTP response sizes — a 100KB JSON response becomes 20KB after gzip. This saves bandwidth and speeds up responses, especially on slow connections. One middleware line adds it to your entire Express app.",
      "code": "const compression = require('compression');\n\n// Enable gzip/brotli for all responses:\napp.use(compression({\n  level: 6,       // compression level 1-9 (6 is the sweet spot)\n  threshold: 1024 // only compress responses > 1KB (small responses not worth it)\n}));\n\n// Effect: 100KB JSON → ~15-25KB (75-85% reduction!)\n// Most impactful on: large JSON responses, HTML, CSS, JS files\n\n// DON'T compress: images (already compressed), videos, zip files\n// The compression middleware automatically skips these MIME types\n\n// In production with Nginx as reverse proxy:\n// Let Nginx handle compression instead — it's more efficient:\n// gzip on;\n// gzip_types text/plain application/json application/javascript text/css;\n// gzip_min_length 1000;"
    }
  },
  {
    "id": "nodejs-81",
    "number": "81",
    "section": "Architecture",
    "question": "What is request context and how do you pass it through your app?",
    "difficulty": "hard",
    "answer": {
      "simple": "Request context is data tied to a specific request — user ID, request ID, tenant ID. You need it available throughout the entire async chain (controllers, services, repositories) without passing it as a parameter to every function.",
      "code": "const { AsyncLocalStorage } = require('async_hooks');\nconst als = new AsyncLocalStorage();\n\n// Middleware — create context for each request:\napp.use((req, res, next) => {\n  als.run({\n    requestId: crypto.randomUUID(),\n    userId: req.user?.id,\n    tenantId: req.headers['x-tenant-id']\n  }, next);\n});\n\n// Anywhere in your codebase — no prop drilling!\nfunction getContext() { return als.getStore(); }\n\n// Service (no need to receive requestId as parameter!):\nclass UserService {\n  async createUser(data) {\n    const { userId, requestId } = getContext();\n    logger.info('Creating user', { requestId, createdBy: userId });\n    const user = await this.repo.create(data);\n    logger.info('User created', { requestId, newUserId: user.id });\n    return user;\n  }\n}"
    }
  },
  {
    "id": "nodejs-82",
    "number": "82",
    "section": "Architecture",
    "question": "What is the SOLID principle applied to Node.js?",
    "difficulty": "hard",
    "answer": {
      "simple": "SOLID is 5 design principles that make Node.js code easier to test, extend, and maintain as your app grows.",
      "example": "<strong>S — Single Responsibility</strong>: UserController only handles HTTP. UserService only handles business logic. UserRepository only handles DB. One job each.<br><br>\n      <strong>O — Open/Closed</strong>: Add new behavior by adding new event listeners — don't modify OrderService. \"Open for extension, closed for modification.\"<br><br>\n      <strong>L — Liskov Substitution</strong>: <code>MongoUserRepository</code> and <code>PostgresUserRepository</code> implement the same interface. Either can replace the other in UserService.<br><br>\n      <strong>I — Interface Segregation</strong>: Don't make a service implement 20 methods it doesn't need. Split into focused interfaces.<br><br>\n      <strong>D — Dependency Inversion</strong>: UserService depends on <code>IUserRepository</code> (interface), not <code>MongoUserRepository</code> (concrete). Inject the implementation. Easy to swap, easy to test."
    }
  },
  {
    "id": "nodejs-83",
    "number": "83",
    "section": "Fundamentals",
    "question": "What is the difference between 'require' caching and singleton pattern?",
    "difficulty": "hard",
    "answer": {
      "simple": "Node.js caches every module after the first <code>require()</code>. The same module object is returned every time — even from different files. This makes modules naturally behave as singletons.",
      "example": "In tests, the cached module persists between test files! If one test modifies the singleton, other tests see the change. Fix: use <code>jest.resetModules()</code> or <code>jest.isolateModules()</code> between tests, or design modules to be resettable.",
      "code": "// db.js — database connection module:\nconst mongoose = require('mongoose');\nlet connection = null;\n\nasync function connect() {\n  if (!connection) {\n    connection = await mongoose.connect(process.env.MONGODB_URI);\n    console.log('DB connected'); // only runs ONCE!\n  }\n  return connection;\n}\n\nmodule.exports = { connect };\n\n// app.js:\nconst db = require('./db');\nawait db.connect();\n\n// controllers/users.js — requires the same module:\nconst db = require('./db');\nawait db.connect(); // returns the cached connection — no new connection!\n\n// This is why database connection modules work as singletons:\n// require() returns the exact same object every time!"
    }
  },
  {
    "id": "nodejs-84",
    "number": "84",
    "section": "Architecture",
    "question": "What is the difference between REST and GraphQL APIs in Node.js?",
    "difficulty": "hard",
    "answer": {
      "simple": "REST uses multiple endpoints, each returning a fixed data shape. GraphQL uses one endpoint where the client specifies exactly what data it wants. GraphQL solves over-fetching and under-fetching problems.",
      "example": "<strong>REST</strong>: <code>GET /users/1</code> returns ALL user fields even if you need only the name. Need the user's posts? Another request: <code>GET /users/1/posts</code>. Two round trips.<br><br>\n      <strong>GraphQL</strong>: One request, ask for exactly what you need:\n      <pre>query {\n  user(id: 1) {\n    name        # only name\n    posts {     # and their posts\n      title     # only title\n    }\n  }\n}</pre>\n      <strong>When REST is better</strong>: simple CRUD, file uploads, caching is critical (REST responses are cacheable by URL).<br>\n      <strong>When GraphQL is better</strong>: complex related data, many different client types (mobile vs web want different data), rapid frontend development.",
      "code": "query {\n  user(id: 1) {\n    name        # only name\n    posts {     # and their posts\n      title     # only title\n    }\n  }\n}"
    }
  },
  {
    "id": "nodejs-85",
    "number": "85",
    "section": "Performance",
    "question": "What is debounce and throttle in the context of Node.js?",
    "difficulty": "hard",
    "answer": {
      "simple": "Debounce and throttle limit how often a function runs. Essential for performance on the server too — like processing sensor data, socket messages, or search queries.",
      "example": "<strong>Debounce</strong>: \"Wait until 500ms have passed since the LAST call, then run.\" Great for: search autocomplete, saving drafts.<br>\n      <strong>Throttle</strong>: \"Run once every 500ms max.\" Great for: processing live joystick input, scrolling/resizing events.",
      "code": "// Simple debounce implementation:\nfunction debounce(fn, ms) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn.apply(this, args), ms);\n  };\n}\n\n// Simple throttle implementation:\nfunction throttle(fn, ms) {\n  let lastTime = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - lastTime >= ms) {\n      lastTime = now;\n      fn.apply(this, args);\n    }\n  };\n}"
    }
  },
  {
    "id": "nodejs-86",
    "number": "86",
    "section": "Fundamentals",
    "question": "What is deep cloning vs shallow cloning in Node.js?",
    "difficulty": "medium",
    "answer": {
      "simple": "Shallow cloning copies only the top level; nested objects are still references. Deep cloning copies everything, creating a completely independent copy. Node.js now has a built-in <code>structuredClone()</code> for this.",
      "code": "const original = { name: 'Alice', addr: { city: 'NY' } };\n\n// Shallow clone:\nconst shallow = { ...original };\nshallow.addr.city = 'LA';\nconsole.log(original.addr.city); // 'LA' (oops, original changed!)\n\n// Deep clone (Modern Node.js 17+):\nconst deep = structuredClone(original);\ndeep.addr.city = 'Austin';\nconsole.log(original.addr.city); // 'LA' (original is safe!)\n\n// Deep clone (Older Node.js):\nconst oldDeep = JSON.parse(JSON.stringify(original));\n// ⚠️ Warning: JSON method loses functions, Dates, RegEx, and Infinity!"
    }
  },
  {
    "id": "nodejs-87",
    "number": "87",
    "section": "Testing",
    "question": "What is TDD (Test Driven Development) and should I use it?",
    "difficulty": "medium",
    "answer": {
      "simple": "TDD is a workflow: Write a failing test first → Write the minimum code to pass → Refactor. It ensures 100% test coverage and better design, as you think about the API before the implementation.",
      "example": "<strong>Red</strong>: Write test for <code>sum(a, b)</code>, run it, it fails.<br>\n      <strong>Green</strong>: Write <code>return a + b</code>, test passes.<br>\n      <strong>Refactor</strong>: Clean up the code if needed.<br><br>\n      Pros: Fewer bugs, easy to refactor later. Cons: Slower initial development, requires discipline."
    }
  },
  {
    "id": "nodejs-88",
    "number": "88",
    "section": "Fundamentals",
    "question": "What is the difference between null and undefined in Node.js?",
    "difficulty": "easy",
    "answer": {
      "simple": "<code>undefined</code> means a variable has been declared but has not yet been assigned a value. <code>null</code> is an assignment value that represents \"no value\" or \"nothing.\"",
      "example": "<code>let x;</code> → x is <code>undefined</code>.<br>\n      <code>let y = null;</code> → y is <code>null</code>.<br><br>\n      Type check: <code>typeof undefined</code> is \"undefined\". <code>typeof null</code> is \"object\" (a historical bug in JS!)."
    }
  },
  {
    "id": "nodejs-89",
    "number": "89",
    "section": "Fundamentals",
    "question": "How do you check if a variable is an array in Node.js?",
    "difficulty": "easy",
    "answer": {
      "simple": "Always use <code>Array.isArray(value)</code>. Never use <code>typeof</code> (which returns \"object\").",
      "code": "const arr = [1, 2, 3];\nArray.isArray(arr); // true\ntypeof arr;          // \"object\" (don't use this!)"
    }
  },
  {
    "id": "nodejs-90",
    "number": "90",
    "section": "Fundamentals",
    "question": "What is the use of 'strict mode' in Node.js?",
    "difficulty": "easy",
    "answer": {
      "simple": "'use strict' enables stricter parsing and error handling in your code. It catches common mistakes (like global variable leaks) and disables confusing features.",
      "example": "❌ Silently creating global variables (<code>x = 10</code> without let/const).<br>\n      ❌ Duplicating parameter names in functions.<br>\n      ❌ Using reserved keywords for variables.<br><br>\n      Note: ES Modules are ALWAYS in strict mode automatically!"
    }
  },
  {
    "id": "nodejs-91",
    "number": "91",
    "section": "Fundamentals",
    "question": "What is the difference between map() and forEach()?",
    "difficulty": "easy",
    "answer": {
      "simple": "<code>map()</code> creates a NEW array with the results of calling a function on every element. <code>forEach()</code> just runs a function for each element and returns <code>undefined</code>.",
      "code": "const nums = [1, 2, 3];\n\n// map returns new array:\nconst doubled = nums.map(x => x * 2); // [2, 4, 6]\n\n// forEach returns undefined, used for side effects:\nnums.forEach(x => console.log(x));"
    }
  },
  {
    "id": "nodejs-92",
    "number": "92",
    "section": "Fundamentals",
    "question": "What is the purpose of package-lock.json?",
    "difficulty": "easy",
    "answer": {
      "simple": "It records the exact version of every dependency (and their dependencies) installed. This ensures that everyone working on the project and the production server installs the EXACT same versions.",
      "example": "Without it, <code>npm install</code> today might install version 1.2.3, but tomorrow it might install 1.2.4 (which could have a bug). package-lock.json prevents this inconsistency."
    }
  },
  {
    "id": "nodejs-93",
    "number": "93",
    "section": "Fundamentals",
    "question": "What is the difference between devDependencies and dependencies?",
    "difficulty": "easy",
    "answer": {
      "simple": "<code>dependencies</code> are needed for the app to actually run (e.g., Express, Mongoose). <code>devDependencies</code> are only needed during development/build (e.g., Jest, TypeScript, ESLint).",
      "code": "npm install express      # goes to dependencies\nnpm install jest --save-dev # goes to devDependencies"
    }
  },
  {
    "id": "nodejs-94",
    "number": "94",
    "section": "Fundamentals",
    "question": "What is semantic versioning (SemVer)?",
    "difficulty": "easy",
    "answer": {
      "simple": "A standard for version numbers: <code>MAJOR.MINOR.PATCH</code> (e.g., 2.3.1).",
      "example": "<strong>MAJOR</strong>: breaking changes (old code might break).<br>\n      <strong>MINOR</strong>: new features (backwards compatible).<br>\n      <strong>PATCH</strong>: bug fixes (backwards compatible)."
    }
  },
  {
    "id": "nodejs-95",
    "number": "95",
    "section": "Fundamentals",
    "question": "What does the ^ (caret) and ~ (tilde) mean in package.json?",
    "difficulty": "easy",
    "answer": {
      "simple": "They define which updates are allowed when running <code>npm install</code>.",
      "example": "<code>^1.2.3</code> (Caret): update to any <strong>Minor</strong> version (e.g., 1.5.0).<br>\n      <code>~1.2.3</code> (Tilde): update only to <strong>Patch</strong> versions (e.g., 1.2.9)."
    }
  },
  {
    "id": "nodejs-96",
    "number": "96",
    "section": "Fundamentals",
    "question": "What is the difference between app.listen() and http.createServer()?",
    "difficulty": "medium",
    "answer": {
      "simple": "<code>app.listen()</code> is a shortcut provided by Express. Internally, it creates an HTTP server using Node's <code>http.createServer()</code> and starts listening on the port.",
      "code": "// These are the same:\napp.listen(3000);\n\n// express version:\nconst server = http.createServer(app);\nserver.listen(3000);"
    }
  },
  {
    "id": "nodejs-97",
    "number": "97",
    "section": "Fundamentals",
    "question": "How do you handle unhandled promise rejections globally?",
    "difficulty": "medium",
    "answer": {
      "simple": "Listen to the <code>unhandledRejection</code> event on the <code>process</code> object. This prevents the default \"unhandled rejection\" warning and lets you log the error properly.",
      "code": "process.on('unhandledRejection', (reason, promise) => {\n  console.error('Unhandled Rejection at:', promise, 'reason:', reason);\n  // Recommended: close server and exit\n  server.close(() => process.exit(1));\n});"
    }
  },
  {
    "id": "nodejs-98",
    "number": "98",
    "section": "Fundamentals",
    "question": "What is the purpose of the 'os' module?",
    "difficulty": "easy",
    "answer": {
      "simple": "It provides information about the operating system the Node.js process is running on — CPU cores, total RAM, free RAM, hostname, platform, etc.",
      "code": "const os = require('os');\nconsole.log(os.cpus().length); // number of CPU cores\nconsole.log(os.totalmem());     // total RAM in bytes"
    }
  },
  {
    "id": "nodejs-99",
    "number": "99",
    "section": "Fundamentals",
    "question": "What is the 'crypto' module used for?",
    "difficulty": "medium",
    "answer": {
      "simple": "It provides cryptographic functionality: creating secure hashes (SHA256), encryption/decryption (AES), and generating random values (like random bytes for a salt).",
      "code": "const crypto = require('crypto');\nconst hash = crypto.createHash('sha256').update('password').digest('hex');"
    }
  },
  {
    "id": "nodejs-100",
    "number": "100",
    "section": "Fundamentals",
    "question": "How can you read a large file without blocking the event loop?",
    "difficulty": "medium",
    "answer": {
      "simple": "Use <code>fs.createReadStream()</code>. It reads the file in chunks and emits data events, allowing other code to run between chunks.",
      "code": "const fs = require('fs');\nconst stream = fs.createReadStream('huge-file.log');\nstream.on('data', chunk => { /* process chunk */ });"
    }
  }
];
