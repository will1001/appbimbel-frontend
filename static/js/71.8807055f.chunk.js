(this.webpackJsonpview=this.webpackJsonpview||[]).push([[71],{104:function(e,t,a){"use strict";t.decode=t.parse=a(126),t.encode=t.stringify=a(127)},105:function(e,t,a){e.exports={container:"styles_container__2qmjW",nolink:"styles_nolink__1-KRX"}},119:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=(a(120),a(79),a(82),a(117));t.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{onDragEnd:e.handleOnDragEnd},l.a.createElement("table",{style:{width:"100%"}},l.a.createElement("thead",null,l.a.createElement("tr",null,e.thList.map((function(e,t){return l.a.createElement("th",{key:t},e)})))),l.a.createElement(r.c,{droppableId:e.dropID},(function(t,a){return l.a.createElement("tbody",Object.assign({ref:t.innerRef},t.droppableProps),e.tdList,t.placeholder)})))))}},120:function(e,t,a){},126:function(e,t,a){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,a,r){t=t||"&",a=a||"=";var c={};if("string"!==typeof e||0===e.length)return c;var i=/\+/g;e=e.split(t);var u=1e3;r&&"number"===typeof r.maxKeys&&(u=r.maxKeys);var o=e.length;u>0&&o>u&&(o=u);for(var s=0;s<o;++s){var m,p,d,b,E=e[s].replace(i,"%20"),f=E.indexOf(a);f>=0?(m=E.substr(0,f),p=E.substr(f+1)):(m=E,p=""),d=decodeURIComponent(m),b=decodeURIComponent(p),n(c,d)?l(c[d])?c[d].push(b):c[d]=[c[d],b]:c[d]=b}return c};var l=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},127:function(e,t,a){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,a,i){return t=t||"&",a=a||"=",null===e&&(e=void 0),"object"===typeof e?r(c(e),(function(c){var i=encodeURIComponent(n(c))+a;return l(e[c])?r(e[c],(function(e){return i+encodeURIComponent(n(e))})).join(t):i+encodeURIComponent(n(e[c]))})).join(t):i?encodeURIComponent(n(i))+a+encodeURIComponent(n(e)):""};var l=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function r(e,t){if(e.map)return e.map(t);for(var a=[],n=0;n<e.length;n++)a.push(t(e[n],n));return a}var c=Object.keys||function(e){var t=[];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.push(a);return t}},79:function(e,t,a){"use strict";var n=a(136),l=a.n(n).a.create({baseURL:"https://wilirahmatm.xyz"});t.a=l},82:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(19),c=a(105),i=a.n(c);t.a=function(e){return l.a.createElement("div",{className:i.a.container,onClick:e.onClick},""===e.link?l.a.createElement("div",{className:i.a.nolink},e.title):l.a.createElement(r.b,{to:e.link},e.title))}},967:function(e,t,a){"use strict";a.r(t);var n=a(87),l=a.n(n),r=a(123),c=a(124),i=a(0),u=a.n(i),o=a(968),s=a.n(o),m=a(79),p=a(82),d=a(119),b=a(117);t.default=function(e){var t=Object(i.useState)("main"),n=Object(c.a)(t,2),o=n[0],E=n[1],f=Object(i.useState)(""),v=Object(c.a)(f,2),g=v[0],k=v[1],h=Object(i.useState)(""),_=Object(c.a)(h,2),j=_[0],O=_[1],y=Object(i.useState)(""),C=Object(c.a)(y,2),S=C[0],B=C[1],I=Object(i.useState)(""),w=Object(c.a)(I,2),K=(w[0],w[1]),T=Object(i.useState)(!1),U=Object(c.a)(T,2),F=U[0],x=U[1],A=Object(i.useState)(!1),L=Object(c.a)(A,2),D=L[0],R=L[1],P=Object(i.useState)(!1),N=Object(c.a)(P,2),q=N[0],z=N[1],W=Object(i.useState)(!1),H=Object(c.a)(W,2),J=(H[0],H[1]),M=Object(i.useState)([]),V=Object(c.a)(M,2),X=V[0],G=V[1],Q=Object(i.useState)([]),Y=Object(c.a)(Q,2),Z=Y[0],$=Y[1],ee=Object(i.useState)([]),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],le=Object(i.useState)([]),re=Object(c.a)(le,2),ce=re[0],ie=re[1],ue=Object(i.useState)(0),oe=Object(c.a)(ue,2),se=(oe[0],oe[1],Object(i.useState)("")),me=Object(c.a)(se,2),pe=me[0],de=me[1],be=Object(i.useState)(0),Ee=Object(c.a)(be,2),fe=Ee[0],ve=Ee[1],ge=Object(i.useState)(0),ke=Object(c.a)(ge,2),he=ke[0],_e=ke[1],je=Object(i.useState)(0),Oe=Object(c.a)(je,2),ye=Oe[0],Ce=Oe[1],Se=Object(i.useState)(0),Be=Object(c.a)(Se,2),Ie=Be[0],we=Be[1],Ke=Object(i.useState)([]),Te=Object(c.a)(Ke,2),Ue=(Te[0],Te[1],Object(i.useState)([])),Fe=Object(c.a)(Ue,2),xe=(Fe[0],Fe[1],Object(i.useState)([])),Ae=Object(c.a)(xe,2),Le=Ae[0],De=Ae[1],Re=Object(i.useState)([]),Pe=Object(c.a)(Re,2),Ne=Pe[0],qe=Pe[1],ze=Object(i.useState)([]),We=Object(c.a)(ze,2),He=We[0],Je=We[1],Me=Object(i.useState)([]),Ve=Object(c.a)(Me,2),Xe=Ve[0],Ge=Ve[1],Qe=Object(i.useState)([]),Ye=Object(c.a)(Qe,2),Ze=Ye[0],$e=Ye[1],et=Object(i.useState)(""),tt=Object(c.a)(et,2),at=tt[0],nt=(tt[1],Object(i.useState)("")),lt=Object(c.a)(nt,2),rt=(lt[0],lt[1],Object(i.useState)("")),ct=Object(c.a)(rt,2),it=ct[0],ut=ct[1],ot=Object(i.useState)(""),st=Object(c.a)(ot,2),mt=st[0],pt=st[1],dt=Object(i.useState)(""),bt=Object(c.a)(dt,2),Et=bt[0],ft=bt[1],vt=Object(i.useState)(""),gt=Object(c.a)(vt,2),kt=gt[0],ht=gt[1],_t=Object(i.useState)(""),jt=Object(c.a)(_t,2),Ot=jt[0],yt=jt[1],Ct=function(e){k(e.target.value)},St=function(e){ft(e.target.value)},Bt=function(e){pt(e.target.value)},It=function(e){ht(e.target.value)},wt=function(e){de(e.target.value)},Kt=function(e){ut(e.target.value)},Tt=function(e){yt(e.target.value)},Ut=function(e){var t=X,a=e.source.index,n=e.destination.index;if(n>=t.length)for(var l=n-t.length+1;l--;)t.push(void 0);t.splice(n,0,t.splice(a,1)[0]);for(var r=[],c=0;c<t.length;c++){var i={id:t[c].id,nomor:c+1};r.push(i)}var u={data_nomor:r};m.a.put("/paket_soal",u).then((function(e){console.log(e),200==e.status&&(G([]),Ft(),x(!0))}))},Ft=function(){m.a.get("/paket_soal").then((function(e){G(e.data)}))},xt=function(e){m.a.get("/isi_paket_soal?tipe=quiz&id=".concat(e)).then((function(e){$(e.data)})),we(e)};Object(i.useEffect)((function(){function e(){return(e=Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.a.get("/bab_soal").then((function(e){De(e.data)})),m.a.get("/tingkat_kesulitan").then((function(e){$e(e.data)})),Ft();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),F&&(Ft(),x(!1)),""!==at&&m.a.get("/bab_soal?id_mapel="+at).then((function(e){De(e.data)})),""!==it&&m.a.get("/subBab_soal?id_bab="+it).then((function(e){qe(e.data)})),""!==mt&&m.a.get("/konsep_soal?id_sub_bab="+mt).then((function(e){Je(e.data)})),"UTBK"===g&&m.a.get("/utbk").then((function(e){Ge(e.data)}))}),[F,at,it,g]);var At=function(e){var t=e,a="",n=t/3600,l=(t%=3600)/60,r=t%=60;return parseInt(n)>0&&(a+=parseInt(n)+" Jam "),parseInt(l)>0&&(a+=parseInt(l)+" Menit "),parseInt(r)>0&&(a+=parseInt(r)+" Detik"),a.toString()},Lt=u.a.createElement("div",{className:s.a.panel_input_review},u.a.createElement("div",{className:s.a.panel_input_review_layer_inside},u.a.createElement("input",{type:"text",placeholder:"Nama Paket",onChange:function(e){O(e.target.value)}}),u.a.createElement("br",null),u.a.createElement("span",null,"Waktu : "),u.a.createElement("input",{type:"number",min:"0",placeholder:"jam",onChange:function(e){ve(e.target.value)}}),u.a.createElement("input",{type:"number",min:"0",placeholder:"menit",onChange:function(e){_e(e.target.value)}}),u.a.createElement("input",{type:"number",min:"0",placeholder:"detik",onChange:function(e){Ce(e.target.value)}}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("span",null,"Kategori Soal"),u.a.createElement("select",{value:g,onChange:Ct},u.a.createElement("option",{value:"",disabled:!0}),u.a.createElement("option",{value:"UTBK"},"UTBK"),u.a.createElement("option",{value:"BAB"},"BAB")),u.a.createElement("br",null),"BAB"==g?u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),u.a.createElement("span",null,"Bab "),u.a.createElement("select",{value:it,onChange:Kt},u.a.createElement("option",{value:0,disabled:!0}),Le.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Sub Bab "),u.a.createElement("select",{value:mt,onChange:Bt},u.a.createElement("option",{value:0,disabled:!0}),Ne.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Konsep "),u.a.createElement("select",{value:kt,onChange:It},u.a.createElement("option",{value:0,disabled:!0}),He.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Level Soal "),u.a.createElement("select",{value:Ot,onChange:Tt},u.a.createElement("option",{value:0,disabled:!0}),Ze.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Tahun Soal"),u.a.createElement("input",{type:"date",value:pe,onChange:wt}),u.a.createElement("br",null)):"UTBK"==g?u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,"UTBK "),u.a.createElement("select",{value:Et,onChange:St},u.a.createElement("option",{value:"",disabled:!0}),Xe.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("button",{onClick:function(e){return function(e){J(!0),K(e)}("UTBK")}},"+"),u.a.createElement("br",null),u.a.createElement("span",null,"Tahun Soal"),u.a.createElement("input",{type:"date",value:pe,onChange:wt}),u.a.createElement("br",null)):u.a.createElement(u.a.Fragment,null),u.a.createElement("br",null),u.a.createElement(p.a,{link:"",title:"cancel",onClick:function(){E("main")}}),u.a.createElement(p.a,{link:"",title:"save",onClick:function(){return function(){if(""!==j||0!==fe||0!==he||0!==ye||""!==mt||""!==kt||""!==Ot){var e=3600*parseInt(fe)+60*parseInt(he)+parseInt(ye),t={nomor:X.length+1,deskripsi:j,waktu:e,id_bab:it,id_sub_bab:mt,id_konsep:kt,id_level:Ot,id_utbk:Et,tipe:g};m.a.post("/paket_soal",t).then((function(e){console.log(e)})),x(!0),E("main"),ve(0),_e(0),Ce(0)}else alert("isi semua data")}()}}))),Dt=u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Paket Soal"),u.a.createElement(p.a,{link:"",title:"Buat Paket",onClick:function(){E("add quiz")}}),u.a.createElement(d.a,{dropID:"drop-1",handleOnDragEnd:Ut,thList:["no","judul","Kategori","Deskripsi","Action"],tdList:X.map((function(e,t){return u.a.createElement(b.b,{key:e.id,draggableId:e.id,index:t},(function(t,n){return u.a.createElement("tr",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),u.a.createElement("td",null,e.nomor),u.a.createElement("td",null,e.deskripsi),u.a.createElement("td",null,e.tipe),u.a.createElement("td",null,e.jml_soal+" Soal ,"+At(e.waktu)),u.a.createElement("td",null,u.a.createElement("a",{href:"#0",onClick:function(){return t=e.id,$([]),xt(t),void E("isi soal");var t}},"edit")," || ",u.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t=a(104);t=t.stringify({id:e}),m.a.delete("/paket_soal",{headers:{"Content-Type":"application/x-www-form-urlencoded"},data:t}).then((function(e){console.log(e),201===e.status&&x(!0)}))}(e.id)}},"hapus")))}))}))})),Rt=u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Detail Soal"),ce.map((function(e){return u.a.createElement("div",{key:e.id},u.a.createElement("p",null,e.soal),u.a.createElement("p",null,e.pil_a),u.a.createElement("p",null,e.pil_b),u.a.createElement("p",null,e.pil_c),u.a.createElement("p",null,e.pil_d),u.a.createElement("p",null,e.pil_e),u.a.createElement("p",null,e.jawaban),u.a.createElement("p",null,e.pembahasan),u.a.createElement(p.a,{link:"",title:"Kembali",onClick:function(){E("isi soal")}}))}))),Pt=u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Tambah Soal"),u.a.createElement("input",{type:"text",placeholder:"Cari Soal",onChange:function(e){B(e.target.value)}})," ",u.a.createElement("button",{onClick:function(){return function(){X.filter((function(e){return e.id===Ie}));console.log(S),console.log(it),console.log(mt),console.log(kt),console.log(g),console.log(Ot),console.log(pe),console.log(Et),m.a.get("/bank_soal?cari="+S+"&id_bab_soal="+it+"&id_sub_bab="+mt+"&id_konsep="+kt+"&kategori_soal="+g+"&id_tingkat_kesulitan="+Ot+"&tahun_soal="+pe+"&id_utbk="+Et).then((function(e){ne(e.data)})),x(!0)}()}},"Cari"),u.a.createElement("br",null),u.a.createElement("span",null,"Kategori Soal"),u.a.createElement("select",{value:g,onChange:Ct},u.a.createElement("option",{value:"",disabled:!0}),u.a.createElement("option",{value:"UTBK"},"UTBK"),u.a.createElement("option",{value:"BAB"},"BAB")),u.a.createElement("br",null),"BAB"==g?u.a.createElement(u.a.Fragment,null,u.a.createElement("br",null),u.a.createElement("span",null,"Bab "),u.a.createElement("select",{value:it,onChange:Kt},u.a.createElement("option",{value:0,disabled:!0}),Le.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Sub Bab "),u.a.createElement("select",{value:mt,onChange:Bt},u.a.createElement("option",{value:0,disabled:!0}),Ne.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Konsep "),u.a.createElement("select",{value:kt,onChange:It},u.a.createElement("option",{value:0,disabled:!0}),He.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Level Soal "),u.a.createElement("select",{value:Ot,onChange:Tt},u.a.createElement("option",{value:0,disabled:!0}),Ze.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Tahun Soal"),u.a.createElement("input",{type:"date",value:pe,onChange:wt}),u.a.createElement("br",null)):"UTBK"==g?u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,"UTBK "),u.a.createElement("select",{value:Et,onChange:St},u.a.createElement("option",{value:0,disabled:!0}),Xe.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Tahun Soal"),u.a.createElement("input",{type:"date",value:pe,onChange:wt}),u.a.createElement("br",null)):u.a.createElement(u.a.Fragment,null),u.a.createElement(d.a,{dropID:"drop-1",thList:["no","Hasil Pencarian",""],tdList:ae.map((function(e,t){return u.a.createElement("tr",{key:e.id},u.a.createElement("td",null,t+1),u.a.createElement("td",null,e.soal.substring(0,100)," . . ."),u.a.createElement("td",null,u.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t={id_paket:Ie,id_tryout_part:0,id_soal:e,no_soal:X.length},a=X.filter((function(e){return e.id===Ie})),n={id:a[0].id,jml_soal:parseInt(a[0].jml_soal)+1,update_jml_soal:"true"};m.a.post("/isi_paket_soal",t).then((function(e){console.log(e),200==e.status&&(E("main"),$([]),xt(Ie),E("isi soal"),ne([]),x(!0))})),m.a.put("/paket_soal",n).then((function(e){console.log(e)})),R(!1)}(e.id)}},"tambahkan")))}))}),u.a.createElement(p.a,{link:"",title:"Kembali",onClick:function(){R(!1)}}));return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:s.a.container},"main"===o?Dt:null,"add quiz"===o?Lt:null,"isi soal"===o?function(){var e=X.filter((function(e){return e.id===Ie}));return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,e[0].deskripsi),q?u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,"Waktu : "),u.a.createElement("input",{type:"number",min:"0",placeholder:"jam",value:fe,onChange:function(e){ve(e.target.value)}}),u.a.createElement("input",{type:"number",min:"0",placeholder:"menit",value:he,onChange:function(e){_e(e.target.value)}}),u.a.createElement("input",{type:"number",min:"0",placeholder:"detik",value:ye,onChange:function(e){Ce(e.target.value)}}),u.a.createElement("br",null),u.a.createElement("br",null),"UTBK"==e[0].tipe?u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,"UTBK "),u.a.createElement("select",{value:Et,onChange:St},u.a.createElement("option",{value:"",disabled:!0}),Xe.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null)):u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,"Level "),u.a.createElement("select",{value:Ot,onChange:Tt},u.a.createElement("option",{value:"",disabled:!0}),Ze.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Sub Bab "),u.a.createElement("select",{value:mt,onChange:Bt},u.a.createElement("option",{value:"",disabled:!0}),Ne.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null)),u.a.createElement("br",null),u.a.createElement("button",{onClick:function(){z(!q)}},"cancel"),u.a.createElement("button",{onClick:function(){return function(){var e,t=3600*parseInt(fe)+60*parseInt(he)+parseInt(ye),a=X.filter((function(e){return e.id===Ie}));e="UTBK"===a[0].id?{id:a[0].id,deskripsi:a[0].deskripsi,tipe:a[0].tipe,id_utbk:Et,waktu:t}:{id:a[0].id,deskripsi:a[0].deskripsi,tipe:a[0].tipe,id_sub_bab:mt,id_level:Ot,waktu:t},m.a.put("/paket_soal",e).then((function(e){console.log(e)})),x(!0),z(!q)}()}},"save")):u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,"Waktu : ",At(e[0].waktu)),u.a.createElement("br",null),"UTBK"==e[0].tipe?u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,"Kategori : ",e[0].id_utbk),u.a.createElement("br",null)):u.a.createElement(u.a.Fragment,null,u.a.createElement("span",null,"Level : ",e[0].id_level),u.a.createElement("br",null),u.a.createElement("span",null,"Sub Bab : ",e[0].id_sub_bab),u.a.createElement("br",null)),u.a.createElement("br",null),u.a.createElement("button",{onClick:function(){return function(e){var t=e;ve(parseInt(t/3600)),t%=3600,_e(parseInt(t/60)),Ce(t%=60);var a=X.filter((function(e){return e.id===Ie}));k(a[0].tipe),pt(a[0].id_sub_bab),ft(a[0].id_utbk),yt(a[0].id_level),x(!0),m.a.get("/subBab_soal").then((function(e){qe(e.data)})),z(!q)}(e[0].waktu)}},"edit")),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(d.a,{dropID:"drop-1",handleOnDragEnd:Ut,thList:["no","soal","Action"],tdList:Z.map((function(e,t){return u.a.createElement(b.b,{key:e.id,draggableId:e.id,index:t},(function(n,l){return u.a.createElement("tr",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps),u.a.createElement("td",null,t+1),u.a.createElement("td",null,e.soal.substring(0,100)," . . ."),u.a.createElement("td",null,u.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t=Z.filter((function(t){return t.id===e}));ie(t),E("detail soal"),x(!0)}(e.id)}},"Lihat Detail"),"||",u.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t=a(104);t=t.stringify({id:e});var n={id:X[0].id,jml_soal:parseInt(X[0].jml_soal)-1,update_jml_soal:"true"};m.a.delete("/isi_paket_soal",{headers:{"Content-Type":"application/x-www-form-urlencoded"},data:t}).then((function(e){console.log(e),201===e.status&&(E("main"),$([]),xt(Ie),E("isi soal"),x(!0))})),m.a.put("/paket_soal",n).then((function(e){console.log(e)}))}(e.id)}},"hapus")))}))}))}),u.a.createElement(p.a,{link:"",title:"Kembali",onClick:function(){E("main")}}),u.a.createElement(p.a,{link:"",title:"Tambah Soal",onClick:function(){R(!0)}}))}():null,"detail soal"===o?Rt:null),D?u.a.createElement("div",{className:s.a.tambah_soal},u.a.createElement("div",{className:s.a.layer1},Pt)):null)}},968:function(e,t,a){e.exports={container:"styles_container__3AqNu",tambah_soal:"styles_tambah_soal__1FlbV",layer1:"styles_layer1__3j3af"}}}]);
//# sourceMappingURL=71.8807055f.chunk.js.map