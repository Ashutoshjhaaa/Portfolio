import { Question } from './types';

export const CSS_QUESTIONS: Question[] = [
  {
    "id": "css-01",
    "number": "01",
    "question": "What is CSS and why do we use it?",
    "difficulty": "easy",
    "section": "CSS Basics",
    "answer": {
      "simple": "CSS stands for <strong>Cascading Style Sheets</strong>. It controls how HTML elements look — colors, fonts, sizes, spacing, and layout. Without CSS, every webpage would be plain black text on a white background with no visual design at all.",
      "example": "HTML is the skeleton of a house (structure). CSS is the paint, wallpaper, furniture, and lighting (appearance). You need both to make a beautiful, livable home. HTML says \"there is a paragraph here.\" CSS says \"that paragraph is navy blue, 16px, and has 20px of space around it.\"",
      "code": "/* CSS targets HTML elements and applies styles */\np {\n  color: navy;\n  font-size: 16px;\n  font-family: Georgia, serif;\n  line-height: 1.6;\n}"
    }
  },
  {
    "id": "css-02",
    "number": "02",
    "question": "What does \"Cascading\" mean in CSS?",
    "difficulty": "easy",
    "section": "CSS Basics",
    "answer": {
      "simple": "Cascading means styles flow downward like a waterfall. When two rules target the same element, CSS has three rules to decide who wins: <strong>1) Importance</strong> (!important beats all), <strong>2) Specificity</strong> (more specific = wins), <strong>3) Order</strong> (later in file = wins if equal).",
      "example": "If two rules have the same specificity, the one written <strong>later</strong> in the CSS file wins. Think of it like layers of paint — the last coat you apply is what you see.",
      "code": "p { color: blue; }   /* first rule */\np { color: red; }    /* second rule — wins (written later) */"
    }
  },
  {
    "id": "css-03",
    "number": "03",
    "question": "What are the 3 ways to add CSS to HTML?",
    "difficulty": "easy",
    "section": "CSS Basics",
    "answer": {
      "simple": "<strong>1. Inline</strong> — style attribute directly on an element. <strong>2. Internal</strong> — a &lt;style&gt; tag inside &lt;head&gt;. <strong>3. External</strong> — a separate .css file linked with &lt;link&gt;. External is best practice for real projects.",
      "code": "<!-- 1. Inline (avoid — hard to maintain, very high specificity) -->\n<p style=\"color: red; font-size: 16px;\">Inline text</p>\n\n<!-- 2. Internal (inside <head>, good for single pages) -->\n<style>\n  p { color: blue; }\n</style>\n\n<!-- 3. External (BEST — one file styles whole website) -->\n<link rel=\"stylesheet\" href=\"styles.css\">"
    }
  },
  {
    "id": "css-04",
    "number": "04",
    "question": "What is a CSS rule and what are its parts?",
    "difficulty": "easy",
    "section": "CSS Basics",
    "answer": {
      "simple": "A CSS rule has two parts: a <strong>selector</strong> (which element to target) and a <strong>declaration block</strong> (what styles to apply). Inside the block, each style is a property-value pair separated by a colon, ending with a semicolon.",
      "code": "/* Full anatomy of a CSS rule:\n\n   selector    {    property  :  value   ;  }\n      ↓              ↓            ↓\n      p        {    color     :  red     ;  }\n                    font-size :  16px    ;\n                    margin    :  10px    ;\n               }\n*/\np {\n  color: red;        /* declaration 1 */\n  font-size: 16px;   /* declaration 2 */\n  margin: 10px;      /* declaration 3 */\n}"
    }
  },
  {
    "id": "css-05",
    "number": "05",
    "question": "What is a CSS comment and how do you write one?",
    "difficulty": "easy",
    "section": "CSS Basics",
    "answer": {
      "simple": "A CSS comment is text that the browser completely ignores. It's only for humans — to explain what the code does. CSS comments start with <code>/*</code> and end with <code>*/</code>. They can be one line or span multiple lines.",
      "code": "/* This is a single-line CSS comment */\n\n/*\n  This is a\n  multi-line comment\n  that spans several lines\n*/\n\n.button {\n  color: white;         /* text color */\n  background: blue;     /* background color */\n  /* padding: 10px; */  /* commented out — browser ignores this line */\n}"
    }
  },
  {
    "id": "css-06",
    "number": "06",
    "question": "What is the difference between a class and an ID in CSS?",
    "difficulty": "easy",
    "section": "CSS Basics",
    "answer": {
      "simple": "A <strong>class</strong> (.) can be used on many elements on the same page. An <strong>ID</strong> (#) should be unique — used only once per page. Classes are for reusable styles; IDs are for one specific element. IDs also have higher specificity than classes.",
      "example": "In real projects, <strong>prefer classes over IDs</strong> for styling. IDs are harder to override (very high specificity) and cause specificity problems. Reserve IDs for JavaScript targeting and anchor links.",
      "code": "/* Class — reusable on many elements */\n.highlight { background: yellow; }\n\n/* ID — unique, only one element per page */\n#main-title { font-size: 40px; font-weight: bold; }\n\n/* HTML usage */\n<p class=\"highlight\">Yellow background</p>\n<p class=\"highlight\">Also yellow background</p>  ← reused!\n<h1 id=\"main-title\">The Big Title</h1>  ← unique"
    }
  },
  {
    "id": "css-07",
    "number": "07",
    "question": "What are CSS units? What is the difference between px, em, rem, %, vw, vh?",
    "difficulty": "easy",
    "section": "CSS Basics",
    "answer": {
      "simple": "<strong>px</strong> = fixed pixels. <strong>em</strong> = relative to parent font-size (compounds with nesting). <strong>rem</strong> = relative to root (html) font-size — always predictable. <strong>%</strong> = percentage of parent. <strong>vw/vh</strong> = 1% of viewport width/height.",
      "code": "html { font-size: 16px; }   /* root size */\n.parent { font-size: 20px; }\n\n.child-px  { font-size: 24px; }    /* always 24px, no matter what */\n.child-em  { font-size: 1.5em; }   /* 1.5 × 20px (parent) = 30px */\n.child-rem { font-size: 1.5rem; }  /* 1.5 × 16px (root)   = 24px */\n.child-pct { width: 50%; }         /* 50% of parent's width */\n.hero      { height: 100vh; }      /* full viewport height */\n.full      { width: 100vw; }       /* full viewport width */"
    }
  },
  {
    "id": "css-08",
    "number": "08",
    "question": "What are CSS colors? How many ways can you write a color?",
    "difficulty": "easy",
    "section": "CSS Basics",
    "answer": {
      "simple": "CSS has 5 main ways to write colors: named keywords, HEX codes, RGB, RGBA (with transparency), and HSL. They all work — it's just different formats for the same thing.",
      "code": "/* 5 ways to write the same orange color */\ncolor: orange;                    /* Named keyword */\ncolor: #ff8800;                   /* HEX (6-digit) */\ncolor: #f80;                      /* HEX shorthand (3-digit) */\ncolor: rgb(255, 136, 0);          /* RGB values */\ncolor: rgba(255, 136, 0, 0.5);    /* RGBA — 0.5 = 50% transparent */\ncolor: hsl(32, 100%, 50%);        /* Hue, Saturation, Lightness */\ncolor: hsla(32, 100%, 50%, 0.5);  /* HSL with transparency */"
    }
  },
  {
    "id": "css-09",
    "number": "09",
    "question": "What are the basic CSS selectors?",
    "difficulty": "easy",
    "section": "Selectors (Deep Dive)",
    "answer": {
      "simple": "There are 5 basic selectors: <strong>Universal</strong> (*), <strong>Element/Type</strong> (p), <strong>Class</strong> (.btn), <strong>ID</strong> (#header), and <strong>Attribute</strong> ([type=\"text\"]). They tell CSS which HTML element(s) to style.",
      "code": "*        { box-sizing: border-box; }   /* universal — selects everything */\np        { color: navy; }              /* element — selects all <p> tags */\n.btn     { background: blue; }        /* class — selects class=\"btn\" */\n#logo    { width: 200px; }            /* id — selects id=\"logo\" */\n[type=\"text\"] { border: 1px solid; }  /* attribute — selects by attribute */"
    }
  },
  {
    "id": "css-10",
    "number": "10",
    "question": "What are combinator selectors?",
    "difficulty": "medium",
    "section": "Selectors (Deep Dive)",
    "answer": {
      "simple": "Combinators define the relationship between selectors. There are 4: <strong>Descendant</strong> (space), <strong>Child</strong> (&gt;), <strong>Adjacent sibling</strong> (+), and <strong>General sibling</strong> (~).",
      "code": "/* Descendant — p ANYWHERE inside .container */\n.container p { color: blue; }\n\n/* Child — only p that are DIRECT children of .container */\n.container > p { color: red; }\n\n/* Adjacent sibling — only the FIRST p right after h2 */\nh2 + p { font-size: 18px; }\n\n/* General sibling — ALL p elements that follow h2 */\nh2 ~ p { color: gray; }"
    }
  },
  {
    "id": "css-11",
    "number": "11",
    "question": "What are pseudo-classes in CSS?",
    "difficulty": "medium",
    "section": "Selectors (Deep Dive)",
    "answer": {
      "simple": "Pseudo-classes select elements based on their <strong>state</strong> or <strong>position</strong>. They always start with a single colon (:). Common ones: <code>:hover</code>, <code>:focus</code>, <code>:active</code>, <code>:first-child</code>, <code>:last-child</code>, <code>:nth-child()</code>, <code>:not()</code>.",
      "code": "a:hover         { color: orange; }    /* mouse is over the link */\ninput:focus     { border: 2px solid blue; } /* input is selected */\nbutton:active   { transform: scale(0.98); } /* being clicked right now */\n\nli:first-child  { font-weight: bold; }  /* first item in a list */\nli:last-child   { color: gray; }        /* last item */\nli:nth-child(2) { background: #f5f5f5; } /* second item */\nli:nth-child(odd) { background: #eee; } /* every odd item */\n\np:not(.special) { color: gray; }  /* every p EXCEPT .special */"
    }
  },
  {
    "id": "css-12",
    "number": "12",
    "question": "What are pseudo-elements in CSS?",
    "difficulty": "medium",
    "section": "Selectors (Deep Dive)",
    "answer": {
      "simple": "Pseudo-elements style a specific <strong>part</strong> of an element. They use double colons (::). The most used are <code>::before</code> and <code>::after</code> which can insert decorative content without touching the HTML. Others: <code>::first-letter</code>, <code>::first-line</code>, <code>::placeholder</code>.",
      "code": ".required::after {\n  content: ' *';     /* inserted text — no HTML change needed */\n  color: red;\n}\n\np::first-letter {\n  font-size: 3em;    /* drop cap like in a book */\n  float: left;\n  margin-right: 4px;\n}\n\ninput::placeholder {\n  color: #aaa;       /* style the placeholder text */\n  font-style: italic;\n}"
    }
  },
  {
    "id": "css-13",
    "number": "13",
    "question": "What is CSS specificity and how is it calculated?",
    "difficulty": "hard",
    "section": "Selectors (Deep Dive)",
    "answer": {
      "simple": "Specificity is a scoring system that decides which CSS rule wins when two rules target the same element. The score is written as (A, B, C) where A = ID selectors, B = class/attribute/pseudo-class selectors, C = element/pseudo-element selectors. Higher total score wins.",
      "example": "Element tags → Classes, attributes, pseudo-classes → IDs → Inline styles → !important. When specificity is equal, the rule written later in the file wins.",
      "code": "/* Specificity scores:              A  B  C */\np                   { }   /* →    0, 0, 1  */\n.text               { }   /* →    0, 1, 0  */  beats p\n#special            { }   /* →    1, 0, 0  */  beats .text\n.nav a:hover        { }   /* →    0, 2, 1  */\n#nav .link a        { }   /* →    1, 1, 1  */\nstyle=\"color:red\"   { }   /* →  1000       */  inline style (highest)\n!important          { }   /* →  OVERRIDE   */  nuclear option"
    }
  },
  {
    "id": "css-14",
    "number": "14",
    "question": "What is the !important rule and when should you use it?",
    "difficulty": "medium",
    "section": "Selectors (Deep Dive)",
    "answer": {
      "simple": "<code>!important</code> forces a CSS value to override all other rules — even inline styles — regardless of specificity. It's the \"nuclear option\" of CSS. Avoid it in your own code; it makes debugging a nightmare.",
      "code": "/* Forces red color — overrides everything */\n.button { color: red !important; }\n\n/* Even this inline style loses! */\n<button style=\"color: blue;\">  /* loses to !important */\n\n/* Good use cases (rare):\n   - Overriding a third-party library you can't edit\n   - Utility classes that MUST always apply (like .hidden)\n   - Never use in your own component styles */\n.hidden { display: none !important; } /* utility — acceptable */"
    }
  },
  {
    "id": "css-15",
    "number": "15",
    "question": "What are attribute selectors in CSS?",
    "difficulty": "medium",
    "section": "Selectors (Deep Dive)",
    "answer": {
      "simple": "Attribute selectors target elements based on their HTML attributes and values. Very powerful for styling form inputs, links, or any element with specific attributes.",
      "code": "[type=\"text\"]     { border: 1px solid gray; }   /* exact match */\n[href^=\"https\"]   { color: green; }             /* starts with */\n[href$=\".pdf\"]    { color: red; }               /* ends with */\n[class*=\"btn\"]    { cursor: pointer; }          /* contains */\n[lang|=\"en\"]      { font-family: Georgia; }     /* en or en-US etc. */\n[disabled]        { opacity: 0.5; }             /* attribute exists */\n\n/* Practical example: all external links */\na[href^=\"http\"] { /* ...styles... */ }\n/* All PDF links */\na[href$=\".pdf\"]::after { content: \" (PDF)\"; }"
    }
  },
  {
    "id": "css-16",
    "number": "16",
    "question": "What are the :is(), :where(), and :has() selectors?",
    "difficulty": "hard",
    "section": "Selectors (Deep Dive)",
    "answer": {
      "simple": "<code>:is()</code> groups selectors — matches any in the list, takes the highest specificity. <code>:where()</code> is identical but has zero specificity (great for resets). <code>:has()</code> is the \"parent selector\" — selects an element if it contains something specific.",
      "code": "/* :is() — shorter way to write multiple selectors */\n:is(h1, h2, h3, h4) { line-height: 1.2; }\n/* Same as: h1, h2, h3, h4 { line-height: 1.2; } */\n\n/* :where() — same but ZERO specificity, easy to override */\n:where(.card, .panel) { padding: 16px; }\n\n/* :has() — the \"parent selector\" — previously impossible in CSS! */\n/* Style a form group that contains an invalid input */\n.form-group:has(input:invalid) { border-color: red; }\n\n/* Style a card that HAS an image */\n.card:has(img) { padding: 0; }\n\n/* Style a list item that HAS a nested ul */\nli:has(ul) > a::after { content: ' ▼'; }"
    }
  },
  {
    "id": "css-17",
    "number": "17",
    "question": "What is the CSS box model?",
    "difficulty": "easy",
    "section": "The Box Model",
    "answer": {
      "simple": "Every HTML element is a rectangle with 4 layers. From inside out: <strong>Content</strong> (text/image), <strong>Padding</strong> (space inside border), <strong>Border</strong> (the line around it), <strong>Margin</strong> (space outside). Understanding this is the #1 key to CSS layout.",
      "code": "div {\n  width: 200px;              /* Content width */\n  padding: 20px;             /* Space inside border */\n  border: 3px solid black;   /* The visible outline */\n  margin: 30px;              /* Space outside, from neighbors */\n}\n/* Default total width = 200 + 20+20 + 3+3 = 246px\n   (plus 30px margin of breathing room on each side) */"
    }
  },
  {
    "id": "css-18",
    "number": "18",
    "question": "What is the difference between margin and padding?",
    "difficulty": "easy",
    "section": "The Box Model",
    "answer": {
      "simple": "<strong>Padding</strong> is space INSIDE the element — between content and border. It gets the background color. <strong>Margin</strong> is space OUTSIDE the element — pushing it away from neighbors. Margin is always transparent.",
      "code": "/* Padding — inside, gets background color */\n.box {\n  padding: 20px;\n  background: lightblue; /* padding area shows this color */\n}\n\n/* Margin — outside, always transparent */\n.box {\n  margin: 30px auto; /* 30px top/bottom, centered left/right */\n}\n\n/* Shorthand: top | right | bottom | left (clockwise) */\npadding: 10px 20px 10px 20px;\n/* Or: top/bottom | left/right */\npadding: 10px 20px;"
    }
  },
  {
    "id": "css-19",
    "number": "19",
    "question": "What does box-sizing: border-box do and why is it important?",
    "difficulty": "medium",
    "section": "The Box Model",
    "answer": {
      "simple": "By default, <code>width</code> applies only to the content area. With <code>border-box</code>, the width you set <strong>includes padding and border</strong>, so the element is exactly the size you specified. This is much more intuitive and is used in virtually every modern project.",
      "code": "/* Default (content-box) — CONFUSING */\n.box {\n  width: 200px;   /* actual width = 200 + 20+20 + 2+2 = 244px! */\n  padding: 20px;\n  border: 2px solid black;\n}\n\n/* border-box — PREDICTABLE */\n.box {\n  box-sizing: border-box;\n  width: 200px;   /* actual width = exactly 200px */\n  padding: 20px;  /* padding eats into the 200px */\n  border: 2px solid black;\n}\n\n/* Apply globally — do this in EVERY project */\n*, *::before, *::after { box-sizing: border-box; }"
    }
  },
  {
    "id": "css-20",
    "number": "20",
    "question": "What is margin collapsing?",
    "difficulty": "medium",
    "section": "The Box Model",
    "answer": {
      "simple": "When two vertical margins (top/bottom) of block elements touch, they <strong>merge into one</strong> — the larger of the two wins. This is called margin collapsing. It only happens with vertical margins, never horizontal ones.",
      "code": "/* These two elements have touching vertical margins */\n.first  { margin-bottom: 40px; }\n.second { margin-top: 20px; }\n\n/* You'd expect 60px of space between them.\n   But due to collapsing: only 40px (the larger one)!\n\n   WHY? It was designed for document-like text flow —\n   headings and paragraphs don't need double spacing.\n\n   It does NOT happen:\n   - With horizontal margins\n   - When elements have padding or border between them\n   - Inside flex or grid containers\n   - When overflow is not visible */"
    }
  },
  {
    "id": "css-21",
    "number": "21",
    "question": "What is the display property and what are its values?",
    "difficulty": "easy",
    "section": "The Box Model",
    "answer": {
      "simple": "The <code>display</code> property controls how an element participates in the layout. It's one of the most important CSS properties. Main values: <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>flex</code>, <code>grid</code>, <code>none</code>.",
      "example": "By default: <code>div, p, h1-h6, section, article</code> = block. <code>span, a, strong, em, img</code> = inline. You can override any element's display type with the display property.",
      "code": "display: block;         /* full width, starts on new line */\ndisplay: inline;        /* only as wide as content, stays in text flow */\ndisplay: inline-block;  /* inline but accepts width/height */\ndisplay: flex;          /* flexbox container */\ndisplay: grid;          /* grid container */\ndisplay: none;          /* remove completely — takes no space */\ndisplay: table;         /* behave like a table */\ndisplay: contents;      /* element itself renders nothing, children do */"
    }
  },
  {
    "id": "css-22",
    "number": "22",
    "question": "What is display:none vs visibility:hidden?",
    "difficulty": "easy",
    "section": "The Box Model",
    "answer": {
      "simple": "<code>display: none</code> removes the element completely — it takes zero space, like it was never there. <code>visibility: hidden</code> makes it invisible but it still occupies space in the layout — like an invisible ghost.",
      "code": "/* display: none — element is completely gone */\n.removed { display: none; }\n/* The space collapses, other elements fill the gap */\n\n/* visibility: hidden — invisible but space reserved */\n.invisible { visibility: hidden; }\n/* The space stays, like a blank area */\n\n/* Also consider: */\n.transparent { opacity: 0; }\n/* Element invisible but: still takes space AND still clickable! */"
    }
  },
  {
    "id": "css-23",
    "number": "23",
    "question": "What is overflow in CSS?",
    "difficulty": "medium",
    "section": "The Box Model",
    "answer": {
      "simple": "<code>overflow</code> controls what happens when content is bigger than its container. Values: <code>visible</code> (content spills out — default), <code>hidden</code> (clipped), <code>scroll</code> (always shows scrollbar), <code>auto</code> (scrollbar only when needed).",
      "code": ".box { width: 200px; height: 100px; }\n\n.box-1 { overflow: visible; }   /* content spills out of box */\n.box-2 { overflow: hidden; }    /* content clipped at box edge */\n.box-3 { overflow: scroll; }    /* always shows scrollbars */\n.box-4 { overflow: auto; }      /* scrollbar only if content overflows */\n\n/* Control each axis separately: */\n.box-5 {\n  overflow-x: hidden;   /* no horizontal scroll */\n  overflow-y: auto;     /* vertical scroll when needed */\n}"
    }
  },
  {
    "id": "css-24",
    "number": "24",
    "question": "What is the float property and why is it less used today?",
    "difficulty": "medium",
    "section": "The Box Model",
    "answer": {
      "simple": "<code>float</code> moves an element to the left or right, letting text wrap around it. It was heavily used for page layouts before Flexbox and Grid existed. Today it's mostly used for wrapping text around images — not for layouts.",
      "code": "/* Classic image + text wrap pattern */\nimg {\n  float: left;\n  margin: 0 16px 8px 0;\n}\n\n/* Problem: floated elements are removed from normal flow\n   so the parent container collapses!\n\n   Old fix — clearfix hack: */\n.clearfix::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n\n/* Modern answer: use Flexbox or Grid instead of float for layouts */"
    }
  },
  {
    "id": "css-25",
    "number": "25",
    "question": "What are the 5 CSS position values and how do they work?",
    "difficulty": "easy",
    "section": "Positioning",
    "answer": {
      "simple": "<strong>static</strong> (default, normal flow), <strong>relative</strong> (offset from its normal spot), <strong>absolute</strong> (anchors to nearest positioned ancestor), <strong>fixed</strong> (anchors to viewport, stays on scroll), <strong>sticky</strong> (normal until threshold, then sticks).",
      "code": "position: static;   /* default — top/left/right/bottom have no effect */\n\nposition: relative; /* moves FROM where it normally sits */\ntop: 10px;          /* space still reserved at original position */\n\nposition: absolute; /* removed from flow, anchors to positioned parent */\ntop: 0; right: 0;   /* top-right of nearest non-static ancestor */\n\nposition: fixed;    /* stays in screen corner even when scrolling */\nbottom: 20px; right: 20px; /* e.g. chat widget */\n\nposition: sticky;   /* scrolls with page until top: 0, then sticks */\ntop: 0;             /* great for headers */"
    }
  },
  {
    "id": "css-26",
    "number": "26",
    "question": "What is z-index and how does it work?",
    "difficulty": "medium",
    "section": "Positioning",
    "answer": {
      "simple": "<code>z-index</code> controls the stacking order when elements overlap — higher value = appears in front (closer to viewer). It <strong>only works on positioned elements</strong> (anything that's not <code>position: static</code>).",
      "code": "/* z-index only works if position is set! */\n.card   { position: relative; z-index: 1; }\n.modal  { position: fixed;    z-index: 100; }  /* appears above .card */\n.toast  { position: fixed;    z-index: 999; }  /* appears above .modal */\n\n/* Common z-index scale to follow:\n   Base elements:  1 - 10\n   Dropdowns:      100\n   Sticky nav:     200\n   Overlays:       500\n   Modals:         1000\n   Tooltips:       2000\n   Toast/alerts:   3000 */"
    }
  },
  {
    "id": "css-27",
    "number": "27",
    "question": "How do you center an element horizontally and vertically?",
    "difficulty": "medium",
    "section": "Positioning",
    "answer": {
      "simple": "The modern, easiest way is Flexbox or Grid. The classic way uses absolute positioning with transform. Each method has its use case.",
      "code": "/* Method 1: Flexbox (most common — recommended) */\n.parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Method 2: Grid (cleanest one-liner) */\n.parent {\n  display: grid;\n  place-items: center;  /* shorthand for align+justify */\n}\n\n/* Method 3: Absolute + transform (old way, still useful) */\n.child {\n  position: absolute;\n  top: 50%;  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/* Method 4: Horizontal only, block element */\n.child { width: 500px; margin: 0 auto; }"
    }
  },
  {
    "id": "css-28",
    "number": "28",
    "question": "What is the difference between position:fixed and position:sticky?",
    "difficulty": "medium",
    "section": "Positioning",
    "answer": {
      "simple": "<strong>Fixed</strong>: always stays in the same spot on the screen — completely removed from normal flow. <strong>Sticky</strong>: scrolls normally with the page, but once it reaches your specified threshold (like <code>top: 0</code>), it \"sticks\" there. Still part of normal flow.",
      "code": "/* Fixed — ALWAYS at top of viewport */\nnav {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  /* Content scrolls UNDER this nav. The nav never moves. */\n}\n\n/* Sticky — scrolls until threshold, then sticks */\n.section-heading {\n  position: sticky;\n  top: 70px; /* sticks 70px from the top (below a fixed nav) */\n  background: white;\n  /* The heading scrolls normally until it hits 70px from top */\n}"
    }
  },
  {
    "id": "css-29",
    "number": "29",
    "question": "What is Flexbox and how do you enable it?",
    "difficulty": "easy",
    "section": "Flexbox (Deep Dive)",
    "answer": {
      "simple": "Flexbox is a one-dimensional layout system that makes it easy to arrange items in a row or column with full control over alignment, spacing, and order. Enable it by adding <code>display: flex</code> to the parent container.",
      "code": "/* Enable flexbox on parent */\n.container {\n  display: flex;     /* that's all you need! */\n}\n/* All direct children become flex items automatically.\n   Default behavior: items line up in a horizontal row,\n   stretch to fill the container's height. */\n\n/* Key concept:\n   The CONTAINER controls layout (justify, align, wrap)\n   The ITEMS control their own size (flex-grow, flex-basis) */"
    }
  },
  {
    "id": "css-30",
    "number": "30",
    "question": "What is the flex-direction property?",
    "difficulty": "easy",
    "section": "Flexbox (Deep Dive)",
    "answer": {
      "simple": "<code>flex-direction</code> sets the direction of the main axis — how flex items are placed. Default is <code>row</code> (horizontal). Use <code>column</code> for vertical. The -reverse versions flip the order.",
      "code": "flex-direction: row;            /* → left to right (default) */\nflex-direction: row-reverse;    /* ← right to left */\nflex-direction: column;         /* ↓ top to bottom */\nflex-direction: column-reverse; /* ↑ bottom to top */\n\n/* This also determines what justify-content and align-items do:\n   In 'row' mode:    justify = horizontal, align = vertical\n   In 'column' mode: justify = vertical,   align = horizontal */"
    }
  },
  {
    "id": "css-31",
    "number": "31",
    "question": "What does justify-content do in Flexbox?",
    "difficulty": "easy",
    "section": "Flexbox (Deep Dive)",
    "answer": {
      "simple": "<code>justify-content</code> distributes flex items along the <strong>main axis</strong> (horizontal in row mode). It controls how leftover space is distributed.",
      "code": "justify-content: flex-start;    /* items packed to start (default) */\njustify-content: flex-end;      /* items packed to end */\njustify-content: center;        /* items centered */\njustify-content: space-between; /* equal gaps BETWEEN items (no edge gaps) */\njustify-content: space-around;  /* equal gaps around each item */\njustify-content: space-evenly;  /* perfectly equal space everywhere */"
    }
  },
  {
    "id": "css-32",
    "number": "32",
    "question": "What does align-items do in Flexbox?",
    "difficulty": "easy",
    "section": "Flexbox (Deep Dive)",
    "answer": {
      "simple": "<code>align-items</code> aligns flex items along the <strong>cross axis</strong> (vertical in row mode). While justify-content handles the main direction, align-items handles the perpendicular direction.",
      "code": "align-items: stretch;     /* default — items stretch to fill height */\nalign-items: center;      /* vertically centered in row mode */\nalign-items: flex-start;  /* aligned to top in row mode */\nalign-items: flex-end;    /* aligned to bottom in row mode */\nalign-items: baseline;    /* aligned by text baseline */"
    }
  },
  {
    "id": "css-33",
    "number": "33",
    "question": "What is flex-wrap and why is it important for responsive design?",
    "difficulty": "medium",
    "section": "Flexbox (Deep Dive)",
    "answer": {
      "simple": "By default, flex items all try to stay on one line — squishing themselves to fit. <code>flex-wrap: wrap</code> allows items to wrap onto the next line when there's not enough room. Essential for responsive layouts.",
      "code": ".container {\n  display: flex;\n  flex-wrap: wrap;     /* allow wrapping */\n  gap: 16px;           /* space between items */\n}\n\n.card {\n  flex: 1 1 250px;     /* grow/shrink freely, min 250px wide */\n  /* When screen is too narrow for 250px, cards wrap to next line */\n}\n\n/* flex-wrap values:\n   nowrap       — default, everything on one line (may overflow!)\n   wrap         — items wrap to next line\n   wrap-reverse — items wrap upward instead of downward */"
    }
  },
  {
    "id": "css-34",
    "number": "34",
    "question": "What is the flex shorthand? What are flex-grow, flex-shrink, flex-basis?",
    "difficulty": "medium",
    "section": "Flexbox (Deep Dive)",
    "answer": {
      "simple": "<code>flex</code> is shorthand for three properties: <code>flex-grow</code> (how much to expand), <code>flex-shrink</code> (how much to compress), <code>flex-basis</code> (the starting size). <code>flex: 1</code> means \"grow and shrink freely from size 0\".",
      "code": "/* flex: grow shrink basis */\nflex: 1;           /* shorthand for: flex: 1 1 0% */\nflex: 0 0 250px;   /* don't grow, don't shrink, always 250px */\nflex: 2;           /* grows twice as fast as flex: 1 siblings */\n\n/* Individual properties: */\nflex-grow: 1;      /* take extra space proportionally */\nflex-shrink: 0;    /* don't shrink (even if space is tight) */\nflex-basis: 200px; /* start at 200px, then grow/shrink from there */\n\n/* Practical sidebar + main layout: */\n.sidebar { flex: 0 0 260px; }     /* always exactly 260px */\n.main    { flex: 1; }             /* takes all remaining space */"
    }
  },
  {
    "id": "css-35",
    "number": "35",
    "question": "What is align-self and order in Flexbox?",
    "difficulty": "medium",
    "section": "Flexbox (Deep Dive)",
    "answer": {
      "simple": "<code>align-self</code> overrides the parent's align-items for a single flex item — lets one item be positioned differently. <code>order</code> changes the visual order of items without changing the HTML order.",
      "code": "/* align-self — overrides align-items for one item */\n.container { display: flex; align-items: center; }\n.special   { align-self: flex-end; } /* THIS item goes to bottom */\n\n/* order — default is 0, lower = earlier, higher = later */\n.item-a { order: 2; }   /* appears third */\n.item-b { order: -1; }  /* appears first! */\n.item-c { order: 1; }   /* appears second */\n\n/* Useful for: responsive reordering (show hero before nav on mobile),\n   pinning one item to start/end of list */"
    }
  },
  {
    "id": "css-36",
    "number": "36",
    "question": "What is the gap property in Flexbox and Grid?",
    "difficulty": "medium",
    "section": "Flexbox (Deep Dive)",
    "answer": {
      "simple": "<code>gap</code> sets the space between flex or grid items. It's cleaner than using margins because it only adds space BETWEEN items — not on the outside edges. Works in both Flexbox and Grid.",
      "code": ".flex-container {\n  display: flex;\n  gap: 16px;           /* same gap in all directions */\n  gap: 10px 20px;      /* row-gap: 10px, column-gap: 20px */\n}\n\n/* You can also use them separately: */\nrow-gap: 10px;\ncolumn-gap: 20px;\n\n/* Old way — messy with margins: */\n.item { margin-right: 16px; }\n.item:last-child { margin-right: 0; } /* had to zero out last item */\n\n/* New way — gap just works! */\n.container { gap: 16px; }  /* no last-child hack needed */"
    }
  },
  {
    "id": "css-37",
    "number": "37",
    "question": "What is CSS Grid and how is it different from Flexbox?",
    "difficulty": "easy",
    "section": "CSS Grid (Deep Dive)",
    "answer": {
      "simple": "CSS Grid is a <strong>two-dimensional</strong> layout system — it controls both rows AND columns at the same time. Flexbox is one-dimensional (either row or column). Use Flexbox for components in one direction; use Grid for full page layouts with both dimensions.",
      "code": "/* Flexbox — one dimension (row OR column) */\n.nav { display: flex; gap: 16px; }  /* perfect for navbars */\n\n/* Grid — two dimensions (rows AND columns simultaneously) */\n.page {\n  display: grid;\n  grid-template-columns: 250px 1fr;  /* sidebar + content */\n  grid-template-rows: auto 1fr auto; /* header + main + footer */\n}\n\n/* Grid shines when items need to span across rows AND columns */\n.featured { grid-column: 1 / 3; grid-row: 1 / 3; }"
    }
  },
  {
    "id": "css-38",
    "number": "38",
    "question": "What is grid-template-columns and the fr unit?",
    "difficulty": "medium",
    "section": "CSS Grid (Deep Dive)",
    "answer": {
      "simple": "<code>grid-template-columns</code> defines how many columns the grid has and their widths. The <code>fr</code> unit means \"fraction of available space.\" 1fr 2fr means the second column is twice as wide as the first.",
      "code": "/* 3 equal columns */\ngrid-template-columns: 1fr 1fr 1fr;\n/* Same as: */\ngrid-template-columns: repeat(3, 1fr);\n\n/* Sidebar + main content */\ngrid-template-columns: 250px 1fr;\n\n/* Complex mixed layout */\ngrid-template-columns: 100px 2fr 1fr auto;\n/*                     fixed  big  small  content-sized */\n\n/* Same for rows: */\ngrid-template-rows: 80px 1fr 60px;\n/*                 header  main  footer */"
    }
  },
  {
    "id": "css-39",
    "number": "39",
    "question": "How do grid-column and grid-row work for spanning items?",
    "difficulty": "medium",
    "section": "CSS Grid (Deep Dive)",
    "answer": {
      "simple": "<code>grid-column</code> and <code>grid-row</code> control where a grid item is placed and how many tracks it spans. The syntax is <code>start / end</code> — these are line numbers (not column numbers). Lines start at 1.",
      "code": "/* Grid with 3 columns and 3 rows */\n.header  { grid-column: 1 / 4; }          /* spans all 3 columns */\n.sidebar { grid-row: 2 / 4; }             /* spans 2 rows */\n.feature { grid-column: 2 / 4; grid-row: 1 / 3; } /* spans rows AND columns */\n\n/* Using span keyword (more readable): */\n.header  { grid-column: span 3; }         /* spans 3 columns from current position */\n.sidebar { grid-row: span 2; }\n\n/* Place item at specific grid position: */\n.logo { grid-column: 1; grid-row: 1; }    /* top-left cell */"
    }
  },
  {
    "id": "css-40",
    "number": "40",
    "question": "What is grid-template-areas?",
    "difficulty": "medium",
    "section": "CSS Grid (Deep Dive)",
    "answer": {
      "simple": "<code>grid-template-areas</code> lets you name regions of your grid with words, making layouts incredibly readable. You literally draw your layout with text, then assign elements to those named areas.",
      "code": ".layout {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: 60px 1fr 50px;\n  grid-template-areas:\n    \"header  header\"\n    \"sidebar main\"\n    \"footer  footer\";\n  min-height: 100vh;\n}\n\n/* Assign elements to areas */\nheader  { grid-area: header; }\n.sidebar{ grid-area: sidebar; }\nmain    { grid-area: main; }\nfooter  { grid-area: footer; }"
    }
  },
  {
    "id": "css-41",
    "number": "41",
    "question": "What is minmax() and how do you make a responsive grid without media queries?",
    "difficulty": "hard",
    "section": "CSS Grid (Deep Dive)",
    "answer": {
      "simple": "<code>minmax(min, max)</code> defines a flexible size range for a grid track. Combined with <code>auto-fit</code> and <code>repeat()</code>, you can build fully responsive grids with zero media queries — columns automatically adjust based on available space.",
      "code": "/* The magic one-liner for responsive card grids */\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 16px;\n}\n/* What this means:\n   - Create as many columns as will fit\n   - Each column is at least 250px wide\n   - If there's extra space, columns grow equally (1fr)\n   - As the viewport shrinks, columns drop to next row automatically\n   - Zero media queries needed! */\n\n/* auto-fill vs auto-fit:\n   auto-fill: keeps empty tracks (useful for alignment)\n   auto-fit: collapses empty tracks (items stretch to fill) */"
    }
  },
  {
    "id": "css-42",
    "number": "42",
    "question": "What is CSS Grid subgrid?",
    "difficulty": "hard",
    "section": "CSS Grid (Deep Dive)",
    "answer": {
      "simple": "Subgrid lets a nested grid item participate in its parent grid's track definitions. Without subgrid, nested grids create their own independent tracks. With subgrid, grandchildren can align to the main grid's columns/rows.",
      "code": "/* The classic problem: card titles don't align row-to-row */\n.grid { display: grid; grid-template-columns: 1fr 1fr 1fr; }\n\n/* With subgrid (each card uses parent's column tracks) */\n.card {\n  display: grid;\n  grid-row: span 3;\n  grid-template-rows: subgrid; /* inherits parent's row tracks */\n}\n/* Now ALL cards have: same header height, same body height,\n   same footer height — regardless of content length! */\n\n/* Subgrid landed in all major browsers in 2023 —\n   it solves the #1 grid alignment pain point */"
    }
  },
  {
    "id": "css-43",
    "number": "43",
    "question": "What are CSS media queries?",
    "difficulty": "easy",
    "section": "Responsive Design",
    "answer": {
      "simple": "Media queries apply CSS rules only when certain conditions are met — usually screen size, but also orientation, color scheme, print mode, etc. They are the core tool for responsive design.",
      "code": "/* Basic viewport width breakpoints */\n@media (max-width: 768px)  { /* tablet and mobile */ }\n@media (min-width: 769px)  { /* tablet up */ }\n@media (min-width: 1024px) { /* desktop */ }\n\n/* Other useful media queries */\n@media (orientation: landscape) { /* landscape mode */ }\n@media (prefers-color-scheme: dark) { /* user prefers dark mode */ }\n@media (prefers-reduced-motion) { /* user wants less animation */ }\n@media print { /* print styles — remove nav, use black ink */ }\n\n/* Multiple conditions */\n@media (min-width: 768px) and (max-width: 1024px) {\n  /* tablet only */\n}"
    }
  },
  {
    "id": "css-44",
    "number": "44",
    "question": "What is mobile-first design and why is it recommended?",
    "difficulty": "medium",
    "section": "Responsive Design",
    "answer": {
      "simple": "Mobile-first means writing base styles for small screens, then using <code>min-width</code> media queries to progressively enhance for larger screens. It's recommended because mobile has the most constraints — designing for it first produces cleaner code.",
      "code": "/* Mobile-first (RECOMMENDED) */\n.nav { display: none; }        /* hidden on mobile */\n.hamburger { display: block; } /* show hamburger on mobile */\n\n@media (min-width: 768px) {    /* ADD for tablet+ */\n  .nav { display: flex; }\n  .hamburger { display: none; }\n}\n\n/* ─── vs ─── */\n\n/* Desktop-first (AVOID) */\n.nav { display: flex; }\n.hamburger { display: none; }\n\n@media (max-width: 768px) {    /* UNDO for mobile — extra work! */\n  .nav { display: none; }\n  .hamburger { display: block; }\n}"
    }
  },
  {
    "id": "css-45",
    "number": "45",
    "question": "What is the viewport meta tag and why is it essential?",
    "difficulty": "medium",
    "section": "Responsive Design",
    "answer": {
      "simple": "The viewport meta tag tells mobile browsers to use the device's actual screen width instead of pretending to be a 980px desktop screen. Without it, all your media queries are useless on mobile.",
      "code": "<!-- Put this in your HTML <head> — ALWAYS -->\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n/* width=device-width: use the actual screen width\n   initial-scale=1: don't zoom in or out on load\n\n   Without this tag:\n   - iPhone renders page as if it's 980px wide\n   - Then zooms out to fit the screen\n   - Your mobile media queries never trigger!\n   - Text is tiny, buttons are untappable */"
    }
  },
  {
    "id": "css-46",
    "number": "46",
    "question": "What is the clamp() function in CSS?",
    "difficulty": "medium",
    "section": "Responsive Design",
    "answer": {
      "simple": "<code>clamp(min, preferred, max)</code> sets a value that is flexible but stays within limits. It means: \"be this size, but no smaller than min, no bigger than max.\" Perfect for responsive typography and spacing.",
      "code": "/* Font that grows with viewport but never too small or too big */\nfont-size: clamp(14px, 2vw, 22px);\n/*                min   preferred  max\n   At 700px viewport: 2vw = 14px (clamped to min)\n   At 1000px:         2vw = 20px  (in range)\n   At 1200px:         2vw = 24px  (clamped to max 22px) */\n\n/* Responsive padding without media queries */\npadding: clamp(16px, 5vw, 60px);\n\n/* Container width with comfortable max */\nwidth: clamp(300px, 90%, 1200px);\n/* min 300px | 90% of parent | max 1200px */"
    }
  },
  {
    "id": "css-47",
    "number": "47",
    "question": "What are container queries in CSS?",
    "difficulty": "medium",
    "section": "Responsive Design",
    "answer": {
      "simple": "Container queries let you style an element based on its parent container's size — NOT the viewport size. This makes components truly reusable: the same card can have a different layout in a narrow sidebar vs a wide main area.",
      "code": "/* Step 1: Mark the parent as a query container */\n.card-wrapper {\n  container-type: inline-size;\n  container-name: card;  /* optional name */\n}\n\n/* Step 2: Style based on container size */\n@container card (min-width: 400px) {\n  .card { display: flex; }     /* side-by-side when wide */\n}\n@container card (max-width: 399px) {\n  .card { flex-direction: column; }  /* stacked when narrow */\n}\n/* The same .card component works perfectly in sidebar, main, modal! */"
    }
  },
  {
    "id": "css-48",
    "number": "48",
    "question": "What is the difference between min-width and max-width?",
    "difficulty": "easy",
    "section": "Responsive Design",
    "answer": {
      "simple": "<code>min-width</code> means \"this screen size and ABOVE\" — used in mobile-first design. <code>max-width</code> means \"this screen size and BELOW\" — used in desktop-first design. As a CSS property (not media query), max-width caps an element's size while still allowing it to be smaller.",
      "code": "/* As a media query: */\n@media (min-width: 768px) { }  /* tablet up — mobile-first */\n@media (max-width: 768px) { }  /* mobile — desktop-first */\n\n/* As a CSS property: */\n.container {\n  width: 100%;           /* flexible, fills parent */\n  max-width: 1200px;     /* but never wider than 1200px */\n  margin: 0 auto;        /* center it */\n}\n/* This is the standard container pattern for every website! */\n\nimg {\n  max-width: 100%;  /* images never overflow their container */\n}"
    }
  },
  {
    "id": "css-49",
    "number": "49",
    "question": "What are the main CSS font properties?",
    "difficulty": "easy",
    "section": "Typography & Text",
    "answer": {
      "simple": "CSS has many font-related properties to control text appearance. The most important are font-family, font-size, font-weight, font-style, and the font shorthand that combines them all.",
      "code": "p {\n  font-family: 'Georgia', Times, serif; /* font stack */\n  font-size: 18px;                      /* text size */\n  font-weight: 700;                     /* 100–900 or bold/normal */\n  font-style: italic;                   /* italic or normal */\n  font-variant: small-caps;            /* small caps style */\n  line-height: 1.6;                     /* space between lines */\n  letter-spacing: 0.05em;              /* space between letters */\n  word-spacing: 4px;                   /* space between words */\n}\n\n/* Font shorthand: style weight size/line-height family */\nfont: italic 700 18px/1.6 Georgia, serif;"
    }
  },
  {
    "id": "css-50",
    "number": "50",
    "question": "How do you use custom web fonts (Google Fonts)?",
    "difficulty": "easy",
    "section": "Typography & Text",
    "answer": {
      "simple": "You can load custom fonts from Google Fonts (free) using a <link> tag, or self-host them using @font-face. Google Fonts is the easiest method for most projects.",
      "code": "<!-- In your HTML <head> -->\n<link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\"\n      rel=\"stylesheet\">\n\n/* Then use in CSS: */\nbody { font-family: 'Roboto', sans-serif; }\n\n/* Or self-host with @font-face: */\n@font-face {\n  font-family: 'MyFont';\n  src: url('/fonts/myfont.woff2') format('woff2'),\n       url('/fonts/myfont.woff')  format('woff');\n  font-weight: 400;\n  font-display: swap; /* show fallback font while loading */\n}"
    }
  },
  {
    "id": "css-51",
    "number": "51",
    "question": "What are the main CSS text properties?",
    "difficulty": "medium",
    "section": "Typography & Text",
    "answer": {
      "simple": "Text properties control alignment, decoration, transformation, overflow, and spacing of text content.",
      "code": "text-align: left | center | right | justify;\ntext-decoration: underline | none | line-through | overline;\ntext-transform: uppercase | lowercase | capitalize | none;\ntext-indent: 32px;           /* indent first line */\ntext-shadow: 2px 2px 4px rgba(0,0,0,0.3);\ntext-overflow: ellipsis;     /* show ... when text is cut off */\n\nwhite-space: nowrap;         /* prevent text wrapping */\nword-break: break-word;      /* break long words */\nword-wrap: break-word;       /* same as word-break */\n\n/* Truncate text with ellipsis — needs all 3: */\n.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}"
    }
  },
  {
    "id": "css-52",
    "number": "52",
    "question": "What is a CSS transition and how does it work?",
    "difficulty": "easy",
    "section": "Transitions & Animations",
    "answer": {
      "simple": "A transition smoothly animates a CSS property change over time. Without a transition, changes are instant (snap). With a transition, the change gradually happens over a set duration. You need a trigger (like :hover) to activate it.",
      "code": ".button {\n  background: steelblue;\n  /* property | duration | timing-function | delay */\n  transition: background 0.3s ease, transform 0.2s ease;\n}\n.button:hover {\n  background: darkblue;\n  transform: scale(1.05);\n}\n\n/* Transition timing functions: */\ntransition-timing-function: ease;         /* slow-fast-slow (default) */\ntransition-timing-function: linear;       /* constant speed */\ntransition-timing-function: ease-in;      /* starts slow */\ntransition-timing-function: ease-out;     /* ends slow */\ntransition-timing-function: ease-in-out;  /* slow start and end */\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); /* custom */"
    }
  },
  {
    "id": "css-53",
    "number": "53",
    "question": "What is a CSS animation with @keyframes?",
    "difficulty": "medium",
    "section": "Transitions & Animations",
    "answer": {
      "simple": "CSS animations use <code>@keyframes</code> to define multiple steps, then the <code>animation</code> property to apply them. Unlike transitions, animations don't need a trigger — they can start automatically, loop, reverse, and have multiple steps.",
      "code": "/* Step 1: Define the animation */\n@keyframes pulse {\n  0%   { transform: scale(1);   opacity: 1; }\n  50%  { transform: scale(1.1); opacity: 0.7; }\n  100% { transform: scale(1);   opacity: 1; }\n}\n\n/* Or use from/to for two-state animations */\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}\n\n/* Step 2: Apply with animation shorthand */\n/* name | duration | timing | delay | iterations | direction | fill-mode */\n.dot     { animation: pulse   1.5s ease-in-out  0s infinite normal   none; }\n.card    { animation: fadeIn  0.5s ease-out      0s 1        normal   both; }"
    }
  },
  {
    "id": "css-54",
    "number": "54",
    "question": "What is the CSS transform property?",
    "difficulty": "medium",
    "section": "Transitions & Animations",
    "answer": {
      "simple": "<code>transform</code> lets you visually move, rotate, scale, or skew elements without affecting layout — other elements don't shift. It's GPU-accelerated, making transform-based animations much smoother than animating top/left/width.",
      "code": "transform: translate(50px, 20px);     /* move x, y */\ntransform: translateX(50px);          /* move horizontally */\ntransform: translateY(-20px);         /* move vertically */\ntransform: rotate(45deg);             /* rotate */\ntransform: scale(1.5);                /* scale up 150% */\ntransform: scale(0.5, 1.2);          /* scale x and y separately */\ntransform: skew(10deg, 5deg);         /* skew */\n\n/* Chain multiple transforms: */\ntransform: translate(-50%, -50%) rotate(45deg) scale(0.8);\n/* Order matters! Applied right-to-left. */\n\n/* 3D transforms: */\ntransform: perspective(1000px) rotateX(20deg) rotateY(30deg);"
    }
  },
  {
    "id": "css-55",
    "number": "55",
    "question": "What are animation-fill-mode, animation-iteration-count, and animation-direction?",
    "difficulty": "medium",
    "section": "Transitions & Animations",
    "answer": {
      "simple": "These three properties give you fine-grained control over how an animation behaves before it starts, how many times it plays, and in which direction it plays.",
      "code": "/* animation-fill-mode — what state does element hold? */\nanimation-fill-mode: none;      /* default — snaps back after animation */\nanimation-fill-mode: forwards;  /* keeps final keyframe styles */\nanimation-fill-mode: backwards; /* applies first keyframe during delay */\nanimation-fill-mode: both;      /* applies both forwards and backwards */\n\n/* animation-iteration-count — how many times to play */\nanimation-iteration-count: 1;        /* default — play once */\nanimation-iteration-count: 3;        /* play 3 times */\nanimation-iteration-count: infinite; /* loop forever */\n\n/* animation-direction — which way to play */\nanimation-direction: normal;           /* 0% → 100% (default) */\nanimation-direction: reverse;          /* 100% → 0% */\nanimation-direction: alternate;        /* 0→100, then 100→0, repeat */\nanimation-direction: alternate-reverse;/* 100→0, then 0→100, repeat */"
    }
  },
  {
    "id": "css-56",
    "number": "56",
    "question": "What is the difference between CSS transitions and animations?",
    "difficulty": "hard",
    "section": "Transitions & Animations",
    "answer": {
      "simple": "Transitions animate a change between TWO states (A → B) and need a trigger. Animations use keyframes to define MULTIPLE steps, can loop, can start automatically, and offer much more control."
    }
  },
  {
    "id": "css-57",
    "number": "57",
    "question": "What is will-change and when should you use it?",
    "difficulty": "hard",
    "section": "Transitions & Animations",
    "answer": {
      "simple": "<code>will-change</code> is a performance hint that tells the browser \"this property will change soon.\" The browser can then prepare (promote to a GPU layer) before the animation starts, preventing jank on the first frame.",
      "code": "/* Use before an animation that would otherwise stutter */\n.animated-card {\n  will-change: transform;  /* browser pre-promotes to GPU layer */\n}\n\n/* Add via JavaScript just BEFORE the animation starts: */\nel.addEventListener('mouseenter', () => {\n  el.style.willChange = 'transform';\n});\nel.addEventListener('animationend', () => {\n  el.style.willChange = 'auto'; /* REMOVE after done! */\n});"
    }
  },
  {
    "id": "css-58",
    "number": "58",
    "question": "What are CSS custom properties (variables)?",
    "difficulty": "easy",
    "section": "CSS Variables & Custom Properties",
    "answer": {
      "simple": "CSS variables (officially \"custom properties\") store values you can reuse anywhere. Declare with <code>--</code> prefix, use with <code>var()</code>. They're live — changing one variable updates everywhere it's used. Perfect for theming.",
      "code": "/* Declare on :root (available globally) */\n:root {\n  --color-primary: #c45c1a;\n  --color-text: #1c1813;\n  --spacing-md: 16px;\n  --border-radius: 8px;\n  --font-heading: 'Georgia', serif;\n}\n\n/* Use anywhere with var() */\n.button {\n  background: var(--color-primary);\n  padding: var(--spacing-md);\n  border-radius: var(--border-radius);\n  font-family: var(--font-heading);\n}\n\n/* var() accepts a fallback value: */\ncolor: var(--color-accent, blue);  /* uses blue if --color-accent undefined */"
    }
  },
  {
    "id": "css-59",
    "number": "59",
    "question": "How do you implement dark mode with CSS variables?",
    "difficulty": "medium",
    "section": "CSS Variables & Custom Properties",
    "answer": {
      "simple": "Define your color palette as CSS variables in :root, then redefine just those variables in a dark mode media query or a .dark class. All the components using those variables automatically switch. Zero component changes needed.",
      "code": ":root {\n  --bg: #ffffff;\n  --text: #1c1813;\n  --card: #f7f3ee;\n  --border: #e2d9ce;\n}\n\n/* Auto dark mode — follows system preference */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: #1a1a1a;\n    --text: #f0ece8;\n    --card: #242424;\n    --border: #3a3a3a;\n  }\n}\n\n/* Or manual toggle — add .dark class to <html> with JavaScript */\nhtml.dark {\n  --bg: #1a1a1a;\n  --text: #f0ece8;\n}\n\n/* Your components just use variables — they update automatically! */\nbody { background: var(--bg); color: var(--text); }\n.card { background: var(--card); border-color: var(--border); }"
    }
  },
  {
    "id": "css-60",
    "number": "60",
    "question": "What are the differences between CSS variables and SASS/LESS variables?",
    "difficulty": "hard",
    "section": "CSS Variables & Custom Properties",
    "answer": {
      "simple": "CSS variables are live in the browser — they cascade, inherit, and can be changed with JavaScript at runtime. SASS/LESS variables are compile-time — they get replaced with their values before the browser sees them, and cannot be changed after compilation."
    }
  },
  {
    "id": "css-61",
    "number": "61",
    "question": "What is a CSS stacking context and how is it created?",
    "difficulty": "hard",
    "section": "Advanced CSS",
    "answer": {
      "simple": "A stacking context is an isolated 3D \"layer\" on the page. z-index comparisons only happen within the same stacking context. Certain CSS properties automatically create a new stacking context.",
      "code": "/* These CSS properties CREATE a new stacking context: */\nposition: relative/absolute/fixed/sticky; /* + any z-index */\nopacity: 0.99;            /* any opacity less than 1 */\ntransform: translateZ(0); /* any transform */\nfilter: blur(0px);        /* any filter */\nisolation: isolate;       /* explicit new context */\nwill-change: transform;   /* GPU layer = new context */\n\n/* The stacking context TRAP: */\n.parent { opacity: 0.99; }   /* creates new context! */\n.child  { z-index: 9999; }   /* only competes within .parent */\n/* .child will NOT appear above elements outside .parent\n   even with z-index: 9999 */\n\n/* Fix: use isolation: isolate instead of opacity for layering */"
    }
  },
  {
    "id": "css-62",
    "number": "62",
    "question": "What is the calc() function in CSS?",
    "difficulty": "medium",
    "section": "Advanced CSS",
    "answer": {
      "simple": "<code>calc()</code> lets you do math with mixed CSS units. You can combine pixels, percentages, rems, and viewport units in a single expression. Extremely useful for layouts that need precise calculations.",
      "code": "/* Mixed units — impossible without calc() */\nwidth: calc(100% - 48px);        /* full width minus fixed sidebar */\nheight: calc(100vh - 64px);      /* viewport minus header height */\npadding: calc(var(--spacing) * 2); /* multiply a variable */\nfont-size: calc(14px + 2vw);     /* fluid typography */\n\n/* Practical examples: */\n.sidebar    { width: calc(260px); }\n.main       { width: calc(100% - 260px - 32px); /* minus sidebar and gap */ }\n\n/* Nesting calc() */\nwidth: calc(50% - calc(var(--gap) / 2));"
    }
  },
  {
    "id": "css-63",
    "number": "63",
    "question": "What is the CSS object-fit property?",
    "difficulty": "hard",
    "section": "Advanced CSS",
    "answer": {
      "simple": "<code>object-fit</code> controls how an image or video fills its container box. Essential for image cards where images need to all look the same size without distorting.",
      "code": "img { width: 300px; height: 200px; }\n\nobject-fit: fill;       /* default — stretches to fill (distorts!) */\nobject-fit: contain;    /* shows full image, may have letterboxing */\nobject-fit: cover;      /* fills box, crops edges (most common) */\nobject-fit: none;       /* original size, cropped if too big */\nobject-fit: scale-down; /* whichever is smaller: none or contain */\n\n/* Control which part is visible when cropping: */\nobject-position: center center;  /* default */\nobject-position: top left;       /* show top-left of image */\nobject-position: 25% 75%;        /* custom focus point */"
    }
  },
  {
    "id": "css-64",
    "number": "64",
    "question": "What is CSS specificity inheritance and what properties are inherited by default?",
    "difficulty": "hard",
    "section": "Advanced CSS",
    "answer": {
      "simple": "Some CSS properties automatically pass from parent to child elements — this is inheritance. Others don't. Understanding which properties inherit helps you write less CSS and predict default behavior.",
      "code": "/* Properties that INHERIT (pass to children): */\n/* Typography-related: */\ncolor, font-family, font-size, font-weight, font-style,\nline-height, letter-spacing, text-align, text-transform,\nlist-style, cursor, visibility\n\n/* Properties that do NOT inherit: */\n/* Box model and layout: */\nmargin, padding, width, height, border, background,\ndisplay, position, top, left, float, overflow, opacity\n\n/* Force inheritance or reset: */\n.child {\n  color: inherit;   /* force inherit parent's color */\n  color: initial;   /* reset to browser default */\n  color: unset;     /* inherit if inheritable, else initial */\n  color: revert;    /* reset to browser default stylesheet */\n}"
    }
  },
  {
    "id": "css-65",
    "number": "65",
    "question": "What is the CSS outline property and how is it different from border?",
    "difficulty": "hard",
    "section": "Advanced CSS",
    "answer": {
      "simple": "Both create a visible line around an element, but <code>border</code> is part of the box model (takes up space), while <code>outline</code> is drawn outside the border and takes NO space — it doesn't affect layout at all.",
      "code": "/* Border — part of box model, affects layout */\n.box { border: 3px solid red; }\n/* Adding/removing border changes the element's size! */\n\n/* Outline — outside the border, NO layout effect */\n.box { outline: 3px solid blue; }\n/* Adding/removing outline does NOT change layout */\n\n/* CRITICAL for accessibility: */\n/* NEVER do this — it removes focus indicators! */\nbutton:focus { outline: none; } /* ❌ BAD — breaks keyboard nav */\n\n/* Instead, replace with a nice custom focus style: */\nbutton:focus { outline: 3px solid #005fcc; outline-offset: 2px; } /* ✅ */\n\n/* outline-offset: creates a gap between element and outline */\nbutton:focus { outline: 2px solid blue; outline-offset: 4px; }"
    }
  },
  {
    "id": "css-66",
    "number": "66",
    "question": "What are CSS logical properties?",
    "difficulty": "hard",
    "section": "Advanced CSS",
    "answer": {
      "simple": "Logical properties use direction-agnostic terms instead of physical ones (left/right/top/bottom). They automatically work correctly in right-to-left (RTL) languages like Arabic and Hebrew without extra code.",
      "code": "/* Physical properties (don't adapt to writing direction) */\nmargin-left: 16px;\npadding-top: 8px;\nborder-right: 1px solid;\nwidth: 200px;\n\n/* Logical properties (adapt to writing direction) */\nmargin-inline-start: 16px;  /* left in LTR, right in RTL */\npadding-block-start: 8px;   /* top in horizontal writing */\nborder-inline-end: 1px solid;\ninline-size: 200px;          /* width in horizontal writing */\nblock-size: 100px;           /* height in horizontal writing */\n\n/* Short summary: */\n/* inline = horizontal direction (start/end) */\n/* block = vertical direction (start/end) */"
    }
  },
  {
    "id": "css-67",
    "number": "67",
    "question": "What is aspect-ratio in CSS?",
    "difficulty": "hard",
    "section": "Advanced CSS",
    "answer": {
      "simple": "<code>aspect-ratio</code> maintains a specific width-to-height ratio regardless of size. The element automatically adjusts its height based on its width to keep the ratio. Perfect for video embeds, image containers, and responsive thumbnails.",
      "code": "/* 16:9 widescreen video */\n.video-container { aspect-ratio: 16 / 9; width: 100%; }\n\n/* Square image thumbnails */\n.thumbnail { aspect-ratio: 1; width: 200px; }\n/* Same as: width: 200px; height: 200px; */\n\n/* Portrait photos */\n.portrait { aspect-ratio: 3 / 4; }\n\n/* Before aspect-ratio existed — the padding hack: */\n.old-video-container {\n  position: relative;\n  padding-bottom: 56.25%; /* 9/16 = 0.5625 */\n  height: 0;\n}\n.old-video { position: absolute; inset: 0; width: 100%; height: 100%; }"
    }
  },
  {
    "id": "css-68",
    "number": "68",
    "question": "What is BEM and why is it useful?",
    "difficulty": "medium",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "BEM stands for <strong>Block, Element, Modifier</strong>. It's a CSS naming convention that makes class names self-documenting and avoids specificity conflicts. Block = standalone component, Element = child (uses __), Modifier = variation (uses --).",
      "code": "/* Block — standalone component */\n.card { }\n\n/* Element — child of block, uses double underscore __ */\n.card__title { font-size: 20px; }\n.card__image { width: 100%; }\n.card__body  { padding: 16px; }\n.card__footer{ border-top: 1px solid; }\n\n/* Modifier — variation, uses double dash -- */\n.card--featured { border: 2px solid gold; }\n.card--dark     { background: #222; color: white; }\n.card__title--large { font-size: 28px; }\n\n/* HTML usage: */\n<div class=\"card card--featured\">\n  <h2 class=\"card__title card__title--large\">Title</h2>\n  <div class=\"card__body\">Content</div>\n</div>"
    }
  },
  {
    "id": "css-69",
    "number": "69",
    "question": "What is a CSS reset vs CSS normalize?",
    "difficulty": "medium",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "A <strong>CSS reset</strong> removes ALL browser default styles — everything becomes zero. <strong>Normalize.css</strong> preserves useful browser defaults while making them consistent across browsers. Normalize is more practical for most projects.",
      "code": "/* CSS Reset (Eric Meyer style) — zero everything */\n*, *::before, *::after { margin: 0; padding: 0; }\nhtml { box-sizing: border-box; }\n\n/* Modern CSS Reset (popular today) */\n*, *::before, *::after { box-sizing: border-box; }\n* { margin: 0; }\nbody { line-height: 1.5; -webkit-font-smoothing: antialiased; }\nimg, picture, video, canvas, svg { display: block; max-width: 100%; }\ninput, button, textarea, select { font: inherit; }\np, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }\n\n/* Normalize.css — fixes inconsistencies, keeps useful defaults */\n/* (large library — install with npm install normalize.css) */"
    }
  },
  {
    "id": "css-70",
    "number": "70",
    "question": "What is CSS specificity war and how do you avoid it?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "A specificity war is when developers keep adding more specific selectors (or !important) to override each other's styles — a vicious cycle that makes CSS unmaintainable. Avoid it by keeping all selectors at low, equal specificity."
    }
  },
  {
    "id": "css-71",
    "number": "71",
    "question": "What is Tailwind CSS and how does it differ from traditional CSS?",
    "difficulty": "medium",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "Tailwind CSS is a utility-first CSS framework. Instead of writing custom CSS classes, you apply tiny pre-built utility classes directly in HTML. Each class does exactly one thing: <code>p-4</code> = padding 16px, <code>text-red-500</code> = red text.",
      "code": "<!-- Traditional CSS approach: -->\n<button class=\"btn btn-primary\">Save</button>\n/* .btn { padding: 8px 16px; border-radius: 6px; font-weight: 600; }\n   .btn-primary { background: blue; color: white; } */\n\n<!-- Tailwind CSS approach: -->\n<button class=\"px-4 py-2 rounded-md font-semibold bg-blue-600 text-white\n                hover:bg-blue-700 transition-colors\">\n  Save\n</button>"
    }
  },
  {
    "id": "css-72",
    "number": "72",
    "question": "What is CSS-in-JS and when would you use it?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "CSS-in-JS means writing CSS inside JavaScript files, co-located with your components. Libraries like styled-components and Emotion generate unique class names automatically, preventing style conflicts. Common in React applications.",
      "code": "// styled-components example:\nimport styled from 'styled-components';\n\nconst Button = styled.button`\n  background: ${props => props.primary ? 'blue' : 'white'};\n  color: ${props => props.primary ? 'white' : 'blue'};\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: 2px solid blue;\n\n  &:hover { opacity: 0.85; }\n`;\n\n// Use it like a React component:\n<Button primary>Primary Button</Button>\n<Button>Secondary Button</Button>"
    }
  },
  {
    "id": "css-73",
    "number": "73",
    "question": "What is CSS specificity inheritance and the cascade layers (@layer)?",
    "difficulty": "medium",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "CSS <code>@layer</code> lets you organize styles into named layers with explicit priority order. Styles in later-declared layers win over earlier layers regardless of specificity. This finally gives developers control over the cascade.",
      "code": "/* Declare layer order (later = higher priority) */\n@layer reset, base, components, utilities;\n\n@layer reset {\n  * { margin: 0; padding: 0; }\n}\n@layer base {\n  h1 { font-size: 2rem; } /* specificity: 0,0,1 */\n}\n@layer components {\n  .card { padding: 16px; } /* specificity: 0,1,0 */\n}\n@layer utilities {\n  .mt-4 { margin-top: 16px !important; }\n}\n\n/* Unlayered styles always beat layered styles!\n   This makes it easy to integrate third-party CSS:\n   @layer library { /* low priority library styles */ } */"
    }
  },
  {
    "id": "css-74",
    "number": "74",
    "question": "What are CSS preprocessors like SASS and when should you use them?",
    "difficulty": "medium",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "SASS/SCSS is a CSS preprocessor — you write enhanced CSS with variables, nesting, mixins, and loops, then it compiles to regular CSS. It makes large stylesheets easier to write and maintain.",
      "code": "// SCSS adds nesting, variables, mixins, loops:\n$primary: #c45c1a;\n$border-radius: 8px;\n\n.card {\n  border-radius: $border-radius;\n  background: white;\n\n  &__title {    /* compiles to .card__title */\n    color: $primary;\n    font-size: 1.25rem;\n  }\n  &:hover {     /* compiles to .card:hover */\n    box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  }\n}\n\n// Mixin — reusable style block:\n@mixin flex-center {\n  display: flex; align-items: center; justify-content: center;\n}\n.hero { @include flex-center; }"
    }
  },
  {
    "id": "css-76",
    "number": "76",
    "question": "What is the CSS painting and layout process? (Reflow vs Repaint)",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "Browsers render pages in steps. <strong>Reflow</strong> (layout) recalculates positions and sizes — very expensive. <strong>Repaint</strong> redraws pixels for visual changes — less expensive. <strong>Compositing</strong> uses the GPU for transform/opacity — cheapest and smoothest."
    }
  },
  {
    "id": "css-77",
    "number": "77",
    "question": "What is the CSS content-visibility property?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "<code>content-visibility</code> is a major performance optimization. Setting it to <code>auto</code> tells the browser to skip rendering off-screen content entirely until the user scrolls to it — like lazy loading but for rendering.",
      "code": "/* Apply to sections that are far down the page */\n.article-section {\n  content-visibility: auto;\n  /* Browser skips layout, paint, and compositing for this section\n     until it's close to the viewport. Can speed up page load 5-10x! */\n\n  /* Tell browser how tall this will be (prevents scroll jumps) */\n  contain-intrinsic-size: 0 600px; /* estimated height */\n}\n\n/* content-visibility values: */\ncontent-visibility: visible;  /* default — always render */\ncontent-visibility: auto;     /* skip off-screen rendering */\ncontent-visibility: hidden;   /* like display:none but cached */"
    }
  },
  {
    "id": "css-78",
    "number": "78",
    "question": "What is the backdrop-filter property?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "<code>backdrop-filter</code> applies visual filters (blur, brightness, etc.) to the area <strong>behind</strong> an element. The famous \"frosted glass\" effect is made entirely with backdrop-filter.",
      "code": "/* Frosted glass navigation bar */\n.navbar {\n  background: rgba(255, 255, 255, 0.15);  /* semi-transparent */\n  backdrop-filter: blur(10px) saturate(180%);\n  -webkit-backdrop-filter: blur(10px); /* Safari prefix */\n  border-bottom: 1px solid rgba(255,255,255,0.3);\n}\n\n/* All available filter functions: */\nbackdrop-filter: blur(10px);\nbackdrop-filter: brightness(0.5);\nbackdrop-filter: contrast(1.5);\nbackdrop-filter: saturate(180%);\nbackdrop-filter: hue-rotate(90deg);\nbackdrop-filter: invert(1);\nbackdrop-filter: sepia(1);\n\n/* Chain multiple: */\nbackdrop-filter: blur(8px) brightness(1.1) saturate(150%);"
    }
  },
  {
    "id": "css-79",
    "number": "79",
    "question": "What is CSS nesting (native, without SASS)?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "CSS now supports native nesting — one of SASS's most loved features. You can write nested selectors inside each other, just like SCSS. Landed in all major browsers in 2023.",
      "code": "/* Native CSS nesting — no SASS needed! */\n.card {\n  background: white;\n  border-radius: 8px;\n\n  /* Nested child selector */\n  .card-title {\n    font-size: 1.25rem;\n    color: #333;\n  }\n\n  /* Use & for the parent selector */\n  &:hover {\n    box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  }\n\n  & .special {\n    color: red;\n  }\n\n  /* Nested media query */\n  @media (max-width: 768px) {\n    padding: 12px;\n  }\n}"
    }
  },
  {
    "id": "css-80",
    "number": "80",
    "question": "What is the CSS pointer-events property?",
    "difficulty": "medium",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "<code>pointer-events</code> controls whether an element can receive mouse/touch events. Setting it to <code>none</code> makes the element \"invisible\" to clicks — events pass through to whatever is behind it.",
      "code": "/* Element ignores ALL mouse/touch events */\n.overlay-decoration { pointer-events: none; }\n/* Clicks pass straight through to elements below */\n\n/* Common use cases: */\n.disabled-btn {\n  pointer-events: none;  /* can't click at all */\n  opacity: 0.5;\n}\n\n.loading-overlay {\n  /* While loading, block clicks on content below: */\n  pointer-events: all; /* (this is the default) */\n}\n\n/* Useful in SVG: */\nsvg .background-shape { pointer-events: none; }\nsvg .interactive-shape { pointer-events: all; }\n\n/* For anchor tags: */\na.disabled { pointer-events: none; }  /* can't click link */"
    }
  },
  {
    "id": "css-81",
    "number": "81",
    "question": "What are CSS scroll snap properties?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "Scroll snap makes the scroll container \"snap\" to specific positions after the user finishes scrolling — creating a smooth, app-like scrolling experience without JavaScript. Perfect for carousels and full-page scroll effects.",
      "code": "/* Scroll snap container */\n.carousel {\n  display: flex;\n  overflow-x: scroll;\n  scroll-snap-type: x mandatory;\n  /* x = horizontal, mandatory = must snap to a position */\n  gap: 16px;\n}\n\n/* Each snap target */\n.slide {\n  scroll-snap-align: start;  /* snap to start of each slide */\n  flex-shrink: 0;\n  width: 100%;\n}\n\n/* For full-page vertical scroll: */\n.page-container {\n  height: 100vh;\n  overflow-y: scroll;\n  scroll-snap-type: y mandatory;\n}\n.page-section {\n  height: 100vh;\n  scroll-snap-align: start;\n}"
    }
  },
  {
    "id": "css-82",
    "number": "82",
    "question": "What is the CSS cursor property?",
    "difficulty": "medium",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "The <code>cursor</code> property changes the mouse cursor shape when hovering over an element. It's an important UI signal — users rely on cursor changes to understand whether something is clickable, draggable, or resizable.",
      "code": "cursor: default;     /* normal arrow */\ncursor: pointer;     /* hand — indicates clickable! */\ncursor: text;        /* I-beam — text is selectable */\ncursor: move;        /* four-way arrow — element is draggable */\ncursor: grab;        /* open hand — can grab */\ncursor: grabbing;    /* closed hand — currently dragging */\ncursor: not-allowed; /* circle with line — action disabled */\ncursor: wait;        /* spinning wheel — processing */\ncursor: crosshair;   /* plus sign — for drawing/selecting */\ncursor: zoom-in;     /* magnifier + — click to zoom in */\ncursor: resize;      /* for resize handles */\n\n/* Custom cursor with image: */\ncursor: url('/cursors/custom.png') 10 10, pointer;\n/*      image URL                  hotspot  fallback */"
    }
  },
  {
    "id": "css-83",
    "number": "83",
    "question": "What is the CSS filter property?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "<code>filter</code> applies visual effects to an element (like Photoshop filters but in CSS). Note the difference: <code>filter</code> applies to the element itself, while <code>backdrop-filter</code> applies to what's behind the element.",
      "code": "filter: blur(4px);           /* blurs the element */\nfilter: brightness(0.5);     /* darker (0.5 = 50% brightness) */\nfilter: brightness(1.5);     /* brighter */\nfilter: contrast(200%);      /* more contrast */\nfilter: grayscale(100%);     /* black and white */\nfilter: sepia(100%);         /* warm sepia tone */\nfilter: hue-rotate(180deg);  /* shift colors by 180 degrees */\nfilter: invert(1);           /* invert all colors */\nfilter: saturate(0.5);       /* less vivid colors */\nfilter: drop-shadow(4px 4px 8px rgba(0,0,0,0.3));\n\n/* Chain multiple filters: */\nfilter: grayscale(50%) brightness(1.2) contrast(1.1);\n\n/* Practical hover effect: */\n.photo { filter: grayscale(100%); transition: filter 0.3s; }\n.photo:hover { filter: grayscale(0%); }"
    }
  },
  {
    "id": "css-84",
    "number": "84",
    "question": "What is CSS containment (contain property)?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "<code>contain</code> tells the browser that changes inside an element won't affect outside it. This allows the browser to optimize rendering — skipping recalculations outside the contained element.",
      "code": "/* contain values: */\ncontain: layout;  /* changes inside won't affect outside layout */\ncontain: paint;   /* visual changes stay inside the element */\ncontain: size;    /* element doesn't depend on its children's sizes */\ncontain: style;   /* counters and quotes don't leak outside */\ncontain: strict;  /* all of the above (most aggressive) */\ncontain: content; /* layout + paint + style */\n\n/* Example: a widget that updates frequently */\n.live-ticker {\n  contain: strict;\n  /* When content updates, browser only recalculates inside here\n     Not the whole page! Big performance win for dynamic content. */\n}\n\n/* content-visibility: auto uses containment internally */"
    }
  },
  {
    "id": "css-85",
    "number": "85",
    "question": "What is the @supports rule?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "<code>@supports</code> applies CSS only when the browser supports a specific feature. It's the CSS version of feature detection — lets you use new features safely with older browser fallbacks.",
      "code": "/* Apply only if browser supports grid */\n@supports (display: grid) {\n  .layout { display: grid; grid-template-columns: 1fr 1fr; }\n}\n\n/* Fallback for older browsers */\n.layout { display: flex; flex-wrap: wrap; } /* always applies */\n@supports (display: grid) {\n  .layout { display: grid; /* overrides flex for grid browsers */ }\n}\n\n/* Test for a specific property:value pair */\n@supports (backdrop-filter: blur(10px)) {\n  .glass { backdrop-filter: blur(10px); }\n}\n\n/* NOT condition */\n@supports not (display: grid) {\n  .layout { /* old browser fallback */ }\n}\n\n/* AND / OR */\n@supports (display: grid) and (gap: 0) { }"
    }
  },
  {
    "id": "css-86",
    "number": "86",
    "question": "What are CSS gradients?",
    "difficulty": "medium",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "CSS gradients create smooth transitions between colors. They're used as background images. Main types: linear (straight line), radial (circular), and conic (around a point).",
      "code": "/* Linear gradient */\nbackground: linear-gradient(to right, #ff6b6b, #feca57);\nbackground: linear-gradient(135deg, blue 0%, purple 50%, pink 100%);\n\n/* Radial gradient (from center outward) */\nbackground: radial-gradient(circle at center, #667eea, #764ba2);\n\n/* Conic gradient (like a pie chart) */\nbackground: conic-gradient(red 0deg, yellow 120deg, blue 240deg);\n\n/* Multiple gradients — layer them: */\nbackground:\n  linear-gradient(rgba(0,0,0,0.3), transparent), /* dark overlay */\n  url('hero.jpg') center/cover no-repeat;        /* background image */\n\n/* Repeating gradients: */\nbackground: repeating-linear-gradient(\n  45deg,\n  #f0f0f0 0px, #f0f0f0 10px,\n  #e0e0e0 10px, #e0e0e0 20px\n);"
    }
  },
  {
    "id": "css-87",
    "number": "87",
    "question": "What are CSS box shadows and text shadows?",
    "difficulty": "medium",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "<code>box-shadow</code> adds a shadow outside (or inside) a box. <code>text-shadow</code> adds a shadow behind text. Both accept multiple shadows layered on top of each other.",
      "code": "/* box-shadow: offset-x offset-y blur spread color */\nbox-shadow: 4px 4px 10px 0px rgba(0,0,0,0.2);\nbox-shadow: 0 2px 8px rgba(0,0,0,0.15);   /* soft lift shadow */\nbox-shadow: 0 0 0 3px blue;                /* focus ring (no blur) */\nbox-shadow: inset 0 2px 4px rgba(0,0,0,0.1); /* inner shadow */\n\n/* Multiple shadows — layered: */\nbox-shadow:\n  0 1px 2px rgba(0,0,0,0.1),\n  0 4px 12px rgba(0,0,0,0.15);\n\n/* text-shadow: offset-x offset-y blur color */\ntext-shadow: 2px 2px 4px rgba(0,0,0,0.3);\ntext-shadow: 0 0 20px rgba(255,255,255,0.8); /* glow effect */\n\n/* Multiple text shadows for outline effect: */\ntext-shadow:\n  -1px -1px 0 black,\n   1px -1px 0 black,\n  -1px  1px 0 black,\n   1px  1px 0 black;"
    }
  },
  {
    "id": "css-88",
    "number": "88",
    "question": "What is the clip-path property?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "<code>clip-path</code> cuts an element into any shape you define. Anything outside the shape becomes invisible. You can use circles, ellipses, polygons, and SVG paths.",
      "code": "/* Circle */\nclip-path: circle(50%);        /* circle taking up 50% */\nclip-path: circle(100px at center);  /* 100px circle */\n\n/* Ellipse */\nclip-path: ellipse(150px 100px at center);\n\n/* Polygon — define points (x% y%) */\nclip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);  /* diagonal cut */\nclip-path: polygon(50% 0%, 100% 100%, 0% 100%);      /* triangle */\n\n/* Diagonal section dividers between page sections */\n.hero {\n  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);\n}\n\n/* Animated clip-path — creates reveal effects! */\n.card { clip-path: circle(0% at center); transition: clip-path 0.5s; }\n.card:hover { clip-path: circle(100% at center); }"
    }
  },
  {
    "id": "css-89",
    "number": "89",
    "question": "What are CSS shapes (shape-outside)?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "<code>shape-outside</code> makes text wrap around non-rectangular shapes. Instead of text flowing around a rectangular box, it flows around a circle, polygon, or image shape. Only works with floated elements.",
      "code": "/* Text wraps around a circle */\n.circular-image {\n  float: left;\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  shape-outside: circle(50%);\n  margin: 0 20px 10px 0;\n}\n\n/* Text wraps around a diagonal shape */\n.hero-image {\n  float: left;\n  shape-outside: polygon(0 0, 70% 0, 100% 100%, 0 100%);\n}\n\n/* Text wraps around the actual visible content of an image */\n.transparent-image {\n  float: left;\n  shape-outside: url('image-with-transparency.png');\n}"
    }
  },
  {
    "id": "css-90",
    "number": "90",
    "question": "What is CSS accessibility and what properties matter for it?",
    "difficulty": "medium",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "CSS accessibility means using CSS in a way that keeps your website usable for everyone — including keyboard users, screen reader users, people with low vision, and those who prefer reduced motion.",
      "code": "/* 1. Never remove focus styles (keyboard navigation) */\n:focus { outline: 2px solid #005fcc; outline-offset: 2px; } /* ✅ */\n:focus { outline: none; }                                    /* ❌ */\n\n/* 2. Ensure enough color contrast */\n/* Text must have 4.5:1 contrast ratio vs background (WCAG AA) */\ncolor: #777; background: #fff; /* ❌ too low (2.7:1) */\ncolor: #555; background: #fff; /* ✅ passes (7.0:1) */\n\n/* 3. Respect reduced motion preference */\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after { animation-duration: 0.01ms !important; }\n}\n\n/* 4. Don't rely on color alone for meaning */\n/* ❌ Only this: .error { color: red; } */\n/* ✅ Also add: .error { color: red; border-left: 4px solid red; } */\n\n/* 5. Use rem for font sizes (respects user browser size settings) */"
    }
  },
  {
    "id": "css-91",
    "number": "91",
    "question": "What is the @property rule for animating custom properties?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "<code>@property</code> lets you define a CSS custom property with a specific type. This unlocks the ability to animate CSS variables — something that was previously impossible — enabling entirely new animation effects.",
      "code": "/* Register a typed custom property */\n@property --gradient-angle {\n  syntax: '<angle>';       /* it's an angle type */\n  initial-value: 0deg;\n  inherits: false;\n}\n\n/* Now you can animate it! */\n.gradient-card {\n  background: linear-gradient(var(--gradient-angle), #667eea, #764ba2);\n  animation: rotate-gradient 4s linear infinite;\n}\n\n@keyframes rotate-gradient {\n  to { --gradient-angle: 360deg; }\n}\n/* Without @property, animating a variable in a gradient doesn't work.\n   With @property (typed), the browser can interpolate the value! */\n\n/* You can also type colors, numbers, lengths: */\n@property --card-color {\n  syntax: '<color>';\n  initial-value: blue;\n  inherits: false;\n}"
    }
  },
  {
    "id": "css-92",
    "number": "92",
    "question": "What is the color-scheme property and prefers-color-scheme?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "<code>color-scheme</code> tells the browser which color themes the page supports, so browser UI elements (scrollbars, form inputs, checkboxes) automatically match the theme. <code>prefers-color-scheme</code> media query detects the user's OS preference.",
      "code": "/* Tell the browser your page supports both themes */\n:root { color-scheme: light dark; }\n\n/* Browser scrollbars, inputs, etc. will now match\n   the user's system preference automatically */\n\n/* Style your own elements based on preference */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: #1a1a1a;\n    --text: #f0ece8;\n  }\n}\n\n/* In JavaScript: check current preference */\nconst isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;\n\n/* Listen for changes: */\nwindow.matchMedia('(prefers-color-scheme: dark)')\n  .addEventListener('change', e => {\n    document.body.classList.toggle('dark', e.matches);\n  });"
    }
  },
  {
    "id": "css-93",
    "number": "93",
    "question": "What is the CSS print media query and how do you style for printing?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "The <code>print</code> media type applies CSS only when the page is printed or exported to PDF. You can hide unnecessary elements, adjust typography, and ensure content fits on paper.",
      "code": "@media print {\n  /* Hide navigation, ads, buttons — not needed on paper */\n  nav, .sidebar, .cookie-banner, button, .no-print { display: none; }\n\n  /* Use black text for readability */\n  body { color: black; background: white; font-size: 12pt; }\n\n  /* Expand all content (no need for user interaction) */\n  .accordion-content { display: block !important; }\n\n  /* Show URLs after links */\n  a[href]::after { content: \" (\" attr(href) \")\"; }\n\n  /* Avoid breaking tables and images across pages */\n  img, table { page-break-inside: avoid; }\n\n  /* Force page breaks */\n  .chapter { page-break-before: always; }\n\n  /* No shadows or backgrounds (saves ink) */\n  * { box-shadow: none !important; text-shadow: none !important; }\n}"
    }
  },
  {
    "id": "css-94",
    "number": "94",
    "question": "What are CSS counters?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "CSS counters are variables maintained by CSS that let you number elements automatically without JavaScript. You increment them with <code>counter-increment</code> and display them with <code>counter()</code> in pseudo-elements.",
      "code": "/* Custom numbered list */\nol.custom-list {\n  list-style: none;\n  counter-reset: my-counter;  /* initialize counter at 0 */\n}\nol.custom-list li {\n  counter-increment: my-counter;  /* increment by 1 each item */\n}\nol.custom-list li::before {\n  content: counter(my-counter) \". \";  /* display the count */\n  font-weight: bold;\n  color: var(--accent);\n}\n\n/* Auto-numbering headings (like a table of contents) */\nbody { counter-reset: section; }\nh2::before {\n  counter-increment: section;\n  content: counter(section) \". \";\n}\n\n/* Nested counters */\nol { counter-reset: sub-counter; }\nol li::before { content: counter(section) \".\" counter(sub-counter); }"
    }
  },
  {
    "id": "css-95",
    "number": "95",
    "question": "What is the attr() function in CSS?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "The <code>attr()</code> function reads an HTML attribute value and uses it in CSS — mainly in the <code>content</code> property of pseudo-elements. Lets you bridge HTML data to CSS styling without JavaScript.",
      "code": "/* Show href URL after external links */\na[href^=\"http\"]::after {\n  content: \" (\" attr(href) \")\";\n  font-size: 0.8em;\n  color: gray;\n}\n\n/* Tooltip from data attribute */\n[data-tooltip] {\n  position: relative;\n}\n[data-tooltip]::after {\n  content: attr(data-tooltip);   /* reads the data-tooltip attribute! */\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #333;\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  white-space: nowrap;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n[data-tooltip]:hover::after { opacity: 1; }"
    }
  },
  {
    "id": "css-96",
    "number": "96",
    "question": "What is the CSS isolation property?",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "<code>isolation: isolate</code> creates a new stacking context explicitly, without any visible side effects (unlike opacity or transform). This is the clean way to prevent z-index bleeding between components.",
      "code": "/* Problem: the dropdown inside .card leaks z-index outside */\n.card { /* no stacking context */ }\n.card .dropdown { position: absolute; z-index: 1000; }\n/* This dropdown might appear over other cards or modals! */\n\n/* Solution: isolate the component */\n.card { isolation: isolate; }\n/* Now the dropdown's z-index only competes INSIDE .card */\n\n/* vs other stacking context creators (have visual side effects): */\n.card { opacity: 0.99; }     /* slightly transparent! */\n.card { transform: none; }   /* might affect performance */\n.card { isolation: isolate; } /* CLEAN — no visual or perf changes */"
    }
  },
  {
    "id": "css-97",
    "number": "97",
    "question": "What are CSS math functions? (min, max, clamp, round, mod)",
    "difficulty": "hard",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "CSS has built-in math functions beyond calc(). <code>min()</code> picks the smallest value. <code>max()</code> picks the largest. <code>clamp()</code> keeps a value within a range. Newer additions: <code>round()</code>, <code>mod()</code>, <code>abs()</code>.",
      "code": "/* min() — use the smallest value */\nwidth: min(500px, 90%);   /* smaller of 500px or 90% of parent */\n/* good for: \"max-width\" behavior without max-width property */\n\n/* max() — use the largest value */\nfont-size: max(16px, 1.5vw);  /* at least 16px, grow with viewport */\npadding: max(12px, 2vw);      /* minimum comfortable padding */\n\n/* clamp(min, preferred, max) — constrained flexible value */\nfont-size: clamp(16px, 2.5vw, 28px);  /* fluid typography */\nwidth: clamp(300px, 50%, 800px);\n\n/* round() — round to nearest step (CSS 2023) */\nwidth: round(var(--size), 10px);  /* round to nearest 10px */\n\n/* mod() — modulo operation */\ntransform: rotate(mod(var(--angle), 360deg));"
    }
  },
  {
    "id": "css-98",
    "number": "98",
    "question": "What are some common CSS interview practical tasks?",
    "difficulty": "medium",
    "section": "CSS Architecture, Methodologies & Best Practices",
    "answer": {
      "simple": "Practice these common tasks to master CSS application.",
      "example": "1. <strong>Center a div</strong> horizontally and vertically on the page<br><br>\n2. <strong>Create a sticky header</strong> that stays at the top while scrolling<br><br>\n3. <strong>Build a responsive card grid</strong> that stacks on mobile<br><br>\n4. <strong>Create a CSS triangle</strong> using borders (classic trick)<br><br>\n5. <strong>Make a loading spinner</strong> animation with pure CSS<br><br>\n6. <strong>Build a simple CSS-only dropdown</strong> menu<br><br>\n7. <strong>Create a responsive 2-column layout</strong> with sidebar + main<br><br>\n8. <strong>Implement a dark/light mode toggle</strong> with CSS variables<br><br>\n9. <strong>Truncate text with ellipsis</strong> in a fixed-width container<br><br>\n10. <strong>Create a CSS-only tooltip</strong> on hover using ::before/::after",
      "code": "/* CSS Triangle — using transparent borders */\n.triangle {\n  width: 0;\n  height: 0;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  border-bottom: 35px solid steelblue; /* only this side is colored */\n}"
    }
  }
];
