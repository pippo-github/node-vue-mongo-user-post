(function(t){function e(e){for(var n,i,a=e[0],l=e[1],u=e[2],p=0,f=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,a=1;a<o.length;a++){var l=o[a];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},3313:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"componentBody"}},[o("div",{attrs:{id:"titoloAppStyle"},domProps:{innerHTML:t._s(t.descrizione_app)}}),o("div",{staticClass:"bloccoPresentazioneApp"},[t._m(0),o("div",{staticClass:"bloccoPresentazioneAppElements"}),o("div",{staticClass:"bloccoPresentazioneAppElements"}),o("div",{staticClass:"bloccoPresentazioneAppElements"}),o("div",{staticClass:"newPostBox"},[o("h3",[t._v("\n\t\t\t\t\tInsert new post ...\n\t\t\t\t")]),o("form",[o("div",[o("label",{attrs:{for:"autoreLabel"}},[t._v(" Author ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.titolo,expression:"titolo"}],attrs:{name:"autoreDati",type:"text",placeholder:"Author"},domProps:{value:t.titolo},on:{input:function(e){e.target.composing||(t.titolo=e.target.value)}}})]),o("div",[o("label",{attrs:{for:"textMsg"}},[t._v(" Say somethings ... ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{name:"textDati",type:"text",placeholder:"write a message"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}})]),o("div",[o("label",{attrs:{for:"imgMsg"}},[t._v(" src url img ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.url_img,expression:"url_img"}],attrs:{name:"imgDati",type:"text",placeholder:"url img, es: https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",value:"https://images.unsplash.com/photo-1568480460649-14ec4222b7fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600"},domProps:{value:t.url_img},on:{input:function(e){e.target.composing||(t.url_img=e.target.value)}}})]),o("div",[o("button",{on:{click:function(e){return e.preventDefault(),t.inviaPost(t.titolo,t.msg,t.url_img)}}},[t._v(" invia il post ")])]),o("a",{staticClass:"tagAForm",attrs:{href:"/api/post",target:"_blank"}},[t._v("show REST API")]),o("a",{staticClass:"tagAForm",on:{click:function(e){return e.preventDefault(),t.updatePage()}}},[t._v("Refresh page")])])]),o("div",{attrs:{id:"outPutBox"}},[o("h2",[t._v("\n\t\t\t\tOutput post\n\t\t\t")]),t._l(t.posts,(function(e,n){return o("div",{key:n},t._l(e,(function(n,r){return o("div",{key:r},[o("div",{staticClass:"delPostBtn"}),o("div",{staticClass:"titoloPost"},[t._v(t._s(e[r].titolo))]),o("div",{staticClass:"paragPost"},[t._v(t._s(e[r].paragrafo))]),o("div",{staticClass:"imgPost"},[o("img",{attrs:{src:e[r].img_url}})]),o("div",{staticClass:"dataPost"},[t._v(t._s(e[r].caricatoIl))]),o("form",[o("button",{on:{click:function(o){return o.preventDefault(),t.eliminaPost(e[r]._id)}}},[t._v(" elimina post ")])]),o("hr",{staticStyle:{margin:"77px auto 144px auto",width:"10%"}})])})),0)}))],2)]),o("div",{staticStyle:{"text-align":"center"},attrs:{id:"footerDiv"},domProps:{innerHTML:t._s(t.footer)}})])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bloccoPresentazioneAppElements"},[o("h3",[t._v("\n\t\t\t\t\t\tUser post message application\n\t\t\t\t\t")]),o("p",[t._v("\n\t\t\t\t\t\tThis app, show how use mongo & node with VueJS frontend, for insert into  db user basic post message\n\t\t\t\t\t")])])}],i=(o("96cf"),o("1da1")),a=o("bc3a"),l=o.n(a),u={data:function(){return{descrizione_app:"<h1>Basic node e mongo user post with Vue frontend</h1>",titolo:"",msg:"",url_img:"",url:"https://source.unsplash.com/1600x900/?beach",posts:[],postElementoDaRimuovere:0,footer:" copyright giuseppe tarallo 2009 -- "+(new Date).getFullYear()+" © "}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("UI Vue creata "),e="https://source.unsplash.com/1600x900/?beach",t.next=4,l.a.get(e).then((function(t){console.log("img (1): ",t.request.responseURL),o.url_img=t.request.responseURL}));case 4:return t.next=6,l.a.get("/api/post").then((function(t){o.posts.push(t.data)}));case 6:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),methods:{updatePage:function(){var t=location.href;location.href=t},inviaPost:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,o,n){var r,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("dati ricevuti: "),console.log("titolo: "+e),console.log("msg: "+o),console.log("img_url: "+n),t.next=6,l.a.post("/api/post",{titolo:e,msg:o,img_url:n});case 6:return this.titolo="",this.msg="",t.next=10,l.a.get("/api/post").then((function(t){return t.data})).then((function(t){s.posts.push([t[t.length-1]])}));case 10:return r="https://source.unsplash.com/1600x900/?beach",t.next=13,l.a.get(r).then((function(t){console.log("img (1): ",t.request.responseURL),s.url_img=t.request.responseURL}));case 13:case"end":return t.stop()}}),t,this)})));function e(e,o,n){return t.apply(this,arguments)}return e}(),eliminaPost:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var o,n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("dati: "),console.log("Elimina post chiamata"),console.log("ID selezionato:",e),t.next=5,l.a.delete("/api/post/"+e);case 5:for(console.log("Contenuto this.post: "),o=function(t){console.log("post ----------------------"),console.log(r.posts[t]),r.posts[t].filter((function(o,n){o._id==e&&(console.log("uguali elimina :::::::::::::: "),console.log("post._id: "+o._id),console.log("id: "+e),console.log("uguali elimina :::::::::::::: "),r.posts[t].splice(n,1))}))},n=0;n<this.posts.length;n++)o(n);case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},c=u,p=(o("a4eb"),o("2877")),f=Object(p["a"])(c,r,s,!1,null,"386d5678",null),g=f.exports;new n["a"]({el:"#userPost",render:function(t){return t(g)}})},a4eb:function(t,e,o){"use strict";var n=o("3313"),r=o.n(n);r.a}});
//# sourceMappingURL=app.a49fcfbe.js.map