(this.webpackJsonpview=this.webpackJsonpview||[]).push([[74],{105:function(e,t,a){"use strict";t.decode=t.parse=a(126),t.encode=t.stringify=a(127)},119:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=(a(120),a(75),a(81),a(117));t.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{onDragEnd:e.handleOnDragEnd},l.a.createElement("table",{style:{width:"100%"}},l.a.createElement("thead",null,l.a.createElement("tr",null,e.thList.map((function(e,t){return l.a.createElement("th",{key:t},e)})))),l.a.createElement(r.c,{droppableId:e.dropID},(function(t,a){return l.a.createElement("tbody",Object.assign({ref:t.innerRef},t.droppableProps),e.tdList,t.placeholder)})))))}},120:function(e,t,a){},126:function(e,t,a){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,a,r){t=t||"&",a=a||"=";var i={};if("string"!==typeof e||0===e.length)return i;var c=/\+/g;e=e.split(t);var o=1e3;r&&"number"===typeof r.maxKeys&&(o=r.maxKeys);var u=e.length;o>0&&u>o&&(u=o);for(var s=0;s<u;++s){var m,p,d,f,b=e[s].replace(c,"%20"),E=b.indexOf(a);E>=0?(m=b.substr(0,E),p=b.substr(E+1)):(m=b,p=""),d=decodeURIComponent(m),f=decodeURIComponent(p),n(i,d)?l(i[d])?i[d].push(f):i[d]=[i[d],f]:i[d]=f}return i};var l=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},127:function(e,t,a){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,a,c){return t=t||"&",a=a||"=",null===e&&(e=void 0),"object"===typeof e?r(i(e),(function(i){var c=encodeURIComponent(n(i))+a;return l(e[i])?r(e[i],(function(e){return c+encodeURIComponent(n(e))})).join(t):c+encodeURIComponent(n(e[i]))})).join(t):c?encodeURIComponent(n(c))+a+encodeURIComponent(n(e)):""};var l=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function r(e,t){if(e.map)return e.map(t);for(var a=[],n=0;n<e.length;n++)a.push(t(e[n],n));return a}var i=Object.keys||function(e){var t=[];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.push(a);return t}},75:function(e,t,a){"use strict";var n=a(129),l=a.n(n).a.create({baseURL:"https://wilirahmatm.xyz"});t.a=l},81:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(19),i=a(97),c=a.n(i);t.a=function(e){return l.a.createElement("div",{className:c.a.container,onClick:e.onClick},""===e.link?l.a.createElement("div",{className:c.a.nolink},e.title):l.a.createElement(r.b,{to:e.link},e.title))}},965:function(e,t,a){"use strict";a.r(t);var n=a(87),l=a.n(n),r=a(123),i=a(124),c=a(0),o=a.n(c),u=a(966),s=a.n(u),m=a(75),p=a(81),d=a(119),f=a(117);t.default=function(e){var t=Object(c.useState)("main"),n=Object(i.a)(t,2),u=n[0],b=n[1],E=Object(c.useState)(""),_=Object(i.a)(E,2),h=_[0],g=_[1],k=Object(c.useState)(!1),v=Object(i.a)(k,2),y=v[0],j=v[1],O=Object(c.useState)(!1),C=Object(i.a)(O,2),S=C[0],I=C[1],w=Object(c.useState)(!1),x=Object(i.a)(w,2),F=x[0],L=x[1],D=Object(c.useState)(!1),R=Object(i.a)(D,2),N=R[0],A=R[1],T=Object(c.useState)(!1),U=Object(i.a)(T,2),B=U[0],K=U[1],P=Object(c.useState)(!1),W=Object(i.a)(P,2),J=W[0],H=W[1],X=Object(c.useState)([]),q=Object(i.a)(X,2),z=q[0],M=q[1],Q=Object(c.useState)([]),Y=Object(i.a)(Q,2),G=Y[0],V=Y[1],Z=Object(c.useState)([]),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ae=Object(c.useState)([]),ne=Object(i.a)(ae,2),le=(ne[0],ne[1],Object(c.useState)([])),re=Object(i.a)(le,2),ie=re[0],ce=re[1],oe=Object(c.useState)([]),ue=Object(i.a)(oe,2),se=ue[0],me=ue[1],pe=Object(c.useState)(0),de=Object(i.a)(pe,2),fe=(de[0],de[1],Object(c.useState)(0)),be=Object(i.a)(fe,2),Ee=be[0],_e=be[1],he=Object(c.useState)(0),ge=Object(i.a)(he,2),ke=ge[0],ve=ge[1],ye=Object(c.useState)(0),je=Object(i.a)(ye,2),Oe=je[0],Ce=je[1],Se=Object(c.useState)(0),Ie=Object(i.a)(Se,2),we=Ie[0],xe=Ie[1],Fe=Object(c.useState)([]),Le=Object(i.a)(Fe,2),De=Le[0],Re=Le[1],Ne=Object(c.useState)(""),Ae=Object(i.a)(Ne,2),Te=Ae[0],Ue=Ae[1],Be=Object(c.useState)(""),Ke=Object(i.a)(Be,2),Pe=Ke[0],We=Ke[1],Je=Object(c.useState)(""),He=Object(i.a)(Je,2),Xe=He[0],qe=He[1],ze=function(e){Ue(e.target.value)},Me=function(){m.a.get("/paket_soal?tipe=tryout").then((function(e){M(e.data)}))},Qe=function(e){m.a.get("/tryout_part?id_paket=".concat(e)).then((function(t){200==t.status&&(V(t.data),t.data.map((function(t,a){m.a.get("/isi_paket_soal?tipe=tryout&id="+e+"&id_tryout_part="+t.id).then((function(e){200==e.status&&te((function(a){return a.concat({id:t.id,nama_part:t.nama_part,isi_soal:e.data})}))}))})))})),console.log(ee)};Object(c.useEffect)((function(){function e(){return(e=Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.a.get("/mapel").then((function(e){Re(e.data)})),Me();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),y&&(Me(),j(!1)),S&&(te([]),Qe(we),I(!1))}),[y,S]);var Ye=function(e){var t=e,a="",n=t/3600,l=(t%=3600)/60,r=t%=60;return parseInt(n)>0&&(a+=parseInt(n)+" Jam "),parseInt(l)>0&&(a+=parseInt(l)+" Menit "),parseInt(r)>0&&(a+=parseInt(r)+" Detik"),a.toString()},Ge=o.a.createElement("div",{className:s.a.panel_part_tryout},o.a.createElement("span",null,"Bagian Soal : "),o.a.createElement("select",{value:Pe,onChange:function(e){We(e.target.value)}},o.a.createElement("option",{value:"",disabled:!0}),G.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.nama_part)})))),Ve=o.a.createElement("div",{className:s.a.panel_input_review},o.a.createElement("div",{className:s.a.panel_input_review_layer_inside},o.a.createElement("h1",null,"TryOut ",(z.length+1).toString()),o.a.createElement("span",null,"Waktu : "),o.a.createElement("input",{type:"number",min:"0",placeholder:"jam",onChange:function(e){_e(e.target.value)}}),o.a.createElement("input",{type:"number",min:"0",placeholder:"menit",onChange:function(e){ve(e.target.value)}}),o.a.createElement("input",{type:"number",min:"0",placeholder:"detik",onChange:function(e){Ce(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(p.a,{link:"",title:"cancel",onClick:function(){b("main")}}),o.a.createElement(p.a,{link:"",title:"save",onClick:function(){return function(){if(0!==Ee||0!==ke||0!==Oe){var e=3600*parseInt(Ee)+60*parseInt(ke)+parseInt(Oe),t={deskripsi:"TryOut "+(z.length+1).toString(),waktu:e,id_mapel:0,id_bab:0,id_kelas:0,id_level:0,tipe:"tryout"};m.a.post("/paket_soal",t).then((function(e){console.log(e)})),j(!0),b("main"),_e(0),ve(0),Ce(0)}else alert("isi semua data")}()}}))),Ze=o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"TryOut"),o.a.createElement(p.a,{link:"",title:"Buat TryOut",onClick:function(){b("add tryout")}}),o.a.createElement(d.a,{dropID:"drop-1",thList:["no","judul","Deskripsi","Action"],tdList:z.map((function(e,t){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,t+1),o.a.createElement("td",null,e.deskripsi),o.a.createElement("td",null,e.jml_soal+" Soal ,"+Ye(e.waktu)),o.a.createElement("td",null,o.a.createElement("a",{href:"#0",onClick:function(){return t=e.id,I(!0),xe(t),void b("isi soal");var t}},"edit"),"||",o.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t=a(105);t=t.stringify({id:e}),m.a.delete("/paket_soal",{headers:{"Content-Type":"application/x-www-form-urlencoded"},data:t}).then((function(e){console.log(e),201===e.status&&j(!0)}))}(e.id)}},"hapus")))}))})),$e=o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Detail Soal"),se.map((function(e){return o.a.createElement("div",{key:e.id},o.a.createElement("p",null,e.soal),o.a.createElement("p",null,e.pil_a),o.a.createElement("p",null,e.pil_b),o.a.createElement("p",null,e.pil_c),o.a.createElement("p",null,e.pil_d),o.a.createElement("p",null,e.pil_e),o.a.createElement("p",null,e.jawaban),o.a.createElement("p",null,e.pembahasan),o.a.createElement(p.a,{link:"",title:"Kembali",onClick:function(){b("isi soal")}}))}))),et=o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Tambah Soal"),o.a.createElement("input",{type:"text",placeholder:"Cari Soal",onChange:function(e){g(e.target.value)}})," ",o.a.createElement("button",{onClick:function(){return m.a.get("/bank_soal?cari=".concat(h)).then((function(e){ce(e.data)})),void j(!0)}},"Cari"),Ge,o.a.createElement(d.a,{dropID:"drop-1",thList:["no","Hasil Pencarian",""],tdList:ie.map((function(e,t){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,t+1),o.a.createElement("td",null,e.soal.substring(0,100)," . . ."),o.a.createElement("td",null,o.a.createElement("a",{href:"#0",onClick:function(){return function(e){if(""===Pe)alert("pilih bagian soal");else{var t={id_paket:we,id_tryout_part:Pe,id_soal:e,no_soal:z.length},a=z.filter((function(e){return e.id==we})),n={id:a[0].id,jml_soal:parseInt(a[0].jml_soal)+1,update_jml_soal:"true"},l={id:e,tryout_used:1};m.a.post("/isi_paket_soal",t).then((function(e){console.log(e),200==e.status&&(b("main"),te([]),Qe(we),b("isi soal"),ce([]),j(!0))})),m.a.put("/paket_soal",n).then((function(e){console.log(e)})),m.a.put("/bank_soal",l).then((function(e){console.log(e)})),L(!1)}}(e.id)}},"tambahkan")))}))}),o.a.createElement(p.a,{link:"",title:"Kembali",onClick:function(){L(!1)}}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:s.a.container},"main"==u?Ze:null,"add tryout"==u?Ve:null,"isi soal"==u?function(){var e=z.filter((function(e){return e.id==we}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,e[0].deskripsi),N?o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,"Waktu : "),o.a.createElement("input",{type:"number",min:"0",placeholder:"jam",value:Ee,onChange:function(e){_e(e.target.value)}}),o.a.createElement("input",{type:"number",min:"0",placeholder:"menit",value:ke,onChange:function(e){ve(e.target.value)}}),o.a.createElement("input",{type:"number",min:"0",placeholder:"detik",value:Oe,onChange:function(e){Ce(e.target.value)}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){A(!N)}},"cancel"),o.a.createElement("button",{onClick:function(){return function(){var e=3600*parseInt(Ee)+60*parseInt(ke)+parseInt(Oe),t={id:z.filter((function(e){return e.id==we}))[0].id,id_mapel:0,id_bab:0,id_kelas:0,id_level:0,waktu:e};m.a.put("/paket_soal",t).then((function(e){console.log(e)})),j(!0),A(!N)}()}},"save")):o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,"Waktu : ",Ye(e[0].waktu)),o.a.createElement("br",null),o.a.createElement("br",null),B?o.a.createElement(o.a.Fragment,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){return function(e){var t=e;_e(parseInt(t/3600)),t%=3600,ve(parseInt(t/60)),Ce(t%=60),j(!0),A(!N)}(e[0].waktu)}},"edit"),o.a.createElement("button",{onClick:function(){K(!0)}},"Buat Bagian"))),B?o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement("br",null),J?o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"text",placeholder:"Nama Bagian",onChange:function(e){qe(e.target.value)}})):o.a.createElement(o.a.Fragment,null,o.a.createElement("select",{value:Te,onChange:ze},o.a.createElement("option",{value:"",disabled:!0}),De.map((function(e){return o.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)})))),o.a.createElement("button",{onClick:function(){return H(!J),Ue(""),void qe("")}},J?"mapel":"custom"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){K(!B)}},"cancel"),o.a.createElement("button",{onClick:function(){return function(){if(""==Te){var e={id_paket:we,id_mapel:0,nama_part:Xe};m.a.post("/tryout_part",e).then((function(e){console.log(e),200==e.status&&(b("main"),te([]),Qe(we),b("isi soal"),ce([]),j(!0))}))}else m.a.get("/mapel?id="+Te).then((function(e){var t={id_paket:we,id_mapel:Te,nama_part:e.data[0].deskripsi};m.a.post("/tryout_part",t).then((function(e){console.log(e),200==e.status&&(b("main"),te([]),Qe(we),b("isi soal"),ce([]),j(!0))}))}));K(!B)}()}},"save")):o.a.createElement(o.a.Fragment,null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:s.a.button_flex_display},o.a.createElement(p.a,{link:"",title:"Kembali",onClick:function(){b("main")}}),o.a.createElement(p.a,{link:"",title:"Tambah Soal",onClick:function(){L(!0)}})),o.a.createElement("br",null),ee.sort((function(e,t){return parseInt(e.id)-parseInt(t.id)})).map((function(e,t){return o.a.createElement("div",{key:t},o.a.createElement("h1",null,e.nama_part),o.a.createElement(d.a,{dropID:t.toString(),handleOnDragEnd:function(t){return function(e,t){var a=t,n=e.source.index,l=e.destination.index;if(l>=a.length)for(var r=l-a.length+1;r--;)a.push(void 0);a.splice(l,0,a.splice(n,1)[0]);for(var i=[],c=0;c<a.length;c++){var o={id:a[c].id,no_soal:c+1};i.push(o)}var u={data_nomor:i};m.a.put("/isi_paket_soal",u).then((function(e){console.log(e),200==e.status&&(b("main"),te([]),Qe(we),b("isi soal"),ce([]),j(!0))}))}(t,e.isi_soal)},thList:["no","soal","Action"],tdList:e.isi_soal.map((function(e,n){return o.a.createElement(f.b,{key:e.id,draggableId:e.id,index:n},(function(l,r){return o.a.createElement("tr",Object.assign({ref:l.innerRef},l.draggableProps,l.dragHandleProps),o.a.createElement("td",null,n+1),o.a.createElement("td",null,e.soal.substring(0,100)," . . ."),o.a.createElement("td",null,o.a.createElement("a",{href:"#0",onClick:function(){return function(e,t){var a=ee[e].isi_soal.filter((function(e){return e.id==t}));me(a),b("detail soal"),j(!0)}(t,e.id)}},"Lihat Detail"),"||",o.a.createElement("a",{href:"#0",onClick:function(){return function(e,t){var n=a(105);n=n.stringify({id:e});var l={id:z[0].id,jml_soal:parseInt(z[0].jml_soal)-1,update_jml_soal:"true"},r={id:t,tryout_used:0};m.a.delete("/isi_paket_soal",{headers:{"Content-Type":"application/x-www-form-urlencoded"},data:n}).then((function(e){console.log(e),setTimeout((function(){b("main"),te([]),Qe(we),b("isi soal"),j(!0)}),3e3)})),m.a.put("/paket_soal",l).then((function(e){console.log(e)})),m.a.put("/bank_soal",r).then((function(e){console.log(e)}))}(e.id,e.id_soal)}},"hapus")))}))}))}))})))}():null,"detail soal"==u?$e:null),F?o.a.createElement("div",{className:s.a.tambah_soal},o.a.createElement("div",{className:s.a.layer1},et)):null)}},966:function(e,t,a){e.exports={container:"styles_container__1ftOA",tambah_soal:"styles_tambah_soal__2kLSX",layer1:"styles_layer1__3oLYx",panel_part_tryout:"styles_panel_part_tryout__16IQu",button_flex_display:"styles_button_flex_display__4OBFh"}},97:function(e,t,a){e.exports={container:"styles_container__2qmjW",nolink:"styles_nolink__1-KRX"}}}]);
//# sourceMappingURL=74.7c6ced43.chunk.js.map