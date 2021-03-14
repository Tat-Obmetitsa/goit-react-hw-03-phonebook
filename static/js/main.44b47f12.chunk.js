(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={form__list:"ContactList_form__list__XrpIR",form__list_button:"ContactList_form__list_button__dq9pU"}},12:function(t,e,n){t.exports={form__label:"SearchFilter_form__label__1lzq8",form__input:"SearchFilter_form__input__1RvuV"}},2:function(t,e,n){t.exports={form:"AddContact_form__1GYoB",form__label:"AddContact_form__label__3Ceb_",form__input:"AddContact_form__input__3sgOd",form__button:"AddContact_form__button__18OqV"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(13),r=n.n(o),i=(n(20),n(15)),s=n(5),l=n(6),u=n(8),m=n(7),_=n(9),b=n.n(_),d=n(14),f=n(2),h=n.n(f),p=n(3),j=n.n(p),O=n(0),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=j.a.generate(),t.numberInputId=j.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{className:h.a.form,onSubmit:this.handleSubmit,children:[Object(O.jsxs)("label",{className:h.a.form_label,htmlFor:this.nameInputId,children:["Name",Object(O.jsx)("input",{className:h.a.form__input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(O.jsxs)("label",{className:h.a.form_label,htmlFor:this.numberInputId,children:["Number",Object(O.jsx)("input",{className:h.a.form__input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(O.jsx)("button",{type:"submit",className:h.a.form__button,children:"Add contact"})]})}}]),n}(a.Component),v=n(11),x=n.n(v),g=function(t){var e=t.contacts,n=t.deleteContact;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("ul",{className:x.a.form__list,children:e.map((function(t){return Object(O.jsxs)("li",{children:[Object(O.jsxs)("span",{children:[t.name,": "]}),Object(O.jsx)("span",{children:t.number}),Object(O.jsx)("button",{type:"button",className:x.a.form__list_button,onClick:function(){return n(t.id)},children:"Delete contact"})]},t.id)}))})})},S=n(12),y=n.n(S),N=function(t){var e=t.value,n=t.onChange;return Object(O.jsxs)("label",{className:y.a.form__label,children:["Find contacts by name",Object(O.jsx)("input",{type:"text",name:"name",value:e,onChange:n,className:y.a.form__input})]})},I=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){if(t.state.contacts.find((function(t){return e.name.toLowerCase()===t.name.toLowerCase()})))alert("".concat(e.name," is already in contacts"));else{var n={id:j.a.generate(),name:e.name,number:e.number};t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(i.a)(e))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLocaleLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){console.log("App componentDidUpdate");var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state.filter;return Object(O.jsxs)("div",{className:b.a.container,children:[Object(O.jsx)("h1",{className:b.a.container__title,children:"Phonebook"}),Object(O.jsx)(C,{onSubmit:this.addContact}),Object(O.jsx)("h2",{className:b.a.container__title,children:"Contacts"}),Object(O.jsx)(N,{value:t,onChange:this.changeFilter}),Object(O.jsx)(g,{contacts:this.filterContacts(),deleteContact:this.deleteContact})]})}}]),n}(a.Component);r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={container:"App_container__16xz_",container__title:"App_container__title__14j1C"}}},[[30,1,2]]]);
//# sourceMappingURL=main.44b47f12.chunk.js.map