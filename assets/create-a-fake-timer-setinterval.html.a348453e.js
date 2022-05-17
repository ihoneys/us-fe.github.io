import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as u,a as n,b as a,w as o,F as r,d as s,e as c,o as d}from"./app.22a70bca.js";const k={},m=n("h1",{id:"create-a-fake-timer-setinterval",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-a-fake-timer-setinterval","aria-hidden":"true"},"#"),s(" create a fake timer (setInterval)")],-1),v=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),h=s("This is a follow-up on "),b={href:"https://bigfrontend.dev/problem/create-a-fake-timer",target:"_blank",rel:"noopener noreferrer"},_=s("36. create a fake timer(setTimeout)"),f=s("Like "),w=n("code",null,"setTimeout",-1),g=s(", "),y=n("code",null,"setInterval",-1),I=s(" also is not accurate. (please refer "),x={href:"https://javascript.info/event-loop",target:"_blank",rel:"noopener noreferrer"},T=s("Event Loop"),j=s(" for detail)."),C=n("p",null,"This is OK in general web application, but might be problematic in test.",-1),F=s("Could you implement your own "),D=n("code",null,"setInterval()",-1),q=s(" and "),B=n("code",null,"clearInterval()",-1),E=s(" to be sync? so that they have "),N=n("strong",null,"accurate timing",-1),G=s(" for test. This is what "),L={href:"https://github.com/sinonjs/fake-timers",target:"_blank",rel:"noopener noreferrer"},S=s("FakeTimes"),V=s(" are for."),A=c(`<p>By &quot;accurate&quot;, it means <strong>suppose all functions cost no time</strong>, we start our function at time <code>0</code>, then <code>setInterval(func1, 100)</code> would schedule <code>func1</code> exactly at <code>100, 200, 300 .etc</code>.</p><p>You need to replace <code>Date.now()</code> as well to provide the time.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">FakeTimer</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// replace window.setInterval, window.clearInterval, Date.now</span>
    <span class="token comment">// with your implementation</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">uninstall</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// restore the original implementation of</span>
    <span class="token comment">// window.setInterval, window.clearInterval, Date.now</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// run the scheduled functions without waiting</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>** Be careful about the infinite loops **. Your code is tested like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> fakeTimer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FakeTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fakeTimer<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> logs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    logs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">clearInterval</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  count <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token comment">// log &#39;A&#39; at every 100, stop at 200</span>
fakeTimer<span class="token punctuation">.</span><span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
fakeTimer<span class="token punctuation">.</span><span class="token function">uninstall</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token function">expect</span><span class="token punctuation">(</span>logs<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Note</em></p><p>Only <code>Date.now()</code> is used when judging your code, you can ignore other time related apis.</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,8),O=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"FakeTimer"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"install"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// replace window.setInterval, window.clearInterval, Date.now"),s(`
    `),n("span",{class:"token comment"},"// with your implementation"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token function"},"uninstall"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// restore the original implementation of"),s(`
    `),n("span",{class:"token comment"},"// window.setInterval, window.clearInterval, Date.now"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  
  `),n("span",{class:"token function"},"tick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// run the scheduled functions without waiting"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=c('<h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2><ul><li><a href="./create-a-fake-timer">create a fake timer(setTimeout)</a></li></ul><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>',3),K={href:"https://bigfrontend.dev/problem/create-a-fake-timer-setInterval",target:"_blank",rel:"noopener noreferrer"},Q=s("Source From");function R(z,H){const e=t("ExternalLinkIcon"),i=t("CodeGroupItem"),l=t("CodeGroup");return d(),u(r,null,[m,v,n("p",null,[h,n("a",b,[_,a(e)])]),n("p",null,[f,w,g,y,I,n("a",x,[T,a(e)]),j]),C,n("p",null,[F,D,q,B,E,N,G,n("a",L,[S,a(e)]),V]),A,a(l,null,{default:o(()=>[a(i,{title:"javascript",active:""},{default:o(()=>[O]),_:1})]),_:1}),Y,n("p",null,[n("a",K,[Q,a(e)])])],64)}var P=p(k,[["render",R],["__file","create-a-fake-timer-setinterval.html.vue"]]);export{P as default};
