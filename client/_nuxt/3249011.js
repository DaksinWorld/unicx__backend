(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{288:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},292:function(t,e,r){var n=r(3),o=r(23),c=r(13),l=r(288),f=n("".replace),d="["+l+"]",m=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),w=function(t){return function(e){var r=c(o(e));return 1&t&&(r=f(r,m,"")),2&t&&(r=f(r,v,"")),r}};t.exports={start:w(1),end:w(2),trim:w(3)}},307:function(t,e,r){"use strict";var n=r(2),o=r(292).trim;n({target:"String",proto:!0,forced:r(309)("trim")},{trim:function(){return o(this)}})},309:function(t,e,r){var n=r(83).PROPER,o=r(4),c=r(288);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||n&&c[t].name!==t}))}},310:function(t,e,r){var content=r(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("77bd5363",content,!0,{sourceMap:!1})},314:function(t,e,r){"use strict";r(310)},315:function(t,e,r){var n=r(77)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\nbutton[data-v-3ffd2d1e]{\n  background-color:var(--green)\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},336:function(t,e,r){"use strict";r.r(e);var n=r(11),o=(r(64),r(307),{name:"MyLoginSection",data:function(){return{err:"",login:"",password:""}},methods:{submit:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),r.prev=1,r.next=4,e.$axios.$post("/auth/login",{login:e.login.trim(),password:e.password.trim()});case 4:n=r.sent,localStorage.setItem("jwt",n.access_token),e.$router.push("/"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),e.err=r.t0.response.data.message;case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}}),c=(r(314),r(47)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("form",{staticClass:"flex flex-col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],staticClass:"form-control p-3 input",attrs:{type:"text",placeholder:"Email"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control p-3 input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),e("button",{staticClass:"p-3 input",on:{click:t.submit}},[t._v("Submit")]),t._v(" "),t.err?e("h1",{staticClass:"text-sm my-2 text-red-300"},[t._v(t._s(t.err))]):t._e()])])}),[],!1,null,"3ffd2d1e",null);e.default=component.exports}}]);