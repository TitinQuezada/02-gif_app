(this.webpackJsonpgif_app=this.webpackJsonpgif_app||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),u=n.n(c),i=(n(14),n(1)),l=n(8),o=(n(15),function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),u=c[0],o=c[1],s=function(e,t){return!t.find((function(t){return t===e}))};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u&&(t((function(e){return s(u,e)?[u].concat(Object(l.a)(e)):e})),o(""))}},r.a.createElement("input",{className:"inputSize mr-2",value:u,onChange:function(e){return o(e.target.value)},placeholder:"Buscar Gif"}),r.a.createElement("button",{className:"buttonSize"},"Buscar"))}),s=(n(16),function(e){e.id;var t=e.title,n=e.image;e.remove;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:n,alt:t,height:"100px"}),r.a.createElement("p",null,t),r.a.createElement("div",null))}),m=(n(17),n(4)),f=n.n(m),p=n(7),g=function(){var e=Object(p.a)(f.a.mark((function e(t){var n,a,r,c,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=GsKlFVs7BUxAGmyrWeKQT2T5zw0D1JU1&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,u=c.map((function(e){return{id:e.id,title:e.title,image:e.images.downsized_medium.url}})),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=Object(a.useState)({gifs:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){g(e).then((function(e){return c({gifs:e,loading:!1})}))}),[e]),r},E=function(e){var t=e.category,n=d(t),a=n.gifs,c=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},c?"cargando....":a.map((function(e){return r.a.createElement(s,Object.assign({key:e.id},e))}))))},h=function(){var e=Object(a.useState)(["One Punch Man","Samurai x","Dragon Ball Z"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(o,{categories:n,setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,n.map((function(e){return r.a.createElement(E,{key:e,category:e})}))))};u.a.render(r.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.eb8c1fca.chunk.js.map