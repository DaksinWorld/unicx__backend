(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{327:function(t,n,e){var content=e(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(78).default)("f51b7e5e",content,!0,{sourceMap:!1})},357:function(t,n,e){"use strict";e(327)},358:function(t,n,e){var r=e(77)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.input{\n  width:80%!important;\n  color:var(--primary);\n  background:var(--primary);\n  border:3px solid var(--textColor);\n  padding:10px 5px\n}\n*{\n  color:#000\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},386:function(t,n,e){"use strict";e.r(n);var r=e(11),o=(e(64),e(14),e(32),e(33),{name:"ProductId",components:{"ckeditor-nuxt":function(){return e.e(28).then(e.t.bind(null,380,7))}},data:function(){return{editorConfig:{},content:"",data:[]}},mounted:function(){this.fetchData()},methods:{submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.$patch("/docs/"+t.data[0]._id,{htmlText:t.content},{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}});case 3:n.next=7;break;case 5:n.prev=5,n.t0=n.catch(0);case 7:case"end":return n.stop()}}),n,null,[[0,5]])})))()},fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.$get("/docs");case 3:e=n.sent,t.content=e[0].htmlText,t.data=e,n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}}),c=(e(357),e(47)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"container flex justify-center"},[n("form",{on:{submit:function(n){return n.preventDefault(),t.submit.apply(null,arguments)}}},[n("client-only",{attrs:{placeholder:"loading..."}},[n("ckeditor-nuxt",{staticClass:"w-50 input",attrs:{config:t.editorConfig},model:{value:t.content,callback:function(n){t.content=n},expression:"content"}})],1),t._v(" "),n("button",{staticClass:"p-3 border text-white",attrs:{type:"submit"}},[t._v("Change")])],1)])}),[],!1,null,null,null);n.default=component.exports}}]);