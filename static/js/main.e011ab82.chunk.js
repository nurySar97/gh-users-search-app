(this["webpackJsonpgh-users-search-app"]=this["webpackJsonpgh-users-search-app"]||[]).push([[0],{43:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);n(43);var r,s,a,c,i,o,l=n(0),u=n.n(l),j=n(35),d=n.n(j),h=n(2),b=n(3),p=n.n(b),m=n(6),x=n(11),O=n(10),f=n(24),v=n(7),g=n(12),N=n(13),w=n(26),y=n(41),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nurySar97";return'\n  {\n    user(login: "'.concat(e,'"){\n        name,\n        login\n        email,\n        avatarUrl,\n        location,\n        createdAt,\n        followers {totalCount},\n        following {totalCount},\n        bio,\n        repositories(first: 100) {\n          nodes {\n            ...on Repository {\n              forkCount,\n              stargazerCount,\n              name\n            }\n          }\n        }\n    }\n  }')},C=new(function(){function e(){Object(O.a)(this,e),this.graphqlWithAuth=y.a.defaults({headers:{authorization:"token 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"}})}return Object(f.a)(e,[{key:"searchUsers",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.graphqlWithAuth('\n  {\n    search(type: USER, query: "'.concat(t,'",  first: 100) {\n      nodes {\n        ...on User {\n          id,\n          avatarUrl,\n          name,\n          login\n          repositories{\n            totalCount\n          }\n        }\n      }\n    }\n  }'));case 3:return n=e.sent,r=n.search.nodes,e.abrupt("return",{error:!1,data:r});case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{error:!0,data:null});case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getUser",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.graphqlWithAuth(U(t));case 3:return n=e.sent,r=n.user,e.abrupt("return",{error:!1,data:r});case 8:return e.prev=8,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{error:!0,data:null});case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),k=n(1),S={user:{name:null,avatarUrl:null,bio:null,createdAt:null,email:null,followers:{totalCount:0},following:{totalCount:0},login:null,location:null,repositories:{nodes:[]}},users:[]},B=Object(l.createContext)(Object(w.a)({getUserByName:function(){},searchUsersByName:function(){}},S)),F=function(e){Object(g.a)(n,e);var t=Object(N.a)(n);function n(e){var r;return Object(O.a)(this,n),(r=t.call(this,e)).state=S,r.searchUsersByName=r.searchUsersByName.bind(Object(v.a)(r)),r.getUserByName=r.getUserByName.bind(Object(v.a)(r)),r}return Object(f.a)(n,[{key:"searchUsersByName",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,r=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=r.length>0&&void 0!==r[0]?r[0]:"")){e.next=9;break}return e.next=4,C.searchUsers(t);case 4:return(n=e.sent).error||this.setState({users:n.data}),e.abrupt("return",n.error);case 9:return this.setState({users:[]}),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserByName",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,r=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=r.length>0&&void 0!==r[0]?r[0]:"")){e.next=7;break}return e.next=4,C.getUser(t);case 4:return(n=e.sent).error||this.setState({user:n.data}),e.abrupt("return",n.error);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(k.jsx)(B.Provider,{value:{users:this.state.users,user:this.state.user,searchUsersByName:this.searchUsersByName,getUserByName:this.getUserByName},children:this.props.children})}}]),n}(u.a.Component),I=function(){return Object(l.useContext)(B)},A=n(42),T=function(e){var t=e.placeholder,n=e.onInputChange,r=Object(A.a)(e,["placeholder","onInputChange"]);return Object(k.jsx)("div",{className:"row mb-5",children:Object(k.jsx)("div",{className:"col-lg-8 col-md-12 mx-auto",children:Object(k.jsxs)("div",{className:"input-group",children:[Object(k.jsx)("input",Object(w.a)({type:"text",className:"form-control",placeholder:t,"aria-label":"Username","aria-describedby":"basic-addon1",onChange:n},r)),Object(k.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:Object(k.jsx)("i",{className:"fas fa-search"})})]})})})},R=function(){return Object(k.jsx)("section",{className:"text-center",children:Object(k.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},q=n(14),E=n(27),L=n(15),W=function(e){var t=e.users;return Object(k.jsx)("div",{className:"card",children:Object(k.jsx)("ul",{className:"list-group",children:t.map((function(e,t){var n=e.id,r=e.avatarUrl,s=e.name,a=e.login,c=e.repositories;return s||a?Object(k.jsx)("li",{className:"list-group-item cursor-pointer",children:Object(k.jsx)(E.b,{to:"/user/".concat(a),children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-3 col-sm-3 col-md-1",children:Object(k.jsxs)(z,{children:[Object(k.jsx)(D,{}),Object(k.jsx)(H,{children:Object(k.jsx)("img",{src:"".concat(r),alt:""})})]})}),Object(k.jsx)("div",{className:"col-6 col-sm-5 col-md-6 d-flex align-items-center",children:Object(k.jsx)("span",{className:"fs-4 fw-bold",children:s||a})}),Object(k.jsx)("div",{className:"col-2 col-sm-4 col-md-5 d-flex align-items-center justify-content-end",children:Object(k.jsx)("span",{className:"fs-4 fw-bold",children:c.totalCount})})]})})},t+" "+n):null}))})})},z=L.a.div(r||(r=Object(q.a)(["\n  width: 50px;\n  height: 50px;\n  position: relative;\n"]))),D=L.a.div(s||(s=Object(q.a)(["\n  width: 100%;\n  padding-top: 100%;\n  background: #b8b6b5;\n"]))),H=L.a.div(a||(a=Object(q.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  & img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),J=function(){var e=I(),t=e.searchUsersByName,n=e.users,r=Object(l.useState)(""),s=Object(x.a)(r,2),a=s[0],c=s[1],i=Object(l.useState)(!1),o=Object(x.a)(i,2),u=o[0],j=o[1],d=Object(l.useRef)(null);function h(){return b.apply(this,arguments)}function b(){return(b=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(a);case 2:return e.next=4,j((function(){return!1}));case 4:clearTimeout(d.current);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(k.jsx)("main",{className:"main",children:Object(k.jsxs)("div",{className:"main-inner py-3 px-3 p-sm-3 br-3 rounded-3",children:[Object(k.jsx)(T,{onInputChange:function(e){clearTimeout(d.current);var n=e.target.value;if(j((function(){return!0})),c(n),!n)return j((function(){return!1})),void t("");d.current=setTimeout(h,800)},placeholder:"Search users...",value:a}),u?Object(k.jsx)(R,{}):n.length?Object(k.jsx)(W,{users:n}):Object(k.jsx)("div",{className:"text-center",children:"No result yet"})]})})},P=function(e){var t=e.user,n=t.avatarUrl,r=t.name,s=t.login,a=t.email,c=t.createdAt,i=t.followers,o=t.following,l=t.bio,u=t.location;return Object(k.jsxs)("section",{children:[Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-md-3",children:Object(k.jsxs)(M,{className:"mx-sm-auto mx-auto",children:[Object(k.jsx)(V,{}),Object(k.jsx)(_,{children:Object(k.jsx)("img",{src:"".concat(n),alt:"avatar"})})]})}),Object(k.jsxs)("div",{className:"col-md-8 col-sm-12 mt-sm-3 mt-md-0 mt-3",children:[Object(k.jsx)("p",{className:"fs-3 fw-bold",children:r||s}),Object(k.jsx)("p",{children:a}),Object(k.jsx)("p",{children:u}),Object(k.jsxs)("p",{children:["Created: ",new Date(String(c)).toLocaleDateString()]}),Object(k.jsxs)("p",{children:[i.totalCount," Followers"]}),Object(k.jsxs)("p",{children:["Following ",null===o||void 0===o?void 0:o.totalCount]})]})]}),Object(k.jsx)("div",{className:"fs-3 mb-3 text-center",children:l})]})},M=L.a.div(c||(c=Object(q.a)(["\n  width: 100%;\n  max-width: 300px;\n  position: relative;\n  border-radius: 1rem;\n  overflow: hidden;\n"]))),V=L.a.div(i||(i=Object(q.a)(["\n  width: 100%;\n  padding-top: 110%;\n  background-color: #c2c2c2;\n"]))),_=L.a.div(o||(o=Object(q.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  & img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),G=function(e){var t=e.repos,n=e.login;return Object(k.jsx)("div",{className:"card",children:Object(k.jsx)("ul",{className:"list-group",children:t.map((function(e,t){var r=e.name,s=e.stargazerCount,a=e.forkCount;return Object(k.jsx)("li",{className:"list-group-item cursor-pointer",children:Object(k.jsx)("a",{href:"https://github.com/".concat(n,"/").concat(r),target:"_blank",rel:"noreferrer",children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"d-flex align-items-center col-8 col-sm-3 col-md-8 fs-5 fw-bold",children:r}),Object(k.jsxs)("div",{className:"col-6 col-sm-5 col-md-4 d-flex flex-column",children:[Object(k.jsxs)("p",{className:"text-end",children:[a," Forks"]}),Object(k.jsxs)("p",{className:"text-end",children:[s," Stars"]})]})]})})},t)}))})})},Q=function(){var e=Object(h.g)().login,t=I(),n=t.getUserByName,r=t.user,s=r.repositories,a=Object(l.useState)(""),c=Object(x.a)(a,2),i=c[0],o=c[1],j=Object(l.useState)(!0),d=Object(x.a)(j,2),b=d[0],O=d[1],f=Object(l.useState)(s.nodes),v=Object(x.a)(f,2),g=v[0],N=v[1],w=Object(l.useState)(!1),y=Object(x.a)(w,2),U=y[0],C=y[1];return Object(l.useEffect)((function(){Object(m.a)(p.a.mark((function t(){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(e);case 2:(r=t.sent)&&C(r),O(!0);case 5:case"end":return t.stop()}}),t)})))()}),[n,e]),U?Object(k.jsx)(h.a,{to:"/"}):Object(k.jsx)("main",{className:"main",children:Object(k.jsx)("div",{className:"main-inner py-3 px-3 p-sm-3 br-3 rounded-3",children:b?Object(k.jsxs)(u.a.Fragment,{children:[Object(k.jsx)(P,{user:r}),Object(k.jsx)(T,{onInputChange:function(e){var t=e.target.value;if(o(t),!t)return N([]);N((function(){return s.nodes.filter((function(e){return new RegExp(t,"i").test("{".concat(e.name,"}"))}))}))},value:i,placeholder:"Search for User's Repositories"}),i&&g.length?Object(k.jsx)(G,{repos:g,login:e}):Object(k.jsx)("div",{className:"text-center",children:"No result yet"})]}):Object(k.jsx)(R,{})})})},Z=function(){return Object(k.jsx)("header",{children:Object(k.jsx)("h1",{className:"h1 text-light text-center",children:"GitHub Searcher"})})},K=function(){return Object(k.jsx)("div",{className:"app",children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"py-3",children:[Object(k.jsx)(Z,{}),Object(k.jsxs)(h.d,{children:[Object(k.jsx)(h.b,{exact:!0,path:"/",component:J}),Object(k.jsx)(h.b,{exact:!0,path:"/user",render:function(){return Object(k.jsx)(h.a,{to:"/"})}}),Object(k.jsx)(h.b,{path:"/user/:login",component:Q}),Object(k.jsx)(h.a,{to:"/"})]})]})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};d.a.render(Object(k.jsx)(u.a.StrictMode,{children:Object(k.jsx)(E.a,{children:Object(k.jsx)(F,{children:Object(k.jsx)(K,{})})})}),document.getElementById("root")),X()}},[[56,1,2]]]);
//# sourceMappingURL=main.e011ab82.chunk.js.map