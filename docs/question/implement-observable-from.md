---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# implement Observable.from()

This is a follow-up on [57\. create an Observable](https://bigfrontend.dev/problem/create-an-Observable).

Suppose you have solved [57\. create an Observable](https://bigfrontend.dev/problem/create-an-Observable), here you are asked to implement a creation operator `from()`.

From the [document](https://rxjs-dev.firebaseapp.com/api/index/function/from), `from()`

> Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.

Your `from()` should accept all above types.

```js
from([1,2,3]).subscribe(console.log);
// 1
// 2
// 3
```

**Note**

1.  Observable is already given for you, no need to create it.
2.  for the problem here, `Observable-like` means `Observable instance`. Though in real-world you should check `Symbol.observable`


[Source From](https://bigfrontend.dev/problem/implement-Observable-from)

  