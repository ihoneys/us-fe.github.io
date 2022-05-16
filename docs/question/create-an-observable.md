---
tag:
  - Coding
  - JavaScript
  - medium

---
  
# create an Observable

## Question
Have you ever used [RxJS](https://rxjs-dev.firebaseapp.com/guide/overview) before? The most important concept in it is [Observable](https://rxjs-dev.firebaseapp.com/guide/observable) and [Observer](https://rxjs-dev.firebaseapp.com/guide/observer).

Observable defines how values are delivered to Observer. Observer is just a set of callbacks.

Let's look at the code.

```js
const observer = {
  next: (value) => {
     console.log('we got a value', value)
  },
  error: (error) => {
    console.log('we got an error', error)
  },
  complete: () => {
    console.log('ok, no more values')
  }
}
```

Above is an Observer which is pretty clear about what it is doing.

Then we could attach this Observer to some Observable. Observable feeds this observer with values or errors.

```js
const observable = new Observable((subscriber)=> {
  subscriber.next(1)
  subscriber.next(2)
  setTimeout(() => {
    subscriber.next(3)
    subscriber.next(4)
    subscriber.complete()
  }, 100)
})
```

The code plainly says when is a subscriber is attached,

1.  subscriber is fed with a value `1`
2.  subscriber is then fed with a value `2`
3.  wait 100 ms
4.  subscriber is fed with `3`
5.  subscriber is fed with `4`
6.  no more values for subscriber

Now if we attach above `observer` to `observable`, `next` and `complete` of subscriber are called in order.(be aware that there is a delay between 2 and 3)

```js
const sub = observable.subscribe(subscriber)
// we got a value 1
// we got a value 2

// we got a value 3
// we got a value 4
// ok, no more values
```

Notice `subscribe()` return a [Subscription](https://rxjs-dev.firebaseapp.com/guide/subscription) which could be used to stop listening to the value delivery.

```js
const sub = observable.subscribe(subscriber)
setTimeout(() => {
  // ok we only subscribe for 100ms
  sub.unsubscribe()
}, 100)
```

So this is the basic idea of Observable and Observer. There will be a few more interesting follow-up problems.

**Now you are asked to implement a basic Observable class**, which makes above possible.

Some extra requirements are listed here.

1.  `error` and `complete` can only be delivered once, `next/error/complete` after `error/complete` should not work
2.  for a subscriber object, `next/error/complete` callback are all optional. if a function is passed as observer, it is treated as `next`.
3.  should support multiple subscription

_Further Reading_

[https://github.com/tc39/proposal-observable](https://github.com/tc39/proposal-observable)

## Code
:::: code-group
::: code-group-item javascript:active
```javascript
class Observable {
  
  constructor(setup) {
    
  }
 
  subscribe(subscriber) {
    
  }
}
```
:::
    
::::


## Related

+ [implement Observable.from()](./implement-Observable-from)
+ [implement Observable Subject](./implement-Observable-Subject)
##  Source
[Source From](https://bigfrontend.dev/problem/create-an-Observable)

  