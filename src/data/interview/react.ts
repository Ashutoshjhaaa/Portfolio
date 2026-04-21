import { Question } from './types';

export const REACT_QUESTIONS: Question[] = [
  {
    "id": "react-01",
    "number": "01",
    "question": "What is React and why do developers use it?",
    "difficulty": "easy",
    "section": "Core Concepts",
    "answer": {
      "simple": "React is a JavaScript library made by Meta (Facebook) for building user interfaces. Developers use it because it lets you build big apps from small, reusable pieces called <strong>components</strong> — and it automatically updates the screen when data changes.",
      "example": "Lego bricks. Each component is a brick. You build a button brick, a card brick, a navbar brick — then snap them together to make any page. If you change one brick, only that brick updates. React handles the \"what changed and how to update\" part for you."
    }
  },
  {
    "id": "react-02",
    "number": "02",
    "question": "What is JSX and how is it different from HTML?",
    "difficulty": "easy",
    "section": "Core Concepts",
    "answer": {
      "simple": "JSX is a mix of JavaScript and HTML-like syntax. You write it in React files and it gets converted to plain JavaScript by a tool called Babel before the browser sees it.",
      "example": "Use <code>className</code> not <code>class</code> (class is a JS keyword).<br>\r\n      Use <code>htmlFor</code> not <code>for</code>.<br>\r\n      All tags must close: <code><img /></code>, <code><br /></code>.<br>\r\n      Put JavaScript inside <code>{'{curly braces}'}</code>.<br>\r\n      Event names are camelCase: <code>onClick</code>, <code>onChange</code>.",
      "code": "// JSX (what you write):\r\nconst el = <h1 className=\"title\">Hello, {name}!</h1>;\r\n\r\n// What Babel turns it into:\r\nconst el = React.createElement('h1', {className:'title'}, 'Hello, ', name, '!');"
    }
  },
  {
    "id": "react-03",
    "number": "03",
    "question": "What is the Virtual DOM and how does React use it?",
    "difficulty": "easy",
    "section": "Core Concepts",
    "answer": {
      "simple": "The Virtual DOM is a lightweight copy of the real DOM that React keeps in memory. When something changes, React updates its virtual copy first, compares it to the old virtual copy (this process is called <strong>diffing</strong>), and then only updates the parts of the real DOM that actually changed.",
      "example": "Direct DOM updates are slow. Imagine repainting an entire 100-page document because one sentence changed. React finds the exact sentence that changed and updates only that — much faster. This process is called <strong>reconciliation</strong>."
    }
  },
  {
    "id": "react-04",
    "number": "04",
    "question": "What is a React component?",
    "difficulty": "easy",
    "section": "Core Concepts",
    "answer": {
      "simple": "A component is a JavaScript function that returns JSX (HTML-like code). It's a self-contained, reusable piece of UI that you can use like a custom HTML tag.",
      "example": "Name must start with a capital letter (<code>Button</code> not <code>button</code>). Must return JSX (or null). Must be a pure function — same props should give same output.",
      "code": "// A component is just a function that returns JSX:\r\nfunction Button({ label, onClick }) {\r\n  return <button onClick={onClick}>{label}</button>;\r\n}\r\n\r\n// Use it like a custom HTML tag:\r\n<Button label=\"Save\" onClick={handleSave} />\r\n<Button label=\"Delete\" onClick={handleDelete} />"
    }
  },
  {
    "id": "react-05",
    "number": "05",
    "question": "What are props and how do they work?",
    "difficulty": "easy",
    "section": "Core Concepts",
    "answer": {
      "simple": "Props (short for \"properties\") are how a parent component passes data to a child component. They work like arguments to a function — the parent sends them, the child receives and uses them.",
      "example": "Props are <strong>read-only</strong>. A child component can NEVER modify its props. Data flows one way: parent → child. This is called \"unidirectional data flow.\"",
      "code": "// Parent sends:\r\n<UserCard name=\"Alice\" age={28} isAdmin={true} />\r\n\r\n// Child receives (as one object called props):\r\nfunction UserCard(props) {\r\n  return <p>{props.name}, age {props.age}</p>;\r\n}\r\n\r\n// Or use destructuring (cleaner):\r\nfunction UserCard({ name, age, isAdmin }) {\r\n  return <p>{name}, age {age}</p>;\r\n}"
    }
  },
  {
    "id": "react-06",
    "number": "06",
    "question": "What is state and how is it different from props?",
    "difficulty": "easy",
    "section": "Core Concepts",
    "answer": {
      "simple": "State is data that a component <strong>owns and controls</strong>. Unlike props (which come from outside), state lives inside the component and can be changed by the component itself. When state changes, React automatically re-renders the component.",
      "example": "<strong>Props</strong> = data passed IN from parent. Read-only. Like a birthday gift — you receive it and use it, but you didn't create it.<br><br>\r\n      <strong>State</strong> = data the component manages itself. Can change. Like your own bank account — you control it and can change it.",
      "code": "function Counter() {\r\n  const [count, setCount] = React.useState(0); // state!\r\n  return <button onClick={() => setCount(count+1)}>{count}</button>;\r\n}"
    }
  },
  {
    "id": "react-07",
    "number": "07",
    "question": "What is one-way data flow (unidirectional data flow)?",
    "difficulty": "medium",
    "section": "Core Concepts",
    "answer": {
      "simple": "In React, data always flows in <strong>one direction only</strong>: from parent component down to child component through props. Children cannot send data back up directly — they must call a function given to them by the parent.",
      "example": "Parent passes a function as a prop. Child calls that function to communicate:\r\n      <pre>function Parent() {\r\n  const [name, setName] = useState('');\r\n  return <Input onChange={setName} />; // pass function down\r\n}\r\nfunction Input({ onChange }) {\r\n  return <input onChange={(e) => onChange(e.target.value)} />;\r\n  // child calls the function to send data UP\r\n}</pre>",
      "code": "function Parent() {\r\n  const [name, setName] = useState('');\r\n  return <Input onChange={setName} />; // pass function down\r\n}\r\nfunction Input({ onChange }) {\r\n  return <input onChange={(e) => onChange(e.target.value)} />;\r\n  // child calls the function to send data UP\r\n}"
    }
  },
  {
    "id": "react-08",
    "number": "08",
    "question": "What is re-rendering in React?",
    "difficulty": "easy",
    "section": "Core Concepts",
    "answer": {
      "simple": "Re-rendering means React calls your component function again to get the latest JSX, then updates the screen to match. It happens automatically when state or props change.",
      "example": "1. The component's own state changes (<code>setState</code> called).<br>\r\n      2. The component's props change (parent passed new data).<br>\r\n      3. A Context the component reads changes.<br>\r\n      4. The parent component re-renders (child re-renders too by default).<br><br>\r\n      ⚠️ Re-rendering does NOT always mean the real DOM changes — React compares and only updates what's different (reconciliation)."
    }
  },
  {
    "id": "react-09",
    "number": "09",
    "question": "What are the three phases of a React component's lifecycle?",
    "difficulty": "medium",
    "section": "Component Lifecycle (Deep Dive)",
    "answer": {
      "simple": "Every React component goes through three phases: <strong>Mount</strong> (born), <strong>Update</strong> (grows/changes), and <strong>Unmount</strong> (dies).",
      "example": "🐣 <strong>Mount</strong>: Component appears on screen for the first time. DOM elements are created. useEffect with <code>[]</code> runs here.<br><br>\r\n      🔄 <strong>Update</strong>: Component re-renders because state or props changed. useEffect with dependencies runs after each relevant change.<br><br>\r\n      💀 <strong>Unmount</strong>: Component is removed from the screen. The cleanup function returned from useEffect runs here to clean up timers, listeners, etc.",
      "code": "useEffect(() => {\r\n  console.log('MOUNT: component appeared');\r\n\r\n  return () => {\r\n    console.log('UNMOUNT: component is leaving');\r\n  };\r\n}, []); // empty array = mount + unmount only"
    }
  },
  {
    "id": "react-10",
    "number": "10",
    "question": "What happens at the Mount phase?",
    "difficulty": "medium",
    "section": "Component Lifecycle (Deep Dive)",
    "answer": {
      "simple": "Mounting is when a component appears on the screen for the <strong>very first time</strong>. React creates all the DOM elements, runs the component function, paints to the screen, and then runs useEffect (with <code>[]</code>).",
      "example": "1. React calls your component function → gets JSX.<br>\r\n      2. React creates real DOM elements from that JSX.<br>\r\n      3. Browser paints — user sees the component.<br>\r\n      4. useEffect callbacks with <code>[]</code> run.<br><br>\r\n      Common things to do on mount: fetch initial data, set up subscriptions, start timers, read localStorage."
    }
  },
  {
    "id": "react-11",
    "number": "11",
    "question": "What happens at the Update phase?",
    "difficulty": "medium",
    "section": "Component Lifecycle (Deep Dive)",
    "answer": {
      "simple": "The Update phase happens every time state or props change. React re-runs your component function, compares the new JSX to the old JSX (diffing), updates only what changed in the DOM, then runs useEffect for any changed dependencies.",
      "example": "1. State/props change triggers re-render.<br>\r\n      2. React calls your component function again → new JSX.<br>\r\n      3. React diffs new JSX vs old JSX (reconciliation).<br>\r\n      4. React updates only the changed parts of the real DOM.<br>\r\n      5. useEffect cleanup runs for the previous render (if any).<br>\r\n      6. useEffect callback runs if its dependencies changed."
    }
  },
  {
    "id": "react-12",
    "number": "12",
    "question": "What happens at the Unmount phase?",
    "difficulty": "medium",
    "section": "Component Lifecycle (Deep Dive)",
    "answer": {
      "simple": "Unmounting is when a component is removed from the screen — either because the parent stopped rendering it, or the user navigated away. The <strong>cleanup function</strong> returned from useEffect runs at this point.",
      "example": "Without cleanup, timers keep ticking, event listeners keep firing, WebSocket connections stay open — even after the component is gone. This wastes memory and causes hard-to-find bugs. Always clean up after yourself!",
      "code": "useEffect(() => {\r\n  const timer = setInterval(() => tick(), 1000);\r\n\r\n  return () => {\r\n    clearInterval(timer); // ← This runs on unmount!\r\n    // Also runs before the next effect if deps change\r\n  };\r\n}, []);"
    }
  },
  {
    "id": "react-13",
    "number": "13",
    "question": "What is the exact order of lifecycle events in a React functional component?",
    "difficulty": "hard",
    "section": "Component Lifecycle (Deep Dive)",
    "answer": {
      "simple": "",
      "example": "<strong>On first render (Mount):</strong><br>\r\n      1. Component function runs → JSX produced.<br>\r\n      2. DOM is updated (created from scratch).<br>\r\n      3. Browser paints the screen.<br>\r\n      4. useLayoutEffect runs (synchronously, before paint is visible).<br>\r\n      5. useEffect runs (asynchronously, after paint).<br><br>\r\n      <strong>On state/prop change (Update):</strong><br>\r\n      1. Component function runs again → new JSX.<br>\r\n      2. React diffs new vs old (reconciliation).<br>\r\n      3. DOM is updated (only changed parts).<br>\r\n      4. useLayoutEffect cleanup runs → useLayoutEffect runs.<br>\r\n      5. useEffect cleanup runs → useEffect runs.<br><br>\r\n      <strong>On removal (Unmount):</strong><br>\r\n      1. useLayoutEffect cleanup runs.<br>\r\n      2. useEffect cleanup runs.<br>\r\n      3. DOM elements are removed."
    }
  },
  {
    "id": "react-14",
    "number": "14",
    "question": "How do class component lifecycle methods map to hooks?",
    "difficulty": "medium",
    "section": "Component Lifecycle (Deep Dive)",
    "answer": {
      "simple": "Old class components had special lifecycle methods. Hooks replaced them all with just useEffect (and useState).",
      "example": "<code>componentDidMount</code> → <code>useEffect(() => {}, [])</code> (empty array = run once on mount)<br><br>\r\n      <code>componentDidUpdate</code> → <code>useEffect(() => {}, [dep])</code> (with dependencies)<br><br>\r\n      <code>componentWillUnmount</code> → the <code>return () => {}</code> cleanup inside useEffect<br><br>\r\n      <code>shouldComponentUpdate</code> → <code>React.memo</code> or <code>useMemo</code><br><br>\r\n      <code>getDerivedStateFromProps</code> → calculate value during render from props"
    }
  },
  {
    "id": "react-15",
    "number": "15",
    "question": "What does useEffect do?",
    "difficulty": "easy",
    "section": "useEffect & The Dependency Array (Deep Dive)",
    "answer": {
      "simple": "<code>useEffect</code> lets you run \"side effect\" code <strong>after</strong> the component renders. A side effect is anything that reaches outside the component — like fetching data, setting up a timer, or updating the browser title.",
      "example": "React renders first, updates the DOM, shows the user — then runs effects. This means effects never block the screen from appearing. The user always sees something right away, even before the data loads.",
      "code": "useEffect(() => {\r\n  document.title = `You have ${count} messages`;\r\n}, [count]); // run this every time 'count' changes"
    }
  },
  {
    "id": "react-16",
    "number": "16",
    "question": "What is the dependency array in useEffect?",
    "difficulty": "medium",
    "section": "useEffect & The Dependency Array (Deep Dive)",
    "answer": {
      "simple": "The dependency array is the second argument to useEffect. It tells React <strong>when to re-run the effect</strong>. React compares the array values between renders and only runs the effect when something in the array changed.",
      "example": "<strong>No array</strong>: effect runs after <em>every single render</em>. Usually not what you want.<br>\r\n      <pre>useEffect(() => { ... }); // runs every render!</pre>\r\n      <strong>Empty array []</strong>: effect runs only once — on mount.<br>\r\n      <pre>useEffect(() => { ... }, []); // runs once!</pre>\r\n      <strong>Array with values [a, b]</strong>: effect runs when a or b changes.<br>\r\n      <pre>useEffect(() => { ... }, [userId]); // runs when userId changes!</pre>",
      "code": "useEffect(() => {\r\n  // effect code\r\n}, [dep1, dep2]); // ← this is the dependency array"
    }
  },
  {
    "id": "react-17",
    "number": "17",
    "question": "How does React compare dependency array values?",
    "difficulty": "medium",
    "section": "useEffect & The Dependency Array (Deep Dive)",
    "answer": {
      "simple": "React uses <strong>Object.is()</strong> — a strict equality check — to compare each value in the dependency array between renders. Primitive values (numbers, strings, booleans) compare by value. Objects and arrays compare by <strong>reference</strong> (memory address).",
      "example": "<pre>// BAD — new object created every render!\r\n// This effect runs every render, even though data looks the same!\r\nuseEffect(() => {\r\n  console.log('ran');\r\n}, [{ id: 1 }]); // {} !== {} even if contents are same!\r\n\r\n// BAD — new array every render!\r\nuseEffect(() => {}, [[1, 2, 3]]); // [] !== [] by reference!\r\n\r\n// GOOD — compare the primitive value inside:\r\nuseEffect(() => {}, [user.id]); // compares the number directly</pre>\r\n      Putting objects or arrays created during render in deps will cause infinite loops!",
      "code": "// BAD — new object created every render!\r\n// This effect runs every render, even though data looks the same!\r\nuseEffect(() => {\r\n  console.log('ran');\r\n}, [{ id: 1 }]); // {} !== {} even if contents are same!\r\n\r\n// BAD — new array every render!\r\nuseEffect(() => {}, [[1, 2, 3]]); // [] !== [] by reference!\r\n\r\n// GOOD — compare the primitive value inside:\r\nuseEffect(() => {}, [user.id]); // compares the number directly"
    }
  },
  {
    "id": "react-18",
    "number": "18",
    "question": "What causes an infinite loop in useEffect?",
    "difficulty": "hard",
    "section": "useEffect & The Dependency Array (Deep Dive)",
    "answer": {
      "simple": "An infinite loop happens when your useEffect sets state → that causes a re-render → the effect runs again → sets state again → repeat forever. This crashes your app.",
      "example": "<strong>Cause 1</strong>: Effect sets state without any dependency limit.\r\n      <pre>// ❌ INFINITE LOOP:\r\nuseEffect(() => {\r\n  setCount(count + 1); // triggers re-render → effect runs → triggers...\r\n}); // no dependency array!</pre>\r\n      <strong>Cause 2</strong>: Object/array in deps that is recreated every render.\r\n      <pre>// ❌ INFINITE LOOP:\r\nconst options = { id: 1 }; // new object every render!\r\nuseEffect(() => {}, [options]); // always \"changed\"!</pre>\r\n      <strong>Fix</strong>: Add correct deps, use useMemo/useCallback for stable references, or use the functional form of setState.",
      "code": "// ❌ INFINITE LOOP:\r\nuseEffect(() => {\r\n  setCount(count + 1); // triggers re-render → effect runs → triggers...\r\n}); // no dependency array!"
    }
  },
  {
    "id": "react-19",
    "number": "19",
    "question": "What should and should NOT go in the dependency array?",
    "difficulty": "hard",
    "section": "useEffect & The Dependency Array (Deep Dive)",
    "answer": {
      "simple": "Put EVERYTHING that your effect reads from the component scope into the deps array. If your effect uses a variable and that variable can change, it must be in deps.",
      "example": "✅ Include: state variables, props, any values from component scope that change.<br>\r\n      ✅ Include: functions defined inside the component (or use useCallback on them).<br><br>\r\n      ❌ Don't include: <code>setState</code> functions (React guarantees they're stable).<br>\r\n      ❌ Don't include: <code>useRef.current</code> (refs don't trigger re-renders).<br>\r\n      ❌ Don't include: values defined outside the component (module-level constants, they never change).<br><br>\r\n      💡 Use the ESLint plugin <code>eslint-plugin-react-hooks</code> — it warns you when you miss a dependency!"
    }
  },
  {
    "id": "react-20",
    "number": "20",
    "question": "What is the cleanup function in useEffect and why is it important?",
    "difficulty": "medium",
    "section": "useEffect & The Dependency Array (Deep Dive)",
    "answer": {
      "simple": "The cleanup function is a function you <code>return</code> from useEffect. React calls it before the component unmounts AND before re-running the effect (if deps changed). It lets you clean up any resources your effect created.",
      "example": "1. When the component <strong>unmounts</strong> (removed from screen).<br>\r\n      2. Before the effect <strong>runs again</strong> — so it cleans up the previous run first.<br><br>\r\n      Example: userId changes → cleanup runs (unsubscribes old user) → effect runs (subscribes new user). Perfect!",
      "code": "useEffect(() => {\r\n  // SETUP: subscribe to something\r\n  const subscription = api.subscribe(userId, handleData);\r\n\r\n  // CLEANUP: undo the setup\r\n  return () => {\r\n    subscription.unsubscribe();\r\n  };\r\n}, [userId]);"
    }
  },
  {
    "id": "react-21",
    "number": "21",
    "question": "Why does useEffect run twice in development (React 18 StrictMode)?",
    "difficulty": "medium",
    "section": "useEffect & The Dependency Array (Deep Dive)",
    "answer": {
      "simple": "In React 18's Strict Mode (dev only), React intentionally mounts your component, unmounts it, then mounts it again. This forces your effects to run twice to help you catch missing cleanup functions.",
      "example": "React wants to make sure your effect + cleanup works correctly as a pair. If your effect runs twice and breaks things, it means your cleanup function is incomplete or wrong. This only happens in <strong>development</strong> — in production, effects run once.<br><br>\r\n      ✅ If your cleanup is correct, running twice is completely harmless.<br>\r\n      ❌ If running twice breaks your app, fix the cleanup — don't fight StrictMode!"
    }
  },
  {
    "id": "react-22",
    "number": "22",
    "question": "What is the difference between useEffect and useLayoutEffect?",
    "difficulty": "hard",
    "section": "useEffect & The Dependency Array (Deep Dive)",
    "answer": {
      "simple": "Both run after a render, but at different times. <code>useLayoutEffect</code> runs <em>before</em> the browser paints the screen. <code>useEffect</code> runs <em>after</em> the browser paints.",
      "example": "<strong>useLayoutEffect</strong>: Render → DOM updated → useLayoutEffect runs → Browser paints.<br>\r\n      <strong>useEffect</strong>: Render → DOM updated → Browser paints → useEffect runs.<br><br>\r\n      <strong>Use useLayoutEffect when</strong>: you need to measure a DOM element (width/height) and update the UI before the user sees it — avoiding a visual flicker. Example: a tooltip that needs to position itself based on available space.<br><br>\r\n      <strong>Default: always use useEffect</strong>. useLayoutEffect is synchronous and blocks the browser — only use it when you have a visible flicker to fix."
    }
  },
  {
    "id": "react-23",
    "number": "23",
    "question": "What are the rules of Hooks?",
    "difficulty": "easy",
    "section": "All Hooks — Deep Dive",
    "answer": {
      "simple": "1. Only call hooks at the <strong>top level</strong> — not inside if statements, loops, or nested functions.<br>\r\n      2. Only call hooks from <strong>React function components or custom hooks</strong> — not regular JavaScript functions.",
      "example": "React tracks hooks by their <strong>call order</strong>. It assigns state and effects by \"1st hook call = useState #1, 2nd hook call = useState #2...\" If you put a hook inside an if, it might be skipped on some renders, breaking the order and causing React to assign state to the wrong hook!\r\n      <pre>// ❌ BREAKS THE RULES:\r\nif (condition) {\r\n  const [val, setVal] = useState(0); // might be skipped!\r\n}\r\n\r\n// ✅ CORRECT:\r\nconst [val, setVal] = useState(0);\r\nif (condition) { /* use val here */ }</pre>",
      "code": "// ❌ BREAKS THE RULES:\r\nif (condition) {\r\n  const [val, setVal] = useState(0); // might be skipped!\r\n}\r\n\r\n// ✅ CORRECT:\r\nconst [val, setVal] = useState(0);\r\nif (condition) { /* use val here */ }"
    }
  },
  {
    "id": "react-24",
    "number": "24",
    "question": "How does useState work in detail?",
    "difficulty": "easy",
    "section": "All Hooks — Deep Dive",
    "answer": {
      "simple": "<code>useState</code> gives you a state variable and a setter function. When you call the setter, React schedules a re-render with the new value. The state variable always holds the value from the <em>last committed render</em>.",
      "example": "<strong>State updates are batched</strong> — React doesn't re-render after every single setState call. It batches them together for one re-render.<br><br>\r\n      <strong>State doesn't change during a render</strong> — even after calling setCount(5), the count variable is still the old value for the rest of that render. The new value appears on the next render.<br><br>\r\n      <strong>Use functional updates for derived state</strong>:\r\n      <pre>setCount(prev => prev + 1); // safe, always uses latest value\r\n// NOT: setCount(count + 1) // might use stale value in closures!</pre>",
      "code": "const [count, setCount] = useState(0);\r\n//     ↑           ↑            ↑\r\n//  current    setter fn    initial value\r\n//   value"
    }
  },
  {
    "id": "react-25",
    "number": "25",
    "question": "What is a stale closure in React hooks?",
    "difficulty": "medium",
    "section": "All Hooks — Deep Dive",
    "answer": {
      "simple": "A stale closure is when a hook (usually useEffect or useCallback) \"captures\" an old value of a variable and keeps using it even after the variable has changed. The function closes over the old value and gets \"stuck.\"",
      "example": "Imagine taking a photo of a whiteboard. Your photo shows what was on the board at that moment. Even if someone erases and rewrites, your photo still shows the old content. That's a stale closure — a snapshot of old values.",
      "code": "// STALE CLOSURE BUG:\r\nconst [count, setCount] = useState(0);\r\n\r\nuseEffect(() => {\r\n  const interval = setInterval(() => {\r\n    console.log(count); // always logs 0! — stale closure\r\n    setCount(count + 1); // always sets to 1, not incrementing!\r\n  }, 1000);\r\n  return () => clearInterval(interval);\r\n}, []); // empty deps — count is \"stuck\" at 0 in this effect\r\n\r\n// FIX — use functional update:\r\nsetCount(prev => prev + 1); // always uses the latest value"
    }
  },
  {
    "id": "react-26",
    "number": "26",
    "question": "What does useRef do and when should you use it?",
    "difficulty": "medium",
    "section": "All Hooks — Deep Dive",
    "answer": {
      "simple": "<code>useRef</code> gives you a <strong>mutable box</strong> (object with a .current property) that persists across renders without causing re-renders when you change it. It has two main uses.",
      "example": "<strong>1. Access DOM elements directly:</strong>\r\n      <pre>const inputRef = useRef(null);\r\n<input ref={inputRef} />\r\n// Later:\r\ninputRef.current.focus(); // directly focus the input</pre>\r\n      <strong>2. Store values that DON'T trigger re-renders:</strong>\r\n      <pre>const timerIdRef = useRef(null);\r\n// Storing a timer ID — changing this shouldn't re-render!\r\ntimerIdRef.current = setInterval(tick, 1000);\r\n// Later:\r\nclearInterval(timerIdRef.current);</pre>\r\n      Key: ref.current changes are <strong>immediate and synchronous</strong>, but don't trigger re-renders.",
      "code": "const inputRef = useRef(null);\r\n<input ref={inputRef} />\r\n// Later:\r\ninputRef.current.focus(); // directly focus the input"
    }
  },
  {
    "id": "react-27",
    "number": "27",
    "question": "What is useContext and how does the Context API work?",
    "difficulty": "medium",
    "section": "All Hooks — Deep Dive",
    "answer": {
      "simple": "Context is React's way to share data across many components without passing props manually down every level. <code>useContext</code> lets any component read from a context directly.",
      "example": "Every component that calls useContext re-renders when the context value changes — even if the part it uses didn't change. For frequently changing values, consider splitting contexts or using a state manager like Zustand.",
      "code": "// Step 1: Create context\r\nconst ThemeContext = React.createContext('light');\r\n\r\n// Step 2: Wrap with Provider — all children can now read this\r\nfunction App() {\r\n  return (\r\n    <ThemeContext.Provider value=\"dark\">\r\n      <Header />\r\n      <Main />\r\n    </ThemeContext.Provider>\r\n  );\r\n}\r\n\r\n// Step 3: Any child reads it — no props needed!\r\nfunction Header() {\r\n  const theme = useContext(ThemeContext); // \"dark\"\r\n  return <nav className={theme}>...</nav>;\r\n}"
    }
  },
  {
    "id": "react-28",
    "number": "28",
    "question": "What does useMemo do and when should you use it?",
    "difficulty": "hard",
    "section": "All Hooks — Deep Dive",
    "answer": {
      "simple": "<code>useMemo</code> caches (memoizes) the result of a calculation between renders. It only recalculates when its dependencies change. Use it when a calculation is genuinely expensive.",
      "example": "✅ Use when: filtering/sorting large lists, expensive math, creating stable object references for deps arrays.<br>\r\n      ❌ Don't use for simple calculations (<code>a + b</code>) — the overhead of useMemo is worse than just recalculating.<br>\r\n      ❌ Don't use for JSX output — use React.memo for that.<br><br>\r\n      Rule: profile first, optimize second. Most components are fast enough without it.",
      "code": "const filteredList = useMemo(() => {\r\n  // This could filter 10,000 items — expensive!\r\n  return items.filter(item => item.name.includes(query));\r\n}, [items, query]); // Only recalculate when items or query changes"
    }
  },
  {
    "id": "react-29",
    "number": "29",
    "question": "What does useCallback do and how is it different from useMemo?",
    "difficulty": "hard",
    "section": "All Hooks — Deep Dive",
    "answer": {
      "simple": "<code>useCallback</code> caches a <strong>function definition</strong> between renders. Without it, a new function object is created on every render. This matters when the function is passed to a memoized child component.",
      "example": "<code>useMemo</code> = caches the <strong>result</strong> of calling a function. <code>useMemo(() => fn(), deps)</code><br>\r\n      <code>useCallback</code> = caches the <strong>function itself</strong>. <code>useCallback(fn, deps)</code><br><br>\r\n      They are actually equivalent: <code>useCallback(fn, deps)</code> is the same as <code>useMemo(() => fn, deps)</code>",
      "code": "// Without useCallback — new function every render:\r\nconst handleClick = () => doSomething(id);\r\n// ↑ Different reference each render!\r\n\r\n// With useCallback — same function reference:\r\nconst handleClick = useCallback(() => {\r\n  doSomething(id);\r\n}, [id]); // only recreate when id changes"
    }
  },
  {
    "id": "react-30",
    "number": "30",
    "question": "What does useReducer do and when should you use it over useState?",
    "difficulty": "hard",
    "section": "All Hooks — Deep Dive",
    "answer": {
      "simple": "<code>useReducer</code> is like useState but for complex state logic. Instead of calling setState directly, you send an \"action\" object that describes what happened, and a \"reducer\" function decides how state should change.",
      "example": "Use <strong>useState</strong> for: simple values, independent pieces of state, when next state doesn't depend on complex logic.<br>\r\n      Use <strong>useReducer</strong> for: multiple related values that change together, complex state logic, when next state depends on current state in multiple ways, when you want all state transitions named and visible.",
      "code": "function reducer(state, action) {\r\n  switch (action.type) {\r\n    case 'increment': return { count: state.count + 1 };\r\n    case 'decrement': return { count: state.count - 1 };\r\n    case 'reset':     return { count: 0 };\r\n    default: return state;\r\n  }\r\n}\r\n\r\nconst [state, dispatch] = useReducer(reducer, { count: 0 });\r\n// To update: dispatch({ type: 'increment' })"
    }
  },
  {
    "id": "react-31",
    "number": "31",
    "question": "What are custom hooks and how do you build one?",
    "difficulty": "hard",
    "section": "All Hooks — Deep Dive",
    "answer": {
      "simple": "A custom hook is a JavaScript function whose name starts with <code>use</code> and that calls other hooks inside. It lets you extract and share stateful logic between multiple components.",
      "example": "They extract logic OUT of components, making components smaller and logic reusable. Each component that calls the hook gets its own independent state — they don't share state, just the logic.",
      "code": "// Custom hook: useFetch\r\nfunction useFetch(url) {\r\n  const [data, setData] = useState(null);\r\n  const [loading, setLoading] = useState(true);\r\n  const [error, setError] = useState(null);\r\n\r\n  useEffect(() => {\r\n    setLoading(true);\r\n    fetch(url)\r\n      .then(r => r.json())\r\n      .then(data => { setData(data); setLoading(false); })\r\n      .catch(err => { setError(err); setLoading(false); });\r\n  }, [url]);\r\n\r\n  return { data, loading, error };\r\n}\r\n\r\n// Use in any component:\r\nconst { data, loading, error } = useFetch('/api/users');"
    }
  },
  {
    "id": "react-32",
    "number": "32",
    "question": "What does useId do?",
    "difficulty": "medium",
    "section": "All Hooks — Deep Dive",
    "answer": {
      "simple": "<code>useId</code> generates a stable, unique ID for each component instance. It's guaranteed to be the same between server and client renders (important for SSR) and unique across all components.",
      "example": "Math.random() generates different values on server vs client — causing hydration mismatches in SSR. useId generates the same value on both, keeping things in sync.",
      "code": "function FormField({ label }) {\r\n  const id = useId(); // e.g. \":r1:\"\r\n  return (\r\n    <>\r\n      <label htmlFor={id}>{label}</label>\r\n      <input id={id} />\r\n    </>\r\n  );\r\n}\r\n// Multiple <FormField /> components each get different IDs automatically!"
    }
  },
  {
    "id": "react-33",
    "number": "33",
    "question": "What does useTransition do?",
    "difficulty": "hard",
    "section": "All Hooks — Deep Dive",
    "answer": {
      "simple": "<code>useTransition</code> lets you mark a state update as \"not urgent\" so React can keep the UI responsive. React may delay the non-urgent update to handle more urgent things first (like keystrokes).",
      "example": "<code>isPending</code> is true while the transition is waiting to complete. Use it to show a loading indicator:\r\n      <pre>{isPending && <Spinner />}</pre>\r\n      Without useTransition: typing feels sluggish because React has to filter 10,000 items on every keystroke. With it: typing is instant, filtering catches up in the background.",
      "code": "const [isPending, startTransition] = useTransition();\r\n\r\nfunction handleSearch(e) {\r\n  const query = e.target.value;\r\n\r\n  // Urgent — update input immediately:\r\n  setInputValue(query);\r\n\r\n  // Non-urgent — filtering 10,000 results can wait:\r\n  startTransition(() => {\r\n    setFilteredResults(filterHugeList(query));\r\n  });\r\n}"
    }
  },
  {
    "id": "react-34",
    "number": "34",
    "question": "What does useDeferredValue do?",
    "difficulty": "hard",
    "section": "All Hooks — Deep Dive",
    "answer": {
      "simple": "<code>useDeferredValue</code> takes a value and returns a \"deferred\" version of it that lags behind on purpose. React shows the deferred value slightly later to keep things responsive.",
      "example": "<code>useTransition</code>: you control the state update. Wrap the slow setter in startTransition.<br>\r\n      <code>useDeferredValue</code>: you receive a value you don't control (from props or context). Defer the received value.<br><br>\r\n      Same end result, different use cases. If you own the setState — use useTransition. If you receive the value — use useDeferredValue.",
      "code": "const [query, setQuery] = useState('');\r\nconst deferredQuery = useDeferredValue(query);\r\n\r\n// query updates instantly (for the input display)\r\n// deferredQuery updates slightly later (for expensive filtering)\r\n\r\nconst results = useMemo(\r\n  () => slowSearch(deferredQuery),\r\n  [deferredQuery]\r\n);"
    }
  },
  {
    "id": "react-35",
    "number": "35",
    "question": "What is the lifting state up?",
    "difficulty": "medium",
    "section": "State Management",
    "answer": {
      "simple": "When two sibling components need to share the same data, you <strong>lift</strong> (move) the state up to their closest common parent. The parent holds the state and passes it down to both children as props.",
      "example": "State lives as low as possible in the tree, but as high as needed for sharing. Don't lift higher than necessary — it causes unnecessary re-renders.",
      "code": "// ❌ Before: each component has its own temperature state\r\n// They can't stay in sync!\r\n\r\n// ✅ After: lift state to parent\r\nfunction App() {\r\n  const [temp, setTemp] = useState(0); // shared state here!\r\n  return (\r\n    <>\r\n      <CelsiusInput temp={temp} onchange={setTemp} />\r\n      <FahrenheitInput temp={temp} onChange={setTemp} />\r\n    </>\r\n  );\r\n}"
    }
  },
  {
    "id": "react-36",
    "number": "36",
    "question": "What is prop drilling and how do you solve it?",
    "difficulty": "medium",
    "section": "State Management",
    "answer": {
      "simple": "Prop drilling is passing props through many layers of components just to reach a deeply nested child — even though the middle components don't use the data.",
      "example": "Problem: App → Layout → Sidebar → Menu → MenuItem (only MenuItem uses \"user\")<br>\r\n      Every component in between must pass user as a prop — messy!<br><br>\r\n      ✅ <strong>Solution 1 — Context API</strong>: Share user via context, any component reads it directly.<br>\r\n      ✅ <strong>Solution 2 — Component composition</strong>: Pass children/components as props instead of data.<br>\r\n      ✅ <strong>Solution 3 — State manager</strong>: Zustand, Redux — global store accessible anywhere.<br>\r\n      ✅ <strong>Solution 4 — Lift and flatten</strong>: Sometimes restructuring components eliminates drilling."
    }
  },
  {
    "id": "react-37",
    "number": "37",
    "question": "What is state batching and how does it work in React 18?",
    "difficulty": "hard",
    "section": "State Management",
    "answer": {
      "simple": "State batching means React groups multiple state updates together and processes them in a single re-render — instead of re-rendering after each individual setState call.",
      "example": "Before React 18: batching only worked inside React event handlers. setState inside setTimeout, Promises, or native events caused multiple re-renders.<br><br>\r\n      React 18+: batching works <strong>everywhere automatically</strong> — inside Promises, setTimeout, async functions. This is called \"Automatic Batching.\"<br><br>\r\n      To opt out: use <code>flushSync</code> to force an immediate render.",
      "code": "function handleClick() {\r\n  setCount(c => c + 1); // not 3 re-renders...\r\n  setName('Alice');      // ...React batches them all...\r\n  setOpen(true);         // ...and does ONE re-render at the end!\r\n}"
    }
  },
  {
    "id": "react-38",
    "number": "38",
    "question": "What is the difference between controlled and uncontrolled components?",
    "difficulty": "medium",
    "section": "State Management",
    "answer": {
      "simple": "<strong>Controlled</strong>: React state is the single source of truth for the input's value. Every keystroke updates state, state drives the displayed value.<br><strong>Uncontrolled</strong>: The DOM itself stores the value. You read it with a ref when you need it.",
      "example": "Controlled → form validation, dependent fields, instant feedback, form libraries (React Hook Form).<br>Uncontrolled → file uploads (must be uncontrolled), simple one-time-read forms, when performance is critical.",
      "code": "// Controlled (React owns the value):\r\nconst [name, setName] = useState('');\r\n<input value={name} onChange={e => setName(e.target.value)} />\r\n\r\n// Uncontrolled (DOM owns the value):\r\nconst nameRef = useRef();\r\n<input ref={nameRef} defaultValue=\"Alice\" />\r\n// Read when needed: nameRef.current.value"
    }
  },
  {
    "id": "react-39",
    "number": "39",
    "question": "What is Zustand and how does it compare to Context?",
    "difficulty": "hard",
    "section": "State Management",
    "answer": {
      "simple": "Zustand is a tiny global state library. You create a store with state and actions, and any component can read or update it — with much less boilerplate than Redux and better performance than Context.",
      "example": "Context: Re-renders ALL consumers when value changes. Good for slow-changing data (theme, user).<br>\r\n      Zustand: Only re-renders components that read the specific value that changed (fine-grained subscriptions). Better for frequently-changing global state like a shopping cart or real-time data.",
      "code": "import { create } from 'zustand';\r\n\r\nconst useStore = create((set) => ({\r\n  count: 0,\r\n  user: null,\r\n  increment: () => set(state => ({ count: state.count + 1 })),\r\n  setUser: (user) => set({ user }),\r\n}));\r\n\r\n// In any component:\r\nconst { count, increment } = useStore();"
    }
  },
  {
    "id": "react-40",
    "number": "40",
    "question": "What is reconciliation?",
    "difficulty": "medium",
    "section": "Rendering & Reconciliation",
    "answer": {
      "simple": "Reconciliation is the process React uses to figure out what changed between two renders and update only those parts of the real DOM. It's the engine behind \"React only updates what's necessary.\"",
      "example": "1. State changes → React re-renders the component → new Virtual DOM tree.<br>\r\n      2. React compares the new Virtual DOM tree with the old one (this comparison is called <strong>diffing</strong>).<br>\r\n      3. React finds the differences (what changed, was added, or removed).<br>\r\n      4. React updates <em>only those specific parts</em> of the real DOM.<br><br>\r\n      React uses clever assumptions to make diffing fast: different element types create different trees, and the <code>key</code> prop helps track list items."
    }
  },
  {
    "id": "react-41",
    "number": "41",
    "question": "Why is the key prop important in lists?",
    "difficulty": "medium",
    "section": "Rendering & Reconciliation",
    "answer": {
      "simple": "The <code>key</code> prop gives each list item a stable identity across renders. React uses it to know which items were added, removed, or reordered — without keys, React has to guess and often gets it wrong.",
      "example": "Without keys (or with index keys): if you add an item to the beginning of a list, React thinks every item changed — it destroys and recreates all DOM nodes. With proper keys: React knows only the new item was added; existing items are moved, not recreated.<br><br>\r\n      <strong>Why index keys are dangerous:</strong> If item at index 0 is now different data (reorder/delete), React reuses the old DOM node with new content — causing bugs like: input values staying in wrong place, wrong item highlighted, animations breaking.",
      "code": "// ❌ Bad — index as key:\r\n{items.map((item, index) => <Item key={index} data={item} />)}\r\n\r\n// ✅ Good — unique stable ID from data:\r\n{items.map(item => <Item key={item.id} data={item} />)}"
    }
  },
  {
    "id": "react-42",
    "number": "42",
    "question": "What is React Fiber?",
    "difficulty": "hard",
    "section": "Rendering & Reconciliation",
    "answer": {
      "simple": "Fiber is React's internal rendering engine (introduced in React 16). It breaks rendering work into small units that can be paused, prioritized, and resumed — so the browser stays responsive even during heavy rendering.",
      "example": "<strong>Before Fiber (React 15)</strong>: Rendering was one long, uninterruptible call stack. A complex re-render could freeze the browser for 100ms+.<br><br>\r\n      <strong>After Fiber</strong>: Rendering is split into units of work. React can pause after each unit, check if there's something more urgent (a user click), handle it, then resume rendering. This enables all Concurrent features."
    }
  },
  {
    "id": "react-43",
    "number": "43",
    "question": "What is React.memo and how does it prevent unnecessary re-renders?",
    "difficulty": "medium",
    "section": "Rendering & Reconciliation",
    "answer": {
      "simple": "<code>React.memo</code> wraps a component and tells React: \"only re-render this component if its props actually changed.\" If the parent re-renders but passes the same props, the memoized child is skipped.",
      "example": "If you pass a new function or object as props on every parent render, React.memo won't help — the new object reference makes it \"different\" every time. Combine with useCallback and useMemo for the props to make memoization effective.",
      "code": "const ExpensiveChart = React.memo(function Chart({ data, height }) {\r\n  // This only re-renders if data or height changes\r\n  return <canvas ...></canvas>;\r\n});\r\n\r\n// Custom comparison function (optional):\r\nconst Chart = React.memo(Chart, (prevProps, nextProps) => {\r\n  // Return true to SKIP re-render (same), false to re-render (different)\r\n  return prevProps.data.length === nextProps.data.length;\r\n});"
    }
  },
  {
    "id": "react-44",
    "number": "44",
    "question": "What is the key trick for resetting component state?",
    "difficulty": "hard",
    "section": "Rendering & Reconciliation",
    "answer": {
      "simple": "Changing a component's <code>key</code> prop forces React to completely destroy the old component and create a brand new one — resetting all state. This is simpler than manually resetting each state variable.",
      "example": "Switch between different users/items that share the same component. Reset a form after cancellation. Start an animation fresh. Much cleaner than using useEffect to manually reset all state variables.",
      "code": "// When userId changes, ProfileForm starts completely fresh:\r\n<ProfileForm key={userId} userId={userId} />\r\n\r\n// Without the key trick, switching from user A to user B\r\n// would show user B's data in form fields pre-filled with\r\n// user A's old state values!"
    }
  },
  {
    "id": "react-45",
    "number": "45",
    "question": "What is lazy loading and code splitting in React?",
    "difficulty": "hard",
    "section": "Rendering & Reconciliation",
    "answer": {
      "simple": "<strong>Code splitting</strong> breaks your app's JavaScript bundle into smaller chunks. <strong>Lazy loading</strong> loads those chunks only when needed — not all upfront. This makes the first page load much faster.",
      "example": "Without code splitting: user downloads ALL page code on first visit — even for pages they may never see. With it: only the current page's code loads first. Other pages load on demand. Faster initial load = better user experience and Core Web Vitals.",
      "code": "import { lazy, Suspense } from 'react';\r\n\r\n// Component code loads only when this route is visited:\r\nconst AdminPanel = lazy(() => import('./AdminPanel'));\r\nconst Reports = lazy(() => import('./Reports'));\r\n\r\nfunction App() {\r\n  return (\r\n    <Suspense fallback={<LoadingSpinner />}>\r\n      <Routes>\r\n        <Route path=\"/admin\" element={<AdminPanel />} />\r\n        <Route path=\"/reports\" element={<Reports />} />\r\n      </Routes>\r\n    </Suspense>\r\n  );\r\n}"
    }
  },
  {
    "id": "react-46",
    "number": "46",
    "question": "How do events work in React (synthetic events)?",
    "difficulty": "easy",
    "section": "Events, Forms & User Interaction",
    "answer": {
      "simple": "React wraps the browser's native events in its own <strong>Synthetic Event</strong> system. This gives you a consistent cross-browser event API. Event names are camelCase (<code>onClick</code>, <code>onChange</code>).",
      "example": "React doesn't attach a listener to each element. It attaches ONE listener to the root DOM node and uses event bubbling to handle all events from there. This is more efficient and is why all events \"bubble up\" in React the same way as in vanilla JS.",
      "code": "// HTML: onclick=\"handleClick()\"   ← string\r\n// React: onClick={handleClick}    ← function reference\r\n\r\nfunction Button() {\r\n  function handleClick(event) {\r\n    event.preventDefault(); // works same in all browsers\r\n    console.log(event.target.value);\r\n  }\r\n  return <button onClick={handleClick}>Click</button>;\r\n}"
    }
  },
  {
    "id": "react-47",
    "number": "47",
    "question": "How do you handle forms in React?",
    "difficulty": "medium",
    "section": "Events, Forms & User Interaction",
    "answer": {
      "simple": "The most common pattern is <strong>controlled components</strong> — connect each input's value to state so React always knows what's in the form.",
      "code": "function LoginForm() {\r\n  const [email, setEmail] = useState('');\r\n  const [password, setPassword] = useState('');\r\n\r\n  function handleSubmit(e) {\r\n    e.preventDefault(); // stop page reload\r\n    loginUser({ email, password });\r\n  }\r\n\r\n  return (\r\n    <form onSubmit={handleSubmit}>\r\n      <input\r\n        type=\"email\"\r\n        value={email}\r\n        onChange={e => setEmail(e.target.value)}\r\n      />\r\n      <input\r\n        type=\"password\"\r\n        value={password}\r\n        onChange={e => setPassword(e.target.value)}\r\n      />\r\n      <button type=\"submit\">Login</button>\r\n    </form>\r\n  );\r\n}"
    }
  },
  {
    "id": "react-48",
    "number": "48",
    "question": "What is event bubbling and how do you stop it?",
    "difficulty": "medium",
    "section": "Events, Forms & User Interaction",
    "answer": {
      "simple": "Event bubbling means when an event happens on a child element, it also fires on all parent elements going up the tree — like a bubble rising to the surface.",
      "example": "Closing a modal when clicking the backdrop (but not when clicking inside the modal). Preventing a card's click handler from firing when clicking a button inside the card.",
      "code": "<div onClick={() => console.log('div clicked!')}>\r\n  <button onClick={(e) => {\r\n    e.stopPropagation(); // ← stops event from bubbling up\r\n    console.log('button clicked!');\r\n  }}>\r\n    Click me\r\n  </button>\r\n</div>\r\n// Without stopPropagation: both \"button clicked\" AND \"div clicked\" fire!\r\n// With stopPropagation: only \"button clicked\" fires."
    }
  },
  {
    "id": "react-49",
    "number": "49",
    "question": "How do you debounce user input in React?",
    "difficulty": "medium",
    "section": "Events, Forms & User Interaction",
    "answer": {
      "simple": "Debouncing delays running a function until the user stops doing something for a set amount of time. Useful for search inputs — don't hit the API on every single keystroke, wait until they stop typing.",
      "example": "Use <code>lodash.debounce</code> or a custom <code>useDebounce</code> hook for cleaner code. Store the debounced function in a ref or useCallback so it doesn't get recreated every render.",
      "code": "function SearchBox() {\r\n  const [query, setQuery] = useState('');\r\n  const timerRef = useRef(null);\r\n\r\n  function handleChange(e) {\r\n    const value = e.target.value;\r\n    setQuery(value); // update input immediately\r\n\r\n    clearTimeout(timerRef.current); // clear previous timer\r\n    timerRef.current = setTimeout(() => {\r\n      searchAPI(value); // only search after 500ms of no typing\r\n    }, 500);\r\n  }\r\n\r\n  return <input value={query} onChange={handleChange} />;\r\n}"
    }
  },
  {
    "id": "react-50",
    "number": "50",
    "question": "What is component composition and why is it preferred over inheritance?",
    "difficulty": "medium",
    "section": "Component Patterns & Composition",
    "answer": {
      "simple": "Composition means building complex components by combining simpler ones — using the <code>children</code> prop or passing components as props. React recommends composition over inheritance for code reuse.",
      "example": "JavaScript class inheritance is rigid — you inherit everything from the parent, even what you don't want. Composition is flexible — you combine exactly what you need, when you need it. The React team says: \"We haven't found any use cases where we'd recommend creating component inheritance hierarchies.\"",
      "code": "// Composition using children:\r\nfunction Card({ title, children }) {\r\n  return (\r\n    <div className=\"card\">\r\n      <h2>{title}</h2>\r\n      <div className=\"body\">{children}</div> {/* flexible content */}\r\n    </div>\r\n  );\r\n}\r\n\r\n// Use it with any content:\r\n<Card title=\"User Profile\">\r\n  <Avatar />\r\n  <Bio />\r\n  <FollowButton />\r\n</Card>"
    }
  },
  {
    "id": "react-51",
    "number": "51",
    "question": "What are Higher-Order Components (HOC)?",
    "difficulty": "hard",
    "section": "Component Patterns & Composition",
    "answer": {
      "simple": "A HOC is a function that takes a component and returns a new enhanced component — adding extra behavior or data without changing the original component.",
      "example": "Both share logic. HOCs are an older pattern that wraps components. Custom hooks are the modern approach — cleaner, no extra component layer in the tree, no \"wrapper hell.\" Prefer custom hooks in new code.",
      "code": "// HOC: withAuth — adds authentication check\r\nfunction withAuth(Component) {\r\n  return function AuthWrapper(props) {\r\n    const { isLoggedIn } = useAuth();\r\n    if (!isLoggedIn) return <Navigate to=\"/login\" />;\r\n    return <Component {...props} />; // spread all original props through!\r\n  };\r\n}\r\n\r\nconst ProtectedDashboard = withAuth(Dashboard);\r\nconst ProtectedSettings = withAuth(Settings);"
    }
  },
  {
    "id": "react-52",
    "number": "52",
    "question": "What are Error Boundaries?",
    "difficulty": "hard",
    "section": "Component Patterns & Composition",
    "answer": {
      "simple": "An Error Boundary is a special component that catches JavaScript errors in its children tree and shows a fallback UI instead of crashing the whole app. It's like a try-catch for components.",
      "example": "⚠️ Error Boundaries are still <strong>class components</strong> — there's no hook equivalent yet.<br>\r\n      They only catch errors during rendering, lifecycle methods, and constructor.<br>\r\n      They do NOT catch: event handler errors, async errors (setTimeout, fetch), or errors in the boundary itself.<br><br>\r\n      <strong>Recommended approach</strong>: Use the <code>react-error-boundary</code> npm package — it gives you a functional component wrapper and error recovery hooks.",
      "code": "import { ErrorBoundary } from 'react-error-boundary';\r\n\r\n<ErrorBoundary fallback={<p>Something went wrong</p>}>\r\n  <ComponentThatMightCrash />\r\n</ErrorBoundary>"
    }
  },
  {
    "id": "react-53",
    "number": "53",
    "question": "What is a React Portal and when do you need one?",
    "difficulty": "hard",
    "section": "Component Patterns & Composition",
    "answer": {
      "simple": "A Portal renders a component's HTML outside of its parent's DOM node — but the component still behaves as a React child (events bubble up normally through the React tree, not the DOM tree).",
      "example": "CSS problem: If a parent has <code>overflow: hidden</code> or a low <code>z-index</code>, a child modal or tooltip gets clipped or hidden behind other elements. With a Portal, the modal renders at the top of the DOM (outside the clipping parent) and appears on top of everything — but React events still work normally.",
      "code": "// Render modal outside the #root div:\r\nReactDOM.createPortal(\r\n  <Modal />,\r\n  document.getElementById('modal-root') // different DOM node!\r\n);"
    }
  },
  {
    "id": "react-54",
    "number": "54",
    "question": "What is forwardRef and why is it needed?",
    "difficulty": "hard",
    "section": "Component Patterns & Composition",
    "answer": {
      "simple": "By default, the <code>ref</code> prop doesn't pass through to child components — React intercepts it. <code>forwardRef</code> lets you pass a ref from a parent all the way through to a DOM element inside a child component.",
      "example": "Reusable input components that need to be focused programmatically. Design system components (Button, Input) that need to forward refs for accessibility. Animation libraries that need to measure DOM elements.",
      "code": "// Without forwardRef: parent can't access the input inside Child\r\n// With forwardRef:\r\nconst FancyInput = React.forwardRef((props, ref) => {\r\n  return <input ref={ref} className=\"fancy\" {...props} />;\r\n});\r\n\r\n// Parent can now focus the input inside FancyInput:\r\nfunction Parent() {\r\n  const inputRef = useRef();\r\n  return <FancyInput ref={inputRef} />;\r\n  // inputRef.current is the real <input> DOM element!\r\n}"
    }
  },
  {
    "id": "react-55",
    "number": "55",
    "question": "What is the Compound Component pattern?",
    "difficulty": "medium",
    "section": "Component Patterns & Composition",
    "answer": {
      "simple": "Compound components are a group of components that work together and share state implicitly through context. Like HTML's <code><select></code> and <code><option></code> — they work together without you wiring them up.",
      "example": "Flexible API — the consumer decides the structure. No prop wiring between children. Children automatically share state from the parent. Common in design system libraries like Radix UI and Headless UI.",
      "code": "// Parent shares state via context, children consume it:\r\n<Accordion>\r\n  <Accordion.Item>\r\n    <Accordion.Header>What is React?</Accordion.Header>\r\n    <Accordion.Body>React is a UI library...</Accordion.Body>\r\n  </Accordion.Item>\r\n  <Accordion.Item>\r\n    <Accordion.Header>What is JSX?</Accordion.Header>\r\n    <Accordion.Body>JSX is...</Accordion.Body>\r\n  </Accordion.Item>\r\n</Accordion>"
    }
  },
  {
    "id": "react-56",
    "number": "56",
    "question": "What is React Router and how do you use it?",
    "difficulty": "medium",
    "section": "Routing",
    "answer": {
      "simple": "React Router is the standard routing library for React. It syncs the browser's URL with what React renders — changing the URL shows a different component without a full page reload.",
      "example": "<code>useNavigate()</code> — navigate programmatically.<br>\r\n      <code>useParams()</code> — read URL parameters like <code>:id</code>.<br>\r\n      <code>useLocation()</code> — read current URL path and query string.<br>\r\n      <code>useSearchParams()</code> — read/write URL query parameters (<code>?page=2</code>).",
      "code": "import { BrowserRouter, Routes, Route } from 'react-router-dom';\r\n\r\nfunction App() {\r\n  return (\r\n    <BrowserRouter>\r\n      <Routes>\r\n        <Route path=\"/\" element={<Home />} />\r\n        <Route path=\"/about\" element={<About />} />\r\n        <Route path=\"/user/:id\" element={<UserPage />} />\r\n        <Route path=\"*\" element={<NotFound />} /> {/* 404 */}\r\n      </Routes>\r\n    </BrowserRouter>\r\n  );\r\n}"
    }
  },
  {
    "id": "react-57",
    "number": "57",
    "question": "What is the difference between client-side and server-side routing?",
    "difficulty": "medium",
    "section": "Routing",
    "answer": {
      "simple": "<strong>Server-side routing</strong>: every URL change requests a new HTML page from the server. Full page reload. Traditional websites.<br><strong>Client-side routing</strong>: the browser handles URL changes with JavaScript, swapping components without reloading. React Router does this.",
      "example": "✅ Much faster navigation — no server round trip, no page reload.<br>\r\n      ✅ Smooth transitions and animations between pages.<br>\r\n      ✅ Preserve state between navigations (shopping cart, form drafts).<br><br>\r\n      ❌ Disadvantage: requires JavaScript to work. Initial load may be slower. Need extra setup for SEO (search engines need to see content). That's why Next.js combines both approaches!"
    }
  },
  {
    "id": "react-58",
    "number": "58",
    "question": "How do you protect routes (authentication-based routing)?",
    "difficulty": "medium",
    "section": "Routing",
    "answer": {
      "simple": "Create a \"Protected Route\" wrapper component that checks if the user is logged in. If yes, show the page. If no, redirect to login.",
      "code": "function ProtectedRoute({ children }) {\r\n  const { isLoggedIn } = useAuth();\r\n\r\n  if (!isLoggedIn) {\r\n    return <Navigate to=\"/login\" replace />;\r\n  }\r\n\r\n  return children;\r\n}\r\n\r\n// Use it in your routes:\r\n<Route\r\n  path=\"/dashboard\"\r\n  element={\r\n    <ProtectedRoute>\r\n      <Dashboard />\r\n    </ProtectedRoute>\r\n  }\r\n/>"
    }
  },
  {
    "id": "react-59",
    "number": "59",
    "question": "How do you fetch data in React properly?",
    "difficulty": "medium",
    "section": "Data Fetching & Side Effects",
    "answer": {
      "simple": "Use <code>useEffect</code> with an empty dependency array to fetch data when the component mounts. Always handle loading and error states, and cancel the fetch if the component unmounts before the data arrives.",
      "code": "function UserList() {\r\n  const [users, setUsers] = useState([]);\r\n  const [loading, setLoading] = useState(true);\r\n  const [error, setError] = useState(null);\r\n\r\n  useEffect(() => {\r\n    let cancelled = false; // cancel flag!\r\n\r\n    fetch('/api/users')\r\n      .then(res => res.json())\r\n      .then(data => {\r\n        if (!cancelled) setUsers(data); // only update if still mounted\r\n      })\r\n      .catch(err => {\r\n        if (!cancelled) setError(err.message);\r\n      })\r\n      .finally(() => {\r\n        if (!cancelled) setLoading(false);\r\n      });\r\n\r\n    return () => { cancelled = true; }; // cleanup!\r\n  }, []);\r\n\r\n  if (loading) return <Spinner />;\r\n  if (error) return <p>Error: {error}</p>;\r\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\r\n}"
    }
  },
  {
    "id": "react-60",
    "number": "60",
    "question": "What is React Query (TanStack Query) and why use it?",
    "difficulty": "medium",
    "section": "Data Fetching & Side Effects",
    "answer": {
      "simple": "React Query is a library that handles all the messy parts of data fetching for you — loading states, caching, refetching, deduplication, background updates. Much less code than manual useEffect fetching.",
      "example": "✅ Automatic caching — same data not fetched twice.<br>\r\n      ✅ Background refetching — stale data refreshed automatically.<br>\r\n      ✅ Request deduplication — if 10 components need the same data, only 1 request is made.<br>\r\n      ✅ Retry on failure — automatically retries failed requests.<br>\r\n      ✅ Optimistic updates — update UI before server confirms.",
      "code": "// With React Query — so much simpler!\r\nfunction UserList() {\r\n  const { data: users, isLoading, error } = useQuery({\r\n    queryKey: ['users'], // cache key\r\n    queryFn: () => fetch('/api/users').then(r => r.json()),\r\n  });\r\n\r\n  if (isLoading) return <Spinner />;\r\n  if (error) return <p>Error!</p>;\r\n  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\r\n}"
    }
  },
  {
    "id": "react-61",
    "number": "61",
    "question": "What is the race condition problem in data fetching?",
    "difficulty": "hard",
    "section": "Data Fetching & Side Effects",
    "answer": {
      "simple": "A race condition happens when multiple fetch requests are in flight and the responses arrive out of order — the UI shows stale data from an earlier request that arrived last.",
      "example": "User types \"re\" → fetch starts for \"re\". User types \"react\" → fetch starts for \"react\". \"react\" response arrives first (it's cached). \"re\" response arrives second and OVERWRITES the display with wrong results!<br><br>\r\n      <strong>Fix 1</strong>: Use a cancelled flag (as shown in Q59) — ignore the response if a newer one is pending.<br>\r\n      <strong>Fix 2</strong>: Use AbortController to actually cancel the HTTP request.<br>\r\n      <strong>Fix 3</strong>: Use React Query — it handles this automatically.",
      "code": "useEffect(() => {\r\n  const controller = new AbortController();\r\n  fetch(url, { signal: controller.signal }).then(...);\r\n  return () => controller.abort(); // cancel the request on cleanup!\r\n}, [url]);"
    }
  },
  {
    "id": "react-62",
    "number": "62",
    "question": "What causes unnecessary re-renders?",
    "difficulty": "medium",
    "section": "Performance Optimization",
    "answer": {
      "simple": "",
      "example": "<strong>1. Parent re-renders → child re-renders</strong><br>\r\n      Fix: Wrap child in <code>React.memo</code>.<br><br>\r\n      <strong>2. New object/array reference in props every render</strong><br>\r\n      <pre>// ❌ New object every render:\r\n<Child style={{ color: 'red' }} />\r\n// ✅ Fix with useMemo:\r\nconst style = useMemo(() => ({ color: 'red' }), []);</pre>\r\n      <strong>3. New function reference in props every render</strong><br>\r\n      Fix: Wrap with <code>useCallback</code>.<br><br>\r\n      <strong>4. Context value changing unnecessarily</strong><br>\r\n      Fix: Memoize the context value, split contexts by update frequency.",
      "code": "// ❌ New object every render:\r\n<Child style={{ color: 'red' }} />\r\n// ✅ Fix with useMemo:\r\nconst style = useMemo(() => ({ color: 'red' }), []);"
    }
  },
  {
    "id": "react-63",
    "number": "63",
    "question": "How do you profile and find performance issues in React?",
    "difficulty": "hard",
    "section": "Performance Optimization",
    "answer": {
      "simple": "Use the React DevTools Profiler tab to record interactions and see which components rendered, how long they took, and why they rendered.",
      "example": "1. Open browser DevTools → React tab → Profiler.<br>\r\n      2. Click record, interact with your app, stop recording.<br>\r\n      3. Look for components with large render times (shown in flame graph).<br>\r\n      4. Click a component to see <strong>why it rendered</strong> (prop changed? state changed? hook changed?).<br>\r\n      5. Use <code><React.Profiler></code> component in code to measure programmatically.<br><br>\r\n      <strong>Rule</strong>: Never optimize without measuring first. Re-renders are usually NOT the bottleneck — actual computation or DOM updates often are."
    }
  },
  {
    "id": "react-64",
    "number": "64",
    "question": "What is Concurrent React and what problems does it solve?",
    "difficulty": "hard",
    "section": "Performance Optimization",
    "answer": {
      "simple": "Concurrent React (introduced in React 18) allows React to work on multiple tasks at once — pausing urgent rendering, doing other work, then coming back. This keeps the UI smooth even when there's heavy rendering work.",
      "example": "Old React: rendering was all-or-nothing. If rendering 500 list items took 300ms, the browser was frozen for 300ms — clicks and typing were ignored.<br><br>\r\n      Concurrent React: React can render 10 items, yield to the browser to handle a keystroke, render 10 more items, yield again. The page feels responsive the whole time.<br><br>\r\n      Features it enables: <code>useTransition</code>, <code>useDeferredValue</code>, Suspense for data, streaming SSR."
    }
  },
  {
    "id": "react-65",
    "number": "65",
    "question": "What is React's automatic batching (React 18)?",
    "difficulty": "hard",
    "section": "Performance Optimization",
    "answer": {
      "simple": "Automatic batching means React 18 now groups state updates from <em>anywhere</em> — including setTimeout, Promises, and async functions — into a single re-render. Before React 18, only updates inside React event handlers were batched.",
      "example": "Use <code>ReactDOM.flushSync()</code> if you need to force immediate separate renders (very rare):\r\n      <pre>import { flushSync } from 'react-dom';\r\nflushSync(() => setCount(1)); // renders immediately\r\nflushSync(() => setFlag(true)); // renders again</pre>",
      "code": "// React 17: Inside setTimeout = 2 separate re-renders\r\n// React 18: Inside setTimeout = batched into 1 re-render!\r\nsetTimeout(() => {\r\n  setCount(c => c + 1); // used to cause re-render here\r\n  setFlag(f => !f);     // and here\r\n}, 1000);\r\n\r\n// React 18: these are batched → only ONE re-render!"
    }
  },
  {
    "id": "react-66",
    "number": "66",
    "question": "What is SSR (Server-Side Rendering) and how does React support it?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "SSR means the server builds the HTML for your React components and sends it to the browser — so the user sees content immediately, before JavaScript loads. The browser then \"hydrates\" the HTML to make it interactive.",
      "example": "<strong>CSR</strong> (Client-Side Rendering): Browser gets empty HTML + JS bundle → JS builds the page → user sees content. Slow initial load. Bad for SEO (Googlebot may not see content).<br><br>\r\n      <strong>SSR</strong>: Server renders full HTML → browser shows content immediately → JS loads and hydrates. Fast first paint. Great for SEO.<br><br>\r\n      Use Next.js for SSR with React — it handles the server setup, routing, and hydration automatically."
    }
  },
  {
    "id": "react-67",
    "number": "67",
    "question": "What are React Server Components (RSC)?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "React Server Components run <strong>only on the server</strong>, never in the browser. They can directly access databases, file systems, and APIs — and they send only HTML to the browser with <strong>zero JavaScript</strong> sent for them.",
      "example": "<strong>Server Component</strong> (default in Next.js App Router):<br>\r\n      ✅ Can access database directly. ✅ Zero JS shipped. ✅ Fast initial load. ❌ No useState. ❌ No useEffect. ❌ No onClick.<br><br>\r\n      <strong>Client Component</strong> (add <code>'use client'</code> at top):<br>\r\n      ✅ useState, useEffect, events. ❌ Can't access server-only resources. ❌ JS is shipped to browser.<br><br>\r\n      Strategy: use Server Components for data fetching and static content. Use Client Components only where interactivity is needed."
    }
  },
  {
    "id": "react-68",
    "number": "68",
    "question": "What is hydration in React?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "Hydration is when React \"activates\" server-rendered HTML — attaching event handlers and React's state management to the existing HTML without rebuilding the DOM from scratch.",
      "example": "1. Server renders React → sends HTML to browser.<br>\r\n      2. Browser displays the HTML immediately (user sees page fast).<br>\r\n      3. JavaScript bundle loads.<br>\r\n      4. React \"hydrates\" — it walks the existing DOM, matches it to the virtual DOM, and attaches event handlers.<br>\r\n      5. Page is now interactive!<br><br>\r\n      <strong>Hydration mismatch</strong>: If the HTML the server rendered doesn't match what React expects to render, you get a hydration error. Common cause: code that reads browser-only values (Date, window, Math.random) during render."
    }
  },
  {
    "id": "react-69",
    "number": "69",
    "question": "What is Next.js and when should you use it?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "Next.js is a framework built on top of React. It adds SSR, SSG, file-based routing, API routes, optimized images, and much more — all pre-configured so you can focus on building features.",
      "example": "Use <strong>plain React + Vite</strong> for: internal tools, dashboards, apps that don't need SEO, SPAs where the user is always logged in.<br><br>\r\n      Use <strong>Next.js</strong> for: public-facing websites (blogs, e-commerce, marketing pages), anything that needs SEO, apps where first load speed matters, when you need a backend API alongside your frontend."
    }
  },
  {
    "id": "react-70",
    "number": "70",
    "question": "What is Suspense in React?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "<code>Suspense</code> is a React component that shows a fallback (loading state) while its children are \"suspending\" — waiting for something (a lazy-loaded component or data to load).",
      "example": "1. <strong>Lazy loading</strong>: wraps <code>React.lazy()</code> components — shows fallback while JS downloads.<br>\r\n      2. <strong>Server-side data</strong>: In Next.js App Router, Server Components that fetch data automatically integrate with Suspense — the page streams in progressively as data loads.<br><br>\r\n      Suspense makes async behavior declarative — you just say \"show Loading while waiting\" and React handles it.",
      "code": "<Suspense fallback={<div>Loading...</div>}>\r\n  <LazyComponent />   {/* code is being downloaded */}\r\n  <DataComponent />  {/* data is being fetched (with RSC/React Query) */}\r\n</Suspense>"
    }
  },
  {
    "id": "react-71",
    "number": "71",
    "question": "What is the React Compiler (React 19)?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "The React Compiler is a build-time tool in React 19 that automatically adds memoization to your components. You no longer need to manually write <code>useMemo</code>, <code>useCallback</code>, and <code>React.memo</code> — the compiler figures out what to optimize.",
      "example": "Before (manual memoization):<br>\r\n      <pre>const filteredItems = useMemo(() => items.filter(fn), [items]);\r\nconst handleClick = useCallback(() => doThing(id), [id]);\r\nexport default React.memo(MyComponent);</pre>\r\n      After (React Compiler does it automatically):<br>\r\n      <pre>const filteredItems = items.filter(fn); // compiler memoizes this!\r\nconst handleClick = () => doThing(id); // compiler stabilizes this!\r\nexport default MyComponent; // compiler adds memo automatically!</pre>\r\n      Same performance, much less code, fewer bugs from forgetting to memoize.",
      "code": "const filteredItems = useMemo(() => items.filter(fn), [items]);\r\nconst handleClick = useCallback(() => doThing(id), [id]);\r\nexport default React.memo(MyComponent);"
    }
  },
  {
    "id": "react-72",
    "number": "72",
    "question": "How do you test React components?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "Use <strong>React Testing Library (RTL)</strong> with <strong>Jest</strong> or <strong>Vitest</strong>. RTL's philosophy: test what users see and do, not implementation details.",
      "example": "✅ Query by text, role, label (like a user would interact).<br>\r\n      ❌ Don't query by className or component name — these are implementation details.<br><br>\r\n      If you rename a class but behavior is same, the test should pass. If you change behavior, the test should fail.",
      "code": "import { render, screen, fireEvent } from '@testing-library/react';\r\n\r\ntest('counter increments when button clicked', () => {\r\n  render(<Counter />);\r\n\r\n  // Find by what the user sees:\r\n  const button = screen.getByRole('button', { name: /increment/i });\r\n\r\n  fireEvent.click(button);\r\n  fireEvent.click(button);\r\n\r\n  // Assert what the user sees:\r\n  expect(screen.getByText('Count: 2')).toBeInTheDocument();\r\n});"
    }
  },
  {
    "id": "react-73",
    "number": "73",
    "question": "What is the difference between state derived during render vs in useEffect?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "If a value can be calculated from existing state or props, calculate it directly during render — don't store it in state and don't put it in useEffect. Redundant state causes bugs and extra re-renders.",
      "example": "<pre>// ❌ BAD — redundant state + useEffect:\r\nconst [items, setItems] = useState([]);\r\nconst [filteredItems, setFilteredItems] = useState([]);\r\nuseEffect(() => {\r\n  setFilteredItems(items.filter(i => i.active)); // extra render!\r\n}, [items]);\r\n\r\n// ✅ GOOD — derived during render, no useEffect needed:\r\nconst [items, setItems] = useState([]);\r\nconst filteredItems = items.filter(i => i.active); // just calculate it!</pre>\r\n      Derived values during render = fewer state variables, fewer effects, fewer bugs, cleaner code.",
      "code": "// ❌ BAD — redundant state + useEffect:\r\nconst [items, setItems] = useState([]);\r\nconst [filteredItems, setFilteredItems] = useState([]);\r\nuseEffect(() => {\r\n  setFilteredItems(items.filter(i => i.active)); // extra render!\r\n}, [items]);\r\n\r\n// ✅ GOOD — derived during render, no useEffect needed:\r\nconst [items, setItems] = useState([]);\r\nconst filteredItems = items.filter(i => i.active); // just calculate it!"
    }
  },
  {
    "id": "react-74",
    "number": "74",
    "question": "When should you NOT use useEffect?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "useEffect is often overused. Many things that developers put in useEffect should actually be done during render, in event handlers, or in specialized hooks.",
      "example": "❌ Transforming data for display → calculate during render.<br>\r\n      ❌ Handling events → put logic in event handlers, not useEffect.<br>\r\n      ❌ Fetching data on mount for display → use React Query or RSC instead.<br>\r\n      ❌ Resetting form state when prop changes → calculate initial state once or use key trick.<br>\r\n      ❌ Notifying parent of state change → pass callback and call it in the event handler directly.<br><br>\r\n      ✅ DO use useEffect for: subscriptions, third-party library setup (maps, charts), syncing with external systems (localStorage, WebSocket), cleanup."
    }
  },
  {
    "id": "react-75",
    "number": "75",
    "question": "What is the difference between React 17 and React 18?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "",
      "example": "🔄 <strong>Automatic batching</strong>: State updates batch everywhere (not just in event handlers).<br>\r\n      ⚡ <strong>Concurrent features</strong>: <code>useTransition</code>, <code>useDeferredValue</code>, <code>startTransition</code>.<br>\r\n      📦 <strong>New root API</strong>: <code>ReactDOM.createRoot()</code> replaces <code>ReactDOM.render()</code>.<br>\r\n      🌊 <strong>Streaming SSR</strong>: HTML streams to browser progressively.<br>\r\n      ⏳ <strong>Suspense improvements</strong>: Better integration with SSR and data fetching.<br>\r\n      🔁 <strong>StrictMode behavior</strong>: Effects run twice in dev to help find cleanup bugs."
    }
  },
  {
    "id": "react-76",
    "number": "76",
    "question": "What are the common React folder structure patterns?",
    "difficulty": "easy",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "There's no single \"right\" way, but two popular patterns are: <strong>by type</strong> (group by components, hooks, services) and <strong>by feature</strong> (group everything related to a feature together).",
      "example": "<pre>src/\r\n  features/\r\n    auth/\r\n      LoginForm.jsx\r\n      useAuth.js\r\n      authApi.js\r\n    products/\r\n      ProductList.jsx\r\n      ProductCard.jsx\r\n      useProducts.js\r\n  shared/\r\n    Button.jsx\r\n    Modal.jsx\r\n  App.jsx</pre>\r\n      Feature-based scales better — everything for \"auth\" lives together. Easy to find, easy to delete when removing a feature.",
      "code": "src/\r\n  features/\r\n    auth/\r\n      LoginForm.jsx\r\n      useAuth.js\r\n      authApi.js\r\n    products/\r\n      ProductList.jsx\r\n      ProductCard.jsx\r\n      useProducts.js\r\n  shared/\r\n    Button.jsx\r\n    Modal.jsx\r\n  App.jsx"
    }
  },
  {
    "id": "react-77",
    "number": "77",
    "question": "What is the difference between imperative and declarative React?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "<strong>Imperative</strong> = tell the computer HOW to do each step. <strong>Declarative</strong> = tell the computer WHAT you want and let it figure out how.",
      "example": "Imperative (jQuery): \"Find the div. Add class 'loading'. Then fetch. Then remove 'loading'. Then find the ul. Loop through data. Create li elements. Append each...\"<br><br>\r\n      Declarative (React):\r\n      <pre>if (loading) return <LoadingSpinner />;\r\nreturn <ul>{data.map(i => <li key={i.id}>{i.name}</li>)}</ul>;</pre>\r\n      You describe WHAT the UI should look like. React handles all the DOM manipulation steps automatically.",
      "code": "if (loading) return <LoadingSpinner />;\r\nreturn <ul>{data.map(i => <li key={i.id}>{i.name}</li>)}</ul>;"
    }
  },
  {
    "id": "react-78",
    "number": "78",
    "question": "What is optimistic UI and how do you implement it in React?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "Optimistic UI means updating the screen as if an action already succeeded — before the server confirms. If the server fails, you roll back. Makes apps feel instant.",
      "example": "Instagram like button — heart fills instantly. Twitter retweet — count updates immediately. Gmail \"Undo send\" — email appears sent, can undo within 5 seconds. React Query and React 19's useOptimistic hook make this easier to implement correctly.",
      "code": "async function handleLike(postId) {\r\n  // Optimistically update UI immediately:\r\n  setPosts(posts.map(p =>\r\n    p.id === postId ? { ...p, liked: true, likes: p.likes + 1 } : p\r\n  ));\r\n\r\n  try {\r\n    await api.likePost(postId); // then confirm with server\r\n  } catch (error) {\r\n    // Server failed — roll back the optimistic update:\r\n    setPosts(originalPosts);\r\n    showError('Like failed, please try again');\r\n  }\r\n}"
    }
  },
  {
    "id": "react-79",
    "number": "79",
    "question": "What is conditional rendering and what are all the patterns?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "Conditional rendering means showing different UI based on a condition. React has several ways to do it — each suited for different situations.",
      "code": "// 1. if/else (good for early returns):\r\nif (loading) return <Spinner />;\r\nif (error) return <ErrorPage />;\r\nreturn <MainContent />;\r\n\r\n// 2. Ternary operator (inline, one or the other):\r\n{isLoggedIn ? <Dashboard /> : <Login />}\r\n\r\n// 3. && operator (show OR show nothing):\r\n{hasNotifications && <NotificationBadge />}\r\n// ⚠️ Warning: {count && <Badge />} shows \"0\" when count=0!\r\n// Fix: {count > 0 && <Badge />} or {!!count && <Badge />}\r\n\r\n// 4. Switch/object map (many conditions):\r\nconst views = { home: <Home />, about: <About /> };\r\nreturn views[currentView] || <NotFound />;"
    }
  },
  {
    "id": "react-80",
    "number": "80",
    "question": "What is the useOptimistic hook (React 19)?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "<code>useOptimistic</code> is a React 19 hook that makes optimistic UI updates easy — it shows the optimistic value while an async operation is pending and automatically reverts to the real value when the operation completes (or fails).",
      "code": "const [optimisticLikes, addOptimisticLike] = useOptimistic(\r\n  post.likes, // real value from server\r\n  (currentLikes, newLike) => currentLikes + newLike // how to update optimistically\r\n);\r\n\r\nasync function handleLike() {\r\n  addOptimisticLike(1); // instantly shows +1 like\r\n  await api.likePost(post.id); // actual server call\r\n  // React automatically reverts if this fails\r\n}"
    }
  },
  {
    "id": "react-81",
    "number": "81",
    "question": "What is the React ecosystem — key libraries to know?",
    "difficulty": "easy",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "",
      "example": "🏗️ <strong>Framework</strong>: Next.js (SSR/SSG), Remix.<br>\r\n      🗺️ <strong>Routing</strong>: React Router, TanStack Router.<br>\r\n      🗄️ <strong>Global State</strong>: Zustand (simple), Redux Toolkit (complex), Jotai (atomic).<br>\r\n      🌐 <strong>Server State / Data Fetching</strong>: TanStack Query (React Query), SWR.<br>\r\n      📋 <strong>Forms</strong>: React Hook Form (best for perf), Formik (older).<br>\r\n      🎨 <strong>Styling</strong>: Tailwind CSS, CSS Modules, styled-components.<br>\r\n      🧪 <strong>Testing</strong>: React Testing Library + Vitest/Jest.<br>\r\n      📦 <strong>Build Tool</strong>: Vite (fast dev), Turbopack (Next.js).<br>\r\n      🧩 <strong>UI Components</strong>: shadcn/ui, Radix UI, MUI."
    }
  },
  {
    "id": "react-82",
    "number": "82",
    "question": "What is prop types validation vs TypeScript?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "Both validate the types of props your component receives, but they work at different times and in different ways.",
      "example": "<strong>PropTypes</strong>: Runtime check (happens when app is running). Warns in console. JavaScript only.<br>\r\n      <pre>Button.propTypes = { label: PropTypes.string.isRequired };</pre>\r\n      <strong>TypeScript</strong>: Compile-time check (before app runs). Errors in your editor. Catches bugs before users see them. More powerful.<br>\r\n      <pre>interface ButtonProps { label: string; onClick: () => void; }\r\nfunction Button({ label, onClick }: ButtonProps) { ... }</pre>\r\n      <strong>Recommendation</strong>: Use TypeScript for new projects. PropTypes is still useful for JavaScript projects or library authors.",
      "code": "Button.propTypes = { label: PropTypes.string.isRequired };"
    }
  },
  {
    "id": "react-83",
    "number": "83",
    "question": "What is the difference between useEffect and event handlers for data mutations?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "If something happens because of a <strong>user action</strong> (click, submit) — put the code in an event handler. If something needs to happen because of a <strong>state/prop change</strong> or external system sync — put it in useEffect.",
      "example": "<pre>// ❌ Wrong — using useEffect to react to a button click:\r\nuseEffect(() => {\r\n  if (submitted) { saveToServer(formData); }\r\n}, [submitted]);\r\n\r\n// ✅ Right — do it directly in the event handler:\r\nfunction handleSubmit() {\r\n  saveToServer(formData); // do it here!\r\n  setSubmitted(true);\r\n}</pre>\r\n      useEffect for mutations runs an extra render cycle unnecessarily. Event handlers are synchronous and direct. This is one of the most common React anti-patterns in codebases.",
      "code": "// ❌ Wrong — using useEffect to react to a button click:\r\nuseEffect(() => {\r\n  if (submitted) { saveToServer(formData); }\r\n}, [submitted]);\r\n\r\n// ✅ Right — do it directly in the event handler:\r\nfunction handleSubmit() {\r\n  saveToServer(formData); // do it here!\r\n  setSubmitted(true);\r\n}"
    }
  },
  {
    "id": "react-84",
    "number": "84",
    "question": "What is React Actions and useActionState (React 19)?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "React 19 adds native support for async form actions. You can pass an async function directly to a form's <code>action</code> prop, and React handles the pending state, errors, and result for you.",
      "code": "// React 19 — forms with async actions:\r\nconst [state, formAction, isPending] = useActionState(\r\n  async (prevState, formData) => {\r\n    const name = formData.get('name');\r\n    const result = await saveUser({ name });\r\n    return result; // returned value becomes new state\r\n  },\r\n  null // initial state\r\n);\r\n\r\nreturn (\r\n  <form action={formAction}>\r\n    <input name=\"name\" />\r\n    <button disabled={isPending}>\r\n      {isPending ? 'Saving...' : 'Save'}\r\n    </button>\r\n    {state?.error && <p>{state.error}</p>}\r\n  </form>\r\n);"
    }
  },
  {
    "id": "react-85",
    "number": "85",
    "question": "What is the difference between useState's initial value and lazy initialization?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "If you pass a value to useState, it's computed every render (even though only used once). If you pass a <strong>function</strong>, React only calls it on the first render — this is lazy initialization.",
      "example": "When the initial value is expensive to compute: reading from localStorage, parsing JSON, complex calculations. If the initial value is just a number or string, it doesn't matter.",
      "code": "// ❌ Runs JSON.parse on EVERY render (wasteful!):\r\nconst [data, setData] = useState(JSON.parse(localStorage.getItem('data')));\r\n\r\n// ✅ Lazy initialization — only runs ONCE on first render:\r\nconst [data, setData] = useState(() => {\r\n  return JSON.parse(localStorage.getItem('data'));\r\n});"
    }
  },
  {
    "id": "react-86",
    "number": "86",
    "question": "What is the purpose of the Profiler API in React?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "The <code><Profiler></code> component lets you measure the rendering performance of React components programmatically — how often they render and how long each render takes.",
      "example": "Measure performance of specific components during development. Send render timing data to analytics. Compare before/after a performance optimization. The React DevTools Profiler tab is a visual version of this API.",
      "code": "function onRenderCallback(id, phase, actualDuration, baseDuration) {\r\n  console.log(`${id} ${phase}: ${actualDuration.toFixed(2)}ms`);\r\n  // id = component name you gave\r\n  // phase = 'mount' or 'update'\r\n  // actualDuration = how long this render took\r\n  // baseDuration = how long it'd take without memoization\r\n}\r\n\r\n<Profiler id=\"ProductList\" onRender={onRenderCallback}>\r\n  <ProductList items={items} />\r\n</Profiler>"
    }
  },
  {
    "id": "react-87",
    "number": "87",
    "question": "What is shallow vs deep copy and why does it matter for React state?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "React state updates must be <strong>immutable</strong> — you should never directly mutate state. Instead, create a new copy of the object/array with the changes applied.",
      "example": "React compares the old state reference to the new one. If you mutate the same object, the reference is the same — React thinks nothing changed and doesn't re-render. Always return a new object/array!",
      "code": "// ❌ WRONG — direct mutation, React won't see the change!\r\nstate.user.name = 'Alice';\r\nsetState(state); // same reference, no re-render!\r\n\r\n// ✅ RIGHT — create a new object:\r\nsetState({ ...state, user: { ...state.user, name: 'Alice' } });\r\n\r\n// ✅ For arrays:\r\nsetItems([...items, newItem]);    // add\r\nsetItems(items.filter(i => i.id !== id)); // remove\r\nsetItems(items.map(i => i.id === id ? {...i, done: true} : i)); // update"
    }
  },
  {
    "id": "react-88",
    "number": "88",
    "question": "What is useImperativeHandle?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "<code>useImperativeHandle</code> (used with forwardRef) lets you control what a parent gets when they use a ref on your component — instead of exposing the raw DOM element, you expose specific methods you choose.",
      "example": "If you expose the full DOM element, parents can do anything to it — breaking your component's abstraction. useImperativeHandle creates a controlled public API for your component, keeping internals private.",
      "code": "const VideoPlayer = forwardRef((props, ref) => {\r\n  const videoRef = useRef();\r\n\r\n  useImperativeHandle(ref, () => ({\r\n    play: () => videoRef.current.play(),\r\n    pause: () => videoRef.current.pause(),\r\n    seek: (time) => { videoRef.current.currentTime = time; }\r\n    // Parent can ONLY call play, pause, seek\r\n    // NOT access the full <video> DOM element directly\r\n  }));\r\n\r\n  return <video videoRef={videoRef} {...props} />;\r\n});"
    }
  },
  {
    "id": "react-89",
    "number": "89",
    "question": "What is CSS-in-JS and what are the options in React?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "CSS-in-JS means writing your CSS styles inside JavaScript files alongside your components. Styles are scoped to the component and can use JavaScript logic.",
      "example": "🏷️ <strong>Plain CSS files</strong>: Simple, global. Risk of class name clashes.<br>\r\n      🧩 <strong>CSS Modules</strong>: Scoped CSS files. Best of both worlds. No class clashes.<br>\r\n      🌊 <strong>Tailwind CSS</strong>: Utility classes in JSX. Very popular, fast to write.<br>\r\n      💅 <strong>styled-components</strong>: CSS-in-JS. Write real CSS syntax inside JS. Runtime overhead.<br>\r\n      🎭 <strong>Emotion</strong>: Similar to styled-components. Used by MUI.<br>\r\n      ⚡ <strong>vanilla-extract</strong>: Zero-runtime CSS-in-JS. Types and performance.<br><br>\r\n      Current industry favorite for new projects: Tailwind CSS + CSS Modules."
    }
  },
  {
    "id": "react-90",
    "number": "90",
    "question": "What is the difference between React.createElement and JSX?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "JSX is just syntactic sugar — a nicer way to write <code>React.createElement()</code> calls. Babel transforms all JSX into createElement calls before the browser sees it.",
      "example": "Understanding this helps you debug JSX errors. It explains why you needed <code>import React from 'react'</code> in old React (createElement needed to be in scope). Since React 17's new JSX transform, this import is no longer needed.",
      "code": "// JSX (what you write):\r\nconst element = (\r\n  <div className=\"box\">\r\n    <h1>Hello</h1>\r\n    <p>World</p>\r\n  </div>\r\n);\r\n\r\n// What Babel transforms it into:\r\nconst element = React.createElement(\r\n  'div',\r\n  { className: 'box' },\r\n  React.createElement('h1', null, 'Hello'),\r\n  React.createElement('p', null, 'World')\r\n);"
    }
  },
  {
    "id": "react-91",
    "number": "91",
    "question": "What are controlled inputs and how do you handle multiple inputs efficiently?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "Instead of a separate state variable and onChange handler for each input, use one object for all form state and a single generic change handler.",
      "code": "const [form, setForm] = useState({\r\n  name: '', email: '', phone: ''\r\n});\r\n\r\nfunction handleChange(e) {\r\n  const { name, value } = e.target;\r\n  setForm(prev => ({ ...prev, [name]: value })); // update only that field\r\n}\r\n\r\n// Each input uses its field name:\r\n<input name=\"name\" value={form.name} onChange={handleChange} />\r\n<input name=\"email\" value={form.email} onChange={handleChange} />\r\n<input name=\"phone\" value={form.phone} onChange={handleChange} />"
    }
  },
  {
    "id": "react-92",
    "number": "92",
    "question": "What is memoization in React and what are its limits?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "Memoization is caching — storing the result of an expensive operation and returning the cached result when inputs haven't changed. React provides useMemo, useCallback, and React.memo for this.",
      "example": "1. <strong>Reference equality</strong>: Only works when deps use primitive values or stable references. New objects/arrays in deps = cache miss every time.<br>\r\n      2. <strong>Memory cost</strong>: Memoization stores results in memory — for large datasets this can be costly.<br>\r\n      3. <strong>Cache only holds last value</strong>: React's useMemo only keeps the last result. If deps change back and forth, it recalculates each time.<br>\r\n      4. <strong>Not free</strong>: The comparison on every render has a cost. For cheap calculations, useMemo is slower than just recalculating.<br><br>\r\n      Rule: profile first. Apply memoization surgically where profiling shows a real problem."
    }
  },
  {
    "id": "react-93",
    "number": "93",
    "question": "What is the children prop and how does it work?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "The <code>children</code> prop is automatically populated with whatever you put between a component's opening and closing tags. It can be text, elements, other components, arrays, or functions.",
      "example": "You can also pass a function as children — called \"render props pattern\":\r\n      <pre><DataProvider>\r\n  {(data) => <DataDisplay items={data} />}\r\n</DataProvider></pre>",
      "code": "// children is automatically provided:\r\n<Modal>\r\n  <h2>Confirm Delete</h2>\r\n  <p>This action cannot be undone.</p>\r\n  <Button>Delete</Button>\r\n</Modal>\r\n\r\nfunction Modal({ children, onClose }) {\r\n  return (\r\n    <div className=\"modal-backdrop\">\r\n      <div className=\"modal\">\r\n        {children} {/* everything between the tags */}\r\n        <button onClick={onClose}>Close</button>\r\n      </div>\r\n    </div>\r\n  );\r\n}"
    }
  },
  {
    "id": "react-94",
    "number": "94",
    "question": "What is the Context + useReducer pattern?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "Combining Context with useReducer gives you a simple, built-in state manager — global state accessible anywhere, with organized state transitions. A lighter alternative to Redux for medium-sized apps.",
      "example": "This pattern works well for simple global state. Switch to Zustand when: you have many separate pieces of state, performance is a concern (all context consumers re-render), or you need middleware/devtools.",
      "code": "// Create context:\r\nconst StoreContext = React.createContext();\r\n\r\n// Provider with reducer:\r\nfunction StoreProvider({ children }) {\r\n  const [state, dispatch] = useReducer(reducer, initialState);\r\n  return (\r\n    <StoreContext.Provider value={{ state, dispatch }}>\r\n      {children}\r\n    </StoreContext.Provider>\r\n  );\r\n}\r\n\r\n// Use anywhere:\r\nfunction Cart() {\r\n  const { state, dispatch } = useContext(StoreContext);\r\n  return <div>{state.cart.length} items</div>;\r\n}"
    }
  },
  {
    "id": "react-95",
    "number": "95",
    "question": "What is React DevTools and what can you do with it?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "React DevTools is a free browser extension that adds two tabs to your browser DevTools: <strong>Components</strong> (inspect your component tree) and <strong>Profiler</strong> (measure rendering performance).",
      "example": "🌳 <strong>Components tab</strong>:<br>\r\n      - See your full component tree visually.<br>\r\n      - Click any component to see its current props and state.<br>\r\n      - Edit props and state live to test scenarios.<br>\r\n      - Find which components are wrapped in memo/context.<br><br>\r\n      ⏱️ <strong>Profiler tab</strong>:<br>\r\n      - Record an interaction and see which components rendered.<br>\r\n      - See how long each render took (flame chart).<br>\r\n      - See WHY a component rendered (which prop/state changed).<br>\r\n      - Find unnecessary re-renders."
    }
  },
  {
    "id": "react-96",
    "number": "96",
    "question": "What is the difference between mounting, rendering, and committing?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "React's update process has three phases: <strong>Render</strong> (calculate what to show), <strong>Commit</strong> (apply changes to DOM), then run <strong>Effects</strong>.",
      "example": "<strong>1. Render Phase</strong> (can be interrupted — Concurrent):<br>\r\n      React calls your component functions. It's pure computation — no DOM changes happen here. React diffs the new virtual DOM against the old one and calculates what needs to change.<br><br>\r\n      <strong>2. Commit Phase</strong> (synchronous — can't be interrupted):<br>\r\n      React applies the calculated changes to the real DOM. This is fast because React knows exactly what changed. useLayoutEffect runs here (synchronously).<br><br>\r\n      <strong>3. Effects Phase</strong> (after browser paint):<br>\r\n      useEffect callbacks run here, asynchronously after the browser has painted the screen."
    }
  },
  {
    "id": "react-97",
    "number": "97",
    "question": "What are the most common React mistakes beginners make?",
    "difficulty": "easy",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "",
      "example": "❌ <strong>Mutating state directly</strong>: <code>state.items.push(x)</code> — always create a new array!<br><br>\r\n      ❌ <strong>Using index as list key</strong>: causes rendering bugs with reordering.<br><br>\r\n      ❌ <strong>Forgetting the dependency array</strong>: <code>useEffect(() => {fetchData();})</code> — runs every render, infinite loop!<br><br>\r\n      ❌ <strong>Calling setState during render</strong>: leads to infinite re-renders.<br><br>\r\n      ❌ <strong>Using count inside effect without deps</strong>: stale closure bug.<br><br>\r\n      ❌ <strong>Creating objects/arrays in JSX as props</strong>: <code><Child style={{color:'red'}} /></code> — new object every render breaks memoization.<br><br>\r\n      ❌ <strong>Putting everything in useEffect</strong>: most things belong in event handlers or derived state."
    }
  },
  {
    "id": "react-98",
    "number": "98",
    "question": "What is the Suspense boundary and error boundary strategy?",
    "difficulty": "medium",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "You should wrap different sections of your app independently with Suspense and Error Boundaries — so a loading or error in one section doesn't crash or block the entire page.",
      "code": "function App() {\r\n  return (\r\n    <ErrorBoundary fallback={<AppCrashed />}> {/* whole app */}\r\n      <Navbar />\r\n      <ErrorBoundary fallback={<SidebarError />}> {/* sidebar */}\r\n        <Suspense fallback={<SidebarSkeleton />}>\r\n          <Sidebar /> {/* loads independently */}\r\n        </Suspense>\r\n      </ErrorBoundary>\r\n      <ErrorBoundary fallback={<ContentError />}> {/* main content */}\r\n        <Suspense fallback={<ContentSkeleton />}>\r\n          <MainContent /> {/* loads independently */}\r\n        </Suspense>\r\n      </ErrorBoundary>\r\n    </ErrorBoundary>\r\n  );\r\n}"
    }
  },
  {
    "id": "react-99",
    "number": "99",
    "question": "What is the \"you might not need useEffect\" principle?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "The React team published a guide called \"You Might Not Need an Effect\" — because useEffect is heavily overused. Many patterns that developers put in useEffect should actually be done differently.",
      "example": "<strong>1. Transforming data for display</strong>: Calculate during render, not in effect.<br><br>\r\n      <strong>2. Handling user events</strong>: Use event handlers, not effects.<br><br>\r\n      <strong>3. Fetching data in useEffect</strong>: Use React Query, SWR, or React Server Components instead — they handle caching, deduplication, and race conditions that manual useEffect doesn't.<br><br>\r\n      <strong>4. Synchronizing prop changes to state</strong>: Use key prop to reset state, or calculate during render.<br><br>\r\n      <strong>5. Initializing something once</strong>: Use module-level initialization or lazy useState init instead."
    }
  },
  {
    "id": "react-100",
    "number": "100",
    "question": "What makes a good React architecture for large, production apps?",
    "difficulty": "hard",
    "section": "Advanced Topics & Ecosystem",
    "answer": {
      "simple": "",
      "example": "📁 <strong>Feature-based folder structure</strong>: Group by feature, not file type. Everything for \"checkout\" lives together.<br><br>\r\n      🧩 <strong>Small, focused components</strong>: Each does one thing. Under 150 lines ideally.<br><br>\r\n      🪝 <strong>Extract logic into custom hooks</strong>: Keep JSX clean. useFetch, useAuth, useCart — logic lives in hooks.<br><br>\r\n      🎯 <strong>Colocate state</strong>: State as low as possible, only lift when needed.<br><br>\r\n      🔄 <strong>Separate server state from UI state</strong>: Use React Query for API data. useState only for UI state (modal open/closed).<br><br>\r\n      📝 <strong>TypeScript everywhere</strong>: Types as documentation. Catch bugs at compile time.<br><br>\r\n      🧪 <strong>Test user behavior</strong>: React Testing Library for integration tests. Avoid testing implementation details.<br><br>\r\n      🚀 <strong>Performance by default</strong>: Code split routes, lazy load heavy components, use React Query for caching, avoid unnecessary global state."
    }
  }
];
