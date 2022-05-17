import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as u,a as n,b as a,w as o,F as r,d as s,e as c,o as d}from"./app.22a70bca.js";const k={},m=n("h1",{id:"create-a-fake-timer-settimeout",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-a-fake-timer-settimeout","aria-hidden":"true"},"#"),s(" create a fake timer(setTimeout)")],-1),v=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),h=n("code",null,"setTimeout",-1),b=s(" adds task in to a task queue to be handled later, the time actually is no accurate. ("),_={href:"https://javascript.info/event-loop",target:"_blank",rel:"noopener noreferrer"},f=s("Event Loop"),g=s(")."),w=n("p",null,"This is OK in general web application, but might be problematic in test.",-1),T=s("For example, at "),x={href:"https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option",target:"_blank",rel:"noopener noreferrer"},y=s("5. implement throttle() with leading & trailing option"),j=s(" we need to test the timer with more accurate approach."),C=s("Could you implement your own "),F=n("code",null,"setTimeout()",-1),D=s(" and "),I=n("code",null,"clearTimeout()",-1),q=s(" to be sync? so that they have "),A=n("strong",null,"accurate timing",-1),B=s(" for test. This is what "),E={href:"https://github.com/sinonjs/fake-timers",target:"_blank",rel:"noopener noreferrer"},N=s("FakeTimes"),G=s(" are for."),V=c(`<p>By &quot;accurate&quot;, it means <strong>suppose all functions cost no time</strong>, we start our function at time <code>0</code>, then <code>setTimeout(func1, 100)</code> would schedule <code>func1</code> exactly at <code>100</code>.</p><p>You need to replace <code>Date.now()</code> as well to provide the time.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">FakeTimer</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// setTimeout(), clearTimeout(), and Date.now() </span>
    <span class="token comment">// are replaced</span>
  <span class="token punctuation">}</span>

  <span class="token function">uninstall</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// restore the original APIs</span>
    <span class="token comment">// setTimeout(), clearTimeout() and Date.now()</span>
  <span class="token punctuation">}</span>

  <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// run all the schedule functions in order</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Your code is tested like this</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">const</span> fakeTimer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FakeTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fakeTimer<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> logs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   logs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arg<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">// log &#39;A&#39; at 100</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">)</span>
<span class="token function">clearTimeout</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token comment">// b is set but cleared</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>

<span class="token function">expect</span><span class="token punctuation">(</span>logs<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

fakeTimer<span class="token punctuation">.</span><span class="token function">uninstall</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Note</em></p><p>Only <code>Date.now()</code> is used when judging your code, you can ignore other time related apis.</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,8),L=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"FakeTimer"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"install"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// replace window.setTimeout, window.clearTimeout, Date.now"),s(`
    `),n("span",{class:"token comment"},"// with your implementation"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token function"},"uninstall"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// restore the original implementation of"),s(`
    `),n("span",{class:"token comment"},"// window.setTimeout, window.clearTimeout, Date.now"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token function"},"tick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// run the scheduled functions without waiting"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=c('<h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2><ul><li><a href="./create-a-fake-timer-setInterval">create a fake timer (setInterval)</a></li></ul><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>',3),O={href:"https://bigfrontend.dev/problem/create-a-fake-timer",target:"_blank",rel:"noopener noreferrer"},Y=s("Source From");function K(P,Q){const e=t("ExternalLinkIcon"),i=t("CodeGroupItem"),p=t("CodeGroup");return d(),u(r,null,[m,v,n("p",null,[h,b,n("a",_,[f,a(e)]),g]),w,n("p",null,[T,n("a",x,[y,a(e)]),j]),n("p",null,[C,F,D,I,q,A,B,n("a",E,[N,a(e)]),G]),V,a(p,null,{default:o(()=>[a(i,{title:"javascript",active:""},{default:o(()=>[L]),_:1})]),_:1}),S,n("p",null,[n("a",O,[Y,a(e)])])],64)}var H=l(k,[["render",K],["__file","create-a-fake-timer.html.vue"]]);export{H as default};
