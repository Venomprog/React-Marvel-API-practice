(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{37:function(t,e,n){"use strict";var c=n.p+"static/media/error.42292aa1.gif",r=n(3);e.a=function(){return Object(r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:c,alt:"Error"})}},38:function(t,e,n){"use strict";var c=n(4),r=n.n(c),a=n(6),s=n(5),i=n(0);e.a=function(){var t=function(){var t=Object(i.useState)(!1),e=Object(s.a)(t,2),n=e[0],c=e[1],o=Object(i.useState)(null),u=Object(s.a)(o,2),l=u[0],b=u[1];return{loading:n,error:l,request:Object(i.useCallback)(function(){var t=Object(a.a)(r.a.mark((function t(e){var n,a,s,i,o,u=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"applications/json"},c(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:s});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("COuld not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return o=t.sent,c(!1),t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),c(!1),b(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){return b(null)}),[])}}(),e=t.loading,n=t.error,c=t.request,o=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=91f439be32ba6f8326f987b1a44facfe",b=210,p=function(){var t=Object(a.a)(r.a.mark((function t(){var e,n,a=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:b,t.next=3,c("".concat(u,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(d));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("".concat(u,"characters/").concat(e,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",d(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c("".concat(u,"comics/").concat(e,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",h(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(r.a.mark((function t(){var e,n,a=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:b,t.next=3,c("".concat(u,"comics?limit=8&offset=").concat(e,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(h));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(t){return{id:t.id,name:t.name,description:t.description,thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},h=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about count of page",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"eu-us",price:t.prices[0].price||"Not available"}};return{loading:e,error:n,getAllCharacters:p,getCharacter:m,clearError:o,getAllComics:f,getComic:j}}},46:function(t,e,n){},47:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var c=n(39),r=n(7),a=n(5),s=n(0),i=(n(46),n(38)),o=n(37),u=n(22),l=n(10),b=n(3),p=function(t){var e=Object(s.useState)([]),n=Object(a.a)(e,2),c=n[0],p=n[1],m=Object(s.useState)(!1),j=Object(a.a)(m,2),f=j[0],d=j[1],h=Object(s.useState)(210),g=Object(a.a)(h,2),O=g[0],v=g[1],x=Object(s.useState)(!1),w=Object(a.a)(x,2),_=w[0],k=w[1],y=Object(i.a)(),C=y.loading,N=y.error,A=y.getAllComics;Object(s.useEffect)((function(t,e){E(t,!0),console.log("request")}),[]);var E=function(t,e){d(!e),A(t).then(S)},S=function(t){var e=!1;t.length<8&&(e=!0),p((function(e){return[].concat(Object(r.a)(e),Object(r.a)(t))})),d(!1),v((function(t){return+t+8})),k((function(t){return e}))};console.log("Listing!");var q=Object(s.useRef)([]);var T=c.map((function(t,e){return Object(b.jsx)("li",{className:"comics__item",tabIndex:0,ref:function(t){return q.current[e]=t},children:Object(b.jsxs)(l.b,{to:"/comics/".concat(t.id),children:[Object(b.jsx)("img",{src:t.thumbnail,alt:"ultimate war",className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:t.title}),Object(b.jsxs)("div",{className:"comics__item-price",children:[t.price,"$"]})]})},e)})),F=C&&!f?Object(b.jsx)(u.a,{}):null,J=N?Object(b.jsx)(o.a,{}):null;return Object(b.jsxs)("div",{className:"comics__list",children:[Object(b.jsxs)("ul",{className:"comics__grid",children:[F,J,T]}),Object(b.jsx)("button",{className:"button button__main button__long",disabled:f,style:{display:_?"none":"block"},onClick:function(){return E(O)},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})},m=(n(47),n.p+"static/media/Avengers.4065c8f9.png"),j=n.p+"static/media/Avengers_logo.9eaf2193.png",f=function(){return Object(b.jsxs)("div",{className:"app__banner",children:[Object(b.jsx)("img",{src:m,alt:"Avengers"}),Object(b.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(b.jsx)("br",{}),"Stay tuned!"]}),Object(b.jsx)("img",{src:j,alt:"Avengers logo"})]})};e.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(c.a,{children:[Object(b.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(b.jsx)("title",{children:"Comics page"})]}),Object(b.jsx)(f,{}),Object(b.jsx)(p,{})]})}}}]);
//# sourceMappingURL=5.fa63593c.chunk.js.map