(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){},162:function(e,t,a){e.exports=a.p+"static/media/logo-calligraphy.1d5377a1.png"},165:function(e,t,a){e.exports=a.p+"static/media/instagram.83f3fcc0.svg"},167:function(e,t,a){e.exports=a(408)},374:function(e,t,a){},375:function(e,t,a){},376:function(e,t,a){},385:function(e,t,a){},386:function(e,t,a){},387:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){},407:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);a(168);var n=a(0),r=a.n(n),l=a(160),c=a.n(l),i=(a(150),a(11)),o=a(12),m=a(14),s=a(13),u=a(15),h=(a(374),a(161)),p=a(56),d=(a(375),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"iibyrakell-wrapper"},r.a.createElement("div",null,r.a.createElement("p",null,"Indigo Images By Rakell")))}}]),t}(n.Component)),f=a(82),E=a(81),v=(a(376),a(16)),b=a(162),g=a.n(b),j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={showMenu:!1,animate:!1},e.setWrapperRef=e.setWrapperRef.bind(Object(E.a)(e)),e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleMenu",value:function(){this.setState({showMenu:!this.state.showMenu,animate:!0})}},{key:"hideDropDown",value:function(e){this.setState(Object(f.a)({},e,!1))}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"render",value:function(){var e=this,t=this.state.showMenu;return r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("div",{className:"header-content"},window.innerWidth>1e3?r.a.createElement("div",{className:"left-header"},r.a.createElement(v.b,{to:"/"},r.a.createElement("p",null,"Home")),r.a.createElement(v.b,{to:"/about"},r.a.createElement("p",null,"About Me")),r.a.createElement(v.b,{to:"/portfolio"},r.a.createElement("p",null,"Portfolio"))):r.a.createElement("div",{style:{display:"none"}}),r.a.createElement("div",{className:"center-header"},r.a.createElement(v.b,{to:"/"},r.a.createElement("img",{src:g.a,alt:""}))),window.innerWidth>1e3?r.a.createElement("div",{className:"right-header-desktop"},r.a.createElement(v.b,{to:"/pricing"},r.a.createElement("p",null,"Pricing")),r.a.createElement(v.b,{to:"/reviews"},r.a.createElement("p",null,"Reviews")),r.a.createElement(v.b,{to:"/contact"},r.a.createElement("p",null,"Contact"))):r.a.createElement("div",{className:"right-header",ref:this.setWrapperRef},r.a.createElement("div",{className:"menu-icon-header",onClick:function(){return e.handleMenu()}},r.a.createElement("div",{className:t?"line-header l1-active-header":"l1-header line-header"}),r.a.createElement("div",{className:t?"line-header l2-active-header":"l2-header line-header"}),r.a.createElement("div",{className:t?"line-header l3-active-header":"l3-header line-header"})),r.a.createElement("div",{className:t?"mobile-menu-content-header":"hide-header",onClick:function(){return e.hideDropDown("showMenu")}},r.a.createElement(v.b,{to:"/"},r.a.createElement("p",null,"Home")),r.a.createElement("hr",{className:"hr-header"}),r.a.createElement(v.b,{to:"/about"},r.a.createElement("p",null,"About Me")),r.a.createElement("hr",{className:"hr-header"}),r.a.createElement(v.b,{to:"/portfolio"},r.a.createElement("p",null,"Portfolio")),r.a.createElement("hr",{className:"hr-header"}),r.a.createElement(v.b,{to:"/pricing"},r.a.createElement("p",null,"Pricing")),r.a.createElement("hr",{className:"hr-header"}),r.a.createElement(v.b,{to:"/reviews"},r.a.createElement("p",null,"Reviews")),r.a.createElement("hr",{className:"hr-header"}),r.a.createElement(v.b,{to:"/contact"},r.a.createElement("p",null,"Contact")),r.a.createElement("hr",{className:"hr-header"})))))}}]),t}(n.Component),O=(a(385),a(165)),y=a.n(O),w=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-wrapper"},r.a.createElement("a",{href:"https://www.instagram.com/iibyrakell",target:"blank_"},r.a.createElement("img",{alt:"",src:y.a})))}}]),t}(n.Component),N=(a(386),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-wrapper"},r.a.createElement("div",null,r.a.createElement("p",null,"About Indigo Images By Rakell")))}}]),t}(n.Component)),k=(a(387),a(166)),x=a.n(k),C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={firstName:"",lastName:"",email:"",phone:"",message:"",readyToSubmit:!1,formError:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"validatePhone",value:function(e){return/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(e)}},{key:"validateEmail",value:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},{key:"handleChange",value:function(e,t){this.setState(Object(f.a)({},e,t),this.formValidate)}},{key:"formValidate",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,r=e.phone;t.length>=1&&a.length>=1&&n.length>=5&&r.length>=7?this.setState({readyToSubmit:!0,formError:!1}):this.setState({readyToSubmit:!1})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(e);var a=this.state,n=a.firstName,r=a.lastName,l=a.email,c=a.phone,i=a.message;if(n=e.target.fname.value,r=e.target.lname.value,c=e.target.phone.value,l=e.target.email.value,n&&r&&!0===this.validateEmail(l)&&!0===this.validatePhone(c)){var o={firstName:n,lastName:r,email:l,phone:c,message:i};x.a.post("/api/contact-me",o).then(function(e){t.setState({firstName:"",lastName:"",email:"",phone:"",message:""})})}else this.setState({formError:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.firstName,n=t.lastName,l=t.email,c=t.phone,i=t.message;return r.a.createElement("div",{className:"contact-wrapper"},r.a.createElement("div",null,r.a.createElement("p",null,"Contact Indigo Images By Rakell")),r.a.createElement("form",{action:"submit",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},r.a.createElement("p",null,"First Name:"),r.a.createElement("input",{value:a,type:"text",name:"fname",onChange:function(t){return e.handleChange("firstName",t.target.value)},required:!0})),r.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},r.a.createElement("p",null,"Last Name:"),r.a.createElement("input",{value:n,type:"text",name:"lname",onChange:function(t){return e.handleChange("lastName",t.target.value)},required:!0})),r.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},r.a.createElement("p",null,"Phone:"),r.a.createElement("input",{value:c,type:"text",name:"phone",onChange:function(t){return e.handleChange("phone",t.target.value)},required:!0})),r.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},r.a.createElement("p",null,"Email:"),r.a.createElement("input",{value:l,type:"text",name:"email",onChange:function(t){return e.handleChange("email",t.target.value)},required:!0})),r.a.createElement("div",{style:{flexDirection:"row",display:"flex"}},r.a.createElement("p",null,"Message:"),r.a.createElement("input",{value:i,type:"text",name:"message",onChange:function(t){return e.handleChange("message",t.target.value)},required:!0})),r.a.createElement("button",{type:"submit"},"Submit")))}}]),t}(n.Component),S=(a(405),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"portfolio-wrapper"},r.a.createElement("div",null,r.a.createElement("p",null,"Portfolio Indigo Images By Rakell")))}}]),t}(n.Component)),R=(a(406),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"pricing-wrapper"},r.a.createElement("div",null,r.a.createElement("p",null,"Pricing Indigo Images By Rakell")))}}]),t}(n.Component)),I=(a(407),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"reviews-wrapper"},r.a.createElement("div",null,r.a.createElement("p",null,"Reviews Indigo Images By Rakell")))}}]),t}(n.Component)),D=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return r.a.createElement(p.b,Object.assign({},a,{render:function(e){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(t,e),r.a.createElement(w,e))}}))},M=r.a.createElement(p.d,null,r.a.createElement(D,{exact:!0,path:"/",component:d}),r.a.createElement(p.a,{exact:!0,from:"/about//",to:"/about"}),r.a.createElement(D,{exact:!0,path:"/about",component:N}),r.a.createElement(p.a,{exact:!0,from:"/contact//",to:"/contact"}),r.a.createElement(D,{exact:!0,path:"/contact",component:C}),r.a.createElement(p.a,{exact:!0,from:"/portfolio//",to:"/portfolio"}),r.a.createElement(D,{exact:!0,path:"/portfolio",component:S}),r.a.createElement(p.a,{exact:!0,from:"/pricing//",to:"/pricing"}),r.a.createElement(D,{exact:!0,path:"/pricing",component:R}),r.a.createElement(p.a,{exact:!0,from:"/reviews//",to:"/reviews"}),r.a.createElement(D,{exact:!0,path:"/reviews",component:I})),P=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,M)}}]),t}(n.Component);c.a.render(r.a.createElement(v.a,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.674929ca.chunk.js.map