"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[336],{6336:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var a="Contacts_container__TJkHA",r="Contacts_title__HJPSk",i=t(9439),s=t(2791),c=t(9434),o=t(3634),l=t(6916),u=function(e){return e.contacts.items},m=function(e){return e.contacts.isLoading},d=function(e){var n;return null===(n=e.contacts.error)||void 0===n?void 0:n.message},f=function(e){return e.filter},h=(0,l.P1)([u,f],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),x=t(1686),_=t.n(x),v=(t(81),t(8551)),j=t(4708),b=t(1091),p=t(4554),C=t(890),Z=t(1614),g=t(7107),N=t(4507),w=t(184),y=(0,g.Z)(),k=function(){var e=(0,s.useState)(""),n=(0,i.Z)(e,2),t=n[0],a=n[1],r=(0,s.useState)(""),l=(0,i.Z)(r,2),m=l[0],d=l[1],f=(0,c.v9)(u),h=(0,c.I0)(),x={name:a,number:d};return(0,w.jsx)(N.Z,{theme:y,children:(0,w.jsxs)(Z.Z,{component:"main",maxWidth:"xs",children:[(0,w.jsx)(j.ZP,{}),(0,w.jsxs)(p.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,w.jsx)(C.Z,{component:"h1",variant:"h5",children:"Add contact"}),(0,w.jsxs)(p.Z,{component:"form",onChange:function(e){var n=e.target,t=n.name,a=n.value;x[t](a)},onSubmit:function(e){return e.preventDefault(),t&&m?function(e){return f.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))}(t)?_().Notify.failure("".concat(t," is already in contacts")):(h((0,o.uK)({name:t,number:m})),a(""),void d("")):_().Notify.failure("Fill in all fields")},sx:{mt:1},children:[(0,w.jsx)(b.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0410-\u042f\u0406\u0407\u0404]+(([' \\-][a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0410-\u042f\u0406\u0407\u0404 ])?[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0410-\u042f\u0406\u0407\u0404]*)*$",value:t,autoComplete:"name",autoFocus:!0}),(0,w.jsx)(b.Z,{margin:"normal",required:!0,fullWidth:!0,name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",value:m,label:"Number",type:"tel",id:"number",autoComplete:"number"}),(0,w.jsx)(v.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})]})]})})},A="ContactList_list__csErn",F="ContactItem_list-item__A8TMw",I="ContactItem_contact-item__UfPOK",L="ContactItem_del-btn__3fJus",P=function(e){var n=e.id,t=e.name,a=e.number,r=(0,c.I0)();return(0,w.jsx)("li",{className:F,children:(0,w.jsxs)("div",{className:I,children:[(0,w.jsxs)("p",{children:[t,": ",a]}),(0,w.jsx)("button",{type:"button",className:L,onClick:function(){return r((0,o.GK)(n))},children:"Delete"})]})})},S=function(){var e=(0,c.v9)(h);return(0,w.jsx)(w.Fragment,{children:e&&(0,w.jsx)("ul",{className:A,children:e.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,w.jsx)(P,{id:n,name:t,number:a},n)}))})})},D=t(4808),E="ContactForm_contact-label__DeBwX",R="ContactForm_contact-input__AOTGb",T=function(){var e=(0,c.v9)(f)||"",n=(0,c.I0)();return(0,w.jsxs)("label",{className:E,children:["Find contact by name",(0,w.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){return n((0,D.T)(e.target.value))},className:R})]})},W=t(8593),z="Loader_loader__+lRPl",J=function(){var e=(0,c.v9)(m);return(0,w.jsx)(W.fe,{visible:e,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:z})},K="ErrorMessage_err-title__bQm71",O=function(){var e=(0,c.v9)(d);return(0,w.jsx)(w.Fragment,{children:e&&(0,w.jsx)("h2",{className:K,children:"ERROR: ".concat(e)})})},q=function(){var e=(0,c.I0)();return(0,s.useEffect)((function(){e((0,o.yF)())}),[e]),(0,w.jsxs)("div",{className:a,children:[(0,w.jsx)("h1",{className:r,children:"Phonebook"}),(0,w.jsx)(k,{}),(0,w.jsx)("h2",{className:r,children:"Contacts"}),(0,w.jsx)(T,{}),(0,w.jsx)(O,{}),(0,w.jsx)(J,{}),(0,w.jsx)(S,{})]})}}}]);
//# sourceMappingURL=336.c007bb10.chunk.js.map