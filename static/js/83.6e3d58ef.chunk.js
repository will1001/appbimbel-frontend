(this.webpackJsonpview=this.webpackJsonpview||[]).push([[83],{112:function(e,t,a){"use strict";var n=a(184),l=a.n(n).a.create({baseURL:"https://wilirahmatm.xyz"});t.a=l},120:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(20),r=a(139),c=a.n(r);t.a=function(e){return l.a.createElement("div",{className:c.a.container,onClick:e.onClick},""===e.link?l.a.createElement("div",{className:c.a.nolink},e.title):l.a.createElement(i.b,{to:e.link},e.title))}},139:function(e,t,a){e.exports={container:"styles_container__2qmjW",nolink:"styles_nolink__1-KRX"}},278:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=(a(279),a(112),a(120),a(324));t.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{onDragEnd:e.handleOnDragEnd},l.a.createElement("table",{style:{width:"100%"}},l.a.createElement("thead",null,l.a.createElement("tr",null,e.thList.map((function(e,t){return l.a.createElement("th",{key:t},e)})))),l.a.createElement(i.c,{droppableId:e.dropID},(function(t,a){return l.a.createElement("tbody",Object.assign({ref:t.innerRef},t.droppableProps),e.tdList,t.placeholder)})))))}},279:function(e,t,a){},861:function(e,t,a){"use strict";a.r(t);var n=a(96),l=a.n(n),i=a(152),r=a(159),c=a(0),u=a.n(c),o=a(862),s=a.n(o),m=a(112),p=a(120),d=a(278);t.default=function(e){var t=Object(c.useState)(!1),a=Object(r.a)(t,2),n=a[0],o=a[1],b=Object(c.useState)(!1),E=Object(r.a)(b,2),f=E[0],v=E[1],h=Object(c.useState)(""),_=Object(r.a)(h,2),j=_[0],k=_[1],O=Object(c.useState)(""),g=Object(r.a)(O,2),w=g[0],y=g[1],S=Object(c.useState)([]),C=Object(r.a)(S,2),D=C[0],R=C[1],x=Object(c.useState)([]),L=Object(r.a)(x,2),N=L[0],F=L[1],I=Object(c.useState)([]),J=Object(r.a)(I,2),U=J[0],V=J[1],z=Object(c.useState)([]),B=Object(r.a)(z,2),K=B[0],q=B[1],G=Object(c.useState)(new FormData),M=Object(r.a)(G,2),P=M[0],T=(M[1],Object(c.useState)("")),W=Object(r.a)(T,2),X=W[0],A=W[1],H=Object(c.useState)(""),Q=Object(r.a)(H,2),Y=Q[0],Z=Q[1],$=Object(c.useState)(""),ee=Object(r.a)($,2),te=ee[0],ae=ee[1],ne=u.a.createElement("div",{className:s.a.panel_input_review},u.a.createElement("div",{className:s.a.panel_input_review_layer_inside},u.a.createElement("h1",null,"Buat Review"),u.a.createElement("input",{type:"text",placeholder:"Judul Video",onChange:function(e){k(e.target.value)}}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("span",null,"Upload Video : "),u.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files,a=t[0].name.split(".").length,n=Date.now(),l=t[0].name.split(".")[a-1];y("review_"+n+"."+l),FileReader&&t&&t.length&&(P.append("name","review_"+n),P.append("file",t[0]))}.bind(this)}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("span",null,"mata pelajaran "),u.a.createElement("select",{value:X,onChange:function(e){A(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0}),N.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"kelas "),u.a.createElement("select",{value:Y,onChange:function(e){Z(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0}),U.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Bab "),u.a.createElement("select",{value:te,onChange:function(e){ae(e.target.value)}},u.a.createElement("option",{value:"",disabled:!0}),K.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(p.a,{link:"",title:"cancel",onClick:function(){o((function(e){return!e}))}}),u.a.createElement(p.a,{link:"",title:"save",onClick:function(){return function(){if(null!==P&&""!==j&&""!==X&&""!==Y&&""!==te){var e={judul:j,link_video:"https://wilirahmatm.xyzuploads/"+w,id_kelas:Y,id_mapel:X,id_bab:te};m.a.post("/review",e).then((function(e){console.log(e)})),m.a.post("/file_upload",P).then((function(e){console.log(e)})),v(!0),o((function(e){return!e}))}else alert("Isi Semua Data")}()}}))),le=u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Review"),u.a.createElement(p.a,{link:"",title:"Tambah Data Review",onClick:function(){o((function(e){return!e}))}}),u.a.createElement(d.a,{dropID:"drop_1",thList:["no","judul","Video"],tdList:D.map((function(e){return u.a.createElement("tr",{key:e.id},u.a.createElement("td",null,e.id),u.a.createElement("td",null,e.judul),u.a.createElement("td",null,u.a.createElement("a",{href:e.link_video},e.link_video)))}))})),ie=function(){m.a.get("/review").then((function(e){R(e.data)}))};return Object(c.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ie(),m.a.get("/mapel").then((function(e){F(e.data)})),m.a.get("/kelas").then((function(e){V(e.data)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),""!==X&&m.a.get("/bab_soal?id_mapel="+X).then((function(e){q(e.data)})),f&&(ie(),v(!1))}),[X,f]),u.a.createElement("div",{className:s.a.container},n?ne:le)}},862:function(e,t,a){e.exports={container:"styles_container__mKMpn",panel_input_review:"styles_panel_input_review__1CGhU"}}}]);
//# sourceMappingURL=83.6e3d58ef.chunk.js.map