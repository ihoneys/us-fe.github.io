---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# Virtual DOM IV - JSX 1

If you are using React, you must be familiar with [JSX](https://facebook.github.io/jsx/).

With JSX syntax support, transpilers are able to understand below non-standard code directly in JavaScript.

```js
<p> this is <button className="button">button</button> </p>
```

Then it is transpiled to standard JavaScript function calls.

```js
React.createElement("p", null,
  " this is ",
  React.createElement("button", { className: "button" }, "button"),
  " ");
```

> have a try at [TypeScript Playground](https://www.typescriptlang.org/play?#code/DwBwfABALgFglgZwoiwBGBXKUD2A7CAYwBsBDBBAOVIFsBTAXgCJNt8mxXc9gB6L-JD7ggA)

To illustrate how the transpilation works, let's start with a simple example.

```js
<a>bfe.dev</a>
```

First the parser will create an AST(Abstract Syntax Tree) from the code.

Open above code [in AST Explorer](https://astexplorer.net/#/gist/46044fc473a92974cd8f933efc7635f6/8a876a4240ecf38d64c0e0af3c693a1c54d80525), you can see the AST in the right pannel, roughly something like this:

```js
expression: JSXElement {
  openingElement: JSXOpeningElement {
    name: JSXIdentifier {
      name: "a"
    }
  }
  closingElement: JSXClosingElement {
    name: JSXIdentifier {
      name: "a"
    }
  }
  children: [
    JSXText {
      value: "bfe.dev"
    }
  ]
}
```

Obviously above AST follows the [JSX Spec](https://facebook.github.io/jsx/):

```js
JSXElement:
  JSXOpeningElement JSXChildren? JSXClosingElement

JSXOpeningElement:
  < JSXElementName JSXAttributes? >

JSXChildren:
  JSXChild JSXChildren?

JSXClosingElement:
  < / JSXElementName >

JSXChild:
  JSXText
  JSXElement
  { JSXChildExpression? }
```

With the above AST, it is fairly easy to generate code, we only need to traverse the AST and insert `React.createElement`:

```js
React.createElement("p", null,
  " this is ",
  React.createElement("button", { className: "button" }, "button"),
  " ");
```

Also instead of React method, we could use `h()` defined in [140\. Virtual DOM III - Functional Component](https://bigfrontend.dev/problem/virtual-DOM-III-Functional-Component) instead.

```js
h("p", null,
  " this is ",
  h("button", { className: "button" }, "button"),
  " ");
```

**Now, please create your own parse() and generate() to transpile JSX Element code**.

1.  please generate code which uses `h()`, `h()` is bundled with your code.
2.  Goal of this problem is not to recreate the full parser, so only need to support the minumum spec below:

```js
JSXElement:
  JSXOpeningElement JSXChildren? JSXClosingElement

JSXOpeningElement:
  < JSXElementName >

JSXChildren:
  JSXChild

JSXClosingElement:
  < / JSXElementName >

JSXChild:
  JSXText
```

*   you can choose not to follow the naming
*   there is no newlines in the input, you can ignore [the whitespace rules](https://github.com/facebook/react/pull/480#issuecomment-31296039)
*   all input tags are smallcase HTML tags

3.  for simplicity, the AST creating process with `parse()` won't be tested, rather `parse()` and `generate()` are tested together like this:

```js
const result = eval(generate(parse('<a>bfe.dev</a>')))
expect(result).toEqual(h('a', null, 'bfe.dev'))
```

4.  An error should be thrown if code is not valid JSXElement, for example, the JSXOpeningElement and JSXClosingElement might not be matched.
    
    > The test cases only cover some of the common errors.


[Source From](https://bigfrontend.dev/problem/virtual-dom-iv-jsx-1)

  