(this.webpackJsonpview=this.webpackJsonpview||[]).push([[173],{190:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(347);t.a=function(e){var t=a(317);return o.a.createElement(s.a,Object.assign({},s.b,{theme:t,code:e.code,language:e.language}),(function(e){var t=e.className,a=e.style,n=e.tokens,s=e.getLineProps,i=e.getTokenProps;return o.a.createElement("div",{className:"m-t-15"},o.a.createElement("pre",{className:t,style:a},o.a.createElement("code",{className:"language-markup"},n.map((function(e,t){return o.a.createElement("div",s({line:e,key:t}),e.map((function(e,t){return o.a.createElement("span",i({token:e,key:t}))})))})))))}))}},1919:function(e,t,a){"use strict";a.r(t);var n=a(31),o=a(12),s=a(13),i=a(30),l=a(15),r=a(14),c=a(0),u=a.n(c),h=a(64),m=a(63),d=a(65),p=a(218),f=a(1757),v=a.n(f),k=a(196),g=a.n(k),b=a(26),E=a(190),y=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={editing:!1},n}return Object(s.a)(a,[{key:"updatePosition",value:function(e){var t=e.position;this.style={left:t?t.xPos:this.randomBetween(0,window.innerWidth-280)+"px",top:t?t.yPos:this.randomBetween(0,window.innerHeight-280)+"px"}}},{key:"UNSAFE_componentWillMount",value:function(){this.updatePosition(this.props)}},{key:"componentWillUpdate",value:function(e){this.updatePosition(e)}},{key:"onDragStart",value:function(e){var t=this.props.index;e.dataTransfer.setData("application/x-note",t)}},{key:"randomBetween",value:function(e,t){return e+Math.ceil(Math.random()*t)}},{key:"edit",value:function(){this.setState({editing:!0})}},{key:"save",value:function(){var e=this.props.index;this.props.onChange(this.newText.value,e),this.setState({editing:!1})}},{key:"remove",value:function(){var e=this.props.index;this.props.onRemove(e)}},{key:"renderNoteBody",value:function(e,t){var a=this;return u.a.createElement("div",{draggable:"true",onDragStart:function(e){return a.onDragStart(e)},onDoubleClick:function(){return a.edit()},className:"note",style:this.style},u.a.createElement("article",null,u.a.createElement("header",{className:"note__header"},u.a.createElement("div",{className:"wrapper-tooltip"},u.a.createElement("span",{onClick:function(){return a.remove()},className:"close hairline"}),u.a.createElement("div",{className:"tooltip"},"Remove Note"))),u.a.createElement("div",{className:"note__content"},e),u.a.createElement("footer",{className:"note__footer"},u.a.createElement("div",{className:"note__fold"}),t?u.a.createElement("div",{className:"note__save",onClick:function(){return a.save()}},"SAVE"):"")))}},{key:"renderDisplay",value:function(){var e=this.props.children;return this.renderNoteBody(e)}},{key:"renderForm",value:function(){var e=this,t=this.props.children,a=u.a.createElement("div",null,u.a.createElement("textarea",{ref:function(t){return e.newText=t},defaultValue:t,className:"note__textarea"}));return this.renderNoteBody(a,!0)}},{key:"render",value:function(){return this.state.editing?this.renderForm():this.renderDisplay()}}]),a}(c.Component),w=[{note:"Industry's standard dummy text ever since the 1500s",position:!1},{note:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",position:!1},{note:"The point of using Lorem Ipsum is that it has a more-or-less",position:!1},{note:"A collection of textile samples lay spread out on the table One morning, when Gregor Samsa woke from troubled.",position:!1},{note:"There are many variations of passages of Lorem Ipsum",position:!1}],x=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={notes:[]},n}return Object(s.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("notesStorage"))||[];t.length>0?t.map((function(t){return e.add(t.note,t.position),!1})):w.map((function(t){return e.add(t.note,t.position),!1}))}},{key:"saveToStorage",value:function(e){this.setState({notes:e}),localStorage.setItem("notesStorage",JSON.stringify(e))}},{key:"nextId",value:function(){return this.uniqueId=this.uniqueId||0,this.uniqueId++}},{key:"add",value:function(e,t){var a=this.state.notes;a.push({id:this.nextId(this),note:e,position:t}),this.saveToStorage(a)}},{key:"update",value:function(e,t){var a=this.state.notes;a[t].note=e,this.saveToStorage(a)}},{key:"updatePosition",value:function(e,t){var a=this.state.notes;a[t].position=e,this.saveToStorage(a)}},{key:"remove",value:function(e){var t=this.state.notes;t.splice(e,1),this.saveToStorage(t)}},{key:"renderNotes",value:function(e,t){return u.a.createElement(y,{key:e.id,index:t,position:e.position,onChange:this.update.bind(this),onDrag:this.updatePosition.bind(this),onRemove:this.remove.bind(this)},e.note)}},{key:"onDragOver",value:function(e){e.preventDefault()}},{key:"onDrop",value:function(e){var t=e.dataTransfer.getData("application/x-note"),a={xPos:e.clientX,yPos:e.clientY};this.updatePosition(a,t)}},{key:"render",value:function(){var e=this,t=this.state.notes;return u.a.createElement("div",{className:"board",onDragOver:function(t){return e.onDragOver(t)},onDrop:function(t){return e.onDrop(t)}},u.a.createElement("header",{className:"main-header"},u.a.createElement("div",{className:"main-header__text fadein",onClick:this.add.bind(this,"New note :-)",!1)},"ADD NEW NOTE")),t.map(this.renderNotes.bind(this)))}}]),a}(c.Component),N=[{id:"3effea2c-fc90-98e0-51d0-22c32efb2177",text:"Hey I am Ajain... ",title:"Hello",grid:{i:"3effea2c-fc90-98e0-51d0-22c32efb2177",x:0,y:null,w:2,h:2,isDraggable:!1},contentEditable:!0,timeStamp:"13 Feb 2017 2:53 PM"},{id:"3effea2c-fc90-98e0-51d0-22c32efb2178",text:"If you liked stickies... contribute by liking it... ",title:"Contribute",grid:{i:"3effea2c-fc90-98e0-51d0-22c32efb2178",x:4,y:0,w:4,h:4,isDraggable:!1},contentEditable:!0,timeStamp:"13 Feb 2017 2:53 PM"}],C=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={notes:[],showTape:!1,showOutput:!0,showTitle:!0,showFooter:!0,output:"",colors:["#FFFFFF"],showCustomColors:!1,showMock:!1},n.toggleValue=n.toggleValue.bind(Object(i.a)(n)),n.onChange=n.onChange.bind(Object(i.a)(n)),n.fetchMock=n.fetchMock.bind(Object(i.a)(n)),n}return Object(s.a)(a,[{key:"toggleValue",value:function(e){this.setState(Object(n.a)({},e.target.name,!this.state[e.target.name]))}},{key:"onChange",value:function(e){this.setState({output:JSON.stringify(e,null,2),notes:e})}},{key:"fetchMock",value:function(){var e=this;this.setState({showMock:!0},(function(){e.setState({notes:N.default})}))}},{key:"render",value:function(){var e={};return this.state.showBound&&(e={height:"700px",width:"700px",background:"rgba(0, 0, 0, 0.2)",border:"2px solid #fff",overflow:"auto",padding:"10px"}),u.a.createElement(b.a,null,u.a.createElement(h.a,null,u.a.createElement(m.a,null,u.a.createElement(d.a,null,u.a.createElement(d.a.Header,null,u.a.createElement(d.a.Title,{as:"h5"},"Basic Notes")),u.a.createElement(d.a.Body,null,u.a.createElement(x,null))),u.a.createElement(d.a,null,u.a.createElement(d.a.Header,null,u.a.createElement(d.a.Title,{as:"h5"},"Sticky Notes")),u.a.createElement(d.a.Body,null,u.a.createElement(h.a,null,u.a.createElement(m.a,{md:3},u.a.createElement(p.a.Group,null,u.a.createElement("div",{className:"checkbox d-inline checkbox-fill checkbox-info"},u.a.createElement(p.a.Control,{type:"checkbox",name:"showTitle",id:"show-title",value:"show_title",defaultChecked:this.state.showTitle,onChange:this.toggleValue}),u.a.createElement(p.a.Label,{htmlFor:"show-title",className:"cr"},"Show Title"))),u.a.createElement(p.a.Group,null,u.a.createElement("div",{className:"checkbox d-inline checkbox-fill checkbox-info"},u.a.createElement(p.a.Control,{type:"checkbox",name:"showCustomColors",id:"custom-color",value:"show_custom_colors",defaultChecked:this.state.showCustomColors,onChange:this.toggleValue}),u.a.createElement(p.a.Label,{htmlFor:"custom-color",className:"cr"},"Custom Colors"))),u.a.createElement(p.a.Group,null,u.a.createElement("div",{className:"checkbox d-inline checkbox-fill checkbox-info"},u.a.createElement(p.a.Control,{type:"checkbox",name:"showTape",id:"show-tape",value:"show_tape",defaultChecked:this.state.showTape,onChange:this.toggleValue}),u.a.createElement(p.a.Label,{htmlFor:"show-tape",className:"cr"},"Show Tape"))),u.a.createElement(p.a.Group,null,u.a.createElement("div",{className:"checkbox d-inline checkbox-fill checkbox-info"},u.a.createElement(p.a.Control,{type:"checkbox",name:"showOutput",id:"show-output",value:"show_output",defaultChecked:this.state.showOutput,onChange:this.toggleValue}),u.a.createElement(p.a.Label,{htmlFor:"show-output",className:"cr"},"Show Output"))),u.a.createElement(p.a.Group,null,u.a.createElement("div",{className:"checkbox d-inline checkbox-fill checkbox-info"},u.a.createElement(p.a.Control,{type:"checkbox",name:"showFooter",id:"show-footer",value:"show_title",defaultChecked:this.state.showFooter,onChange:this.toggleValue}),u.a.createElement(p.a.Label,{htmlFor:"show-footer",className:"cr"},"Show Footer"))),u.a.createElement(p.a.Group,null,u.a.createElement("div",{className:"checkbox d-inline checkbox-fill checkbox-info"},u.a.createElement(p.a.Control,{type:"checkbox",name:"showMock",id:"show-mock",value:"show_mock",defaultChecked:this.state.showMock,onChange:this.fetchMock}),u.a.createElement(p.a.Label,{htmlFor:"show-mock",className:"cr"},"Load Mock Data")))),u.a.createElement(m.a,{md:9},u.a.createElement(v.a,{notes:this.state.notes,tape:this.state.showTape,style:{float:"left"},colors:this.state.showCustomColors?this.state.colors:void 0,title:this.state.showTitle,footer:this.state.showFooter,onChange:this.onChange,wrapperStyle:e}))),u.a.createElement(h.a,null,u.a.createElement(m.a,null,u.a.createElement("div",{className:"config"},u.a.createElement("div",{className:"output",style:{display:this.state.showOutput?"block":"none"}},u.a.createElement("h3",null,"Output JSON"),u.a.createElement("hr",null),u.a.createElement("div",{style:{height:"500px"}},u.a.createElement(g.a,null,u.a.createElement(E.a,{code:this.state.output,language:"json"}))))))))))))}}]),a}(u.a.Component);C.defaultProps={};t.default=C}}]);
//# sourceMappingURL=173.05a7a713.chunk.js.map