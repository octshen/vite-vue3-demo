import{d as e,c as t,o as r,r as o,a as n,b as s,e as a,f as c,_ as i}from"./vendor.fc1a8cdd.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const o=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,s)=>{const a=new URL(e,o);if(self[t].moduleMap[a])return r(self[t].moduleMap[a]);const c=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){s(new Error(`Failed to import: ${e}`)),n(i)},onload(){r(self[t].moduleMap[a]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");var m=e({name:"App"});let u;m.render=function(e,n,s,a,c,i){const m=o("router-view");return r(),t(m)};const d={},l=[{path:"/",name:"Home",component:function(e,t){if(!t)return e();if(void 0===u){const e=document.createElement("link").relList;u=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in d)return;d[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":u,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>__import__("./home.4bebbdfc.js")),["./assets/home.4bebbdfc.js","./assets/vendor.fc1a8cdd.js"])}],p=n({history:s(),routes:l}),f={count:0};var h=a({state:()=>f,mutations:{increment(e){e.count++}},actions:{increment({commit:e}){e("increment")}},getters:{double:e=>2*e.count}});const v=c(m);v.use(i),v.use(p).use(h).mount("#app");
