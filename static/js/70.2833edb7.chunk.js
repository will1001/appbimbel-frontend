(this.webpackJsonpview=this.webpackJsonpview||[]).push([[70],{105:function(e,t,a){"use strict";t.decode=t.parse=a(126),t.encode=t.stringify=a(127)},119:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=(a(120),a(75),a(81),a(117));t.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{onDragEnd:e.handleOnDragEnd},l.a.createElement("table",{style:{width:"100%"}},l.a.createElement("thead",null,l.a.createElement("tr",null,e.thList.map((function(e,t){return l.a.createElement("th",{key:t},e)})))),l.a.createElement(r.c,{droppableId:e.dropID},(function(t,a){return l.a.createElement("tbody",Object.assign({ref:t.innerRef},t.droppableProps),e.tdList,t.placeholder)})))))}},120:function(e,t,a){},126:function(e,t,a){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,a,r){t=t||"&",a=a||"=";var c={};if("string"!==typeof e||0===e.length)return c;var i=/\+/g;e=e.split(t);var u=1e3;r&&"number"===typeof r.maxKeys&&(u=r.maxKeys);var o=e.length;u>0&&o>u&&(o=u);for(var s=0;s<o;++s){var m,p,d,b,E=e[s].replace(i,"%20"),f=E.indexOf(a);f>=0?(m=E.substr(0,f),p=E.substr(f+1)):(m=E,p=""),d=decodeURIComponent(m),b=decodeURIComponent(p),n(c,d)?l(c[d])?c[d].push(b):c[d]=[c[d],b]:c[d]=b}return c};var l=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},127:function(e,t,a){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,a,i){return t=t||"&",a=a||"=",null===e&&(e=void 0),"object"===typeof e?r(c(e),(function(c){var i=encodeURIComponent(n(c))+a;return l(e[c])?r(e[c],(function(e){return i+encodeURIComponent(n(e))})).join(t):i+encodeURIComponent(n(e[c]))})).join(t):i?encodeURIComponent(n(i))+a+encodeURIComponent(n(e)):""};var l=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function r(e,t){if(e.map)return e.map(t);for(var a=[],n=0;n<e.length;n++)a.push(t(e[n],n));return a}var c=Object.keys||function(e){var t=[];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.push(a);return t}},75:function(e,t,a){"use strict";var n=a(129),l=a.n(n).a.create({baseURL:"https://wilirahmatm.xyz"});t.a=l},81:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(19),c=a(97),i=a.n(c);t.a=function(e){return l.a.createElement("div",{className:i.a.container,onClick:e.onClick},""===e.link?l.a.createElement("div",{className:i.a.nolink},e.title):l.a.createElement(r.b,{to:e.link},e.title))}},967:function(e,t,a){"use strict";a.r(t);var n=a(87),l=a.n(n),r=a(123),c=a(124),i=a(0),u=a.n(i),o=a(968),s=a.n(o),m=a(75),p=a(81),d=a(119),b=a(117);t.default=function(e){var t=Object(i.useState)("main"),n=Object(c.a)(t,2),o=n[0],E=n[1],f=Object(i.useState)(""),v=Object(c.a)(f,2),g=v[0],h=v[1],k=Object(i.useState)(""),_=Object(c.a)(k,2),j=_[0],O=_[1],y=Object(i.useState)(""),C=Object(c.a)(y,2),S=C[0],I=C[1],B=Object(i.useState)(""),w=Object(c.a)(B,2),K=(w[0],w[1]),T=Object(i.useState)(!1),U=Object(c.a)(T,2),x=U[0],F=U[1],A=Object(i.useState)(!1),L=Object(c.a)(A,2),D=L[0],R=L[1],N=Object(i.useState)(!1),P=Object(c.a)(N,2),q=P[0],z=P[1],W=Object(i.useState)(!1),J=Object(c.a)(W,2),H=(J[0],J[1]),M=Object(i.useState)([]),V=Object(c.a)(M,2),X=V[0],G=V[1],Q=Object(i.useState)([]),Y=Object(c.a)(Q,2),Z=Y[0],$=Y[1],ee=Object(i.useState)([]),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],le=Object(i.useState)([]),re=Object(c.a)(le,2),ce=re[0],ie=re[1],ue=Object(i.useState)(0),oe=Object(c.a)(ue,2),se=(oe[0],oe[1],Object(i.useState)("")),me=Object(c.a)(se,2),pe=me[0],de=me[1],be=Object(i.useState)(0),Ee=Object(c.a)(be,2),fe=Ee[0],ve=Ee[1],ge=Object(i.useState)(0),he=Object(c.a)(ge,2),ke=he[0],_e=he[1],je=Object(i.useState)(0),Oe=Object(c.a)(je,2),ye=Oe[0],Ce=Oe[1],Se=Object(i.useState)(0),Ie=Object(c.a)(Se,2),Be=Ie[0],we=Ie[1],Ke=Object(i.useState)([]),Te=Object(c.a)(Ke,2),Ue=(Te[0],Te[1],Object(i.useState)([])),xe=Object(c.a)(Ue,2),Fe=(xe[0],xe[1],Object(i.useState)([])),Ae=Object(c.a)(Fe,2),Le=Ae[0],De=Ae[1],Re=Object(i.useState)([]),Ne=Object(c.a)(Re,2),Pe=Ne[0],qe=Ne[1],ze=Object(i.useState)([]),We=Object(c.a)(ze,2),Je=We[0],He=We[1],Me=Object(i.useState)([]),Ve=Object(c.a)(Me,2),Xe=Ve[0],Ge=Ve[1],Qe=Object(i.useState)([]),Ye=Object(c.a)(Qe,2),Ze=Ye[0],$e=Ye[1],et=Object(i.useState)(""),tt=Object(c.a)(et,2),at=tt[0],nt=tt[1],lt=Object(i.useState)(""),rt=Object(c.a)(lt,2),ct=rt[0],it=rt[1],ut=Object(i.useState)(""),ot=Object(c.a)(ut,2),st=ot[0],mt=ot[1],pt=Object(i.useState)(""),dt=Object(c.a)(pt,2),bt=dt[0],Et=dt[1],ft=Object(i.useState)(""),vt=Object(c.a)(ft,2),gt=vt[0],ht=vt[1],kt=Object(i.useState)(""),_t=Object(c.a)(kt,2),jt=_t[0],Ot=_t[1],yt=Object(i.useState)(""),Ct=Object(c.a)(yt,2),St=Ct[0],It=Ct[1],Bt=function(e){h(e.target.value)},wt=function(e){ht(e.target.value)},Kt=function(e){Et(e.target.value)},Tt=function(e){Ot(e.target.value)},Ut=function(e){de(e.target.value)},xt=function(e){mt(e.target.value)},Ft=function(e){It(e.target.value)},At=function(e){var t=Z,a=e.source.index,n=e.destination.index;if(n>=t.length)for(var l=n-t.length+1;l--;)t.push(void 0);t.splice(n,0,t.splice(a,1)[0]),console.log("arr"),console.log(t);for(var r=[],c=0;c<t.length;c++){var i={id:t[c].id,no_soal:c+1};r.push(i)}var u={data_nomor:r};m.a.put("/isi_paket_soal",u).then((function(e){console.log(e),200==e.status&&(E("main"),$([]),Dt(Be),E("isi soal"),ne([]),F(!0))}))},Lt=function(){m.a.get("/paket_soal").then((function(e){G(e.data)}))},Dt=function(e){m.a.get("/isi_paket_soal?tipe=quiz&id=".concat(e)).then((function(e){$(e.data)})),we(e)};Object(i.useEffect)((function(){function e(){return(e=Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.a.get("/bab_soal").then((function(e){De(e.data)})),m.a.get("/tingkat_kesulitan").then((function(e){$e(e.data)})),Lt();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),x&&(Lt(),F(!1)),""!==at&&m.a.get("/bab_soal?id_mapel="+at).then((function(e){De(e.data)})),""!==st&&m.a.get("/subBab_soal?id_bab="+st).then((function(e){qe(e.data)})),""!==bt&&m.a.get("/konsep_soal?id_sub_bab="+bt).then((function(e){He(e.data)})),"UTBK"===g&&m.a.get("/utbk").then((function(e){Ge(e.data)}))}),[x,at,st,g]);var Rt=function(e){var t=e,a="",n=t/3600,l=(t%=3600)/60,r=t%=60;return parseInt(n)>0&&(a+=parseInt(n)+" Jam "),parseInt(l)>0&&(a+=parseInt(l)+" Menit "),parseInt(r)>0&&(a+=parseInt(r)+" Detik"),a.toString()},Nt=u.a.createElement("div",{className:s.a.panel_input_review},u.a.createElement("div",{className:s.a.panel_input_review_layer_inside},u.a.createElement("input",{type:"text",placeholder:"Nama Paket",onChange:function(e){O(e.target.value)}}),u.a.createElement("br",null),u.a.createElement("span",null,"Waktu : "),u.a.createElement("input",{type:"number",min:"0",placeholder:"jam",onChange:function(e){ve(e.target.value)}}),u.a.createElement("input",{type:"number",min:"0",placeholder:"menit",onChange:function(e){_e(e.target.value)}}),u.a.createElement("input",{type:"number",min:"0",placeholder:"detik",onChange:function(e){Ce(e.target.value)}}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("span",null,"Kategori Soal"),u.a.createElement("select",{value:g,onChange:Bt},u.a.createElement("option",{value:"",disabled:!0}),u.a.createElement("option",{value:"UTBK"},"UTBK"),u.a.createElement("option",{value:"BAB"},"BAB")),u.a.createElement("br",null),"BAB"==g?u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),u.a.createElement("span",null,"Bab "),u.a.createElement("select",{value:st,onChange:xt},u.a.createElement("option",{value:0,disabled:!0}),Le.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Sub Bab "),u.a.createElement("select",{value:bt,onChange:Kt},u.a.createElement("option",{value:0,disabled:!0}),Pe.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Konsep "),u.a.createElement("select",{value:jt,onChange:Tt},u.a.createElement("option",{value:0,disabled:!0}),Je.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Level Soal "),u.a.createElement("select",{value:St,onChange:Ft},u.a.createElement("option",{value:0,disabled:!0}),Ze.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Tahun Soal"),u.a.createElement("input",{type:"date",value:pe,onChange:Ut}),u.a.createElement("br",null)):"UTBK"==g?u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,"UTBK "),u.a.createElement("select",{value:gt,onChange:wt},u.a.createElement("option",{value:"",disabled:!0}),Xe.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("button",{onClick:function(e){return function(e){H(!0),K(e)}("UTBK")}},"+"),u.a.createElement("br",null),u.a.createElement("span",null,"Tahun Soal"),u.a.createElement("input",{type:"date",value:pe,onChange:Ut}),u.a.createElement("br",null)):u.a.createElement(u.a.Fragment,null),u.a.createElement("br",null),u.a.createElement(p.a,{link:"",title:"cancel",onClick:function(){E("main")}}),u.a.createElement(p.a,{link:"",title:"save",onClick:function(){return function(){if(""!==j||0!==fe||0!==ke||0!==ye||0!==st||0!==bt||0!==jt||0!==St){var e=3600*parseInt(fe)+60*parseInt(ke)+parseInt(ye),t={deskripsi:j,waktu:e,id_bab:st,id_sub_bab:bt,id_konsep:jt,id_level:St,id_utbk:gt,tipe:g};m.a.post("/paket_soal",t).then((function(e){console.log(e)})),F(!0),E("main"),ve(0),_e(0),Ce(0)}else alert("isi semua data")}()}}))),Pt=u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Paket Soal"),u.a.createElement(p.a,{link:"",title:"Buat Paket",onClick:function(){E("add quiz")}}),u.a.createElement(d.a,{dropID:"drop-1",thList:["no","judul","Kategori","Deskripsi","Action"],tdList:X.map((function(e,t){return u.a.createElement("tr",{key:e.id},u.a.createElement("td",null,t+1),u.a.createElement("td",null,e.deskripsi),u.a.createElement("td",null,e.tipe),u.a.createElement("td",null,e.jml_soal+" Soal ,"+Rt(e.waktu)),u.a.createElement("td",null,u.a.createElement("a",{href:"#0",onClick:function(){return t=e.id,$([]),Dt(t),void E("isi soal");var t}},"edit")," || ",u.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t=a(105);t=t.stringify({id:e}),m.a.delete("/paket_soal",{headers:{"Content-Type":"application/x-www-form-urlencoded"},data:t}).then((function(e){console.log(e),201===e.status&&F(!0)}))}(e.id)}},"hapus")))}))})),qt=u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Detail Soal"),ce.map((function(e){return u.a.createElement("div",{key:e.id},u.a.createElement("p",null,e.soal),u.a.createElement("p",null,e.pil_a),u.a.createElement("p",null,e.pil_b),u.a.createElement("p",null,e.pil_c),u.a.createElement("p",null,e.pil_d),u.a.createElement("p",null,e.pil_e),u.a.createElement("p",null,e.jawaban),u.a.createElement("p",null,e.pembahasan),u.a.createElement(p.a,{link:"",title:"Kembali",onClick:function(){E("isi soal")}}))}))),zt=u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Tambah Soal"),u.a.createElement("input",{type:"text",placeholder:"Cari Soal",onChange:function(e){I(e.target.value)}})," ",u.a.createElement("button",{onClick:function(){return function(){X.filter((function(e){return e.id===Be}));console.log(S),console.log(st),console.log(bt),console.log(jt),console.log(g),console.log(St),console.log(pe),console.log(gt),m.a.get("/bank_soal?cari="+S+"&id_bab_soal="+st+"&id_sub_bab="+bt+"&id_konsep="+jt+"&kategori_soal="+g+"&id_tingkat_kesulitan="+St+"&tahun_soal="+pe+"&id_utbk="+gt).then((function(e){ne(e.data)})),F(!0)}()}},"Cari"),u.a.createElement("br",null),u.a.createElement("span",null,"Kategori Soal"),u.a.createElement("select",{value:g,onChange:Bt},u.a.createElement("option",{value:"",disabled:!0}),u.a.createElement("option",{value:"UTBK"},"UTBK"),u.a.createElement("option",{value:"BAB"},"BAB")),u.a.createElement("br",null),"BAB"==g?u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),u.a.createElement("span",null,"Bab "),u.a.createElement("select",{value:st,onChange:xt},u.a.createElement("option",{value:0,disabled:!0}),Le.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Sub Bab "),u.a.createElement("select",{value:bt,onChange:Kt},u.a.createElement("option",{value:0,disabled:!0}),Pe.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Konsep "),u.a.createElement("select",{value:jt,onChange:Tt},u.a.createElement("option",{value:0,disabled:!0}),Je.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Level Soal "),u.a.createElement("select",{value:St,onChange:Ft},u.a.createElement("option",{value:0,disabled:!0}),Ze.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Tahun Soal"),u.a.createElement("input",{type:"date",value:pe,onChange:Ut}),u.a.createElement("br",null)):"UTBK"==g?u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,"UTBK "),u.a.createElement("select",{value:gt,onChange:wt},u.a.createElement("option",{value:0,disabled:!0}),Xe.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Tahun Soal"),u.a.createElement("input",{type:"date",value:pe,onChange:Ut}),u.a.createElement("br",null)):u.a.createElement(u.a.Fragment,null),u.a.createElement(d.a,{dropID:"drop-1",thList:["no","Hasil Pencarian",""],tdList:ae.map((function(e,t){return u.a.createElement("tr",{key:e.id},u.a.createElement("td",null,t+1),u.a.createElement("td",null,e.soal.substring(0,100)," . . ."),u.a.createElement("td",null,u.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t={id_paket:Be,id_tryout_part:0,id_soal:e,no_soal:X.length},a=X.filter((function(e){return e.id===Be})),n={id:a[0].id,jml_soal:parseInt(a[0].jml_soal)+1,update_jml_soal:"true"};m.a.post("/isi_paket_soal",t).then((function(e){console.log(e),200==e.status&&(E("main"),$([]),Dt(Be),E("isi soal"),ne([]),F(!0))})),m.a.put("/paket_soal",n).then((function(e){console.log(e)})),R(!1)}(e.id)}},"tambahkan")))}))}),u.a.createElement(p.a,{link:"",title:"Kembali",onClick:function(){R(!1)}}));return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:s.a.container},"main"===o?Pt:null,"add quiz"===o?Nt:null,"isi soal"===o?function(){var e=X.filter((function(e){return e.id===Be}));return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,e[0].deskripsi),q?u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,"Waktu : "),u.a.createElement("input",{type:"number",min:"0",placeholder:"jam",value:fe,onChange:function(e){ve(e.target.value)}}),u.a.createElement("input",{type:"number",min:"0",placeholder:"menit",value:ke,onChange:function(e){_e(e.target.value)}}),u.a.createElement("input",{type:"number",min:"0",placeholder:"detik",value:ye,onChange:function(e){Ce(e.target.value)}}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("span",null,"Level "),u.a.createElement("select",{value:St,onChange:Ft},u.a.createElement("option",{value:"",disabled:!0}),Ze.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("button",{onClick:function(){z(!q)}},"cancel"),u.a.createElement("button",{onClick:function(){return function(){var e=3600*parseInt(fe)+60*parseInt(ke)+parseInt(ye),t={id:X.filter((function(e){return e.id===Be}))[0].id,id_mapel:at,id_bab:st,id_kelas:ct,id_level:St,waktu:e};m.a.put("/paket_soal",t).then((function(e){console.log(e)})),F(!0),z(!q)}()}},"save")):u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,"Waktu : ",Rt(e[0].waktu)),u.a.createElement("br",null),u.a.createElement("span",null,"Level : ",e[0].id_level),u.a.createElement("br",null),u.a.createElement("button",{onClick:function(){return function(e){var t=e;ve(parseInt(t/3600)),t%=3600,_e(parseInt(t/60)),Ce(t%=60);var a=X.filter((function(e){return e.id===Be}));nt(a[0].id_mapel),mt(a[0].id_bab),it(a[0].id_kelas),It(a[0].id_level),F(!0),z(!q)}(e[0].waktu)}},"edit")),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(d.a,{dropID:"drop-1",handleOnDragEnd:At,thList:["no","soal","Action"],tdList:Z.map((function(e,t){return u.a.createElement(b.b,{key:e.id,draggableId:e.id,index:t},(function(n,l){return u.a.createElement("tr",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps),u.a.createElement("td",null,t+1),u.a.createElement("td",null,e.soal.substring(0,100)," . . ."),u.a.createElement("td",null,u.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t=Z.filter((function(t){return t.id===e}));ie(t),E("detail soal"),F(!0)}(e.id)}},"Lihat Detail"),"||",u.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t=a(105);t=t.stringify({id:e});var n={id:X[0].id,jml_soal:parseInt(X[0].jml_soal)-1,update_jml_soal:"true"};m.a.delete("/isi_paket_soal",{headers:{"Content-Type":"application/x-www-form-urlencoded"},data:t}).then((function(e){console.log(e),201===e.status&&(E("main"),$([]),Dt(Be),E("isi soal"),F(!0))})),m.a.put("/paket_soal",n).then((function(e){console.log(e)}))}(e.id)}},"hapus")))}))}))}),u.a.createElement(p.a,{link:"",title:"Kembali",onClick:function(){E("main")}}),u.a.createElement(p.a,{link:"",title:"Tambah Soal",onClick:function(){R(!0)}}))}():null,"detail soal"===o?qt:null),D?u.a.createElement("div",{className:s.a.tambah_soal},u.a.createElement("div",{className:s.a.layer1},zt)):null)}},968:function(e,t,a){e.exports={container:"styles_container__3AqNu",tambah_soal:"styles_tambah_soal__1FlbV",layer1:"styles_layer1__3j3af"}},97:function(e,t,a){e.exports={container:"styles_container__2qmjW",nolink:"styles_nolink__1-KRX"}}}]);
//# sourceMappingURL=70.2833edb7.chunk.js.map