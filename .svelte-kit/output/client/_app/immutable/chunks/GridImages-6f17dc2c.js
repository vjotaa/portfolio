import{S as y,i as G,s as I,k as u,l as f,m as k,h as _,n,b as h,B as g,K as N,e as m,J as d,a as q,c as D,D as p}from"./index-abf3d057.js";function v(i,e,a){const r=i.slice();return r[2]=e[a],r}function E(i){let e,a;return{c(){e=u("img"),this.h()},l(r){e=f(r,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){n(e,"class","rounded card svelte-14yadnn"),d(e.src,a=i[2].src)||n(e,"src",a),n(e,"alt","img")},m(r,l){h(r,e,l)},p(r,l){l&2&&!d(e.src,a=r[2].src)&&n(e,"src",a)},d(r){r&&_(e)}}}function M(i){let e,a,r,l,t,c;return{c(){e=u("a"),a=u("img"),l=q(),this.h()},l(s){e=f(s,"A",{href:!0,target:!0,rel:!0});var o=k(e);a=f(o,"IMG",{class:!0,src:!0,alt:!0}),l=D(o),o.forEach(_),this.h()},h(){n(a,"class","rounded card svelte-14yadnn"),d(a.src,r=i[2].src)||n(a,"src",r),n(a,"alt","img"),n(e,"href",t=i[2].url),n(e,"target",c=i[2].noRedirect?"_self":"_blank"),n(e,"rel","noreferrer")},m(s,o){h(s,e,o),p(e,a),p(e,l)},p(s,o){o&2&&!d(a.src,r=s[2].src)&&n(a,"src",r),o&2&&t!==(t=s[2].url)&&n(e,"href",t),o&2&&c!==(c=s[2].noRedirect?"_self":"_blank")&&n(e,"target",c)},d(s){s&&_(e)}}}function b(i){let e;function a(t,c){return t[1].url?E:M}let r=a(i),l=r(i);return{c(){l.c(),e=m()},l(t){l.l(t),e=m()},m(t,c){l.m(t,c),h(t,e,c)},p(t,c){r===(r=a(t))&&l?l.p(t,c):(l.d(1),l=r(t),l&&(l.c(),l.m(e.parentNode,e)))},d(t){l.d(t),t&&_(e)}}}function R(i){let e,a,r=i[1],l=[];for(let t=0;t<r.length;t+=1)l[t]=b(v(i,r,t));return{c(){e=u("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=f(t,"DIV",{class:!0});var c=k(e);for(let s=0;s<l.length;s+=1)l[s].l(c);c.forEach(_),this.h()},h(){n(e,"class",a="grid lg:grid-cols-"+i[0]+" md:grid-cols-2 max-sm:grid-cols-1 gap-10 svelte-14yadnn")},m(t,c){h(t,e,c);for(let s=0;s<l.length;s+=1)l[s].m(e,null)},p(t,[c]){if(c&2){r=t[1];let s;for(s=0;s<r.length;s+=1){const o=v(t,r,s);l[s]?l[s].p(o,c):(l[s]=b(o),l[s].c(),l[s].m(e,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=r.length}c&1&&a!==(a="grid lg:grid-cols-"+t[0]+" md:grid-cols-2 max-sm:grid-cols-1 gap-10 svelte-14yadnn")&&n(e,"class",a)},i:g,o:g,d(t){t&&_(e),N(l,t)}}}function S(i,e,a){let{gridNumber:r}=e,{photos:l}=e;return i.$$set=t=>{"gridNumber"in t&&a(0,r=t.gridNumber),"photos"in t&&a(1,l=t.photos)},[r,l]}class B extends y{constructor(e){super(),G(this,e,S,R,I,{gridNumber:0,photos:1})}}export{B as G};