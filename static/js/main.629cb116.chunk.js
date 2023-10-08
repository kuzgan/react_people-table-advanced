(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(26),n=c(8),a=(c(36),c(37),c(3)),r=c(9),l=c.n(r),i=(c(38),c(0)),j=c(1),o=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},d=c(4),b=(c(40),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),u=c(5),h=c(7),O="https://mate-academy.github.io/react_people-table/api/people.json";function x(e){return new Promise((function(t){return setTimeout(t,e)}))}function m(){return(m=Object(h.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x(500).then((function(){return fetch(O)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=c(15),f=function(e){var t=e.person,c=t.slug,s=t.sex,a=t.name,r=Object(n.d)(),i=Object(d.a)(r,1)[0];return Object(j.jsx)(n.b,{to:"/people/".concat(c,"?").concat(i.toString()),className:l()({"has-text-danger":"f"===s}),children:a})},v=function(e){var t=e.person,c=e.selectedPerson;return Object(j.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":c===t.slug}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(f,{person:t})}),Object(j.jsx)("td",{children:t.sex}),Object(j.jsx)("td",{children:t.born}),Object(j.jsx)("td",{children:t.died}),t.mother?Object(j.jsx)("td",{children:Object(j.jsx)(f,{person:t.mother})}):Object(j.jsx)("td",{children:t.motherName||"-"}),t.father?Object(j.jsx)("td",{children:Object(j.jsx)(f,{person:t.father})}):Object(j.jsx)("td",{children:t.fatherName||"-"})]})},g=c(27);function N(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(d.a)(e,2),s=t[0],n=t[1];null===n?c.delete(s):Array.isArray(n)?(c.delete(s),n.forEach((function(e){c.append(s,e)}))):c.set(s,n)})),c.toString()}var y=["children","params"],w=function(e){var t=e.children,c=e.params,s=Object(g.a)(e,y),a=Object(n.d)(),r=Object(d.a)(a,1)[0];return Object(j.jsx)(n.b,Object(p.a)(Object(p.a)({to:{search:N(r,c)}},s),{},{children:t}))},S=function(e){var t=e.sortBy,c=Object(n.d)(),s=Object(d.a)(c,1)[0];return Object(j.jsx)(w,{params:function(){var e=s.get("sort"),c=null;return s.has("order")||e!==t||(c="desc"),{sort:s.has("order")&&e===t?null:t,order:c}}(),children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:l()("fas",{"fa-sort":s.get("sort")!==t,"fa-sort-up":s.get("sort")===t&&!s.has("order"),"fa-sort-down":s.get("sort")===t&&s.has("order")})})})})},k=function(e){var t=e.people,c=Object(a.q)().slug,s=function(e){var t=Object(n.d)(),c=Object(d.a)(t,1)[0],s=c.get("sort"),a=c.get("order");return e.sort((function(e,t){if(s){if(e[s]>t[s])return"desc"===a?1:-1;if(e[s]<t[s])return"desc"===a?-1:1}return 0}))}(function(e){var t,c=Object(n.d)(),s=Object(d.a)(c,1)[0],a=null===(t=s.get("query"))||void 0===t?void 0:t.toLocaleLowerCase(),r=s.get("sex"),l=s.getAll("centuries");return e.filter((function(e){var t,c;return(!r||e.sex===r)&&!!(!a||e.name.toLowerCase().includes(a)||null!==(t=e.motherName)&&void 0!==t&&t.toLowerCase().includes(a)||null!==(c=e.fatherName)&&void 0!==c&&c.toLowerCase().includes(a))&&!(l.length>0&&!l.includes(Math.ceil(e.born/100).toString()))}))}(t.map((function(e){var c=t.find((function(t){return e.fatherName===t.name})),s=t.find((function(t){return e.motherName===t.name}));return Object(p.a)(Object(p.a)({},e),{},{father:c,mother:s})}))));return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(j.jsx)(S,{sortBy:"name"})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(j.jsx)(S,{sortBy:"sex"})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(j.jsx)(S,{sortBy:"born"})]})}),Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(j.jsx)(S,{sortBy:"died"})]})}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:s.map((function(e){return Object(j.jsx)(v,{person:e,selectedPerson:c},e.slug)}))})]})},L=c(10),A=function(){var e=Object(n.d)(),t=Object(d.a)(e,2),c=t[0],s=t[1],a=function(e){var t=c.getAll("centuries");return t.includes(e)?t.filter((function(t){return t!==e})):[String(e)].concat(Object(L.a)(t))};return Object(j.jsxs)("nav",{className:"panel",children:[Object(j.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(j.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(j.jsx)(w,{params:{sex:null},className:l()({"is-active":!c.has("sex")}),children:"All"}),Object(j.jsx)(w,{params:{sex:"f"},className:l()({"is-active":"f"===c.get("sex")}),children:"Female"}),Object(j.jsx)(w,{params:{sex:"m"},className:l()({"is-active":"m"===c.get("sex")}),children:"Male"})]}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("p",{className:"control has-icons-left",children:[Object(j.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:c.has("query")?String(c.get("query")):"",onChange:function(e){var t=N(c,{query:e.target.value||null});s(t)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(j.jsx)("div",{className:"level-left",children:[16,17,18,19,20].map((function(e){return Object(j.jsx)(w,{"data-cy":"century",className:l()("button mr-1",{"is-info":c.getAll("centuries").includes(String(e))}),params:{centuries:a(String(e))},children:e},e)}))}),Object(j.jsx)("div",{className:"level-right ml-4",children:Object(j.jsx)(w,{"data-cy":"centuryALL",className:l()("button is-success",{"is-outlined":c.has("centuries")}),params:{centuries:null},children:"All"})})]})}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsx)(w,{className:"button is-link is-outlined is-fullwidth",params:{sex:null,centuries:null,query:null},children:"Reset all filters"})})]})},P=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(!1),a=Object(d.a)(n,2),r=a[0],l=a[1],o=Object(i.useState)(!0),u=Object(d.a)(o,2),h=u[0],O=u[1];return Object(i.useEffect)((function(){(function(){return m.apply(this,arguments)})().then((function(e){return s(e)})).catch((function(){return l(!0)})).finally((function(){return O(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(j.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(j.jsx)(A,{})}),Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"box table-container",children:[h?Object(j.jsx)(b,{}):r&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!r&&0===c.length&&!h&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!r&&!!c.length&&!h&&Object(j.jsx)(k,{people:c})]})})]})})]})},B=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},F=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(j.jsx)(n.c,{to:"/people",className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(a.d,{children:[Object(j.jsx)(a.b,{path:"/",element:Object(j.jsx)(o,{})}),Object(j.jsxs)(a.b,{path:"/people",children:[Object(j.jsx)(a.b,{index:!0,element:Object(j.jsx)(P,{})}),Object(j.jsx)(a.b,{path:":slug?",element:Object(j.jsx)(P,{})})]}),Object(j.jsx)(a.b,{path:"/home",element:Object(j.jsx)(a.a,{to:"/",replace:!0})}),Object(j.jsx)(a.b,{path:"*",element:Object(j.jsx)(B,{})})]})})})]})};Object(s.createRoot)(document.getElementById("root")).render(Object(j.jsx)(n.a,{children:Object(j.jsx)(F,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.629cb116.chunk.js.map