(this.webpackJsonpview=this.webpackJsonpview||[]).push([[89],{73:function(e,t,a){"use strict";var n=a(122),l=a.n(n).a.create({baseURL:"https://fisikamu.xyz"});t.a=l},74:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(19),r=a(87),u=a.n(r);t.a=function(e){return l.a.createElement("div",{className:u.a.container,onClick:e.onClick},""===e.link?l.a.createElement("div",{className:u.a.nolink},e.title):l.a.createElement(i.b,{to:e.link},e.title))}},87:function(e,t,a){e.exports={container:"styles_container__2qmjW",nolink:"styles_nolink__1-KRX"}},93:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=(a(94),a(73),a(74),a(91));t.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{onDragEnd:e.handleOnDragEnd},l.a.createElement("table",{style:{width:"100%"}},l.a.createElement("thead",null,l.a.createElement("tr",null,e.thList.map((function(e,t){return l.a.createElement("th",{key:t},e)})))),l.a.createElement(i.c,{droppableId:e.dropID},(function(t,a){return l.a.createElement("tbody",Object.assign({ref:t.innerRef},t.droppableProps),e.tdList,t.placeholder)})))))}},94:function(e,t,a){},981:function(e,t,a){"use strict";a.r(t);var n=a(84),l=a.n(n),i=a(107),r=a(109),u=a(0),c=a.n(u),o=a(982),s=a.n(o),m=a(73),d=a(74),p=a(93),b=a(91);t.default=function(e){var t=Object(u.useState)("main"),n=Object(r.a)(t,2),o=n[0],E=n[1],f=Object(u.useState)(""),k=Object(r.a)(f,2),_=k[0],v=k[1],g=Object(u.useState)(""),h=Object(r.a)(g,2),j=h[0],O=h[1],S=Object(u.useState)(""),C=Object(r.a)(S,2),y=C[0],B=C[1],w=Object(u.useState)(""),K=Object(r.a)(w,2),I=(K[0],K[1]),T=Object(u.useState)(!1),F=Object(r.a)(T,2),U=F[0],x=F[1],L=Object(u.useState)(!1),D=Object(r.a)(L,2),A=D[0],N=D[1],P=Object(u.useState)(!1),R=Object(r.a)(P,2),q=R[0],z=R[1],W=Object(u.useState)(!1),H=Object(r.a)(W,2),J=H[0],M=H[1],V=Object(u.useState)(!1),X=Object(r.a)(V,2),G=(X[0],X[1]),Q=Object(u.useState)([]),Y=Object(r.a)(Q,2),Z=Y[0],$=Y[1],ee=Object(u.useState)([]),te=Object(r.a)(ee,2),ae=te[0],ne=te[1],le=Object(u.useState)([]),ie=Object(r.a)(le,2),re=ie[0],ue=ie[1],ce=Object(u.useState)([]),oe=Object(r.a)(ce,2),se=oe[0],me=oe[1],de=Object(u.useState)(0),pe=Object(r.a)(de,2),be=(pe[0],pe[1],Object(u.useState)("")),Ee=Object(r.a)(be,2),fe=Ee[0],ke=Ee[1],_e=Object(u.useState)(0),ve=Object(r.a)(_e,2),ge=ve[0],he=ve[1],je=Object(u.useState)(0),Oe=Object(r.a)(je,2),Se=Oe[0],Ce=Oe[1],ye=Object(u.useState)(0),Be=Object(r.a)(ye,2),we=Be[0],Ke=Be[1],Ie=Object(u.useState)(0),Te=Object(r.a)(Ie,2),Fe=Te[0],Ue=Te[1],xe=Object(u.useState)([]),Le=Object(r.a)(xe,2),De=(Le[0],Le[1],Object(u.useState)([])),Ae=Object(r.a)(De,2),Ne=(Ae[0],Ae[1],Object(u.useState)([])),Pe=Object(r.a)(Ne,2),Re=Pe[0],qe=Pe[1],ze=Object(u.useState)([]),We=Object(r.a)(ze,2),He=We[0],Je=We[1],Me=Object(u.useState)([]),Ve=Object(r.a)(Me,2),Xe=Ve[0],Ge=Ve[1],Qe=Object(u.useState)([]),Ye=Object(r.a)(Qe,2),Ze=Ye[0],$e=Ye[1],et=Object(u.useState)([]),tt=Object(r.a)(et,2),at=tt[0],nt=tt[1],lt=Object(u.useState)(""),it=Object(r.a)(lt,2),rt=it[0],ut=(it[1],Object(u.useState)("")),ct=Object(r.a)(ut,2),ot=(ct[0],ct[1],Object(u.useState)("")),st=Object(r.a)(ot,2),mt=st[0],dt=st[1],pt=Object(u.useState)(""),bt=Object(r.a)(pt,2),Et=bt[0],ft=bt[1],kt=Object(u.useState)(""),_t=Object(r.a)(kt,2),vt=_t[0],gt=_t[1],ht=Object(u.useState)(""),jt=Object(r.a)(ht,2),Ot=jt[0],St=jt[1],Ct=Object(u.useState)(""),yt=Object(r.a)(Ct,2),Bt=yt[0],wt=yt[1],Kt=function(e){v(e.target.value)},It=function(e){gt(e.target.value)},Tt=function(e){ft(e.target.value)},Ft=function(e){St(e.target.value)},Ut=function(e){ke(e.target.value)},xt=function(e){dt(e.target.value)},Lt=function(e){wt(e.target.value)},Dt=function(e){var t=ae,a=e.source.index,n=e.destination.index;if(n>=t.length)for(var l=n-t.length+1;l--;)t.push(void 0);t.splice(n,0,t.splice(a,1)[0]);for(var i=[],r=0;r<t.length;r++){var u={id:t[r].id,no_soal:r+1};i.push(u)}var c={data_nomor:i};m.a.put("/isi_paket_soal",c).then((function(e){console.log(e),200==e.status&&(ne([]),Nt(Fe),x(!0))}))},At=function(){m.a.get("/paket_soal").then((function(e){$(e.data)}))},Nt=function(e){m.a.get("/isi_paket_soal?tipe=quiz&id=".concat(e)).then((function(e){ne(e.data)})),Ue(e)};Object(u.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.a.get("/bab_soal").then((function(e){qe(e.data)})),m.a.get("/tingkat_kesulitan").then((function(e){nt(e.data)})),At();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),q&&(dt(""),ft(""),St(""),wt(""),v(""),gt(""),z(!1)),U&&(At(),x(!1)),""!==rt&&m.a.get("/bab_soal?id_mapel="+rt).then((function(e){qe(e.data)})),""!==mt&&m.a.get("/subBab_soal?id_bab="+mt).then((function(e){console.log(e.data),Je(e.data)})),""!==Et&&m.a.get("/konsep_soal?id_sub_bab="+Et).then((function(e){Ge(e.data)})),"UTBK"===_&&m.a.get("/utbk").then((function(e){$e(e.data)}))}),[q,U,rt,mt,Et,_]);var Pt=function(e){var t=e,a="",n=t/3600,l=(t%=3600)/60,i=t%=60;return parseInt(n)>0&&(a+=parseInt(n)+" Jam "),parseInt(l)>0&&(a+=parseInt(l)+" Menit "),parseInt(i)>0&&(a+=parseInt(i)+" Detik"),a.toString()},Rt=c.a.createElement("div",{className:s.a.panel_input_review},c.a.createElement("div",{className:s.a.panel_input_review_layer_inside},c.a.createElement("input",{type:"text",placeholder:"Nama Paket",onChange:function(e){O(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("span",null,"Waktu : "),c.a.createElement("input",{type:"number",min:"0",placeholder:"jam",onChange:function(e){he(e.target.value)}}),c.a.createElement("input",{type:"number",min:"0",placeholder:"menit",onChange:function(e){Ce(e.target.value)}}),c.a.createElement("input",{type:"number",min:"0",placeholder:"detik",onChange:function(e){Ke(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("span",null,"Kategori Soal"),c.a.createElement("select",{value:_,onChange:Kt},c.a.createElement("option",{value:"",disabled:!0}),c.a.createElement("option",{value:"UTBK"},"UTBK"),c.a.createElement("option",{value:"BAB"},"BAB")),c.a.createElement("br",null),"BAB"==_?c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement("span",null,"Bab "),c.a.createElement("select",{value:mt,onChange:xt},c.a.createElement("option",{value:"",disabled:!0}),Re.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),c.a.createElement("br",null),c.a.createElement("span",null,"Sub Bab "),c.a.createElement("select",{value:Et,onChange:Tt},c.a.createElement("option",{value:"",disabled:!0}),He.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),c.a.createElement("br",null),c.a.createElement("span",null,"Konsep "),c.a.createElement("select",{value:Ot,onChange:Ft},c.a.createElement("option",{value:"",disabled:!0}),Xe.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),c.a.createElement("br",null),c.a.createElement("span",null,"Level Soal "),c.a.createElement("select",{value:Bt,onChange:Lt},c.a.createElement("option",{value:"",disabled:!0}),at.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),c.a.createElement("br",null),c.a.createElement("span",null,"Tahun Soal"),c.a.createElement("input",{type:"date",value:fe,onChange:Ut}),c.a.createElement("br",null)):"UTBK"==_?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"UTBK "),c.a.createElement("select",{value:vt,onChange:It},c.a.createElement("option",{value:"",disabled:!0}),Ze.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),c.a.createElement("button",{onClick:function(e){return function(e){G(!0),I(e)}("UTBK")}},"+"),c.a.createElement("br",null),c.a.createElement("span",null,"Tahun Soal"),c.a.createElement("input",{type:"date",value:fe,onChange:Ut}),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null),c.a.createElement("br",null),c.a.createElement(d.a,{link:"",title:"cancel",onClick:function(){E("main")}}),c.a.createElement(d.a,{link:"",title:"save",onClick:function(){return function(){if(""!==j||0!==ge||0!==Se||0!==we||""!==Et||""!==Ot||""!==Bt){var e=3600*parseInt(ge)+60*parseInt(Se)+parseInt(we),t={nomor:Z.length+1,deskripsi:j,waktu:e,id_bab:mt,id_sub_bab:Et,id_konsep:Ot,id_level:Bt,id_utbk:vt,tipe:_};m.a.post("/paket_soal",t).then((function(e){console.log(e)})),x(!0),E("main"),he(0),Ce(0),Ke(0)}else alert("isi semua data")}()}}))),qt=c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Paket Soal"),c.a.createElement(d.a,{link:"",title:"Buat Paket",onClick:function(){E("add quiz")}}),c.a.createElement(p.a,{dropID:"drop-1",handleOnDragEnd:function(e){var t=Z,a=e.source.index,n=e.destination.index;if(n>=t.length)for(var l=n-t.length+1;l--;)t.push(void 0);t.splice(n,0,t.splice(a,1)[0]);for(var i=[],r=0;r<t.length;r++){var u={id:t[r].id,nomor:r+1};i.push(u)}var c={data_nomor:i};m.a.put("/paket_soal",c).then((function(e){console.log(e),200==e.status&&($([]),At(),x(!0))}))},thList:["no","judul","Kategori","Deskripsi","Status","Action"],tdList:Z.map((function(e,t){return c.a.createElement(b.b,{key:e.id,draggableId:e.id,index:t},(function(t,n){return c.a.createElement("tr",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),c.a.createElement("td",null,e.nomor),c.a.createElement("td",null,e.deskripsi),c.a.createElement("td",null,e.tipe),c.a.createElement("td",null,e.jml_soal+" Soal ,"+Pt(e.waktu)),c.a.createElement("td",null,e.status),c.a.createElement("td",null,c.a.createElement("a",{href:"#0",onClick:function(){return t=e.id,ne([]),Nt(t),void E("isi soal");var t}},"edit")," || ",c.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t=a(111);t=t.stringify({id:e}),m.a.delete("/paket_soal",{headers:{"Content-Type":"application/x-www-form-urlencoded"},data:t}).then((function(e){console.log(e),201===e.status&&x(!0)}))}(e.id)}},"hapus"),"||",c.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t={id:e.id,deskripsi:e.deskripsi,id_bab:e.id_bab,id_kelas:e.id_kelas,id_konsep:e.id_konsep,id_level:e.id_level,id_mapel:e.id_mapel,id_sub_bab:e.id_sub_bab,id_utbk:e.id_utbk,jml_soal:e.jml_soal,nomor:e.nomor,status:"publish"==e.status?"no publish":"publish",waktu:e.waktu,tipe:e.tipe};m.a.put("/paket_soal",t).then((function(e){console.log(e),200==e.status&&(x(!0),E("main"))}))}(e)}},"publish"==e.status?"no publish":"publish")))}))}))})),zt=c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Detail Soal"),se.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("p",null,e.soal),c.a.createElement("p",null,e.pil_a),c.a.createElement("p",null,e.pil_b),c.a.createElement("p",null,e.pil_c),c.a.createElement("p",null,e.pil_d),c.a.createElement("p",null,e.pil_e),c.a.createElement("p",null,e.jawaban),c.a.createElement("p",null,e.pembahasan),c.a.createElement(d.a,{link:"",title:"Kembali",onClick:function(){E("isi soal")}}))}))),Wt=c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Tambah Soal"),c.a.createElement("input",{type:"text",placeholder:"Cari Soal",onChange:function(e){B(e.target.value)}})," ",c.a.createElement("button",{onClick:function(){return function(){Z.filter((function(e){return e.id===Fe}));m.a.get("/bank_soal?cari="+y+"&id_bab_soal="+mt+"&id_sub_bab="+Et+"&id_konsep="+Ot+"&kategori_soal="+_+"&id_tingkat_kesulitan="+Bt+"&tahun_soal="+fe+"&id_utbk="+vt).then((function(e){ue(e.data)})),x(!0)}()}},"Cari"),c.a.createElement("br",null),c.a.createElement("span",null,"Kategori Soal"),c.a.createElement("select",{value:_,onChange:Kt},c.a.createElement("option",{value:"",disabled:!0}),c.a.createElement("option",{value:"UTBK"},"UTBK"),c.a.createElement("option",{value:"BAB"},"BAB")),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){return dt(""),ft(""),St(""),v(""),wt(""),ke(""),void gt("")}},"Reset"),"BAB"==_?c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement("span",null,"Bab "),c.a.createElement("select",{value:mt,onChange:xt},c.a.createElement("option",{value:"",disabled:!0}),Re.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),c.a.createElement("br",null),c.a.createElement("span",null,"Sub Bab "),c.a.createElement("select",{value:Et,onChange:Tt},c.a.createElement("option",{value:"",disabled:!0}),He.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),c.a.createElement("br",null),c.a.createElement("span",null,"Konsep "),c.a.createElement("select",{value:Ot,onChange:Ft},c.a.createElement("option",{value:"",disabled:!0}),Xe.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),c.a.createElement("br",null),c.a.createElement("span",null,"Level Soal "),c.a.createElement("select",{value:Bt,onChange:Lt},c.a.createElement("option",{value:"",disabled:!0}),at.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),c.a.createElement("br",null),c.a.createElement("span",null,"Tahun Soal"),c.a.createElement("input",{type:"date",value:fe,onChange:Ut}),c.a.createElement("br",null)):"UTBK"==_?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"UTBK "),c.a.createElement("select",{value:vt,onChange:It},c.a.createElement("option",{value:"",disabled:!0}),Ze.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),c.a.createElement("br",null),c.a.createElement("span",null,"Tahun Soal"),c.a.createElement("input",{type:"date",value:fe,onChange:Ut}),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null),c.a.createElement(p.a,{dropID:"drop-1",thList:["no","Hasil Pencarian",""],tdList:re.map((function(e,t){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,t+1),c.a.createElement("td",null,e.soal.substring(0,100)," . . ."),c.a.createElement("td",null,c.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t={id_paket:Fe,id_tryout_part:0,id_soal:e,no_soal:Z.length},a=Z.filter((function(e){return e.id===Fe})),n={id:a[0].id,nomor:a[0].nomor,deskripsi:a[0].deskripsi,waktu:a[0].waktu,id_bab:a[0].id_bab,id_sub_bab:a[0].id_sub_bab,id_konsep:a[0].id_konsep,id_level:a[0].id_level,id_utbk:a[0].id_utbk,tipe:a[0].tipe,jml_soal:parseInt(a[0].jml_soal)+1,update_jml_soal:"true"};m.a.post("/isi_paket_soal",t).then((function(e){console.log(e),200==e.status&&(E("main"),ne([]),Nt(Fe),E("isi soal"),ue([]),x(!0))})),m.a.put("/paket_soal",n).then((function(e){console.log(e)})),N(!1)}(e.id)}},"tambahkan")))}))}),c.a.createElement(d.a,{link:"",title:"Kembali",onClick:function(){N(!1)}}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:s.a.container},"main"===o?qt:null,"add quiz"===o?Rt:null,"isi soal"===o?function(){var e=Z.filter((function(e){return e.id===Fe}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,e[0].deskripsi),J?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"Waktu : "),c.a.createElement("input",{type:"number",min:"0",placeholder:"jam",value:ge,onChange:function(e){he(e.target.value)}}),c.a.createElement("input",{type:"number",min:"0",placeholder:"menit",value:Se,onChange:function(e){Ce(e.target.value)}}),c.a.createElement("input",{type:"number",min:"0",placeholder:"detik",value:we,onChange:function(e){Ke(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("br",null),"UTBK"==e[0].tipe?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"UTBK "),c.a.createElement("select",{value:vt,onChange:It},c.a.createElement("option",{value:"",disabled:!0}),Ze.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"Level "),c.a.createElement("select",{value:Bt,onChange:Lt},c.a.createElement("option",{value:"",disabled:!0}),at.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),c.a.createElement("br",null),c.a.createElement("span",null,"Sub Bab "),c.a.createElement("select",{value:Et,onChange:Tt},c.a.createElement("option",{value:"",disabled:!0}),He.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.sub_bab)}))),c.a.createElement("br",null)),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){M(!J)}},"cancel"),c.a.createElement("button",{onClick:function(){return function(){var e,t=3600*parseInt(ge)+60*parseInt(Se)+parseInt(we),a=Z.filter((function(e){return e.id===Fe}));e="UTBK"===a[0].tipe?{id:a[0].id,deskripsi:a[0].deskripsi,tipe:a[0].tipe,id_utbk:vt,waktu:t}:{id:a[0].id,deskripsi:a[0].deskripsi,tipe:a[0].tipe,id_sub_bab:Et,id_level:Bt,waktu:t},m.a.put("/paket_soal",e).then((function(e){console.log(e)})),x(!0),M(!J)}()}},"save")):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"Waktu : ",Pt(e[0].waktu)),c.a.createElement("br",null),"UTBK"==e[0].tipe?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"Kategori : ",e[0].id_utbk),c.a.createElement("br",null)):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"Level : ",e[0].id_level),c.a.createElement("br",null),c.a.createElement("span",null,"Sub Bab : ",e[0].id_sub_bab),c.a.createElement("br",null)),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){return function(e){var t=e;he(parseInt(t/3600)),t%=3600,Ce(parseInt(t/60)),Ke(t%=60);var a=Z.filter((function(e){return e.id===Fe}));v(a[0].tipe),ft(a[0].id_sub_bab),gt(a[0].id_utbk),wt(a[0].id_level),x(!0),m.a.get("/subBab_soal").then((function(e){Je(e.data)})),M(!J)}(e[0].waktu)}},"edit")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(p.a,{dropID:"drop-2",handleOnDragEnd:Dt,thList:["no","soal","Action"],tdList:ae.map((function(e,t){return c.a.createElement(b.b,{key:e.id,draggableId:e.id,index:t},(function(n,l){return c.a.createElement("tr",Object.assign({ref:n.innerRef},n.draggableProps,n.dragHandleProps),c.a.createElement("td",null,t+1),c.a.createElement("td",null,e.soal.substring(0,100)," . . ."),c.a.createElement("td",null,c.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t=ae.filter((function(t){return t.id===e}));me(t),E("detail soal"),x(!0)}(e.id)}},"Lihat Detail"),"||",c.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t=a(111);t=t.stringify({id:e});var n=Z.filter((function(e){return e.id===Fe})),l={id:n[0].id,nomor:n[0].nomor,deskripsi:n[0].deskripsi,waktu:n[0].waktu,id_bab:n[0].id_bab,id_sub_bab:n[0].id_sub_bab,id_konsep:n[0].id_konsep,id_level:n[0].id_level,id_utbk:n[0].id_utbk,tipe:n[0].tipe,jml_soal:parseInt(n[0].jml_soal)-1,update_jml_soal:"true"};m.a.delete("/isi_paket_soal",{headers:{"Content-Type":"application/x-www-form-urlencoded"},data:t}).then((function(e){console.log(e),201===e.status&&(E("main"),ne([]),Nt(Fe),E("isi soal"),x(!0))})),m.a.put("/paket_soal",l).then((function(e){console.log(e)}))}(e.id)}},"hapus")))}))}))}),c.a.createElement(d.a,{link:"",title:"Kembali",onClick:function(){E("main")}}),c.a.createElement(d.a,{link:"",title:"Tambah Soal",onClick:function(){return N(!0),void z(!0)}}))}():null,"detail soal"===o?zt:null),A?c.a.createElement("div",{className:s.a.tambah_soal},c.a.createElement("div",{className:s.a.layer1},Wt)):null)}},982:function(e,t,a){e.exports={container:"styles_container__3AqNu",tambah_soal:"styles_tambah_soal__1FlbV",layer1:"styles_layer1__3j3af"}}}]);
//# sourceMappingURL=89.0adbf3cf.chunk.js.map