(this.webpackJsonpview=this.webpackJsonpview||[]).push([[82],{106:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=(a(107),a(74),a(75),a(105));t.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{onDragEnd:e.handleOnDragEnd},l.a.createElement("table",{style:{width:"100%"}},l.a.createElement("thead",null,l.a.createElement("tr",null,e.thList.map((function(e,t){return l.a.createElement("th",{key:t},e)})))),l.a.createElement(c.c,{droppableId:e.dropID},(function(t,a){return l.a.createElement("tbody",Object.assign({ref:t.innerRef},t.droppableProps),e.tdList,t.placeholder)})))))}},107:function(e,t,a){},74:function(e,t,a){"use strict";var n=a(127),l=a.n(n).a.create({baseURL:"http://103.161.184.70"});t.a=l},75:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(19),r=a(97),i=a.n(r);t.a=function(e){return l.a.createElement("div",{className:i.a.container,onClick:e.onClick},""===e.link?l.a.createElement("div",{className:i.a.nolink},e.title):l.a.createElement(c.b,{to:e.link},e.title))}},97:function(e,t,a){e.exports={container:"styles_container__2qmjW",nolink:"styles_nolink__1-KRX"}},985:function(e,t,a){"use strict";a.r(t);var n=a(85),l=a.n(n),c=a(118),r=a(120),i=a(0),u=a.n(i),o=a(986),s=a.n(o),m=a(74),p=a(75),b=a(106);t.default=function(e){var t=Object(i.useState)([]),a=Object(r.a)(t,2),n=a[0],o=a[1],d=Object(i.useState)("main"),f=Object(r.a)(d,2),E=f[0],h=f[1],j=Object(i.useState)(""),O=Object(r.a)(j,2),_=O[0],v=O[1],g=Object(i.useState)(""),y=Object(r.a)(g,2),k=y[0],S=y[1],D=Object(i.useState)(""),w=Object(r.a)(D,2),N=w[0],F=w[1],C=Object(i.useState)(new FormData),L=Object(r.a)(C,2),R=L[0],x=(L[1],Object(i.useState)(!1)),I=Object(r.a)(x,2),J=I[0],A=I[1],G=Object(i.useState)(!1),K=Object(r.a)(G,2),P=K[0],q=K[1],B=Object(i.useState)(!1),H=Object(r.a)(B,2),T=H[0],U=H[1],W=Object(i.useState)(!1),X=Object(r.a)(W,2),z=X[0],M=X[1],Q=Object(i.useState)(null),V=Object(r.a)(Q,2),Y=V[0];V[1],Object(i.useEffect)((function(){function e(){return(e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),J&&(Z(),A(!1)),z&&(v(""),S(""),M(!1))}),[J,z,T]);var Z=function(){m.a.get("/bantuan").then((function(e){o(e.data)}))},$=u.a.createElement(u.a.Fragment,null,u.a.createElement(b.a,{dropID:"drop-1",thList:["no","Nama","Pertanyaan","No Hp","Email","Action"],tdList:n.map((function(e,t){return u.a.createElement("tr",{key:e.id},u.a.createElement("td",null,t+1),u.a.createElement("td",null,e.username),u.a.createElement("td",null,e.pertanyaan),u.a.createElement("td",null,e.no_hp),u.a.createElement("td",null,e.email))}))}),u.a.createElement("br",null)),ee=u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Tambah Data"),u.a.createElement("input",{value:_,type:"text",placeholder:"Judul",onChange:function(e){v(e.target.value)}}),u.a.createElement("br",null),u.a.createElement("span",null,"Gambar : "),u.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files,a=t[0].name.split(".").length,n=Date.now(),l=t[0].name.split(".")[a-1];F("slide_"+n+"."+l),FileReader&&t&&t.length&&(R.append("name","slide_"+n),R.append("file",t[0]))}.bind(this),className:"filetype"}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(p.a,{link:"",title:"Submit",onClick:T?function(){return function(){console.log("ASasf");var e={id:Y.id,title:_,img:k};m.a.put("/slide_content",e).then((function(e){console.log(e),200==e.status&&(v(""),S(""),q(!1),A(!0))}))}()}:function(){return function(){if(null!==R&&""!==_){var e={title:_,img:"http://103.161.184.70/uploads/"+N};m.a.post("/slide_content",e).then((function(e){console.log(e)})),m.a.post("/file_upload",R).then((function(e){console.log(e)})),A(!0),q(!1)}else alert("Isi Semua Data")}()}}),u.a.createElement(p.a,{link:"",title:"Kembali",onClick:function(){return h("main"),M(!0),U(!1),void q(!1)}}));return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:s.a.container},"main"===E?$:null),P?u.a.createElement("div",{className:s.a.tambah_soal},u.a.createElement("div",{className:s.a.layer1},ee)):null)}},986:function(e,t,a){e.exports={container:"styles_container__fvRFJ",tambah_soal:"styles_tambah_soal__28GD_",layer1:"styles_layer1__3Bo2D"}}}]);
//# sourceMappingURL=82.77b6f1f3.chunk.js.map