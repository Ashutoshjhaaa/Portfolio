"use client";
import Link from 'next/link';


import { useState, useCallback } from "react";
import Head from "next/head";

interface Question {
  num: string;
  difficulty: "easy" | "medium" | "hard";
  question: string;
  body: string;
}

interface Section {
  icon: string;
  title: string;
  questions: Question[];
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const SECTIONS: Section[] = [
  {
    icon: "🧱",
    title: "Core Concepts",
    questions: [
      {
        num: "01", difficulty: "easy",
        question: "What is React and why do developers use it?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>React is a JavaScript library made by Meta (Facebook) for building user interfaces. Developers use it because it lets you build big apps from small, reusable pieces called <strong>components</strong> — and it automatically updates the screen when data changes.</div><div class="example-box"><span class="label">Analogy 🧩</span>Lego bricks. Each component is a brick. You build a button brick, a card brick, a navbar brick — then snap them together to make any page. If you change one brick, only that brick updates. React handles the "what changed and how to update" part for you.</div>`
      },
      {
        num: "02", difficulty: "easy",
        question: "What is JSX and how is it different from HTML?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>JSX is a mix of JavaScript and HTML-like syntax. You write it in React files and it gets converted to plain JavaScript by a tool called Babel before the browser sees it.</div><pre>// JSX (what you write):
const el = &lt;h1 className="title"&gt;Hello, {'{name}'}!&lt;/h1&gt;;

// What Babel turns it into:
const el = React.createElement('h1', {'{className:\'title\'}'}, 'Hello, ', name, '!');</pre><div class="example-box"><span class="label">Key differences from HTML 👇</span>Use <code>className</code> not <code>class</code> (class is a JS keyword).<br/>Use <code>htmlFor</code> not <code>for</code>.<br/>All tags must close: <code>&lt;img /&gt;</code>, <code>&lt;br /&gt;</code>.<br/>Put JavaScript inside <code>{'{curly braces}'}</code>.<br/>Event names are camelCase: <code>onClick</code>, <code>onChange</code>.</div>`
      },
      {
        num: "03", difficulty: "easy",
        question: "What is the Virtual DOM and how does React use it?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>The Virtual DOM is a lightweight copy of the real DOM that React keeps in memory. When something changes, React updates its virtual copy first, compares it to the old virtual copy (this process is called <strong>diffing</strong>), and then only updates the parts of the real DOM that actually changed.</div><div class="example-box"><span class="label">Why it matters 📝</span>Direct DOM updates are slow. Imagine repainting an entire 100-page document because one sentence changed. React finds the exact sentence that changed and updates only that — much faster. This process is called <strong>reconciliation</strong>.</div>`
      },
      {
        num: "04", difficulty: "easy",
        question: "What is a React component?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>A component is a JavaScript function that returns JSX (HTML-like code). It's a self-contained, reusable piece of UI that you can use like a custom HTML tag.</div><pre>// A component is just a function that returns JSX:
function Button({ label, onClick }) {
  return &lt;button onClick={'{onClick}'}>&lt;/button&gt;;
}

// Use it like a custom HTML tag:
&lt;Button label="Save" onClick={'{handleSave}'} /&gt;
&lt;Button label="Delete" onClick={'{handleDelete}'} /&gt;</pre><div class="example-box"><span class="label">Rules for components 📏</span>Name must start with a capital letter (<code>Button</code> not <code>button</code>). Must return JSX (or null). Must be a pure function — same props should give same output.</div>`
      },
      {
        num: "05", difficulty: "easy",
        question: "What are props and how do they work?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Props (short for "properties") are how a parent component passes data to a child component. They work like arguments to a function — the parent sends them, the child receives and uses them.</div><pre>// Parent sends:
&lt;UserCard name="Alice" age={'{28}'} isAdmin={'{true}'} /&gt;

// Child receives (as one object called props):
function UserCard(props) {
  return &lt;p&gt;{'{props.name}'}, age {'{props.age}'}&lt;/p&gt;;
}

// Or use destructuring (cleaner):
function UserCard({ name, age, isAdmin }) {
  return &lt;p&gt;{'{name}'}, age {'{age}'}&lt;/p&gt;;
}</pre><div class="example-box"><span class="label">Golden rule 🔒</span>Props are <strong>read-only</strong>. A child component can NEVER modify its props. Data flows one way: parent → child. This is called "unidirectional data flow."</div>`
      },
      {
        num: "06", difficulty: "easy",
        question: "What is state and how is it different from props?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>State is data that a component <strong>owns and controls</strong>. Unlike props (which come from outside), state lives inside the component and can be changed by the component itself. When state changes, React automatically re-renders the component.</div><div class="example-box"><span class="label">Props vs State 🆚</span><strong>Props</strong> = data passed IN from parent. Read-only. Like a birthday gift — you receive it and use it, but you didn't create it.<br/><br/><strong>State</strong> = data the component manages itself. Can change. Like your own bank account — you control it and can change it.</div><pre>function Counter() {
  const [count, setCount] = React.useState(0); // state!
  return &lt;button onClick={() =&gt; setCount(count+1)}&gt;{'{count}'}&lt;/button&gt;;
}</pre>`
      },
      {
        num: "07", difficulty: "medium",
        question: "What is one-way data flow (unidirectional data flow)?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>In React, data always flows in <strong>one direction only</strong>: from parent component down to child component through props. Children cannot send data back up directly — they must call a function given to them by the parent.</div><div class="example-box"><span class="label">How child "talks back" to parent 🗣️</span>Parent passes a function as a prop. Child calls that function to communicate:<pre>function Parent() {
  const [name, setName] = useState('');
  return &lt;Input onChange={'{setName}'} /&gt;; // pass function down
}
function Input({ onChange }) {
  return &lt;input onChange={(e) =&gt; onChange(e.target.value)} /&gt;;
  // child calls the function to send data UP
}</pre></div>`
      },
      {
        num: "08", difficulty: "easy",
        question: "What is re-rendering in React?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Re-rendering means React calls your component function again to get the latest JSX, then updates the screen to match. It happens automatically when state or props change.</div><div class="example-box"><span class="label">What triggers a re-render? 🔄</span>1. The component's own state changes (<code>setState</code> called).<br/>2. The component's props change (parent passed new data).<br/>3. A Context the component reads changes.<br/>4. The parent component re-renders (child re-renders too by default).<br/><br/>⚠️ Re-rendering does NOT always mean the real DOM changes — React compares and only updates what's different (reconciliation).</div>`
      },
    ]
  },
  {
    icon: "♻️",
    title: "Component Lifecycle (Deep Dive)",
    questions: [
      {
        num: "09", difficulty: "medium",
        question: "What are the three phases of a React component's lifecycle?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Every React component goes through three phases: <strong>Mount</strong> (born), <strong>Update</strong> (grows/changes), and <strong>Unmount</strong> (dies).</div><div class="example-box"><span class="label">The three phases explained 👇</span>🐣 <strong>Mount</strong>: Component appears on screen for the first time. DOM elements are created. useEffect with <code>[]</code> runs here.<br/><br/>🔄 <strong>Update</strong>: Component re-renders because state or props changed. useEffect with dependencies runs after each relevant change.<br/><br/>💀 <strong>Unmount</strong>: Component is removed from the screen. The cleanup function returned from useEffect runs here to clean up timers, listeners, etc.</div><div class="simple-box"><span class="label">In code 💡</span><pre>useEffect(() =&gt; {
  console.log('MOUNT: component appeared');
  return (
      <title>Top 100 React.js Interview Questions & Answers</title>
      <meta name="description" content="Master React.js with this comprehensive list of 100 interview questions, designed for beginners and advanced developers preparing for technical interviews." />
      <meta property="og:title" content="Top 100 React.js Interview Questions & Answers" />
      <meta property="og:description" content="Master React.js with this comprehensive list of 100 interview questions, designed for beginners and advanced developers preparing for technical interviews." />
      
      <div style={{ position: 'sticky', top: 0, zIndex: 1000, background: 'var(--bg, #fdfaf5)', padding: '12px 40px', borderBottom: '2px solid var(--border, #e8e0d0)' }}>
        <Link href="/" style={{ color: 'var(--accent, #e8601c)', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>&larr;</span> Back to Portfolio
        </Link>
      </div>
  ) =&gt; {
    console.log('UNMOUNT: component is leaving');
  };
}, []); // empty array = mount + unmount only</pre></div>`
      },
      {
        num: "10", difficulty: "medium",
        question: "What happens at the Mount phase?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Mounting is when a component appears on the screen for the <strong>very first time</strong>. React creates all the DOM elements, runs the component function, paints to the screen, and then runs useEffect (with <code>[]</code>).</div><div class="example-box"><span class="label">Exact order during mount 📋</span>1. React calls your component function → gets JSX.<br/>2. React creates real DOM elements from that JSX.<br/>3. Browser paints — user sees the component.<br/>4. useEffect callbacks with <code>[]</code> run.<br/><br/>Common things to do on mount: fetch initial data, set up subscriptions, start timers, read localStorage.</div>`
      },
      {
        num: "11", difficulty: "medium",
        question: "What happens at the Update phase?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>The Update phase happens every time state or props change. React re-runs your component function, compares the new JSX to the old JSX (diffing), updates only what changed in the DOM, then runs useEffect for any changed dependencies.</div><div class="example-box"><span class="label">Exact order during update 📋</span>1. State/props change triggers re-render.<br/>2. React calls your component function again → new JSX.<br/>3. React diffs new JSX vs old JSX (reconciliation).<br/>4. React updates only the changed parts of the real DOM.<br/>5. useEffect cleanup runs for the previous render (if any).<br/>6. useEffect callback runs if its dependencies changed.</div>`
      },
      {
        num: "12", difficulty: "medium",
        question: "What happens at the Unmount phase?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Unmounting is when a component is removed from the screen — either because the parent stopped rendering it, or the user navigated away. The <strong>cleanup function</strong> returned from useEffect runs at this point.</div><pre>useEffect(() =&gt; {
  const timer = setInterval(() =&gt; tick(), 1000);
  return () =&gt; {
    clearInterval(timer); // ← This runs on unmount!
    // Also runs before the next effect if deps change
  };
}, []);</pre><div class="example-box"><span class="label">Why cleanup matters 🧹</span>Without cleanup, timers keep ticking, event listeners keep firing, WebSocket connections stay open — even after the component is gone. This wastes memory and causes hard-to-find bugs. Always clean up after yourself!</div>`
      },
      {
        num: "13", difficulty: "hard",
        question: "What is the exact order of lifecycle events in a React functional component?",
        body: `<div class="simple-box"><span class="label">Full lifecycle order 💡</span></div><div class="example-box"><span class="label">Complete sequence 📋</span><strong>On first render (Mount):</strong><br/>1. Component function runs → JSX produced.<br/>2. DOM is updated (created from scratch).<br/>3. Browser paints the screen.<br/>4. useLayoutEffect runs (synchronously, before paint is visible).<br/>5. useEffect runs (asynchronously, after paint).<br/><br/><strong>On state/prop change (Update):</strong><br/>1. Component function runs again → new JSX.<br/>2. React diffs new vs old (reconciliation).<br/>3. DOM is updated (only changed parts).<br/>4. useLayoutEffect cleanup runs → useLayoutEffect runs.<br/>5. useEffect cleanup runs → useEffect runs.<br/><br/><strong>On removal (Unmount):</strong><br/>1. useLayoutEffect cleanup runs.<br/>2. useEffect cleanup runs.<br/>3. DOM elements are removed.</div>`
      },
      {
        num: "14", difficulty: "medium",
        question: "How do class component lifecycle methods map to hooks?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Old class components had special lifecycle methods. Hooks replaced them all with just useEffect (and useState).</div><div class="example-box"><span class="label">Class method → Hook equivalent 👇</span><code>componentDidMount</code> → <code>useEffect(() =&gt; {'{}'}, [])</code> (empty array = run once on mount)<br/><br/><code>componentDidUpdate</code> → <code>useEffect(() =&gt; {'{}'}, [dep])</code> (with dependencies)<br/><br/><code>componentWillUnmount</code> → the <code>return () =&gt; {'{}'}</code> cleanup inside useEffect<br/><br/><code>shouldComponentUpdate</code> → <code>React.memo</code> or <code>useMemo</code><br/><br/><code>getDerivedStateFromProps</code> → calculate value during render from props</div>`
      },
    ]
  },
  {
    icon: "🪝",
    title: "useEffect & The Dependency Array (Deep Dive)",
    questions: [
      {
        num: "15", difficulty: "easy",
        question: "What does useEffect do?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span><code>useEffect</code> lets you run "side effect" code <strong>after</strong> the component renders. A side effect is anything that reaches outside the component — like fetching data, setting up a timer, or updating the browser title.</div><pre>useEffect(() =&gt; {
  document.title = \`You have \${'{count}'} messages\`;
}, [count]); // run this every time 'count' changes</pre><div class="example-box"><span class="label">Why "after render"? 🤔</span>React renders first, updates the DOM, shows the user — then runs effects. This means effects never block the screen from appearing. The user always sees something right away, even before the data loads.</div>`
      },
      {
        num: "16", difficulty: "medium",
        question: "What is the dependency array in useEffect?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>The dependency array is the second argument to useEffect. It tells React <strong>when to re-run the effect</strong>. React compares the array values between renders and only runs the effect when something in the array changed.</div><pre>useEffect(() =&gt; {
  // effect code
}, [dep1, dep2]); // ← this is the dependency array</pre><div class="example-box"><span class="label">Three possible cases 👇</span><strong>No array</strong>: effect runs after <em>every single render</em>. Usually not what you want.<br/><pre>useEffect(() =&gt; { ... }); // runs every render!</pre><strong>Empty array []</strong>: effect runs only once — on mount.<br/><pre>useEffect(() =&gt; { ... }, []); // runs once!</pre><strong>Array with values [a, b]</strong>: effect runs when a or b changes.<br/><pre>useEffect(() =&gt; { ... }, [userId]); // runs when userId changes!</pre></div>`
      },
      {
        num: "17", difficulty: "medium",
        question: "How does React compare dependency array values?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>React uses <strong>Object.is()</strong> — a strict equality check — to compare each value in the dependency array between renders. Primitive values (numbers, strings, booleans) compare by value. Objects and arrays compare by <strong>reference</strong> (memory address).</div><div class="example-box"><span class="label">The common trap ⚠️</span><pre>// BAD — new object created every render!
// This effect runs every render, even though data looks the same!
useEffect(() =&gt; {
  console.log('ran');
}, [{ id: 1 }]); // {} !== {} even if contents are same!

// BAD — new array every render!
useEffect(() =&gt; {}, [[1, 2, 3]]); // [] !== [] by reference!

// GOOD — compare the primitive value inside:
useEffect(() =&gt; {}, [user.id]); // compares the number directly</pre>Putting objects or arrays created during render in deps will cause infinite loops!</div>`
      },
      {
        num: "18", difficulty: "hard",
        question: "What causes an infinite loop in useEffect?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>An infinite loop happens when your useEffect sets state → that causes a re-render → the effect runs again → sets state again → repeat forever. This crashes your app.</div><div class="example-box"><span class="label">Common causes &amp; fixes 👇</span><strong>Cause 1</strong>: Effect sets state without any dependency limit.<pre>// ❌ INFINITE LOOP:
useEffect(() =&gt; {
  setCount(count + 1); // triggers re-render → effect runs → triggers...
}); // no dependency array!</pre><strong>Cause 2</strong>: Object/array in deps that is recreated every render.<pre>// ❌ INFINITE LOOP:
const options = { id: 1 }; // new object every render!
useEffect(() =&gt; {}, [options]); // always "changed"!</pre><strong>Fix</strong>: Add correct deps, use useMemo/useCallback for stable references, or use the functional form of setState.</div>`
      },
      {
        num: "19", difficulty: "hard",
        question: "What should and should NOT go in the dependency array?",
        body: `<div class="simple-box"><span class="label">Simple rule 💡</span>Put EVERYTHING that your effect reads from the component scope into the deps array. If your effect uses a variable and that variable can change, it must be in deps.</div><div class="example-box"><span class="label">What to include vs exclude 👇</span>✅ Include: state variables, props, any values from component scope that change.<br/>✅ Include: functions defined inside the component (or use useCallback on them).<br/><br/>❌ Don't include: <code>setState</code> functions (React guarantees they're stable).<br/>❌ Don't include: <code>useRef.current</code> (refs don't trigger re-renders).<br/>❌ Don't include: values defined outside the component (module-level constants, they never change).<br/><br/>💡 Use the ESLint plugin <code>eslint-plugin-react-hooks</code> — it warns you when you miss a dependency!</div>`
      },
      {
        num: "20", difficulty: "medium",
        question: "What is the cleanup function in useEffect and why is it important?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>The cleanup function is a function you <code>return</code> from useEffect. React calls it before the component unmounts AND before re-running the effect (if deps changed). It lets you clean up any resources your effect created.</div><pre>useEffect(() =&gt; {
  // SETUP: subscribe to something
  const subscription = api.subscribe(userId, handleData);

  // CLEANUP: undo the setup
  return () =&gt; {
    subscription.unsubscribe();
  };
}, [userId]);</pre><div class="example-box"><span class="label">When does cleanup run? ⏰</span>1. When the component <strong>unmounts</strong> (removed from screen).<br/>2. Before the effect <strong>runs again</strong> — so it cleans up the previous run first.<br/><br/>Example: userId changes → cleanup runs (unsubscribes old user) → effect runs (subscribes new user). Perfect!</div>`
      },
      {
        num: "21", difficulty: "medium",
        question: "Why does useEffect run twice in development (React 18 StrictMode)?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>In React 18's Strict Mode (dev only), React intentionally mounts your component, unmounts it, then mounts it again. This forces your effects to run twice to help you catch missing cleanup functions.</div><div class="example-box"><span class="label">Why React does this 🔍</span>React wants to make sure your effect + cleanup works correctly as a pair. If your effect runs twice and breaks things, it means your cleanup function is incomplete or wrong. This only happens in <strong>development</strong> — in production, effects run once.<br/><br/>✅ If your cleanup is correct, running twice is completely harmless.<br/>❌ If running twice breaks your app, fix the cleanup — don't fight StrictMode!</div>`
      },
      {
        num: "22", difficulty: "hard",
        question: "What is the difference between useEffect and useLayoutEffect?",
        body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Both run after a render, but at different times. <code>useLayoutEffect</code> runs <em>before</em> the browser paints the screen. <code>useEffect</code> runs <em>after</em> the browser paints.</div><div class="example-box"><span class="label">Timeline comparison ⏱️</span><strong>useLayoutEffect</strong>: Render → DOM updated → useLayoutEffect runs → Browser paints.<br/><strong>useEffect</strong>: Render → DOM updated → Browser paints → useEffect runs.<br/><br/><strong>Use useLayoutEffect when</strong>: you need to measure a DOM element (width/height) and update the UI before the user sees it — avoiding a visual flicker. Example: a tooltip that needs to position itself based on available space.<br/><br/><strong>Default: always use useEffect</strong>. useLayoutEffect is synchronous and blocks the browser — only use it when you have a visible flicker to fix.</div>`
      },
    ]
  },
  {
    icon: "🔗",
    title: "All Hooks — Deep Dive",
    questions: [
      { num: "23", difficulty: "easy", question: "What are the rules of Hooks?", body: `<div class="simple-box"><span class="label">Two golden rules 💡</span>1. Only call hooks at the <strong>top level</strong> — not inside if statements, loops, or nested functions.<br/>2. Only call hooks from <strong>React function components or custom hooks</strong> — not regular JavaScript functions.</div><div class="example-box"><span class="label">Why these rules? 🤔</span>React tracks hooks by their <strong>call order</strong>. It assigns state and effects by "1st hook call = useState #1, 2nd hook call = useState #2..." If you put a hook inside an if, it might be skipped on some renders, breaking the order and causing React to assign state to the wrong hook!<pre>// ❌ BREAKS THE RULES:
if (condition) {
  const [val, setVal] = useState(0); // might be skipped!
}

// ✅ CORRECT:
const [val, setVal] = useState(0);
if (condition) { /* use val here */ }</pre></div>` },
      { num: "24", difficulty: "easy", question: "How does useState work in detail?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><code>useState</code> gives you a state variable and a setter function. When you call the setter, React schedules a re-render with the new value. The state variable always holds the value from the <em>last committed render</em>.</div><pre>const [count, setCount] = useState(0);
//     ↑           ↑            ↑
//  current    setter fn    initial value
//   value</pre><div class="example-box"><span class="label">Important behaviors 👇</span><strong>State updates are batched</strong> — React doesn't re-render after every single setState call. It batches them together for one re-render.<br/><br/><strong>State doesn't change during a render</strong> — even after calling setCount(5), the count variable is still the old value for the rest of that render. The new value appears on the next render.<br/><br/><strong>Use functional updates for derived state</strong>:<pre>setCount(prev =&gt; prev + 1); // safe, always uses latest value
// NOT: setCount(count + 1) // might use stale value in closures!</pre></div>` },
      { num: "25", difficulty: "medium", question: "What is a stale closure in React hooks?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>A stale closure is when a hook (usually useEffect or useCallback) "captures" an old value of a variable and keeps using it even after the variable has changed. The function closes over the old value and gets "stuck."</div><pre>// STALE CLOSURE BUG:
const [count, setCount] = useState(0);

useEffect(() =&gt; {
  const interval = setInterval(() =&gt; {
    console.log(count); // always logs 0! — stale closure
    setCount(count + 1); // always sets to 1, not incrementing!
  }, 1000);
  return () =&gt; clearInterval(interval);
}, []); // empty deps — count is "stuck" at 0 in this effect

// FIX — use functional update:
setCount(prev =&gt; prev + 1); // always uses the latest value</pre><div class="example-box"><span class="label">Analogy 📸</span>Imagine taking a photo of a whiteboard. Your photo shows what was on the board at that moment. Even if someone erases and rewrites, your photo still shows the old content. That's a stale closure — a snapshot of old values.</div>` },
      { num: "26", difficulty: "medium", question: "What does useRef do and when should you use it?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><code>useRef</code> gives you a <strong>mutable box</strong> (object with a .current property) that persists across renders without causing re-renders when you change it. It has two main uses.</div><div class="example-box"><span class="label">Two use cases 👇</span><strong>1. Access DOM elements directly:</strong><pre>const inputRef = useRef(null);
&lt;input ref={'{inputRef}'} /&gt;
// Later:
inputRef.current.focus(); // directly focus the input</pre><strong>2. Store values that DON'T trigger re-renders:</strong><pre>const timerIdRef = useRef(null);
// Storing a timer ID — changing this shouldn't re-render!
timerIdRef.current = setInterval(tick, 1000);
// Later:
clearInterval(timerIdRef.current);</pre>Key: ref.current changes are <strong>immediate and synchronous</strong>, but don't trigger re-renders.</div>` },
      { num: "27", difficulty: "medium", question: "What is useContext and how does the Context API work?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Context is React's way to share data across many components without passing props manually down every level. <code>useContext</code> lets any component read from a context directly.</div><pre>// Step 1: Create context
const ThemeContext = React.createContext('light');

// Step 2: Wrap with Provider — all children can now read this
function App() {
  return (
    &lt;ThemeContext.Provider value="dark"&gt;
      &lt;Header /&gt;
      &lt;Main /&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}

// Step 3: Any child reads it — no props needed!
function Header() {
  const theme = useContext(ThemeContext); // "dark"
  return &lt;nav className={'{theme}'}&gt;...&lt;/nav&gt;;
}</pre><div class="example-box"><span class="label">When context re-renders ⚠️</span>Every component that calls useContext re-renders when the context value changes — even if the part it uses didn't change. For frequently changing values, consider splitting contexts or using a state manager like Zustand.</div>` },
      { num: "28", difficulty: "hard", question: "What does useMemo do and when should you use it?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><code>useMemo</code> caches (memoizes) the result of a calculation between renders. It only recalculates when its dependencies change. Use it when a calculation is genuinely expensive.</div><pre>const filteredList = useMemo(() =&gt; {
  // This could filter 10,000 items — expensive!
  return items.filter(item =&gt; item.name.includes(query));
}, [items, query]); // Only recalculate when items or query changes</pre><div class="example-box"><span class="label">When to use vs NOT use 👇</span>✅ Use when: filtering/sorting large lists, expensive math, creating stable object references for deps arrays.<br/>❌ Don't use for simple calculations (<code>a + b</code>) — the overhead of useMemo is worse than just recalculating.<br/>❌ Don't use for JSX output — use React.memo for that.<br/><br/>Rule: profile first, optimize second. Most components are fast enough without it.</div>` },
      { num: "29", difficulty: "hard", question: "What does useCallback do and how is it different from useMemo?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><code>useCallback</code> caches a <strong>function definition</strong> between renders. Without it, a new function object is created on every render. This matters when the function is passed to a memoized child component.</div><pre>// Without useCallback — new function every render:
const handleClick = () =&gt; doSomething(id);
// ↑ Different reference each render!

// With useCallback — same function reference:
const handleClick = useCallback(() =&gt; {
  doSomething(id);
}, [id]); // only recreate when id changes</pre><div class="example-box"><span class="label">useMemo vs useCallback 🆚</span><code>useMemo</code> = caches the <strong>result</strong> of calling a function. <code>useMemo(() =&gt; fn(), deps)</code><br/><code>useCallback</code> = caches the <strong>function itself</strong>. <code>useCallback(fn, deps)</code><br/><br/>They are actually equivalent: <code>useCallback(fn, deps)</code> is the same as <code>useMemo(() =&gt; fn, deps)</code></div>` },
      { num: "30", difficulty: "hard", question: "What does useReducer do and when should you use it over useState?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><code>useReducer</code> is like useState but for complex state logic. Instead of calling setState directly, you send an "action" object that describes what happened, and a "reducer" function decides how state should change.</div><pre>function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    case 'reset':     return { count: 0 };
    default: return state;
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
// To update: dispatch({ type: 'increment' })</pre><div class="example-box"><span class="label">useState vs useReducer 🆚</span>Use <strong>useState</strong> for: simple values, independent pieces of state, when next state doesn't depend on complex logic.<br/>Use <strong>useReducer</strong> for: multiple related values that change together, complex state logic, when next state depends on current state in multiple ways, when you want all state transitions named and visible.</div>` },
      { num: "31", difficulty: "hard", question: "What are custom hooks and how do you build one?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>A custom hook is a JavaScript function whose name starts with <code>use</code> and that calls other hooks inside. It lets you extract and share stateful logic between multiple components.</div><pre>// Custom hook: useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    setLoading(true);
    fetch(url)
      .then(r =&gt; r.json())
      .then(data =&gt; { setData(data); setLoading(false); })
      .catch(err =&gt; { setError(err); setLoading(false); });
  }, [url]);

  return { data, loading, error };
}

// Use in any component:
const { data, loading, error } = useFetch('/api/users');</pre><div class="example-box"><span class="label">Why custom hooks are great 🎯</span>They extract logic OUT of components, making components smaller and logic reusable. Each component that calls the hook gets its own independent state — they don't share state, just the logic.</div>` },
      { num: "32", difficulty: "medium", question: "What does useId do?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><code>useId</code> generates a stable, unique ID for each component instance. It's guaranteed to be the same between server and client renders (important for SSR) and unique across all components.</div><pre>function FormField({ label }) {
  const id = useId(); // e.g. ":r1:"
  return (
    &lt;&gt;
      &lt;label htmlFor={'{id}'}>{'{label}'}&lt;/label&gt;
      &lt;input id={'{id}'} /&gt;
    &lt;/&gt;
  );
}
// Multiple &lt;FormField /&gt; components each get different IDs automatically!</pre><div class="example-box"><span class="label">Why not just use Math.random()? 🎲</span>Math.random() generates different values on server vs client — causing hydration mismatches in SSR. useId generates the same value on both, keeping things in sync.</div>` },
      { num: "33", difficulty: "hard", question: "What does useTransition do?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><code>useTransition</code> lets you mark a state update as "not urgent" so React can keep the UI responsive. React may delay the non-urgent update to handle more urgent things first (like keystrokes).</div><pre>const [isPending, startTransition] = useTransition();

function handleSearch(e) {
  const query = e.target.value;

  // Urgent — update input immediately:
  setInputValue(query);

  // Non-urgent — filtering 10,000 results can wait:
  startTransition(() =&gt; {
    setFilteredResults(filterHugeList(query));
  });
}</pre><div class="example-box"><span class="label">What isPending does 👇</span><code>isPending</code> is true while the transition is waiting to complete. Use it to show a loading indicator:<pre>{'{isPending && <Spinner />'}</pre>Without useTransition: typing feels sluggish because React has to filter 10,000 items on every keystroke. With it: typing is instant, filtering catches up in the background.</div>` },
      { num: "34", difficulty: "hard", question: "What does useDeferredValue do?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><code>useDeferredValue</code> takes a value and returns a "deferred" version of it that lags behind on purpose. React shows the deferred value slightly later to keep things responsive.</div><pre>const [query, setQuery] = useState('');
const deferredQuery = useDeferredValue(query);

// query updates instantly (for the input display)
// deferredQuery updates slightly later (for expensive filtering)

const results = useMemo(
  () =&gt; slowSearch(deferredQuery),
  [deferredQuery]
);</pre><div class="example-box"><span class="label">useTransition vs useDeferredValue 🆚</span><code>useTransition</code>: you control the state update. Wrap the slow setter in startTransition.<br/><code>useDeferredValue</code>: you receive a value you don't control (from props or context). Defer the received value.<br/><br/>Same end result, different use cases. If you own the setState — use useTransition. If you receive the value — use useDeferredValue.</div>` },
    ]
  },
  {
    icon: "🗄️",
    title: "State Management",
    questions: [
      { num: "35", difficulty: "medium", question: "What is lifting state up?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>When two sibling components need to share the same data, you <strong>lift</strong> (move) the state up to their closest common parent. The parent holds the state and passes it down to both children as props.</div><pre>// ✅ After: lift state to parent
function App() {
  const [temp, setTemp] = useState(0); // shared state here!
  return (
    &lt;&gt;
      &lt;CelsiusInput temp={'{temp}'} onchange={'{setTemp}'} /&gt;
      &lt;FahrenheitInput temp={'{temp}'} onChange={'{setTemp}'} /&gt;
    &lt;/&gt;
  );
}</pre><div class="example-box"><span class="label">The rule 📏</span>State lives as low as possible in the tree, but as high as needed for sharing. Don't lift higher than necessary — it causes unnecessary re-renders.</div>` },
      { num: "36", difficulty: "medium", question: "What is prop drilling and how do you solve it?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Prop drilling is passing props through many layers of components just to reach a deeply nested child — even though the middle components don't use the data.</div><div class="example-box"><span class="label">Problem &amp; Solutions 👇</span>Problem: App → Layout → Sidebar → Menu → MenuItem (only MenuItem uses "user")<br/>Every component in between must pass user as a prop — messy!<br/><br/>✅ <strong>Solution 1 — Context API</strong>: Share user via context, any component reads it directly.<br/>✅ <strong>Solution 2 — Component composition</strong>: Pass children/components as props instead of data.<br/>✅ <strong>Solution 3 — State manager</strong>: Zustand, Redux — global store accessible anywhere.<br/>✅ <strong>Solution 4 — Lift and flatten</strong>: Sometimes restructuring components eliminates drilling.</div>` },
      { num: "37", difficulty: "hard", question: "What is state batching and how does it work in React 18?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>State batching means React groups multiple state updates together and processes them in a single re-render — instead of re-rendering after each individual setState call.</div><pre>function handleClick() {
  setCount(c =&gt; c + 1); // not 3 re-renders...
  setName('Alice');      // ...React batches them all...
  setOpen(true);         // ...and does ONE re-render at the end!
}</pre><div class="example-box"><span class="label">React 18 improvement 🆕</span>Before React 18: batching only worked inside React event handlers. setState inside setTimeout, Promises, or native events caused multiple re-renders.<br/><br/>React 18+: batching works <strong>everywhere automatically</strong> — inside Promises, setTimeout, async functions. This is called "Automatic Batching."<br/><br/>To opt out: use <code>flushSync</code> to force an immediate render.</div>` },
      { num: "38", difficulty: "medium", question: "What is the difference between controlled and uncontrolled components?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><strong>Controlled</strong>: React state is the single source of truth for the input's value. Every keystroke updates state, state drives the displayed value.<br/><strong>Uncontrolled</strong>: The DOM itself stores the value. You read it with a ref when you need it.</div><pre>// Controlled (React owns the value):
const [name, setName] = useState('');
&lt;input value={'{name}'} onChange={'{e => setName(e.target.value)}'} /&gt;

// Uncontrolled (DOM owns the value):
const nameRef = useRef();
&lt;input ref={'{nameRef}'} defaultValue="Alice" /&gt;
// Read when needed: nameRef.current.value</pre><div class="example-box"><span class="label">When to use each 👇</span>Controlled → form validation, dependent fields, instant feedback, form libraries (React Hook Form).<br/>Uncontrolled → file uploads (must be uncontrolled), simple one-time-read forms, when performance is critical.</div>` },
      { num: "39", difficulty: "hard", question: "What is Zustand and how does it compare to Context?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Zustand is a tiny global state library. You create a store with state and actions, and any component can read or update it — with much less boilerplate than Redux and better performance than Context.</div><pre>import { create } from 'zustand';

const useStore = create((set) =&gt; ({
  count: 0,
  user: null,
  increment: () =&gt; set(state =&gt; ({ count: state.count + 1 })),
  setUser: (user) =&gt; set({ user }),
}));

// In any component:
const { count, increment } = useStore();</pre><div class="example-box"><span class="label">Context vs Zustand 🆚</span>Context: Re-renders ALL consumers when value changes. Good for slow-changing data (theme, user).<br/>Zustand: Only re-renders components that read the specific value that changed (fine-grained subscriptions). Better for frequently-changing global state like a shopping cart or real-time data.</div>` },
    ]
  },
  {
    icon: "⚡",
    title: "Rendering & Reconciliation",
    questions: [
      { num: "40", difficulty: "medium", question: "What is reconciliation?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Reconciliation is the process React uses to figure out what changed between two renders and update only those parts of the real DOM. It's the engine behind "React only updates what's necessary."</div><div class="example-box"><span class="label">How it works step by step 🔍</span>1. State changes → React re-renders the component → new Virtual DOM tree.<br/>2. React compares the new Virtual DOM tree with the old one (this comparison is called <strong>diffing</strong>).<br/>3. React finds the differences (what changed, was added, or removed).<br/>4. React updates <em>only those specific parts</em> of the real DOM.<br/><br/>React uses clever assumptions to make diffing fast: different element types create different trees, and the <code>key</code> prop helps track list items.</div>` },
      { num: "41", difficulty: "medium", question: "Why is the key prop important in lists?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>The <code>key</code> prop gives each list item a stable identity across renders. React uses it to know which items were added, removed, or reordered — without keys, React has to guess and often gets it wrong.</div><div class="example-box"><span class="label">What happens without stable keys ⚠️</span>Without keys (or with index keys): if you add an item to the beginning of a list, React thinks every item changed — it destroys and recreates all DOM nodes. With proper keys: React knows only the new item was added; existing items are moved, not recreated.<br/><br/><strong>Why index keys are dangerous:</strong> If item at index 0 is now different data (reorder/delete), React reuses the old DOM node with new content — causing bugs like: input values staying in wrong place, wrong item highlighted, animations breaking.</div><pre>// ❌ Bad — index as key:
{'{items.map((item, index) => <Item key={index} data={item} />)'}'}

// ✅ Good — unique stable ID from data:
{'{items.map(item => <Item key={item.id} data={item} />)'}'}
</pre>` },
      { num: "42", difficulty: "hard", question: "What is React Fiber?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Fiber is React's internal rendering engine (introduced in React 16). It breaks rendering work into small units that can be paused, prioritized, and resumed — so the browser stays responsive even during heavy rendering.</div><div class="example-box"><span class="label">Old vs New rendering 🔄</span><strong>Before Fiber (React 15)</strong>: Rendering was one long, uninterruptible call stack. A complex re-render could freeze the browser for 100ms+.<br/><br/><strong>After Fiber</strong>: Rendering is split into units of work. React can pause after each unit, check if there's something more urgent (a user click), handle it, then resume rendering. This enables all Concurrent features.</div>` },
      { num: "43", difficulty: "medium", question: "What is React.memo and how does it prevent unnecessary re-renders?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><code>React.memo</code> wraps a component and tells React: "only re-render this component if its props actually changed." If the parent re-renders but passes the same props, the memoized child is skipped.</div><pre>const ExpensiveChart = React.memo(function Chart({ data, height }) {
  // This only re-renders if data or height changes
  return &lt;canvas ...&gt;&lt;/canvas&gt;;
});

// Custom comparison function (optional):
const Chart = React.memo(Chart, (prevProps, nextProps) =&gt; {
  // Return true to SKIP re-render (same), false to re-render (different)
  return prevProps.data.length === nextProps.data.length;
});</pre><div class="example-box"><span class="label">When React.memo is pointless ⚠️</span>If you pass a new function or object as props on every parent render, React.memo won't help — the new object reference makes it "different" every time. Combine with useCallback and useMemo for the props to make memoization effective.</div>` },
      { num: "44", difficulty: "hard", question: "What is the key trick for resetting component state?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Changing a component's <code>key</code> prop forces React to completely destroy the old component and create a brand new one — resetting all state. This is simpler than manually resetting each state variable.</div><pre>// When userId changes, ProfileForm starts completely fresh:
&lt;ProfileForm key={'{userId}'} userId={'{userId}'} /&gt;

// Without the key trick, switching from user A to user B
// would show user B's data in form fields pre-filled with
// user A's old state values!</pre><div class="example-box"><span class="label">When to use it 🎯</span>Switch between different users/items that share the same component. Reset a form after cancellation. Start an animation fresh. Much cleaner than using useEffect to manually reset all state variables.</div>` },
      { num: "45", difficulty: "hard", question: "What is lazy loading and code splitting in React?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><strong>Code splitting</strong> breaks your app's JavaScript bundle into smaller chunks. <strong>Lazy loading</strong> loads those chunks only when needed — not all upfront. This makes the first page load much faster.</div><pre>import { lazy, Suspense } from 'react';

// Component code loads only when this route is visited:
const AdminPanel = lazy(() =&gt; import('./AdminPanel'));
const Reports = lazy(() =&gt; import('./Reports'));

function App() {
  return (
    &lt;Suspense fallback={'{<LoadingSpinner />}'}&gt;
      &lt;Routes&gt;
        &lt;Route path="/admin" element={'{<AdminPanel />}'} /&gt;
        &lt;Route path="/reports" element={'{<Reports />}'} /&gt;
      &lt;/Routes&gt;
    &lt;/Suspense&gt;
  );
}</pre><div class="example-box"><span class="label">Impact 📦</span>Without code splitting: user downloads ALL page code on first visit — even for pages they may never see. With it: only the current page's code loads first. Other pages load on demand. Faster initial load = better user experience and Core Web Vitals.</div>` },
    ]
  },
  {
    icon: "📝",
    title: "Events, Forms & User Interaction",
    questions: [
      { num: "46", difficulty: "easy", question: "How do events work in React (synthetic events)?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>React wraps the browser's native events in its own <strong>Synthetic Event</strong> system. This gives you a consistent cross-browser event API. Event names are camelCase (<code>onClick</code>, <code>onChange</code>).</div><pre>// HTML: onclick="handleClick()"   ← string
// React: onClick={'{handleClick}'}    ← function reference

function Button() {
  function handleClick(event) {
    event.preventDefault(); // works same in all browsers
    console.log(event.target.value);
  }
  return &lt;button onClick={'{handleClick}'}&gt;Click&lt;/button&gt;;
}</pre><div class="example-box"><span class="label">Event delegation 🎯</span>React doesn't attach a listener to each element. It attaches ONE listener to the root DOM node and uses event bubbling to handle all events from there. This is more efficient and is why all events "bubble up" in React the same way as in vanilla JS.</div>` },
      { num: "47", difficulty: "medium", question: "How do you handle forms in React?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>The most common pattern is <strong>controlled components</strong> — connect each input's value to state so React always knows what's in the form.</div><pre>function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // stop page reload
    loginUser({ email, password });
  }

  return (
    &lt;form onSubmit={'{handleSubmit}'}&gt;
      &lt;input
        type="email"
        value={'{email}'}
        onChange={'{e => setEmail(e.target.value)}'}
      /&gt;
      &lt;input
        type="password"
        value={'{password}'}
        onChange={'{e => setPassword(e.target.value)}'}
      /&gt;
      &lt;button type="submit"&gt;Login&lt;/button&gt;
    &lt;/form&gt;
  );
}</pre>` },
      { num: "48", difficulty: "medium", question: "What is event bubbling and how do you stop it?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Event bubbling means when an event happens on a child element, it also fires on all parent elements going up the tree — like a bubble rising to the surface.</div><pre>&lt;div onClick={() =&gt; console.log('div clicked!')}&gt;
  &lt;button onClick={(e) =&gt; {
    e.stopPropagation(); // ← stops event from bubbling up
    console.log('button clicked!');
  }}&gt;
    Click me
  &lt;/button&gt;
&lt;/div&gt;
// Without stopPropagation: both "button clicked" AND "div clicked" fire!
// With stopPropagation: only "button clicked" fires.</pre><div class="example-box"><span class="label">Common use cases 👇</span>Closing a modal when clicking the backdrop (but not when clicking inside the modal). Preventing a card's click handler from firing when clicking a button inside the card.</div>` },
      { num: "49", difficulty: "medium", question: "How do you debounce user input in React?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Debouncing delays running a function until the user stops doing something for a set amount of time. Useful for search inputs — don't hit the API on every single keystroke, wait until they stop typing.</div><pre>function SearchBox() {
  const [query, setQuery] = useState('');
  const timerRef = useRef(null);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value); // update input immediately

    clearTimeout(timerRef.current); // clear previous timer
    timerRef.current = setTimeout(() =&gt; {
      searchAPI(value); // only search after 500ms of no typing
    }, 500);
  }

  return &lt;input value={'{query}'} onChange={'{handleChange}'} /&gt;;
}</pre><div class="example-box"><span class="label">Cleaner with a library 📦</span>Use <code>lodash.debounce</code> or a custom <code>useDebounce</code> hook for cleaner code. Store the debounced function in a ref or useCallback so it doesn't get recreated every render.</div>` },
    ]
  },
  {
    icon: "🎨",
    title: "Component Patterns & Composition",
    questions: [
      { num: "50", difficulty: "medium", question: "What is component composition and why is it preferred over inheritance?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Composition means building complex components by combining simpler ones — using the <code>children</code> prop or passing components as props. React recommends composition over inheritance for code reuse.</div><pre>// Composition using children:
function Card({ title, children }) {
  return (
    &lt;div className="card"&gt;
      &lt;h2&gt;{'{title}'}&lt;/h2&gt;
      &lt;div className="body"&gt;{'{children}'}&lt;/div&gt;
    &lt;/div&gt;
  );
}

// Use it with any content:
&lt;Card title="User Profile"&gt;
  &lt;Avatar /&gt;
  &lt;Bio /&gt;
  &lt;FollowButton /&gt;
&lt;/Card&gt;</pre><div class="example-box"><span class="label">Why not inheritance? 🤔</span>JavaScript class inheritance is rigid — you inherit everything from the parent, even what you don't want. Composition is flexible — you combine exactly what you need, when you need it. The React team says: "We haven't found any use cases where we'd recommend creating component inheritance hierarchies."</div>` },
      { num: "51", difficulty: "hard", question: "What are Higher-Order Components (HOC)?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>A HOC is a function that takes a component and returns a new enhanced component — adding extra behavior or data without changing the original component.</div><pre>// HOC: withAuth — adds authentication check
function withAuth(Component) {
  return function AuthWrapper(props) {
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn) return &lt;Navigate to="/login" /&gt;;
    return &lt;Component {...props} /&gt;;
  };
}

const ProtectedDashboard = withAuth(Dashboard);
const ProtectedSettings = withAuth(Settings);</pre><div class="example-box"><span class="label">HOC vs Custom Hooks 🆚</span>Both share logic. HOCs are an older pattern that wraps components. Custom hooks are the modern approach — cleaner, no extra component layer in the tree, no "wrapper hell." Prefer custom hooks in new code.</div>` },
      { num: "52", difficulty: "hard", question: "What are Error Boundaries?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>An Error Boundary is a special component that catches JavaScript errors in its children tree and shows a fallback UI instead of crashing the whole app. It's like a try-catch for components.</div><div class="example-box"><span class="label">Key facts 📋</span>⚠️ Error Boundaries are still <strong>class components</strong> — there's no hook equivalent yet.<br/>They only catch errors during rendering, lifecycle methods, and constructor.<br/>They do NOT catch: event handler errors, async errors (setTimeout, fetch), or errors in the boundary itself.<br/><br/><strong>Recommended approach</strong>: Use the <code>react-error-boundary</code> npm package — it gives you a functional component wrapper and error recovery hooks.</div><pre>import { ErrorBoundary } from 'react-error-boundary';

&lt;ErrorBoundary fallback={'{<p>Something went wrong</p>}'}&gt;
  &lt;ComponentThatMightCrash /&gt;
&lt;/ErrorBoundary&gt;</pre>` },
      { num: "53", difficulty: "hard", question: "What is a React Portal and when do you need one?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>A Portal renders a component's HTML outside of its parent's DOM node — but the component still behaves as a React child (events bubble up normally through the React tree, not the DOM tree).</div><pre>// Render modal outside the #root div:
ReactDOM.createPortal(
  &lt;Modal /&gt;,
  document.getElementById('modal-root') // different DOM node!
);</pre><div class="example-box"><span class="label">Why you need it 🪟</span>CSS problem: If a parent has <code>overflow: hidden</code> or a low <code>z-index</code>, a child modal or tooltip gets clipped or hidden behind other elements. With a Portal, the modal renders at the top of the DOM (outside the clipping parent) and appears on top of everything — but React events still work normally.</div>` },
      { num: "54", difficulty: "hard", question: "What is forwardRef and why is it needed?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>By default, the <code>ref</code> prop doesn't pass through to child components — React intercepts it. <code>forwardRef</code> lets you pass a ref from a parent all the way through to a DOM element inside a child component.</div><pre>const FancyInput = React.forwardRef((props, ref) =&gt; {
  return &lt;input ref={'{ref}'} className="fancy" {...props} /&gt;;
});

// Parent can now focus the input inside FancyInput:
function Parent() {
  const inputRef = useRef();
  return &lt;FancyInput ref={'{inputRef}'} /&gt;;
  // inputRef.current is the real &lt;input&gt; DOM element!
}</pre><div class="example-box"><span class="label">Common use cases 👇</span>Reusable input components that need to be focused programmatically. Design system components (Button, Input) that need to forward refs for accessibility. Animation libraries that need to measure DOM elements.</div>` },
      { num: "55", difficulty: "medium", question: "What is the Compound Component pattern?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Compound components are a group of components that work together and share state implicitly through context. Like HTML's <code>&lt;select&gt;</code> and <code>&lt;option&gt;</code> — they work together without you wiring them up.</div><pre>&lt;Accordion&gt;
  &lt;Accordion.Item&gt;
    &lt;Accordion.Header&gt;What is React?&lt;/Accordion.Header&gt;
    &lt;Accordion.Body&gt;React is a UI library...&lt;/Accordion.Body&gt;
  &lt;/Accordion.Item&gt;
  &lt;Accordion.Item&gt;
    &lt;Accordion.Header&gt;What is JSX?&lt;/Accordion.Header&gt;
    &lt;Accordion.Body&gt;JSX is...&lt;/Accordion.Body&gt;
  &lt;/Accordion.Item&gt;
&lt;/Accordion&gt;</pre><div class="example-box"><span class="label">Why it's elegant 👌</span>Flexible API — the consumer decides the structure. No prop wiring between children. Children automatically share state from the parent. Common in design system libraries like Radix UI and Headless UI.</div>` },
    ]
  },
  {
    icon: "🗺️",
    title: "Routing",
    questions: [
      { num: "56", difficulty: "medium", question: "What is React Router and how does it work?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>React Router is the standard routing library for React. It syncs the browser's URL with what React renders — changing the URL shows a different component without a full page reload.</div><pre>import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element={'{<Home />}'} /&gt;
        &lt;Route path="/about" element={'{<About />}'} /&gt;
        &lt;Route path="/user/:id" element={'{<UserPage />}'} /&gt;
        &lt;Route path="*" element={'{<NotFound />}'} /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}</pre><div class="example-box"><span class="label">Key hooks in React Router 🪝</span><code>useNavigate()</code> — navigate programmatically.<br/><code>useParams()</code> — read URL parameters like <code>:id</code>.<br/><code>useLocation()</code> — read current URL path and query string.<br/><code>useSearchParams()</code> — read/write URL query parameters (<code>?page=2</code>).</div>` },
      { num: "57", difficulty: "medium", question: "What is the difference between client-side and server-side routing?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><strong>Server-side routing</strong>: every URL change requests a new HTML page from the server. Full page reload. Traditional websites.<br/><strong>Client-side routing</strong>: the browser handles URL changes with JavaScript, swapping components without reloading. React Router does this.</div><div class="example-box"><span class="label">Client-side routing advantages 👇</span>✅ Much faster navigation — no server round trip, no page reload.<br/>✅ Smooth transitions and animations between pages.<br/>✅ Preserve state between navigations (shopping cart, form drafts).<br/><br/>❌ Disadvantage: requires JavaScript to work. Initial load may be slower. Need extra setup for SEO (search engines need to see content). That's why Next.js combines both approaches!</div>` },
      { num: "58", difficulty: "medium", question: "How do you protect routes (authentication-based routing)?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Create a "Protected Route" wrapper component that checks if the user is logged in. If yes, show the page. If no, redirect to login.</div><pre>function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return &lt;Navigate to="/login" replace /&gt;;
  }

  return children;
}

// Use it in your routes:
&lt;Route
  path="/dashboard"
  element={
    &lt;ProtectedRoute&gt;
      &lt;Dashboard /&gt;
    &lt;/ProtectedRoute&gt;
  }
/&gt;</pre>` },
    ]
  },
  {
    icon: "🌐",
    title: "Data Fetching & Side Effects",
    questions: [
      { num: "59", difficulty: "medium", question: "How do you fetch data in React properly?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Use <code>useEffect</code> with an empty dependency array to fetch data when the component mounts. Always handle loading and error states, and cancel the fetch if the component unmounts before the data arrives.</div><pre>function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    let cancelled = false;

    fetch('/api/users')
      .then(res =&gt; res.json())
      .then(data =&gt; {
        if (!cancelled) setUsers(data);
      })
      .catch(err =&gt; {
        if (!cancelled) setError(err.message);
      })
      .finally(() =&gt; {
        if (!cancelled) setLoading(false);
      });

    return () =&gt; { cancelled = true; };
  }, []);

  if (loading) return &lt;Spinner /&gt;;
  if (error) return &lt;p&gt;Error: {'{error}'}&lt;/p&gt;;
  return &lt;ul&gt;{'{users.map(u => <li key={u.id}>{u.name}</li>)}'}&lt;/ul&gt;;
}</pre>` },
      { num: "60", difficulty: "medium", question: "What is React Query (TanStack Query) and why use it?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>React Query is a library that handles all the messy parts of data fetching for you — loading states, caching, refetching, deduplication, background updates. Much less code than manual useEffect fetching.</div><pre>function UserList() {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () =&gt; fetch('/api/users').then(r =&gt; r.json()),
  });

  if (isLoading) return &lt;Spinner /&gt;;
  if (error) return &lt;p&gt;Error!&lt;/p&gt;;
  return &lt;ul&gt;{'{users.map(u => <li key={u.id}>{u.name}</li>)}'}&lt;/ul&gt;;
}</pre><div class="example-box"><span class="label">What you get for free 🎁</span>✅ Automatic caching — same data not fetched twice.<br/>✅ Background refetching — stale data refreshed automatically.<br/>✅ Request deduplication — if 10 components need the same data, only 1 request is made.<br/>✅ Retry on failure — automatically retries failed requests.<br/>✅ Optimistic updates — update UI before server confirms.</div>` },
      { num: "61", difficulty: "hard", question: "What is the race condition problem in data fetching and how do you fix it?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>A race condition happens when multiple fetch requests are in flight and the responses arrive out of order — the UI shows stale data from an earlier request that arrived last.</div><div class="example-box"><span class="label">The problem 🐛</span>User types "re" → fetch starts for "re". User types "react" → fetch starts for "react". "react" response arrives first (it's cached). "re" response arrives second and OVERWRITES the display with wrong results!<br/><br/><strong>Fix 1</strong>: Use a cancelled flag (as shown in Q59) — ignore the response if a newer one is pending.<br/><strong>Fix 2</strong>: Use AbortController to actually cancel the HTTP request.<br/><strong>Fix 3</strong>: Use React Query — it handles this automatically.</div><pre>useEffect(() =&gt; {
  const controller = new AbortController();
  fetch(url, { signal: controller.signal }).then(...);
  return () =&gt; controller.abort();
}, [url]);</pre>` },
    ]
  },
  {
    icon: "🚀",
    title: "Performance Optimization",
    questions: [
      { num: "62", difficulty: "medium", question: "What causes unnecessary re-renders and how do you prevent them?", body: `<div class="simple-box"><span class="label">Common causes 💡</span></div><div class="example-box"><span class="label">Causes &amp; Fixes 🔧</span><strong>1. Parent re-renders → child re-renders</strong><br/>Fix: Wrap child in <code>React.memo</code>.<br/><br/><strong>2. New object/array reference in props every render</strong><br/><pre>// ❌ New object every render:
&lt;Child style={'{{ color: \'red\' }}'} /&gt;
// ✅ Fix with useMemo:
const style = useMemo(() =&gt; ({ color: 'red' }), []);</pre><strong>3. New function reference in props every render</strong><br/>Fix: Wrap with <code>useCallback</code>.<br/><br/><strong>4. Context value changing unnecessarily</strong><br/>Fix: Memoize the context value, split contexts by update frequency.</div>` },
      { num: "63", difficulty: "hard", question: "How do you profile and find performance issues in React?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Use the React DevTools Profiler tab to record interactions and see which components rendered, how long they took, and why they rendered.</div><div class="example-box"><span class="label">Step by step 📋</span>1. Open browser DevTools → React tab → Profiler.<br/>2. Click record, interact with your app, stop recording.<br/>3. Look for components with large render times (shown in flame graph).<br/>4. Click a component to see <strong>why it rendered</strong> (prop changed? state changed? hook changed?).<br/>5. Use <code>&lt;React.Profiler&gt;</code> component in code to measure programmatically.<br/><br/><strong>Rule</strong>: Never optimize without measuring first. Re-renders are usually NOT the bottleneck — actual computation or DOM updates often are.</div>` },
      { num: "64", difficulty: "hard", question: "What is Concurrent React and what problems does it solve?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Concurrent React (introduced in React 18) allows React to work on multiple tasks at once — pausing urgent rendering, doing other work, then coming back. This keeps the UI smooth even when there's heavy rendering work.</div><div class="example-box"><span class="label">The problem it solves 🚦</span>Old React: rendering was all-or-nothing. If rendering 500 list items took 300ms, the browser was frozen for 300ms — clicks and typing were ignored.<br/><br/>Concurrent React: React can render 10 items, yield to the browser to handle a keystroke, render 10 more items, yield again. The page feels responsive the whole time.<br/><br/>Features it enables: <code>useTransition</code>, <code>useDeferredValue</code>, Suspense for data, streaming SSR.</div>` },
      { num: "65", difficulty: "hard", question: "What is React's automatic batching (React 18) and why does it matter?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Automatic batching means React 18 now groups state updates from <em>anywhere</em> — including setTimeout, Promises, and async functions — into a single re-render. Before React 18, only updates inside React event handlers were batched.</div><pre>// React 17: Inside setTimeout = 2 separate re-renders
// React 18: Inside setTimeout = batched into 1 re-render!
setTimeout(() =&gt; {
  setCount(c =&gt; c + 1);
  setFlag(f =&gt; !f);
}, 1000);
// React 18: these are batched → only ONE re-render!</pre><div class="example-box"><span class="label">Opting out 👇</span>Use <code>ReactDOM.flushSync()</code> if you need to force immediate separate renders (very rare):<pre>import { flushSync } from 'react-dom';
flushSync(() =&gt; setCount(1));
flushSync(() =&gt; setFlag(true));</pre></div>` },
    ]
  },
  {
    icon: "🧪",
    title: "Advanced Topics & Ecosystem",
    questions: [
      { num: "66", difficulty: "hard", question: "What is SSR (Server-Side Rendering) and how does React support it?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>SSR means the server builds the HTML for your React components and sends it to the browser — so the user sees content immediately, before JavaScript loads. The browser then "hydrates" the HTML to make it interactive.</div><div class="example-box"><span class="label">CSR vs SSR 🆚</span><strong>CSR</strong> (Client-Side Rendering): Browser gets empty HTML + JS bundle → JS builds the page → user sees content. Slow initial load. Bad for SEO (Googlebot may not see content).<br/><br/><strong>SSR</strong>: Server renders full HTML → browser shows content immediately → JS loads and hydrates. Fast first paint. Great for SEO.<br/><br/>Use Next.js for SSR with React — it handles the server setup, routing, and hydration automatically.</div>` },
      { num: "67", difficulty: "hard", question: "What are React Server Components (RSC)?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>React Server Components run <strong>only on the server</strong>, never in the browser. They can directly access databases, file systems, and APIs — and they send only HTML to the browser with <strong>zero JavaScript</strong> sent for them.</div><div class="example-box"><span class="label">Server vs Client Components 🆚</span><strong>Server Component</strong> (default in Next.js App Router):<br/>✅ Can access database directly. ✅ Zero JS shipped. ✅ Fast initial load. ❌ No useState. ❌ No useEffect. ❌ No onClick.<br/><br/><strong>Client Component</strong> (add <code>'use client'</code> at top):<br/>✅ useState, useEffect, events. ❌ Can't access server-only resources. ❌ JS is shipped to browser.<br/><br/>Strategy: use Server Components for data fetching and static content. Use Client Components only where interactivity is needed.</div>` },
      { num: "68", difficulty: "hard", question: "What is hydration in React?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Hydration is when React "activates" server-rendered HTML — attaching event handlers and React's state management to the existing HTML without rebuilding the DOM from scratch.</div><div class="example-box"><span class="label">Step by step 🌊</span>1. Server renders React → sends HTML to browser.<br/>2. Browser displays the HTML immediately (user sees page fast).<br/>3. JavaScript bundle loads.<br/>4. React "hydrates" — it walks the existing DOM, matches it to the virtual DOM, and attaches event handlers.<br/>5. Page is now interactive!<br/><br/><strong>Hydration mismatch</strong>: If the HTML the server rendered doesn't match what React expects to render, you get a hydration error. Common cause: code that reads browser-only values (Date, window, Math.random) during render.</div>` },
      { num: "69", difficulty: "medium", question: "What is Next.js and when should you use it?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Next.js is a framework built on top of React. It adds SSR, SSG, file-based routing, API routes, optimized images, and much more — all pre-configured so you can focus on building features.</div><div class="example-box"><span class="label">React vs Next.js — when to use which 👇</span>Use <strong>plain React + Vite</strong> for: internal tools, dashboards, apps that don't need SEO, SPAs where the user is always logged in.<br/><br/>Use <strong>Next.js</strong> for: public-facing websites (blogs, e-commerce, marketing pages), anything that needs SEO, apps where first load speed matters, when you need a backend API alongside your frontend.</div>` },
      { num: "70", difficulty: "medium", question: "What is Suspense in React?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><code>Suspense</code> is a React component that shows a fallback (loading state) while its children are "suspending" — waiting for something (a lazy-loaded component or data to load).</div><pre>&lt;Suspense fallback={'{<div>Loading...</div>}'}&gt;
  &lt;LazyComponent /&gt;
  &lt;DataComponent /&gt;
&lt;/Suspense&gt;</pre><div class="example-box"><span class="label">Two uses today 👇</span>1. <strong>Lazy loading</strong>: wraps <code>React.lazy()</code> components — shows fallback while JS downloads.<br/>2. <strong>Server-side data</strong>: In Next.js App Router, Server Components that fetch data automatically integrate with Suspense — the page streams in progressively as data loads.<br/><br/>Suspense makes async behavior declarative — you just say "show Loading while waiting" and React handles it.</div>` },
      { num: "71", difficulty: "hard", question: "What is the React Compiler (React 19)?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>The React Compiler is a build-time tool in React 19 that automatically adds memoization to your components. You no longer need to manually write <code>useMemo</code>, <code>useCallback</code>, and <code>React.memo</code> — the compiler figures out what to optimize.</div><div class="example-box"><span class="label">Before vs After React Compiler 🔮</span>Before (manual memoization):<pre>const filteredItems = useMemo(() =&gt; items.filter(fn), [items]);
const handleClick = useCallback(() =&gt; doThing(id), [id]);
export default React.memo(MyComponent);</pre>After (React Compiler does it automatically):<pre>const filteredItems = items.filter(fn); // compiler memoizes this!
const handleClick = () =&gt; doThing(id); // compiler stabilizes this!
export default MyComponent; // compiler adds memo automatically!</pre>Same performance, much less code, fewer bugs from forgetting to memoize.</div>` },
      { num: "72", difficulty: "medium", question: "How do you test React components?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Use <strong>React Testing Library (RTL)</strong> with <strong>Jest</strong> or <strong>Vitest</strong>. RTL's philosophy: test what users see and do, not implementation details.</div><pre>import { render, screen, fireEvent } from '@testing-library/react';

test('counter increments when button clicked', () =&gt; {
  render(&lt;Counter /&gt;);
  const button = screen.getByRole('button', { name: /increment/i });
  fireEvent.click(button);
  fireEvent.click(button);
  expect(screen.getByText('Count: 2')).toBeInTheDocument();
});</pre><div class="example-box"><span class="label">Testing philosophy 🧪</span>✅ Query by text, role, label (like a user would interact).<br/>❌ Don't query by className or component name — these are implementation details.</div>` },
      { num: "73", difficulty: "hard", question: "What is the difference between state derived during render vs in useEffect?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>If a value can be calculated from existing state or props, calculate it directly during render — don't store it in state and don't put it in useEffect. Redundant state causes bugs and extra re-renders.</div><div class="example-box"><span class="label">Bad vs Good 🆚</span><pre>// ❌ BAD — redundant state + useEffect:
const [items, setItems] = useState([]);
const [filteredItems, setFilteredItems] = useState([]);
useEffect(() =&gt; {
  setFilteredItems(items.filter(i =&gt; i.active)); // extra render!
}, [items]);

// ✅ GOOD — derived during render, no useEffect needed:
const [items, setItems] = useState([]);
const filteredItems = items.filter(i =&gt; i.active); // just calculate it!</pre></div>` },
      { num: "74", difficulty: "hard", question: "When should you NOT use useEffect?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>useEffect is often overused. Many things that developers put in useEffect should actually be done during render, in event handlers, or in specialized hooks.</div><div class="example-box"><span class="label">When to avoid useEffect 🚫</span>❌ Transforming data for display → calculate during render.<br/>❌ Handling events → put logic in event handlers, not useEffect.<br/>❌ Fetching data on mount for display → use React Query or RSC instead.<br/>❌ Resetting form state when prop changes → calculate initial state once or use key trick.<br/>❌ Notifying parent of state change → pass callback and call it in the event handler directly.<br/><br/>✅ DO use useEffect for: subscriptions, third-party library setup (maps, charts), syncing with external systems (localStorage, WebSocket), cleanup.</div>` },
      { num: "75", difficulty: "medium", question: "What is the difference between React 17 and React 18?", body: `<div class="simple-box"><span class="label">React 18 key changes 🆕</span></div><div class="example-box"><span class="label">What changed 👇</span>🔄 <strong>Automatic batching</strong>: State updates batch everywhere (not just in event handlers).<br/>⚡ <strong>Concurrent features</strong>: <code>useTransition</code>, <code>useDeferredValue</code>, <code>startTransition</code>.<br/>📦 <strong>New root API</strong>: <code>ReactDOM.createRoot()</code> replaces <code>ReactDOM.render()</code>.<br/>🌊 <strong>Streaming SSR</strong>: HTML streams to browser progressively.<br/>⏳ <strong>Suspense improvements</strong>: Better integration with SSR and data fetching.<br/>🔁 <strong>StrictMode behavior</strong>: Effects run twice in dev to help find cleanup bugs.</div>` },
      { num: "76", difficulty: "easy", question: "What are the common React folder structure patterns?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>There's no single "right" way, but two popular patterns are: <strong>by type</strong> (group by components, hooks, services) and <strong>by feature</strong> (group everything related to a feature together).</div><div class="example-box"><span class="label">Feature-based (recommended for large apps) 👇</span><pre>src/
  features/
    auth/
      LoginForm.jsx
      useAuth.js
      authApi.js
    products/
      ProductList.jsx
      ProductCard.jsx
      useProducts.js
  shared/
    Button.jsx
    Modal.jsx
  App.jsx</pre>Feature-based scales better — everything for "auth" lives together. Easy to find, easy to delete when removing a feature.</div>` },
      { num: "77", difficulty: "medium", question: "What is the difference between imperative and declarative React?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><strong>Imperative</strong> = tell the computer HOW to do each step. <strong>Declarative</strong> = tell the computer WHAT you want and let it figure out how.</div><div class="example-box"><span class="label">React is declarative 🗣️</span>Imperative (jQuery): "Find the div. Add class 'loading'. Then fetch. Then remove 'loading'. Then find the ul. Loop through data. Create li elements. Append each..."<br/><br/>Declarative (React):<pre>if (loading) return &lt;LoadingSpinner /&gt;;
return &lt;ul&gt;{'{data.map(i => <li key={i.id}>{i.name}</li>)}'}&lt;/ul&gt;;</pre>You describe WHAT the UI should look like. React handles all the DOM manipulation steps automatically.</div>` },
      { num: "78", difficulty: "hard", question: "What is optimistic UI and how do you implement it in React?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Optimistic UI means updating the screen as if an action already succeeded — before the server confirms. If the server fails, you roll back. Makes apps feel instant.</div><pre>async function handleLike(postId) {
  // Optimistically update UI immediately:
  setPosts(posts.map(p =&gt;
    p.id === postId ? { ...p, liked: true, likes: p.likes + 1 } : p
  ));

  try {
    await api.likePost(postId);
  } catch (error) {
    // Server failed — roll back:
    setPosts(originalPosts);
    showError('Like failed, please try again');
  }
}</pre><div class="example-box"><span class="label">Real examples 👍</span>Instagram like button — heart fills instantly. Twitter retweet — count updates immediately. Gmail "Undo send" — email appears sent, can undo within 5 seconds. React Query and React 19's useOptimistic hook make this easier to implement correctly.</div>` },
      { num: "79", difficulty: "medium", question: "What is conditional rendering and what are all the patterns?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Conditional rendering means showing different UI based on a condition. React has several ways to do it — each suited for different situations.</div><pre>// 1. if/else (good for early returns):
if (loading) return &lt;Spinner /&gt;;
if (error) return &lt;ErrorPage /&gt;;
return &lt;MainContent /&gt;;

// 2. Ternary operator:
{'{isLoggedIn ? <Dashboard /> : <Login />}'}

// 3. && operator:
{'{hasNotifications && <NotificationBadge />}'}
// ⚠️ Warning: {'{count && <Badge />}'} shows "0" when count=0!
// Fix: {'{count > 0 && <Badge />}'}

// 4. Switch/object map:
const views = { home: &lt;Home /&gt;, about: &lt;About /&gt; };
return views[currentView] || &lt;NotFound /&gt;;</pre>` },
      { num: "80", difficulty: "hard", question: "What is the useOptimistic hook (React 19)?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><code>useOptimistic</code> is a React 19 hook that makes optimistic UI updates easy — it shows the optimistic value while an async operation is pending and automatically reverts to the real value when the operation completes (or fails).</div><pre>const [optimisticLikes, addOptimisticLike] = useOptimistic(
  post.likes,
  (currentLikes, newLike) =&gt; currentLikes + newLike
);

async function handleLike() {
  addOptimisticLike(1); // instantly shows +1 like
  await api.likePost(post.id);
  // React automatically reverts if this fails
}</pre>` },
      { num: "81", difficulty: "easy", question: "What is the React ecosystem — key libraries to know?", body: `<div class="simple-box"><span class="label">The React ecosystem 🌳</span></div><div class="example-box"><span class="label">Categories &amp; top picks 👇</span>🏗️ <strong>Framework</strong>: Next.js (SSR/SSG), Remix.<br/>🗺️ <strong>Routing</strong>: React Router, TanStack Router.<br/>🗄️ <strong>Global State</strong>: Zustand (simple), Redux Toolkit (complex), Jotai (atomic).<br/>🌐 <strong>Server State / Data Fetching</strong>: TanStack Query (React Query), SWR.<br/>📋 <strong>Forms</strong>: React Hook Form (best for perf), Formik (older).<br/>🎨 <strong>Styling</strong>: Tailwind CSS, CSS Modules, styled-components.<br/>🧪 <strong>Testing</strong>: React Testing Library + Vitest/Jest.<br/>📦 <strong>Build Tool</strong>: Vite (fast dev), Turbopack (Next.js).<br/>🧩 <strong>UI Components</strong>: shadcn/ui, Radix UI, MUI.</div>` },
      { num: "82", difficulty: "medium", question: "What is prop types validation vs TypeScript?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Both validate the types of props your component receives, but they work at different times and in different ways.</div><div class="example-box"><span class="label">PropTypes vs TypeScript 🆚</span><strong>PropTypes</strong>: Runtime check (happens when app is running). Warns in console. JavaScript only.<br/><pre>Button.propTypes = { label: PropTypes.string.isRequired };</pre><strong>TypeScript</strong>: Compile-time check (before app runs). Errors in your editor. Catches bugs before users see them. More powerful.<br/><pre>interface ButtonProps { label: string; onClick: () =&gt; void; }
function Button({ label, onClick }: ButtonProps) { ... }</pre><strong>Recommendation</strong>: Use TypeScript for new projects. PropTypes is still useful for JavaScript projects or library authors.</div>` },
      { num: "83", difficulty: "hard", question: "What is the difference between useEffect and event handlers for data mutations?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>If something happens because of a <strong>user action</strong> (click, submit) — put the code in an event handler. If something needs to happen because of a <strong>state/prop change</strong> or external system sync — put it in useEffect.</div><div class="example-box"><span class="label">Common mistake 👇</span><pre>// ❌ Wrong — using useEffect to react to a button click:
useEffect(() =&gt; {
  if (submitted) { saveToServer(formData); }
}, [submitted]);

// ✅ Right — do it directly in the event handler:
function handleSubmit() {
  saveToServer(formData);
  setSubmitted(true);
}</pre>useEffect for mutations runs an extra render cycle unnecessarily. Event handlers are synchronous and direct.</div>` },
      { num: "84", difficulty: "hard", question: "What is React Actions and useActionState (React 19)?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>React 19 adds native support for async form actions. You can pass an async function directly to a form's <code>action</code> prop, and React handles the pending state, errors, and result for you.</div><pre>const [state, formAction, isPending] = useActionState(
  async (prevState, formData) =&gt; {
    const name = formData.get('name');
    const result = await saveUser({ name });
    return result;
  },
  null
);

return (
  &lt;form action={'{formAction}'}&gt;
    &lt;input name="name" /&gt;
    &lt;button disabled={'{isPending}'}&gt;
      {'{isPending ? \'Saving...\' : \'Save\'}'}
    &lt;/button&gt;
    {'{state?.error && <p>{state.error}</p>}'}
  &lt;/form&gt;
);</pre>` },
      { num: "85", difficulty: "medium", question: "What is the difference between useState's initial value and lazy initialization?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>If you pass a value to useState, it's computed every render (even though only used once). If you pass a <strong>function</strong>, React only calls it on the first render — this is lazy initialization.</div><pre>// ❌ Runs JSON.parse on EVERY render (wasteful!):
const [data, setData] = useState(JSON.parse(localStorage.getItem('data')));

// ✅ Lazy initialization — only runs ONCE on first render:
const [data, setData] = useState(() =&gt; {
  return JSON.parse(localStorage.getItem('data'));
});</pre><div class="example-box"><span class="label">When to use lazy initialization 👇</span>When the initial value is expensive to compute: reading from localStorage, parsing JSON, complex calculations. If the initial value is just a number or string, it doesn't matter.</div>` },
      { num: "86", difficulty: "hard", question: "What is the purpose of the Profiler API in React?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>The <code>&lt;Profiler&gt;</code> component lets you measure the rendering performance of React components programmatically — how often they render and how long each render takes.</div><pre>function onRenderCallback(id, phase, actualDuration, baseDuration) {
  console.log(\`\${id} \${phase}: \${actualDuration.toFixed(2)}ms\`);
}

&lt;Profiler id="ProductList" onRender={'{onRenderCallback}'}&gt;
  &lt;ProductList items={'{items}'} /&gt;
&lt;/Profiler&gt;</pre><div class="example-box"><span class="label">Use cases 👇</span>Measure performance of specific components during development. Send render timing data to analytics. Compare before/after a performance optimization.</div>` },
      { num: "87", difficulty: "medium", question: "What is shallow vs deep copy and why does it matter for React state?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>React state updates must be <strong>immutable</strong> — you should never directly mutate state. Instead, create a new copy of the object/array with the changes applied.</div><pre>// ❌ WRONG — direct mutation, React won't see the change!
state.user.name = 'Alice';
setState(state); // same reference, no re-render!

// ✅ RIGHT — create a new object:
setState({ ...state, user: { ...state.user, name: 'Alice' } });

// ✅ For arrays:
setItems([...items, newItem]);    // add
setItems(items.filter(i =&gt; i.id !== id)); // remove
setItems(items.map(i =&gt; i.id === id ? {...i, done: true} : i)); // update</pre><div class="example-box"><span class="label">Why immutability? 🔒</span>React compares the old state reference to the new one. If you mutate the same object, the reference is the same — React thinks nothing changed and doesn't re-render. Always return a new object/array!</div>` },
      { num: "88", difficulty: "hard", question: "What is useImperativeHandle?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span><code>useImperativeHandle</code> (used with forwardRef) lets you control what a parent gets when they use a ref on your component — instead of exposing the raw DOM element, you expose specific methods you choose.</div><pre>const VideoPlayer = forwardRef((props, ref) =&gt; {
  const videoRef = useRef();

  useImperativeHandle(ref, () =&gt; ({
    play: () =&gt; videoRef.current.play(),
    pause: () =&gt; videoRef.current.pause(),
    seek: (time) =&gt; { videoRef.current.currentTime = time; }
  }));

  return &lt;video ref={'{videoRef}'} {...props} /&gt;;
});</pre><div class="example-box"><span class="label">Why limit access? 🔐</span>If you expose the full DOM element, parents can do anything to it — breaking your component's abstraction. useImperativeHandle creates a controlled public API for your component, keeping internals private.</div>` },
      { num: "89", difficulty: "medium", question: "What is CSS-in-JS and what are the options in React?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>CSS-in-JS means writing your CSS styles inside JavaScript files alongside your components. Styles are scoped to the component and can use JavaScript logic.</div><div class="example-box"><span class="label">Styling options in React 👇</span>🏷️ <strong>Plain CSS files</strong>: Simple, global. Risk of class name clashes.<br/>🧩 <strong>CSS Modules</strong>: Scoped CSS files. Best of both worlds. No class clashes.<br/>🌊 <strong>Tailwind CSS</strong>: Utility classes in JSX. Very popular, fast to write.<br/>💅 <strong>styled-components</strong>: CSS-in-JS. Write real CSS syntax inside JS. Runtime overhead.<br/>🎭 <strong>Emotion</strong>: Similar to styled-components. Used by MUI.<br/>⚡ <strong>vanilla-extract</strong>: Zero-runtime CSS-in-JS. Types and performance.<br/><br/>Current industry favorite for new projects: Tailwind CSS + CSS Modules.</div>` },
      { num: "90", difficulty: "hard", question: "What is the difference between React.createElement and JSX?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>JSX is just syntactic sugar — a nicer way to write <code>React.createElement()</code> calls. Babel transforms all JSX into createElement calls before the browser sees it.</div><pre>// JSX (what you write):
const element = (
  &lt;div className="box"&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
    &lt;p&gt;World&lt;/p&gt;
  &lt;/div&gt;
);

// What Babel transforms it into:
const element = React.createElement(
  'div',
  { className: 'box' },
  React.createElement('h1', null, 'Hello'),
  React.createElement('p', null, 'World')
);</pre><div class="example-box"><span class="label">Why does this matter? 🤔</span>Understanding this helps you debug JSX errors. It explains why you needed <code>import React from 'react'</code> in old React (createElement needed to be in scope). Since React 17's new JSX transform, this import is no longer needed.</div>` },
      { num: "91", difficulty: "medium", question: "What are controlled inputs and how do you handle multiple inputs efficiently?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Instead of a separate state variable and onChange handler for each input, use one object for all form state and a single generic change handler.</div><pre>const [form, setForm] = useState({
  name: '', email: '', phone: ''
});

function handleChange(e) {
  const { name, value } = e.target;
  setForm(prev =&gt; ({ ...prev, [name]: value }));
}

&lt;input name="name" value={'{form.name}'} onChange={'{handleChange}'} /&gt;
&lt;input name="email" value={'{form.email}'} onChange={'{handleChange}'} /&gt;
&lt;input name="phone" value={'{form.phone}'} onChange={'{handleChange}'} /&gt;</pre>` },
      { num: "92", difficulty: "hard", question: "What is memoization in React and what are its limits?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Memoization is caching — storing the result of an expensive operation and returning the cached result when inputs haven't changed. React provides useMemo, useCallback, and React.memo for this.</div><div class="example-box"><span class="label">Limits of memoization ⚠️</span>1. <strong>Reference equality</strong>: Only works when deps use primitive values or stable references. New objects/arrays in deps = cache miss every time.<br/>2. <strong>Memory cost</strong>: Memoization stores results in memory — for large datasets this can be costly.<br/>3. <strong>Cache only holds last value</strong>: React's useMemo only keeps the last result. If deps change back and forth, it recalculates each time.<br/>4. <strong>Not free</strong>: The comparison on every render has a cost. For cheap calculations, useMemo is slower than just recalculating.<br/><br/>Rule: profile first. Apply memoization surgically where profiling shows a real problem.</div>` },
      { num: "93", difficulty: "medium", question: "What is the children prop and how does it work?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>The <code>children</code> prop is automatically populated with whatever you put between a component's opening and closing tags. It can be text, elements, other components, arrays, or functions.</div><pre>function Modal({ children, onClose }) {
  return (
    &lt;div className="modal-backdrop"&gt;
      &lt;div className="modal"&gt;
        {'{children}'}
        &lt;button onClick={'{onClose}'}&gt;Close&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}</pre><div class="example-box"><span class="label">Children as a function (render props) 🔧</span>You can also pass a function as children — called "render props pattern":<pre>&lt;DataProvider&gt;
  {'{(data) => <DataDisplay items={data} />}'}
&lt;/DataProvider&gt;</pre></div>` },
      { num: "94", difficulty: "hard", question: "What is the Context + useReducer pattern?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>Combining Context with useReducer gives you a simple, built-in state manager — global state accessible anywhere, with organized state transitions. A lighter alternative to Redux for medium-sized apps.</div><pre>const StoreContext = React.createContext();

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    &lt;StoreContext.Provider value={'{{ state, dispatch }}'}&gt;
      {'{children}'}
    &lt;/StoreContext.Provider&gt;
  );
}

function Cart() {
  const { state, dispatch } = useContext(StoreContext);
  return &lt;div&gt;{'{state.cart.length}'} items&lt;/div&gt;;
}</pre><div class="example-box"><span class="label">When to graduate to Zustand/Redux 👇</span>This pattern works well for simple global state. Switch to Zustand when: you have many separate pieces of state, performance is a concern (all context consumers re-render), or you need middleware/devtools.</div>` },
      { num: "95", difficulty: "medium", question: "What is React DevTools and what can you do with it?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>React DevTools is a free browser extension that adds two tabs to your browser DevTools: <strong>Components</strong> (inspect your component tree) and <strong>Profiler</strong> (measure rendering performance).</div><div class="example-box"><span class="label">What you can do 🔍</span>🌳 <strong>Components tab</strong>:<br/>- See your full component tree visually.<br/>- Click any component to see its current props and state.<br/>- Edit props and state live to test scenarios.<br/>- Find which components are wrapped in memo/context.<br/><br/>⏱️ <strong>Profiler tab</strong>:<br/>- Record an interaction and see which components rendered.<br/>- See how long each render took (flame chart).<br/>- See WHY a component rendered (which prop/state changed).<br/>- Find unnecessary re-renders.</div>` },
      { num: "96", difficulty: "hard", question: "What is the difference between mounting, rendering, and committing?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>React's update process has three phases: <strong>Render</strong> (calculate what to show), <strong>Commit</strong> (apply changes to DOM), then run <strong>Effects</strong>.</div><div class="example-box"><span class="label">The three phases in detail 📋</span><strong>1. Render Phase</strong> (can be interrupted — Concurrent):<br/>React calls your component functions. It's pure computation — no DOM changes happen here. React diffs the new virtual DOM against the old one and calculates what needs to change.<br/><br/><strong>2. Commit Phase</strong> (synchronous — can't be interrupted):<br/>React applies the calculated changes to the real DOM. This is fast because React knows exactly what changed. useLayoutEffect runs here (synchronously).<br/><br/><strong>3. Effects Phase</strong> (after browser paint):<br/>useEffect callbacks run here, asynchronously after the browser has painted the screen.</div>` },
      { num: "97", difficulty: "easy", question: "What are the most common React mistakes beginners make?", body: `<div class="simple-box"><span class="label">Top mistakes to avoid 💡</span></div><div class="example-box"><span class="label">Common mistakes 👇</span>❌ <strong>Mutating state directly</strong>: <code>state.items.push(x)</code> — always create a new array!<br/><br/>❌ <strong>Using index as list key</strong>: causes rendering bugs with reordering.<br/><br/>❌ <strong>Forgetting the dependency array</strong>: <code>useEffect(() =&gt; {'{fetchData();'}}</code> — runs every render, infinite loop!<br/><br/>❌ <strong>Calling setState during render</strong>: leads to infinite re-renders.<br/><br/>❌ <strong>Using count inside effect without deps</strong>: stale closure bug.<br/><br/>❌ <strong>Creating objects/arrays in JSX as props</strong>: <code>&lt;Child style={'{'}{'{'}{'}color:\'red\'{'}'}{'}'}{'}'} /&gt;</code> — new object every render breaks memoization.<br/><br/>❌ <strong>Putting everything in useEffect</strong>: most things belong in event handlers or derived state.</div>` },
      { num: "98", difficulty: "medium", question: "What is the Suspense boundary and error boundary strategy?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>You should wrap different sections of your app independently with Suspense and Error Boundaries — so a loading or error in one section doesn't crash or block the entire page.</div><pre>function App() {
  return (
    &lt;ErrorBoundary fallback={'{<AppCrashed />}'}&gt;
      &lt;Navbar /&gt;
      &lt;ErrorBoundary fallback={'{<SidebarError />}'}&gt;
        &lt;Suspense fallback={'{<SidebarSkeleton />}'}&gt;
          &lt;Sidebar /&gt;
        &lt;/Suspense&gt;
      &lt;/ErrorBoundary&gt;
      &lt;ErrorBoundary fallback={'{<ContentError />}'}&gt;
        &lt;Suspense fallback={'{<ContentSkeleton />}'}&gt;
          &lt;MainContent /&gt;
        &lt;/Suspense&gt;
      &lt;/ErrorBoundary&gt;
    &lt;/ErrorBoundary&gt;
  );
}</pre>` },
      { num: "99", difficulty: "hard", question: "What is the \"you might not need useEffect\" principle?", body: `<div class="simple-box"><span class="label">Simple answer 💡</span>The React team published a guide called "You Might Not Need an Effect" — because useEffect is heavily overused. Many patterns that developers put in useEffect should actually be done differently.</div><div class="example-box"><span class="label">Common "escape from useEffect" patterns 👇</span><strong>1. Transforming data for display</strong>: Calculate during render, not in effect.<br/><br/><strong>2. Handling user events</strong>: Use event handlers, not effects.<br/><br/><strong>3. Fetching data in useEffect</strong>: Use React Query, SWR, or React Server Components instead — they handle caching, deduplication, and race conditions that manual useEffect doesn't.<br/><br/><strong>4. Synchronizing prop changes to state</strong>: Use key prop to reset state, or calculate during render.<br/><br/><strong>5. Initializing something once</strong>: Use module-level initialization or lazy useState init instead.</div>` },
      { num: "100", difficulty: "hard", question: "What makes a good React architecture for large, production apps?", body: `<div class="simple-box"><span class="label">Principles for large React apps 💡</span></div><div class="example-box"><span class="label">Architecture best practices 👇</span>📁 <strong>Feature-based folder structure</strong>: Group by feature, not file type. Everything for "checkout" lives together.<br/><br/>🧩 <strong>Small, focused components</strong>: Each does one thing. Under 150 lines ideally.<br/><br/>🪝 <strong>Extract logic into custom hooks</strong>: Keep JSX clean. useFetch, useAuth, useCart — logic lives in hooks.<br/><br/>🎯 <strong>Colocate state</strong>: State as low as possible, only lift when needed.<br/><br/>🔄 <strong>Separate server state from UI state</strong>: Use React Query for API data. useState only for UI state (modal open/closed).<br/><br/>📝 <strong>TypeScript everywhere</strong>: Types as documentation. Catch bugs at compile time.<br/><br/>🧪 <strong>Test user behavior</strong>: React Testing Library for integration tests. Avoid testing implementation details.<br/><br/>🚀 <strong>Performance by default</strong>: Code split routes, lazy load heavy components, use React Query for caching, avoid unnecessary global state.</div>` },
    ]
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function ReactInterviewPage() {
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCard = useCallback((id: string) => {
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const isVisible = (q: Question) => {
    const matchDiff = activeFilter === "all" || q.difficulty === activeFilter;
    const matchSearch = !searchQuery || q.question.toLowerCase().includes(searchQuery.toLowerCase());
    return matchDiff && matchSearch;
  };

  const diffBadge = (d: string) => {
    if (d === "easy") return <span className="badge b-easy">Easy</span>;
    if (d === "medium") return <span className="badge b-medium">Medium</span>;
    return <span className="badge b-hard">Hard</span>;
  };

  return (
    <>
      <Head>
        <title>100 React Interview Questions – Complete Guide | Every Concept Covered</title>
        <meta name="description" content="Master React interviews with 100 deep-dive questions covering lifecycle, hooks, dependency array, rendering, patterns, state management & more. Written in simple English with code examples." />
        <meta name="keywords" content="React interview questions, React hooks, useEffect, useState, lifecycle, Virtual DOM, JSX, React 18, Next.js, React performance, React patterns" />
        <meta name="author" content="React Interview Guide" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="100 React Interview Questions – Complete Guide" />
        <meta property="og:description" content="Every React concept covered deeply — lifecycle, dependency array, hooks, rendering, patterns & more. Simple English throughout!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.dev/react-interview" />
        <meta property="og:image" content="https://yourportfolio.dev/og-react-interview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="100 React Interview Questions – Complete Guide" />
        <meta name="twitter:description" content="Every React concept covered deeply — lifecycle, hooks, rendering, patterns & more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourportfolio.dev/react-interview" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        :root {
          --bg: #f5f8fd;
          --card: #ffffff;
          --border: #d8e4f0;
          --text: #1e2a38;
          --muted: #7a90a8;
          --accent: #1a6fd4;
          --accent2: #27a06e;
          --easy-bg: #e8f7f0;
          --easy-text: #1a7a50;
          --medium-bg: #fff4e0;
          --medium-text: #b06010;
          --hard-bg: #fdeae4;
          --hard-text: #c0351a;
          --tag-bg: #e8f0fa;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: var(--bg); color: var(--text); font-family: 'Nunito', sans-serif; font-size: 16px; line-height: 1.7; }

        .portfolio-bar { background: #0f1e2e; padding: 10px 40px; display: flex; align-items: center; justify-content: space-between; }
        .portfolio-bar a { color: #a8d0f0; font-family: 'Nunito', sans-serif; font-size: 14px; font-weight: 700; text-decoration: none; display: flex; align-items: center; gap: 6px; transition: color 0.2s; }
        .portfolio-bar a:hover { color: #fff; }
        .portfolio-bar span { color: #7a90a8; font-size: 13px; font-family: 'Nunito', sans-serif; }

        header { background: var(--accent); padding: 52px 40px 44px; position: relative; overflow: hidden; }
        header::after { content: ''; position: absolute; bottom: -40px; left: 0; right: 0; height: 80px; background: var(--bg); border-radius: 50% 50% 0 0 / 100% 100% 0 0; }
        .header-emoji { font-size: 48px; display: block; margin-bottom: 12px; }
        header h1 { font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 900; color: #fff; line-height: 1.15; margin-bottom: 10px; }
        header p { color: rgba(255,255,255,0.85); font-size: 16px; font-weight: 600; max-width: 560px; }
        .header-stats { display: flex; gap: 20px; margin-top: 24px; flex-wrap: wrap; }
        .hstat { background: rgba(255,255,255,0.2); border-radius: 12px; padding: 8px 18px; color: #fff; font-weight: 700; font-size: 14px; }

        .controls { position: sticky; top: 0; z-index: 100; background: var(--bg); border-bottom: 2px solid var(--border); padding: 14px 40px; display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
        .pill { padding: 7px 18px; border-radius: 999px; border: 2px solid var(--border); background: transparent; color: var(--muted); font-family: 'Nunito', sans-serif; font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.15s; }
        .pill:hover { border-color: var(--accent); color: var(--accent); }
        .pill.active { background: var(--accent); color: #fff; border-color: var(--accent); }
        .pill.easy.active { background: var(--easy-text); border-color: var(--easy-text); }
        .pill.medium.active { background: var(--medium-text); border-color: var(--medium-text); }
        .pill.hard.active { background: var(--hard-text); border-color: var(--hard-text); }
        .search-box { margin-left: auto; position: relative; }
        .search-box input { background: var(--card); border: 2px solid var(--border); border-radius: 999px; padding: 8px 16px 8px 38px; font-family: 'Nunito', sans-serif; font-size: 14px; font-weight: 600; color: var(--text); width: 210px; outline: none; transition: border-color 0.2s; }
        .search-box input:focus { border-color: var(--accent); }
        .search-box::before { content: '🔍'; position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 14px; }

        main { max-width: 860px; margin: 0 auto; padding: 40px 32px 80px; }

        .section-head { display: flex; align-items: center; gap: 12px; margin: 40px 0 18px; }
        .section-icon { font-size: 28px; width: 48px; height: 48px; display: grid; place-items: center; background: var(--tag-bg); border-radius: 12px; flex-shrink: 0; }
        .section-title { font-size: 1.25rem; font-weight: 900; color: var(--text); }
        .section-line { flex: 1; height: 2px; background: var(--border); border-radius: 2px; }

        .q-card { background: var(--card); border: 2px solid var(--border); border-radius: 16px; margin-bottom: 10px; overflow: hidden; transition: border-color 0.2s, box-shadow 0.2s; cursor: pointer; }
        .q-card:hover { border-color: #b8cce0; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .q-card.open { border-color: var(--accent); box-shadow: 0 4px 20px rgba(26,111,212,0.12); }

        .q-top { display: flex; align-items: flex-start; gap: 12px; padding: 16px 20px; }
        .q-num { font-family: 'Fira Code', monospace; font-size: 12px; color: var(--muted); min-width: 30px; padding-top: 2px; }
        .q-question { flex: 1; font-size: 15px; font-weight: 700; color: var(--text); line-height: 1.45; }
        .q-card.open .q-question { color: var(--accent); }
        .badge { font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 999px; flex-shrink: 0; margin-top: 1px; }
        .b-easy { background: var(--easy-bg); color: var(--easy-text); }
        .b-medium { background: var(--medium-bg); color: var(--medium-text); }
        .b-hard { background: var(--hard-bg); color: var(--hard-text); }
        .chevron { color: var(--muted); font-size: 18px; flex-shrink: 0; transition: transform 0.25s; user-select: none; }
        .q-card.open .chevron { transform: rotate(180deg); color: var(--accent); }

        .q-body { padding: 16px 20px 18px 62px; border-top: 2px solid var(--border); }
        .q-body p { font-size: 14.5px; color: #3a5070; margin-bottom: 10px; }
        .q-body p:last-child { margin-bottom: 0; }

        .simple-box { background: #f0f5ff; border-left: 4px solid var(--accent); border-radius: 0 10px 10px 0; padding: 12px 16px; margin: 10px 0; font-size: 14px; color: #1a3060; font-weight: 600; }
        .simple-box .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: var(--accent); font-weight: 800; margin-bottom: 4px; display: block; }
        .example-box { background: #edfaf4; border-left: 4px solid var(--accent2); border-radius: 0 10px 10px 0; padding: 12px 16px; margin: 10px 0; font-size: 14px; color: #0e3828; font-weight: 600; }
        .example-box .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: var(--accent2); font-weight: 800; margin-bottom: 4px; display: block; }

        code { font-family: 'Fira Code', monospace; background: #deeaf8; border-radius: 5px; padding: 1px 7px; font-size: 13px; color: #0f4a9c; }
        pre { background: #0f1e2e; border-radius: 10px; padding: 14px 16px; overflow-x: auto; margin: 12px 0; font-family: 'Fira Code', monospace; font-size: 12.5px; color: #a8d0f0; line-height: 1.7; }

        .q-card.hidden { display: none; }
        footer { text-align: center; padding: 32px; color: var(--muted); font-size: 13px; font-weight: 600; border-top: 2px solid var(--border); }

        @media (max-width: 600px) {
          header, .controls, main { padding-left: 16px; padding-right: 16px; }
          .search-box { margin-left: 0; width: 100%; }
          .search-box input { width: 100%; }
          .q-body { padding-left: 20px; }
          .portfolio-bar { padding: 10px 16px; }
        }
      `}</style>

      {/* Back to Portfolio Bar */}
      <div className="portfolio-bar">
        <a href="/">
          ← Back to Portfolio
        </a>
        <span>React Interview Prep Guide</span>
      </div>

      {/* Header */}
      <header>
        <span className="header-emoji">⚛️</span>
        <h1>100 React Interview Questions</h1>
        <p>Every concept covered deeply — lifecycle, dependency array, hooks, rendering, patterns & more. Simple English throughout!</p>
        <div className="header-stats">
          <span className="hstat">100 Questions</span>
          <span className="hstat">12 Deep Topics</span>
          <span className="hstat">Every Concept ✓</span>
          <span className="hstat">Simple English ✓</span>
        </div>
      </header>

      {/* Filter Controls */}
      <div className="controls">
        {["all", "easy", "medium", "hard"].map((f) => (
          <button
            key={f}
            className={`pill ${f !== "all" ? f : ""} ${activeFilter === f ? "active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f === "all" ? "All" : f === "easy" ? "🟢 Easy" : f === "medium" ? "🟡 Medium" : "🔴 Hard"}
          </button>
        ))}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search questions…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Main Content */}
      <main>
        {SECTIONS.map((section) => {
          const visibleQuestions = section.questions.filter(isVisible);
          if (visibleQuestions.length === 0) return null;
          return (
            <div key={section.title}>
              <div className="section-head">
                <span className="section-icon">{section.icon}</span>
                <h2 className="section-title">{section.title}</h2>
                <div className="section-line" />
              </div>
              {section.questions.map((q) => {
                const id = q.num;
                const visible = isVisible(q);
                const open = !!openCards[id];
                return (
                  <div
                    key={id}
                    className={`q-card${open ? " open" : ""}${!visible ? " hidden" : ""}`}
                  >
                    <div className="q-top" onClick={() => toggleCard(id)}>
                      <span className="q-num">{q.num}</span>
                      <span className="q-question">{q.question}</span>
                      {diffBadge(q.difficulty)}
                      <span className="chevron">▾</span>
                    </div>
                    {open && (
                      <div
                        className="q-body"
                        dangerouslySetInnerHTML={{ __html: q.body }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </main>

      {/* Footer */}
      <footer>
        <p>🎉 All 100 React concepts covered deeply! Lifecycle, dependency arrays, hooks, rendering, patterns & everything in between. Go ace that interview! ⚛️</p>
      </footer>
    </>
  );
}
