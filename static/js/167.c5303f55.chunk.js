(this.webpackJsonpview=this.webpackJsonpview||[]).push([[167],{878:function(e,a,t){"use strict";t.r(a);var n,l,r,i=t(84),c=t.n(i),u=t(107),s=t(428),o=t(109),m=t(0),p=t.n(m),b=t(74),g=t(879),d=t.n(g),h=t(73),f=t(3),E=t(427);a.default=function(e){var a=t(429),i=Object(m.useState)([]),g=Object(o.a)(i,2),_=(g[0],g[1]),v=Object(m.useState)([]),j=Object(o.a)(v,2),S=(j[0],j[1],Object(m.useState)([])),O=Object(o.a)(S,2),C=(O[0],O[1]),k=Object(m.useState)([]),y=Object(o.a)(k,2),w=y[0],A=y[1],$=Object(m.useState)([]),x=Object(o.a)($,2),N=x[0],B=x[1],P=Object(m.useState)(""),D=Object(o.a)(P,2),T=D[0],G=D[1],K=Object(m.useState)([]),U=Object(o.a)(K,2),F=U[0],q=U[1],I=Object(m.useState)(""),R=Object(o.a)(I,2),z=R[0],J=R[1],L=Object(m.useState)(""),M=Object(o.a)(L,2),Q=M[0],X=M[1],H=Object(m.useState)(""),V=Object(o.a)(H,2),W=V[0],Y=V[1],Z=Object(m.useState)(""),ee=Object(o.a)(Z,2),ae=ee[0],te=ee[1],ne=Object(m.useState)(""),le=Object(o.a)(ne,2),re=le[0],ie=(le[1],Object(m.useState)("")),ce=Object(o.a)(ie,2),ue=ce[0],se=(ce[1],Object(m.useState)("")),oe=Object(o.a)(se,2),me=oe[0],pe=oe[1],be=Object(m.useState)(""),ge=Object(o.a)(be,2),de=ge[0],he=ge[1],fe=Object(m.useState)("essai"),Ee=Object(o.a)(fe,2),_e=Ee[0],ve=Ee[1],je=Object(m.useState)(""),Se=Object(o.a)(je,2),Oe=Se[0],Ce=Se[1],ke=Object(m.useState)([]),ye=Object(o.a)(ke,2),we=ye[0],Ae=ye[1],$e=Object(m.useState)([]),xe=Object(o.a)($e,2),Ne=xe[0],Be=xe[1],Pe=Object(m.useState)([]),De=Object(o.a)(Pe,2),Te=De[0],Ge=(De[1],Object(m.useState)(0)),Ke=Object(o.a)(Ge,2),Ue=(Ke[0],Ke[1]),Fe=Object(m.useState)(""),qe=Object(o.a)(Fe,2),Ie=qe[0],Re=qe[1],ze=Object(m.useState)(""),Je=Object(o.a)(ze,2),Le=Je[0],Me=Je[1],Qe=Object(m.useState)([]),Xe=Object(o.a)(Qe,2),He=Xe[0],Ve=(Xe[1],Object(m.useState)([])),We=Object(o.a)(Ve,2),Ye=We[0],Ze=(We[1],Object(m.useState)("")),ea=Object(o.a)(Ze,2),aa=ea[0],ta=ea[1],na=Object(m.useState)(""),la=Object(o.a)(na,2),ra=la[0],ia=la[1],ca=Object(m.useState)(""),ua=Object(o.a)(ca,2),sa=ua[0],oa=ua[1],ma=Object(m.useState)(""),pa=Object(o.a)(ma,2),ba=pa[0],ga=pa[1],da=Object(m.useState)(""),ha=Object(o.a)(da,2),fa=ha[0],Ea=ha[1],_a=Object(m.useState)(!1),va=Object(o.a)(_a,2),ja=(va[0],va[1]),Sa=Object(m.useState)(!1),Oa=Object(o.a)(Sa,2),Ca=(Oa[0],Oa[1]),ka=Object(m.useState)(!1),ya=Object(o.a)(ka,2),wa=ya[0],Aa=ya[1],$a=Object(m.useState)([]),xa=Object(o.a)($a,2),Na=(xa[0],xa[1],Object(f.h)().id),Ba=function(e,a){ja(!0);var t=a.target.files;if(Be((function(e){return e.concat(t[0])})),FileReader&&t&&t.length){var n=new FileReader;n.readAsDataURL(t[0]),n.onload=function(e){Ae((function(a){return a.concat(e.target.result)})),Ue((function(e){return e+1}))};var l,r=document.getElementById(e).selectionStart,i=" img"+we.length+" ";switch(e){case"soal":Ce((l=Oe).slice(0,r)+i+l.slice(r));break;case"jawaban":Re((l=Ie).slice(0,r)+i+l.slice(r));break;case"pembahasan":Me((l=Le).slice(0,r)+i+l.slice(r));break;case"pil_a":ta((l=aa).slice(0,r)+i+l.slice(r));break;case"pil_b":ia((l=ra).slice(0,r)+i+l.slice(r));break;case"pil_c":oa((l=sa).slice(0,r)+i+l.slice(r));break;case"pil_d":ga((l=ba).slice(0,r)+i+l.slice(r));break;case"pil_e":Ea((l=fa).slice(0,r)+i+l.slice(r))}}},Pa=function(e){return e.replaceAll("{","").replaceAll("}","")},Da=function(e,t,n){if(/\$([\s\S]*?)\$/.test(t))return p.a.createElement(a,{key:n.toString()},t+" ");if(/@([\s\S]*?)@/.test(t))return p.a.createElement(a,{key:n.toString(),displayMode:!0},t.replaceAll("@","$$")+" ");if(/img[0-9]+/.test(t)){var l=t.match(/(?<=img)[0-9]+/);return p.a.createElement("div",{key:n.toString(),className:"img__group",id:"img__group__soal"},p.a.createElement("img",{src:we[l[0]],alt:"aad"}),p.a.createElement("button",{style:{position:"absolute",right:"10px",width:"40px",height:"30px",cursor:"pointer"},onClick:function(){return function(e,a){var t;switch(e){case"soal":t=Oe.replace(" img"+a+" ",""),Ce(t);break;case"jawaban":t=Ie.replace(" img"+a+" ",""),Re(t);break;case"pembahasan":t=Le.replace(" img"+a+" ",""),Me(t);break;case"pil_a":t=aa.replace(" img"+a+" ",""),ta(t);break;case"pil_b":t=ra.replace(" img"+a+" ",""),ia(t);break;case"pil_c":t=sa.replace(" img"+a+" ",""),oa(t);break;case"pil_d":t=ba.replace(" img"+a+" ",""),ga(t);break;case"pil_e":t=fa.replace(" img"+a+" ",""),Ea(t)}}(e,l[0])}},"X"))}return p.a.createElement("span",{key:n.toString()},t+" ")},Ta=function(e){if("undefined"!==typeof e){var a=e,t=a.match(/\\ang{.*?}/g);null!==t&&t.map((function(e){var t=e.match(/{.*?}/g),n=Pa(t[0])+"\\degree";a=a.replace(e,n)}));var l,r=a.match(/\\begin{.*?}\[.*?]|\\begin{.*?}|\\end{.*?}/gi);if(null!==r)r.map((function(e){var t=e.match(/\{[\s\S]*?\}/);e.match(/\[[\s\S]*?\]/);null!==t&&t.map((function(a){l="{enumerate}"==a?e.replaceAll(/\\begin{enumerate}\[.*?]|\\begin{enumerate}/gi,"$\\newline$").replaceAll(/\\end{enumerate}/gi,"$\\newline$"):"{align*}"==a||"{equation}"==a?(l=e.replaceAll(/\\begin{align\*}\[.*?]|\\begin{align\*}|\\begin{equation}\[.*?]|\\begin{equation}/gi,String.fromCharCode(32)+"@#\\begin{aligned}")).replaceAll(/\\end{align\*}|\\end{equation}/gi,"\\end{aligned}@#"+String.fromCharCode(32)):"{gather}"==a?(l=e.replaceAll(/\\begin{gather}\[.*?]|\\begin{gather}/gi,String.fromCharCode(32)+"@#\\begin{gather}")).replaceAll(/\\end{gather}/gi,"\\end{gather}@#"+String.fromCharCode(32)):"{center}"==a?(l=e.replaceAll(/\\begin{center}\[.*?]|\\begin{center}/gi,String.fromCharCode(32)+"@#\\begin{aligned}")).replaceAll(/\\end{center}/gi,"\\end{aligned}@#"+String.fromCharCode(32)):e})),a=a.replace(e,l)}));var i=e.match(/\\begin\{enumerate\}([\s\S]*?)\\end\{enumerate\}/gm);null!==i&&(console.log("insideBeginEnumerate"),console.log(i),i.map((function(e){var t=e.match(/(?=\\item).*/g),n=e.replaceAll(/\\begin{enumerate}\[.*?]|\\begin{enumerate}/gi,"$\\newline$").replaceAll(/\\end{enumerate}/gi,"$\\newline$");null!==t&&t.map((function(e,a){var t=e.replaceAll("\\item ","");n=n.replaceAll(e,"$("+(a+1)+") "+t+"\\newline$")}));var l=e.replaceAll(/\\begin{enumerate}\[.*?]|\\begin{enumerate}/gi,"$\\newline$").replaceAll(/\\end{enumerate}/gi,"$\\newline$");a=a.replace(l,n)})));var c=a.match(/\$(.*?)\$/g);null!==c&&c.map((function(e){var t=e.replaceAll(String.fromCharCode(32),"\\,");a=a.replace(e,t)}));var u=a.match(/(@#)([\s\S]+?)(@#)/g);null!==u&&u.map((function(e){var t=e.replaceAll(String.fromCharCode(32)+"\\"+String.fromCharCode(32),"\\,").replaceAll(String.fromCharCode(32),"\\,").replaceAll(String.fromCharCode(13),"").replaceAll(String.fromCharCode(9),"").replaceAll("{}&","").replaceAll("$","").replaceAll("=","&=").replaceAll("\\approx","&\\approx").replaceAll("[per-mode&=symbol]","[per-mode=symbol]");a=a.replace(e,t)}));var o=a.match(/\\SI{.*?}{.*?}|\\SI\[.*?]{.*?}{.*?}|\\SI{.*?}|\\NUM{.*?}/gi);return null!==o&&o.map((function(e){var t,n,l,r,i="",c=(t=/tothe/.test(e)?e+"}":e).match(/\[[\s\S]*?\]/),u=t.match(/{.*?}/g);null!==c?u.map((function(e){n=/tothe/.test(e)?e+"}":e,l=Pa(n),i+=Ga(c[0],l)+" "})):u.map((function(e){if(/tothe/.test(e)){var a=(n=e+"}").match(/(?<=tothe)[\s\S]*/);r="^{"+Pa(a[0])+"}",n=n.replaceAll(/(?<=tothe).*/g,"")}else n=e,r="";l=Pa(n),i+=Ga("",l)+r+" "})),i=i.replaceAll(String.fromCharCode(32),"\\,"),a=a.replace(t,i)})),a=a.replaceAll(String.fromCharCode(10)+String.fromCharCode(10),String.raw(n||(n=Object(s.a)(["$$\\~\\$$"],["$$\\\\~\\\\$$"]))))}return e},Ga=function(e,a){var t,n=!1;return E.a.map((function(l){if(a===l.code&&""===e&&!1===n)t=l.translation,n=!0;else if(a===l.code&&"[per-mode=symbol]"===e&&!1===n)t=l["per-mode=symbol"],n=!0;else if(a!==l.code&&!1===n)if(/\x2D?[0-9]+(?=e)[\s\S]\x2D?[0-9]+/.test(a)||/(?=e)[\s\S]\x2D?[0-9]+/.test(a)){var r=a.match(/(?<=e)[\s\S]?[0-9]+/),i=a.match(/\x2D?[0-9]+(?=e)|\x2D?[0-9]+,[0-9]+(?=e)/);t=null!==r&&null!==i?i[0]+" x 10^{"+r[0]+"}":null!==r&&null===i?"10^"+r[0]:a}else t=a})),String.raw(l||(l=Object(s.a)(["\textnormal{"],["\\textnormal{"])))+t+String.raw(r||(r=Object(s.a)(["}"])))},Ka=function(e){J(e.target.value)},Ua=function(e){Re(e.target.value)};return Object(m.useEffect)((function(){function e(){return(e=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.get('/bank_soal?last="1"').then((function(e){var a=new FormData;a.append("nameimg",Te),a.append("id",e.data[0].id),Ne.map((function(e,t){a.append("file"+t,e)})),h.a.put("/gambar_soal",a).then((function(e){console.log(e)}))}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(u.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.get("/bank_soal?id="+Na).then((function(e){var a=e.data[0];G(a.kategori_soal),X(a.id_utbk),J(a.tahun_soal+"-01-01"),ve(a.tipe_soal),Ce(a.soal),Re(a.jawaban),Me(a.pembahasan),ta(a.pil_a),ia(a.pil_b),oa(a.pil_c),ga(a.pil_d),Ea(a.pil_e)})),h.a.get("/mapel").then((function(e){_(e.data)})),h.a.get("/kelas").then((function(e){C(e.data)})),h.a.get("/tingkat_kesulitan").then((function(e){B(e.data)})),h.a.get("/bab_soal?id_mapel="+re).then((function(e){A(e.data)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}(),"UTBK"===T&&h.a.get("/utbk").then((function(e){q(e.data)})),wa&&(!function(){e.apply(this,arguments)}(),Aa(!1))}),[T,wa]),p.a.createElement("div",{className:d.a.container},p.a.createElement("span",null,"Kategori Soal"),p.a.createElement("select",{value:T,onChange:function(e){G(e.target.value)}},p.a.createElement("option",{value:"",disabled:!0}),p.a.createElement("option",{value:"UTBK"},"UTBK"),p.a.createElement("option",{value:"BAB"},"BAB")),p.a.createElement("br",null),"BAB"==T?p.a.createElement(p.a.Fragment,null,p.a.createElement("span",null,"Bab "),p.a.createElement("select",{value:me,onChange:function(e){pe(e.target.value)}},p.a.createElement("option",{value:"",disabled:!0}),w.map((function(e){return p.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),p.a.createElement("br",null),p.a.createElement("span",null,"Sub Bab "),p.a.createElement("select",{value:W,onChange:function(e){Y(e.target.value)}},p.a.createElement("option",{value:"",disabled:!0}),He.map((function(e){return p.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),p.a.createElement("br",null),p.a.createElement("span",null,"Konsep "),p.a.createElement("select",{value:ae,onChange:function(e){te(e.target.value)}},p.a.createElement("option",{value:"",disabled:!0}),Ye.map((function(e){return p.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),p.a.createElement("br",null),p.a.createElement("span",null,"Level Soal "),p.a.createElement("select",{value:de,onChange:function(e){he(e.target.value)}},p.a.createElement("option",{value:"",disabled:!0}),N.map((function(e){return p.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),p.a.createElement("br",null),p.a.createElement("span",null,"Tahun Soal"),p.a.createElement("input",{type:"date",value:z,onChange:Ka}),p.a.createElement("br",null)):"UTBK"==T?p.a.createElement(p.a.Fragment,null,p.a.createElement("span",null,"UTBK "),p.a.createElement("select",{value:Q,onChange:function(e){X(e.target.value)}},p.a.createElement("option",{value:"",disabled:!0}),F.map((function(e){return p.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),p.a.createElement("br",null),p.a.createElement("span",null,"Tahun Soal"),p.a.createElement("input",{type:"date",value:z,onChange:Ka}),p.a.createElement("br",null)):p.a.createElement(p.a.Fragment,null),p.a.createElement("span",null,"soal : "),p.a.createElement("br",null),p.a.createElement("div",{className:d.a.editor},p.a.createElement("textarea",{value:Oe,onChange:function(e){Ce(e.target.value)},name:"",id:"",cols:"30",rows:"10"}),p.a.createElement("input",{type:"file",onChange:Ba.bind(this,"soal"),className:"filetype"}),p.a.createElement("div",{className:"img__group",id:"img__group__soal"}),p.a.createElement("br",null),Ta(Oe).split(" ").map((function(e,a){return Da("soal",e,a)}))),p.a.createElement("br",null),"essai"===_e?p.a.createElement("div",null):p.a.createElement("div",{className:d.a.pilihan__ganda},p.a.createElement("span",null,"Pilihan A"),p.a.createElement("div",{className:d.a.editor},p.a.createElement("textarea",{value:aa,onChange:function(e){ta(e.target.value)},cols:"30",rows:"10"}),p.a.createElement("span",null,"Pilih Gambar "),p.a.createElement("input",{type:"file",onChange:Ba.bind(this,"pil_a"),className:"filetype"}),p.a.createElement("br",null),Ta(aa).split(" ").map((function(e,a){return Da("pil_a",e,a)}))),p.a.createElement("br",null),p.a.createElement("span",null,"Pilihan B"),p.a.createElement("div",{className:d.a.editor},p.a.createElement("textarea",{value:ra,onChange:function(e){ia(e.target.value)},cols:"30",rows:"10"}),p.a.createElement("span",null,"Pilih Gambar "),p.a.createElement("input",{type:"file",onChange:Ba.bind(this,"pil_b"),className:"filetype"}),p.a.createElement("br",null),Ta(ra).split(" ").map((function(e,a){return Da("pil_b",e,a)}))),p.a.createElement("br",null),p.a.createElement("span",null,"Pilihan C"),p.a.createElement("div",{className:d.a.editor},p.a.createElement("textarea",{value:sa,onChange:function(e){oa(e.target.value)},cols:"30",rows:"10"}),p.a.createElement("span",null,"Pilih Gambar "),p.a.createElement("input",{type:"file",onChange:Ba.bind(this,"pil_c"),className:"filetype"}),p.a.createElement("br",null),Ta(sa).split(" ").map((function(e,a){return Da("pil_c",e,a)}))),p.a.createElement("br",null),p.a.createElement("span",null,"Pilihan D"),p.a.createElement("div",{className:d.a.editor},p.a.createElement("textarea",{value:ba,onChange:function(e){ga(e.target.value)},cols:"30",rows:"10"}),p.a.createElement("span",null,"Pilih Gambar "),p.a.createElement("input",{type:"file",onChange:Ba.bind(this,"pil_d"),className:"filetype"}),p.a.createElement("br",null),Ta(ba).split(" ").map((function(e,a){return Da("pil_d",e,a)}))),p.a.createElement("br",null),p.a.createElement("span",null,"Pilihan E"),p.a.createElement("div",{className:d.a.editor},p.a.createElement("textarea",{value:fa,onChange:function(e){Ea(e.target.value)},cols:"30",rows:"10"}),p.a.createElement("span",null,"Pilih Gambar "),p.a.createElement("input",{type:"file",onChange:Ba.bind(this,"pil_e"),className:"filetype"}),p.a.createElement("br",null),Ta(fa).split(" ").map((function(e,a){return Da("pil_e",e,a)}))),p.a.createElement("br",null)),p.a.createElement("span",null,"jawaban : "),p.a.createElement("br",null),"essai"===_e?p.a.createElement("div",{className:d.a.editor},p.a.createElement("textarea",{value:Ie,onChange:Ua,name:"",id:"",cols:"30",rows:"10"}),p.a.createElement("span",null,"Pilih Gambar "),p.a.createElement("input",{type:"file",onChange:Ba.bind(this,"jawaban"),className:"filetype"}),p.a.createElement("br",null),Ta(Ie).split(" ").map((function(e,a){return Da("jawaban",e,a)}))):p.a.createElement("div",{className:d.a.jwb_pilgan},p.a.createElement("select",{value:Ie,onChange:Ua},p.a.createElement("option",{value:""}),p.a.createElement("option",{value:"a"},"a"),p.a.createElement("option",{value:"b"},"b"),p.a.createElement("option",{value:"c"},"c"),p.a.createElement("option",{value:"d"},"d"),p.a.createElement("option",{value:"e"},"e"))),p.a.createElement("br",null),p.a.createElement("span",null,"pembahasan : "),p.a.createElement("br",null),p.a.createElement("div",{className:d.a.editor},p.a.createElement("textarea",{value:Le,onChange:function(e){Me(e.target.value)},name:"",id:"",cols:"30",rows:"10"}),p.a.createElement("span",null,"Pilih Gambar "),p.a.createElement("input",{type:"file",onChange:Ba.bind(this,"pembahasan"),className:"filetype"}),p.a.createElement("br",null),Ta(Le).split(" ").map((function(e,a){return Da("pembahasan",e,a)}))),p.a.createElement("br",null),p.a.createElement(b.a,{title:"Submit",onClick:function(e){var a;Aa(!0),a="essai"===_e?{id:Na,soal:Oe,jawaban:Ie,pembahasan:Le,tipe_soal:_e,id_mapel:re,id_tingkat_kesulitan:de,id_kelas:ue,id_bab_soal:me}:{id:Na,soal:Oe,pil_a:aa,pil_b:ra,pil_c:sa,pil_d:ba,pil_e:fa,jawaban:Ie,pembahasan:Le,tipe_soal:_e,kategori_soal:T,tahun_soal:z.substring(0,4),id_tingkat_kesulitan:de,id_bab_soal:me,id_sub_bab:W,id_konsep:ae,id_utbk:Q},console.log(a),h.a.put("/bank_soal",a).then((function(e){console.log(e.data)})),Ca(!0),setTimeout((function(){window.location="https://will1001.github.io/appbimbel-frontend/"}),3e3)}}))}},879:function(e,a,t){e.exports={container:"styles_container__2w9d9",popup__menu__container:"styles_popup__menu__container__1g8Ez",popup__menu:"styles_popup__menu__2bQzC",button__group:"styles_button__group__2Bo0b",pilihan__ganda:"styles_pilihan__ganda__36Bju",editor:"styles_editor__26srC"}}}]);
//# sourceMappingURL=167.c5303f55.chunk.js.map