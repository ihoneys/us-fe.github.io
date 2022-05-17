import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as i,a as n,b as a,w as c,F as r,d as s,e as o,o as d}from"./app.22a70bca.js";const m={},k=n("h1",{id:"implement-a-stack-by-using-queue",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#implement-a-stack-by-using-queue","aria-hidden":"true"},"#"),s(" Implement a Stack by using Queue")],-1),v=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),b=s("This is reversed problem of "),h={href:"https://bigfrontend.dev/problem/implement-a-queue-by-using-stack",target:"_blank",rel:"noopener noreferrer"},f=s("13. Implement a Queue by using Stack"),g=o(`<p>In JavaScript, we could use array to work as both a Stack or a queue.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// now array is [1, 2, 3, 4, 5]</span>
arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 5, now the array is [1, 2, 3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Above code is a Stack, while below is a Queue</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>

arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment">// now the array is [1, 2, 3, 4, 5]</span>
arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1, now the array is [2, 3, 4, 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>now suppose you have a Queue, which has only follow interface:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* add element to queue, similar to Array.prototype.push */</span> <span class="token punctuation">}</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* get the head element*/</span> <span class="token punctuation">}</span>
  <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* remove the head element, similar to Array.prototype.pop */</span> <span class="token punctuation">}</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* count of elements */</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Could you implement a Stack by using only above Queue? A Stack must have following interface</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span>
  <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* add element to stack */</span> <span class="token punctuation">}</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* get the top element */</span> <span class="token punctuation">}</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* remove the top element */</span><span class="token punctuation">}</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* count of elements */</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>note</em></p><p>you can only use Queue as provided. Don&#39;t use Array, it is not what this is for.</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,11),_=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},`/* you can use this Queue which is bundled together with your code
class Queue {
  enqueue(element) {
    // add new element to the queue
  }
  peek() { 
    // return the head element
  }
  dequeue() { 
    // remove head element from the queue
  }
  size() { 
    // return the queue size
  }
}
*/`),s(`


`),n("span",{class:"token comment"},"// you need to complete the following Stack, using only Queue"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Stack"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"element"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// push an element into the stack"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"peek"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(` 
    `),n("span",{class:"token comment"},"// get the top element "),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(` 
    `),n("span",{class:"token comment"},"// remove top element from stack"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(` 
    `),n("span",{class:"token comment"},"// return count of elements"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=o('<h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2><ul><li><a href="./implement-a-queue-by-using-stack">Implement a Queue by using Stack</a></li></ul><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>',3),w={href:"https://bigfrontend.dev/problem/Implement-a-Stack-by-using-Queue",target:"_blank",rel:"noopener noreferrer"},q=s("Source From");function x(j,S){const t=e("ExternalLinkIcon"),p=e("CodeGroupItem"),u=e("CodeGroup");return d(),i(r,null,[k,v,n("blockquote",null,[n("p",null,[b,n("a",h,[f,a(t)])])]),g,a(u,null,{default:c(()=>[a(p,{title:"javascript",active:""},{default:c(()=>[_]),_:1})]),_:1}),y,n("p",null,[n("a",w,[q,a(t)])])],64)}var C=l(m,[["render",x],["__file","implement-a-stack-by-using-queue.html.vue"]]);export{C as default};