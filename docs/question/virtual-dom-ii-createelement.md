---
tag:
  - Coding
  - JavaScript
  - Easy

---
  
# Virtual DOM II - createElement

## Question
> This is a follow-up on [113\. Virtual DOM I](https://bigfrontend.dev/problem/Virtual-DOM-I).

Suppose you have solved above problem, now let's take a look at [React.createElement()](https://reactjs.org/docs/react-api.html#createelement):

```js
React.createElement(
  type,
  [props],
  [...children]
)
```

1.  First argument is type, it could be set to Custom Component, but here in this problem, it would only be HTML tag name
2.  Second argument is props, here in this problem, it would only be the (common) camelCased HTML attributes
3.  the rest arguments are the children, which in React supports many data types, but in this problem, it only has the element type of MyElement, or string for TextNode.

**You are asked to create your own createElement() and render()**, so that following code could create the exact HTMLElement in [113\. Virtual DOM I](https://bigfrontend.dev/problem/Virtual-DOM-I).

```js
const h = createElement

render(h(
  'div',
  {},
  h('h1', {}, ' this is '),
  h(
    'p',
    { className: 'paragraph' },
    ' a ',
    h('button', {}, ' button '),
    ' from ',
    h('a', 
      { href: 'https://bfe.dev' }, 
      h('b', {}, 'BFE'),
      '.dev')
  )
))
```

**Notes**

1.  The goal of this problem is not to create the replica of React implementation, you can have your own object representation format other than the one in [113\. Virtual DOM I](https://bigfrontend.dev/problem/Virtual-DOM-I).
    
2.  Details about ref, key are ignored here, they will be put in other problems. Re-render is not covered here, it will be in another problem as well.

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 */

/**
 * @param { string } type - valid HTML tag name
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
  // your code here
}


/**
 * @param { MyElement }
 * @returns { HTMLElement } 
 */
function render(myElement) {
  // your code here
}
```
:::
    
::::


## Related

+ [Virtual DOM I](./Virtual-DOM-I)
+ [Virtual DOM III - Functional Component](./virtual-DOM-III-Functional-Component)
+ [Virtual DOM IV - JSX 1](./virtual-dom-iv-jsx-1)
+ [Virtual DOM V - JSX 2](./virtual-dom-v-jsx-2)
##  Source
[Source From](https://bigfrontend.dev/problem/virtual-dom-II-createElement)

  