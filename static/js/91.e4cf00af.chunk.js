(this.webpackJsonpview=this.webpackJsonpview||[]).push([[91],{73:function(e,t,a){"use strict";var n=a(122),l=a.n(n).a.create({baseURL:"https://fisikamu.space"});t.a=l},74:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(19),i=a(87),r=a.n(i);t.a=function(e){return l.a.createElement("div",{className:r.a.container,onClick:e.onClick},""===e.link?l.a.createElement("div",{className:r.a.nolink},e.title):l.a.createElement(c.b,{to:e.link},e.title))}},87:function(e,t,a){e.exports={container:"styles_container__2qmjW",nolink:"styles_nolink__1-KRX"}},93:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=(a(94),a(73),a(74),a(91));t.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{onDragEnd:e.handleOnDragEnd},l.a.createElement("table",{style:{width:"100%"}},l.a.createElement("thead",null,l.a.createElement("tr",null,e.thList.map((function(e,t){return l.a.createElement("th",{key:t},e)})))),l.a.createElement(c.c,{droppableId:e.dropID},(function(t,a){return l.a.createElement("tbody",Object.assign({ref:t.innerRef},t.droppableProps),e.tdList,t.placeholder)})))))}},94:function(e,t,a){},993:function(e,t,a){"use strict";a.r(t);var n=a(84),l=a.n(n),c=a(107),i=a(109),r=a(0),o=a.n(r),u=a(994),s=a.n(u),m=a(73),d=a(74),f=a(93);t.default=function(e){var t=Object(r.useState)([]),n=Object(i.a)(t,2),u=n[0],p=n[1],b=Object(r.useState)("main"),E=Object(i.a)(b,2),h=E[0],_=E[1],j=Object(r.useState)(""),O=Object(i.a)(j,2),g=O[0],v=O[1],k=Object(r.useState)(""),y=Object(i.a)(k,2),S=y[0],w=y[1],C=Object(r.useState)(""),D=Object(i.a)(C,2),F=D[0],N=D[1],x=Object(r.useState)(new FormData),L=Object(i.a)(x,2),A=L[0],I=(L[1],Object(r.useState)(!1)),J=Object(i.a)(I,2),R=J[0],T=J[1],G=Object(r.useState)(!1),K=Object(i.a)(G,2),U=K[0],W=K[1],q=Object(r.useState)(!1),B=Object(i.a)(q,2),P=B[0],X=B[1],z=Object(r.useState)(!1),H=Object(i.a)(z,2),M=H[0],Q=H[1],V=Object(r.useState)(null),Y=Object(i.a)(V,2),Z=Y[0],$=Y[1];Object(r.useEffect)((function(){function e(){return(e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),R&&(ee(),T(!1)),M&&(v(""),w(""),Q(!1))}),[R,M,P]);var ee=function(){m.a.get("/slide_content").then((function(e){p(e.data)}))},te=o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{dropID:"drop-1",thList:["no","Title","Gambar","Action"],tdList:u.map((function(e,t){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,t+1),o.a.createElement("td",null,e.title),o.a.createElement("td",null,e.img),o.a.createElement("td",null,o.a.createElement("a",{href:"#0",onClick:function(){return t=e,X(!0),v(t.title),w(t.img),$(t),void W(!0);var t}},"edit")," ","||"," ",o.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t=a(111);t=t.stringify({id:e.id}),m.a.delete("/slide_content",{headers:{"Content-Type":"application/x-www-form-urlencoded"},data:t}).then((function(e){console.log(e),201===e.status&&(_("main"),T(!0))}))}(e)}},"hapus")))}))}),o.a.createElement("br",null),o.a.createElement(d.a,{link:"",title:"Tambah Data",onClick:function(){W(!0)}})),ae=o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Tambah Data"),o.a.createElement("input",{value:g,type:"text",placeholder:"Judul",onChange:function(e){v(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("span",null,"Gambar : "),o.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files,a=t[0].name.split(".").length,n=Date.now(),l=t[0].name.split(".")[a-1];N("slide_"+n+"."+l),FileReader&&t&&t.length&&(A.append("name","slide_"+n),A.append("name_before","slide_"+n),A.append("file",t[0]))}.bind(this),className:"filetype"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(d.a,{link:"",title:"Submit",onClick:P?function(){return function(){var e={id:Z.id,title:g,img:S};m.a.put("/slide_content",e).then((function(e){console.log(e),200==e.status&&(v(""),w(""),W(!1),T(!0))}))}()}:function(){return function(){if(null!==A&&""!==g){var e={title:g,img:"/uploads/"+F};m.a.post("/slide_content",e).then((function(e){console.log(e)})),m.a.post("/file_upload",A).then((function(e){console.log(e)})),T(!0),W(!1)}else alert("Isi Semua Data")}()}}),o.a.createElement(d.a,{link:"",title:"Kembali",onClick:function(){return _("main"),Q(!0),X(!1),void W(!1)}}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:s.a.container},"main"===h?te:null),U?o.a.createElement("div",{className:s.a.tambah_soal},o.a.createElement("div",{className:s.a.layer1},ae)):null)}},994:function(e,t,a){e.exports={container:"styles_container__2F-BE",tambah_soal:"styles_tambah_soal__7WAAD",layer1:"styles_layer1__2hUJA"}}}]);
//# sourceMappingURL=91.e4cf00af.chunk.js.map