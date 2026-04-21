import { Question } from './types';

export const HTML_QUESTIONS: Question[] = [
  {
    "id": "html-01",
    "number": "01",
    "question": "What does HTML stand for?",
    "difficulty": "easy",
    "section": "HTML Basics",
    "answer": {
      "simple": "HTML stands for <strong>HyperText Markup Language</strong>. It is the standard language used to create and design documents on the World Wide Web.",
      "note": "Think of it this way 💡: HTML is like the skeleton of a webpage. It tells the browser what things are — \"this is a heading\", \"this is a paragraph\", \"this is an image\"."
    }
  },
  {
    "id": "html-02",
    "number": "02",
    "question": "What is the difference between an HTML tag and an HTML element?",
    "difficulty": "easy",
    "section": "HTML Basics",
    "answer": {
      "simple": "A <strong>tag</strong> is just the label part (like <code>&lt;p&gt;</code>). An <strong>element</strong> is the whole thing — the opening tag + content + closing tag.",
      "example": "The tag is <code>&lt;p&gt;</code>. The element is <code>&lt;p&gt;Hello!&lt;/p&gt;</code> — that's the full package.",
      "exampleLabel": "Example 👇"
    }
  },
  {
    "id": "html-03",
    "number": "03",
    "question": "What does <!DOCTYPE html> do?",
    "difficulty": "easy",
    "section": "HTML Basics",
    "answer": {
      "simple": "It tells the browser \"hey, this is an HTML5 page — please read it correctly!\"",
      "note": "Without it, the browser might go into \"quirks mode\" — an old mode that can make your page look weird or broken. Always put <code>&lt;!DOCTYPE html&gt;</code> as the very first line of your HTML file."
    }
  },
  {
    "id": "html-04",
    "number": "04",
    "question": "What is the basic structure of an HTML page?",
    "difficulty": "easy",
    "section": "HTML Basics",
    "answer": {
      "simple": "Every HTML page has a standard structure starting with <code>&lt;!DOCTYPE html&gt;</code>, followed by <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> tags.",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n  </body>\n</html>",
      "note": "Easy way to remember 💡: <code>&lt;head&gt;</code> = stuff the browser needs to know (invisible to users). <code>&lt;body&gt;</code> = stuff the user actually sees on the page."
    }
  },
  {
    "id": "html-05",
    "number": "05",
    "question": "What is the difference between block and inline elements?",
    "difficulty": "easy",
    "section": "HTML Basics",
    "answer": {
      "simple": "<strong>Block elements</strong> take up the full width of the page and always start on a new line. <strong>Inline elements</strong> only take up as much space as their content needs and stay in the same line.",
      "example": "Block = a whole shelf (takes the full row). Inline = a book on that shelf (only as wide as the book).<br><br>Block examples: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>. Inline examples: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>.",
      "exampleLabel": "Real life example 🏠"
    }
  },
  {
    "id": "html-06",
    "number": "06",
    "question": "What are void elements (self-closing tags)?",
    "difficulty": "easy",
    "section": "HTML Basics",
    "answer": {
      "simple": "Void elements are tags that don't need a closing tag because they can't hold any content inside them.",
      "example": "<code>&lt;br&gt;</code> (line break), <code>&lt;img&gt;</code> (image), <code>&lt;input&gt;</code> (text box), <code>&lt;hr&gt;</code> (horizontal line), <code>&lt;meta&gt;</code>, <code>&lt;link&gt;</code>.<br><br>Think about it — an image tag shows a picture. What would you put inside it? Nothing! So it doesn't need a closing tag.",
      "exampleLabel": "Examples 👇"
    }
  },
  {
    "id": "html-07",
    "number": "07",
    "question": "What is the difference between <div> and <span>?",
    "difficulty": "easy",
    "section": "HTML Basics",
    "answer": {
      "simple": "Both are empty containers with no meaning — just boxes to group things. The only difference: <code>&lt;div&gt;</code> is a big block box. <code>&lt;span&gt;</code> is a small inline box.",
      "example": "<code>&lt;div&gt;</code> = a cardboard box (holds a whole section). <code>&lt;span&gt;</code> = a sticky label (highlights just a few words in a sentence).",
      "exampleLabel": "Analogy 📦"
    }
  },
  {
    "id": "html-08",
    "number": "08",
    "question": "What is the difference between HTML attributes and properties?",
    "difficulty": "medium",
    "section": "HTML Basics",
    "answer": {
      "simple": "<strong>Attributes</strong> are written in the HTML code — they're the starting value. <strong>Properties</strong> are the live values in the browser as the user interacts with the page.",
      "example": "You write <code>&lt;input value=\"hello\"&gt;</code>. That \"hello\" is the <em>attribute</em>. The user clears it and types \"world\". Now the <em>property</em> is \"world\" — but the attribute in your HTML still says \"hello\". They can be different!",
      "exampleLabel": "Example 👇"
    }
  },
  {
    "id": "html-09",
    "number": "09",
    "question": "What is semantic HTML and why does it matter?",
    "difficulty": "easy",
    "section": "Semantic HTML",
    "answer": {
      "simple": "Semantic HTML means using tags that <strong>describe what the content is</strong>, not just how it looks.",
      "example": "❌ Bad: <code>&lt;div&gt;My Article&lt;/div&gt;</code> — tells nothing about the content.<br>✅ Good: <code>&lt;article&gt;My Article&lt;/article&gt;</code> — tells everyone it's an article.<br><br>It helps: screen readers for blind users, Google for search rankings, and other developers reading your code.",
      "exampleLabel": "Bad vs Good 👇"
    }
  },
  {
    "id": "html-10",
    "number": "10",
    "question": "What is the difference between <article> and <section>?",
    "difficulty": "easy",
    "section": "Semantic HTML",
    "answer": {
      "simple": "Ask yourself: \"Could I copy this content and put it on another website and it would still make sense?\" If YES → use <code>&lt;article&gt;</code>. If NO → use <code>&lt;section&gt;</code>.",
      "example": "A blog post = <code>&lt;article&gt;</code> (makes sense on its own anywhere). A chapter inside a book page = <code>&lt;section&gt;</code> (only makes sense as part of the book).",
      "exampleLabel": "Example 📰"
    }
  },
  {
    "id": "html-11",
    "number": "11",
    "question": "What do <main>, <header>, <footer>, and <aside> mean?",
    "difficulty": "medium",
    "section": "Semantic HTML",
    "answer": {
      "simple": "These tags provide structure to the content, making it easier for browsers and assistive technologies to navigate.",
      "note": "Think of a newspaper 📰:<br><strong>&lt;header&gt;</strong> = the newspaper's name and date at the top.<br><strong>&lt;main&gt;</strong> = the main news stories in the middle.<br><strong>&lt;aside&gt;</strong> = the sidebar with extra stuff (ads, related links).<br><strong>&lt;footer&gt;</strong> = the small print at the bottom (contact, copyright)."
    }
  },
  {
    "id": "html-12",
    "number": "12",
    "question": "When do you use <b> vs <strong>, and <i> vs <em>?",
    "difficulty": "medium",
    "section": "Semantic HTML",
    "answer": {
      "simple": "<code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> are semantic (meaningful), while <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> are purely stylistic.",
      "note": "Simple rule 💡:<br><code>&lt;strong&gt;</code> = This is <em>important</em>, pay attention! (screen readers may say it louder)<br><code>&lt;b&gt;</code> = Just make it look bold, no special importance.<br><br><code>&lt;em&gt;</code> = stress this word (changes the <em>meaning</em> of the sentence)<br><code>&lt;i&gt;</code> = just make it look italic (book titles, foreign words).",
      "example": "\"Do <em>&lt;em&gt;not&lt;/em&gt;</em> touch that!\" — the emphasis changes the meaning.<br>\"Read <i>&lt;i&gt;</i>Harry Potter<i>&lt;/i&gt;</i>\" — just styling a book title.",
      "exampleLabel": "Example 🗣️"
    }
  },
  {
    "id": "html-13",
    "number": "13",
    "question": "What are <figure> and <figcaption> used for?",
    "difficulty": "medium",
    "section": "Semantic HTML",
    "answer": {
      "simple": "<code>&lt;figure&gt;</code> is a container for an image (or chart or code) that goes with the text but could be moved without breaking the page. <code>&lt;figcaption&gt;</code> is the caption label under it.",
      "code": "<figure>\n  <img src=\"cat.jpg\" alt=\"A cat\">\n  <figcaption>My cat loves boxes.</figcaption>\n</figure>",
      "note": "It's like a photo in a magazine — the picture and its caption belong together."
    }
  },
  {
    "id": "html-14",
    "number": "14",
    "question": "What is the <nav> element for?",
    "difficulty": "easy",
    "section": "Semantic HTML",
    "answer": {
      "simple": "<code>&lt;nav&gt;</code> wraps your main navigation menu — the links people use to move around your website.",
      "note": "It tells blind users (using screen readers) \"here's the navigation, you can jump to it or skip it.\" Only use it for <em>major</em> navigation, not every group of links on the page."
    }
  },
  {
    "id": "html-15",
    "number": "15",
    "question": "What is the difference between GET and POST in a form?",
    "difficulty": "easy",
    "section": "Forms & Input",
    "answer": {
      "simple": "<strong>GET</strong> = puts the data in the website address (URL). <strong>POST</strong> = sends data secretly, hidden from the URL.",
      "example": "GET is like writing your shopping list on a postcard — anyone can read it.<br>POST is like putting it in a sealed envelope — more private.",
      "exampleLabel": "Real life 🛒"
    }
  },
  {
    "id": "html-16",
    "number": "16",
    "question": "What does the <label> element do?",
    "difficulty": "easy",
    "section": "Forms & Input",
    "answer": {
      "simple": "A label tells the user what an input field is for. It also makes the input easier to click — clicking the label text focuses the input!",
      "code": "<label for=\"email\">Your Email:</label>\n<input type=\"email\" id=\"email\">",
      "note": "The <code>for</code> attribute connects the label to the input via the input's <code>id</code>. Screen readers will say \"Your Email\" when the user focuses on that input."
    }
  },
  {
    "id": "html-17",
    "number": "17",
    "question": "What new input types did HTML5 add?",
    "difficulty": "medium",
    "section": "Forms & Input",
    "answer": {
      "simple": "HTML5 introduced several new input types like <code>email</code>, <code>number</code>, <code>date</code>, <code>color</code>, <code>range</code>, <code>tel</code>, and <code>url</code>.",
      "note": "The browser handles the validation for you — for example, the <code>email</code> type automatically checks for the @ sign."
    }
  },
  {
    "id": "html-18",
    "number": "18",
    "question": "What is the difference between <input type=\"submit\"> and <button>?",
    "difficulty": "medium",
    "section": "Forms & Input",
    "answer": {
      "simple": "Both can submit a form. But <code>&lt;button&gt;</code> is more powerful — you can put HTML inside it (like an icon + text). <code>&lt;input type=\"submit\"&gt;</code> can only show plain text.",
      "example": "❌ <code>&lt;input type=\"submit\" value=\"Send\"&gt;</code> — plain text only.<br>✅ <code>&lt;button&gt;🚀 Send Message&lt;/button&gt;</code> — can include emojis, icons, formatted text!",
      "exampleLabel": "Example 👇",
      "note": "Important: a <code>&lt;button&gt;</code> inside a form submits by default. If you don't want that, use <code>type=\"button\"</code>."
    }
  },
  {
    "id": "html-19",
    "number": "19",
    "question": "What do name, id, and placeholder do on an input?",
    "difficulty": "medium",
    "section": "Forms & Input",
    "answer": {
      "simple": "<strong>name</strong> is for the server, <strong>id</strong> is for JS/CSS and labels, and <strong>placeholder</strong> is for user hints.",
      "note": "Each one does something different 💡:<br><strong>name</strong> = the label for the data when you submit the form.<br><strong>id</strong> = a unique name for targeting via CSS/JS.<br><strong>placeholder</strong> = hint text inside the box that disappears when you start typing.",
      "example": "name = the address label on a package.<br>id = a unique tracking number.<br>placeholder = the \"write your message here\" hint.",
      "exampleLabel": "Analogy 📬"
    }
  },
  {
    "id": "html-20",
    "number": "20",
    "question": "What are <fieldset> and <legend>?",
    "difficulty": "medium",
    "section": "Forms & Input",
    "answer": {
      "simple": "<code>&lt;fieldset&gt;</code> draws a box around a group of related form fields. <code>&lt;legend&gt;</code> is the title of that group, shown at the top of the box.",
      "code": "<fieldset>\n  <legend>Delivery Address</legend>\n  <input type=\"text\" placeholder=\"Street\">\n  <input type=\"text\" placeholder=\"City\">\n</fieldset>",
      "note": "It helps users (especially screen reader users) understand that these fields belong together."
    }
  },
  {
    "id": "html-21",
    "number": "21",
    "question": "How does HTML5 form validation work?",
    "difficulty": "hard",
    "section": "Forms & Input",
    "answer": {
      "simple": "HTML5 can check if a form is filled correctly <em>before it's sent</em> — no JavaScript needed!",
      "example": "<code>required</code> — field can't be empty<br><code>minlength=\"5\"</code> — must be at least 5 characters<br><code>max=\"100\"</code> — number can't be more than 100<br><code>pattern=\"[A-Z]+\"</code> — must match this pattern<br><code>type=\"email\"</code> — must look like an email address",
      "exampleLabel": "Common validation attributes 👇",
      "note": "When the user clicks Submit, the browser checks everything and shows error messages automatically."
    }
  },
  {
    "id": "html-22",
    "number": "22",
    "question": "What is enctype=\"multipart/form-data\" and when do you need it?",
    "difficulty": "hard",
    "section": "Forms & Input",
    "answer": {
      "simple": "Whenever your form lets users upload a file, you must add <code>enctype=\"multipart/form-data\"</code> to your form tag. Without it, the file won't actually be sent!",
      "code": "<form method=\"POST\" enctype=\"multipart/form-data\">\n  <input type=\"file\" name=\"photo\">\n  <button>Upload</button>\n</form>",
      "note": "The default encoding only handles text. \"multipart/form-data\" packages the file as a proper upload that servers can read."
    }
  },
  {
    "id": "html-23",
    "number": "23",
    "question": "What is the alt attribute on images and why is it important?",
    "difficulty": "easy",
    "section": "Media & Links",
    "answer": {
      "simple": "<code>alt</code> is a text description of the image. It's shown when the image can't load, and read out loud by screen readers to blind users.",
      "example": "✅ Useful image: <code>alt=\"A golden retriever playing in the park\"</code><br>✅ Decorative image: <code>alt=\"\"</code> (empty is correct!)<br>❌ Never: <code>alt=\"image\"</code> or <code>alt=\"photo123.jpg\"</code> — that's useless.",
      "exampleLabel": "Rules 👇",
      "note": "Google also reads alt text to understand your images — it helps with SEO too!"
    }
  },
  {
    "id": "html-24",
    "number": "24",
    "question": "What is the difference between absolute and relative URLs?",
    "difficulty": "easy",
    "section": "Media & Links",
    "answer": {
      "simple": "<strong>Absolute URL</strong> = the full address (like a full home address). <strong>Relative URL</strong> = a shortcut address (like \"the room next door\").",
      "example": "Absolute: <code>https://mysite.com/images/logo.png</code> — works from anywhere.<br>Relative: <code>images/logo.png</code> — works only from pages on the same site.",
      "exampleLabel": "Example 🗺️",
      "note": "Use relative URLs for your own site's files. Use absolute URLs when linking to other websites."
    }
  },
  {
    "id": "html-25",
    "number": "25",
    "question": "What does target=\"_blank\" do and what danger does it create?",
    "difficulty": "medium",
    "section": "Media & Links",
    "answer": {
      "simple": "<code>target=\"_blank\"</code> opens the link in a new browser tab. The danger is that the new page can control your original page.",
      "example": "Always add <code>rel=\"noopener noreferrer\"</code> alongside it:<br><code>&lt;a href=\"...\" target=\"_blank\" rel=\"noopener noreferrer\"&gt;</code><br><br>This blocks the new page from accessing your page.",
      "exampleLabel": "The fix 🔐"
    }
  },
  {
    "id": "html-26",
    "number": "26",
    "question": "How do you add video and audio to a page in HTML5?",
    "difficulty": "medium",
    "section": "Media & Links",
    "answer": {
      "simple": "HTML5 has built-in <code>&lt;video&gt;</code> and <code>&lt;audio&gt;</code> tags — no Flash plugin needed anymore!",
      "code": "<video controls width=\"500\">\n  <source src=\"myvideo.mp4\" type=\"video/mp4\">\n  Your browser can't play this video.\n</video>",
      "note": "Useful attributes: <code>controls</code> (buttons), <code>autoplay</code> (auto-start), <code>muted</code> (silent), <code>loop</code> (repeat)."
    }
  },
  {
    "id": "html-27",
    "number": "27",
    "question": "What is the srcset attribute on images?",
    "difficulty": "medium",
    "section": "Media & Links",
    "answer": {
      "simple": "<code>srcset</code> lets you provide multiple versions of an image. The browser picks the right one based on screen size.",
      "code": "<img src=\"small.jpg\" srcset=\"small.jpg 400w, medium.jpg 800w, large.jpg 1200w\" alt=\"A landscape photo\">",
      "example": "Like a restaurant offering small, medium, and large coffees. The browser orders just the right size it needs — no waste!",
      "exampleLabel": "Analogy 📱"
    }
  },
  {
    "id": "html-28",
    "number": "28",
    "question": "What is the <picture> element and when do you use it?",
    "difficulty": "hard",
    "section": "Media & Links",
    "answer": {
      "simple": "<code>&lt;picture&gt;</code> lets you show a completely different image on small screens vs big screens — not just a smaller version, but a different photo altogether.",
      "code": "<picture>\n  <source media=\"(max-width: 600px)\" srcset=\"portrait.jpg\">\n  <source media=\"(min-width: 601px)\" srcset=\"landscape.jpg\">\n  <img src=\"landscape.jpg\" alt=\"Our team\">\n</picture>",
      "note": "Imagine a team photo. On desktop: wide group shot. On mobile: just the faces, cropped close-up. That's when <code>&lt;picture&gt;</code> shines."
    }
  },
  {
    "id": "html-29",
    "number": "29",
    "question": "What is the correct way to build an HTML table?",
    "difficulty": "easy",
    "section": "Tables",
    "answer": {
      "simple": "A proper HTML table uses <code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, and <code>&lt;td&gt;</code> tags.",
      "code": "<table>\n  <caption>Student Scores</caption>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Score</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Alice</td>\n      <td>95</td>\n    </tr>\n  </tbody>\n</table>",
      "note": "<code>&lt;caption&gt;</code> is the title, <code>&lt;thead&gt;</code> is the header, <code>&lt;tbody&gt;</code> is the content."
    }
  },
  {
    "id": "html-30",
    "number": "30",
    "question": "What is the difference between colspan and rowspan?",
    "difficulty": "medium",
    "section": "Tables",
    "answer": {
      "simple": "<code>colspan</code> = stretch a cell across multiple <strong>columns</strong>. <code>rowspan</code> = stretch a cell across multiple <strong>rows</strong>.",
      "example": "colspan = knocking down the wall between two rooms side by side.<br>rowspan = knocking down the floor/ceiling between two rooms above each other.",
      "exampleLabel": "Analogy 🏠"
    }
  },
  {
    "id": "html-31",
    "number": "31",
    "question": "Why should you NOT use tables for page layout?",
    "difficulty": "medium",
    "section": "Tables",
    "answer": {
      "simple": "Tables are for data (like spreadsheets), not for placing things on a page. Using tables for layout is like using a fork to eat soup!",
      "example": "🔇 Screen readers get confused.<br>📱 Tables don't work well on small screens.<br>🐌 Tables are slow for the browser to draw.<br><br>✅ Use <strong>CSS Flexbox</strong> or <strong>CSS Grid</strong> for layout instead!",
      "exampleLabel": "Why it's bad 🚫"
    }
  },
  {
    "id": "html-32",
    "number": "32",
    "question": "What does the viewport meta tag do?",
    "difficulty": "easy",
    "section": "Metadata & The <head>",
    "answer": {
      "simple": "It tells phones and tablets \"fit this page to my screen — don't zoom out so everything looks tiny!\"",
      "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
      "note": "Without this tag, mobile browsers will pretend the screen is 980px wide and zoom way out, making your text tiny."
    }
  },
  {
    "id": "html-33",
    "number": "33",
    "question": "Should <link> go in <head>, and <script> before </body>?",
    "difficulty": "medium",
    "section": "Metadata & The <head>",
    "answer": {
      "simple": "CSS (<code>&lt;link&gt;</code>) goes in <code>&lt;head&gt;</code> so the page looks right immediately. Old-style JS (<code>&lt;script&gt;</code>) went before <code>&lt;/body&gt;</code> so it didn't slow down loading.",
      "example": "Modern best practice: Put scripts in <code>&lt;head&gt;</code> but add <code>defer</code>:<br><code>&lt;script src=\"app.js\" defer&gt;&lt;/script&gt;</code>",
      "exampleLabel": "Modern best practice ✅"
    }
  },
  {
    "id": "html-34",
    "number": "34",
    "question": "What are Open Graph meta tags?",
    "difficulty": "medium",
    "section": "Metadata & The <head>",
    "answer": {
      "simple": "Open Graph tags control how your page looks when shared on social media (Facebook, Twitter, etc.) — the title, description, and preview image.",
      "code": "<meta property=\"og:title\" content=\"My Awesome Article\">\n<meta property=\"og:description\" content=\"A short summary...\">\n<meta property=\"og:image\" content=\"https://example.com/preview.jpg\">",
      "note": "Without them, social media might show no image or a random one from your page."
    }
  },
  {
    "id": "html-35",
    "number": "35",
    "question": "What is the difference between async and defer on scripts?",
    "difficulty": "hard",
    "section": "Metadata & The <head>",
    "answer": {
      "simple": "Both download the script without freezing the page. The difference is <em>when</em> the script runs.",
      "example": "<strong>defer</strong> = Download while loading, but WAIT until page is ready.<br><strong>async</strong> = Download while loading, run AS SOON AS downloaded.",
      "exampleLabel": "The difference 🏃"
    }
  },
  {
    "id": "html-36",
    "number": "36",
    "question": "What is the charset meta tag?",
    "difficulty": "easy",
    "section": "Metadata & The <head>",
    "answer": {
      "simple": "It tells the browser which character set to use when reading your file — basically \"how to turn the raw bytes of your file into letters.\"",
      "code": "<meta charset=\"UTF-8\">",
      "note": "Always use <strong>UTF-8</strong> — it supports all languages and emojis."
    }
  },
  {
    "id": "html-37",
    "number": "37",
    "question": "What are ARIA roles and when should you use them?",
    "difficulty": "medium",
    "section": "Accessibility (a11y)",
    "answer": {
      "simple": "ARIA roles tell screen readers what a custom element is supposed to be — like a name tag for elements that don't have built-in meaning.",
      "note": "Golden rule 🥇: First, ALWAYS try to use the right HTML tag. A <code>&lt;button&gt;</code> is always better than a <code>&lt;div role=\"button\"&gt;</code>."
    }
  },
  {
    "id": "html-38",
    "number": "38",
    "question": "What is aria-label, aria-labelledby, and aria-describedby?",
    "difficulty": "medium",
    "section": "Accessibility (a11y)",
    "answer": {
      "simple": "These attributes provide descriptive labels for elements that might not be clear to screen readers.",
      "example": "<code>aria-label</code> = direct label.<br><code>aria-labelledby</code> = point to another element for the label.<br><code>aria-describedby</code> = provide extra instructions.",
      "exampleLabel": "Examples 👇"
    }
  },
  {
    "id": "html-39",
    "number": "39",
    "question": "What is keyboard accessibility?",
    "difficulty": "medium",
    "section": "Accessibility (a11y)",
    "answer": {
      "simple": "Keyboard accessibility means your website can be used <em>without a mouse</em> — only a keyboard. This is essential for many users with disabilities.",
      "example": "Try navigating your site using only the <strong>Tab</strong>, <strong>Shift+Tab</strong>, and <strong>Enter/Space</strong> keys. Can you reach everything?",
      "exampleLabel": "How to test 🧪"
    }
  },
  {
    "id": "html-40",
    "number": "40",
    "question": "What is a \"skip to main content\" link?",
    "difficulty": "medium",
    "section": "Accessibility (a11y)",
    "answer": {
      "simple": "A hidden link at the very top of the page that lets keyboard users jump directly to the main content, skipping the navigation menu.",
      "code": "<a href=\"#main\" class=\"skip-link\">Skip to main content</a>\n...\n<main id=\"main\">...</main>",
      "note": "It's a quick win for accessibility, preventing users from having to Tab through every nav link on every page."
    }
  },
  {
    "id": "html-41",
    "number": "41",
    "question": "What is the difference between aria-hidden=\"true\" and display:none?",
    "difficulty": "hard",
    "section": "Accessibility (a11y)",
    "answer": {
      "simple": "<code>display:none</code> hides from everyone; <code>aria-hidden=\"true\"</code> hides only from screen readers.",
      "example": "Use <code>display:none</code> to hide closed modals.<br>Use <code>aria-hidden=\"true\"</code> for decorative icons that screen readers should ignore.",
      "exampleLabel": "When to use each 👇"
    }
  },
  {
    "id": "html-42",
    "number": "42",
    "question": "Why do you put lang=\"en\" on the <html> tag?",
    "difficulty": "easy",
    "section": "Accessibility (a11y)",
    "answer": {
      "simple": "It tells the browser and screen readers the page language, ensuring correct pronunciation and accent.",
      "note": "Without it, a French screen reader might read your English page with a French accent — very confusing!"
    }
  },
  {
    "id": "html-43",
    "number": "43",
    "question": "What is the difference between localStorage, sessionStorage, and cookies?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "<strong>localStorage</strong> stays forever; <strong>sessionStorage</strong> disappears when the tab closes; <strong>Cookies</strong> are small and sent to the server.",
      "note": "localStorage = whiteboard pen.<br>sessionStorage = sticky note.<br>Cookies = loyalty card."
    }
  },
  {
    "id": "html-44",
    "number": "44",
    "question": "What are data-* attributes?",
    "difficulty": "easy",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "<code>data-*</code> attributes let you store extra information directly on an HTML element that can be read with JavaScript.",
      "code": "<button data-user-id=\"42\" data-action=\"delete\">Delete</button>\n\n// In JS: button.dataset.userId // \"42\"",
      "note": "A shopping cart button can store the product ID in <code>data-product-id=\"101\"</code>."
    }
  },
  {
    "id": "html-45",
    "number": "45",
    "question": "What is <canvas> and how is it different from SVG?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "<strong>Canvas</strong> is pixel-based (like paint); <strong>SVG</strong> is vector-based (like lego blocks).",
      "example": "Canvas → games, fast animations.<br>SVG → icons, logos, charts (scalable).",
      "exampleLabel": "When to use which 👇"
    }
  },
  {
    "id": "html-46",
    "number": "46",
    "question": "What is IndexedDB vs localStorage?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "<strong>localStorage</strong> is a simple text-only notepad; <strong>IndexedDB</strong> is a full offline database.",
      "example": "localStorage → theme settings.<br>IndexedDB → thousands of offline notes.",
      "exampleLabel": "When to use each 👇"
    }
  },
  {
    "id": "html-47",
    "number": "47",
    "question": "What is the Shadow DOM?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "The Shadow DOM is a hidden, isolated part of the DOM that prevents styles and code from leaking out and affecting the rest of the page.",
      "note": "Imagine a house within a house 🏠 — it has its own rules completely separate from the outside."
    }
  },
  {
    "id": "html-48",
    "number": "48",
    "question": "What is the difference between reflow and repaint?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "<strong>Repaint</strong> redraws pixels (cheap); <strong>Reflow</strong> recalculates sizes and positions (expensive).",
      "example": "Repaint = painting the walls.<br>Reflow = rebuilding the whole floor plan.",
      "exampleLabel": "Analogy 🏗️",
      "note": "Avoid reflow where possible! Use CSS transforms for animations to keep things smooth."
    }
  },
  {
    "id": "html-49",
    "number": "49",
    "question": "What is a CDN?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "A CDN (Content Delivery Network) is a system of global servers that store copies of your files so users download from the nearest one.",
      "note": "Instead of one shop in NY serving the whole world, a CDN is like having a shop in every major city 🏪."
    }
  },
  {
    "id": "html-50",
    "number": "50",
    "question": "What is the Critical Rendering Path?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "It's the sequence of steps the browser takes (DOM → CSSOM → Render Tree → Layout → Paint) to turn files into pixels.",
      "example": "1. DOM (Structure)<br>2. CSSOM (Styles)<br>3. Render Tree (What to show)<br>4. Layout (Positions)<br>5. Paint (Pixels)",
      "exampleLabel": "The steps 👇"
    }
  },
  {
    "id": "html-51",
    "number": "51",
    "question": "What is lazy loading and how do you use it?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Lazy loading means waiting to load below-the-fold content until the user scrolls near it.",
      "code": "<img src=\"photo.jpg\" loading=\"lazy\" alt=\"A photo\">",
      "note": "Don't use lazy loading on things at the top of the page! ⚠️"
    }
  },
  {
    "id": "html-52",
    "number": "52",
    "question": "What is Content Security Policy (CSP)?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "CSP is a security rule that limits which sources the browser can load content and scripts from, preventing attacks like XSS.",
      "note": "It's like a bouncer at a club 🛡️ — only approved guests get in."
    }
  },
  {
    "id": "html-53",
    "number": "53",
    "question": "What are HTML entities like &amp; and < ?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Some characters have special meaning in HTML (like <code>&lt;</code> starts a tag). Entities let you <em>show</em> them as text.",
      "example": "<code>&amp;lt;</code> → &lt;<br><code>&amp;gt;</code> → &gt;<br><code>&amp;amp;</code> → &amp;<br><code>&amp;copy;</code> → ©",
      "exampleLabel": "Common entities 👇"
    }
  },
  {
    "id": "html-54",
    "number": "54",
    "question": "What is XSS (Cross-Site Scripting)?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "XSS is an attack where a hacker injects malicious scripts into your site to run in other users' browsers.",
      "note": "Fix: Always <strong>escape</strong> user input before putting it in HTML. Use <code>textContent</code> instead of <code>innerHTML</code>."
    }
  },
  {
    "id": "html-55",
    "number": "55",
    "question": "What is progressive enhancement?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Build the basic version first (HTML), then add styles (CSS), then logic (JS). It ensures the site works even if fancy features break.",
      "example": "Build a house that works without electricity (candlelight). Then add smart lighting. If the power goes out, the house still works.",
      "exampleLabel": "Analogy 🏗️"
    }
  },
  {
    "id": "html-56",
    "number": "56",
    "question": "Why should <script> tags go at the bottom of the page?",
    "difficulty": "easy",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Standard scripts stop the page from loading while they download. Putting them at the bottom lets the user see the page first.",
      "note": "Modern way: Just use <code>defer</code> and keep scripts in <code>&lt;head&gt;</code>."
    }
  },
  {
    "id": "html-57",
    "number": "57",
    "question": "What does rel=\"stylesheet\" do on a <link> tag?",
    "difficulty": "easy",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "It specifies that the linked file is a CSS stylesheet for the document.",
      "code": "<link rel=\"stylesheet\" href=\"style.css\">"
    }
  },
  {
    "id": "html-58",
    "number": "58",
    "question": "What is the difference between <ol>, <ul>, and <dl>?",
    "difficulty": "easy",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "<code>&lt;ul&gt;</code> is for bullet points; <code>&lt;ol&gt;</code> is for numbered lists; <code>&lt;dl&gt;</code> is for term-definition pairs.",
      "example": "ul: Shopping list. ol: Recipe steps. dl: Dictionary.",
      "exampleLabel": "Example 📋"
    }
  },
  {
    "id": "html-59",
    "number": "59",
    "question": "What is the <template> element?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "The <code>&lt;template&gt;</code> tag holds HTML that is invisible and inactive until you copy it with JavaScript to insert it into the page.",
      "note": "It's like a blank reusable form template 📋."
    }
  },
  {
    "id": "html-60",
    "number": "60",
    "question": "What is the difference between the DOM and the BOM?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "<strong>DOM</strong> is the HTML page content; <strong>BOM</strong> is the browser window (history, URL, resolution).",
      "example": "DOM: getElementById('title')<br>BOM: window.location.href",
      "exampleLabel": "Examples 👇"
    }
  },
  {
    "id": "html-61",
    "number": "61",
    "question": "What is the difference between innerHTML, textContent, and innerText?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "<code>innerHTML</code> (tags + text), <code>textContent</code> (raw text, safe), <code>innerText</code> (visible text only).",
      "note": "Use <code>textContent</code> when you just need plain text — it's safe and fast. 👍"
    }
  },
  {
    "id": "html-62",
    "number": "62",
    "question": "How should you use heading tags (h1–h6)?",
    "difficulty": "easy",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Use them in order (h1 → h2 → h3) to create a logical structure. Only use one h1 per page.",
      "note": "h1 = book title. h2 = chapter. h3 = section. 📘"
    }
  },
  {
    "id": "html-63",
    "number": "63",
    "question": "What does <meta name=\"robots\"> do?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "It tells search engine bots whether they should index your page or follow its links.",
      "example": "index, follow (default)<br>noindex (don't show in search)<br>nofollow (don't trust links)",
      "exampleLabel": "Common values 🤖"
    }
  },
  {
    "id": "html-64",
    "number": "64",
    "question": "What is resource hinting (preload, prefetch, preconnect)?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Hints for the browser to prepare resources early.",
      "example": "preload: Download now, needed soon.<br>prefetch: Download later, might need on next page.<br>preconnect: Connect to server early.",
      "exampleLabel": "The three hints 👇"
    }
  },
  {
    "id": "html-65",
    "number": "65",
    "question": "What is the <details> and <summary> element?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "A built-in accordion that works without JS.",
      "code": "<details>\n  <summary>Click to see more info</summary>\n  <p>Here is the hidden content!</p>\n</details>",
      "note": "Great for FAQs! 💁‍♂️"
    }
  },
  {
    "id": "html-66",
    "number": "66",
    "question": "What is the <dialog> element?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "A native browser modal/popup that handles escape keys and focus automatically.",
      "code": "<dialog id=\"myDialog\">\n  <p>Are you sure?</p>\n  <button onclick=\"myDialog.close()\">Close</button>\n</dialog>\n\n<button onclick=\"myDialog.showModal()\">Open</button>"
    }
  },
  {
    "id": "html-67",
    "number": "67",
    "question": "What is the <progress> vs <meter> element?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "<code>&lt;progress&gt;</code> is for completion (0 to 100); <code>&lt;meter&gt;</code> is for a measurement within a range (gauge).",
      "example": "progress: File upload.<br>meter: Disk space.",
      "exampleLabel": "Examples 👇"
    }
  },
  {
    "id": "html-68",
    "number": "68",
    "question": "What are Web Components?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "A suite of technologies (Shadow DOM, Custom Elements) that let you create reusable, encapsulated HTML tags that work everywhere.",
      "note": "Framework independent! A Web Component made in 2024 will still work in 2030. 🧩"
    }
  },
  {
    "id": "html-69",
    "number": "69",
    "question": "What is the difference between HTML and XHTML?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "XHTML is a stricter, XML-based version of HTML where everything must be lowercase and closed.",
      "note": "One single mistake can break an XHTML page. HTML5 is much more forgiving. ✅"
    }
  },
  {
    "id": "html-70",
    "number": "70",
    "question": "What is the contenteditable attribute?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "It makes any HTML element directly editable by the user in the browser.",
      "code": "<div contenteditable=\"true\">\n  Click and type here!\n</div>",
      "note": "Used in rich text editors. Always sanitize what you save! ⚠️"
    }
  },
  {
    "id": "html-71",
    "number": "71",
    "question": "What is CORS?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "CORS (Cross-Origin Resource Sharing) is a security protocol that specifies which origins can access a server's resources.",
      "note": "It protects against malicious sites reading private data from other tabs. 🚪"
    }
  },
  {
    "id": "html-72",
    "number": "72",
    "question": "What is the autocomplete attribute on forms?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "It helps the browser offer relevant auto-fill suggestions (emails, names, passwords).",
      "code": "<input type=\"email\" autocomplete=\"email\">",
      "note": "Essential for good mobile UX! 📱"
    }
  },
  {
    "id": "html-73",
    "number": "73",
    "question": "What is <input type=\"hidden\">?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "A form field that isn't visible to the user but sends its value to the server on submit.",
      "note": "often used for security tokens (CSRF). 🔐"
    }
  },
  {
    "id": "html-74",
    "number": "74",
    "question": "What does tabindex do?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "It controls the order in which elements receive focus when navigating with the Tab key.",
      "example": "0: Add to order.<br>-1: Remove but keep JS-focusable.<br>1+: Avoid using these!",
      "exampleLabel": "Values 👇"
    }
  },
  {
    "id": "html-75",
    "number": "75",
    "question": "What is the <base> element used for?",
    "difficulty": "easy",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Sets a universal starting URL for all relative links on a page.",
      "code": "<base href=\"https://site.com/docs/\">"
    }
  },
  {
    "id": "html-76",
    "number": "76",
    "question": "What is structured data / schema markup?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Hidden code that tells Google what your content is so it can show rich snippets (stars, prices) in search results.",
      "note": "Uses JSON-LD format. Very good for SEO! ⭐"
    }
  },
  {
    "id": "html-77",
    "number": "77",
    "question": "What is <mark>, <ins>, and <del>?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "<code>&lt;mark&gt;</code> for highlighting, <code>&lt;ins&gt;</code> for additions, <code>&lt;del&gt;</code> for deletions.",
      "example": "Sale! <del>$100</del> <ins>$80</ins>",
      "exampleLabel": "Example 🦷"
    }
  },
  {
    "id": "html-78",
    "number": "78",
    "question": "What is the <time> element?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Wraps a date/time and adds a machine-readable format.",
      "code": "<time datetime=\"2024-12-25\">Christmas</time>",
      "note": "Helps search engines and calendar apps understand your dates. 📆"
    }
  },
  {
    "id": "html-79",
    "number": "79",
    "question": "What is the difference between WebSockets and SSE?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "SSE is one-way (server to browser); WebSockets is two-way (full-duplex).",
      "example": "SSE: Stock prices.<br>WebSockets: Live chat.",
      "exampleLabel": "Use cases 👇"
    }
  },
  {
    "id": "html-80",
    "number": "80",
    "question": "What does the <abbr> tag do?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Specifies an abbreviation; the browser shows the full meaning on hover.",
      "code": "<abbr title=\"HyperText Markup Language\">HTML</abbr>"
    }
  },
  {
    "id": "html-81",
    "number": "81",
    "question": "What is the Popover API?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "A new HTML way to make popups and tooltips that handles focus and closing without any JS.",
      "code": "<button popovertarget=\"my-tip\">Info</button>\n<div id=\"my-tip\" popover>Hello!</div>"
    }
  },
  {
    "id": "html-82",
    "number": "82",
    "question": "What is the difference between <iframe>, <embed>, and <object>?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "iframe is for webpages; embed is for simple external content (PDFs); object is older and complex with fallbacks.",
      "note": "99% of the time, just use <code>&lt;iframe&gt;</code>. ✅"
    }
  },
  {
    "id": "html-83",
    "number": "83",
    "question": "What is the sandbox attribute on iframes?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "A security feature that limits what the iframe can do (block scripts, forms, popups).",
      "note": "It's like putting the iframe in jail 🚔 to protect your site."
    }
  },
  {
    "id": "html-84",
    "number": "84",
    "question": "What HTML tags are deprecated and should be avoided?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Avoid old style-only tags like <code>&lt;font&gt;</code>, <code>&lt;center&gt;</code>, <code>&lt;marquee&gt;</code>, and <code>&lt;blink&gt;</code>.",
      "note": "Use CSS for all styling! 🎨"
    }
  },
  {
    "id": "html-85",
    "number": "85",
    "question": "What are Core Web Vitals and how does HTML affect them?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "LCP, CLS, and INP. HTML affects them through image sizes, script loading, and layout stability.",
      "note": "Always define <code>width</code> and <code>height</code> on images to prevent the page from jumping! ⏱️"
    }
  },
  {
    "id": "html-86",
    "number": "86",
    "question": "What is the inert attribute?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Makes a whole section of the page non-interactive (can't click, can't tab).",
      "note": "Perfect for hiding background content when a modal is open. 🚫"
    }
  },
  {
    "id": "html-87",
    "number": "87",
    "question": "What is the View Transitions API?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "A browser feature that automatically animates between page states or pages.",
      "note": "Makes websites feel like high-end apps with smooth fades and slides. ✨"
    }
  },
  {
    "id": "html-88",
    "number": "88",
    "question": "What is the difference between <q>, and <blockquote>?",
    "difficulty": "easy",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "<code>&lt;q&gt;</code> is for short inline quotes; <code>&lt;blockquote&gt;</code> is for separate block-level quotes.",
      "note": "The browser adds quotes to <code>&lt;q&gt;</code> automatically! 💬"
    }
  },
  {
    "id": "html-89",
    "number": "89",
    "question": "What is the spellcheck attribute?",
    "difficulty": "easy",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Turns the browser's red-squiggly spellchecker on or off for editable fields.",
      "code": "<textarea spellcheck=\"true\"></textarea>"
    }
  },
  {
    "id": "html-90",
    "number": "90",
    "question": "What is the difference between an SPA, MPA, and SSR?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "MPA reloads the whole page; SPA swaps content with JS; SSR Pre-renders HTML on the server.",
      "note": "Next.js uses SSR to give the best of SPAs and MPAs. 🌐"
    }
  },
  {
    "id": "html-91",
    "number": "91",
    "question": "How do you make a link that opens an email?",
    "difficulty": "easy",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Use <code>mailto:</code> followed by the address.",
      "code": "<a href=\"mailto:hello@site.com\">Email us</a>"
    }
  },
  {
    "id": "html-92",
    "number": "92",
    "question": "What is the difference between <caption> and <title>?",
    "difficulty": "easy",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "caption is for tables (visible); title is for the document (shown in browser tab).",
      "note": "Don't confuse them! One is for data, one is for SEO. 📘"
    }
  },
  {
    "id": "html-93",
    "number": "93",
    "question": "What is Declarative Shadow DOM?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "A way to define Shadow DOM directly in HTML, allowing servers to render isolated components without JavaScript.",
      "note": "The holy grail for Web Components and SSR! 🏗️"
    }
  },
  {
    "id": "html-94",
    "number": "94",
    "question": "What is the HTML Living Standard?",
    "difficulty": "medium",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "The modern way HTML is maintained — as a continuously updated document rather than fixed versions.",
      "note": "Maintained by the WHATWG group. 📜"
    }
  },
  {
    "id": "html-95",
    "number": "95",
    "question": "What is the translate attribute?",
    "difficulty": "easy",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Tells translation tools whether they should translate the text inside.",
      "code": "<span translate=\"no\">BrandName</span>"
    }
  },
  {
    "id": "html-96",
    "number": "96",
    "question": "What is the fetchpriority attribute?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Tells the browser which images or scripts to download first.",
      "code": "<img src=\"hero.jpg\" fetchpriority=\"high\">",
      "note": "High priority hero images improve your LCP score! 💪"
    }
  },
  {
    "id": "html-97",
    "number": "97",
    "question": "What is the Mutation Observer API?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "A JS API that watches your HTML for changes (adding elements, changing attributes).",
      "note": "Like a security camera for your DOM. 👁️"
    }
  },
  {
    "id": "html-98",
    "number": "98",
    "question": "What is the Intersection Observer API?",
    "difficulty": "hard",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "A JS API that tells you when elements enter or leave the screen.",
      "note": "Used for 'scroll reveal' animations and lazy loading. ✨"
    }
  },
  {
    "id": "html-99",
    "number": "99",
    "question": "How do you add a favicon to a webpage?",
    "difficulty": "easy",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "Add a link tag with <code>rel=\"icon\"</code> in your <code>&lt;head&gt;</code>.",
      "code": "<link rel=\"icon\" href=\"favicon.ico\">"
    }
  },
  {
    "id": "html-100",
    "number": "100",
    "question": "What is the difference between a class and an id in HTML?",
    "difficulty": "easy",
    "section": "Advanced & HTML5 Features",
    "answer": {
      "simple": "id is unique (one per page); class is a group (many per page).",
      "note": "IDs are for passports 🎫; Classes are for team jerseys 👕."
    }
  }
];
