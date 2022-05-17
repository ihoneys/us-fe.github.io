import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,c as l,a as n,b as e,w as o,F as p,d as s,e as u,o as d}from"./app.22a70bca.js";const m={},k=n("h1",{id:"semver-compare",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#semver-compare","aria-hidden":"true"},"#"),s(" semver compare")],-1),v=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),_=s("Please implement a function to compare 2 "),h={href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"},b=s("semver"),g=s(" strings."),f=u(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">compare</span><span class="token punctuation">(</span><span class="token string">&#39;12.1.0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;12.0.9&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 1, meaning first one is greater</span>

<span class="token function">compare</span><span class="token punctuation">(</span><span class="token string">&#39;12.1.0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;12.1.2&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// -1, meaning latter one is greater</span>

<span class="token function">compare</span><span class="token punctuation">(</span><span class="token string">&#39;5.0.1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5.0.1&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 0, meaning they are equal.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,2),x=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"v1"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"v2"),s(`
 * `),n("span",{class:"token keyword"},"@returns"),s(` 0 | 1 | -1
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"compare"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("v1"),n("span",{class:"token punctuation"},","),s(" v2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("pre",null,[n("code",null,`::: code-group-item typescript
`)],-1),C=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"compare"),n("span",{class:"token punctuation"},"("),s("v1"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},","),s(" v2"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("p",null,":::",-1),w=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),G={href:"https://bigfrontend.dev/problem/semver-compare",target:"_blank",rel:"noopener noreferrer"},I=s("Source From");function N(V,q){const t=a("ExternalLinkIcon"),c=a("CodeGroupItem"),r=a("CodeGroup");return d(),l(p,null,[k,v,n("p",null,[_,n("a",h,[b,e(t)]),g]),f,e(r,null,{default:o(()=>[e(c,{title:"javascript",active:""},{default:o(()=>[x]),_:1}),y,C,j]),_:1}),w,n("p",null,[n("a",G,[I,e(t)])])],64)}var F=i(m,[["render",N],["__file","semver-compare.html.vue"]]);export{F as default};
