(this.webpackJsonpview=this.webpackJsonpview||[]).push([[139],{1916:function(e,a,t){"use strict";t.r(a);var r=t(12),n=t(13),c=t(15),s=t(14),o=t(0),l=t.n(o),i=t(64),u=t(63),d=t(65),f=(t(206),t(261),t(262)),b=t.n(f),m=t(26),v=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).updateContent=function(e){n.setState({content:e})},n.setRef=function(e){return n.jodit=e},n.config={readonly:!1},n.state={content:"Hello..."},n}return Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement(i.a,null,l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement(d.a.Header,null,l.a.createElement(d.a.Title,{as:"h5"},"Jodit WYSIWYG Editor")),l.a.createElement(d.a.Body,null,l.a.createElement(b.a,{editorRef:this.setRef,value:this.state.content,config:this.config,onChange:this.updateContent}))))))}}]),t}(l.a.Component);a.default=v},59:function(e,a,t){"use strict";var r=t(0),n=t.n(r).a.createContext(null);n.displayName="CardContext",a.a=n},60:function(e,a,t){"use strict";var r=t(55),n=t(0),c=t.n(n),s=t(54),o=t.n(s);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:o()(a.className,e)}))}))}},63:function(e,a,t){"use strict";var r=t(55),n=t(56),c=t(54),s=t.n(c),o=t(0),l=t.n(o),i=t(57),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.as,d=void 0===o?"div":o,f=Object(n.a)(e,["bsPrefix","className","as"]),b=Object(i.a)(t,"col"),m=[],v=[];return u.forEach((function(e){var a,t,r,n=f[e];if(delete f[e],"object"===typeof n&&null!=n){var c=n.span;a=void 0===c||c,t=n.offset,r=n.order}else a=n;var s="xs"!==e?"-"+e:"";a&&m.push(!0===a?""+b+s:""+b+s+"-"+a),null!=r&&v.push("order"+s+"-"+r),null!=t&&v.push("offset"+s+"-"+t)})),m.length||m.push(b),l.a.createElement(d,Object(r.a)({},f,{ref:a,className:s.a.apply(void 0,[c].concat(m,v))}))}));d.displayName="Col",a.a=d},64:function(e,a,t){"use strict";var r=t(55),n=t(56),c=t(54),s=t.n(c),o=t(0),l=t.n(o),i=t(57),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.noGutters,d=e.as,f=void 0===d?"div":d,b=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(i.a)(t,"row"),v=m+"-cols",p=[];return u.forEach((function(e){var a,t=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&p.push(""+v+r+"-"+a)})),l.a.createElement(f,Object(r.a)({ref:a},b,{className:s.a.apply(void 0,[c,m,o&&"no-gutters"].concat(p))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},65:function(e,a,t){"use strict";var r=t(55),n=t(56),c=t(54),s=t.n(c),o=t(0),l=t.n(o),i=t(57),u=t(61),d=t(60),f=t(59),b=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(i.a)(t,"card-img");return l.a.createElement(d,Object(r.a)({ref:a,className:s()(o?b+"-"+o:b,c)},f))}));b.displayName="CardImg",b.defaultProps={variant:null};var m=b,v=Object(d.a)("h5"),p=Object(d.a)("h6"),j=Object(u.a)("card-body"),O=Object(u.a)("card-title",{Component:v}),h=Object(u.a)("card-subtitle",{Component:p}),x=Object(u.a)("card-link",{Component:"a"}),y=Object(u.a)("card-text",{Component:"p"}),N=Object(u.a)("card-header"),E=Object(u.a)("card-footer"),g=Object(u.a)("card-img-overlay"),C=l.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,u=e.bg,d=e.text,b=e.border,m=e.body,v=e.children,p=e.as,O=void 0===p?"div":p,h=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(i.a)(t,"card"),y=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return l.a.createElement(f.a.Provider,{value:y},l.a.createElement(O,Object(r.a)({ref:a},h,{className:s()(c,x,u&&"bg-"+u,d&&"text-"+d,b&&"border-"+b)}),m?l.a.createElement(j,null,v):v))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=m,C.Title=O,C.Subtitle=h,C.Body=j,C.Link=x,C.Text=y,C.Header=N,C.Footer=E,C.ImgOverlay=g;a.a=C}}]);
//# sourceMappingURL=139.9bdd6c1c.chunk.js.map