(this.webpackJsonpview=this.webpackJsonpview||[]).push([[0],{10:function(e,t,a){e.exports={container:"styles_container__26Ygq",pilihan__ganda:"styles_pilihan__ganda__2Yglx",editor:"styles_editor__1hBhK"}},126:function(e,t){},159:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),i=a(65),j=a.n(i),l=(a(74),a(18)),b=a(3),r=a(11),o=a.n(r),d=a(15),u=a(2),O=a(27),h=a.n(O),x=a(66),p=a.n(x);var _=function(e){return Object(n.jsx)("div",{className:p.a.container,onClick:e.onClick,children:Object(n.jsx)(l.b,{to:e.link,children:e.title})})},v=a(68),g=a.n(v).a.create({baseURL:"http://www.wilirahmatm.xyz"});var f=function(e){var t=a(22),s=Object(c.useState)([]),i=Object(u.a)(s,2),j=i[0],l=i[1],b=Object(c.useState)([]),r=Object(u.a)(b,2),O=r[0],x=r[1],p=Object(c.useState)([]),v=Object(u.a)(p,2),f=v[0],m=v[1],k=Object(c.useState)([]),S=Object(u.a)(k,2),C=S[0],w=S[1],N=Object(c.useState)([]),y=Object(u.a)(N,2),P=y[0],B=y[1],E=Object(c.useState)(""),F=Object(u.a)(E,2),T=F[0],K=F[1],D=Object(c.useState)(""),J=Object(u.a)(D,2),L=J[0],M=J[1],A=Object(c.useState)(""),R=Object(u.a)(A,2),Y=R[0],q=R[1],H=Object(c.useState)(""),I=Object(u.a)(H,2),z=I[0],G=I[1],Q=Object(c.useState)(1),U=Object(u.a)(Q,2),X=U[0],Z=U[1],V=Object(c.useState)(""),W=Object(u.a)(V,2),$=W[0],ee=W[1],te=Object(c.useState)(!1),ae=Object(u.a)(te,2),ne=ae[0],ce=ae[1],se=Object(c.useState)(!1),ie=Object(u.a)(se,2),je=ie[0],le=ie[1];return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.get("/mapel").then((function(e){x(e.data)})),g.get("/kelas").then((function(e){m(e.data)})),g.get("/tingkat_kesulitan").then((function(e){B(e.data)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(function(){e.apply(this,arguments)}(),""!==T&&g.get("/bab_soal?id_mapel="+T).then((function(e){w(e.data)})),ne){var t={id:$};g.post("/bank_soal",t).then((function(e){console.log(e.data)})),Z(j.length-1),g.get("/bank_soal?id_mapel="+T+"&id_kelas="+L+"&id_bab_soal="+Y+"&id_tingkat_kesulitan="+z).then((function(e){l(e.data),0!==e.data.length&&0!==X&&ee(e.data[e.data.length-1].id)})),ce(!1)}""!==T&&""!==L&&""!==Y&&""!==z&&je&&(g.get("/bank_soal?id_mapel="+T+"&id_kelas="+L+"&id_bab_soal="+Y+"&id_tingkat_kesulitan="+z).then((function(e){l(e.data),0!==e.data.length&&0!==X&&ee(e.data[X-1].id)})),le(!1))}),[T,L,Y,z,X,ne,$,j]),Object(n.jsxs)("div",{className:h.a.container,children:[Object(n.jsxs)("div",{className:h.a.button__group,children:[Object(n.jsx)(_,{title:"Tambah Soal",link:"/add_soal"}),0===j.length?Object(n.jsx)(n.Fragment,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(_,{title:"Edit Soal",link:"/edit_soal/"+$}),Object(n.jsx)(_,{link:"/",title:"Hapus Soal",onClick:function(e){ce(!0)}})]})]}),Object(n.jsx)("span",{children:"mata pelajaran "}),Object(n.jsxs)("select",{value:T,onChange:function(e){K(e.target.value),le(!0)},children:[Object(n.jsx)("option",{value:"",disabled:!0}),O.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.deskripsi},e.id)}))]}),Object(n.jsx)("span",{children:"kelas "}),Object(n.jsxs)("select",{value:L,onChange:function(e){M(e.target.value),le(!0)},children:[Object(n.jsx)("option",{value:"",disabled:!0}),f.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.deskripsi},e.id)}))]}),Object(n.jsx)("span",{children:"Bab "}),Object(n.jsxs)("select",{value:Y,onChange:function(e){q(e.target.value),le(!0)},children:[Object(n.jsx)("option",{value:"",disabled:!0}),C.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.deskripsi},e.id)}))]}),Object(n.jsx)("span",{children:"tingkat kesulitan "}),Object(n.jsxs)("select",{value:z,onChange:function(e){G(e.target.value),le(!0)},children:[Object(n.jsx)("option",{value:"",disabled:!0}),P.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.deskripsi},e.id)}))]}),Object(n.jsx)("span",{children:"No "}),Object(n.jsxs)("select",{value:X,onChange:function(e){Z(e.target.value)},children:[Object(n.jsx)("option",{value:""}),j.map((function(e,t){return Object(n.jsx)("option",{value:t+1,children:t+1},e.id)}))]}),Object(n.jsx)("br",{}),j.slice(X-1,X).map((function(e){return Object(n.jsxs)("div",{className:"",children:[Object(n.jsx)("strong",{children:"Soal :"}),Object(n.jsx)("p",{children:Object(n.jsx)(t,{children:e.soal})}),"pilgan"===e.tipe_soal?Object(n.jsxs)("div",{className:"",children:[Object(n.jsxs)("p",{children:["A. ",e.pil_a]}),Object(n.jsxs)("p",{children:["B. ",e.pil_b]}),Object(n.jsxs)("p",{children:["C. ",e.pil_c]}),Object(n.jsxs)("p",{children:["D. ",e.pil_d]}),Object(n.jsxs)("p",{children:["E. ",e.pil_e]})]}):Object(n.jsx)("div",{className:""}),Object(n.jsx)("strong",{children:"Jawaban :"}),Object(n.jsx)("p",{children:Object(n.jsx)(t,{children:e.jawaban})}),Object(n.jsx)("strong",{children:"Pembahasan :"}),Object(n.jsx)("p",{children:Object(n.jsx)(t,{children:e.pembahasan})})]},e.id)}))]})},m=a(5),k=a.n(m);a(39),a(144),a(148);var S=function(e){var t=a(22),s=Object(c.useState)([]),i=Object(u.a)(s,2),j=i[0],l=i[1],b=Object(c.useState)([]),r=Object(u.a)(b,2),O=r[0],h=r[1],x=Object(c.useState)([]),p=Object(u.a)(x,2),v=p[0],f=p[1],m=Object(c.useState)([]),S=Object(u.a)(m,2),C=S[0],w=S[1],N=Object(c.useState)(""),y=Object(u.a)(N,2),P=y[0],B=y[1],E=Object(c.useState)(""),F=Object(u.a)(E,2),T=F[0],K=F[1],D=Object(c.useState)(""),J=Object(u.a)(D,2),L=J[0],M=J[1],A=Object(c.useState)(""),R=Object(u.a)(A,2),Y=R[0],q=R[1],H=Object(c.useState)("essai"),I=Object(u.a)(H,2),z=I[0],G=I[1],Q=Object(c.useState)(""),U=Object(u.a)(Q,2),X=U[0],Z=U[1],V=Object(c.useState)(""),W=Object(u.a)(V,2),$=W[0],ee=W[1],te=Object(c.useState)(""),ae=Object(u.a)(te,2),ne=ae[0],ce=ae[1],se=Object(c.useState)(""),ie=Object(u.a)(se,2),je=ie[0],le=ie[1],be=Object(c.useState)(""),re=Object(u.a)(be,2),oe=re[0],de=re[1],ue=Object(c.useState)(""),Oe=Object(u.a)(ue,2),he=Oe[0],xe=Oe[1],pe=Object(c.useState)(""),_e=Object(u.a)(pe,2),ve=_e[0],ge=_e[1],fe=Object(c.useState)(""),me=Object(u.a)(fe,2),ke=me[0],Se=me[1],Ce=Object(c.useState)(!1),we=Object(u.a)(Ce,2),Ne=we[0],ye=we[1],Pe=Object(c.useState)(""),Be=Object(u.a)(Pe,2),Ee=Be[0],Fe=Be[1],Te=Object(c.useState)(""),Ke=Object(u.a)(Te,2),De=Ke[0],Je=Ke[1],Le=Object(c.useState)(!1),Me=Object(u.a)(Le,2),Ae=Me[0],Re=Me[1],Ye=function(e){ee(e.target.value)},qe=function(e){ye(!0),""===P&&"Bab Soal"===e&&(alert("Pilih Mapel Terlebih dahulu"),ye(!1)),Fe(e)};return Object(c.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.get("/mapel").then((function(e){l(e.data)})),g.get("/kelas").then((function(e){h(e.data)})),g.get("/tingkat_kesulitan").then((function(e){w(e.data)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e(),""!==P&&g.get("/bab_soal?id_mapel="+P).then((function(e){f(e.data)})),Ae&&(e(),Re(!1))}),[P,Ae]),Object(n.jsxs)("div",{className:k.a.container,children:[Ne?Object(n.jsx)("div",{className:k.a.popup__menu__container,children:Object(n.jsxs)("div",{className:k.a.popup__menu,children:[Object(n.jsx)("h5",{children:Ee}),Object(n.jsx)("input",{type:"text",placeholder:Ee,onChange:function(e){Je(e.target.value)}}),Object(n.jsxs)("div",{className:k.a.button__group,children:[Object(n.jsx)("button",{onClick:function(){ye(!1)},children:"Close"}),Object(n.jsx)("button",{onClick:function(){var e,t;switch(Re(!0),t={deskripsi:De},Ee){case"Mapel":e="mapel";break;case"Kelas":e="kelas";break;case"Bab Soal":e="bab_soal",t={deskripsi:De,id_mapel:P};break;case"Tingkat Kesulitan":e="tingkat_kesulitan"}g.post("/"+e,t).then((function(e){console.log(e.data)})),ye(!1)},children:"Submit"})]})]})}):"",Object(n.jsx)("span",{children:"mata pelajaran "}),Object(n.jsxs)("select",{value:P,onChange:function(e){B(e.target.value)},children:[Object(n.jsx)("option",{value:"",disabled:!0}),Object(n.jsx)("input",{type:"text",name:"",id:""}),j.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.deskripsi},e.id)}))]}),Object(n.jsx)("button",{onClick:function(e){return qe("Mapel")},children:"+"}),Object(n.jsx)("span",{children:"kelas "}),Object(n.jsxs)("select",{value:T,onChange:function(e){K(e.target.value)},children:[Object(n.jsx)("option",{value:"",disabled:!0}),O.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.deskripsi},e.id)}))]}),Object(n.jsx)("button",{onClick:function(e){return qe("Kelas")},children:"+"}),Object(n.jsx)("span",{children:"Bab "}),Object(n.jsxs)("select",{value:L,onChange:function(e){M(e.target.value)},children:[Object(n.jsx)("option",{value:"",disabled:!0}),v.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.deskripsi},e.id)}))]}),Object(n.jsx)("button",{onClick:function(e){return qe("Bab Soal")},children:"+"}),Object(n.jsx)("span",{children:"tingkat kesulitan "}),Object(n.jsxs)("select",{value:Y,onChange:function(e){q(e.target.value)},children:[Object(n.jsx)("option",{value:"",disabled:!0}),C.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.deskripsi},e.id)}))]}),Object(n.jsx)("button",{onClick:function(e){return qe("Tingkat Kesulitan")},children:"+"}),Object(n.jsx)("span",{children:"tipe soal : "}),Object(n.jsxs)("select",{value:z,onChange:function(e){G(e.target.value)},children:[Object(n.jsx)("option",{value:"essai",children:"essai"}),Object(n.jsx)("option",{value:"pilgan",children:"pilihan ganda"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"Generate Latex : "}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"soal : "}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:k.a.editor,children:[Object(n.jsx)("textarea",{value:X,onChange:function(e){Z(e.target.value)},name:"",id:"",cols:"30",rows:"10"}),Object(n.jsx)(t,{children:X})]}),Object(n.jsx)("br",{}),"essai"===z?Object(n.jsx)("div",{}):Object(n.jsxs)("div",{className:k.a.pilihan__ganda,children:[Object(n.jsx)("span",{children:"Pilihan A"}),Object(n.jsxs)("div",{className:k.a.editor,children:[Object(n.jsx)("textarea",{value:je,onChange:function(e){le(e.target.value)},cols:"30",rows:"10"}),Object(n.jsx)(t,{children:je})]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"Pilihan B"}),Object(n.jsxs)("div",{className:k.a.editor,children:[Object(n.jsx)("textarea",{value:oe,onChange:function(e){de(e.target.value)},cols:"30",rows:"10"}),Object(n.jsx)(t,{children:oe})]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"Pilihan C"}),Object(n.jsxs)("div",{className:k.a.editor,children:[Object(n.jsx)("textarea",{value:he,onChange:function(e){xe(e.target.value)},cols:"30",rows:"10"}),Object(n.jsx)(t,{children:he})]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"Pilihan D"}),Object(n.jsxs)("div",{className:k.a.editor,children:[Object(n.jsx)("textarea",{value:ve,onChange:function(e){ge(e.target.value)},cols:"30",rows:"10"}),Object(n.jsx)(t,{children:ve})]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"Pilihan E"}),Object(n.jsxs)("div",{className:k.a.editor,children:[Object(n.jsx)("textarea",{value:ke,onChange:function(e){Se(e.target.value)},cols:"30",rows:"10"}),Object(n.jsx)(t,{children:ke})]}),Object(n.jsx)("br",{})]}),Object(n.jsx)("span",{children:"jawaban : "}),Object(n.jsx)("br",{}),"essai"===z?Object(n.jsxs)("div",{className:k.a.editor,children:[Object(n.jsx)("textarea",{value:$,onChange:Ye,name:"",id:"",cols:"30",rows:"10"}),Object(n.jsx)(t,{children:$})]}):Object(n.jsx)("div",{className:k.a.jwb_pilgan,children:Object(n.jsxs)("select",{value:$,onChange:Ye,children:[Object(n.jsx)("option",{value:""}),Object(n.jsx)("option",{value:"a",children:"a"}),Object(n.jsx)("option",{value:"b",children:"b"}),Object(n.jsx)("option",{value:"c",children:"c"}),Object(n.jsx)("option",{value:"d",children:"d"}),Object(n.jsx)("option",{value:"e",children:"e"})]})}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"pembahasan : "}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:k.a.editor,children:[Object(n.jsx)("textarea",{value:ne,onChange:function(e){ce(e.target.value)},name:"",id:"",cols:"30",rows:"10"}),Object(n.jsx)(t,{children:ne})]}),Object(n.jsx)("br",{}),Object(n.jsx)(_,{title:"Submit",link:"/",onClick:function(e){var t;t="essai"===z?{soal:X,jawaban:$,pembahasan:ne,tipe_soal:z,id_mapel:P,id_tingkat_kesulitan:Y,id_kelas:T,id_bab_soal:L}:{soal:X,pil_a:je,pil_b:oe,pil_c:he,pil_d:ve,pil_e:ke,jawaban:$,pembahasan:ne,tipe_soal:z,id_mapel:P,id_tingkat_kesulitan:Y,id_kelas:T,id_bab_soal:L},g.post("/bank_soal",t).then((function(e){console.log(e.data)}))}})]})},C=a(10),w=a.n(C);var N=function(e){var t=a(22),s=Object(c.useState)([]),i=Object(u.a)(s,2),j=i[0],l=i[1],r=Object(c.useState)([]),O=Object(u.a)(r,2),h=(O[0],O[1],Object(c.useState)([])),x=Object(u.a)(h,2),p=x[0],v=x[1],f=Object(c.useState)([]),m=Object(u.a)(f,2),k=m[0],S=m[1],C=Object(c.useState)([]),N=Object(u.a)(C,2),y=N[0],P=N[1],B=Object(c.useState)(""),E=Object(u.a)(B,2),F=E[0],T=E[1],K=Object(c.useState)(""),D=Object(u.a)(K,2),J=D[0],L=D[1],M=Object(c.useState)(""),A=Object(u.a)(M,2),R=A[0],Y=A[1],q=Object(c.useState)(""),H=Object(u.a)(q,2),I=H[0],z=H[1],G=Object(c.useState)("essai"),Q=Object(u.a)(G,2),U=Q[0],X=Q[1],Z=Object(c.useState)(""),V=Object(u.a)(Z,2),W=V[0],$=V[1],ee=Object(c.useState)(""),te=Object(u.a)(ee,2),ae=te[0],ne=te[1],ce=Object(c.useState)(""),se=Object(u.a)(ce,2),ie=se[0],je=se[1],le=Object(c.useState)(""),be=Object(u.a)(le,2),re=be[0],oe=be[1],de=Object(c.useState)(""),ue=Object(u.a)(de,2),Oe=ue[0],he=ue[1],xe=Object(c.useState)(""),pe=Object(u.a)(xe,2),_e=pe[0],ve=pe[1],ge=Object(c.useState)(""),fe=Object(u.a)(ge,2),me=fe[0],ke=fe[1],Se=Object(c.useState)(""),Ce=Object(u.a)(Se,2),we=Ce[0],Ne=Ce[1],ye=Object(b.f)().id,Pe=function(e){ne(e.target.value)};return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.get("/bank_soal?id="+ye).then((function(e){var t=e.data[0];g.get("/mapel?id="+t.id_mapel).then((function(e){l(e.data),T(e.data[0].id)})),g.get("/kelas?id="+t.id_kelas).then((function(e){v(e.data),L(e.data[0].id)})),g.get("/tingkat_kesulitan?id="+t.id_tingkat_kesulitan).then((function(e){P(e.data),z(e.data[0].id)})),g.get("/bab_soal?id="+t.id_bab_soal).then((function(e){S(e.data),Y(e.data[0].id)})),X(t.tipe_soal),$(t.soal),ne(t.jawaban),je(t.pembahasan)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsxs)("div",{className:w.a.container,children:[Object(n.jsx)("span",{children:"mata pelajaran "}),Object(n.jsxs)("select",{value:F,onChange:function(e){T(e.target.value)},children:[Object(n.jsx)("option",{value:"",disabled:!0}),j.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.deskripsi},e.id)}))]}),Object(n.jsx)("span",{children:"kelas "}),Object(n.jsxs)("select",{value:J,onChange:function(e){L(e.target.value)},children:[Object(n.jsx)("option",{value:"",disabled:!0}),p.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.deskripsi},e.id)}))]}),Object(n.jsx)("span",{children:"Bab "}),Object(n.jsxs)("select",{value:R,onChange:function(e){Y(e.target.value)},children:[Object(n.jsx)("option",{value:"",disabled:!0}),k.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.deskripsi},e.id)}))]}),Object(n.jsx)("span",{children:"tingkat kesulitan "}),Object(n.jsxs)("select",{value:I,onChange:function(e){z(e.target.value)},children:[Object(n.jsx)("option",{value:"",disabled:!0}),y.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.deskripsi},e.id)}))]}),Object(n.jsx)("span",{children:"tipe soal : "}),Object(n.jsxs)("select",{value:U,onChange:function(e){X(e.target.value)},children:[Object(n.jsx)("option",{value:"essai",children:"essai"}),Object(n.jsx)("option",{value:"pilgan",children:"pilihan ganda"})]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"soal : "}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:w.a.editor,children:[Object(n.jsx)("textarea",{value:W,onChange:function(e){$(e.target.value)},name:"",id:"",cols:"30",rows:"10"}),Object(n.jsx)(t,{children:W})]}),Object(n.jsx)("br",{}),"essai"===U?Object(n.jsx)("div",{}):Object(n.jsxs)("div",{className:w.a.pilihan__ganda,children:[Object(n.jsx)("span",{children:"Pilihan A"}),Object(n.jsxs)("div",{className:w.a.editor,children:[Object(n.jsx)("textarea",{value:re,onChange:function(e){oe(e.target.value)},cols:"30",rows:"10"}),Object(n.jsx)(t,{children:re})]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"Pilihan B"}),Object(n.jsxs)("div",{className:w.a.editor,children:[Object(n.jsx)("textarea",{value:Oe,onChange:function(e){he(e.target.value)},cols:"30",rows:"10"}),Object(n.jsx)(t,{children:Oe})]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"Pilihan C"}),Object(n.jsxs)("div",{className:w.a.editor,children:[Object(n.jsx)("textarea",{value:_e,onChange:function(e){ve(e.target.value)},cols:"30",rows:"10"}),Object(n.jsx)(t,{children:_e})]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"Pilihan D"}),Object(n.jsxs)("div",{className:w.a.editor,children:[Object(n.jsx)("textarea",{value:me,onChange:function(e){ke(e.target.value)},cols:"30",rows:"10"}),Object(n.jsx)(t,{children:me})]}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"Pilihan E"}),Object(n.jsxs)("div",{className:w.a.editor,children:[Object(n.jsx)("textarea",{value:we,onChange:function(e){Ne(e.target.value)},cols:"30",rows:"10"}),Object(n.jsx)(t,{children:we})]}),Object(n.jsx)("br",{})]}),Object(n.jsx)("span",{children:"jawaban : "}),Object(n.jsx)("br",{}),"essai"===U?Object(n.jsxs)("div",{className:w.a.editor,children:[Object(n.jsx)("textarea",{value:ae,onChange:Pe,name:"",id:"",cols:"30",rows:"10"}),Object(n.jsx)(t,{children:ae})]}):Object(n.jsx)("div",{className:w.a.jwb_pilgan,children:Object(n.jsxs)("select",{value:ae,onChange:Pe,children:[Object(n.jsx)("option",{value:""}),Object(n.jsx)("option",{value:"a",children:"a"}),Object(n.jsx)("option",{value:"b",children:"b"}),Object(n.jsx)("option",{value:"c",children:"c"}),Object(n.jsx)("option",{value:"d",children:"d"}),Object(n.jsx)("option",{value:"e",children:"e"})]})}),Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"pembahasan : "}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:w.a.editor,children:[Object(n.jsx)("textarea",{value:ie,onChange:function(e){je(e.target.value)},name:"",id:"",cols:"30",rows:"10"}),Object(n.jsx)(t,{children:ie})]}),Object(n.jsx)("br",{}),Object(n.jsx)(_,{title:"Submit",link:"/",onClick:function(e){var t;t="essai"===U?{id:ye,soal:W,jawaban:ae,pembahasan:ie,tipe_soal:U,id_mapel:F,id_tingkat_kesulitan:I,id_kelas:J,id_bab_soal:R}:{id:ye,soal:W,pil_a:re,pil_b:Oe,pil_c:_e,pil_d:me,pil_e:we,jawaban:ae,pembahasan:ie,tipe_soal:U,id_mapel:F,id_tingkat_kesulitan:I,id_kelas:J,id_bab_soal:R},g.put("/bank_soal",t).then((function(e){console.log(e.data)}))}})]})};a(159);var y=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(l.a,{children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/add_soal",children:Object(n.jsx)(S,{})}),Object(n.jsx)(b.a,{path:"/edit_soal/:id",children:Object(n.jsx)(N,{})}),Object(n.jsx)(b.a,{path:"/",children:Object(n.jsx)(f,{})})]})})})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,161)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};j.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),P()},27:function(e,t,a){e.exports={container:"styles_container__3QR50",button__group:"styles_button__group__16b5X"}},5:function(e,t,a){e.exports={container:"styles_container__Fvmqo",popup__menu__container:"styles_popup__menu__container__Yu6Pk",popup__menu:"styles_popup__menu__1CNhZ",button__group:"styles_button__group__1N2_K",pilihan__ganda:"styles_pilihan__ganda__2J5w6",editor:"styles_editor__3Rypr"}},66:function(e,t,a){e.exports={container:"styles_container__1HytT"}},74:function(e,t,a){}},[[160,1,2]]]);
//# sourceMappingURL=main.bc34c892.chunk.js.map