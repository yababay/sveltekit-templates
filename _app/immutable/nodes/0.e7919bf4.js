import{s as B,c as D,n as H,d as ie,e as te,u as le,g as ne,f as re}from"../chunks/scheduler.a7dff244.js";import{S as O,i as V,g,s as A,m as I,h as k,j as N,c as M,n as S,f as m,x as R,k as _,a as p,y as C,o as G,z as se,e as P,A as $,B as fe,p as ae,t as j,b as oe,d as L,r as q,u as z,v as Y,w as F}from"../chunks/index.b35f8aca.js";/* empty css                                                    */import{b as ue}from"../chunks/paths.3444707b.js";import{p as ce}from"../chunks/stores.8fcfad2f.js";function K(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}const me=!0,he=!1,_e=!0,de="always",nt=Object.freeze(Object.defineProperty({__proto__:null,csr:he,prerender:_e,ssr:me,trailingSlash:de},Symbol.toStringTag,{value:"Module"}));function Q(r,e,l){const t=r.slice();return t[5]=e[l].title,t[6]=e[l].href,t[7]=e[l].items,t}function Z(r,e,l){const t=r.slice();return t[5]=e[l].title,t[6]=e[l].href,t}function be(r){let e,l,t=r[5]+"",n,a,s;return{c(){e=g("li"),l=g("a"),n=I(t),s=A(),this.h()},l(i){e=k(i,"LI",{class:!0});var u=N(e);l=k(u,"A",{href:!0,class:!0});var f=N(l);n=S(f,t),f.forEach(m),s=M(u),u.forEach(m),this.h()},h(){_(l,"href",a=r[6]),_(l,"class","nav-link"),$(l,"active",r[6]===r[3]),_(e,"class","nav-item")},m(i,u){p(i,e,u),C(e,l),C(l,n),C(e,s)},p(i,u){u&1&&t!==(t=i[5]+"")&&G(n,t),u&1&&a!==(a=i[6])&&_(l,"href",a),u&9&&$(l,"active",i[6]===i[3])},d(i){i&&m(e)}}}function pe(r){let e,l,t=r[5]+"",n,a,s,i,u=K(r[7]),f=[];for(let o=0;o<u.length;o+=1)f[o]=J(Z(r,u,o));return{c(){e=g("li"),l=g("a"),n=I(t),a=A(),s=g("ul");for(let o=0;o<f.length;o+=1)f[o].c();i=A(),this.h()},l(o){e=k(o,"LI",{class:!0});var h=N(e);l=k(h,"A",{class:!0,href:!0,role:!0,"data-bs-toggle":!0,"aria-expanded":!0});var c=N(l);n=S(c,t),c.forEach(m),a=M(h),s=k(h,"UL",{class:!0});var w=N(s);for(let y=0;y<f.length;y+=1)f[y].l(w);w.forEach(m),i=M(h),h.forEach(m),this.h()},h(){_(l,"class","nav-link dropdown-toggle"),_(l,"href","#"),_(l,"role","button"),_(l,"data-bs-toggle","dropdown"),_(l,"aria-expanded","false"),_(s,"class","dropdown-menu"),_(e,"class","nav-item dropdown")},m(o,h){p(o,e,h),C(e,l),C(l,n),C(e,a),C(e,s);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(s,null);C(e,i)},p(o,h){if(h&1&&t!==(t=o[5]+"")&&G(n,t),h&1){u=K(o[7]);let c;for(c=0;c<u.length;c+=1){const w=Z(o,u,c);f[c]?f[c].p(w,h):(f[c]=J(w),f[c].c(),f[c].m(s,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=u.length}},d(o){o&&m(e),se(f,o)}}}function J(r){let e,l,t=r[5]+"",n,a,s;return{c(){e=g("li"),l=g("a"),n=I(t),s=A(),this.h()},l(i){e=k(i,"LI",{});var u=N(e);l=k(u,"A",{href:!0,class:!0});var f=N(l);n=S(f,t),f.forEach(m),s=M(u),u.forEach(m),this.h()},h(){_(l,"href",a=r[6]),_(l,"class","dropdown-item")},m(i,u){p(i,e,u),C(e,l),C(l,n),C(e,s)},p(i,u){u&1&&t!==(t=i[5]+"")&&G(n,t),u&1&&a!==(a=i[6])&&_(l,"href",a)},d(i){i&&m(e)}}}function x(r){let e;function l(a,s){return a[7]?pe:be}let t=l(r),n=t(r);return{c(){n.c(),e=P()},l(a){n.l(a),e=P()},m(a,s){n.m(a,s),p(a,e,s)},p(a,s){t===(t=l(a))&&n?n.p(a,s):(n.d(1),n=t(a),n&&(n.c(),n.m(e.parentNode,e)))},d(a){a&&m(e),n.d(a)}}}function ve(r){let e,l,t,n,a,s,i,u,f,o='<span class="navbar-toggler-icon"></span>',h,c,w,y=K(r[0]),b=[];for(let d=0;d<y.length;d+=1)b[d]=x(Q(r,y,d));return{c(){e=g("nav"),l=g("div"),t=g("a"),n=g("img"),s=A(),i=I(r[1]),u=A(),f=g("button"),f.innerHTML=o,h=A(),c=g("div"),w=g("ul");for(let d=0;d<b.length;d+=1)b[d].c();this.h()},l(d){e=k(d,"NAV",{class:!0,"data-bs-theme":!0});var v=N(e);l=k(v,"DIV",{class:!0});var E=N(l);t=k(E,"A",{class:!0,href:!0});var T=N(t);n=k(T,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0}),s=M(T),i=S(T,r[1]),T.forEach(m),u=M(E),f=k(E,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"data-bs-target":!0,"aria-controls":!0,"aria-expanded":!0,"aria-label":!0,"data-svelte-h":!0}),R(f)!=="svelte-1km31nc"&&(f.innerHTML=o),h=M(E),c=k(E,"DIV",{class:!0,id:!0});var W=N(c);w=k(W,"UL",{class:!0});var X=N(w);for(let U=0;U<b.length;U+=1)b[U].l(X);X.forEach(m),W.forEach(m),E.forEach(m),v.forEach(m),this.h()},h(){D(n.src,a="/logo.svg")||_(n,"src",a),_(n,"alt","Logo"),_(n,"width","30"),_(n,"height","24"),_(n,"class","d-inline-block align-text-top"),_(t,"class","navbar-brand"),_(t,"href","/"),_(f,"class","navbar-toggler"),_(f,"type","button"),_(f,"data-bs-toggle","collapse"),_(f,"data-bs-target","#navbar-text"),_(f,"aria-controls","navbar-text"),_(f,"aria-expanded","false"),_(f,"aria-label","Toggle navigation"),_(w,"class","navbar-nav ms-auto mb-2 mb-lg-0"),_(c,"class","collapse navbar-collapse"),_(c,"id","navbar-text"),_(l,"class","container-fluid"),_(e,"class","navbar navbar-expand-lg bg-primary"),_(e,"data-bs-theme",r[2])},m(d,v){p(d,e,v),C(e,l),C(l,t),C(t,n),C(t,s),C(t,i),C(l,u),C(l,f),C(l,h),C(l,c),C(c,w);for(let E=0;E<b.length;E+=1)b[E]&&b[E].m(w,null)},p(d,[v]){if(v&2&&G(i,d[1]),v&9){y=K(d[0]);let E;for(E=0;E<y.length;E+=1){const T=Q(d,y,E);b[E]?b[E].p(T,v):(b[E]=x(T),b[E].c(),b[E].m(w,null))}for(;E<b.length;E+=1)b[E].d(1);b.length=y.length}v&4&&_(e,"data-bs-theme",d[2])},i:H,o:H,d(d){d&&m(e),se(b,d)}}}function ge(r,e,l){let t;ie(r,ce,u=>l(4,t=u));let{pathname:n}=t.url;n.trim()||(n="/");let{menu:a,brand:s,theme:i="dark"}=e;return r.$$set=u=>{"menu"in u&&l(0,a=u.menu),"brand"in u&&l(1,s=u.brand),"theme"in u&&l(2,i=u.theme)},[a,s,i,n]}class ke extends O{constructor(e){super(),V(this,e,ge,ve,B,{menu:0,brand:1,theme:2})}}function ye(r){let e,l,t,n,a,s,i,u;return{c(){e=g("nav"),l=g("h1"),t=g("a"),n=I(r[0]),a=A(),s=g("p"),i=g("span"),u=I(r[1]),this.h()},l(f){e=k(f,"NAV",{});var o=N(e);l=k(o,"H1",{});var h=N(l);t=k(h,"A",{href:!0});var c=N(t);n=S(c,r[0]),c.forEach(m),h.forEach(m),a=M(o),s=k(o,"P",{});var w=N(s);i=k(w,"SPAN",{});var y=N(i);u=S(y,r[1]),y.forEach(m),w.forEach(m),o.forEach(m),this.h()},h(){_(t,"href",r[2])},m(f,o){p(f,e,o),C(e,l),C(l,t),C(t,n),C(e,a),C(e,s),C(s,i),C(i,u)},p(f,[o]){o&1&&G(n,f[0]),o&2&&G(u,f[1])},i:H,o:H,d(f){f&&m(e)}}}function Ee(r,e,l){let{title:t,subtitle:n}=e;const a=`${ue}/`;return r.$$set=s=>{"title"in s&&l(0,t=s.title),"subtitle"in s&&l(1,n=s.subtitle)},[t,n,a]}class Ce extends O{constructor(e){super(),V(this,e,Ee,ye,B,{title:0,subtitle:1})}}function we(r){let e,l;return e=new Ce({props:{title:r[4],subtitle:r[5]}}),{c(){q(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){Y(e,t,n),l=!0},p:H,i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function Ne(r){let e,l;return e=new ke({props:{menu:r[2],brand:r[9],theme:r[3]}}),{c(){q(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){Y(e,t,n),l=!0},p(t,n){const a={};n&4&&(a.menu=t[2]),n&8&&(a.theme=t[3]),e.$set(a)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function Ae(r){let e,l,t,n="",a;return{c(){e=g("link"),l=A(),t=g("script"),t.innerHTML=n,this.h()},l(s){e=k(s,"LINK",{href:!0,rel:!0,integrity:!0,crossorigin:!0}),l=M(s),t=k(s,"SCRIPT",{src:!0,integrity:!0,crossorigin:!0,"data-svelte-h":!0}),R(t)!=="svelte-3gsifr"&&(t.innerHTML=n),this.h()},h(){_(e,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"),_(e,"rel","stylesheet"),_(e,"integrity","sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"),_(e,"crossorigin","anonymous"),D(t.src,a="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")||_(t,"src",a),_(t,"integrity","sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"),_(t,"crossorigin","anonymous"),t.defer=!0},m(s,i){p(s,e,i),p(s,l,i),p(s,t,i)},d(s){s&&(m(e),m(l),m(t))}}}function Me(r){let e,l,t,n="",a;return{c(){e=g("link"),l=A(),t=g("script"),t.innerHTML=n,this.h()},l(s){e=k(s,"LINK",{href:!0,rel:!0}),l=M(s),t=k(s,"SCRIPT",{src:!0,"data-svelte-h":!0}),R(t)!=="svelte-uqi65f"&&(t.innerHTML=n),this.h()},h(){_(e,"href","/bootstrap.min.css"),_(e,"rel","stylesheet"),D(t.src,a="/bootstrap.bundle.min.js")||_(t,"src",a),t.defer=!0},m(s,i){p(s,e,i),p(s,l,i),p(s,t,i)},d(s){s&&(m(e),m(l),m(t))}}}function Te(r){let e,l,t,n,a,s,i,u,f,o;const h=[Ne,we],c=[];function w(v,E){return v[0]==="with-navbar"&&v[2]&&v[9]?0:1}l=w(r),t=c[l]=h[l](r);function y(v,E){if(v[1]==="local")return Me;if(v[1]==="remote")return Ae}let b=y(r),d=b&&b(r);return document.title=f=r[4],{c(){e=g("header"),t.c(),n=A(),a=g("meta"),s=g("meta"),i=g("meta"),d&&d.c(),u=P(),this.h()},l(v){e=k(v,"HEADER",{});var E=N(e);t.l(E),E.forEach(m),n=M(v);const T=fe("svelte-n4guv2",document.head);a=k(T,"META",{name:!0,content:!0}),s=k(T,"META",{name:!0,content:!0}),i=k(T,"META",{name:!0,content:!0}),d&&d.l(T),u=P(),T.forEach(m),this.h()},h(){_(a,"name","description"),_(a,"content",r[6]),_(s,"name","keywords"),_(s,"content",r[7]),_(i,"name","author"),_(i,"content",r[8])},m(v,E){p(v,e,E),c[l].m(e,null),p(v,n,E),C(document.head,a),C(document.head,s),C(document.head,i),d&&d.m(document.head,null),C(document.head,u),o=!0},p(v,[E]){let T=l;l=w(v),l===T?c[l].p(v,E):(ae(),j(c[T],1,1,()=>{c[T]=null}),oe(),t=c[l],t?t.p(v,E):(t=c[l]=h[l](v),t.c()),L(t,1),t.m(e,null)),b!==(b=y(v))&&(d&&d.d(1),d=b&&b(v),d&&(d.c(),d.m(u.parentNode,u))),(!o||E&16)&&f!==(f=v[4])&&(document.title=f)},i(v){o||(L(t),o=!0)},o(v){j(t),o=!1},d(v){v&&(m(e),m(n)),c[l].d(),m(a),m(s),m(i),d&&d.d(v),m(u)}}}function Le(r,e,l){let{seo:t,type:n,bootstrap:a,menu:s,theme:i}=e;const{title:u,subtitle:f,description:o,keywords:h,author:c,brand:w}=t;return r.$$set=y=>{"seo"in y&&l(10,t=y.seo),"type"in y&&l(0,n=y.type),"bootstrap"in y&&l(1,a=y.bootstrap),"menu"in y&&l(2,s=y.menu),"theme"in y&&l(3,i=y.theme)},[n,a,s,i,u,f,o,h,c,w,t]}class Ie extends O{constructor(e){super(),V(this,e,Le,Te,B,{seo:10,type:0,bootstrap:1,menu:2,theme:3})}}function Se(r){let e,l,t,n;return{c(){e=I("© "),l=I(r[4]),t=I(" "),n=I(r[0])},l(a){e=S(a,"© "),l=S(a,r[4]),t=S(a," "),n=S(a,r[0])},m(a,s){p(a,e,s),p(a,l,s),p(a,t,s),p(a,n,s)},p:H,d(a){a&&(m(e),m(l),m(t),m(n))}}}function je(r){let e,l,t,n,a=" by ",s,i,u,f,o,h=" is licensed under ",c,w,y=r[2]==="CC_BY-NC_4.0"&&He();return{c(){e=g("a"),l=I(r[1]),t=A(),n=g("span"),n.textContent=a,s=A(),i=g("a"),u=I(r[0]),f=A(),o=g("span"),o.textContent=h,c=A(),y&&y.c(),w=P(),this.h()},l(b){e=k(b,"A",{href:!0});var d=N(e);l=S(d,r[1]),d.forEach(m),t=M(b),n=k(b,"SPAN",{"data-svelte-h":!0}),R(n)!=="svelte-1g1qn1j"&&(n.textContent=a),s=M(b),i=k(b,"A",{href:!0});var v=N(i);u=S(v,r[0]),v.forEach(m),f=M(b),o=k(b,"SPAN",{"data-svelte-h":!0}),R(o)!=="svelte-1xb979n"&&(o.textContent=h),c=M(b),y&&y.l(b),w=P(),this.h()},h(){_(e,"href",r[3]),_(i,"href","https://github.com/yababay")},m(b,d){p(b,e,d),C(e,l),p(b,t,d),p(b,n,d),p(b,s,d),p(b,i,d),C(i,u),p(b,f,d),p(b,o,d),p(b,c,d),y&&y.m(b,d),p(b,w,d)},p:H,d(b){b&&(m(e),m(t),m(n),m(s),m(i),m(f),m(o),m(c),m(w)),y&&y.d(b)}}}function He(r){let e,l="<span>CC BY-NC 4.0</span>",t,n,a,s,i,u,f,o,h;return{c(){e=g("a"),e.innerHTML=l,t=A(),n=g("img"),s=A(),i=g("img"),f=A(),o=g("img"),this.h()},l(c){e=k(c,"A",{href:!0,target:!0,"data-svelte-h":!0}),R(e)!=="svelte-zf355r"&&(e.innerHTML=l),t=M(c),n=k(c,"IMG",{src:!0}),s=M(c),i=k(c,"IMG",{src:!0}),f=M(c),o=k(c,"IMG",{src:!0}),this.h()},h(){_(e,"href","http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"),_(e,"target","_blank"),D(n.src,a="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1")||_(n,"src",a),D(i.src,u="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1")||_(i,"src",u),D(o.src,h="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1")||_(o,"src",h)},m(c,w){p(c,e,w),p(c,t,w),p(c,n,w),p(c,s,w),p(c,i,w),p(c,f,w),p(c,o,w)},d(c){c&&(m(e),m(t),m(n),m(s),m(i),m(f),m(o))}}}function Pe(r){let e,l;function t(s,i){return s[2]&&s[3]?je:Se}let a=t(r)(r);return{c(){e=g("footer"),l=g("p"),a.c()},l(s){e=k(s,"FOOTER",{});var i=N(e);l=k(i,"P",{});var u=N(l);a.l(u),u.forEach(m),i.forEach(m)},m(s,i){p(s,e,i),C(e,l),a.m(l,null)},p(s,[i]){a.p(s,i)},i:H,o:H,d(s){s&&m(e),a.d()}}}function De(r,e,l){let{seo:t}=e;const{author:n,title:a,license:s,url:i}=t,u=new Date().getFullYear();return r.$$set=f=>{"seo"in f&&l(5,t=f.seo)},[n,a,s,i,u,t]}class Re extends O{constructor(e){super(),V(this,e,De,Pe,B,{seo:5})}}function ee(r){let e,l;return e=new Re({props:{seo:r[0]}}),{c(){q(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){Y(e,t,n),l=!0},p(t,n){const a={};n&1&&(a.seo=t[0]),e.$set(a)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function Ge(r){let e,l,t,n,a,s;e=new Ie({props:{seo:r[0],type:r[1],bootstrap:r[2],menu:r[3],theme:r[4]}});const i=r[7].default,u=te(i,r,r[6],null);let f=r[5]&&ee(r);return{c(){q(e.$$.fragment),l=A(),t=g("main"),u&&u.c(),n=A(),f&&f.c(),a=P()},l(o){z(e.$$.fragment,o),l=M(o),t=k(o,"MAIN",{});var h=N(t);u&&u.l(h),h.forEach(m),n=M(o),f&&f.l(o),a=P()},m(o,h){Y(e,o,h),p(o,l,h),p(o,t,h),u&&u.m(t,null),p(o,n,h),f&&f.m(o,h),p(o,a,h),s=!0},p(o,[h]){const c={};h&1&&(c.seo=o[0]),h&2&&(c.type=o[1]),h&4&&(c.bootstrap=o[2]),h&8&&(c.menu=o[3]),h&16&&(c.theme=o[4]),e.$set(c),u&&u.p&&(!s||h&64)&&le(u,i,o,o[6],s?re(i,o[6],h,null):ne(o[6]),null),o[5]?f?(f.p(o,h),h&32&&L(f,1)):(f=ee(o),f.c(),L(f,1),f.m(a.parentNode,a)):f&&(ae(),j(f,1,1,()=>{f=null}),oe())},i(o){s||(L(e.$$.fragment,o),L(u,o),L(f),s=!0)},o(o){j(e.$$.fragment,o),j(u,o),j(f),s=!1},d(o){o&&(m(l),m(t),m(n),m(a)),F(e,o),u&&u.d(o),f&&f.d(o)}}}function Be(r,e,l){let{$$slots:t={},$$scope:n}=e,{seo:a,type:s="simple",bootstrap:i="remote",menu:u=void 0,theme:f="dark",footer:o=!0}=e;return r.$$set=h=>{"seo"in h&&l(0,a=h.seo),"type"in h&&l(1,s=h.type),"bootstrap"in h&&l(2,i=h.bootstrap),"menu"in h&&l(3,u=h.menu),"theme"in h&&l(4,f=h.theme),"footer"in h&&l(5,o=h.footer),"$$scope"in h&&l(6,n=h.$$scope)},[a,s,i,u,f,o,n,t]}class Oe extends O{constructor(e){super(),V(this,e,Be,Ge,B,{seo:0,type:1,bootstrap:2,menu:3,theme:4,footer:5})}}const Ve="Заголовок сайта",qe="подзаголовок вашего сайта",ze="Шаблон для публикации текстовых материалов с оглавлением",Ye="web, template, adaptive, sveltekit, sass, scss",Fe="Михаил Беляков",Ke="CC_BY-NC_4.0",Ue="http://yababay.me",We="Шаблон сайта",Xe="remote";function $e(r){let e;const l=r[2].default,t=te(l,r,r[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,a){t&&t.m(n,a),e=!0},p(n,a){t&&t.p&&(!e||a&8)&&le(t,l,n,n[3],e?re(l,n[3],a,null):ne(n[3]),null)},i(n){e||(L(t,n),e=!0)},o(n){j(t,n),e=!1},d(n){t&&t.d(n)}}}function Qe(r){let e,l;return e=new Oe({props:{seo:r[1],bootstrap:r[0],$$slots:{default:[$e]},$$scope:{ctx:r}}}),{c(){q(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,n){Y(e,t,n),l=!0},p(t,[n]){const a={};n&8&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){j(e.$$.fragment,t),l=!1},d(t){F(e,t)}}}function Ze(r,e,l){let{$$slots:t={},$$scope:n}=e;const a=Xe,s={author:Fe,brand:We,title:Ve,subtitle:qe,description:ze,keywords:Ye,license:Ke,url:Ue};return r.$$set=i=>{"$$scope"in i&&l(3,n=i.$$scope)},[a,s,t,n]}class rt extends O{constructor(e){super(),V(this,e,Ze,Qe,B,{})}}export{rt as component,nt as universal};
