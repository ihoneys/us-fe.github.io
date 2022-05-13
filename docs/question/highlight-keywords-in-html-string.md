---
tag:
  - Coding
  - JavaScript
  - Algorithm
  - medium

---
  
# highlight keywords in HTML string

Suppose you are implementing an auto-complete in search input.

When keywords are typed, you need to **highlight the keywords**, how would you do that?

To simplify things, you need to create a function `highlightKeywords(html:string, keywords: string[])`, which wraps the keywords in html string, with `<em>` tag.

Here is an example.

```js
highlightKeywords(
  'Hello FrontEnd Lovers', 
  ['Hello', 'Front', 'JavaScript']
)
// '<em>Hello</em> <em>Front</em>End Lovers'
```

Pay attention to the overlapping and adjacent case. You should use the least tags as possible.

```js
highlightKeywords(
  'Hello FrontEnd Lovers', 
  ['Front', 'End', 'JavaScript']
)
// 'Hello <em>FrontEnd</em> Lovers'

highlightKeywords(
  'Hello FrontEnd Lovers', 
  ['Front', 'FrontEnd', 'JavaScript']
)
// 'Hello <em>FrontEnd</em> Lovers'
```

note that `space` should not be included.


[Source From](https://bigfrontend.dev/problem/highlight-keywords-in-HTML-string)

  