(this.webpackJsonpview=this.webpackJsonpview||[]).push([[7],{142:function(e,t,a){"use strict";var i=a(12),n=a(13),o=a(15),r=a(14),l=a(0),s=a.n(l),c=a(19),m=a(18),p=a(569),d=a(66),u=a(26),h=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={main:[],item:[]},e.UNSAFE_componentWillReceiveProps=function(){p.a.items.map((function(t,a){return t.type&&"group"===t.type&&e.getCollapse(t),!1}))},e.getCollapse=function(t){t.children&&t.children.filter((function(a){return a.type&&"collapse"===a.type?e.getCollapse(a):a.type&&"item"===a.type&&document.location.pathname===m.a.basename+a.url&&e.setState({item:a,main:t}),!1}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.items.map((function(t,a){return t.type&&"group"===t.type&&e.getCollapse(t,a),!1}))}},{key:"render",value:function(){var e,t,a="",i="Welcome";return this.state.main&&"collapse"===this.state.main.type&&(e=s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:d.a.BLANK_LINK},this.state.main.title))),this.state.item&&"item"===this.state.item.type&&(i=this.state.item.title,t=s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement("a",{href:d.a.BLANK_LINK},i)),!1!==this.state.item.breadcrumbs&&(a=s.a.createElement("div",{className:"page-header"},s.a.createElement("div",{className:"page-block"},s.a.createElement("div",{className:"row align-items-center"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"page-header-title"},s.a.createElement("h5",{className:"m-b-10"},i)),s.a.createElement("ul",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(c.b,{to:"/"},s.a.createElement("i",{className:"feather icon-home"}))),e,t))))))),document.title=i+" | Able Pro Premium React + Redux Admin Template",s.a.createElement(u.a,null,a)}}]),a}(l.Component);t.a=h},569:function(e,t,a){"use strict";t.a={items:[{id:"navigation",title:"Navigation",type:"group",icon:"icon-navigation",children:[{id:"soal",title:"Soal",type:"item",icon:"feather icon-layout",url:"/dashboard/HomeSoal"},{id:"sub_bab_soal",title:"Sub Bab soal",type:"item",icon:"feather icon-book",url:"/dashboard/SubBabSoal"},{id:"konsep_soal",title:"Konsep soal",type:"item",icon:"feather icon-book",url:"/dashboard/KonsepSoal"},{id:"utbk",title:"UTBK",type:"item",icon:"feather icon-book",url:"/dashboard/UTBK"},{id:"review_soal",title:"Video Materi",type:"item",icon:"feather icon-film",url:"/dashboard/Materi"},{id:"paket_soal",title:"Paket Soal",type:"item",icon:"feather icon-book",url:"/dashboard/PaketSoal"},{id:"slide_content",title:"Slide Content",type:"item",icon:"feather icon-book",url:"/dashboard/SlideContent"},{id:"paket_app",title:"Paket",type:"item",icon:"feather icon-book",url:"/dashboard/PaketApp"},{id:"transaksi",title:"Transaksi",type:"item",icon:"feather icon-shopping-cart",url:"/dashboard/Transaksi"},{id:"invoiceSetup",title:"Invoice Setup",type:"item",icon:"feather icon-file-text",url:"/dashboard/InvoiceSetup"},{id:"pertanyaan",title:"Pertanyaan",type:"item",icon:"feather icon-help-circle",url:"/dashboard/Bantuan"},{id:"users",title:"Users",type:"item",icon:"feather icon-users",url:"/dashboard/Users"},{id:"notifikasi",title:"Notifikasi",type:"item",icon:"feather icon-bell",url:"/dashboard/Notifikasi"}]}]}},66:function(e,t,a){"use strict";t.a={BLANK_LINK:"#"}}}]);
//# sourceMappingURL=7.4800364d.chunk.js.map