(this.webpackJsonpview=this.webpackJsonpview||[]).push([[78],{73:function(e,t,n){"use strict";var a=n(122),r=n.n(a).a.create({baseURL:"https://fisikamu.space"});t.a=r},74:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(19),i=n(87),o=n.n(i);t.a=function(e){return r.a.createElement("div",{className:o.a.container,onClick:e.onClick},""===e.link?r.a.createElement("div",{className:o.a.nolink},e.title):r.a.createElement(l.b,{to:e.link},e.title))}},87:function(e,t,n){e.exports={container:"styles_container__2qmjW",nolink:"styles_nolink__1-KRX"}},880:function(e,t,n){"use strict";n.r(t);var a=n(84),r=n.n(a),l=n(107),i=n(20),o=n(109),c=n(0),u=n.n(c),s=n(349),d=n(626),m=n(627),p=n.n(m),b=n(973),f=n.n(b),h=(n(628),n(974)),v=n.n(h),E=n(73),g=n(74),_=n(93),y=n(91);t.default=function(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),m=a[0],b=a[1],h=Object(c.useState)(!1),O=Object(o.a)(h,2),k=O[0],j=O[1],S=Object(c.useState)({}),w=Object(o.a)(S,2),C=w[0],x=w[1],M=Object(c.useState)(0),T=Object(o.a)(M,2),L=T[0],D=T[1],A=Object(c.useState)(!1),I=Object(o.a)(A,2),B=I[0],N=I[1],R=Object(c.useState)(0),H=Object(o.a)(R,2),P=H[0],U=H[1],F=Object(c.useState)([]),V=Object(o.a)(F,2),K=(V[0],V[1]),J=Object(c.useState)([]),q=Object(o.a)(J,2),G=q[0],W=q[1],z=Object(c.useState)([]),$=Object(o.a)(z,2),X=$[0],Q=$[1],Y=Object(c.useState)(""),Z=Object(o.a)(Y,2),ee=Z[0],te=Z[1],ne=Object(c.useState)(""),ae=Object(o.a)(ne,2),re=ae[0],le=ae[1],ie=Object(c.useState)(""),oe=Object(o.a)(ie,2),ce=oe[0],ue=oe[1],se=Object(c.useState)(""),de=Object(o.a)(se,2),me=de[0],pe=de[1],be=Object(c.useState)(""),fe=Object(o.a)(be,2),he=fe[0],ve=fe[1],Ee=Object(c.useState)(""),ge=Object(o.a)(Ee,2),_e=ge[0],ye=ge[1],Oe=Object(c.useState)([]),ke=Object(o.a)(Oe,2),je=ke[0],Se=ke[1],we=Object(c.useState)([]),Ce=Object(o.a)(we,2),xe=(Ce[0],Ce[1],Object(c.useState)([])),Me=Object(o.a)(xe,2),Te=(Me[0],Me[1],Object(c.useState)([])),Le=Object(o.a)(Te,2),De=Le[0],Ae=Le[1],Ie=Object(c.useState)([]),Be=Object(o.a)(Ie,2),Ne=Be[0],Re=Be[1],He=Object(c.useState)(new FormData),Pe=Object(o.a)(He,2),Ue=Pe[0],Fe=(Pe[1],Object(c.useState)("")),Ve=Object(o.a)(Fe,2),Ke=(Ve[0],Ve[1],Object(c.useState)("")),Je=Object(o.a)(Ke,2),qe=(Je[0],Je[1],Object(c.useState)("")),Ge=Object(o.a)(qe,2),We=Ge[0],ze=Ge[1],$e=Object(c.useState)(""),Xe=Object(o.a)($e,2),Qe=Xe[0],Ye=Xe[1],Ze=Object(c.useState)(""),et=Object(o.a)(Ze,2),tt=(et[0],et[1],Object(c.useState)(new FormData)),nt=Object(o.a)(tt,2),at=nt[0],rt=(nt[1],Object(c.useState)(new FormData)),lt=Object(o.a)(rt,2),it=lt[0],ot=(lt[1],s.EditorState.createEmpty()),ct=Object(c.useState)(ot),ut=Object(o.a)(ct,2),st=ut[0],dt=ut[1],mt=function(e){ze(e.target.value)},pt=function(e){Ye(e.target.value)},bt=u.a.createElement("div",{className:v.a.panel_input_review},u.a.createElement("div",{className:v.a.panel_input_review_layer_inside},u.a.createElement("h1",null,"Buat Video Materi"),B?u.a.createElement("div",{className:v.a.modal},u.a.createElement("div",{className:v.a.modal_content},u.a.createElement("h2",null,P,"% / 100%"))):u.a.createElement("div",null),u.a.createElement("input",{type:"text",placeholder:"Judul Video",onChange:function(e){te(e.target.value)},value:ee}),u.a.createElement("br",null),u.a.createElement("input",{type:"text",placeholder:"Tutor",onChange:function(e){ue(e.target.value)},value:ce}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("h5",null,"Deskripsi :"),u.a.createElement("div",{className:v.a.editor_style},u.a.createElement(d.Editor,{editorState:st,onEditorStateChange:function(e){dt(e)}})),u.a.createElement("textarea",{style:{display:"none"},disabled:!0,value:p()(Object(s.convertToRaw)(st.getCurrentContent()))}),u.a.createElement("span",null,"Poin : ")," ",u.a.createElement("input",{type:"number",min:0,onChange:function(e){if(e.target.value>G.length)for(var t=0;t<e.target.value-G.length;)W((function(e){return[].concat(Object(i.a)(e),[0])})),Q((function(e){return[].concat(Object(i.a)(e),[""])})),t+=1;else W(Object(i.a)(G.slice(0,e.target.value))),Q(Object(i.a)(X.slice(0,e.target.value)));D(e.target.value)},value:L}),u.a.createElement("br",null),u.a.createElement("br",null),G.map((function(e,t){return u.a.createElement("div",{key:t},u.a.createElement("span",null,"Poin ",t+1," : "),u.a.createElement("input",{type:"text",onChange:function(e){!function(e,t){var n=Object(i.a)(G);n[t]=e.target.value,W(n)}(e,t)},value:e}),u.a.createElement("span",null,"ket : "),u.a.createElement("input",{type:"text",onChange:function(e){!function(e,t){var n=Object(i.a)(X);n[t]=e.target.value,Q(n)}(e,t)},value:X[t]}))})),u.a.createElement("br",null),u.a.createElement("span",null,"Bab "),u.a.createElement("select",{value:We,onChange:mt},u.a.createElement("option",{value:"",disabled:!0}),De.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Sub Bab "),u.a.createElement("select",{value:Qe,onChange:pt},u.a.createElement("option",{value:"",disabled:!0}),Ne.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("span",null,"Icon : "),u.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files,n=t[0].name.split(".").length,a=Date.now(),r=t[0].name.split(".")[n-1];ve("icon_video_"+a+"."+r),FileReader&&t&&t.length&&(it.append("name","icon_video_"+a),it.append("name_before","icon_video_"+a),it.append("file",t[0]))}.bind(this),className:"filetype"}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("span",null,"Thumbnail : "),u.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files,n=t[0].name.split(".").length,a=Date.now(),r=t[0].name.split(".")[n-1];pe("thumbnail_"+a+"."+r),FileReader&&t&&t.length&&(at.append("name","thumbnail_"+a),at.append("name_before","thumbnail_"+a),at.append("file",t[0]))}.bind(this),className:"filetype"}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("span",null,"Upload Video : "),u.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files,n=t[0].name.split(".").length,a=Date.now(),r=t[0].name.split(".")[n-1];ye("video_materi_"+We+"_"+Qe+"_"+a+"."+r),FileReader&&t&&t.length&&(Ue.append("name","video_materi_"+We+"_"+Qe+"_"+a),Ue.append("name_before","video_materi_"+We+"_"+Qe+"_"+a),Ue.append("file",t[0]))}.bind(this)}),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(g.a,{link:"",title:"cancel",onClick:function(){b((function(e){return!e}))}}),u.a.createElement(g.a,{link:"",title:"save",onClick:function(){return function(){if("edit"===re)""!==ee&&""!==ce&&""!==p()(Object(s.convertToRaw)(st.getCurrentContent()))&&""!==Qe?E.a.put("/video_materi",C).then((function(e){console.log(e),j(!0),b((function(e){return!e})),j(!1)})):alert("Isi Semua Data");else if(null!==Ue&&""!==ee&&""!==ce&&""!==p()(Object(s.convertToRaw)(st.getCurrentContent()))&&""!==Qe){N(!0);var e="/uploads/"+_e,t="/uploads/"+me,n="/uploads/"+he,a=[];G.map((function(e,t){a.push(JSON.stringify({keterangan:X[t],poin:e}))}));var r={judul:ee,nomor:je.length+1,tutor:ce,deskripsi:p()(Object(s.convertToRaw)(st.getCurrentContent())),poin:a.toString(),thumbnail:t,icon:n,link_video:e,id_sub_bab:Qe};E.a.post("/video_materi",r).then((function(e){console.log(e),j(!0),j(!1)}));var l={onUploadProgress:function(e){var t=Math.round(100*e.loaded/e.total);t<100&&U(t),100===t&&(b(!1),N(!1))}};E.a.post("/file_upload",Ue,l).then((function(e){console.log(e)})),E.a.post("/file_upload",at).then((function(e){console.log(e)})),E.a.post("/file_upload",it).then((function(e){console.log(e)}))}else alert("Isi Semua Data")}()}}))),ft=u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Video Materi"),u.a.createElement(g.a,{link:"",title:"Tambah Video Materi",onClick:function(){b((function(e){return!e}))}}),u.a.createElement("h3",null,"Filter"),u.a.createElement("span",null,"Bab "),u.a.createElement("select",{value:We,onChange:mt},u.a.createElement("option",{value:"",disabled:!0}),De.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement("span",null,"Sub Bab "),u.a.createElement("select",{value:Qe,onChange:pt},u.a.createElement("option",{value:"",disabled:!0}),Ne.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.deskripsi)}))),u.a.createElement("br",null),u.a.createElement(g.a,{link:"",title:"Terapkan",onClick:function(){return vt()}}),u.a.createElement(g.a,{link:"",title:"Reset",onClick:function(){return ze(""),void Ye("")}}),u.a.createElement(_.a,{dropID:"drop-1",handleOnDragEnd:function(e){var t=je,n=e.source.index,a=e.destination.index;if(a>=t.length)for(var r=a-t.length+1;r--;)t.push(void 0);t.splice(a,0,t.splice(n,1)[0]);for(var l=[],i=0;i<t.length;i++){var o={id:t[i].id,nomor:i+1};l.push(o)}var c={data_nomor:l};E.a.put("/video_materi",c).then((function(e){200==e.status&&(Se([]),ht(),j(!0))}))},thList:["no","tutor","deskripsi","judul","Sub Bab","Thumbnail","Video","Status",""],tdList:je.map((function(e,t){return u.a.createElement(y.b,{key:e.id,draggableId:e.id,index:t},(function(t,a){return u.a.createElement("tr",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps),u.a.createElement("td",null,e.nomor),u.a.createElement("td",null,e.tutor),u.a.createElement("td",null,e.Deskripsi.length<70?e.Deskripsi:e.Deskripsi.substring(0,70)+". . ."," "),u.a.createElement("td",null,e.judul),u.a.createElement("td",null,e.sub_bab),u.a.createElement("td",null,u.a.createElement("a",{href:"https://fisikamu.space"+e.thumbnail},"Lihat")),u.a.createElement("td",null,u.a.createElement("a",{href:"https://fisikamu.space"+e.link_video},"Lihat")),u.a.createElement("td",null,e.status),u.a.createElement("td",null,u.a.createElement("a",{href:"#0",onClick:function(){return function(e){b((function(e){return!e})),le("edit"),te(e.judul),ue(e.tutor),console.log(e);var t=f()(e.Deskripsi),n=t.contentBlocks,a=t.entityMap,r=s.ContentState.createFromBlockArray(n,a),l=s.EditorState.createWithContent(r);dt(l);var i=e.poin.split(","),o=Array(i.length).fill(0);i.map((function(e,t){o[t]=e})),D(i.length),W(o),K(o),ze(e.id_bab),Ye(e.id_sub_bab);var c=[];G.map((function(e,t){c.push(JSON.stringify({keterangan:X[t],poin:e}))})),x({judul:ee,nomor:e.nomor,tutor:ce,deskripsi:p()(Object(s.convertToRaw)(st.getCurrentContent())),poin:c.toString(),thumbnail:e.thumbnail,link_video:e.link_video,id_sub_bab:Qe})}(e)}},"Edit"),"||",u.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t=n(111);t=t.stringify({id:e.id}),E.a.delete("/video_materi",{headers:{"Content-Type":"application/x-www-form-urlencoded"},data:t}).then((function(e){console.log(e),201===e.status&&(j(!0),j(!0),j(!0))}))}(e)}},"hapus"),"||",u.a.createElement("a",{href:"#0",onClick:function(){return function(e){var t={id:e.id,judul:e.judul,nomor:e.nomor,tutor:e.tutor,deskripsi:e.Deskripsi,poin:e.poin,thumbnail:e.thumbnail,icon:e.icon,link_video:e.link_video,status:"publish"==e.status?"no publish":"publish",id_sub_bab:e.id_sub_bab};E.a.put("/video_materi",t).then((function(e){console.log(e),200==e.status&&(Se([]),ht(),j(!0))}))}(e)}},"publish"==e.status?"no publish":"publish")))}))}))})),ht=function(){E.a.get("/video_materi").then((function(e){Se(e.data)}))},vt=function(){""!==Qe&&E.a.get("/video_materi?id_sub_bab="+Qe).then((function(e){Se(e.data)}))};return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ht(),E.a.get("/bab_soal?id_mapel=1").then((function(e){Ae(e.data)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),""!==We&&E.a.get("/subBab_soal?id_bab="+We).then((function(e){Re(e.data)})),k&&(ht(),j(!1))}),[We,k]),u.a.createElement("div",{className:v.a.container},m?bt:ft)}},93:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=(n(94),n(73),n(74),n(91));t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{onDragEnd:e.handleOnDragEnd},r.a.createElement("table",{style:{width:"100%"}},r.a.createElement("thead",null,r.a.createElement("tr",null,e.thList.map((function(e,t){return r.a.createElement("th",{key:t},e)})))),r.a.createElement(l.c,{droppableId:e.dropID},(function(t,n){return r.a.createElement("tbody",Object.assign({ref:t.innerRef},t.droppableProps),e.tdList,t.placeholder)})))))}},94:function(e,t,n){},973:function(e,t,n){window,e.exports=function(e,t){return r={},n.m=a=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),l=function(e,t,n){var a,l=e.textContent;return""===l.trim()?{chunk:(a=n,{text:" ",inlines:[new r.OrderedSet],entities:[a],blocks:[]})}:{chunk:{text:l,inlines:Array(l.length).fill(t),entities:Array(l.length).fill(n),blocks:[]}}},i=function(){return{text:"\n",inlines:[new r.OrderedSet],entities:new Array(1),blocks:[]}},o=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new r.Map({})}]}},c=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new r.Map({})}]}},u=function(e){return{text:"\r ",inlines:[new r.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new r.Map({})}]}},s=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},d=new r.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),m={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function p(e){return e.style.textAlign?new r.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new r.Map({"margin-left":e.style.marginLeft}):void 0}var b=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,a.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,a.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return E}));var f=new RegExp("&nbsp;","g"),h=!0;function v(e,t,n,r,f,E){var g=e.nodeName.toLowerCase();if(E){var _=E(g,e);if(_){var y=a.Entity.__create(_.type,_.mutability,_.data||{});return{chunk:u(y)}}}if("#text"===g&&"\n"!==e.textContent)return l(e,t,f);if("br"===g)return{chunk:i()};if("img"===g&&e instanceof HTMLImageElement){var O={};O.src=e.getAttribute&&e.getAttribute("src")||e.src,O.alt=e.alt,O.height=e.style.height,O.width=e.style.width,e.style.float&&(O.alignment=e.style.float);var k=a.Entity.__create("IMAGE","MUTABLE",O);return{chunk:u(k)}}if("video"===g&&e instanceof HTMLVideoElement){var j={};j.src=e.getAttribute&&e.getAttribute("src")||e.src,j.alt=e.alt,j.height=e.style.height,j.width=e.style.width,e.style.float&&(j.alignment=e.style.float);var S=a.Entity.__create("VIDEO","MUTABLE",j);return{chunk:u(S)}}if("iframe"===g&&e instanceof HTMLIFrameElement){var w={};w.src=e.getAttribute&&e.getAttribute("src")||e.src,w.height=e.height,w.width=e.width;var C=a.Entity.__create("EMBEDDED_LINK","MUTABLE",w);return{chunk:u(C)}}var x,M=function(e,t){var n=d.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(g,r);M&&("ul"===g||"ol"===g?(r=g,n+=1):("unordered-list-item"!==M&&"ordered-list-item"!==M&&(r="",n=-1),h?(x=o(M,p(e)),h=!1):x=c(M,n,p(e)))),x=x||{text:"",inlines:[],entities:[],blocks:[]},t=function(e,t,n){var a,r=m[e];if(r)a=n.add(r).toOrderedSet();else if(t instanceof HTMLElement){var l=t;a=(a=n).withMutations((function(e){var t=l.style.color,n=l.style.backgroundColor,a=l.style.fontSize,r=l.style.fontFamily.replace(/^"|"$/g,""),i=l.style.fontWeight,o=l.style.textDecoration,c=l.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),a&&e.add("fontsize-".concat(a.replace(/px$/g,""))),r&&e.add("fontfamily-".concat(r)),"bold"===i&&e.add(m.strong),"underline"===o&&e.add(m.ins),"italic"===c&&e.add(m.em)})).toOrderedSet()}return a}(g,e,t);for(var T=e.firstChild;T;){var L=v(T,t,n,r,b(T)||f,E).chunk;x=s(x,L),T=T.nextSibling}return{chunk:x}}function E(e,t){var n,l,i=(n=t,(l=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n}(e.trim().replace(f," ")))?(h=!0,{chunk:v(l,new r.OrderedSet,-1,"",void 0,n).chunk}):null);if(i){var o=i.chunk,c=new r.OrderedMap({});o.entities&&o.entities.forEach((function(e){e&&(c=c.set(e,a.Entity.__get(e)))}));var u=0;return{contentBlocks:o.text.split("\r").map((function(e,t){var n=u+e.length,l=o&&o.inlines.slice(u,n),i=o&&o.entities.slice(u,n),c=new r.List(l.map((function(e,t){var n={style:e,entity:null};return i[t]&&(n.entity=i[t]),a.CharacterMetadata.create(n)})));return u=n,new a.ContentBlock({key:Object(a.genKey)(),type:o&&o.blocks[t]&&o.blocks[t].type||"unstyled",depth:o&&o.blocks[t]&&o.blocks[t].depth,data:o&&o.blocks[t]&&o.blocks[t].data||new r.Map({}),text:e,characterList:c})})),entityMap:c}}return null}}],n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var a,r}(n(69),n(349))},974:function(e,t,n){e.exports={container:"styles_container__mKMpn",panel_input_review:"styles_panel_input_review__1CGhU",editor_style:"styles_editor_style__8pyD7",modal:"styles_modal__1Hmed",modal_content:"styles_modal_content__25efA"}}}]);
//# sourceMappingURL=78.201e65ba.chunk.js.map